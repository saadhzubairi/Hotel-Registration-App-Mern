import "./list.css";
import Header from "../../components/header/Header.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import { useLocation } from "react-router-dom"
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const List = () => {
    const location = useLocation()
    const [openDate, setOpenDate] = useState(false);

    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);

    const { data, loading, error, reFetch } = useFetch(
        `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
    );

    const handleClick = () => {
        reFetch();
    };

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label>DESTINATION</label>
                            <input type="text" onChange={(e) => setDestination(e.target.value)}/>
                        </div>
                        <div className="lsItem" onClick={() => setOpenDate(!openDate)}>
                            <label >DATE</label>
                            <span className="dt">
                                {`${format(date[0].startDate, "dd/MM/yy")} - ${format(date[0].endDate, "dd/MM/yy")}`}
                            </span>
                            <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className={openDate ? "datee" : "datee hide"}
                            />
                        </div>
                        <div className="lsItem">
                            <label>OPTIONS</label>
                        </div>
                        <div className="lsOpItems">
                            <div className="lsOptionItem">
                                <div className="lsOpText">Min Price</div>
                                <input type="number" className="lsOpInput" defaultValue={0} onChange={(e) => setMin(e.target.value)}/>
                            </div>
                            <div className="lsOptionItem">
                                <div className="lsOpText">Max Price</div>
                                <input type="number" className="lsOpInput" defaultValue={9999} onChange={(e) => setMax(e.target.value)}/>
                            </div>
                            <div className="lsOptionItem">
                                <div className="lsOpText">Adults</div>
                                <input type="number" className="lsOpInput" defaultValue={1}></input>
                            </div>
                            <div className="lsOptionItem">
                                <div className="lsOpText">Children</div>
                                <input type="number" className="lsOpInput" defaultValue={0}/>
                            </div>
                            <div className="lsOptionItem">
                                <div className="lsOpText">Room</div>
                                <input type="number" className="lsOpInput" defaultValue={1}/>
                            </div>
                        </div>
                        <button onClick={handleClick} className="searchBt">
                            <FontAwesomeIcon className="searchBt scbt" icon={faSearch} />
                            SEARCH
                        </button>
                    </div>
                    <div className="listResult">
                        {loading ? ("Loading...") : (
                            data.map(item => (
                                <>
                                    <SearchItem item={item} key={item._id} />
                                </>
                            ))
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default List