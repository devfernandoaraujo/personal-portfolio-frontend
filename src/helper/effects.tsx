import React from 'react';

//effects used when user scroll down
export const observer = new IntersectionObserver((entries) => {
  entries.forEach((element) => {
    if (element.isIntersecting) {
      alert();
      element.target.classList.add('react-reveal fadeInUp');
    }
  });
});
