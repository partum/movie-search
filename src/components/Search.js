import React from 'react';

export default function Search(props) {
    let [search, setSearch] = React.useState("Search...")
    function handleSearch(input){
        setSearch(input.target.value)
    }
    function resetInputField(){
        setSearch("");
    }
    function callSearchFunction(input){
        input.preventDefault();
        props.search(search);
        resetInputField();
    }
	return (
        <form className="search">
             <input type="text" placeholder={search} onChange={handleSearch}></input>
             <input onClick = {callSearchFunction} type="submit" value="SEARCH"/>
        </form>
	);
};