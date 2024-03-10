import React, { useState } from 'react';
import styles from '@/styles/Footer.module.scss';
import Image from 'next/image';

const FooterComponent = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <section className={'footer-area-two'}>
      <div className={'container'}>
        <div className={'row footer-content'}>
          <div className={'col-sm-4'}>
            <ul className={' react-reveal list_style'} style={{ opacity: '1' }}>
              <li className={styles.socialMedia}>
                <a href={'https://ca.linkedin.com/in/fernandomaraujo'} rel="noopener noreferrer" target="_blank">
                  <i className={'social_linkedin'} />
                </a>
              </li>
              <li className={styles.socialMedia}>
                <a href={'https://twitter.com/devfaraujo/'} rel="noopener noreferrer" target="_blank">
                  <i className={'social_twitter'} />
                </a>
              </li>
              <li className={styles.socialMedia}>
                <a href={'https://github.com/devfernandoaraujo/'} rel="noopener noreferrer" target="_blank">
                  <i className={'social_github'} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <Image src={isHovering ? '/images/github-hover.webp' : '/images/github.webp'} alt="github.webp" width="33" height="33" />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterComponent;
