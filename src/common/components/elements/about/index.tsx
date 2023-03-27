import styles from '@/styles/About.module.scss';
import React, { CSSProperties, useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import fileDownload from 'js-file-download';

const AboutComponent = () => {
  const handleDownload = async (url: string, filename: string) => {
    axios
      .get(url, {
        responseType: 'blob',
      })
      .then((res: { data: any }) => {
        fileDownload(res.data, filename);
      });
  };

  return (
    <section className="about_area_two" id="about">
      <div className="container">
        <div className="row row align-items-center">
          <div className="col-lg-4">
            <div className={'about_img '}>
              <Image src="/images/myself.WebP" className={'img-fluid rounded-circle '} alt="Fernando" width="296" height="222" />
              <button
                type="button"
                aria-label=""
                className={'btn fadeInDown theme_btn active ' + styles.resume}
                onClick={() => {
                  handleDownload('/resume/Fernando de Matos Araujo.pdf', 'Fernando_Resume.pdf');
                }}
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
                I am a passionate and creative problem-solving software engineer specializing in the web development arena. For the last few years, I have been
                developing enterprise and portal applications to solve issues related to the financial market using C# programming language.
              </p>
              <p>
                I am hands-on in all stages of software development cycle, from planning to deployment. Every day is different in my routine; my tasks may
                involve analyzing algorithms, altering code, fixing bugs, brainstorming ideas, or integrating new systems.
              </p>
              <p>
                The most passionate thing I love in software development is the opportunity to work with people from a wide range of disciplines. The software
                development lifecycle involves working with many different people and departments, allowing me to learn about various topics. As someone who
                loves to build new relationships, it’s great to come together with other professionals striving towards the same goal.
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
