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
        imageSrc:
            'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
        title: 'Studio Room',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
        pricingText: 'USD 50/Day',
        features: ['Free Wifi', 'Free breakfast'],
        },
        {
        imageSrc:
            'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        title: 'Deluxe Room',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
        pricingText: 'USD 80/Day',
        features: ['Free Wifi', 'Free breakfast'],
        },
        {
        imageSrc:
            'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
        title: 'King Deluxe Room',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
        pricingText: 'USD 150/Day',
        features: ['Free Wifi', 'Free breakfast', 'Discounted Meals'],
        },
        {
        imageSrc:
            'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Royal Suite',
        description: 'Lorem ipsum dolor sit amet, consectur dolori',
        pricingText: 'USD 299/Day',
        features: [
            'Free Wifi',
            'Free breakfast',
            'Discounted Meals',
            "MacBook for work use (hotel's property)",
        ],
        },
    ]

     const sliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
    }

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
          <ul className={'slick-dots'} style={{ display: 'block'}} > {dots} </ul>
      ),
      customPaging: i => (
        <div
          style={{
            width: "30px",
            color: "blue",
            border: "1px blue solid"
          }}
        >
          {i + 1}
        </div>
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