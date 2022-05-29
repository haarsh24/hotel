import { HotelCard ,Filters} from "../../components";
import { FilterFunction } from "../../components/utilities/filterFunction";
import { useFilter } from "../../context/filterContext";
import {hotelData} from "../../data/hotelData";

const HotelListing = () => {
    const hotel = hotelData;
    console.log(hotel)
    const { filterState: {  rating, city, search } } = useFilter();
    const data = FilterFunction( hotel,rating, city, search);
    console.log(data);
    
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
