import React from 'react';
import axios from 'axios';
import fileDownload from 'js-file-download';

const BannerComponentStyles = {
  animation: {
    resume: {
      animationDuration: '900ms',
      animationDelay: '0ms',
      animationIterationCount: 1,
      opacity: 1,
    },
  },
};

const AboutComponent = () => {
  const handleDownload = async (url: string, filename: string) => {
    axios
      .get(url, {
        responseType: 'blob',
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  };
  return (
    <section className="about_area_two" id="about">
      <div className="container">
        <div className="row row align-items-center">
          <div className="col-lg-4">
            <div className={'about_img '}>
              <img src={process.env.PUBLIC_URL + '/images/myself.png'} className={'img-fluid rounded-circle '} alt="Fernando" />
              <button
                onClick={() => {
                  handleDownload(process.env.PUBLIC_URL + '/resume/Fernando de Matos Araujo.pdf', 'fernandoResume.pdf');
                }}
                className={'btn fadeInDown theme_btn active'}
                style={BannerComponentStyles.animation.resume}
              >
                Resume
              </button>
            </div>
          </div>
          <div className="col-lg-8 ps-5">
            <div className={'about_content_two'}>
              <div className={'section_title_two undefined'}>
                <h6>Who I am</h6>
                <h2>I help people turn great ideas into ready solutions</h2>
              </div>
              <p>
                I am a passionate and creative problem-solve software engineer specialized in web development arena. For the lest few years, I have been
                developing enterprise and portal applications to solve issues related to financial market using C# programming language.
              </p>
              <p>
                I am hands on in all stages of software development cycle, from planning to deployment. Every day is different on my routine; my tasks may
                involve analysis algorithms, altering code, fixing bugs, brainstorming ideas or integrating new systems.
              </p>
              <p>
                The most passionate thing I love in software development is the opportunity to work with people from a wide range of disciplines. The software
                development lifecycle involves working with so many different people and departments and, as someone who loves to build new relationships, it’s
                great to be able to come together with other professionals who are striving towards the same goal.
              </p>
              <p>
                I love to practice sports and meet new people in my spare time. Some activities I am passionate about are running, volleyball and handball.
                During the winter season, I spend most of my time reading self-improvement books and challenging myself to learn new technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutComponent;
