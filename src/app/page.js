export default function Home() {
  const libros = [
    { id: 1, titulo: "Pedro Páramo", autor: "Juan Rulfo", genero: "Literatura Mexicana", anio: "1955", cond: "Muy bueno", encuad: "Rústica", primeraEd: true, camisa: "No aplica", precio: 3200, vendedor: "Librería El Murciélago", color: "#2C1A0E" },
    { id: 2, titulo: "El laberinto de la soledad", autor: "Octavio Paz", genero: "Ensayo", anio: "1950", cond: "Bueno", encuad: "Rústica", primeraEd: true, camisa: "No aplica", precio: 1850, vendedor: "Casa del Libro Antiguo", color: "#1A2C1A" },
    { id: 3, titulo: "Muerte sin fin", autor: "José Gorostiza", genero: "Poesía", anio: "1939", cond: "Excelente", encuad: "Tapa dura", primeraEd: true, camisa: "Muy buena", precio: 4500, vendedor: "Bibliofilia MX", color: "#2C2210" },
    { id: 4, titulo: "Al filo del agua", autor: "Agustín Yáñez", genero: "Literatura Mexicana", anio: "1947", cond: "Como nuevo", encuad: "Tapa dura", primeraEd: false, camisa: "Buena", precio: 2100, vendedor: "Librería El Murciélago", color: "#1C1C2C" },
    { id: 5, titulo: "Recuerdos del porvenir", autor: "Elena Garro", genero: "Literatura Mexicana", anio: "1963", cond: "Aceptable", encuad: "Rústica", primeraEd: true, camisa: "No aplica", precio: 1600, vendedor: "La Abeja Lectora", color: "#2C1818" },
    { id: 6, titulo: "Los de abajo", autor: "Mariano Azuela", genero: "Historia", anio: "1915", cond: "Bueno", encuad: "Tapa dura", primeraEd: false, camisa: "Aceptable", precio: 5800, vendedor: "Bibliofilia MX", color: "#182018" },
  ];

  const vendedores = [
    { nombre: "Librería el Murciélago", ciudad: "Ciudad de México", rating: 4.9, ventas: 342, años: 12, desc: "Especialistas en literatura mexicana del siglo XX.", inicial: "P" },
    { nombre: "Bibliofilia MX", ciudad: "Guadalajara, Jal.", rating: 4.8, ventas: 218, años: 8, desc: "Coleccionistas de primeras ediciones y libros agotados.", inicial: "B" },
    { nombre: "La Abeja Lectora", ciudad: "Monterrey, N.L.", rating: 4.7, ventas: 156, años: 5, desc: "Librería de viejo con énfasis en poesía y teatro.", inicial: "A" },
    { nombre: "Casa del Libro Antiguo", ciudad: "Oaxaca, Oax.", rating: 5.0, ventas: 89, años: 15, desc: "Especialistas en historia regional y etnografía mexicana.", inicial: "C" },
  ];

  const categorias = [
    { icon: "📜", nombre: "Narrativa", count: "2,340" },
    { icon: "🏛️", nombre: "Historia", count: "1,820" },
    { icon: "✒️", nombre: "Poesía", count: "940" },
    { icon: "🎨", nombre: "Arte", count: "610" },
    { icon: "🔭", nombre: "Ciencia", count: "780" },
    { icon: "🧠", nombre: "Filosofía", count: "530" },
    { icon: "📖", nombre: "Primeras ediciones", count: "420" },
    { icon: "🗺️", nombre: "Ciencias sociales", count: "310" },
    { icon: "🎭", nombre: "Teatro", count: "280" },
    { icon: "📰", nombre: "Periodismo", count: "195" },
  ];

  return (
    <main style={{ background: "#F5EFE0", color: "#1C1409", fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 3rem", background: "#F5EFE0", borderBottom: "1px solid rgba(28,20,9,.15)" }}>
        <a href="/" style={{ fontFamily: "Georgia, serif", fontSize: "1.6rem", fontWeight: 600, color: "#1C1409", textDecoration: "none" }}>
          El <span style={{ color: "#B8502E", fontStyle: "italic" }}>Volador</span>
        </a>
        <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
          {["Catálogo", "Librerías", "Busco un libro", "Secciones"].map(item => (
            <li key={item}><a href="#" style={{ textDecoration: "none", color: "#7A6F5E", fontSize: ".75rem", letterSpacing: ".1em", textTransform: "uppercase" }}>{item}</a></li>
          ))}
        </ul>
        <button style={{ background: "#B8502E", color: "#fff", border: "none", borderRadius: "2px", padding: ".52rem 1.4rem", fontFamily: "sans-serif", fontSize: ".75rem", cursor: "pointer", letterSpacing: ".1em", textTransform: "uppercase" }}>
          Carrito
        </button>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "55% 45%", paddingTop: "65px" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "6rem 4rem 6rem 5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: ".8rem", marginBottom: "1.5rem" }}>
            <div style={{ width: "30px", height: "1px", background: "#B8502E" }}></div>
            <span style={{ fontSize: ".7rem", letterSpacing: ".18em", textTransform: "uppercase", color: "#B8502E" }}>Marketplace de Libros de Segunda Mano</span>
          </div>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(3rem, 5.5vw, 5rem)", fontWeight: 300, lineHeight: 1.05, marginBottom: "1.8rem" }}>
            El lugar donde<br />los libros <em style={{ fontStyle: "italic", color: "#B8502E" }}>vuelven a volar</em>
          </h1>
          <p style={{ maxWidth: "400px", lineHeight: 1.8, color: "#7A6F5E", fontSize: ".92rem", marginBottom: "2.8rem" }}>
            Compra y vende libros usados, raros y antiguos en México. Desde el ejemplar que buscas desde hace años hasta la joya que encontraste en una caja olvidada.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button style={{ background: "#1C1409", color: "#F5EFE0", border: "none", borderRadius: "2px", padding: ".85rem 2.2rem", fontSize: ".78rem", cursor: "pointer", letterSpacing: ".1em", textTransform: "uppercase" }}>Explorar catálogo</button>
            <button style={{ background: "none", color: "#1C1409", border: "1px solid rgba(28,20,9,.15)", borderRadius: "2px", padding: ".85rem 2.2rem", fontSize: ".78rem", cursor: "pointer", letterSpacing: ".1em", textTransform: "uppercase" }}>Busco un libro</button>
          </div>
          <div style={{ display: "flex", gap: "3rem", marginTop: "3.5rem", paddingTop: "2.5rem", borderTop: "1px solid rgba(28,20,9,.15)" }}>
            {[["12,400+", "Libros disponibles"], ["340", "Librerías activas"], ["32", "Estados de México"]].map(([num, label]) => (
              <div key={label}>
                <span style={{ fontFamily: "Georgia, serif", fontSize: "2rem", fontWeight: 600, display: "block" }}>{num}</span>
                <span style={{ fontSize: ".7rem", letterSpacing: ".1em", textTransform: "uppercase", color: "#7A6F5E" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "#EAE0C8", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "relative", width: "240px", height: "320px" }}>
            <div style={{ position: "absolute", top: 0, left: 0, zIndex: 2, width: "162px", background: "#1C1409", color: "#F5EFE0", padding: "1.8rem 1.4rem", boxShadow: "14px 14px 0 #B8502E", fontFamily: "Georgia, serif" }}>
              <div style={{ fontSize: ".6rem", letterSpacing: ".14em", textTransform: "uppercase", opacity: .6, marginBottom: ".5rem", fontFamily: "sans-serif" }}>Primera Edición · 1955</div>
              <div style={{ fontSize: "1.1rem", lineHeight: 1.25, marginBottom: ".4rem" }}>Pedro Páramo</div>
              <div style={{ fontSize: ".72rem", opacity: .65, fontFamily: "sans-serif" }}>Juan Rulfo</div>
              <div style={{ marginTop: "1rem", fontSize: ".95rem", fontWeight: 500, color: "#C49A3C", fontFamily: "sans-serif" }}>$3,200 MXN</div>
            </div>
            <div style={{ position: "absolute", top: "70px", left: "80px", zIndex: 1, width: "162px", background: "#B8502E", color: "#F5EFE0", padding: "1.8rem 1.4rem", boxShadow: "10px 10px 0 rgba(28,20,9,.25)", fontFamily: "Georgia, serif" }}>
              <div style={{ fontSize: ".6rem", letterSpacing: ".14em", textTransform: "uppercase", opacity: .6, marginBottom: ".5rem", fontFamily: "sans-serif" }}>Poesía · 1939</div>
              <div style={{ fontSize: "1.1rem", lineHeight: 1.25, marginBottom: ".4rem" }}>Muerte sin fin</div>
              <div style={{ fontSize: ".72rem", opacity: .65, fontFamily: "sans-serif" }}>José Gorostiza</div>
              <div style={{ marginTop: "1rem", fontSize: ".95rem", fontWeight: 500, color: "rgba(245,239,224,.85)", fontFamily: "sans-serif" }}>$4,500 MXN</div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div style={{ background: "#1C1409", color: "#F5EFE0", padding: ".7rem 0", overflow: "hidden", whiteSpace: "nowrap" }}>
        <div style={{ display: "inline-flex", animation: "marquee 28s linear infinite" }}>
          {["Envíos a todo México", "MercadoPago · Tarjeta · OXXO Pay · SPEI", "Vendedores verificados", "Fichas completas · Fotos reales · Condición detallada", "Libros usados · Raros · Antiguos · Primeras ediciones",
            "Envíos a todo México", "MercadoPago · Tarjeta · OXXO Pay · SPEI", "Vendedores verificados", "Fichas completas · Fotos reales · Condición detallada", "Libros usados · Raros · Antiguos · Primeras ediciones"].map((item, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: ".9rem", padding: "0 2.5rem", fontSize: ".7rem", letterSpacing: ".12em", textTransform: "uppercase" }}>
              <span style={{ width: "4px", height: "4px", background: "#C49A3C", borderRadius: "50%", flexShrink: 0 }}></span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* CATÁLOGO */}
      <section style={{ padding: "5rem" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem" }}>
          <div>
            <div style={{ fontSize: ".7rem", letterSpacing: ".16em", textTransform: "uppercase", color: "#B8502E", marginBottom: ".5rem" }}>Catálogo</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2.4rem", fontWeight: 300 }}>Recién <em>ingresados</em></h2>
          </div>
          <a href="#" style={{ fontSize: ".72rem", letterSpacing: ".1em", textTransform: "uppercase", color: "#7A6F5E", textDecoration: "none", borderBottom: "1px solid #7A6F5E" }}>Ver todo</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "2.2rem" }}>
          {libros.map(l => (
            <div key={l.id} style={{ cursor: "pointer" }}>
              <div style={{ width: "100%", aspectRatio: "2/3", background: l.color, position: "relative", marginBottom: "1.1rem", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,.62) 0%, transparent 50%)" }}></div>
                <div style={{ position: "absolute", bottom: "1.2rem", left: "1.2rem", right: "1.2rem", zIndex: 1 }}>
                  <div style={{ fontSize: ".58rem", letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.65)", marginBottom: ".35rem" }}>{l.genero} · {l.anio}</div>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: "1rem", color: "#fff", lineHeight: 1.2 }}>{l.titulo}</div>
                </div>
                <span style={{ position: "absolute", top: ".75rem", left: ".75rem", zIndex: 2, background: "rgba(28,20,9,.65)", color: "#fff", fontSize: ".58rem", letterSpacing: ".1em", textTransform: "uppercase", padding: ".22rem .6rem" }}>{l.cond}</span>
                {l.primeraEd && <span style={{ position: "absolute", top: ".75rem", right: ".75rem", zIndex: 2, background: "#C49A3C", color: "#1C1409", fontSize: ".58rem", letterSpacing: ".1em", textTransform: "uppercase", padding: ".22rem .6rem" }}>1ª ed.</span>}
              </div>
              <div style={{ fontSize: ".76rem", color: "#7A6F5E", marginBottom: ".25rem" }}>{l.autor}</div>
              <div style={{ fontFamily: "Georgia, serif", fontSize: "1rem", marginBottom: ".3rem", lineHeight: 1.2 }}>{l.titulo}</div>
              <div style={{ display: "flex", gap: ".4rem", flexWrap: "wrap", marginBottom: ".4rem" }}>
                <span style={{ fontSize: ".62rem", letterSpacing: ".06em", textTransform: "uppercase", border: "1px solid rgba(28,20,9,.15)", padding: ".15rem .5rem", color: "#7A6F5E" }}>{l.encuad}</span>
                {l.camisa !== "No aplica" && <span style={{ fontSize: ".62rem", letterSpacing: ".06em", textTransform: "uppercase", border: "1px solid rgba(28,20,9,.15)", padding: ".15rem .5rem", color: "#7A6F5E" }}>Camisa: {l.camisa}</span>}
              </div>
              <div style={{ fontSize: ".68rem", color: "#7A6F5E", marginBottom: ".6rem" }}>Por <a href="#" style={{ color: "#B8502E", textDecoration: "none" }}>{l.vendedor}</a></div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ fontFamily: "Georgia, serif", fontSize: "1.15rem", fontWeight: 600 }}>${l.precio.toLocaleString()} <small style={{ fontSize: ".68rem", color: "#7A6F5E", fontFamily: "sans-serif", fontWeight: 300 }}>MXN</small></div>
                <button style={{ background: "none", border: "1px solid rgba(28,20,9,.15)", width: "30px", height: "30px", borderRadius: "50%", cursor: "pointer", fontSize: ".9rem", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BANNER */}
      <div style={{ margin: "0 5rem 5rem", background: "#1C1409", color: "#F5EFE0", padding: "3.5rem 5rem", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: "3rem" }}>
        <div>
          <div style={{ fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase", color: "#C49A3C", marginBottom: ".6rem" }}>¿Tienes libros que ya no lees?</div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2rem", fontWeight: 300, lineHeight: 1.2, marginBottom: ".6rem" }}>Dales una <em style={{ color: "#C49A3C" }}>segunda vida</em> y llega a lectores en todo México</h2>
          <p style={{ fontSize: ".85rem", color: "rgba(245,239,224,.6)", maxWidth: "480px", lineHeight: 1.7 }}>Vende cualquier libro usado con una ficha completa y fotos reales. Sin comisiones fijas los primeros 3 meses.</p>
        </div>
        <button style={{ background: "#B8502E", color: "#fff", border: "none", borderRadius: "2px", padding: ".9rem 2.2rem", fontSize: ".75rem", cursor: "pointer", letterSpacing: ".1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Quiero vender aquí</button>
      </div>

      {/* VENDEDORES */}
      <section style={{ padding: "5rem" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem" }}>
          <div>
            <div style={{ fontSize: ".7rem", letterSpacing: ".16em", textTransform: "uppercase", color: "#B8502E", marginBottom: ".5rem" }}>Librerías</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2.4rem", fontWeight: 300 }}>Vendedores <em>destacados</em></h2>
          </div>
          <a href="#" style={{ fontSize: ".72rem", letterSpacing: ".1em", textTransform: "uppercase", color: "#7A6F5E", textDecoration: "none", borderBottom: "1px solid #7A6F5E" }}>Ver todos</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {vendedores.map(v => (
            <div key={v.nombre} style={{ border: "1px solid rgba(28,20,9,.15)", padding: "1.8rem", cursor: "pointer" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "50%", background: "#EAE0C8", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Georgia, serif", fontSize: "1.4rem", fontWeight: 600, color: "#B8502E", flexShrink: 0 }}>{v.inicial}</div>
                <div>
                  <div style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", fontWeight: 600, marginBottom: ".2rem" }}>{v.nombre}</div>
                  <div style={{ fontSize: ".72rem", color: "#7A6F5E" }}>📍 {v.ciudad}</div>
                </div>
              </div>
              <div style={{ color: "#C49A3C", fontSize: ".85rem" }}>{"★".repeat(Math.floor(v.rating))}<span style={{ color: "#7A6F5E", fontSize: ".72rem", marginLeft: ".3rem" }}>{v.rating} · {v.ventas} ventas</span></div>
              <p style={{ fontSize: ".82rem", color: "#7A6F5E", lineHeight: 1.65, margin: ".8rem 0 1rem" }}>{v.desc}</p>
              <div style={{ display: "flex", gap: "1.5rem", paddingTop: "1rem", borderTop: "1px solid rgba(28,20,9,.15)" }}>
                {[[v.ventas, "Ventas"], [v.años, "Años activo"], [v.rating, "Calificación"]].map(([num, label]) => (
                  <div key={label} style={{ textAlign: "center" }}>
                    <span style={{ fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: 600, display: "block" }}>{num}</span>
                    <span style={{ fontSize: ".65rem", letterSpacing: ".08em", textTransform: "uppercase", color: "#7A6F5E" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section style={{ padding: "5rem" }}>
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ fontSize: ".7rem", letterSpacing: ".16em", textTransform: "uppercase", color: "#B8502E", marginBottom: ".5rem" }}>Géneros</div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "2.4rem", fontWeight: 300 }}>Explorar por <em>categoría</em></h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(138px, 1fr))", gap: ".8rem" }}>
          {categorias.map(c => (
            <div key={c.nombre} style={{ aspectRatio: "1", border: "1px solid rgba(28,20,9,.15)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: ".5rem", cursor: "pointer", padding: "1rem", textAlign: "center" }}>
              <div style={{ fontSize: "1.6rem" }}>{c.icon}</div>
              <div style={{ fontSize: ".68rem", letterSpacing: ".08em", textTransform: "uppercase" }}>{c.nombre}</div>
              <div style={{ fontSize: ".65rem", color: "#7A6F5E" }}>{c.count} libros</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#1C1409", color: "#F5EFE0", padding: "4rem 5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid rgba(245,239,224,.1)" }}>
          <div>
            <span style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", fontWeight: 600, display: "block", marginBottom: ".8rem" }}>El <span style={{ color: "#B8502E", fontStyle: "italic" }}>Volador</span></span>
            <p style={{ fontSize: ".82rem", color: "rgba(245,239,224,.45)", lineHeight: 1.75, maxWidth: "240px" }}>El marketplace de referencia para libros de segunda mano en México.</p>
          </div>
          {[["Comprar", ["Catálogo completo", "Primeras ediciones", "Libros agotados", "Busco un libro"]],
            ["Vender", ["Registrarse como librero", "Panel de vendedor", "Tarifas y comisiones", "Guía de envíos"]],
            ["Ayuda", ["Centro de ayuda", "Política de devoluciones", "Métodos de pago", "Contacto"]]].map(([title, links]) => (
            <div key={title}>
              <h4 style={{ fontSize: ".65rem", letterSpacing: ".16em", textTransform: "uppercase", color: "#C49A3C", marginBottom: "1.2rem" }}>{title}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {links.map(link => (
                  <li key={link} style={{ marginBottom: ".55rem" }}><a href="#" style={{ textDecoration: "none", color: "rgba(245,239,224,.45)", fontSize: ".82rem" }}>{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ fontSize: ".72rem", color: "rgba(245,239,224,.3)" }}>© 2025 El Volador · Hecho con amor en México 🇲🇽</div>
          <div style={{ display: "flex", gap: ".6rem" }}>
            {["MercadoPago", "Visa / MC", "OXXO Pay", "SPEI"].map(p => (
              <span key={p} style={{ background: "rgba(245,239,224,.07)", border: "1px solid rgba(245,239,224,.1)", borderRadius: "3px", padding: ".3rem .7rem", fontSize: ".65rem", color: "rgba(245,239,224,.45)" }}>{p}</span>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </main>
  );
}