import Presentation from './components/firstView/Presentation';
import Techs from './components/secondView/Techs';
import Projects from './components/thirdView/Projects';
import Footer from './components/Footer/Footer';
import { Grid } from '@mui/material';
import { ClockLoader } from 'react-spinners';
import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  return (
    <>
      {isLoading ? (
        <>
          <div className="cape"></div>
          <div className="boxSpinner">
            <ClockLoader color="#f8002f" size={400} loading={isLoading} />
          </div>
        </>
      ) : (
        ''
      )}
      <Grid container spacing={5} direction={'column'}>
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
