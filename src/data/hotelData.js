import { v4 as uuid } from "uuid";

const hotelData = [
    {
        id: uuid(),
        name: "Hotel River View",
        city: "Delhi",
        rating: 3,
        pricePerDay: 1000,
        mainImage: "https://raw.githubusercontent.com/haarsh24/extras/main/hotel-river.jpg",
        images: {
            image1: "https://raw.githubusercontent.com/haarsh24/extras/main/sea-view.jpg",
            image2: "https://raw.githubusercontent.com/haarsh24/extras/main/hotel-river.jpg",
            image3: "https://raw.githubusercontent.com/haarsh24/extras/main/main-hotel.jpg"
            
        }
    },
    {
        id: uuid(),
        name: "Hotel Landmark",
        city: "Mumbai",
        rating: 4,
        pricePerDay: 2000,
        mainImage: "https://raw.githubusercontent.com/haarsh24/extras/main/sea-view.jpg",
        images: {
            image1: "https://raw.githubusercontent.com/haarsh24/extras/main/sea-view.jpg",
            image2: "https://raw.githubusercontent.com/haarsh24/extras/main/hotel-river.jpg",
            image3: "https://raw.githubusercontent.com/haarsh24/extras/main/main-hotel.jpg"
            
        }
    },
    {
        id: uuid(),
        name: "Hotel Mountain",
        city: "Bengaluru",
        rating: 5,
        pricePerDay: 3000,
        mainImage: "https://raw.githubusercontent.com/haarsh24/extras/main/sea-view.jpg",
        images: {
            image1: "https://raw.githubusercontent.com/haarsh24/extras/main/sea-view.jpg",
            image2: "https://raw.githubusercontent.com/haarsh24/extras/main/hotel-river.jpg",
            image3: "https://raw.githubusercontent.com/haarsh24/extras/main/main-hotel.jpg"
            
        }
    },
        {
            id: uuid(),
            name: "Hotel River View",
            city: "Delhi",
            rating: 3,
            pricePerDay: 1000,
            mainImage: "https://raw.githubusercontent.com/haarsh24/extras/main/hotel-river.jpg",
            images: {
                image1: "https://raw.githubusercontent.com/haarsh24/extras/main/sea-view.jpg",
                image2: "https://raw.githubusercontent.com/haarsh24/extras/main/hotel-river.jpg",
                image3: "https://raw.githubusercontent.com/haarsh24/extras/main/main-hotel.jpg"
                
            }
        },
        {
            id: uuid(),
            name: "Hotel Landmark",
            city: "Mumbai",
            rating: 4,
            pricePerDay: 2000,
            mainImage: "https://raw.githubusercontent.com/haarsh24/extras/main/sea-view.jpg",
            images: {
                image1: "https://raw.githubusercontent.com/haarsh24/extras/main/sea-view.jpg",
                image2: "https://raw.githubusercontent.com/haarsh24/extras/main/hotel-river.jpg",
                image3: "https://raw.githubusercontent.com/haarsh24/extras/main/main-hotel.jpg"
                
            }
        },
        {
            id: uuid(),
            name: "Hotel Mountain",
            city: "Bengaluru",
            rating: 5,
            pricePerDay: 3000,
            mainImage: "https://raw.githubusercontent.com/haarsh24/extras/main/sea-view.jpg",
            images: {
                image1: "https://raw.githubusercontent.com/haarsh24/extras/main/sea-view.jpg",
                image2: "https://raw.githubusercontent.com/haarsh24/extras/main/hotel-river.jpg",
                image3: "https://raw.githubusercontent.com/haarsh24/extras/main/main-hotel.jpg"
                
            }
    }
]

export { hotelData }
