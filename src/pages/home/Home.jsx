import "./Home.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/properyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";

const Home = ()=>{
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h className="homeTitle">Browse by property types</h>
                <PropertyList/>
                <h className="homeTitle">Homes guests love</h>
                <FeaturedProperties/>
            </div>
        </div>
    )
}

export default Home