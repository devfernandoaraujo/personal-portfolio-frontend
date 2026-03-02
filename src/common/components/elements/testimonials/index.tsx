import { NextPage } from 'next';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import styles from '@/styles/Testimonials.module.scss';

const TestimonialsComponent: NextPage = () => {
  const testimonialList = [
    {
      imageSrc: '/images/linkedin_profile/murilo_profile.jpg',
      title: 'Scrum Master / Project Leader',
      name: 'Murilo Faria',
      message:
        'I had the opportunity to work as technical leader of a project that Fernando recently participated in. Fernando is a very competent developer, who acts with responsibility and commitment in the activities that are assigned to him. Besides the technical skills Fernando is a reliable, punctual and sincere person.',
      relationship: 'Worked with Fernando on the same team',
    },
    {
      imageSrc: '/images/linkedin_profile/renato_profile.jpg',
      title: 'IT Coordinator',
      name: 'Renato Moraes',
      message:
        'Fernando is a very dedicated and very capable professional in everything he does. He has a very analytical focus to solve problems always seeking to solve them at their root.',
      relationship: 'Worked with Fernando on the same team',
    },
    {
      imageSrc: '/images/linkedin_profile/rafael_gil_profile.jpg',
      title: 'Development Coordinator',
      name: 'Rafael Gil Silva',
      message:
        'Fernando is a very smart, prestative and fast developer. Clean, well documented and easy to understand even in Auth/Sockets Technologies. I am really glad that I had the opportunity to work with him in the app project.',
      relationship: 'Rafael was Fernando\'s client',
    },
    {
      imageSrc: '/images/linkedin_profile/victor_profile.jpg',
      title: 'IT Engineering Coordinator',
      name: 'Victor Thomazi Lucas',
      message: 'Fernando has impressive technical knowledge, always ready to help everyone! Great team mate!',
      relationship: 'Worked with Fernando on the same team',
    },
    {
      imageSrc: '/images/linkedin_profile/lesley_profile.jpg',
      title: 'Web Engineer',
      name: 'Lesley Fernandes Moreira',
      message: 'Good professional, dedicated, uses his best for the company.',
      relationship: 'Worked with Fernando on the same team',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className={'testimonial_area_two bg_color'} id="testimonial">
      <div className={'container'}>
        <div className={`section_title_two text-center ${styles.sectionHeader}`}>
          <h6>Partners feedback</h6>
          <h2>What his partners say about Fernando</h2>
        </div>
        <div className={styles.sliderWrapper}>
          <Slider {...settings}>
            {testimonialList.map((testimonial, index) => (
              <div key={index}>
                <div className={styles.card}>
                  <p className={styles.message}>{testimonial.message}</p>
                  <div className={styles.author}>
                    <div className={styles.authorImg}>
                      <Image
                        src={testimonial.imageSrc}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                      />
                    </div>
                    <div className={styles.authorInfo}>
                      <h6>{testimonial.name}</h6>
                      <span className={styles.authorTitle}>{testimonial.title}</span>
                      <span className={styles.relationship}>{testimonial.relationship}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsComponent;
