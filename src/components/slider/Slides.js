
import { BrowserRouter as Router, Link } from 'react-router-dom';

import "./Slider.css";

const slidesInfo = [
    {
        src: "https://cdn.pixabay.com/photo/2018/09/16/22/08/software-3682509_960_720.jpg",
        alt: "Project 1",
        desc: "Goku in the Cloud | Online Game | JavaScript - HTML - CSS - DOM Manipulation",
        url: "https://enriquedonaire.github.io/GOKU-IN-THE-CLOUD-GAME"
    },
    {
        src: "https://thumbs.dreamstime.com/b/astranavt-alegre-do-macaco-90350830.jpg",
        alt: "Project 2",
        desc: "FunnyFy | About fun content | JavaScript | NodeJS | Express | Handlebars ",
        url: "https://funnyfy.herokuapp.com"
    },
    {
        src: "https://cdn.pixabay.com/photo/2018/07/16/16/08/island-3542290_960_720.jpg",
        alt: "Project 3",
        desc: "RecyClup | Sustainable App to give a new life to your old things | ReactJS | Material UI ",
        url: "https://recyclup.herokuapp.com"

    },
    {
        src: "https://image.shutterstock.com/image-vector/mobius-strip-ring-sacred-geometry-600w-1067942186.jpg",
        alt: "Project 4",
        desc: "Responsive App with ReactJS, Material-UI, REST OMD-API, Movie's App for Cinema & series Lovers",
        url: "https://moebius-app.herokuapp.com"
    },
    {
        src: "https://cdn.pixabay.com/photo/2016/01/19/16/49/old-tv-1149416_960_720.jp",
        alt: "Project 5",
        desc: "Project 5",
        url: "https://enriquedonaire.github.io/GOKU-IN-THE-CLOUD-GAME"
    },

]

const slides = slidesInfo.map((slide) => (
    <div className="slide-container">
        <Router>
            <Link to={slide.url} target="_blank"  >
                <img src={slide.src} alt={slide.alt}/>
                <div className="slide-desc">
                    <span>{slide.desc}</span>
                </div>
            </Link>
        </Router>
    </div>
));

export default slides;