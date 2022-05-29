import { useState } from "react";

const HotelImage=()=> {
    const carouselImage = [
         "https://raw.githubusercontent.com/haarsh24/extras/main/sea-view.jpg",
        "https://raw.githubusercontent.com/haarsh24/extras/main/hotel-river.jpg",
        "https://raw.githubusercontent.com/haarsh24/extras/main/main-hotel.jpg"
      
        
        ];
const [displayImage, setDisplayImage] = useState(0);

function slideshowIndex() {
    setTimeout(() => displayImage < carouselImage.length - 1 ? setDisplayImage(displayImage + 1): setDisplayImage(0), 3500);
}
slideshowIndex();

return (
    <div className="caraousel-container">
        <img
        alt="hotel-image"
        className="single-product-img "
        src={carouselImage[displayImage]}
        />
    </div>
);
}

export { HotelImage }
