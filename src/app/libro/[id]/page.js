import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";

export default async function FichaLibro({ params }) {
  const { id } = await params;

  const { data, error } = await supabase
    .from("libros")
    .select("*, vendedores(*)")
    .eq("id", id)
    .single();

  if (error || !data) notFound();

  const libro = {
    id: data.id,
    titulo: data.titulo,
    autor: data.autor,
    editorial: data.editorial,
    anio: data.anio,
    numeroEdicion: data.numero_edicion,
    condicion: data.condicion,
    encuadernacion: data.encuadernacion,
    primeraEdicion: data.primera_edicion,
    camisa: data.camisa,
    sku: data.sku,
    isbn: data.isbn,
    idioma: data.idioma,
    numPaginas: data.num_paginas,
    precio: data.precio,
    notas: data.notas,
    fotos: data.fotos ?? [],
    vendedor: {
      nombre: data.vendedores?.nombre,
      ciudad: data.vendedores?.ciudad,
      rating: data.vendedores?.rating,
      ventas: data.vendedores?.ventas,
      años: data.vendedores?.años,
      inicial: data.vendedores?.inicial,
      descripcion: data.vendedores?.descripcion,
    },
  };

  const relacionados = [
    {
      id: 2,
      titulo: "El llano en llamas",
      autor: "Juan Rulfo",
      anio: "1953",
      precio: 1800,
      color: "#2C1A0E",
      cond: "Bueno",
    },
    {
      id: 3,
      titulo: "Al filo del agua",
      autor: "Agustín Yáñez",
      anio: "1947",
      precio: 2100,
      color: "#1C1C2C",
      cond: "Como nuevo",
    },
    {
      id: 4,
      titulo: "Recuerdos del porvenir",
      autor: "Elena Garro",
      anio: "1963",
      precio: 1600,
      color: "#2C1818",
      cond: "Aceptable",
    },
  ];

  const condicionColor = {
    Nuevo: "#4A6741",
    "Como nuevo": "#4A6741",
    Excelente: "#5C8A52",
    "Muy bueno": "#C49A3C",
    Bueno: "#C49A3C",
    Aceptable: "#B8502E",
    Malo: "#8B2015",
  };

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
          {["Catálogo", "Librerías", "Busco un libro", "Secciones"].map(
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
            Literatura Mexicana
          </a>
          <span style={{ margin: "0 .6rem" }}>›</span>
          <span style={{ color: "#1C1409" }}>{libro.titulo}</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            padding: "4rem 5rem",
          }}
        >
          <div>
            <div
              style={{
                width: "100%",
                aspectRatio: "3/4",
                marginBottom: "1rem",
                position: "relative",
                overflow: "hidden",
                background: "#2C1A0E",
              }}
            >
              <img
                src={libro.fotos[0]}
                alt={libro.titulo}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "1rem",
                  zIndex: 2,
                  color: "rgba(255,255,255,0.45)",
                  fontSize: ".7rem",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                  textShadow: "0 1px 3px rgba(0,0,0,0.4)",
                }}
              >
                El Volador
              </div>
              {libro.primeraEdicion && (
                <span
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    background: "#C49A3C",
                    color: "#1C1409",
                    fontSize: ".65rem",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    padding: ".3rem .8rem",
                  }}
                >
                  1ª edición
                </span>
              )}
            </div>
            <div style={{ display: "flex", gap: ".8rem" }}>
              {libro.fotos.map((foto, i) => (
                <div
                  key={i}
                  style={{
                    width: "80px",
                    height: "100px",
                    background: foto.startsWith("/") ? "#2C1A0E" : foto,
                    cursor: "pointer",
                    border:
                      i === 0 ? "2px solid #B8502E" : "2px solid transparent",
                    overflow: "hidden",
                  }}
                >
                  {foto.startsWith("/") && (
                    <img
                      src={foto}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                marginBottom: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid rgba(28,20,9,.1)",
              }}
            >
              <div
                style={{
                  fontSize: ".7rem",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "#B8502E",
                  marginBottom: ".6rem",
                }}
              >
                Literatura Mexicana · {libro.anio}
              </div>
              <h1
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "2.4rem",
                  fontWeight: 300,
                  lineHeight: 1.1,
                  marginBottom: ".6rem",
                }}
              >
                {libro.titulo}
              </h1>
              <div
                style={{
                  fontSize: "1rem",
                  color: "#7A6F5E",
                  marginBottom: "1.2rem",
                }}
              >
                {libro.autor}
              </div>
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "2rem",
                  fontWeight: 600,
                }}
              >
                ${libro.precio.toLocaleString()}
                <small
                  style={{
                    fontSize: ".9rem",
                    color: "#7A6F5E",
                    fontFamily: "sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {" "}
                  MXN
                </small>
              </div>
            </div>

            <div
              style={{
                marginBottom: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid rgba(28,20,9,.1)",
              }}
            >
              <div
                style={{
                  fontSize: ".7rem",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "#7A6F5E",
                  marginBottom: "1rem",
                }}
              >
                Estado
              </div>
              <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap", marginBottom: ".8rem" }}>
                <span
                  style={{
                    fontSize: ".72rem",
                    border: "1px solid rgba(28,20,9,.15)",
                    padding: ".3rem .8rem",
                    color: "#7A6F5E",
                  }}
                >
                  {libro.encuadernacion}
                </span>
                {libro.primeraEdicion && (
                  <span
                    style={{
                      fontSize: ".72rem",
                      border: "1px solid #C49A3C",
                      padding: ".3rem .8rem",
                      color: "#C49A3C",
                    }}
                  >
                    Primera edición
                  </span>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".8rem",
                  marginBottom: ".8rem",
                }}
              >
                <span style={{ fontSize: ".82rem", color: "#7A6F5E" }}>
                  libro
                </span>
                <span
                  style={{
                    background: condicionColor[libro.condicion] || "#C49A3C",
                    color: "#fff",
                    fontSize: ".72rem",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    padding: ".3rem .9rem",
                  }}
                >
                  {libro.condicion}
                </span>
              </div>
              {libro.camisa !== "No aplica" && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".8rem",
                    marginTop: ".6rem",
                  }}
                >
                  <span style={{ fontSize: ".82rem", color: "#7A6F5E" }}>
                    camisa
                  </span>
                  <span
                    style={{
                      background: condicionColor[libro.camisa] || "#C49A3C",
                      color: "#fff",
                      fontSize: ".72rem",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      padding: ".3rem .9rem",
                    }}
                  >
                    {libro.camisa}
                  </span>
                </div>
              )}
            </div>

            <div
              style={{
                marginBottom: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid rgba(28,20,9,.1)",
              }}
            >
              <div
                style={{
                  fontSize: ".7rem",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "#7A6F5E",
                  marginBottom: "1rem",
                }}
              >
                Ficha técnica
              </div>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: ".82rem",
                }}
              >
                <tbody>
                  {[
                    ["Editorial", libro.editorial],
                    ["Año de edición", libro.anio],
                    ["Edición", libro.numeroEdicion],
                    ["Idioma", libro.idioma],
                    ["Páginas", libro.numPaginas],
                    ["SKU", libro.sku],
                  ].map(([label, value]) => (
                    <tr
                      key={label}
                      style={{ borderBottom: "1px solid rgba(28,20,9,.06)" }}
                    >
                      <td
                        style={{
                          padding: ".5rem 0",
                          color: "#7A6F5E",
                          width: "40%",
                        }}
                      >
                        {label}
                      </td>
                      <td style={{ padding: ".5rem 0", color: "#1C1409" }}>
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              style={{
                marginBottom: "2rem",
                paddingBottom: "2rem",
                borderBottom: "1px solid rgba(28,20,9,.1)",
              }}
            >
              <div
                style={{
                  fontSize: ".7rem",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "#7A6F5E",
                  marginBottom: ".8rem",
                }}
              >
                Notas del vendedor
              </div>
              <p
                style={{
                  fontSize: ".85rem",
                  lineHeight: 1.8,
                  color: "#4A3F30",
                }}
              >
                {libro.notas}
              </p>
            </div>

            <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
              <button
                style={{
                  flex: 1,
                  background: "#B8502E",
                  color: "#fff",
                  border: "none",
                  borderRadius: "2px",
                  padding: "1rem",
                  fontSize: ".82rem",
                  cursor: "pointer",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                }}
              >
                Agregar al carrito
              </button>
              <button
                style={{
                  background: "none",
                  border: "1px solid rgba(28,20,9,.2)",
                  borderRadius: "2px",
                  padding: "1rem 1.4rem",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                }}
              >
                ♡
              </button>
            </div>

            <div style={{ background: "#EAE0C8", padding: "1.5rem" }}>
              <div
                style={{
                  fontSize: ".65rem",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "#7A6F5E",
                  marginBottom: "1rem",
                }}
              >
                Vendido por
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: ".8rem",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "#F5EFE0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Georgia, serif",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    color: "#B8502E",
                    flexShrink: 0,
                  }}
                >
                  {libro.vendedor.inicial}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "1rem",
                      fontWeight: 600,
                      marginBottom: ".2rem",
                    }}
                  >
                    {libro.vendedor.nombre}
                  </div>
                  <div style={{ fontSize: ".72rem", color: "#7A6F5E" }}>
                    📍 {libro.vendedor.ciudad}
                  </div>
                </div>
              </div>
              <div
                style={{
                  color: "#C49A3C",
                  fontSize: ".82rem",
                  marginBottom: "1rem",
                }}
              >
                {"★".repeat(Math.floor(libro.vendedor.rating))}
                <span
                  style={{
                    color: "#7A6F5E",
                    fontSize: ".72rem",
                    marginLeft: ".3rem",
                  }}
                >
                  {libro.vendedor.rating} · {libro.vendedor.ventas} ventas
                </span>
              </div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <button
                  style={{
                    flex: 1,
                    background: "#1C1409",
                    color: "#F5EFE0",
                    border: "none",
                    borderRadius: "2px",
                    padding: ".6rem",
                    fontSize: ".72rem",
                    cursor: "pointer",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                  }}
                >
                  Ver librería
                </button>
                <button
                  style={{
                    flex: 1,
                    background: "none",
                    border: "1px solid rgba(28,20,9,.2)",
                    borderRadius: "2px",
                    padding: ".6rem",
                    fontSize: ".72rem",
                    cursor: "pointer",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                  }}
                >
                  Enviar mensaje
                </button>
              </div>
            </div>
          </div>
        </div>

        <section
          style={{
            padding: "3rem 5rem 5rem",
            borderTop: "1px solid rgba(28,20,9,.1)",
          }}
        >
          <div
            style={{
              fontSize: ".7rem",
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "#B8502E",
              marginBottom: ".5rem",
            }}
          >
            Del mismo vendedor
          </div>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.8rem",
              fontWeight: 300,
              marginBottom: "2rem",
            }}
          >
            Otros libros que te pueden <em>interesar</em>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
            }}
          >
            {relacionados.map((l) => (
              <a
                key={l.id}
                href={`/libro/${l.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "2/3",
                    background: l.color,
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
                        fontFamily: "Georgia, serif",
                        fontSize: ".95rem",
                        color: "#fff",
                        lineHeight: 1.2,
                      }}
                    >
                      {l.titulo}
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
                    {l.cond}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: ".76rem",
                    color: "#7A6F5E",
                    marginBottom: ".2rem",
                  }}
                >
                  {l.autor}
                </div>
                <div
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: ".95rem",
                    marginBottom: ".3rem",
                  }}
                >
                  {l.titulo}
                </div>
                <div
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  ${l.precio.toLocaleString()}
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
