

function App() {

  return (
    <>
    <header>
        <nav class="navbar mb-0 navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid px-5">
               
                    <ul class="navbar-nav me-auto mb-lg-0 d-flex flex-row w-100 justify-content-between">
                        <div class="d-flex w-50 gap-3">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="index.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="views/galeria.html">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="views/contacto.html">Contact</a>
                        </li>
                        </div>
                        <div class="d-flex">
                        <li class="nav-item">
                            <a class="nav-link" href="https://github.com/SkynoDore">Github</a>
                        </li>
                        </div>
                    </ul>
         
            </div>
        </nav>
    </header>
        <main class="text-light bg-dark">
            <section class="p-5">
                <div class="container p-5 pt-1 s">
                <div class="d-flex flex-row">
                    <div class="d-flex flex-column justify-content-center gap-3 m-3">
                        <h1>Hello, I'm <span class="text-light-emphasis">Gabriel Vich</span></h1>
                        <h2>Front End Developer</h2>
                    </div>
                <img class="rounded-circle object-fit-cover" src="/images/gabriel-main.jpeg" alt="Gabriel Vich Portrait" />

                </div>
                </div>
            </section>

            <section class="p-3">
                <h3 class="text-center pb-3">About me</h3>
                <p>
                    <span class="text-light-emphasis">Full-Stack Web Developer </span>with two years of experience in web design and application development using Laravel and React. I am looking for a Junior Web Developer position to continue growing professionally and applying my knowledge.
                    I have worked with agile methodologies such as Scrum. I have strong problem-solving skills, learn quickly, and enjoy acquiring new knowledge, so I am constantly improving my skills.

                </p>
            </section>

            <section class="p-3">
            <h3 class="text-center">Skills</h3>
            <div class="d-flex flex-row p-5 justify-content-center gap-3">
            <i class="devicon-html5-plain-wordmark"></i>
            <i class="devicon-css3-plain-wordmark "></i>
            <i class="devicon-java-plain"></i>
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-php-plain"></i>
            <i class="devicon-react-original"></i>
            <i class="devicon-angular-plain"></i>
            <i class="devicon-azuresqldatabase-plain"></i>
            <i class="devicon-git-plain"></i>
            </div>
            </section>


            <section class="p-3">
            <h3 class="text-center">Projects overview</h3>
            <div class="d-flex flex-row p-5 justify-content-center gap-3">
                <div class="bg-primary p-3 rounded-2 d-flex flex-column gap-3">
                    <h4>Página web en wordpress</h4>

                </div>
                 <div class="bg-primary p-3 rounded-2 d-flex flex-column gap-3">
                    <h4>Página web en wordpress</h4>

                </div>
            </div>
            </section>
        </main>
    </>
  )
}

export default App
