export default function ExpandedProject ({ title, image, github, description}){
    return (
                 <main>
                    <section className="p-4 p-md-5">
                        <div className="text-center pb-3">
                            <h1>{title}</h1>
                        </div>
                        <div className="max-width-900 mx-auto">
                        <img className="w-100" src={image} alt={title} />
                        </div>
                    
                    <div>
                            <div className="text-center pt-4 pb-5">
                            <a className="nav-link" href={github}>repository on
                            <i className="devicon-github-original fs-5 px-2"></i>
                            Github</a>
                        </div>
                    </div>
                    <div>
                        <h2 className="pb-3">Description</h2>
                        <p>{description}</p>
                    </div>
                
                </section>
                </main>
    )
}