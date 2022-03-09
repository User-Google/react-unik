import React from 'react'
import Axios from "axios";
import { useState, useEffect } from "react";
import ListTable from "../Components/ListTable";

function Laba6() {
    const [list, setList] = useState([])

    useEffect(() =>{
        Axios.get("http://localhost:3001/getList").then((response) => {
            setList(response.data);
        });

    },[])

    return (
        <div className = "wrapper">
            <div className = "content">
                <h1>Чайный каталог</h1>
                <ListTable val = {list}/>
            </div>
        </div>
    )
}

export default Laba6;
