import Project from '../components/project';
export default function Home() {
    return ( 

    <main>
            <section className="p-4 p-md-5">
                <div className="d-flex flex-row justify-content-around">
                    <div className="d-flex flex-column justify-content-center gap-3">
                        <h1>Hello, I'm <span className="text-light-emphasis">Gabriel Vich</span></h1>
                        <h2>Front End Developer</h2>
                    </div>
                <img id="portrait" className="rounded-circle object-fit-cover" src="/images/gabriel-main.jpeg" alt="Gabriel Vich Portrait" />

                </div>
            </section>

            <section className="p-4 p-md-5 ">
                <h3 className="text-center pb-3">About me</h3>
                <p>
                    <span className="text-light-emphasis">Front End Developer </span>with two years of experience in web design and application development using <span className="text-light-emphasis">Laravel and React</span>. I am looking for a Front end/Full Stack Web Developer position to continue growing professionally and applying my knowledge.
                    I have worked with <span className="text-light-emphasis">Scrum </span>agile methodology. I have strong problem-solving skills, learn quickly, and enjoy acquiring new knowledge, so I am constantly improving my skills.

                </p>
            </section>
            <section className="p-4 p-md-5 ">
            <h3 className="text-center pb-3">Skills</h3>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
                <i className="devicon-html5-plain-wordmark" title="HTML5"></i>
                <i className="devicon-css3-plain-wordmark " title="CS3"></i>
                <i className="devicon-javascript-plain" title="Javascript"></i>
                <i className="devicon-react-original" title="React.js"></i>
                <i className="devicon-angular-plain" title="Angular"></i>
                <i className="devicon-laravel-original" title="Laravel"></i>
                <i className="devicon-git-plain" title="Git"></i>
                <i className="devicon-nodejs-plain-wordmark" title="Node.js"></i>
                <i className="devicon-nextjs-original-wordmark" title="Next.js"></i>
                <i className="devicon-azuresqldatabase-plain" title="SQL"></i>
                <i className="devicon-bootstrap-plain" title="Bootstrap"></i>
                <i className="devicon-tailwindcss-original" title="Tailwind"></i>
                <i className="devicon-php-plain" title="PHP"></i>
                <i className="devicon-java-plain" title="JAVA"></i>
                <i className="devicon-figma-plain" title="Figma"></i>
            </div>
            </section>

            <section className="p-4 p-md-5 ">
            <h3 className="text-center pb-3">Projects overview</h3>
                <div className="projects d-flex flex-row flex-wrap justify-content-center gap-3">
                        <Project title="Red social en Laravel" image="images/red-social.png"/>
                        <Project title="Portafolio En React" image="images/diseño1.jpeg"/>
                        <Project title="Página en Wordpress" image="images/diseño1.jpeg"/>
                        <Project title="Gestor de contenido y cuentas en PHP" image="images/gestor-php.png"/>
                </div>
            </section>
            </main>

    );
}