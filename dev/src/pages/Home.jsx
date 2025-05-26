import Project from "../components/project";
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
              Tuve el placer de ser la responsable directa de Gabriel durante su
              tiempo en BSG, donde destacó como un profesional comprometido y
              altamente capacitado en desarrollo y diseño web con WordPress y
              FTP, así como en estrategias SEO. Desde el primer día, demostró
              una gran capacidad de adaptación y aprendizaje, implementando con
              éxito diversas acciones de optimización que mejoraron
              significativamente la visibilidad y el rendimiento de nuestros
              proyectos. Su enfoque meticuloso y su habilidad para entender las
              necesidades de cada cliente hicieron que todos quedaran plenamente
              satisfechos con su trabajo. Además de su talento técnico, Gabriel
              es una persona responsable, trabajadora y con una gran actitud
              profesional. Fue un verdadero activo para nuestro equipo, y no
              tengo dudas de que aportará un gran valor a cualquier empresa que
              confíe en su talento.
            </p>
          </div>

          <div>
            <h3 className="text-light-emphasis">Álvaro Pascual</h3>
            <h4>
                Co-founder & CEO en Bluebill</h4>
            <p>
              Supervisaba directamente a Gabriel 17 de marzo de 2025, Álvaro
              supervisaba directamente a Gabriel Gabriel es un profesional
              altamente competente, con sólidos conocimientos en WordPress, PHP,
              Laravel y otros lenguajes de programación relacionados con el
              diseño y desarrollo web. A lo largo de su estancia en BSG,
              demostró una gran capacidad para desarrollar soluciones
              innovadoras y eficientes, así como un compromiso ejemplar con los
              objetivos y plazos establecidos. Gabriel desarrolló sitios web funcionales,
                atractivos y adaptados a las necesidades específicas de nuestros
                clientes, garantizando altos estándares de calidad.
              </p>
          </div>
        </div>
      </section>
    </main>
  );
}
