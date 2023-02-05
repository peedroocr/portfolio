const MyExperience = () => {

    return (<article className="my-experience-article" id="aboutMe">
        <section className="my-experience-section " >
            <div className="div-section-text-experience left">
                <span className="title-experience">Work experience</span>
                <ul>
                    <li className="li-experience">
                        <span className="experience-title">KPMG – Senior Consultant </span>
                        <span className="subtitle-experience">June 2022 – Today</span>
                        <ul>
                            <li>
                                <p className="experience-description">Implementation and configuration of NetReveal (Sofware that use SQL and relational database) in international banking entities</p>
                            </li>
                        </ul>
                    </li>
                    <li className="li-experience">
                        <span className="experience-title">EY – Senior Consultant </span>
                        <span className="subtitle-experience">2020 – June 2022</span>
                        <ul>
                            <li>
                                <p className="experience-description">NetReveal development team management
                                </p>
                            </li>
                            <li>
                                <p className="experience-description">
                                    Analysis of requirements and definition of technical documentation
                                </p>
                            </li>
                            <li>
                                <p className="experience-description">Implementation and configuration of NetReveal (Sofware that use SQL ) in international
                                    banking entities
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li className="li-experience">
                        <span className="experience-title">EY - Junior Consultant </span>
                        <span className="subtitle-experience">2017 - 2020</span>
                        <ul>
                            <li>
                                <p className="experience-description">Implementation and configuration of NetReveal (Sofware that use SQL ) in international
                                    banking entities</p>
                            </li>
                            <li>
                                <p className="experience-description">Definition of Test Cases</p>
                            </li>
                            <li>
                                <p className="experience-description">Development of scenarios in the Swift tool</p>
                            </li>
                        </ul>
                    </li>
                    <li className="li-experience">
                        <span className="experience-title">The room 1.0 - Intern </span>
                        <span className="subtitle-experience">March 2017 – June 2017</span>
                        <ul>
                            <li>
                                <p className="experience-description">Developments with REACT, NodeJS and PHP</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="div-section-text-experience right">
                <span className="title-experience">Education</span>
                <ul>
                    <li>
                        <img src="./img/graduation.svg" alt="formation" className="img-experience" />
                        <div className="education-information">
                            <span className="experience-title width100">Web application development </span>
                            <span className="education-description">IES Politecnico Jesus Marin 2015-2017</span>
                        </div>
                    </li>
                </ul>
                <span className="span-h1 title-experience">Certifications</span>
                <ul>
                    <li>
                        <img src="./img/udemy.svg" alt="formation" className="img-experience" />
                        <div className="education-information ">
                            <span className="experience-title width100">React - The Complete Guide </span>
                            <span className="education-description">Udemy October 2020</span>
                        </div>
                    </li>
                    <li>
                        <img src="./img/udemy.svg" alt="formation" className="img-experience" />
                        <div className="education-information">
                            <span className="experience-title width100">2020 Complete Python Bootcamp</span>
                            <span className="education-description">Udemy March 2020</span>
                        </div>
                    </li>
                </ul>
                <span className="title-experience skills">Skills</span>
                <ul>
                    <li>
                        <div className="skill-information">
                            <img src="./img/javascript.svg" alt="javascript" className="img-skills" />
                            <span className="skill-title">Javascript </span>

                        </div>
                        <div className="skill-information">
                            <img src="./img/react.svg.png" alt="javascript" className="img-skills" />
                            <span className="skill-title">React</span>

                        </div>
                        <div className="skill-information">
                            <img src="./img/mysql-ar21.svg" alt="javascript" className="img-skills" />
                            <span className="skill-title">Mysql </span>

                        </div>
                        <div className="skill-information">
                            <img src="./img/Node.js_logo.svg" alt="javascript" className="img-skills" />
                            <span className="skill-title">NodeJs </span>
                        </div>
                        <div className="skill-information">
                            <img src="./img/php.svg" alt="javascript" className="img-skills" />
                            <span className="skill-title">PHP </span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>


    </article>
    )
}

export default MyExperience;