import React from 'react';
import Slider from 'react-slick';

const TestimonialComponent = () => {
  const testimonialList = [
    {
      imageSrc: 'murilo_profile.jfif',
      title: 'Scrum Master / Project Leader',
      name: 'Murilo Faria',
      message:
        'I had the opportunity to work as technical leader of a project that Fernando recently participated in, I can say that Fernando is a very competent developer, who acts with responsibility and commitment in the activities that are assigned to him. Besides the technical skills Fernando is a reliable, punctual and sincere person. I wish you much success in this new phase of your career.',
      relationship: 'Worked with Fernando on the same team',
    },
    {
      imageSrc: 'renato_profile.jfif',
      title: 'IT Coordinator',
      name: 'Renato Moraes',
      message:
        'Fernando is a very dedicated and very capable professional in everything he does. He has a very analytical focus to solve problems always seeking to solve them in his root',
      relationship: 'Worked with Fernando on the same team',
    },
    {
      imageSrc: 'rafael_gil_profile.jfif',
      title: 'Development Coordinator',
      name: 'Rafael Gil Silva',
      message:
        'Fernando is a very smart, prestative and fast developer. Clean, well documented and easy to understand even in Auth/Sockets Technologies. I am realy glad that i had the oportunity to work with him in in the app project.',
      relationship: 'Rafael was Fernando’s client',
    },
    {
      imageSrc: 'victor_profile.jfif',
      title: 'IT Engineering Coordinator',
      name: 'Victor Thomazi Lucas',
      message: 'Fernando have a impressive technical knowledge, aways ready to help everyone! great team mate!',
      relationship: 'Worked with Fernando on the same team',
    },
    {
      imageSrc: 'lesley_profile.jfif',
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
    <div className={'testimonial_area_two bg_color '} id="testimonial">
      <div className={'container'}>
        <div className={'row'}>
          <div className={'col-lg-6'}>
            <div className={'testimonial_img'}>
              <img src={process.env.PUBLIC_URL + '/images/testimonial.bc1380d8.svg'} alt="bc1380d8.svg" />
            </div>
          </div>
          <div className={'col-lg-6'}>
            <div className={'testimonial_slider_info'}>
              <div className={'section_title_two undefined'}>
                <h6>Partners feedback</h6>
                <h2>What his partners say about Fernando..</h2>
              </div>
              <div>
                <Slider {...settings}>
                  {testimonialList.map((testimonial, index) => (
                    <div key="{index}">
                      <p>{testimonial.message}</p>
                      <div className={'media'}>
                        <div className={'author_img'}>
                          <img src={process.env.PUBLIC_URL + '/images/linkedin_profile/' + testimonial.imageSrc} alt="author_img" />
                        </div>
                        <div className={'media-body'}>
                          <h6>{testimonial.name}</h6>
                          <div className={'media-body-title'}>
                            <span>{testimonial.title}</span>
                            <span>{testimonial.relationship}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
