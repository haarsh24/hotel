import { HotelCard ,Filters} from "../../components";
import {hotelData} from "../../data/hotelData";

const HotelListing = () => {
    const data = hotelData;
    
    return (
        <>
            <div className="product-list ">
                <Filters/>
            <div className="product">
            {data.map((item)=>(
                <HotelCard singleHotel = {item}/>
            ))}
                </div>
                </div>
        </>
    )
}

export { HotelListing }
