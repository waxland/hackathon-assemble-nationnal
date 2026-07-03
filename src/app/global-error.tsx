"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="fr">
      <body>
        <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
          <h1>Une erreur inattendue s'est produite</h1>
          <button onClick={reset}>Réessayer</button>
        </main>
      </body>
    </html>
  );
}
