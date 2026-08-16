"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0e1713", color: "#f4eee1", fontFamily: "sans-serif" }}>
        <main style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem" }}>
          <div>
            <p style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "#c2a24c" }}>
              {error.digest ? `Error ${error.digest}` : "Something went wrong"}
            </p>
            <h1 style={{ fontSize: "2.5rem", margin: "1rem 0" }}>We&apos;ll be right back.</h1>
            <button
              type="button"
              onClick={reset}
              style={{ background: "#c2a24c", color: "#0e1713", border: 0, padding: "0.9rem 2rem", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", cursor: "pointer" }}
            >
              Try Again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
