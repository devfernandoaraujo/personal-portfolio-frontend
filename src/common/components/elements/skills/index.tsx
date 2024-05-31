import { NextPage } from 'next'
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const SkillsComponent : NextPage = () => {
  const carouselImages = [
    {
      src: '/images/asp-net.webp',
      name: 'Asp.net',
    },
    {
      src: '/images/bootstrap-5.svg',
      name: 'Bootstrap',
    },
    {
      src: '/images/c-sharp.svg',
      name: 'Microsoft C#',
    },
    {
      src: '/images/git.svg',
      name: 'Github',
    },
    {
      src: '/images/html.svg',
      name: 'HTML 5',
    },
    {
      src: '/images/javascript.svg',
      name: 'Java Script',
    },
    {
      src: '/images/jquery.svg',
      name: '',
    },
    {
      src: '/images/json.svg',
      name: '',
    },
    {
      src: '/images/react.svg',
      name: 'React',
    },
    {
      src: '/images/sql-server.svg',
      name: '',
    },
    {
      src: '/images/typescript.svg',
      name: 'TypeScript',
    },
    {
      src: '/images/visual-studio.svg',
      name: 'Visual Studio',
    },
    {
      src: '/images/visual-studio-code.svg',
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
                I realized that running is a part of my life. Through running, I discovered that I could improve my skills in any subject I what to learn or do.
              </p>
              <div className={'section_title_two undefined'}>
                <h5>Some of the technologies I work with </h5>
              </div>
              <Slider {...settings}>
                {carouselImages.map((image, index) => (
                  <div key="{index}" className={'carousel-item text-center'}>
                    <Image src={image.src} className={'d-block rounded mx-auto w-50 h-50'} alt={image.name} height="60" width="76" />
                    <h6>{image.name}</h6>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className={'col-lg-6'}>
            <Image className={'fact_img'} src="/images/mobile.d871640b.svg" alt="mobile.d871640b.svg" height="540" width="456" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;
