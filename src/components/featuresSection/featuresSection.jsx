import { FeaturesCard } from "..";
import {featuresData} from "../../data/featuresData";

const FeaturesSection = () => {
    const data = featuresData;

    return (
        <><div className="heading"> Features </div>
            <div className=" flex ">
                
            <div className="feature">
            {
                data.map((item) => <FeaturesCard singleFeature={item}/>)
                }
                </div>
                </div>
        </>
    )
}

export { FeaturesSection }
