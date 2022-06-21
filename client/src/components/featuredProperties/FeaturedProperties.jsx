import "./featuredProperties.css"
import useFetch from "../../hooks/useFetch.js"

const FeaturedProperties = () => {

    const { data, loading, error } = useFetch("/hotels?featured=true&limit=4")

    return (
        <div className="fp">
            {loading ? ("Loading...") : (
                <>
                    {data.map(item => (
                        <div className="fpItem" key={item._id}>
                            <img
                                src={item.photos[0]===undefined ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYN2JdX88VpUPEI1gJ0S_onL_Y01EHdPnWjkJ7o9XTKkfhEUOMo1co0iIXFInSUNZh-HQ&usqp=CAU" : item.photos[0]}
                                alt=""
                                className="fpImg"
                            />
                            <span className="fpName">{item.name}</span>
                            <span className="fpCity">{item.city}</span>
                            <span className="fpPrice">Starting from ${item.CheapestPrice}</span>
                            {item.rating && <div className="fpRating">
                                <button>3.2</button>
                                <span>Extremely poor</span>
                            </div>}
                        </div>
                    )
                    )
                    }
                </>
            )}

        </div>
    );
};

export default FeaturedProperties;