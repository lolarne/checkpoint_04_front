import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './carousel.css';

function CarouselHome() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div >
            <Carousel className="carousel" responsive={responsive}>
                <div><img src="https://images.pexels.com/photos/1996035/pexels-photo-1996035.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /></div>
                <div><img src="https://images.pexels.com/photos/1996035/pexels-photo-1996035.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /></div>
                <div><img src="https://images.pexels.com/photos/1996035/pexels-photo-1996035.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /></div>
                <div><img src="https://images.pexels.com/photos/1996035/pexels-photo-1996035.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /></div>
            </Carousel>
        </div>

    )

}

export default CarouselHome;