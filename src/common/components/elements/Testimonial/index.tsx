import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const TestimonialComponent = () => {
  const testimonialList =[
    {
      imageSrc: '/images/linkedin_profile/murilo_profile.jfif',
      title: 'Scrum Master / Project Leader',
      name: 'Murilo Faria',
      message:
        'I had the opportunity to work as technical leader of a project that Fernando recently participated in, I can say that Fernando is a very competent developer, who acts with responsibility and commitment in the activities that are assigned to him. Besides the technical skills Fernando is a reliable, punctual and sincere person. I wish you much success in this new phase of your career.',
      relationship: 'Worked with Fernando on the same team',
    },
    {
      imageSrc: '/images/linkedin_profile/renato_profile.jfif',
      title: 'IT Coordinator',
      name: 'Renato Moraes',
      message:
        'Fernando is a very dedicated and very capable professional in everything he does. He has a very analytical focus to solve problems always seeking to solve them in his root',
      relationship: 'Worked with Fernando on the same team',
    },
    {
      imageSrc: '/images/linkedin_profile/rafael_gil_profile.jfif',
      title: 'Development Coordinator',
      name: 'Rafael Gil Silva',
      message:
        'Fernando is a very smart, prestative and fast developer. Clean, well documented and easy to understand even in Auth/Sockets Technologies. I am realy glad that i had the oportunity to work with him in in the app project.',
      relationship: 'Rafael was Fernando’s client',
    },
    {
      imageSrc: '/images/linkedin_profile/victor_profile.jfif',
      title: 'IT Engineering Coordinator',
      name: 'Victor Thomazi Lucas',
      message: 'Fernando have a impressive technical knowledge, aways ready to help everyone! great team mate!',
      relationship: 'Worked with Fernando on the same team',
    },
    {
      imageSrc: '/images/linkedin_profile/lesley_profile.jfif',
      title: 'Web Engineer',
      name: 'Lesley Fernandes Moreira',
      message: 'Good professional, dedicated, uses his best for the company.',
      relationship: 'Worked with Fernando on the same team',
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    rtl: true,
    arrows: false,
    appendDots: (dots: any) => <ul> {dots} </ul>,
    customPaging: (i: number) => <button>{i + 1}</button>,
  };

  return (
    <>Test</>
  );
};

export default TestimonialComponent;
