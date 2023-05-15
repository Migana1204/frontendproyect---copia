import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';

import { Carousel } from 'react-bootstrap';



export function Carrusel(){
  return (
    <Carousel className="carruselBoot">
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-auto mx-auto imageCarrusel"
          width={'800px'}
          height={'300px'}
          src={img1}
          alt="Slide image alt"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-auto mx-auto imageCarrusel"
          width={'800px'}
          height={'300px'}
          src={img2}
          alt="Slide image alt"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-auto mx-auto imageCarrusel"
          width={'800px'}
          height={'300px'}
          src={img3}
          alt="Slide image alt"
        />
      </Carousel.Item>
    </Carousel>
  );
}


