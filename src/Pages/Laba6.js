import React from 'react'
import Axios from "axios";
import { useState, useEffect } from "react";
import ListTable from "../Components/ListTable";

function Laba6() {
    const [list, setList] = useState([])

    useEffect(() =>{
        Axios.get("http://localhost:3001/getAllScores").then((response) => {
            setList(response.data);
        });

    },[])

    return (
        <div className = "wrapper">
            <div className = "content">

                <h1>Лабораторная работа №6</h1>
                <div className = "taskConteiner">
                    <h2>Задание:</h2>
                    <p>
                        &nbsp;Разработайте веб-приложение «Статистика кубка мира по биатлону». Необходимо
                        хранить виды гонок, списки спортсменов и спортсменок и страны, за которые они
                        выступают, кубковые очки спортсменов и спортсменок по каждому виду гонки
                        (лучше, конечно, в виде «этап»- «гонка» - «место» - «очки», причем очки начисляются
                        в зависимости от места в гонке, ответственность за начисление очков можно
                        возложить на CGI-скрипт). Должна быть возможность просмотреть суммарное
                        количество очков по каждому виду гонки, по всем гонкам для мужчин (женщин), по
                        всем гонкам для страны. Должна быть возможность просмотра кубковой статистики
                        по спортсмену.
                    </p>
                </div>
                <div className = "solutionConteiner">
                    <h2>Решение:</h2>
                    <ListTable val = {list}/>
                </div>

            </div>
        </div>
    )
}

export default Laba6;
