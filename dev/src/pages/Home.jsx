import Project from "../components/project";
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <main>
      <section className="p-4 p-md-5">
        <div className="d-flex flex-row justify-content-around">
          <div className="d-flex flex-column justify-content-center gap-3">
            <h1>
              Hello, I'm{" "}
              <span className="text-light-emphasis">Gabriel Vich</span>
            </h1>
            <h2>Front End Developer</h2>
            <Link className="nav-link" to="/contact"k>
            <button className="btn btn-primary px-4">Contact with me!</button>
            </Link>
          </div>
          <img
            id="portrait"
            className="rounded-circle object-fit-cover"
            src="/images/gabriel-main.jpeg"
            alt="Gabriel Vich Portrait"
          />
        </div>
        <div className="d-flex flex-row justify-content-center gap-2 pt-5">
          <div className="bg-primary p-2 p-md-4 rounded-4">
            <h3 className="text-light-emphasis">+2 years</h3>
            <p>working experience</p>
          </div>

          <div className="bg-primary p-2 p-md-4 rounded-4">
            <h3 className="text-light-emphasis">+3 years</h3>
            <p>Learning & solo projects</p>
          </div>
        </div>
      </section>

      <section className="p-4 p-md-5 ">
        <h3 className="text-center pb-3">About me</h3>
        <p>
          <span className="text-light-emphasis">Front End Developer </span>with
          two years of experience in web design and application development
          using <span className="text-light-emphasis">Laravel and React</span>.
          I am looking for a Front end/Full Stack Web Developer position to
          continue growing professionally and applying my knowledge. I have
          worked with <span className="text-light-emphasis">Scrum </span>agile
          methodology. I have strong problem-solving skills, learn quickly, and
          enjoy acquiring new knowledge, so I am constantly improving my skills.
        </p>
      </section>
      <section className="p-4 p-md-5 ">
  <div className="mb-4">
    
    <div className="bg-primary p-2 p-md-4 rounded-4">
      <h4 className="text-center mb-3">Frontend skills</h4>
      <div className="d-flex justify-content-center gap-3 flex-wrap">
      <i className="devicon-html5-plain-wordmark" title="HTML5"></i>
      <i className="devicon-css3-plain-wordmark" title="CSS3"></i>
      <i className="devicon-javascript-plain" title="JavaScript"></i>
      <i className="devicon-react-original" title="React.js"></i>
      <i className="devicon-angular-plain" title="Angular"></i>
      <i className="devicon-nextjs-original-wordmark" title="Next.js"></i>
      <i className="devicon-bootstrap-plain" title="Bootstrap"></i>
      <i className="devicon-tailwindcss-original" title="Tailwind CSS"></i>
      <i className="devicon-figma-plain" title="Figma (UI Design)"></i>
      </div>
    </div>
  </div>

  {/* BACKEND */}
  <div className="mb-4">
    
    <div className="bg-primary p-2 p-md-4 rounded-4">
      <h4 className="text-center mb-3">Backend skills </h4>

      <div className="d-flex justify-content-center gap-3 flex-wrap">
      <i className="devicon-nodejs-plain-wordmark" title="Node.js"></i>
      <i class="devicon-express-original" title="Express"></i>
      <i className="devicon-laravel-original" title="Laravel"></i>
      <i className="devicon-php-plain" title="PHP"></i>
      <i className="devicon-java-plain" title="Java"></i>
      <i className="devicon-azuresqldatabase-plain" title="SQL / Databases"></i>
      <i className="devicon-git-plain" title="Git / Version Control"></i>
      </div>
    </div>
  </div>

  {/* SEO */}
  <div className="bg-primary p-2 p-md-4 rounded-4">
    <h4 className="text-center mb-3">Integral SEO Service</h4>
    <p className="text-center">
      SEO audits, on-page/off-page optimization, content strategies, technical SEO, Google Search Console, sitemap/robots setup, keyword research, performance analysis.
    </p>
  </div>
      </section>

      <section className="p-4 p-md-5 ">
        <h3 className="text-center pb-3">Projects</h3>
        <div className="projects d-flex flex-row flex-wrap justify-content-center gap-3">
          <Project
            title="Social Network on Laravel"
            image="images/social-network.png"
            link="/socialnetwork"
          />
          <Project 
          title="Wordpress Pages" 
          image="images/diseño1.jpg"
          link="/wordpresspages" />
          <Project
            title="Content and user management"
            image="images/gestor-php.png"
            link="/contentmanager"
          />
        </div>
      </section>

      <section className="p-4 p-md-5 ">
        <h3 className="text-center pb-3">Recomendations</h3>
        <div className="d-flex flex-row flex-wrap justify-content-center gap-5 pt-5">
          <div>
            <h3 className="text-light-emphasis">
Beatriz González Pérez</h3>
<h4>Project Manager en BSG Spain</h4>
            <p>
              I had the pleasure of being Gabriel’s direct supervisor during his time at BSG, where he stood out as a committed and highly skilled professional in web development and design using WordPress and FTP, as well as in SEO strategies. From day one, he demonstrated a strong ability to adapt and learn quickly, successfully implementing various optimization actions that significantly improved the visibility and performance of our projects. His meticulous approach and his ability to understand each client’s needs ensured that everyone was fully satisfied with his work. In addition to his technical talent, Gabriel is a responsible, hardworking person with a great professional attitude. He was a true asset to our team, and I have no doubt that he will bring great value to any company that trusts in his talent.
            </p>
            
          </div>

          <div>
            <h3 className="text-light-emphasis">Álvaro Pascual</h3>
            <h4>
                Co-founder & CEO en Bluebill</h4>
            <p>
              I directly supervised Gabriel on March 17, 2025.
Gabriel is a highly competent professional with strong knowledge of WordPress, PHP, Laravel, and other programming languages related to web design and development. During his time at BSG, he demonstrated great ability to develop innovative and efficient solutions, as well as an exemplary commitment to established goals and deadlines. Gabriel developed functional, visually appealing websites tailored to the specific needs of our clients, consistently ensuring high standards of quality.

              </p>
          </div>
        </div>
      </section>
    </main>
  );
}
