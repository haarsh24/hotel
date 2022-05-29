import { Link } from "react-router-dom"
import hotel from "../../assets/hotel-river.jpg"

const HeroSection = () => {
    return (
        <>
               <div className="container">
        <Link to="/hotels">

            <div className="product-wrapper flex center p2 front-display-div">
                <div className="product-img-wrapper p2 ">
                    <img className="landing-page-img" src={hotel} alt="hotel-image" />
                </div>
                <div className="product-detail-wrapper p2 ">
                    <div className=" index-title ">
                        <p>World's leading chain of hotels and homes
More Destinations. More Ease. More Affordable. </p>
                    </div>

                    <div className="product-summary h4 ">
                        Enjoy hassel less booking of hotel with best in class customer experience at affordable experience </div>
                    <div className="m2">
                            <button className="btn h2 ">
                               
                            <Link to="/hotels">  Book Now</Link>
                           </button>
                    </div>
                </div>
            </div>
            </Link>
    </div>
        </>
    )
}

export {HeroSection}