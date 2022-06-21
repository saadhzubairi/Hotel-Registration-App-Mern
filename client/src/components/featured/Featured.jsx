import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

    const { data, loading, error } = useFetch("/hotels/countByCity?cities=Karachi,Lahore,Islamabad,Multan,Peshawar,Quetta")

    return (
        <div className="feature">
            {loading ? ("Loading Please Wait") : (<>
                <div className="featuredItem">
                    <img src="https://www.intelligenttransport.com/wp-content/uploads/Karachi.jpg" alt="" className="featuredImage" />
                    <div className="featuredTitle">
                        <h1>Karachi</h1>
                        <h2>{data[0]===0? "No" : data[0]} Hotel{data[0]===1? "":"s"}</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://zameen-strapi-live.s3.eu-west-1.amazonaws.com/medium_lahore_d1bd50642f.jpg" alt="" className="featuredImage" />
                    <div className="featuredTitle">
                        <h1>Lahore</h1>
                        <h2>{data[1]===0? "No" : data[1]} Hotel{data[1]===1? "":"s"}</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://zameen-content-live.s3.eu-west-1.amazonaws.com/medium_Islamabad_fc75daa1c7.jpg" alt="" className="featuredImage" />
                    <div className="featuredTitle">
                        <h1>Islamabad</h1>
                        <h2>{data[2]===0? "No" : data[2]} Hotel{data[2]===1? "":"s"}</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://zameen-strapi-live.s3.eu-west-1.amazonaws.com/medium_mmmm_ccbe0664a1.jpg" alt="" className="featuredImage" />
                    <div className="featuredTitle">
                        <h1>Multan</h1>
                        <h2>{data[3]===0? "No" : data[3]} Hotel{data[3]===1? "":"s"}</h2>
                    </div>
                </div>

                <div className="featuredItem">
                    <img src="https://mediaim.expedia.com/destination/1/e4165763cbf5a0f70c596197342a2caa.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh" alt="" className="featuredImage" />
                    <div className="featuredTitle">
                        <h1>Peshawar</h1>
                        <h2>{data[4]===0? "No" : data[4]} Hotel{data[4]===1? "":"s"}</h2>
                    </div>
                </div>

                <div className="featuredItem">
                    <img src="https://dreamvistatours.com/wp-content/uploads/2021/08/Quetta-Bird-Eye-View-768x540.jpeg" alt="" className="featuredImage" />
                    <div className="featuredTitle">
                        <h1>Quetta</h1>
                        <h2>{data[5]===0? "No" : data[5]} Hotel{data[5]===1? "":"s"}</h2>
                    </div>
                </div>
            </>)}
        </div>
    )
}

export default Featured
