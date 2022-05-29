import { v4 as uuid } from "uuid";

const hotelData = [
    {
        id: uuid(),
        name: "Hotel River View",
        city: "Delhi",
        rating: 3,
        pricePerDay: 1000,
        mainImage: "https://raw.githubusercontent.com/haarsh24/extras/main/single.jpg",
        images: {
            image1: "https://raw.githubusercontent.com/haarsh24/extras/main/double.jpg",
            image2: "https://raw.githubusercontent.com/haarsh24/extras/main/single.jpg",
            image3: "https://raw.githubusercontent.com/haarsh24/extras/main/deluxe.jpg"
            
        }
    },
    {
        id: uuid(),
        name: "Hotel Landmark",
        city: "Mumbai",
        rating: 4,
        pricePerDay: 2000,
        mainImage: "https://raw.githubusercontent.com/haarsh24/extras/main/double.jpg",
        images: {
            image1: "https://raw.githubusercontent.com/haarsh24/extras/main/double.jpg",
            image2: "https://raw.githubusercontent.com/haarsh24/extras/main/single.jpg",
            image3: "https://raw.githubusercontent.com/haarsh24/extras/main/deluxe.jpg"
            
        }
    },
    {
        id: uuid(),
        name: "Hotel Mountain",
        city: "Bengaluru",
        rating: 5,
        pricePerDay: 3000,
        mainImage: "https://raw.githubusercontent.com/haarsh24/extras/main/double.jpg",
        images: {
            image1: "https://raw.githubusercontent.com/haarsh24/extras/main/double.jpg",
            image2: "https://raw.githubusercontent.com/haarsh24/extras/main/single.jpg",
            image3: "https://raw.githubusercontent.com/haarsh24/extras/main/deluxe.jpg"
            
        }
    },
]

export { hotelData }
