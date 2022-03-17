import {React, useState} from 'react'
import nightTime from '../Data/night.png'
import dayTime from '../Data/day.png'

function Laba2() {
    const[value, setValue] = useState('')

    const changeDayTime = () =>{
        value ? setValue('') : setValue('getToNightTime')
    }

    return (
        <div className = "wrapper">
            <div className = "content">
                <h1>Лабораторная работа №2</h1>
                <div className = "taskConteiner">
                    <h2>Задание:</h2>
                    <p>
                    &nbsp;Поместите в документ две картинки (например, день и ночь). Сначала видна только
                        картинка «день», а картинка «ночь» под ней спрятана. Наведение мыши на картинку
                        заставляет «день» постепенно становиться прозрачным, а «ночь» — непрозрачной. Когда
                        мышку убираем с картинки, «ночь» постепенно становится прозрачной, «день» постепенно
                        становится непрозрачным
                    </p>
                </div>
                <div className = "solutionConteiner">
                    <h2>Решение:</h2>
                    <div className='imageConteiner'>
                        <img className = {'nightTime'} src = {nightTime}  height="300" alt="nightTime"/>
                        <img className = {'dayTime ' + value} src = {dayTime} alt="dayTime" onClick={changeDayTime}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Laba2;