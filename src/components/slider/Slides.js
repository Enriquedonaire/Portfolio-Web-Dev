// import "./Slider.css";

const slidesInfo = [

    {
        src: "https://miro.medium.com/v2/resize:fit:1400/1*rQ3d_dKG7V2JhX8SrUjs6g.png",
        alt: "Dashboard A3M",
        desc: "Dashboard | A Full-Responsive Data Dashboard | ReactJS | TailwindCSS | BEM",
        url: "https://enriquedonaire.github.io/Dashboard-A3M/"

    },
    {
        src: "https://img.freepik.com/vector-gratis/imagen-estructura-metalica-poligonal-tacto-mano-humana-pantalla-electronica-ilustracion-vectorial-abstracta_1284-30756.jpg",
        alt: "Pic-Finder ",
        desc: "Image Gallery | A styled Image Searcher | ReactJS | Material UI ",
        url: "https://enriquedonaire.github.io/PicFinder-App"

    },
    {
        src: "https://www.barcelonairporthotel.com/wp-content/uploads/2023/09/Deluxe-2022-1.jpg",
        alt: "Miranda Hotel",
        desc: "Hotel Site | Next generation Hotel web site | JavaScript | NodeJS | Express | BEM ",
        url: "https://enriquedonaire.github.io/Hotel-Miranda-WebPage"
    },
    {
        src: "https://i.ytimg.com/vi/_TW4bCSs4gU/maxresdefault.jpg",
        alt: "MyTheresa Movie App",
        desc: "Film App | A complete Movie App | ReactJS | SCSS | BEM",
        url: "https://enriquedonaire.github.io/Mytheresa-movie-App-Test/"
    },
    {
        src: "https://f4.bcbits.com/img/a1309081681_65",
        alt: "Oxygen-Shop",
        desc: "Tech Shop | Responsive App | ReactJS | Material-UI",
        url: "https://Enriquedonaire.github.io/Oxygen-Shop-Enrique"
    },

    {
        src: "https://miro.medium.com/v2/da:true/resize:fit:1200/0*gMblHlHipRsjwsU6",
        alt: "Portfolio AV",
        desc: "Audiovisual Portfolio | Filmmaker’s Showcase | Built with ReactJS, Material-UI",
        url: "https://enriquedonaire.github.io/Portfolio-AV/"

    },

    {
        src: "https://i.ytimg.com/vi/hlwlM4a5rxg/maxresdefault.jpg",
        alt: "Login Page",
        desc: "Form | ReactJS | Tailwind-CSS | BEM",
        url: "https://enriquedonaire.github.io/Alea-Test/"
    },
    {
        src: "https://i.imgur.com/FuihTw0.jpg",
        alt: "Goku in the Cloud",
        desc: "Online Game | JavaScript - HTML - CSS - DOM Manipulation",
        url: "https://enriquedonaire.github.io/GOKU-IN-THE-CLOUD-GAME"
    },

    {
        src: "https://png.pngtree.com/thumb_back/fw800/background/20230618/pngtree-cartoon-style-3d-render-of-calculator-and-math-symbols-on-background-image_3631042.jpg",
        alt: "CalculatorJS",
        desc: "Calculator | JavaScript | NodeJS | Express | BEM",
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
