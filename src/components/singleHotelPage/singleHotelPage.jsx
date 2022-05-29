import { useParams } from "react-router-dom"
import {  HotelImage } from "..";
import { hotelData } from "../../data/hotelData";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";

const SingleHotelPage = () => {
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: "selection"
        }
      ]);
    const { hotelId } = useParams();
    const hotel = hotelData.find(item => item.id === hotelId);
    console.log(hotel);
    const handleSelect =(ranges)=>{
        console.log(ranges);
        // {
        //   selection: {
        //     startDate: [native Date Object],
        //     endDate: [native Date Object],
        //   }
        // }
      }
    
    return (
        <>
            <div className="product-wrapper flex-row-center ">
            <div className="product-img-wrapper p2 ">
                 <HotelImage/>
                    {/* <img className="single-product-img " src={hotel.mainImage} alt="sneaker-image" /> */}
            </div>
            <div className="product-detail-wrapper p2">
                <div className=" product-title ">
                        <p>{hotel.name}</p>
                </div>
                <div className="product-price h1">
                    ₹ {hotel.pricePerDay} / Day 
                </div>
               
                <DateRange
        onChange={item => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
                <button
              className= "btn btn-add-to-cart h4  mb-1"
            >
              Book Now
            </button>
          
               
                    
                        </div>
                        </div>
        </>
    )
}

export { SingleHotelPage }


