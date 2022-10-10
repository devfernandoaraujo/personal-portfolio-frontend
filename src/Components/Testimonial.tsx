import React, {useState} from 'react';

import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick'


const TestimonialComponent = () =>{
    
    const init =()=>{
        

    }
    init();

    const hotelCards = [
        {
            imageSrc: '' ,
            title: '',
            name: '',
            message: 'Lorem ipsum dolor sit amet, consectur dolori',
            relationship: ''
        
        },
        {
            imageSrc: '' ,
            title: '',
            name: '',
            message: 'Lorem ipsum dolor sit amet, consectur dolori',
            relationship: ''
        
        },
        {
            imageSrc: '' ,
            title: '',
            name: '',
            message: 'Lorem ipsum dolor sit amet, consectur dolori',
            relationship: ''
        
        },
        {
            imageSrc: '' ,
            title: '',
            name: '',
            message: 'Lorem ipsum dolor sit amet, consectur dolori',
            relationship: ''
        
        },
        {
            imageSrc: '' ,
            title: '',
            name: '',
            message: 'Lorem ipsum dolor sit amet, consectur dolori',
            relationship: ''
        
        },
    ]

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
        appendDots: dots => (
          <ul> {dots} </ul>
      ),
      customPaging: i => (
        <button>
          {i + 1}
        </button>
      )
        
    };


    return(
        <div className={'testimonial_area_two '} id="testimonial">
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-lg-6'}>
                        <div className={'testimonial_img'}>
                            <img src={ process.env.PUBLIC_URL + '/images/testimonial.bc1380d8.svg'} alt=""/>
                        </div>
                    </div>
                    <div className={'col-lg-6' }>
                        <div className={ 'testimonial_slider_info' }>
                            <div className={'section_title_two undefined'}>
                                <h6>Partners feedback</h6>
                                <h2>What his partners say about Fernando..</h2>
                            </div>
                            <div>
                              <Slider {...settings} >
                                    <div>
                                        <p>Tidio has given our clients a quick and easy way to send over thoughts and questions without delay or wait time! No second guessing – just asked and answered quickly in order to make their purchasing decisions easier!</p>
                                        <div className={'media'}>
                                            <div className={'author_img'}>
                                                <img src="./John Deo React Minimal Portfolio OnePage Template_files/our-coaches-7.66123bda.jpg" alt=""/>
                                            </div>
                                            <div className={'media-body'}>
                                                <h6>Edward Evans</h6>
                                                <span>Envato Customer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>Tidio has given our clients a quick and easy way to send over thoughts and questions without delay or wait time! No second guessing – just asked and answered quickly in order to make their purchasing decisions easier!</p>
                                        <div className={'media'}>
                                            <div className={'author_img'}>
                                                <img src="./John Deo React Minimal Portfolio OnePage Template_files/slider2.9d682e6d.png" alt=""/>
                                            </div>
                                            <div className={'media-body'}>
                                                <h6>Alex Smith</h6>
                                                <span>Envato Customer</span>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialComponent;