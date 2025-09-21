import { useState } from "react";
import { Link } from "react-router-dom";

export default function ExpandedProject({
  title,
  images = [],
  github,
  description,
}) {
  // Estado para la imagen principal
  const [mainImage, setMainImage] = useState(images[0]);

  // miniaturas: todas las demás imágenes excepto la principal actual
  const thumbnails = images;

  //para el zoom
  const [zoomedImg, setZoomedImg] = useState(null);
  return (
    
    <main>
      <section className="p-4 p-md-5">
        <Link className="nav-link" to="/#projects">&lt; &lt; Go back</Link>
        <div className="text-center py-3">
          <h1>{title}</h1>
        </div>
        <div className="d-flex flex-column flex-md-row  justify-content-center gap-0 gap-md-3 mt-2 mb-2 mb-md-5 max-width-900 mx-auto">
          <img id="main-image" src={mainImage} alt={title} 
          onClick={() => setZoomedImg(mainImage)}/>

          {/* Miniaturas en lateral o debajo, aquí simplificado en horizontal */}
          <div className="d-flex flex-row flex-md-column flex-wrap gap-3 align-items-center justify-content-md-start justify-content-center">
            {thumbnails.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${title} thumbnail ${idx}`}
                onMouseEnter={() => setMainImage(img)}
                className={`thumbnail ${img === mainImage ? "active" : ""}`}
              />
            ))}
          </div>
        </div>
        <div className="text-center pb-5">
          <a className="nav-link" href={github} target="_blank">
            repository on
            <i className="devicon-github-original fs-5 px-2"></i>
            Github
          </a>
        </div>

        <div>
          <h2 className="pb-3">Description</h2>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        {zoomedImg && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          onClick={() => setZoomedImg(null)}
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content bg-primary p-0 p-md-3 rounded-3 w-100" >
              <div className="modal-body text-center w-100 p-0 p-md-1">
                <img src={zoomedImg} alt="zoomed" className="img-fluid w-100 rounded" id="zoomed-img"/>
              </div>
              <button
                type="button"
                className="btn-close btn-close-white position-absolute top-0 end-0 p-1"
                aria-label="Close"
                onClick={() => setZoomedImg(null)}
              ></button>
            </div>
          </div>
        </div>)}
      </section>
    </main>
  );
}
