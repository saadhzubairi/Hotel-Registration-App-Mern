import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faCalendar, faCar, faHotel, faPerson, faPlane, faSearch, faTaxi } from '@fortawesome/free-solid-svg-icons'
import "./header.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";


const Header = ({ type }) => {


    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const navigate = useNavigate();

    const handleOption = (name, op) => {
        setOptions(prev => {
            return {
                ...prev,
                [name]: op === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    const handleSearch = () => {
        
        navigate("/hotels", { state: { destination, date, options } });
    }

    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon className="icon" icon={faHotel} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon className="icon" icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon className="icon" icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon className="icon" icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon className="icon" icon={faTaxi} />
                        <span>Cabbies</span>
                    </div>
                </div>
                {type !== "list" &&
                    <>
                        <h1 className="headerTitle">Such Crazy Discounts!? You're Kidding Me!</h1>
                        <p1 className="headerDesc">Get amazing discounts on every single on of your travels because we have a buttload of cash to give away and you're a sucker!</p1>
                        <div>
                            <button className="headerButton">LOGIN OR SIGN UP</button>
                        </div>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon className="Headericon" icon={faBed} />
                                <input
                                    type="text"
                                    placeholder="Where're you goin!?"
                                    className="headerSearchInput"
                                    onChange={(e) => setDestination(e.target.value)} />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon onClick={() => setOpenDate(!openDate)} className="Headericon" icon={faCalendar} />
                                <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
                                    {`
                            ${format(date[0].startDate, "dd/MM/yyyy")} 
                            to 
                            ${format(date[0].endDate, "dd/MM/yyyy")}`
                                    }
                                </span>
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    rangeColors = {['#dd1a58', '#7050ff', '#fed14c']}
                                    className={openDate ? "date" : "date hide"}
                                />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon onClick={() => { setOpenOptions(!openOptions) }} className="Headericon" icon={faPerson} />
                                <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`Adults: ${options.adult} | Children: ${options.children} | Rooms: ${options.room}`}</span>
                                <div className={openOptions ? "options" : "options hide"}>
                                    <div className="optionItem">
                                        <span className="optionText">Adults</span>
                                        <div className="optionCount">
                                            <button className="optionCounterButton" disabled={options.adult <= 1} onClick={() => handleOption("adult", "d")}>-</button>
                                            <span className="optionText">{`${options.adult}`}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Children</span>
                                        <div className="optionCount">
                                            <button className="optionCounterButton" disabled={options.children <= 0} onClick={() => handleOption("children", "d")}>-</button>
                                            <span className="optionText">{`${options.children}`}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Rooms</span>
                                        <div className="optionCount">
                                            <button className="optionCounterButton" disabled={options.room <= 1} onClick={() => handleOption("room", "d")}>-</button>
                                            <span className="optionText">{`${options.room}`}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="headerButton" onClick={handleSearch}>
                                <FontAwesomeIcon className="Headericon scbt" icon={faSearch} />
                                SEARCH
                            </button>
                        </div>
                    </>
                }

            </div>
        </div>
    )
}

export default Header