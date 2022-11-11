import React from 'react';
import Slider from 'react-slick';

const SkillsComponent = () => {
  const carouselImages = [
    {
      src: process.env.PUBLIC_URL + '/images/asp-net.png',
      name: 'Asp.net',
    },
    {
      src: process.env.PUBLIC_URL + '/images/bootstrap-5.svg',
      name: 'Bootstrap',
    },
    {
      src: process.env.PUBLIC_URL + '/images/c-sharp.svg',
      name: 'Microsoft C#',
    },
    {
      src: process.env.PUBLIC_URL + '/images/git.svg',
      name: 'Github',
    },
    {
      src: process.env.PUBLIC_URL + '/images/html.svg',
      name: 'HTML 5',
    },
    {
      src: process.env.PUBLIC_URL + '/images/javascript.svg',
      name: 'Java Script',
    },
    {
      src: process.env.PUBLIC_URL + '/images/jquery.svg',
      name: '',
    },
    {
      src: process.env.PUBLIC_URL + '/images/json.svg',
      name: '',
    },
    {
      src: process.env.PUBLIC_URL + '/images/react.svg',
      name: 'React',
    },
    {
      src: process.env.PUBLIC_URL + '/images/sql-server.svg',
      name: '',
    },
    {
      src: process.env.PUBLIC_URL + '/images/typescript.svg',
      name: 'TypeScript',
    },
    {
      src: process.env.PUBLIC_URL + '/images/visual-studio.svg',
      name: 'Visual Studio',
    },
    {
      src: process.env.PUBLIC_URL + '/images/visual-studio-code.svg',
      name: 'Visual Studio Code',
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    className: 'carouselSkills',
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    arrows: false,
    appendDots: (dots: any) => <ul> {dots} </ul>,
    customPaging: (i: number) => <button>{i + 1}</button>,
  };

  return (
    <section className={'skill_area_two'} id="skill">
      <div className={'container'}>
        <div className={'row align-items-center'}>
          <div className={'col-lg-6'}>
            <div className={'skill_content_two'}>
              <div className={'section_title_two undefined'}>
                <h6>My Featured Skills</h6>
                <h2>Some Interesting Facts About Me.</h2>
              </div>
              <p>
                I realized that running is a part of my life. Through running I discovered that I can be able to improve my skills on any subject I what to
                learn or do.{' '}
              </p>
              <div className={'section_title_two undefined'}>
                <h5>Some of the technologies I work with </h5>
              </div>
              <Slider {...settings}>
                {carouselImages.map((image, index) => (
                  <div key="{index}" className={'carousel-item text-center'}>
                    <img src={image.src} className={'d-block rounded mx-auto w-50 h-50'} alt="..." />
                    <h6>{image.name}</h6>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className={'col-lg-6'}>
            <img className={'fact_img'} src={process.env.PUBLIC_URL + '/images/mobile.d871640b.svg'} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;
