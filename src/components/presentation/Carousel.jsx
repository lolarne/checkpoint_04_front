import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Waves from '../../assets/waves.jpg';
import Space from '../../assets/space.jpg';
import Jungle from '../../assets/jungle.jpg';
import Gost from '../../assets/gost.jpg';
import './carousel.css';

function CarouselHome() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div >
            <Carousel className="carousel" responsive={responsive}>
                <div><img className="imgC" src={Waves} /></div>
                <div><img className="imgC" src={Gost}/></div>
                <div><img className="imgC" src={Space}/></div>
                <div><img className="imgC" src={Jungle} /></div>
            </Carousel>
        </div>

    )

}

export default CarouselHome;