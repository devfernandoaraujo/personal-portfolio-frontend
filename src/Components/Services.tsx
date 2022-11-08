import React from 'react';

const ServicesComponent = () => {
  return (
    <div className={'service_area_two'} id="service">
      <div className={'container'}>
        <div className={'row align-items-center flex-row-reverse'}>
          <div className={'col-lg-5'}>
            <div className={'service_content'}>
              <div className={'section_title_two undefined'}>
                <h6>What I do ?</h6>
                <h2>Innovative solutions to grow your business</h2>
              </div>
              <p>
                I’m Fernando, a <span>Software Engineer</span> based in Canada. I happy to help you to grow your business.
              </p>
              <ul className={'nav nav-tabs'} id="myTab" role="tablist">
                <li className={'nav-item '} role="presentation">
                  <a
                    className={'nav-link active'}
                    id="database-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#pill-database"
                    href={process.env.PUBLIC_URL + '#service'}
                    role="tab"
                    aria-controls="pill-database"
                    aria-selected="true"
                  >
                    Database Design
                  </a>
                </li>
                <li className={'nav-item'} role="presentation">
                  <a
                    className={'nav-link'}
                    id="problem-solving-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#pill-problem-solving"
                    href={process.env.PUBLIC_URL + '#service'}
                    role="tab"
                    aria-controls="pill-problem-solving"
                    aria-selected="false"
                  >
                    Creative Problem Solving
                  </a>
                </li>
                <li className={'nav-item'} role="presentation">
                  <a
                    className={'nav-link'}
                    id="innovative-solution-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#pill-innovative-solution"
                    href={process.env.PUBLIC_URL + '#service'}
                    role="tab"
                    aria-controls="pill-innovative-solution"
                    aria-selected="false"
                  >
                    Create innovative solutions
                  </a>
                </li>
                <li className={'nav-item'} role="presentation">
                  <a
                    className={'nav-link'}
                    id="bug-fix-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#pill-bug-fix"
                    href={process.env.PUBLIC_URL + '#service'}
                    role="tab"
                    aria-controls="pill-bug-fix"
                    aria-selected="false"
                  >
                    Test new software &amp; fix bugs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={'col-lg-7'}>
            <div className={'tab-content'} id="myTabContent">
              <div className={'tab-pane fade show active'} id="pill-database" role="tabpanel" aria-labelledby="database-tab">
                <div className={'service_img'}>
                  <img id="service_img" src={process.env.PUBLIC_URL + '/images/database-design.svg'} alt="" />
                </div>
              </div>
              <div className={'tab-pane fade'} id="pill-problem-solving" role="tabpanel" aria-labelledby="problem-solving-tab">
                <div className={'service_img'}>
                  <img id="service_img" src={process.env.PUBLIC_URL + '/images/problem-solving.png'} alt="" />
                </div>
              </div>
              <div className={'tab-pane fade'} id="pill-innovative-solution" role="tabpanel" aria-labelledby="innovative-solution-tab">
                <div className={'service_img'}>
                  <img id="service_img" src={process.env.PUBLIC_URL + '/images/innovative-solutions.png'} alt="" />
                </div>
              </div>
              <div className={'tab-pane fade'} id="pill-bug-fix" role="tabpanel" aria-labelledby="bug-fix-tab">
                <div className={'service_img'}>
                  <img id="service_img" src={process.env.PUBLIC_URL + '/images/bug-fixing.png'} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
