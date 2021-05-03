import React, {Component, useState} from 'react';
import {Users} from "../../services/api";
import {GoSearch} from "react-icons/all";

function Navigation () {
    const [inputValue, setInputValue] = useState();
    const [searchArr, setSearchArr] = useState();
    const [userArr, setUserArr] = useState(Users());

    const handleSearch = (text) => {
        let filteredArr = userArr.filter(elem => elem.name.toLowerCase().includes(text.toLowerCase()) || elem.surname.toLowerCase().includes(text.toLowerCase()))
    }
    return (
        <div className={'navigation'}>
            <select name="user-filter" id="user-filter" className="navigation__filter">
                <option value="All" className="navigation__select__option">All</option>
            </select>
            <div className="navigation__search-panel">
                <GoSearch />
                <input placeholder={'Search'} onChange={(e) => handleSearch(e.target.value)} value={inputValue} type="text" className="navigation__search"/>
            </div>
        </div>
        )
}

export default Navigation;