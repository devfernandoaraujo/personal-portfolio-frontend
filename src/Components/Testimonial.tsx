import React from 'react';
import Slider from 'react-slick';

const TestimonialComponent = () => {
  const testimonialList = [
    {
      imageSrc:
        'https://media-exp1.licdn.com/dms/image/C4D03AQHm7rFbbhYozg/profile-displayphoto-shrink_100_100/0/1553798633575?e=1671062400&v=beta&t=Sor4J9UdoQ3gBb9W6m6_m_2zpyQTjle5-G3HddvgLk8',
      title: 'Scrum Master / Project Leader',
      name: 'Murilo Faria',
      message:
        'I had the opportunity to work as technical leader of a project that Fernando recently participated in, I can say that Fernando is a very competent developer, who acts with responsibility and commitment in the activities that are assigned to him. Besides the technical skills Fernando is a reliable, punctual and sincere person. I wish you much success in this new phase of your career.',
      relationship: 'Worked with Fernando on the same team',
    },
    {
      imageSrc:
        'https://media-exp1.licdn.com/dms/image/C4D03AQEKfPYikDggwQ/profile-displayphoto-shrink_100_100/0/1625233208442?e=1671062400&v=beta&t=8xsLmUgwIoopMPSAw3-NrNku77XRp13YeYMultICp1o',
      title: 'IT Coordinator',
      name: 'Renato Moraes',
      message:
        'Fernando is a very dedicated and very capable professional in everything he does. He has a very analytical focus to solve problems always seeking to solve them in his root',
      relationship: 'Worked with Fernando on the same team',
    },
    {
      imageSrc:
        'https://media-exp1.licdn.com/dms/image/C5603AQEBhHIZ_zW0Fw/profile-displayphoto-shrink_100_100/0/1517226985510?e=1671062400&v=beta&t=tdphiYme18E_0IG9tYMxpjTlo1TmQCSkdhqpWAlzmws',
      title: 'Development Coordinator',
      name: 'Rafael Gil Silva',
      message:
        'Fernando is a very smart, prestative and fast developer. Clean, well documented and easy to understand even in Auth/Sockets Technologies. I am realy glad that i had the oportunity to work with him in in the app project.',
      relationship: 'Rafael was Fernando’s client',
    },
    {
      imageSrc:
        'https://media-exp1.licdn.com/dms/image/C4E03AQG-gV877A-YwQ/profile-displayphoto-shrink_100_100/0/1623445535400?e=1671062400&v=beta&t=KsdM2_YHZQ2fvr6ki7Z7dCrAu1TdDqCzCnmGt4cjuBk',
      title: 'IT Engineering Coordinator',
      name: 'Victor Thomazi Lucas',
      message: 'Fernando have a impressive technical knowledge, aways ready to help everyone! great team mate!',
      relationship: 'Worked with Fernando on the same team',
    },
    {
      imageSrc:
        'https://media-exp1.licdn.com/dms/image/C4E03AQFIx3DsQTlMRA/profile-displayphoto-shrink_100_100/0/1660604276307?e=1671062400&v=beta&t=lameu8xaaBcDN3XaqOIQuKfjL_gicx8bl30NkqAD3-M',
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
                          <img src={testimonial.imageSrc} alt="author_img" />
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
