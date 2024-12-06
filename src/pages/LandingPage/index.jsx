import Logotipo from "../LandingPage/Imagenes/Logotipo.png"
import Portada from "../LandingPage/Imagenes/Portada.png"
import Beneficio1 from "../LandingPage/Imagenes/beneficio1.png"
import Beneficio2 from "../LandingPage/Imagenes/beneficio2.png"
import Beneficio3 from "../LandingPage/Imagenes/beneficio3.png"
import gato1 from "../LandingPage/Imagenes/gato10.jpg"
import gato2 from "../LandingPage/Imagenes/gato2.jpg"
import gato3 from "../LandingPage/Imagenes/gato4.jpg"
import gato4 from "../LandingPage/Imagenes/gato6.jpg"
import gato5 from "../LandingPage/Imagenes/gato17.jpg"
import gato6 from "../LandingPage/Imagenes/gato9.jpg"
import gato7 from "../LandingPage/Imagenes/gato14.jpg"
import gato8 from "../LandingPage/Imagenes/gato18.jpg"
import gatogrande from "../LandingPage/Imagenes/gato5.jpg"
import whatsapp from "../LandingPage/Imagenes/whatsapp.png"
import hogar from "../LandingPage/Imagenes/hogar.png"
import facebook from "../LandingPage/Imagenes/facebook.png"
import sobre from "../LandingPage/Imagenes/sobre.png"
import llamada from "../LandingPage/Imagenes/llamada-telefonica.png"

function LandingPage() {
  return (
    <div>
      <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={Logotipo}
            alt="Logo"
            width={170}
            height={50}
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" aria-current="page" href="#inicio">
              Home
            </a>
            <a className="nav-link" href="#negocios">
              Negocios
            </a>
            <a className="nav-link" href="#parati">
              Para ti
            </a>
            <a className="nav-link" href="#preguntas">
              Preguntas
            </a>
            <a className="nav-link" href="#descargas">
              Descargas
            </a>
            <a className="nav-link" href="/login">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <main>
    {/* Primera Sección_Bienvenidos a CatHome! */}
    <section className="Inicio" id="inicio">
      <div className="container mt-5 mb-5">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-12 text-start">
            <h1 className="mb-4 display-4 highlight-text textoanimacion">
              ¡Bienvenidos a CatHome!
            </h1>
            <p className="mb-4 lead texto-descarga">
              Aquí encontrarás adorables compañeros peludos que están en busca
              de un hogar lleno de amor. Nuestra misión es conectar a estos
              maravillosos felinos con personas y familias dispuestas a
              brindarles una segunda oportunidad. Cada gato tiene una historia
              única y está esperando compartirla contigo.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Video Presentación
            </button>
          </div>
          <div className="col-lg-4 col-md-12 text-center mt-4 mt-lg-0 textoanimacion">
            <img
              src={Portada}
              alt="Portada"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Un gatito que canta :D
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <iframe
                width={460}
                height={215}
                src="https://www.youtube.com/embed/hPYAe2jqNP0"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen=""
              ></iframe>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onclick="window.open('https://youtu.be/hPYAe2jqNP0?si=bj7q_vwwu3tAvXI3', '_blank')"
              >
                Ver en YT
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Segunda Sección_ParaNegocios */}
      <section className="Negocios py-5 bg-negocios" id="negocios">
        <div className="container">
          <h2 className="text-center mb-5 display-6 highlight-text-no-red textoanimacion">
            Generamos Oportunidades para los Negocios
          </h2>
          <div className="row gy-4">
            {/* Beneficio 1 */}
            <div className="col-md-4">
              <div className="card h-100 text-center shadow-sm pt-4">
                <img
                  src={Beneficio1}
                  alt="Beneficio 1"
                  className="card-img-top mx-auto"
                  style={{ width: "25%", height: "auto" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Publica tus productos</h5>
                  <p className="card-text">
                    Anuncia artículos para gatos en nuestra página y conecta con
                    amantes de los felinos.
                  </p>
                </div>
              </div>
            </div>
            {/* Beneficio 2 */}
            <div className="col-md-4">
              <div className="card h-100 text-center shadow-sm pt-4">
                <img
                  src={Beneficio2}
                  alt="Beneficio 2"
                  className="card-img-top mx-auto"
                  style={{ width: "25%", height: "auto" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Programa de socios</h5>
                  <p className="card-text">
                    Únete a nuestro programa y contribuye a encontrar hogares
                    para gatos, con acceso a eventos especiales y
                    actualizaciones.
                  </p>
                </div>
              </div>
            </div>
            {/* Beneficio 3 */}
            <div className="col-md-4">
              <div className="card h-100 text-center shadow-sm pt-4">
                <img
                  src={Beneficio3}
                  alt="Beneficio 3"
                  className="card-img-top mx-auto"
                  style={{ width: "25%", height: "auto" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Reconocimiento en la web</h5>
                  <p className="card-text">
                    Recibe reconocimiento en nuestra web por tu apoyo,
                    destacando tu contribución al bienestar de los gatos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Botón para abrir el formulario */}
          <div className="row mt-5">
            <div className="col-md-12 text-center">
              <button
                className="btn btn-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#formularioColapsado"
                aria-expanded="false"
                aria-controls="formularioColapsado"
              >
                Abrir formulario
              </button>
            </div>
          </div>
          {/* Formulario colapsable */}
          <div className="collapse mt-4" id="formularioColapsado">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="formulario-contenedor">
                  <h3 className="text-center mb-5 mt-5 display-6 highlight-text-no-red letra-roja textoanimacion">
                    Regístrate para Colaborar con Nosotros
                  </h3>
                  <form>
                    <div className="mb-3">
                      <label
                        htmlFor="nombre"
                        className="form-label letra-negra"
                      >
                        Nombre
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        placeholder="Ingresa el nombre"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="apellido"
                        className="form-label letra-negra"
                      >
                        Apellido
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="apellido"
                        placeholder="Ingresa tu apellido"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label letra-negra">
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Ingresa tu correo electrónico"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="telefono"
                        className="form-label letra-negra"
                      >
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="telefono"
                        placeholder="Ingresa tu número de teléfono"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="descripcion"
                        className="form-label letra-negra"
                      >
                        Descripción
                      </label>
                      <textarea
                        className="form-control"
                        id="descripcion"
                        rows={4}
                        placeholder="Cuéntanos por qué deseas colaborar"
                        defaultValue={""}
                      />
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label letra-negra"
                        htmlFor="exampleCheck1"
                      >
                        Aceptar los términos y condiciones
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Enviar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Seccion 3_Para ti */}
      <section className="py-5" id="parati">
        <div className="container text-center">
          <h2 className="text-center mb-4 display-6 highlight-text-no-red textoanimacion letra-roja">
            Para ti
          </h2>
          <p className="mb-5 lead">
            Si buscas un amigo peludo, adopta, no compres. <br />
            🐱 Ellos te esperan con las patitas abiertas para darte un super
            abrazo gatunesco. 🐱
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={gato1}
                  className="card-img-top"
                  alt="gato1"
                  style={{ objectFit: "cover", height: 200 }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Nombre: El Licenciado Encaro</h5>
                  <p className="card-text">Raza: Genius Purrsimus</p>
                  <p className="card-text">
                    Dato: Este gato se especializa en hacerse el que "no sabía"
                    mientras te ve con cara de “no es mi problema” con su título
                    honorífico en "me vale madre".
                  </p>
                  <div className="mt-auto">
                    <a href="#" className="btn btn-primary">
                      Adoptar
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={gato2}
                  className="card-img-top"
                  alt="gato2"
                  style={{ objectFit: "cover", height: 200 }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Nombre: Muffin</h5>
                  <p className="card-text">Raza: Golpeorrius del Bajío</p>
                  <p className="card-text">
                    Dato: Su pasatiempo favorito es amenazar a los perros desde
                    la azotea, pero si se cae, finge que "era parte del plan".
                  </p>
                  <div className="mt-auto">
                    <a href="#" className="btn btn-primary">
                      Adoptar
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={gato3}
                  className="card-img-top"
                  alt="gato3"
                  style={{ objectFit: "cover", height: 200 }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Nombre: Señor Migajas III</h5>
                  <p className="card-text">Raza: Eleganticus Formalis</p>
                  <p className="card-text">
                    Dato: Buscado por la policía por crímenes de contrabando.
                    Lleva siempre una corbata y cuando maúlla, te dice
                    "compadre".
                  </p>
                  <div className="mt-auto">
                    <a href="#" className="btn btn-primary">
                      Adoptar
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={gato4}
                  className="card-img-top"
                  alt="gato4"
                  style={{ objectFit: "cover", height: 200 }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Nombre: El Pana Miguelito</h5>
                  <p className="card-text">Raza: Dramaticus Sentimentalensis</p>
                  <p className="card-text">
                    Dato: Se quedó traumado desde que lo mandaron a comprar pan
                    y saludó diciendo "Bolas" en vez de "Buenos días" u "Hola".
                  </p>
                  <div className="mt-auto">
                    <a href="#" className="btn btn-primary">
                      Adoptar
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={gato5}
                  className="card-img-top"
                  alt="gato1"
                  style={{ objectFit: "cover", height: 200 }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Nombre: Carlos</h5>
                  <p className="card-text">Raza: Resaca Felina Intensus</p>
                  <p className="card-text">
                    Dato: Nadie sabe si está serio o solo está pensando en lo
                    existencial. Tiene cara de haber soportando a sus compañeros
                    que andan perdidos todo el tiempo pero no dice nada por
                    respeto.
                  </p>
                  <div className="mt-auto">
                    <a href="#" className="btn btn-primary">
                      Adoptar
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={gato6}
                  className="card-img-top"
                  alt="gato2"
                  style={{ objectFit: "cover", height: 200 }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Nombre: Insomnio</h5>
                  <p className="card-text">Raza: Miradus Desorientatus</p>
                  <p className="card-text">
                    Dato: Siempre parece que está viendo su tesis en la
                    madrugada. Lleva días sin dormir bien, atrapado entre PDFs
                    interminables y el café ya no le hace efecto.
                  </p>
                  <div className="mt-auto">
                    <a href="#" className="btn btn-primary">
                      Adoptar
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={gato7}
                  className="card-img-top"
                  alt="gato3"
                  style={{ objectFit: "cover", height: 200 }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Nombre: Inge. Martinez</h5>
                  <p className="card-text">Raza: Errorus Fatalis</p>
                  <p className="card-text">
                    Dato: Maestro en que nada le salga como lo planea. Parece
                    que la tecnología conspira en su contra: el Wi-Fi no
                    conecta, los programas no responden, y el archivo que juraba
                    haber guardado no está por ningún lado.
                  </p>
                  <div className="mt-auto">
                    <a href="#" className="btn btn-primary">
                      Adoptar
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={gato8}
                  className="card-img-top"
                  alt="gato4"
                  style={{ objectFit: "cover", height: 200 }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Nombre: Cheffcito</h5>
                  <p className="card-text">Raza: Culinarius Felinus</p>
                  <p className="card-text">
                    Dato: Este chef es un maestro en la alta cocina de
                    croquetas. Puede hacer manjares con tres ingredientes y
                    nunca falta en la cocina a la hora del almuerzo.
                  </p>
                  <div className="mt-auto">
                    <a href="#" className="btn btn-primary">
                      Adoptar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sección 4_Preguntas */}
      <section className="py-5 bg-negocios" id="preguntas">
        {/* preguntas */}
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="display-6 highlight-text-no-red">
              Preguntas frecuentes
            </h2>
            <p>
              Aquí te brindamos las preguntas más frecuentes que nos suelen
              hacer.
            </p>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    1. ¿Qué requisitos debo cumplir para adoptar un gato?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Para adoptar un gato, debes tener al menos 18 años,
                    presentar una identificación oficial y llenar nuestro
                    formulario de adopción. Además, es importante demostrar que
                    puedes ofrecer un ambiente seguro y amoroso para el gato, lo
                    que incluye una entrevista y una visita domiciliaria previa
                    a la adopción.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    2. ¿Qué incluye la adopción de un gato?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    La adopción incluye la vacunación del gato, su
                    esterilización y un chequeo médico previo. También te
                    brindamos una orientación básica sobre el cuidado del gato y
                    una primera consulta veterinaria gratuita.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    3. ¿Puedo devolver al gato si no me adapto a él?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Entendemos que, en ocasiones, puede haber problemas de
                    adaptación. Si no logras adaptarte al gato o hay alguna
                    complicación, puedes devolverlo dentro de los primeros 30
                    días. Queremos asegurarnos de que el gato encuentre un hogar
                    adecuado, por lo que te ayudaremos a explorar otras
                    opciones.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    4. ¿Cuánto tiempo toma el proceso de adopción?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    El proceso de adopción generalmente toma entre 3 y 5 días,
                    dependiendo de la rapidez con la que se completen los pasos,
                    como la entrevista y la visita domiciliaria. Queremos
                    asegurarnos de que el gato se vaya a un hogar adecuado, por
                    lo que dedicamos tiempo a conocer a los adoptantes.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    5. ¿Qué debo hacer si tengo otro gato en casa?
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Si ya tienes otro gato en casa, te recomendamos una
                    introducción gradual entre ambos. Te proporcionaremos una
                    guía sobre cómo presentar a los gatos de manera segura y
                    tranquila para minimizar el estrés y favorecer una
                    convivencia armoniosa.
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Imagen */}
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <img
              src={gatogrande}
              className="img-fluid rounded"
              alt="Imagen de gato"
            />
          </div>
        </div>
      </section>
      {/* Sección 5 Descargas */}
      <section className="py-5" id="descargas">
        <div className="container py-4 align-items-center">
          <div className="row mb-1 justify-content-center">
            <div className="col-md-9 col-lg-6 py-4">
              <h2 className="display-4 mb-3 text-center highlight-text textoanimacion">
                ¡DESCÁRGALO YA!
              </h2>
              <p className="lead texto-descarga text-center">
                Empieza a adoptar un gato y accede a nuestras funcionalidades
                exclusivas desde nuestro aplicativo.
              </p>
              <p className="lead texto-descarga text-center">
                ¡Obtén la app y ayuda a más gatitos a ser felices!
              </p>
            </div>
          </div>
          <div className="row mt-1 justify-content-center">
            <div className="col-md-4 d-flex justify-content-center mb-3">
              <a
                href="https://play.google.com/store"
                className="btn btn-info btn-md btn-custom text-light rounded-pill w-100"
              >
                <i className="bi bi-google-play" /> Descárgalo desde Play Store
              </a>
            </div>
            <div className="col-md-4 d-flex justify-content-center mb-3">
              <a
                href="https://apps.apple.com/"
                className="btn btn-info btn-md btn-custom text-light rounded-pill w-100"
              >
                <i className="bi bi-apple" /> Descárgalo desde App Store
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  </main>
  {/* Sección para el botón de Whatsapp */}
  <div className="contacto position-fixed bottom-0 end-0">
    <a href="https://chat.whatsapp.com/BC5oGh1jPWn0VxsxmJv8al" target="_blank">
      <img src={whatsapp} alt="Imagen fija" className="whatsapp" />
    </a>
  </div>
  {/* footer  */}
  <footer className="bg-light text-dark pt-5 gb-4">
    <div className="container text-center text-md-start">
      <div className="row text-center text-md-start">
        <div className="col-md-3 col-mg-3 col-xl-3 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 letra-roja textoanimacion">
            Nosotros
          </h5>
          <hr className="mb-4" />
          <p>
            Somos una empresa que busca trabajar con personas con ganas de
            ayudar y mejorar la vida de nuestros amigos felinos.
          </p>
        </div>
        <div className="col-md-3 col-mg-3 col-xl-3 mx-auto mt-3">
          <h5 className="text-uppercase mb-4 letra-roja textoanimacion">
            Contactanos
          </h5>
          <hr className="mb-4" />
          <p>
            <img src={hogar} /> Av. Arequipa 2015 Lima{" "}
          </p>
          <p>
            <img src={facebook} /> Cat Home Oficial
          </p>
          <p>
            <img src={sobre} /> informes@cathome.com
          </p>
          <p>
            <img src={llamada} /> 368 574 123
          </p>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
};


export default LandingPage;