const FilterFunction = (hotel,   rating, city,search) => {
    let filteredHotels = hotel;
    console.log(filteredHotels)
    if(rating){
        filteredHotels = filteredHotels.filter(item => item.rating >= rating)
        console.log(filteredHotels)
    }
    if (city.length !== 0) {
        filteredHotels = filteredHotels.filter((item => city.includes(item.city)))
        console.log(city)
   }
    if (search) {
        filteredHotels = filteredHotels.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
        console.log(filteredHotels)
    }

    return filteredHotels;
};

export { FilterFunction };