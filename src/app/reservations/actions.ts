"use server";

import { headers } from "next/headers";
import { isEmail, isHoneypotFilled, isPhone, sanitize } from "@/lib/validate";

export type ReserveState = {
  status: "idle" | "error" | "success";
  message?: string;
  fieldErrors?: Record<string, string>;
};

const TIME_SLOTS = [
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
];

// In-memory rate limiter: max 4 submissions per IP per 10 minutes.
// (Per-process only — a production deploy would use a shared store.)
const submissions = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissions.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  if (recent.length >= 4) return true;
  recent.push(now);
  submissions.set(ip, recent);
  return false;
}

export async function reserve(
  _prevState: ReserveState,
  formData: FormData
): Promise<ReserveState> {
  const ip =
    (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "Too many requests. Please try again in a few minutes.",
    };
  }

  const name = sanitize(formData.get("name")?.toString() ?? "");
  const email = sanitize(formData.get("email")?.toString() ?? "");
  const phone = sanitize(formData.get("phone")?.toString() ?? "");
  const date = sanitize(formData.get("date")?.toString() ?? "");
  const time = sanitize(formData.get("time")?.toString() ?? "");
  const party = sanitize(formData.get("party")?.toString() ?? "");
  const notes = sanitize(formData.get("notes")?.toString() ?? "");
  const honeypot = formData.get("company")?.toString() ?? "";

  if (isHoneypotFilled(honeypot)) {
    // Bot submission — respond neutrally.
    return { status: "success" };
  }

  const fieldErrors: Record<string, string> = {};
  if (name.length < 2 || name.length > 80) {
    fieldErrors.name = "Please enter your name.";
  }
  if (email.length > 254 || !isEmail(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (phone && !isPhone(phone)) {
    fieldErrors.phone = "Please enter a valid phone number.";
  }
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dateObj = new Date(`${date}T00:00:00`);
  if (!date || Number.isNaN(dateObj.getTime()) || dateObj.getTime() < today.getTime()) {
    fieldErrors.date = "Please choose a future date.";
  }
  if (!TIME_SLOTS.includes(time)) {
    fieldErrors.time = "Please choose a seating time.";
  }
  const partyNum = Number(party);
  if (!Number.isInteger(partyNum) || partyNum < 1 || partyNum > 12) {
    fieldErrors.party = "Party size must be between 1 and 12.";
  }
  if (notes.length > 500) {
    fieldErrors.notes = "Notes must be under 500 characters.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      fieldErrors,
    };
  }

  // Demo: no persistence. A production build would write to a booking
  // system / database and send a confirmation here.
  return { status: "success" };
}
