"use client";

import { useEffect, useState } from "react";
import { useActionState } from "react";
import { reserve, type ReserveState } from "./actions";

const initialState: ReserveState = { status: "idle" };

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

const inputClass =
  "w-full border border-ink/25 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-brass focus:outline-none";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm text-red-700">
      {message}
    </p>
  );
}

export default function ReservationForm() {
  const [state, formAction, pending] = useActionState(reserve, initialState);
  const [today, setToday] = useState("");

  useEffect(() => {
    const now = new Date();
    // One-shot client-side default only: set after hydration so the server
    // HTML stays timezone-independent (no hydration mismatch).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToday(
      new Date(now.getTime() - now.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 10)
    );
  }, []);

  if (state.status === "success") {
    return (
      <div role="status" className="border border-brass/50 bg-cream p-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brass-dark">
          Request received
        </p>
        <h2 className="mt-4 font-display text-3xl text-ink">
          We&apos;ll be in touch to confirm.
        </h2>
        <p className="mt-4 max-w-md leading-relaxed text-ink/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    );
  }

  const err = (field: string) => state.fieldErrors?.[field];

  return (
    <form action={formAction} noValidate className="space-y-6">
      {/* Honeypot — hidden from humans, tempting to bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      {state.status === "error" && state.message && !state.fieldErrors ? (
        <p role="alert" className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="res-name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
            Name
          </label>
          <input id="res-name" name="name" type="text" autoComplete="name" required placeholder="Your name"
            aria-invalid={!!err("name")} aria-describedby={err("name") ? "res-name-error" : undefined}
            className={inputClass} />
          <FieldError id="res-name-error" message={err("name")} />
        </div>
        <div>
          <label htmlFor="res-email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
            Email
          </label>
          <input id="res-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com"
            aria-invalid={!!err("email")} aria-describedby={err("email") ? "res-email-error" : undefined}
            className={inputClass} />
          <FieldError id="res-email-error" message={err("email")} />
        </div>
        <div>
          <label htmlFor="res-phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
            Phone <span className="normal-case text-ink/40">(optional)</span>
          </label>
          <input id="res-phone" name="phone" type="tel" autoComplete="tel" placeholder="+1 (555) 000-0000"
            aria-invalid={!!err("phone")} aria-describedby={err("phone") ? "res-phone-error" : undefined}
            className={inputClass} />
          <FieldError id="res-phone-error" message={err("phone")} />
        </div>
        <div>
          <label htmlFor="res-party" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
            Party size
          </label>
          <select id="res-party" name="party" required defaultValue="2"
            aria-invalid={!!err("party")} aria-describedby={err("party") ? "res-party-error" : undefined}
            className={inputClass}>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
          <FieldError id="res-party-error" message={err("party")} />
        </div>
        <div>
          <label htmlFor="res-date" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
            Date
          </label>
          <input id="res-date" name="date" type="date" required min={today || undefined}
            aria-invalid={!!err("date")} aria-describedby={err("date") ? "res-date-error" : undefined}
            className={inputClass} />
          <FieldError id="res-date-error" message={err("date")} />
        </div>
        <div>
          <label htmlFor="res-time" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
            Time
          </label>
          <select id="res-time" name="time" required defaultValue=""
            aria-invalid={!!err("time")} aria-describedby={err("time") ? "res-time-error" : undefined}
            className={inputClass}>
            <option value="" disabled>
              Select a time
            </option>
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          <FieldError id="res-time-error" message={err("time")} />
        </div>
      </div>

      <div>
        <label htmlFor="res-notes" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
          Notes <span className="normal-case text-ink/40">(optional)</span>
        </label>
        <textarea id="res-notes" name="notes" rows={4} maxLength={500} placeholder="Allergies, special occasions…"
          aria-invalid={!!err("notes")} aria-describedby={err("notes") ? "res-notes-error" : undefined}
          className={inputClass} />
        <FieldError id="res-notes-error" message={err("notes")} />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-forest px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:bg-forest-soft disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending…" : "Request Reservation"}
      </button>
    </form>
  );
}
