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

const List = () => {
    const location = useLocation()
    const [openDate, setOpenDate] = useState(false);

    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [options, setOptions] = useState(location.state.options)

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
                            <input type="text" />
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
                                className={openDate ? "date" : "date hide"}
                            />
                        </div>
                        <div className="lsItem">
                            <label>OPTIONS</label>
                        </div>
                        <div className="lsOpItems">
                            <div className="lsOptionItem">
                                <div className="lsOpText">Min Price</div>
                                <input type="number" className="lsOpInput" />
                            </div>
                            <div className="lsOptionItem">
                                <div className="lsOpText">Max Price</div>
                                <input type="number" className="lsOpInput" />
                            </div>
                            <div className="lsOptionItem">
                                <div className="lsOpText">Adults</div>
                                <input type="number" className="lsOpInput" ></input>
                            </div>
                            <div className="lsOptionItem">
                                <div className="lsOpText">Children</div>
                                <input type="number" className="lsOpInput" />
                            </div>
                            <div className="lsOptionItem">
                                <div className="lsOpText">Room</div>
                                <input type="number" className="lsOpInput" />
                            </div>
                        </div>
                        <button className="searchBt">
                            <FontAwesomeIcon className="searchBt scbt" icon={faSearch} />
                            SEARCH
                        </button>
                    </div>
                    <div className="listResult">
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List