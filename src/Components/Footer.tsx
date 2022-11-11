import React, { useState } from 'react';

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
            <ul className={'react-reveal list_style'}>
              <li>
                <a href="www.linkedin.com/in/fernandomaraujo" aria-label="">
                  <i className={'social_linkedin'} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/devfaraujo" aria-label="">
                  <i className={'social_twitter'} />
                </a>
              </li>
              <li>
                <a href="https://github.com/devfernandoaraujo/" aria-label="">
                  <i className={'social_github'} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <img
                      src={isHovering ? process.env.PUBLIC_URL + '/images/github_hover.png' : process.env.PUBLIC_URL + '/images/github.png'}
                      alt="github.png"
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
