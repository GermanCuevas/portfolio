import Presentation from "./components/firstView/Presentation";
import Techs from "./components/secondView/Techs";
import Projects from "./components/thirdView/Projects";
import Footer from "./components/Footer/Footer";
import { Grid } from "@mui/material";

function App() {
  return (
    <>
      <Grid container spacing={5} direction={"column"}>
        <Grid item>
          <Presentation />
        </Grid>
        <Grid item>
          <Techs />
        </Grid>
        <Grid item>
          <Projects />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default App;
