import { Link } from "react-router-dom";
const HotelCard = (props) => {
    const item = props.singleHotel;
    console.log(item.id)
    return (
        <>
                 <div className="product-collection item  ">
        <div className="collection-detail flex-column  p1 m2">
          <div className="product-rating  ">{item.rating}⭐</div>
          <Link to={`/hotels/${item.id}`}>
          <img className=" product-img " src={item.mainImage} />
          </Link>
          <div className="product-collection-detail  flex-column">
            <div className="product-summary h4">{item.name}</div>
            <div className="product-price price-title flex h4 m-tb-1">
              ₹ {item.pricePerDay} / Day 
             
            </div>
            
            <button
              className="btn" >
              Book Now 
            </button>
          </div>
        </div>
      </div>
        </>
    )
}

export { HotelCard }
