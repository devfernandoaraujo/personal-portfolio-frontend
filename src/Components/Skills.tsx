import React from 'react';

const SkillsComponent = () =>{
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
                            <div className={'row'} >
                                <div className={'col-md-3 col-sm-6 col-md-6 s_item'}>
                                    <div className={'counter_item text-center wow fadeInUp'} data-wow-delay="0.1s">
                                        <i className={'icon-undefined'}/>
                                        <h3 className={'t_color'} data-countup="true">200</h3>
                                        <p>Design Process</p>
                                    </div>
                                </div>
                                <div className={'col-md-3 col-sm-6 col-md-6 s_item'} >
                                    <div className={'counter_item text-center wow fadeInUp'} data-wow-delay="0.1s">
                                        <i className={'icon-undefined'} />
                                        <h3 className={'t_color' }
                                            data-countup="true">120</h3>
                                        <p>UX Thinking</p>
                                    </div>
                                </div>
                                <div className={'col-md-3 col-sm-6 col-md-6 s_item'}>
                                    <div className={'counter_item text-center wow fadeInUp'} data-wow-delay="0.1s">
                                        <i className={'icon-undefined'} />
                                        <h3 className={'t_color' }  data-countup="true">4</h3>
                                        <p>Prototype</p>
                                    </div>
                                </div>
                                <div className={'col-md-3 col-sm-6 col-md-6 s_item' }>
                                    <div className={'counter_item text-center wow fadeInUp' }
                                            data-wow-delay="0.1s">
                                        <i className={'icon-undefined' }/>
                                        <h3 className={'t_color' } data-countup="true">10</h3>
                                        <p>Support</p>
                                    </div>
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