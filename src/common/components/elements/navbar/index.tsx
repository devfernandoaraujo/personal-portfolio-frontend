import React, { CSSProperties, useState, useEffect, useRef } from 'react';
import styles from '@/styles/Navbar.module.scss';
import Image from 'next/image';

const NavbarComponent = () => {
  const [fix, setFix] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  ///Change the color of the NavBar if the user scroll down the page.
  useEffect(() => {
    const setFixed = () => {
      if (window.scrollY >= 10) {
        setFix(true);
      } else {
        setFix(false);
      }
    };

    window.addEventListener('scroll', setFixed);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const menuHide = () => {
    let menu = document.getElementById('navbarCollapse');

    menu?.classList.remove('show');
  };

  return (
    <div className={'sticky-outer-wrapper fixed-top'}>
      <div className={'sticky-inner-wrapper ' + styles.innerWrapper}>
        <nav className={fix ? 'navbar navFixed navbar-expand-lg navbar-light menu_two' : 'navbar  navbar-expand-lg navbar-light menu_two'}>
          <div className={'container'}>
            <a href="https://fernandomatosaraujo.com" aria-label="" className={'navbar-brand logo_h'}>
              <Image
                src="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mFUupONhBxCFDFQcLoiKOUsUiWChthVYdTC79gyYNSYqLo+BacPBnserg4qyrg6sgCP6AODo5KbpIid8lhRYx3nHcw3vf+3L3HSA0q0w1AxOAqllGOhEXc/lVsfcVIQRojiEoMVNPZhaz8Bxf9/Dx/S7Gs7zr/hx9SsFkgE8knmO6YRFvEM9sWjrnfeIIK0sK8TnxuEEXJH7kuuzyG+eSwwLPjBjZ9DxxhFgsdbHcxaxsqMTTxFFF1ShfyLmscN7irFbrrH1P/sJwQVvJcJ3WMBJYQhIpiJBRRwVVWIjRrpFiIk3ncQ//kONPkUsmVwWMHAuoQYXk+MH/4HdvzeLUpJsUjgM9L7b9MQL07gKthm1/H9t26wTwPwNXWsdfawKzn6Q3Olr0COjfBi6uO5q8B1zuAINPumRIjuSnJRSLwPsZfVMeGLgFQmtu39rnOH0AstSr5Rvg4BAYLVH2use7g919+7em3b8fNEByjuBrkcMAAAAGYktHRACzAJ0AndVRDeEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfmCgQENBf26wMlAAADbElEQVRo3u2bP0gcQRSHv1u2sdjGQAqLFBYJCCHYCGOVxkCEyZGQNvaXkMoiKSSIWBiClSTXayvKZUEhNlYupJEgCLGwsLAQcs0UlqaYucuy7O7d3u3u7e7l14njOt+8+fPevDc1MpLjepPAPDALzADTwBQwCUyYZrdAG7gGLoFz4BQ4UVK0s+hXLWXIh0AdWASeDvm5Y+AAaCkpLgoF7LheHVgCXmU0YfaAbSVFa6TAjuu9BBrAAvnoCGgqKfZzBXZc7wmwDLxhNNoBNpUUvzIHdlyvAXwEHjBaXQEbSopmJsCO690HVoD3FEtbwLqS4iY1YMf1HgOfgNcUU7vAmpLibGhgx/XmgFXgOcXWIbCqpPg5MLCx7OcSwPqhP8RZutZjzX4t8DSOm97vota0FfOHKyWExfR5JZGFzdHzjXLrbdiRVYtwKr4X4JxN45x+EXROwqb0cgVgMQzLsRY2vvEe1dIrv+8dtHCD6qkROqVNiLdQQeAFwwaA7fvF0qBfVFIMG2beZQy9BLS6a9jcVPzOE3IE0I+UFBcdC9dHBZqj6sCXzhperDhsl7Fmbhf/JAUOTsGwwei06TVQOUznju7Z6KvUgdZZvxbvF3yQmZRwsOYt9L1xLjuz43p3wQ76f1ZS1JJ+N2H7WRt9ST7yY2iYbyopan1aesZGZwRS16DrMu3BCGjaRqc/UrduVLuogYjbHxzXu0sJespG53oKo4yPvkmLf4mtQsKmaF2ACasoPnPcOZ6mLHTKMvUNK0ln84IFbi10fjaT3dkPHgXQC7afWZVgcNoWOhmd6XQeFDYDXdvozPtc3jtn1Dcz3qUvbXSZQa5HxAijrnMbXVMx8iB+UA8r4f88tYCTNHbbfttlETEl0ImtpGg7rndMTBFKjvFqljpWUrQ7jsdBBdzGXjroOB5gbvTKqAQxdKsLbOqgqpZx8GuvU+vl96W3KwzcZQvmln5QvezDkZLimT948KtZQes2g9GSfwPYRxd9VUU7waq9sHh4E51MLruuDAuxwCZjvlEB4I2w0kQr4mxroivcyqqtqJLEuCuedXQJUNm0a/pOImBT57SGLvYqiw7RJYg3iYEN9Bm67PCwJLCrveot/xeXxkCPT/lwAHw8CsQD0OPzBCAAPh6PPELAx+MZTwj4eDzUioAv5FO8v94DjYOYEhMbAAAAAElFTkSuQmCC"
                alt="logo"
                width="60"
                height="60"
              />
              <Image
                src="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mFUupONhBxCFDFQcLoiKOUsUiWChthVYdTC79gyYNSYqLo+BacPBnserg4qyrg6sgCP6AODo5KbpIid8lhRYx3nHcw3vf+3L3HSA0q0w1AxOAqllGOhEXc/lVsfcVIQRojiEoMVNPZhaz8Bxf9/Dx/S7Gs7zr/hx9SsFkgE8knmO6YRFvEM9sWjrnfeIIK0sK8TnxuEEXJH7kuuzyG+eSwwLPjBjZ9DxxhFgsdbHcxaxsqMTTxFFF1ShfyLmscN7irFbrrH1P/sJwQVvJcJ3WMBJYQhIpiJBRRwVVWIjRrpFiIk3ncQ//kONPkUsmVwWMHAuoQYXk+MH/4HdvzeLUpJsUjgM9L7b9MQL07gKthm1/H9t26wTwPwNXWsdfawKzn6Q3Olr0COjfBi6uO5q8B1zuAINPumRIjuSnJRSLwPsZfVMeGLgFQmtu39rnOH0AstSr5Rvg4BAYLVH2use7g919+7em3b8fNEByjuBrkcMAAAAGYktHRACzAJ0AndVRDeEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfmCgQENBf26wMlAAADbElEQVRo3u2bP0gcQRSHv1u2sdjGQAqLFBYJCCHYCGOVxkCEyZGQNvaXkMoiKSSIWBiClSTXayvKZUEhNlYupJEgCLGwsLAQcs0UlqaYucuy7O7d3u3u7e7l14njOt+8+fPevDc1MpLjepPAPDALzADTwBQwCUyYZrdAG7gGLoFz4BQ4UVK0s+hXLWXIh0AdWASeDvm5Y+AAaCkpLgoF7LheHVgCXmU0YfaAbSVFa6TAjuu9BBrAAvnoCGgqKfZzBXZc7wmwDLxhNNoBNpUUvzIHdlyvAXwEHjBaXQEbSopmJsCO690HVoD3FEtbwLqS4iY1YMf1HgOfgNcUU7vAmpLibGhgx/XmgFXgOcXWIbCqpPg5MLCx7OcSwPqhP8RZutZjzX4t8DSOm97vota0FfOHKyWExfR5JZGFzdHzjXLrbdiRVYtwKr4X4JxN45x+EXROwqb0cgVgMQzLsRY2vvEe1dIrv+8dtHCD6qkROqVNiLdQQeAFwwaA7fvF0qBfVFIMG2beZQy9BLS6a9jcVPzOE3IE0I+UFBcdC9dHBZqj6sCXzhperDhsl7Fmbhf/JAUOTsGwwei06TVQOUznju7Z6KvUgdZZvxbvF3yQmZRwsOYt9L1xLjuz43p3wQ76f1ZS1JJ+N2H7WRt9ST7yY2iYbyopan1aesZGZwRS16DrMu3BCGjaRqc/UrduVLuogYjbHxzXu0sJespG53oKo4yPvkmLf4mtQsKmaF2ACasoPnPcOZ6mLHTKMvUNK0ln84IFbi10fjaT3dkPHgXQC7afWZVgcNoWOhmd6XQeFDYDXdvozPtc3jtn1Dcz3qUvbXSZQa5HxAijrnMbXVMx8iB+UA8r4f88tYCTNHbbfttlETEl0ImtpGg7rndMTBFKjvFqljpWUrQ7jsdBBdzGXjroOB5gbvTKqAQxdKsLbOqgqpZx8GuvU+vl96W3KwzcZQvmln5QvezDkZLimT948KtZQes2g9GSfwPYRxd9VUU7waq9sHh4E51MLruuDAuxwCZjvlEB4I2w0kQr4mxroivcyqqtqJLEuCuedXQJUNm0a/pOImBT57SGLvYqiw7RJYg3iYEN9Bm67PCwJLCrveot/xeXxkCPT/lwAHw8CsQD0OPzBCAAPh6PPELAx+MZTwj4eDzUioAv5FO8v94DjYOYEhMbAAAAAElFTkSuQmCC"
                alt="logo 2"
                width="60"
                height="60"
              />
            </a>
            <button
              type="button"
              className={'navbar-toggler'}
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className={'icon-bar'}></span>
              <span className={'icon-bar'}></span>
              <span className={'icon-bar'}></span>
            </button>
            <div className={'collapse navbar-collapse offset'} id="navbarCollapse">
              <ul className={'nav navbar-nav m-auto'} id="navbar-menu-top">
                <li className={'nav-item'}>
                  <a href="#home" aria-label="" className={activeSection === 'home' ? 'nav-link  active' : 'nav-link'}>
                    Home
                  </a>
                </li>
                <li className={'nav-item'}>
                  <a href="#service" aria-label="" onClick={menuHide} className={activeSection === 'service' ? 'nav-link  active' : 'nav-link'}>
                    Services
                  </a>
                </li>
                <li className={'nav-item'}>
                  <a href="#about" aria-label="" onClick={menuHide} className={activeSection === 'about' ? 'nav-link  active' : 'nav-link'}>
                    About
                  </a>
                </li>
                <li className={'nav-item'}>
                  <a href="#portfolio" aria-label="" onClick={menuHide} className={activeSection === 'portfolio' ? 'nav-link  active' : 'nav-link'}>
                    Portfolio
                  </a>
                </li>
                <li className={'nav-item'}>
                  <a href="#skill" aria-label="" onClick={menuHide} className={activeSection === 'skill' ? 'nav-link  active' : 'nav-link'}>
                    Skills
                  </a>
                </li>
                <li className={'nav-item'}>
                  <a href="#testimonial" aria-label="" onClick={menuHide} className={activeSection === 'testimonial' ? 'nav-link  active' : 'nav-link'}>
                    Testimonial
                  </a>
                </li>
                <li className={'nav-item'}>
                  <a href="#contacts" aria-label="" onClick={menuHide} className={activeSection === 'contacts' ? 'nav-link  active' : 'nav-link'}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavbarComponent;
