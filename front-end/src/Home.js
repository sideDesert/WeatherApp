import { useState } from "react";
import Navbar from "./Navbar";
import { useEffect } from "react";
import Card from "./Card";

const Home = () => {
    const [input, setInput] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

  

    const onChangeHandler = (value)=>{
        setInput(value);
    }
    const onSubmitHandler= async(event)=>{
        event.preventDefault();
        console.log('API Call');
        setLoading(true);
        const res = await fetch(`/?location=${encodeURI(input)}`, {
            method: 'GET'
        });
        const data = await res.json();
        setData(data);
        setLoading(false);
        console.log(data);
    }
    const handleKeyPress = (e)=>{
        if(e.keyCode === 13){
            onSubmitHandler();
        }
    }

    return (
        <div className="container">
            <h1>Weather</h1>
            <Navbar/>
            <h2>Go ahead don't be shy, use the search bar as much as you like!</h2>
            <form onSubmit={(event)=>{onSubmitHandler(event)}} onKeyPress = {handleKeyPress}>
                <input placeholder="Search" for='location' type='text' value={input} onChange={(event)=>{onChangeHandler(event.target.value)}} label='hello'>
                </input>
                <button type ="submit">Search</button>
            </form>
            {loading && <h2>Loading...</h2>}
            <div className="container_center">
                {data && <Card code={data.code} temperature = {data.temperature} feelsLike = {data.feelsLike} visibility={data.visibilty} windSpeed ={data.windSpeed} location={data.location} desc = {data.description.description} main ={data.description.main} />}
            </div>
        </div>
    );
}

export default Home;