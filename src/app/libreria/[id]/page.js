export default function PerfilLibreria() {
  const libreria = {
    id: 1,
    nombre: "Librería El Murciélago",
    ciudad: "Ciudad de México",
    estado: "CDMX",
    especialidad: "Literatura mexicana del siglo XX · Primeras ediciones",
    descripcion:
      "Fundada en 2012 en el corazón de la Colonia Roma, Librería El Murciélago nació de la pasión por rescatar libros que el tiempo había olvidado. Nos especializamos en literatura mexicana del siglo XX, con especial énfasis en primeras ediciones y libros agotados. Cada ejemplar en nuestro catálogo ha sido cuidadosamente seleccionado y descrito con honestidad.",
    foto: null,
    inicial: "M",
    rating: 4.9,
    totalResenas: 87,
    totalVentas: 342,
    anosActivo: 12,
    totalEjemplares: 1240,
    etapa: 1,
    verificada: true,
  };

  const catalogoEjemplos = [
    {
      id: 1,
      titulo: "Pedro Páramo",
      autor: "Juan Rulfo",
      anio: "1955",
      precio: 3200,
      color: "#2C1A0E",
      cond: "Muy bueno",
      tipo: "Libro",
    },
    {
      id: 2,
      titulo: "El llano en llamas",
      autor: "Juan Rulfo",
      anio: "1953",
      precio: 1800,
      color: "#3D2510",
      cond: "Bueno",
      tipo: "Libro",
    },
    {
      id: 3,
      titulo: "Al filo del agua",
      autor: "Agustín Yáñez",
      anio: "1947",
      precio: 2100,
      color: "#1C1C2C",
      cond: "Como nuevo",
      tipo: "Libro",
    },
    {
      id: 4,
      titulo: "Revista Vuelta",
      autor: "Octavio Paz (dir.)",
      anio: "1976",
      precio: 450,
      color: "#1A2C1A",
      cond: "Bueno",
      tipo: "Revista",
    },
    {
      id: 5,
      titulo: "Recuerdos del porvenir",
      autor: "Elena Garro",
      anio: "1963",
      precio: 1600,
      color: "#2C1818",
      cond: "Aceptable",
      tipo: "Libro",
    },
    {
      id: 6,
      titulo: "Muerte sin fin",
      autor: "José Gorostiza",
      anio: "1939",
      precio: 4500,
      color: "#2C2210",
      cond: "Excelente",
      tipo: "Libro",
    },
  ];

  const resenas = [
    {
      autor: "Carlos M.",
      fecha: "Marzo 2025",
      calificacion: 5,
      comentario:
        "Excelente vendedor, el libro llegó exactamente como se describía. Muy bien empacado y envío rápido.",
    },
    {
      autor: "Ana L.",
      fecha: "Febrero 2025",
      calificacion: 5,
      comentario:
        "La descripción del estado del ejemplar fue muy precisa. Lo recomiendo ampliamente.",
    },
    {
      autor: "Roberto G.",
      fecha: "Enero 2025",
      calificacion: 4,
      comentario:
        "Buen servicio, la comunicación fue fluida. El libro tenía un pequeño detalle que no estaba mencionado pero el vendedor lo resolvió amablemente.",
    },
  ];

  const tipos = [
    "Todos",
    "Libro",
    "Revista",
    "Partitura",
    "Fotografía",
    "Gráfica",
  ];

  return (
    <main
      style={{
        background: "#F5EFE0",
        color: "#1C1409",
        fontFamily: "sans-serif",
        fontWeight: 300,
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Jost', sans-serif; }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 3rem",
          background: "#F5EFE0",
          borderBottom: "1px solid rgba(28,20,9,.15)",
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "1.6rem",
            fontWeight: 600,
            color: "#1C1409",
            textDecoration: "none",
          }}
        >
          El{" "}
          <span style={{ color: "#B8502E", fontStyle: "italic" }}>Volador</span>
        </a>
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {["Catálogo", "Librerías", "Busco un ejemplar", "Secciones"].map(
            (item) => (
              <li key={item}>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#7A6F5E",
                    fontSize: ".75rem",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                  }}
                >
                  {item}
                </a>
              </li>
            ),
          )}
        </ul>
        <button
          style={{
            background: "#B8502E",
            color: "#fff",
            border: "none",
            borderRadius: "2px",
            padding: ".52rem 1.4rem",
            fontSize: ".75rem",
            cursor: "pointer",
            letterSpacing: ".1em",
            textTransform: "uppercase",
          }}
        >
          Carrito
        </button>
      </nav>

      <div style={{ paddingTop: "65px" }}>
        <div
          style={{
            padding: "1.2rem 5rem",
            borderBottom: "1px solid rgba(28,20,9,.1)",
            fontSize: ".72rem",
            color: "#7A6F5E",
          }}
        >
          <a href="/" style={{ color: "#7A6F5E", textDecoration: "none" }}>
            Inicio
          </a>
          <span style={{ margin: "0 .6rem" }}>›</span>
          <a href="#" style={{ color: "#7A6F5E", textDecoration: "none" }}>
            Librerías
          </a>
          <span style={{ margin: "0 .6rem" }}>›</span>
          <span style={{ color: "#1C1409" }}>{libreria.nombre}</span>
        </div>

        <div
          style={{
            padding: "3rem 5rem",
            borderBottom: "1px solid rgba(28,20,9,.1)",
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: libreria.foto ? "#EAE0C8" : "#1C1409",
              overflow: "hidden",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "3px solid #EAE0C8",
            }}
          >
            {libreria.foto ? (
              <img
                src={libreria.foto}
                alt={libreria.nombre}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <span
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "3rem",
                  fontWeight: 600,
                  color: "#B8502E",
                }}
              >
                {libreria.inicial}
              </span>
            )}
          </div>

          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: ".5rem",
                flexWrap: "wrap",
              }}
            >
              <h1
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "2rem",
                  fontWeight: 300,
                }}
              >
                {libreria.nombre}
              </h1>
              {libreria.verificada && (
                <span
                  style={{
                    background: "#4A6741",
                    color: "#fff",
                    fontSize: ".6rem",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    padding: ".2rem .6rem",
                    borderRadius: "1px",
                  }}
                >
                  ✓ Verificada
                </span>
              )}
              <span
                style={{
                  background: "#EAE0C8",
                  color: "#7A6F5E",
                  fontSize: ".6rem",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  padding: ".2rem .6rem",
                  borderRadius: "1px",
                }}
              >
                Etapa {libreria.etapa}
              </span>
            </div>
            <div
              style={{
                fontSize: ".85rem",
                color: "#7A6F5E",
                marginBottom: ".6rem",
              }}
            >
              📍 {libreria.ciudad}, {libreria.estado}
            </div>
            <div
              style={{
                fontSize: ".82rem",
                color: "#7A6F5E",
                marginBottom: "1rem",
                fontStyle: "italic",
              }}
            >
              {libreria.especialidad}
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
            >
              <span style={{ color: "#C49A3C", fontSize: "1rem" }}>
                {"★".repeat(Math.floor(libreria.rating))}
              </span>
              <span
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                }}
              >
                {libreria.rating}
              </span>
              <span style={{ fontSize: ".78rem", color: "#7A6F5E" }}>
                ({libreria.totalResenas} reseñas)
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".8rem",
              minWidth: "160px",
            }}
          >
            <button
              style={{
                background: "#B8502E",
                color: "#fff",
                border: "none",
                borderRadius: "2px",
                padding: ".75rem 1.5rem",
                fontSize: ".75rem",
                cursor: "pointer",
                letterSpacing: ".1em",
                textTransform: "uppercase",
              }}
            >
              Enviar mensaje
            </button>
            <button
              style={{
                background: "none",
                border: "1px solid rgba(28,20,9,.2)",
                borderRadius: "2px",
                padding: ".75rem 1.5rem",
                fontSize: ".75rem",
                cursor: "pointer",
                letterSpacing: ".1em",
                textTransform: "uppercase",
              }}
            >
              ♡ Seguir
            </button>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderBottom: "1px solid rgba(28,20,9,.1)",
          }}
        >
          {[
            [libreria.totalEjemplares.toLocaleString(), "Ejemplares"],
            [libreria.totalVentas.toLocaleString(), "Ventas"],
            [libreria.anosActivo, "Años activo"],
            [libreria.rating, "Calificación"],
          ].map(([num, label], i) => (
            <div
              key={label}
              style={{
                padding: "2rem",
                textAlign: "center",
                borderRight: i < 3 ? "1px solid rgba(28,20,9,.1)" : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "2.2rem",
                  fontWeight: 600,
                  display: "block",
                  marginBottom: ".3rem",
                }}
              >
                {num}
              </span>
              <span
                style={{
                  fontSize: ".7rem",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "#7A6F5E",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            padding: "3rem 5rem",
            borderBottom: "1px solid rgba(28,20,9,.1)",
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "4rem",
          }}
        >
          <div>
            <div
              style={{
                fontSize: ".7rem",
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "#B8502E",
                marginBottom: ".8rem",
              }}
            >
              Acerca de la librería
            </div>
            <p
              style={{ fontSize: ".92rem", lineHeight: 1.85, color: "#4A3F30" }}
            >
              {libreria.descripcion}
            </p>
          </div>
          <div style={{ background: "#EAE0C8", padding: "1.8rem" }}>
            <div
              style={{
                fontSize: ".7rem",
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "#7A6F5E",
                marginBottom: "1rem",
              }}
            >
              Especialidades
            </div>
            {[
              "Literatura Mexicana",
              "Primeras Ediciones",
              "Libros Agotados",
              "Poesía",
              "Ensayo",
            ].map((esp) => (
              <div
                key={esp}
                style={{
                  fontSize: ".8rem",
                  padding: ".4rem 0",
                  borderBottom: "1px solid rgba(28,20,9,.08)",
                  color: "#1C1409",
                }}
              >
                {esp}
              </div>
            ))}
          </div>
        </div>

        <section style={{ padding: "3rem 5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "2rem",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: ".7rem",
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "#B8502E",
                  marginBottom: ".5rem",
                }}
              >
                Catálogo
              </div>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.8rem",
                  fontWeight: 300,
                }}
              >
                Libros <em>disponibles</em>
              </h2>
            </div>
            <a
              href="#"
              style={{
                fontSize: ".72rem",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "#7A6F5E",
                textDecoration: "none",
                borderBottom: "1px solid #7A6F5E",
              }}
            >
              Ver catálogo completo
            </a>
          </div>

          <div
            style={{
              display: "flex",
              gap: ".5rem",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            {tipos.map((tipo, i) => (
              <button
                key={tipo}
                style={{
                  background: i === 0 ? "#1C1409" : "none",
                  color: i === 0 ? "#F5EFE0" : "#7A6F5E",
                  border: "1px solid",
                  borderColor: i === 0 ? "#1C1409" : "rgba(28,20,9,.15)",
                  borderRadius: "1px",
                  padding: ".38rem .95rem",
                  fontSize: ".7rem",
                  cursor: "pointer",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                }}
              >
                {tipo}
              </button>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: "2rem",
            }}
          >
            {catalogoEjemplos.map((item) => (
              <a
                key={item.id}
                href={`/libro/${item.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "2/3",
                    background: item.color,
                    position: "relative",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,.62) 0%, transparent 50%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1rem",
                      left: "1rem",
                      right: "1rem",
                      zIndex: 1,
                    }}
                  >
                    <div
                      style={{
                        fontSize: ".58rem",
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,.6)",
                        marginBottom: ".3rem",
                      }}
                    >
                      {item.tipo} · {item.anio}
                    </div>
                    <div
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: ".95rem",
                        color: "#fff",
                        lineHeight: 1.2,
                      }}
                    >
                      {item.titulo}
                    </div>
                  </div>
                  <span
                    style={{
                      position: "absolute",
                      top: ".75rem",
                      left: ".75rem",
                      background: "rgba(28,20,9,.65)",
                      color: "#fff",
                      fontSize: ".55rem",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      padding: ".2rem .55rem",
                    }}
                  >
                    {item.cond}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: ".76rem",
                    color: "#7A6F5E",
                    marginBottom: ".2rem",
                  }}
                >
                  {item.autor}
                </div>
                <div
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: ".95rem",
                    marginBottom: ".3rem",
                    lineHeight: 1.2,
                  }}
                >
                  {item.titulo}
                </div>
                <div
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  ${item.precio.toLocaleString()}
                  <small
                    style={{
                      fontSize: ".65rem",
                      color: "#7A6F5E",
                      fontFamily: "sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {" "}
                    MXN
                  </small>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section
          style={{
            padding: "3rem 5rem 5rem",
            borderTop: "1px solid rgba(28,20,9,.1)",
            background: "#EAE0C8",
          }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <div
              style={{
                fontSize: ".7rem",
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "#B8502E",
                marginBottom: ".5rem",
              }}
            >
              Comunidad
            </div>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "1.8rem",
                fontWeight: 300,
              }}
            >
              Reseñas de <em>compradores</em>
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {resenas.map((r, i) => (
              <div key={i} style={{ background: "#F5EFE0", padding: "1.8rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: ".95rem",
                        fontWeight: 600,
                        marginBottom: ".2rem",
                      }}
                    >
                      {r.autor}
                    </div>
                    <div style={{ fontSize: ".7rem", color: "#7A6F5E" }}>
                      {r.fecha}
                    </div>
                  </div>
                  <span style={{ color: "#C49A3C", fontSize: ".9rem" }}>
                    {"★".repeat(r.calificacion)}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: ".83rem",
                    lineHeight: 1.75,
                    color: "#4A3F30",
                  }}
                >
                  {r.comentario}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer
        style={{
          background: "#1C1409",
          color: "#F5EFE0",
          padding: "2rem 5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.2rem",
              fontWeight: 600,
            }}
          >
            El{" "}
            <span style={{ color: "#B8502E", fontStyle: "italic" }}>
              Volador
            </span>
          </span>
          <div style={{ fontSize: ".72rem", color: "rgba(245,239,224,.3)" }}>
            © 2025 El Volador · Hecho con amor en México 🇲🇽
          </div>
          <div style={{ display: "flex", gap: ".6rem" }}>
            {["MercadoPago", "Visa / MC", "OXXO Pay", "SPEI"].map((p) => (
              <span
                key={p}
                style={{
                  background: "rgba(245,239,224,.07)",
                  border: "1px solid rgba(245,239,224,.1)",
                  borderRadius: "3px",
                  padding: ".3rem .7rem",
                  fontSize: ".65rem",
                  color: "rgba(245,239,224,.45)",
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
