import { useCountry } from "../contexts/CountryProvider";
import { useEffect, useState } from "react";
import "../styles/Dashboard.css";
import Map from "./Map";
import { SearchForm } from "./Home";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { IconButton, Skeleton } from "@mui/material";
import { Box } from "@mui/system";

function Dashboard(){
    const {country} = useCountry();
    const [loading, setLoading] = useState(true);
    const [countryInfo, setCountryInfo] = useState(null);
    const [vaccineInfo, setVaccineInfo] = useState(null);

    useEffect(() => {
        if(country){
            function fetchData(){
                fetch("https://covid-api.mmediagroup.fr/v1/cases?country="+country)
            .then(response => response.json())
            .then(data => {
                setCountryInfo(data);
                console.log(countryInfo, data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err.message);
                setLoading(false);
            });
            
            
            fetch("https://covid-api.mmediagroup.fr/v1/vaccines?country="+country)
            .then(response => response.json())
            .then(data => {
                setVaccineInfo(data);
               console.log(vaccineInfo, data);
               setLoading(false);
            })
            .catch(err => {
              console.log(err);
              setLoading(false);
            });
            }

            fetchData();
        }
    }, [country]);

    function handleClick(){
        localStorage.removeItem("country");
        window.location.reload();
    }

    if(loading){
        return (
            <div className="loading">
                <Box className="box" sx={{ width: "100%"}}>
               <Skeleton className="Skeleton" />
                <Skeleton className="Skeleton" animation="wave" />
               <Skeleton className="Skeleton" animation={false} />
            </Box>
            </div>
        );
    }

    return (
        <div className="dashboard">
            <p onClick={handleClick}>
                <IconButton>
                <ArrowCircleLeftIcon fontSize="large" className="back" />
                </IconButton>
            </p>
            <h1>{countryInfo?.All?.country}</h1>
            <section>
            <div className="countryInfo">
                <h2>country Info</h2>
                <Row title={"Population"} value={countryInfo?.All.population} />
                
                <Row title={"Area (km2)"} value={countryInfo?.All.sq_km_area}/>
            
                <Row title={"Life Expectancy"} value={countryInfo?.All.life_expectancy} />
                
                <Row title={"Elevation In Meters"} value={countryInfo?.All.elevation_in_meters} />
            
                <Row title={"Continent"} value={countryInfo?.All.continent} />
            
                <Row title={"Location"} value={countryInfo?.All.location} />

                <Row title={"Capital City"} value={countryInfo?.All.capital_city}/>
            </div>

            <div className="covidInfo">
                <h2>Covid Info</h2>
                <Row title={"Confirmed"} value={countryInfo?.All.confirmed}/>
        
                <Row title={"Deaths"} value={countryInfo?.All.deaths}/>
            </div>
            <div className="vaccineInfo">
                <h2>Vaccine Info</h2>
                <Row title={"administered"} value={vaccineInfo?.All?.administered} />
                <Row title={"People Partially Vaccinated"} value={vaccineInfo?.All?.people_partially_vaccinated} />
                <Row title={"People Vaccinated"} value={vaccineInfo?.All?.people_vaccinated} />
            </div>
            </section>
            
            <div className="map">
                { countryInfo && <Map lat={countryInfo.All.lat} lng={countryInfo.All.long} />}
            </div>

            <div className="form">
                <h2>Change The country</h2>
                <SearchForm />
            </div>
        </div>
    );
}

function Row({title, value}){
    return (
        <div className="row">
            <p className="row_title">{title}</p>
            <p className="row_value">{value}</p>
        </div>
    );
}

export default Dashboard;