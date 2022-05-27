import React, { useState, useEffect } from "react";
import {BsSearch} from "react-icons/bs"
import {Grid, Snackbar, Alert} from "@mui/material";
import Card from "./Card";
import SearchBar from "./SearchBar";
import "./Main.css";
import axios from "axios";

function Main(){

    const [location, setLocation] = useState([]);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const [open, setOpen] = useState(false);
    const [placeN, setPlaceN] = useState(""); 
    function handleClose(e, reason){
        if(reason === "clickaway")
            return;
        setOpen(false);
    }

    function handleSearch(place){
        setPlaceN(place)
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + place + "&appid=edddb4aba03f8d88b81611d9bf435a64";
        axios.get(url).then(res => {
            axios.get("https://api.openweathermap.org/data/2.5/onecall?lat="+res.data.coord.lat+"&lon="+res.data.coord.lon+"&appid=edddb4aba03f8d88b81611d9bf435a64").then(resp=>{
                const listItem = {
                    name: place,
                    current: resp.data.current,
                    daily: resp.data.daily
                }
                setData((prevItems)=>[...prevItems, listItem])
            })
        }).catch(err=>{
            setOpen(true);
        });
    }

    function handleDelete(id){
        data.splice(id, 1);
        setData((prevItems) => [...prevItems]);
    }

    function createCard(dataItem, i){
        return (<Grid key={i} item sm={12} md={6} lg={4}>
            <Card key ={i} id={i} name={dataItem.name} current={dataItem.current} daily={dataItem.daily} onDelete={handleDelete}/>
        </Grid>);
    }

    useEffect(()=>{
        const url = "https://restcountries.com/v3.1/all";
        axios.get(url).then(res => {
            setLocation(res.data);
        });
    }, [])

    return(
        <section id="main">
            <SearchBar key={1} placeholder="Enter a location..." data={location} handleSearchMain={handleSearch}/>
            <Grid container spacing={2} className="card-list">
                {data.length !== 0 && data.map(createCard)}
            </Grid>
            <Snackbar sx={{marginTop:"300px"}} anchorOrigin={{vertical:"top", horizontal:"center"}} open={open} autoHideDuration={2500} onClose={handleClose}>
                <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                    Cannot find weather details for "{placeN}".
                </Alert>
            </Snackbar>
        </section>
    );
}

export default Main;