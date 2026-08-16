"use client";

import { useActionState } from "react";
import { inquire, type InquireState } from "./actions";

const initialState: InquireState = { status: "idle" };

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

export default function InquiryForm() {
  const [state, formAction, pending] = useActionState(inquire, initialState);

  if (state.status === "success") {
    return (
      <div role="status" className="border border-brass/50 bg-cream p-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brass-dark">
          Message sent
        </p>
        <h2 className="mt-4 font-display text-3xl text-ink">Thank you.</h2>
        <p className="mt-4 max-w-md leading-relaxed text-ink/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore.
        </p>
      </div>
    );
  }

  const err = (field: string) => state.fieldErrors?.[field];

  return (
    <form action={formAction} noValidate className="space-y-6">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="inq-name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
            Name
          </label>
          <input id="inq-name" name="name" type="text" autoComplete="name" required placeholder="Your name"
            aria-invalid={!!err("name")} aria-describedby={err("name") ? "inq-name-error" : undefined}
            className={inputClass} />
          <FieldError id="inq-name-error" message={err("name")} />
        </div>
        <div>
          <label htmlFor="inq-email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
            Email
          </label>
          <input id="inq-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com"
            aria-invalid={!!err("email")} aria-describedby={err("email") ? "inq-email-error" : undefined}
            className={inputClass} />
          <FieldError id="inq-email-error" message={err("email")} />
        </div>
      </div>
      <div>
        <label htmlFor="inq-message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink/60">
          Message
        </label>
        <textarea id="inq-message" name="message" rows={5} required maxLength={2000} placeholder="How can we help?"
          aria-invalid={!!err("message")} aria-describedby={err("message") ? "inq-message-error" : undefined}
          className={inputClass} />
        <FieldError id="inq-message-error" message={err("message")} />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="bg-forest px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:bg-forest-soft disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
