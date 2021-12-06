import React from 'react'
import Clock from '../Components/Clocks';

function Laba4() {
    const [seconds, setSeconds] = React.useState(0);
    const [clocks, setClocks] = React.useState(true);
    const [clocks1, setClocks1] = React.useState(true);
      
    // function handleWindowBeforeUnload() {
    //     alert('Вы смотрели лабу ' + seconds + ' сек')
    // };
    
    React.useEffect(() => {
        if (seconds < 10) {
        setTimeout(() => setSeconds(seconds + 1), 1000);
        if (seconds == 5){
            setClocks(false);
        }
        } else {
            setClocks1(false);
            setSeconds('10 секунд прошло, все часы исчезли!');
        }
    });

    // React.useEffect(() => {
    //     return () => {
    //         window.addEventListener('beforeunload', handleWindowBeforeUnload());
    //     }
    // }, []);

    return (
        <div className = "wrapper">
            <div className = "content">
                <div style = {{display: 'flex', justifyContent: 'space-between'}}>
                <h1>Лабораторная работа №4</h1>
                {clocks ? <Clock /> : ''}
                </div>
                <div className = "taskConteiner">
                    <h2>Задание:</h2>
                    <p>
                    &nbsp;Напишите скрипт, который будет показывать электронные часы в заголовке окна, а через
                    5 секунд пребывания на странице переместит электронные часы из заголовка окна на
                    страницу и еще через 5 секунд выключит их. При закрытии окна или выходе со страницы
                    появляется окошко с сообщением, сколько секунд вы провели на странице.
                    </p>
                </div>
                <div className = "solutionConteiner">
                    <h2>Решение:</h2>
                    { clocks ? 'Здесь будут часы через ' + ((seconds-5)*(-1)) + ' секунд' : ''}
                    {(!clocks && clocks1) ? <Clock /> : ''}
                    {(!clocks && !clocks1) ? seconds : ''}
                </div>
            </div>
        </div>
    )
}

export default Laba4;
