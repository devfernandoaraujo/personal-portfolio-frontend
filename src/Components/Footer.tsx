import React, { useState } from 'react';

const FooterComponentStyle = {
  animation: {
    socialMedia: {
      animationFillMode: 'both forwards',
      animationDuration: '0.5ms',
      animationDelay: '1s',
      animationIterationCount: 1,
      opacity: 1,
      animationName: 'reactReveal',
    },
  },
};

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
            <ul className={' react-reveal list_style'} style={{ opacity: 1 }}>
              <li style={FooterComponentStyle.animation.socialMedia}>
                <a href={'https://ca.linkedin.com/in/fernandomaraujo'} rel="noopener noreferrer" target="_blank">
                  <i className={'social_linkedin'} />
                </a>
              </li>
              <li style={FooterComponentStyle.animation.socialMedia}>
                <a href={'https://twitter.com/devfaraujo/'} rel="noopener noreferrer" target="_blank">
                  <i className={'social_twitter'} />
                </a>
              </li>
              <li style={FooterComponentStyle.animation.socialMedia}>
                <a href={'https://github.com/devfernandoaraujo/'} rel="noopener noreferrer" target="_blank">
                  <i className={'social_github'} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <img
                      src={isHovering ? process.env.PUBLIC_URL + '/images/github-hover.webp' : process.env.PUBLIC_URL + '/images/github.webp'}
                      alt="github.webp"
                    />
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
