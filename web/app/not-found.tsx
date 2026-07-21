import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "2rem", background: "#f7faf5" }}>
      <div style={{ maxWidth: "480px", textAlign: "center", padding: "2.5rem", borderRadius: "24px", background: "white", boxShadow: "0 20px 40px -24px rgba(1,45,29,.22)" }}>
        <h2 style={{ margin: "0 0 0.75rem", color: "#012d1d" }}>Page not found</h2>
        <p style={{ margin: "0 0 1.25rem", color: "#5d5f59" }}>The page you are looking for doesn’t exist or may have moved.</p>
        <Link href="/" style={{ display: "inline-block", padding: "0.85rem 1.2rem", borderRadius: "999px", background: "#cba72f", color: "#241a00", fontWeight: 700 }}>
          Return home
        </Link>
      </div>
    </main>
  );
}
