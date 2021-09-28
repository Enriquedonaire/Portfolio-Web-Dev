
import "./Slider.css";

const slidesInfo = [
    {
        src: "https://cdn.pixabay.com/photo/2018/09/16/22/08/software-3682509_960_720.jpg",
        alt: "Project 1",
        desc: "Goku in the Cloud | Online Game | JavaScript - HTML - CSS - DOM Manipulation",
        url: "https://enriquedonaire.github.io/GOKU-IN-THE-CLOUD-GAME"
    },
    {
        src: "https://cdn.pixabay.com/photo/2018/07/16/16/08/island-3542290_960_720.jpg",
        alt: "Project 2",
        desc: "FunnyFy | About fun content | JavaScript | NodeJS | Express | Handlebars ",
        url: "https://funnyfy.herokuapp.com"
    },
    {
        src: "https://cdn.pixabay.com/photo/2016/01/19/16/49/old-tv-1149416_960_720.jpg",
        alt: "Project 3",
        desc: "RecyClup | Sustainable App to give a new life to your old things | ReactJS | Material UI ",
        url: "https://recyclup.herokuapp.com"

    },
    {
        src: "https://cdn.pixabay.com/photo/2015/09/02/12/45/movie-918655_960_720.jpg",
        alt: "Project 4",
        desc: "Project 4",
        url: "https://enriquedonaire.github.io/GOKU-IN-THE-CLOUD-GAME"
    },
    {
        src: "https://cdn.pixabay.com/photo/2020/03/26/03/20/goku-4969082_960_720.jpg",
        alt: "Project 5",
        desc: "Project 5",
        url: "https://enriquedonaire.github.io/GOKU-IN-THE-CLOUD-GAME"
    },

]

const slides = slidesInfo.map((slide) => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
            <span>{slide.desc}</span>
            <button className="btn btn-outline-secondary rounded-0">
                <a href={slide.url}  target="_blank" rel="noreferrer">Go!
                    </a> 

            </button>

        </div>



    </div>
));

export default slides;