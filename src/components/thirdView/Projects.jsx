import { Typography, Grid, Card, CardContent } from "@mui/material";
import styles from "../../styles/styles";
import { BsLink } from "react-icons/bs";

const Projects = () => {
  return (
    <>
      <div>
        <div style={{ height: "100%", width: "100%" }}>
          <div
            style={{
              padding: "20px",
              height: "100%",
              textAlign: "center",
              marginTop: "50px",
              width: "100%",
              backgroundColor: "#f8002f",
              backgroundImage:
                "linear-gradient(326deg, #f8002f 0%, #000c14 74%)",
            }}
          >
            <Typography
              variant="h1"
              style={{ ...styles.colorPrimary, marginBottom: "20px" }}
            >
              Proyectos
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <Card style={{ height: "100%" }}>
                  <CardContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <Typography variant="h4" gutterBottom>
                      TMDB
                    </Typography>
                    <Typography variant="body1">
                      Proyecto individual creado en una semana. Aplicación que
                      muestra películas: un usuario puede registrarse, ver un
                      listado de películas y agregar o quitar de favoritos.
                      React, Redux, CSS, PostgreSQL, Express, Sequelize.
                    </Typography>
                    <a
                      href="https://github.com/GermanCuevas/Line-up"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "black",
                      }}
                    >
                      <BsLink size={32} style={{ marginTop: "auto" }} />
                    </a>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card style={{ height: "100%" }}>
                  <CardContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <Typography variant="h4" gutterBottom>
                      The mobile factory
                    </Typography>
                    <Typography variant="body1">
                      Proyecto grupal de cinco integrantes creado en dos
                      semanas. Ecommerce de smartphones con registro y carrito.
                      Responsabilidades: creación de modelos y rutas. Pruebas y
                      optimizacion desde el front. React, Redux, Material UI,
                      Node JS, Express, PostgreSQL, Sequelize.
                    </Typography>
                    <a
                      href="https://github.com/GermanCuevas/Line-up"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "black",
                      }}
                    >
                      <BsLink size={32} style={{ marginTop: "auto" }} />
                    </a>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card style={{ height: "100%" }}>
                  <CardContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <Typography variant="h4" gutterBottom>
                      Line-Up
                    </Typography>
                    <Typography variant="body1">
                      Practica profesional para la empresa CRUCE. Grupo de seis
                      integrantes. Tiempo de desarrollo de un mes. Enero 2021 -
                      Actualidad Es una aplicación web que le permite a sus
                      usuarios reservar turnos online en distintas sucursales.
                      NextJS , SASS, Material UI , Node JS, Express, MongoDB,
                      Moongose.
                    </Typography>
                    <a
                      href="https://github.com/GermanCuevas/Line-up"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "black",
                      }}
                    >
                      <BsLink size={32} style={{ marginTop: "auto" }} />
                    </a>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
