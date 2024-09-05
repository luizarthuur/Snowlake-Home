import './teamCarrossel.css'

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

export function TeamCarrossel () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const teamMembers = [
    {
      name: "Connor Gibson",
      title: "Financial Analyst",
      description: "Pellentesque ornare sem lacinia quam venenatis.",
      image: "https://demos.elemisthemes.com/snowlake/style/images/art/te1.jpg",
      social: { twitter: "#", facebook: "#", instagram: "#" }
    },
    {
      name: "Coriss Ambady",
      title: "Marketing Specialist",
      description: "Pellentesque ornare sem lacinia quam venenatis.",
      image: "https://demos.elemisthemes.com/snowlake/style/images/art/te2.jpg",
      social: { twitter: "#", facebook: "#", instagram: "#" }
    },
    {
      name: "Barclay Widerski",
      title: "Sales Manager",
      description: "Pellentesque ornare sem lacinia quam venenatis.",
      image: "https://demos.elemisthemes.com/snowlake/style/images/art/te3.jpg",
      social: { twitter: "#", facebook: "#", instagram: "#" }
    },
    {
      name: "Nicolas Brooten",
      title: "Investment Planner",
      description: "Pellentesque ornare sem lacinia quam venenatis.",
      image: "https://demos.elemisthemes.com/snowlake/style/images/art/te4.jpg",
      social: { twitter: "#", facebook: "#", instagram: "#" }
    },
    {
        name: "Nicolas Brooten",
        title: "Investment Planner",
        description: "Pellentesque ornare sem lacinia quam venenatis.",
        image: "https://demos.elemisthemes.com/snowlake/style/images/art/te5.jpg",
        social: { twitter: "#", facebook: "#", instagram: "#" }
      },
    {
        name: "Nicolas Brooten",
        title: "Investment Planner",
        description: "Pellentesque ornare sem lacinia quam venenatis.",
        image: "https://demos.elemisthemes.com/snowlake/style/images/art/te6.jpg",
        social: { twitter: "#", facebook: "#", instagram: "#" }
    }
  ];

  return (
    <>
    <div className='teamCarrosselContainer'>
    <div style={{ width: '80%', margin: 'auto', paddingTop: '10px', paddingBottom: '10px', marginTop: '20px', marginBottom: '20px'}}>
      <h2>Meet the Team</h2>
      <p>Save your time and money by choosing our professional team.</p>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="member-image"/>
            <h3>{member.name}</h3>
            <h4>{member.title}</h4>
            <p>{member.description}</p>
            <div className="social-links">
              <a href={member.social.twitter}><img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Imagem twitter" className='member-image_imagem' /></a>
              <a href={member.social.facebook}><img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Imagem twitter" className='member-image_imagem' /></a>
              <a href={member.social.instagram}><img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Imagem twitter" className='member-image_imagem' /></a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
    </>
  );
};