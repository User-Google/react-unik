import React from 'react'
import Clock from '../Components/Clocks';

function Laba4() {

    return (
        <div className = "wrapper">
            <div className = "content">
                <div style = {{display: 'flex', justifyContent: 'space-between'}}>
                <h1>Лабораторная работа №4</h1>
                </div>
                <div className = "taskConteiner">
                    <h2>Задание:</h2>
                    <p>
                    &nbsp;Поместите электронные часы, дату, день недели в тело документа. Щелчок по часам
                        запускает еженедельник, в котором можно выбрать любой день и установить на него
                        мероприятие.
                    </p>
                </div>
                <div className = "solutionConteiner">
                    <h2>Решение:</h2>
                    <Clock />
                </div>
            </div>
        </div>
    )
}

export default Laba4;
