import useFetch from "../../hooks/useFetch";
import "./propertyList.css"

const PropertyList = () => {

    const { data, loading, error } = useFetch("/hotels/countByType");

    const images = [
        "https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg",
        "https://r-cf.bstatic.com/images/hotel/max1024x768/881/88169426.jpg",
        "https://l.icdbcdn.com/oh/1590372f-bf7b-4379-b7e5-4b333cff911a.jpg",
        "https://i.pinimg.com/736x/1f/6c/99/1f6c99c6872e0f893eb04e20b1aa58fe.jpg",
        "https://images.prismic.io/villaplus/b94890cc-53d4-4003-880b-e511a1bcacb7_tiareII-1121_5143_villa1_3600.jpg",
    ];
    return (
        <div className="pList">
            {loading ? (
                "loading"
            ) : (
                <>
                    {data &&
                        images.map((img, i) => (
                            <div className="pListItem" key={i}>
                                <img
                                    src={img}
                                    alt=""
                                    className="pListImage"
                                />
                                <div className="text">
                                    <h1>{data[i]?.type}</h1>
                                    <h2>{data[i]?.count === 0 ? "No" : data[i]?.count} {data[i]?.type}{data[i]?.count === 1 ? "" : "s"}</h2>
                                </div>
                            </div>
                        ))}
                </>
            )}
        </div>
    );
};



/*     return (
    <div className="pList">
        <div className="pListItem">
            <img src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg" alt="" className="pListImage" />
            <div className="text">
                <h1>Hotels</h1>
                <h2>154 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://r-cf.bstatic.com/images/hotel/max1024x768/881/88169426.jpg" alt="" className="pListImage" />
            <div className="text">
                <h1>Apartmments</h1>
                <h2>154 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://l.icdbcdn.com/oh/1590372f-bf7b-4379-b7e5-4b333cff911a.jpg" alt="" className="pListImage" />
            <div className="text">
                <h1>Cabins</h1>
                <h2>13 Cabins</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://i.pinimg.com/736x/1f/6c/99/1f6c99c6872e0f893eb04e20b1aa58fe.jpg" alt="" className="pListImage" />
            <div className="text">
                <h1>Resorts</h1>
                <h2>195 Resorts</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.prismic.io/villaplus/b94890cc-53d4-4003-880b-e511a1bcacb7_tiareII-1121_5143_villa1_3600.jpg" alt="" className="pListImage" />
            <div className="text">
                <h1>Villas</h1>
                <h2>157 Villas</h2>
            </div>
        </div>
    </div>
) */

export default PropertyList
