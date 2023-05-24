import { Parallax } from "react-parallax";
import img from "../../assets/01.jpg";
import { Typography, Button } from "@mui/material";
import styles from "../../styles/styles";

const Presentation = () => {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <Parallax
          style={{ height: "100%", width: "100%" }}
          blur={{ min: -15, max: 15 }}
          bgImage={img}
          strength={500}
        >
          <div
            style={{
              height: "100%",
              textAlign: "center",
              marginTop: "100px",
              width: "100%",
            }}
          >
            <Typography variant="h1" style={styles.colorPrimary}>
              Soy German
            </Typography>
            <Typography variant="h4" style={styles.colorPrimary}>
              Full Stack Developer
            </Typography>
            <a
              href="/GermanCuevas.pdf"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                color="secondary"
                style={{ marginTop: "100px" }}
              >
                Mi Curriculum
              </Button>
            </a>
          </div>
        </Parallax>
      </div>
    </>
  );
};

export default Presentation;
