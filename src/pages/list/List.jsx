import "./list.css";
import Header from "../../components/header/Header.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import { useLocation } from "react-router-dom"
import { useState } from "react";
import { format } from "date-fns";

const List = () => {
    const location = useLocation()

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
                        <div className="lsItem">
                            <label >DATE</label>
                            <span className="dt"> {`${format(date[0].startDate, "dd/MM/yy")} - 
                                    ${format(date[0].endDate, "dd/MM/yy")}`}</span>
                        </div>
                        <div className="lsItem">
                            <label>OPTIONS</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="listResult"></div>
                </div>
            </div>
        </div>
    )
}

export default List