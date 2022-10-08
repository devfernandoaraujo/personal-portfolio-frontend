import React from 'react';

const SkillsComponent = () =>{

    const carouselImages = {
        img1: process.env.PUBLIC_URL  + '/images/asp-net.png',
        img2: process.env.PUBLIC_URL  + '/images/bootstrap-5.svg',
        img3: process.env.PUBLIC_URL  + '/images/c-sharp.svg',
        img4: process.env.PUBLIC_URL  + '/images/git.svg',
        img5: process.env.PUBLIC_URL  + '/images/html.svg',
        img6: process.env.PUBLIC_URL  + '/images/javascript.svg',
        img7: process.env.PUBLIC_URL  + '/images/jquery.svg',
        img8: process.env.PUBLIC_URL  + '/images/json.svg',
        img9: process.env.PUBLIC_URL  + '/images/react.svg',
        img10: process.env.PUBLIC_URL  + '/images/sql-server.svg',
        img11: process.env.PUBLIC_URL  + '/images/typescript.svg',
        img12: process.env.PUBLIC_URL  + '/images/visual-studio.svg',
        img13: process.env.PUBLIC_URL  + '/images/visual-studio-code.svg'
    }

    return(
        <section className={'skill_area_two bg_color'} id="skill">
            <div className={'container'}>
                <div className={'row align-items-center'} >
                    <div className={'col-lg-6'} >
                        <div className={'skill_content_two'}>
                            <div className={'section_title_two undefined'} >
                                <h6>My Featured Skills</h6>
                                <h2>Some Interesting Facts About Me.</h2>
                            </div>
                            <p>I realized that running is a part of my life. Through running I discovered that I can be able to improve my skills on any subject I what to learn or do. </p>
                            <div className={"section_title_two undefined"}>
                                <h5>Some of the technologies I work with </h5>
                            </div>
                            <div className={ "carouselSkills" }>
                                <div id="carouselSkills" className={'carousel carousel-dark slide' } data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselSkills" data-bs-slide-to="0" className={"active"} aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselSkills" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselSkills" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        <button type="button" data-bs-target="#carouselSkills" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                        <button type="button" data-bs-target="#carouselSkills" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                        <button type="button" data-bs-target="#carouselSkills" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                        <button type="button" data-bs-target="#carouselSkills" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                        <button type="button" data-bs-target="#carouselSkills" data-bs-slide-to="7" aria-label="Slide 8"></button>
                                        <button type="button" data-bs-target="#carouselSkills" data-bs-slide-to="8" aria-label="Slide 9"></button>
                                        <button type="button" data-bs-target="#carouselSkills" data-bs-slide-to="9" aria-label="Slide 10"></button>
                                        <button type="button" data-bs-target="#carouselSkills" data-bs-slide-to="10" aria-label="Slide 11"></button>
                                        <button type="button" data-bs-target="#carouselSkills" data-bs-slide-to="11" aria-label="Slide 12"></button>
                                        <button type="button" data-bs-target="#carouselSkills" data-bs-slide-to="12" aria-label="Slide 13"></button>
                                    </div>
                                    <div className={'carousel-inner'}>
                                        <div className={'carousel-item text-center active'}>
                                            <img src={ carouselImages.img1 } className={'d-block rounded mx-auto w-50 h-50'} alt="..." />
                                            <div className={"carousel-caption d-none d-md-block"}>
                                                
                                            </div>
                                        </div>
                                        <div className={'carousel-item text-center'}>
                                            <img src={ carouselImages.img10 } className={'d-block rounded mx-auto w-50 h-50 '} alt="..." />
                                            
                                        </div>
                                        <div className={'carousel-item text-center'}>
                                            <img src={carouselImages.img11} className={'d-block rounded mx-auto w-50 h-50'} alt="..." />
                                            <h5>TypeScript</h5>
                                        </div>
                                        <div className={'carousel-item text-center'}>
                                            <img src={carouselImages.img12} className={'d-block rounded mx-auto w-50 h-50'} alt="..." />
                                            <h5>Visual Studio</h5>
                                        </div>
                                        <div className={'carousel-item text-center'}>
                                            <img src={carouselImages.img13} className={'d-block rounded mx-auto w-50 h-50'} alt="..." />
                                            <h5>Visual Studio Code</h5>
                                        </div>
                                        <div className={'carousel-item text-center'}>
                                            <img src={carouselImages.img2} className={'d-block rounded mx-auto w-50 h-50'} alt="..." />
                                            <h5>Bootstrap</h5>
                                        </div>
                                        <div className={'carousel-item text-center'}>
                                            <img src={carouselImages.img3} className={'d-block rounded mx-auto w-50 h-50'} alt="..." />
                                            <h5>Microsoft C#</h5>
                                        </div>
                                        <div className={'carousel-item text-center'}>
                                            <img src={carouselImages.img4} className={'d-block rounded mx-auto w-50 h-50'} alt="..." />
                                            <h5>Git</h5>
                                        </div>
                                        <div className={'carousel-item text-center'}>
                                            <img src={carouselImages.img5} className={'d-block rounded mx-auto w-50 h-50'} alt="..." />
                                            <h5>HTML</h5>
                                        </div>
                                        <div className={'carousel-item text-center'}>
                                            <img src={carouselImages.img6   } className={'d-block rounded mx-auto w-50 h-50'} alt="..." />
                                            <h5>JavaScript</h5>
                                        </div>
                                        <div className={'carousel-item text-center'}>
                                            <img src={carouselImages.img7} className={'d-block rounded mx-auto w-50 h-50'} alt="..." />
                                            
                                        </div>
                                        <div className={'carousel-item text-center'}>
                                            <img src={carouselImages.img8} className={'d-block rounded mx-auto w-50 h-50'} alt="..." />
                                            
                                        </div>
                                        <div className={'carousel-item text-center'}>
                                            <img src={carouselImages.img9} className={'d-block rounded mx-auto w-50 h-50'} alt="..." />
                                            <h5>React</h5>
                                        </div>
                                    </div>
                                    <button className={"carousel-control-prev"} type="button" data-bs-target="#carouselSkills" data-bs-slide="prev">
                                        <span className={"carousel-control-prev-icon"} aria-hidden="true"></span>
                                        <span className={"visually-hidden"}>Previous</span>
                                    </button>
                                    <button className={"carousel-control-next"} type="button" data-bs-target="#carouselSkills" data-bs-slide="next">
                                        <span className={"carousel-control-next-icon"} aria-hidden="true"></span>
                                        <span className={"visually-hidden"}>Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className={'col-lg-6'}>
                            <img className={'fact_img'} src={ process.env.PUBLIC_URL +  '/images/mobile.d871640b.svg'} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillsComponent;