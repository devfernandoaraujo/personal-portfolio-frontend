import styles from '@/styles/Portfolio.module.scss';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioComponent = () => {
  return (
    <section className={'portfolio_area_two bg_color'} id="portfolio">
      <div className={'container'}>
        <div className={'row'}>
          <div className={'col-lg-12'}>
            <div className={'portfolio_slider_info mb_60'}>
              <div className={'section_title_two undefined'}>
                <h6 className={'react-reveal fadeInUp mb_0 title_p ' + styles.description}>What I have been doing</h6>
                <h2 className={'react-reveal fadeInUp mb_0 title_h2 t_color ' + styles.title}>Portfolio</h2>
              </div>
              <div className={'react-reveal fadeInUp row ' + styles.portfolio}>
                <div className={'col-lg-4 col-sm-6'}>
                  <div className={'portfolio_post bg_w  d-flex flex-column'}>
                    <div className={'portfolio_img row'}>
                      <Image className="img-fluid" src="/images/dor-app.webp" alt="dor-app.webp" width="148" height="210" />
                    </div>
                    <div className={'portfolio_content flex-grow-1'}>
                      <Link href="/#" aria-label="">
                        <h2>Dor Mobile App</h2>
                      </Link>
                      <p>
                        Welcome to the VIP communication channel between you and an exclusive call center, available 24 hours a day to offer differentiated
                        access to the services of the Rede D’Or São Luiz. Everything always in the palm of your hand, through a simple app, but full of
                        advantages.
                      </p>
                      <a
                        href={'https://play.google.com/store/apps/details?id=com.cognizant.dor'}
                        rel="noopener noreferrer"
                        aria-label=""
                        className="read_btn"
                        target={'_blank'}
                      >
                        See more<i className="arrow_right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={'col-lg-4 col-sm-6'}>
                  <div className={'portfolio_post bg_w  d-flex flex-column'}>
                    <div className={'portfolio_img row'}>
                      <Image className="img-fluid" src="/images/agiliza.webp" alt="agiliza.webp" width="295" height="210" />
                    </div>
                    <div className={'portfolio_content flex-grow-1'}>
                      <Link href="/#" aria-label="">
                        <h2>Agiliza</h2>
                      </Link>
                      <p>
                        Having a decision regarding lending money to people takes time and effort. Having this in mind, Agiliza was developed to support Itau
                        bank&apos;s Business Analysts to have all data they need to analyze clients and prospect clients based on a series of parameters such as
                        credit score and the relationship between the client and the bank.
                      </p>
                      <a href="#portfolio" className="read_btn" aria-label="">
                        See more<i className="arrow_right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={'col-lg-4 col-sm-6'}>
                  <div className={'portfolio_post bg_w  d-flex flex-column'}>
                    <div className={'portfolio_img d-flex col-12'}>
                      <span className={'placeholder col-12'}></span>
                    </div>
                    <div className={'portfolio_content flex-grow-1'}>
                      <a href={'https://github.com/devfernandoaraujo/SignalRChat'} aria-label="" rel="noopener noreferrer">
                        <h2>Chat App</h2>
                      </a>
                      <p>
                        Demo application that simplifies the process of adding real-time web functionality to applications. The main idea behind this app is to
                        interact between two or more people through real-time text messages.
                      </p>
                      <a
                        href={'https://github.com/devfernandoaraujo/SignalRChat'}
                        aria-label=""
                        rel="noopener noreferrer"
                        className="read_btn"
                        target={'_blank'}
                      >
                        See more<i className="arrow_right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioComponent;
