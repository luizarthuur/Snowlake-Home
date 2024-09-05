import './carosselComponent.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

export function CarrosselComponent () {

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <>
    <div className='carrosselComponentContainer'>
    <div style={{ width: '80%', margin: 'auto', paddingTop: '0px' }}>
      <Slider {...settings} className='carrosselContainer'>
        <div className='carrosselContainer_div'>
          <img src="https://demos.elemisthemes.com/snowlake/style/images/art/z1.svg" className= "carrosselContainer_imagem_carrossel" alt="Logo 1" />
        </div>
        <div className='carrosselContainer_div'>
          <img src="https://demos.elemisthemes.com/snowlake/style/images/art/z2.svg" className= "carrosselContainer_imagem_carrossel" alt="Logo 2" />
        </div>
        <div className='carrosselContainer_div'>
          <img src="https://demos.elemisthemes.com/snowlake/style/images/art/z3.svg" className= "carrosselContainer_imagem_carrossel" alt="Logo 3" />
        </div>
        <div className='carrosselContainer_div'>
          <img src="https://demos.elemisthemes.com/snowlake/style/images/art/z4.svg" className= "carrosselContainer_imagem_carrossel" alt="Logo 4" />
        </div>
        <div className='carrosselContainer_div'>
          <img src="https://demos.elemisthemes.com/snowlake/style/images/art/z5.svg" className= "carrosselContainer_imagem_carrossel" alt="Logo 5" />
        </div>
        <div className='carrosselContainer_div'>
          <img src="https://demos.elemisthemes.com/snowlake/style/images/art/z6.svg" className= "carrosselContainer_imagem_carrossel" alt="Logo 6" />
        </div>
        <div className='carrosselContainer_div'> 
          <img src="https://demos.elemisthemes.com/snowlake/style/images/art/z7.svg" className= "carrosselContainer_imagem_carrossel" alt="Logo 6" />
        </div>
        <div className='carrosselContainer_div'>
          <img src="https://demos.elemisthemes.com/snowlake/style/images/art/z5.svg" className= "carrosselContainer_imagem_carrossel" alt="Logo 6" />
        </div>
      </Slider>
    </div>
    </div>
    </>
  );
};