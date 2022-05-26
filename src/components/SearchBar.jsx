import React, {useState} from "react";
import "./SearchBar.css";
import {BsSearch} from "react-icons/bs"

function SearchBar({placeholder, data, handleSearchMain}){

    const [filteredData, setFilteredData] = useState([]);
    const [input, setInput] = useState("");

    function handleFilter(event){
        const searchWord = event.target.value;
        setInput(searchWord);
        const newFilter = data.filter((value) =>{
            return value.name.common.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(event.target.value === "")
            setFilteredData([]);
        else
            setFilteredData(newFilter);
    }

    function handleSearch(){
        handleSearchMain(input);
        setFilteredData([]);
        setInput("");
    }

    function checkKey(e){
        if(e.keyCode === 13){
            if(filteredData.length > 0){
                handleSearchMain(filteredData[0].name.common);
                setFilteredData([]);
                setInput("");
            }
            else{
                handleSearch();
            }
        }     
    }

    return( 
        <div className="search">
            <div className="searchInputs">
                <input onKeyDown={checkKey} onChange={handleFilter} type="text" value={input} placeholder={placeholder}/>
                <div onClick={handleSearch} className="searchIcon">
                    <BsSearch/>
                </div>
            </div>
            <div className="suggestions">
            {filteredData.length != 0 && (
                <div className="dataResult">
                    {filteredData.map((value, key)=>{
                        return <div key={key} onClick={()=>{
                            setInput(value.name.common)
                            handleSearch();
                        }} className="suggest">{value.name.common}</div>
                    })}
                </div>
            )}
            </div>
        </div>
    )
}

export default SearchBar;