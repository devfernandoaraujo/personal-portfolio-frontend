import styles from '@/styles/Banner.module.scss';
import React, { CSSProperties, useState, useEffect } from 'react';
import Image from 'next/image';
import { binaryImages } from '@/common/utils/binaryImages';

const BannerComponent = () => {
  const [degrade, setDegrade] = useState(false);

  useEffect(() => {
    ///Change the color of the NavBar if the user scroll down the page.
    const changeDegrade = () => {
      if (window.scrollY >= 10) {
        setDegrade(true);
      } else {
        setDegrade(false);
      }
    };
    return () => {
      window.removeEventListener('scroll', changeDegrade);
    };
  }, []);

  return (
    <section className={degrade ? 'frelencer_banner_area frelencer_banner_area-degrade' : 'frelencer_banner_area'} id="home">
      <div className={'home_bubble'}>
        <div className={'bubble b_one'} />
        <div className={'bubble b_two'} />
        <div className={'bubble b_three'} />
        <div className={'bubble b_four'} />
        <div className={'bubble b_five'} />
        <div className={'bubble b_six'} />
      </div>
      <Image className={styles.banner + ' react-reveal fadeInRight s_shap'} src="/images/banner_img.d852f421.svg" width="0" height="0" alt="banner" />
      <div className={'container'}>
        <div className={'row'}>
          <div className={'col-lg-6'}>
            <div className={'frelencer_content'}>
              <h2 className={'react-reveal fadeInUp t_color ' + styles.presentation}>
                Hey there!
                <br /> I&apos;m Fernando Araujo <span>Software Engineer</span>
              </h2>
              <h4 className={'react-reveal fadeInUp ' + styles.presentation2}>
                <span>I help companies with their digital brand</span>
              </h4>
              <a href="#contacts" aria-label="" className={'react-reveal fadeInDown theme_btn active ' + styles.contactMe}>
                Hire me
              </a>
            </div>
          </div>
          <div className={'col-lg-6'}>
            <div className={'frelencer_img'}>
              <Image
                className={styles.imageOne + ' react-reveal fadeInLeft f_img_one'}
                src="/images/f-man20b27179.webp"
                alt="f-man20b27179"
                width="179"
                height="236"
              />
              <Image
                className={styles.imageTwo + ' react-reveal fadeInRight f_img_two'}
                src="/images/table1040818b.webp"
                alt="table1040818b"
                width="339"
                height="246"
              />
              <Image
                className={'react-reveal fadeInDown f_img_three sticky-top ' + styles.imageThree}
                src={`data:image/webp;base64,${binaryImages.bannerImages.imageThree}`}
                alt="imageThree"
                width={162}
                height={69}
              />
              <Image className="react-reveal fadeInDown f_img_four imageFour" src="/images/shadow1add9ee7.webp" alt="shadow1add9ee7" width={412} height={267} />
              <div className={'react-reveal fadeInDown f_img_five ' + styles.imageFive}>
                <Image className="" src={`data:image/webp;base64,${binaryImages.bannerImages.imageFive}`} alt="imageFive" width={56} height={83} />
              </div>
              <div className={'f_img_six'}>
                <Image className="" src={`data:image/webp;base64,${binaryImages.bannerImages.imageSix}`} alt="imageSix" width={56} height={83} />
              </div>
              <div className={'f_img_seven'}>
                <Image className="" src={`data:image/webp;base64,${binaryImages.bannerImages.imageSeven}`} alt="img_seven" width={56} height={83} />
              </div>
              <div className={'f_img_eight'}>
                <Image className="" src={`data:image/webp;base64,${binaryImages.bannerImages.imageEight}`} alt="img_eight" width={56} height={83} />
              </div>
              <div className={'f_img_nine'}>
                <Image className="" src={`data:image/webp;base64, ${binaryImages.bannerImages.imageNine}`} alt="img_nine" width={56} height={83} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerComponent;
