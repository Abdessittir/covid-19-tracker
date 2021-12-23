import "../styles/Home.css";
import { useState } from "react";
import countries from "../Countries";
import { useCountry } from "../contexts/CountryProvider";

function Home(){
    return (
        <div className="home">
            <h1>Data for Covid-19 and Vacines</h1>
            <SearchForm />
        </div>
    );
}

export function SearchForm(){
    const [text, setText] = useState("");

    function handleChange(e){
        setText(e.target.value);
    }
    return (
        <div>
        <form>
            <label>Enter Country Name</label>
            <input type="text" value={text} onChange={handleChange} />
            </form>
            <div className="options" style={{ opacity: text === ""? 0:1 }}>
                {
                    countries?.map(country => {
                        let firstLetter = text[0]?.toUpperCase();
                        let finalText = firstLetter + text.slice(1);
                        if(country.indexOf(finalText) !== -1){
                            return (
                                <SearchQuery key={country} query={country} />
                            );
                        }
                    })
                }
            </div>
            </div>
    );
}
function SearchQuery({query}){
    const { setCountry } = useCountry();
    function handleClick(){
        localStorage.setItem("country", JSON.stringify(query));
        window.location.reload();
    }
    return (
        <p onClick={handleClick} className="one_option">{query}</p>
    );
}

export default Home;
