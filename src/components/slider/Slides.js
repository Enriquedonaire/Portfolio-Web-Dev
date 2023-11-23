// import "./Slider.css";

const slidesInfo = [

    {
        src: "https://www.barcelonairporthotel.com/wp-content/uploads/2023/09/Deluxe-2022-1.jpg",
        alt: "Miranda Hotel",
        desc: "Miranda Hotel | Next generation Hotel web site | JavaScript | NodeJS | Express | BEM ",
        url: "http://hotel-miranda.site"
    },
    {
        src: "https://img.freepik.com/vector-gratis/imagen-estructura-metalica-poligonal-tacto-mano-humana-pantalla-electronica-ilustracion-vectorial-abstracta_1284-30756.jpg",
        alt: "Pic-Finder ",
        desc: "Pic-Finder | A styled Image Searcher | ReactJS | Material UI ",
        url: "https://enriquedonaire.github.io/PicFinder-App"

    },
    {
        src: "https://f4.bcbits.com/img/a1309081681_65",
        alt: "Oxygen-Shop",
        desc: "Responsive App with ReactJS, Material-UI",
        url: "https://Enriquedonaire.github.io/Oxygen-Shop-Enrique"
    },
    {
        src: "https://i.imgur.com/FuihTw0.jpg",
        alt: "Goku in the Cloud",
        desc: "Goku in the Cloud | Online Game | JavaScript - HTML - CSS - DOM Manipulation",
        url: "https://enriquedonaire.github.io/GOKU-IN-THE-CLOUD-GAME"
    },
    {
        src: "https://png.pngtree.com/thumb_back/fw800/background/20230618/pngtree-cartoon-style-3d-render-of-calculator-and-math-symbols-on-background-image_3631042.jpg",
        alt: "CalculatorJS",
        desc: " | JavaScript | NodeJS | Express | BEM",
        url: "https://enriquedonaire.github.io/JS-Calculator-Assignment"
    },



]

const slides = slidesInfo.map((slide, index) => (
    <div className="slide-container" key={index}>
        <a href={slide.url} target="_blank" rel="noopener noreferrer">
            <img className="slide-container-img" src={slide.src} alt={slide.alt} />
            <div className="slide-desc">
                <span>{slide.desc}</span>
            </div>
        </a>

    </div>
));

export default slides;