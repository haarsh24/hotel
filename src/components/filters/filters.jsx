import { useFilter } from "../../context/filterContext";

const Filters = () => {

    const { filterDispatch } = useFilter();
    const resetFilterHandler = (e) => {
        e.preventDefault();
        filterDispatch({ type: "RESET_ALL_FILTERS" });
     }
    return (
        <>
              <aside className="filters-wrapper  flex-column p2 ">
        <form
          className="drawer flex-column p1  "
        >
          <div className="heading h2">Filters</div>

          <label className=" h3 m1" for="">
            Select City
          </label>
          <div>
            <label className="p1 h5"> Bengaluru </label>
            <input
              type="checkbox"
              name="city"
              onChange={() =>
                filterDispatch({ type: "CITY", payload: "Bengaluru" })
              }
            />
          </div>
          <div>
            <label className="p1 h5"> Delhi </label>
            <input
              type="checkbox"
              name="city"
              onChange={() =>
                filterDispatch({ type: "CITY", payload: "Delhi" })
              }
            />
          </div>
          <div>
            <label className="p1 h5"> Mumbai </label>
            <input
              type="checkbox"
              name="city"
              onChange={() =>
                filterDispatch({ type: "CITY", payload: "Mumbai" })
              }
            />
          </div>
         

          
          <label className="m1 h3">Ratings</label>
          <div>
            <label className="p1 h5">5 Stars and above</label>
            <input
              type="radio"
              name="rating-radio"
              onChange={() => filterDispatch({ type: "RATING", payload: 5 })}
            />
          </div>
          <div>
            <label className="p1 h5">4 Stars and above</label>
            <input
              type="radio"
              name="rating-radio"
              onChange={() => filterDispatch({ type: "RATING", payload: 4 })}
            />
          </div>
          <div>
            <label className="p1 h5">3 Stars and above</label>
            <input
              type="radio"
              name="rating-radio"
              onChange={() => filterDispatch({ type: "RATING", payload: 3 })}
            />
          </div>
         
          <button
            className="btn m1"
            onClick={(e)=>resetFilterHandler(e)}
          >
            RESET FILTERS
          </button>
        </form>
      </aside>
        </>
    )
}

export { Filters }
