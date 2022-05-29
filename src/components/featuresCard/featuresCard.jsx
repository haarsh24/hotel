const FeaturesCard = (props) => {
    const data = props.singleFeature;
    return (
        <>
               
        <div className="collection-detail flex-column  p1 m2">
          
          
          <img className="feature-img" src={data.image} />
          
          
            <div className=" h3">{data.title}</div>
            <div className=" h5 m-tb-1">
              {data.description} 
             
            
            
            
          </div>
        </div>
      
        </>
    )
}
export { FeaturesCard }
