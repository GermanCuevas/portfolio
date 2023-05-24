import { Parallax } from "react-parallax";
import img from "../../assets/03.jpg";
import { ImageList, ImageListItem, Zoom } from "@mui/material";
//import styles from "../../styles/styles";
import "./tech.css";
import imgJs from "../../assets/js.png";
import imgHTML from "../../assets/html5.webp";
import imgCSS from "../../assets/css.png";
import imgGit from "../../assets/git-logo.webp";
import imgMongo from "../../assets/mongo.png";
import imgNext from "../../assets/nextjs.png";
import imgNode from "../../assets/node.png";
import imgPostgre from "../../assets/postgresql-logo.png";
import imgReact from "../../assets/react.png";
import { useState, useEffect } from "react";

function Presentation() {
  useEffect(() => {
    setTimeout(() => {});
  }, []);
  // eslint-disable-next-line no-unused-vars
  const [arrImg, setArrImg] = useState([
    imgJs,
    imgHTML,
    imgCSS,
    imgGit,
    imgMongo,
    imgNext,
    imgNode,
    imgPostgre,
    imgReact,
  ]);
  return (
    <div style={{ height: "100vh" }}>
      <Parallax
        style={{ height: "100%", width: "100%" }}
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        strength={500}
      >
        <ImageList sx={{ width: "100%", height: "100vh" }} cols={3}>
          {arrImg.map((el, idx) => {
            return (
              <ImageListItem
                key={idx}
                style={{ display: "grid", placeItems: "center" }}
              >
                <Zoom in={true} style={{ transitionDuration: "5000ms" }}>
                  <img src={el} alt="JS Logo" className="hearth giro" />
                </Zoom>
              </ImageListItem>
            );
          })}
        </ImageList>
      </Parallax>
    </div>
  );
}

export default Presentation;
