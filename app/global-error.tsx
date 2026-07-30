"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#000",
          color: "#fff",
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          minHeight: "100dvh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
            Something went wrong
          </h1>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              background: "transparent",
              border: "none",
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
