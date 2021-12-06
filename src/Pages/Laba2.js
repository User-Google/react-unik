import {React, useState} from 'react'
import minivan from '../Data/minivan.png'
import pickup from '../Data/pickup.png'
import sportcar from '../Data/sportcar.png'

function Laba2() {
    const[mvStyle, setmvStyle] = useState('mvStyle')
    const[puStyle, setpuStyle] = useState('puStyle')
    const[scStyle, setscStyle] = useState('scStyle')
    function clickOnMinivan() {
        console.log('Minivan')
        mvStyle == 'mvStyle' ? setmvStyle('mvStyle1') : setmvStyle('mvStyle')
    }
    function clickOnPickup() {
        console.log('Pickup')
        puStyle == 'puStyle' ? setpuStyle('puStyle1') : setpuStyle('puStyle')
    }
    function clickOnSportcar() {
        console.log('Sportcar')
        scStyle == 'scStyle' ? setscStyle('scStyle1') : setscStyle('scStyle')
    }
    return (
        <div className = "wrapper">
            <div className = "content">
                <h1>Лабораторная работа №2</h1>
                <div className = "taskConteiner">
                    <h2>Задание:</h2>
                    <p>
                    &nbsp;Поместите в документ три рисунка (например, мышка, кошка и собака). Щелчок по
                    картинке «мышка» заставляет ее убежать, щелчок по «кошке» - мышка убегает, кошка
                    догоняет, щелчок по «собаке» - собака бежит за кошкой, кошка — за мышкой.
                    </p>
                </div>
                <div className = "solutionConteiner">
                    <h2>Решение:</h2>
                    <div className='imageConteiner'>
                        <div className = "carImage">
                            <img className = {mvStyle} src = {minivan}  height="100" alt="minivan" onClick = {clickOnMinivan}/>
                        </div>
                        <div className = "carImage">
                            <img className = {puStyle} src = {pickup}  height="100" alt="pickup" onClick = {clickOnPickup}/>
                        </div>
                        <div className = "carImage">
                            <img className = {scStyle} src = {sportcar} height="100" alt="sportcar" onClick = {clickOnSportcar}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Laba2;