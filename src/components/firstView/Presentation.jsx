import { Parallax } from 'react-parallax';
import img from '../../assets/01.jpg';
import { Typography, Button } from '@mui/material';
import './presentation.css';

const Presentation = () => {
  return (
    <>
      <div className="boxParallaxContainer">
        <Parallax
          style={{ height: '100%', width: '100%' }}
          className="parallax"
          blur={{ min: -15, max: 15 }}
          bgImage={img}
          strength={500}
        >
          <div className="boxInfo">
            <Typography variant="h1" id={'titleProyect'}>
              Soy Germán
            </Typography>
            <Typography variant="h4" style={{ color: 'white' }}>
              Full Stack Developer
            </Typography>
            <a
              href="/GermanCuevas.pdf"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant="contained"
                color="secondary"
                style={{ marginTop: '100px' }}
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
