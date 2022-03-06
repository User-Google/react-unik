import React from 'react'
import Axios from "axios";
import { useState, useEffect } from "react";

import FilmCard from "../Components/FilmCard";

function Laba6() {
    const [postList, setFilmsList] = useState([])

    useEffect(() =>{
        Axios.get("http://localhost:3001/getFilms").then((response) => {
            setFilmsList(response.data);
        });
    },[])

    return (
        <div className = "wrapper">
            <div className = "content">
                <h1>Кинопоиск</h1>
                <div className={"cardsContent"}>
                    {postList.map((val, key) => {
                        return (
                            <FilmCard val={val}/>
                        )}
                    )}
                </div>
            </div>
        </div>
    )
}

export default Laba6;
