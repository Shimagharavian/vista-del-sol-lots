import Image from "next/image";

export default function Home() {
  return (
    <main style={{ padding: 32, maxWidth: 1100, margin: "0 auto" }}>
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 42, margin: 0 }}>Vista del Sol</h1>
        <p style={{ marginTop: 10, fontSize: 18, color: "#444" }}>
          41 lots available • Starting at $140,000 • Call{" "}
          <a href="tel:5126608405" style={{ fontWeight: 700 }}>
            512-660-8405
          </a>
        </p>
      </header>

      <section
        style={{
          border: "1px solid #e5e5e5",
          borderRadius: 16,
          padding: 16,
          background: "white"
        }}
      >
        <h2 style={{ marginTop: 0 }}>Subdivision Plan</h2>

        <div
          style={{
            position: "relative",
            width: "100%",
            height: 700,
            borderRadius: 12,
            overflow: "hidden",
            background: "#f7f7f7"
          }}
        >
          <Image
            src="/plat/plan.png"
            alt="Vista del Sol subdivision plan"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        <p style={{ marginTop: 12, color: "#666" }}>
          Lot boundaries, numbers, and acreages shown as per the plat. Availability
          will be updated.
        </p>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2>Request Information</h2>
        <form
          style={{
            display: "grid",
            gap: 12,
            maxWidth: 520,
            padding: 16,
            border: "1px solid #e5e5e5",
            borderRadius: 16,
            background: "white"
          }}
        >
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
          <input placeholder="Email" />
          <input placeholder="Phone Number" />
          <button
            type="button"
            style={{
              padding: "12px 14px",
              borderRadius: 12,
              border: "none",
              background: "black",
              color: "white",
              fontWeight: 700,
              cursor: "pointer"
            }}
          >
            Request More Information
          </button>
        </form>
      </section>

      <section style={{ marginTop: 28 }}>
        <h2>Location</h2>
        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid #e5e5e5",
            background: "white"
          }}
        >
          <iframe
            title="Google Map"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps?q=Elgin%20TX%2078621&output=embed"
          />
        </div>
      </section>

      <footer style={{ marginTop: 40, paddingBottom: 30, color: "#666" }}>
        © {new Date().getFullYear()} Vista del Sol •{" "}
        <a href="tel:5126608405">512-660-8405</a>
      </footer>
    </main>
  );
}
