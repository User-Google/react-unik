import { useState } from "react";
import React from "react";
import {Button} from "antd";
import { ReloadOutlined } from '@ant-design/icons';

const colors = [ 'green', 'blue', 'red' ]

var interval

function Laba1() {
    const [value, setValue] = useState('');

  function onButtonClick(e) {
      setValue(colors.indexOf(e.target.style.background))
      if (interval){
          clearInterval(interval)
      }
      interval = setInterval(() => {
          setValue((v) => (v === 2 ? 0 : v + 1));
      }, 2000)
  }

  function resetColor() {
      setValue('')
      if (interval){
          clearInterval(interval)
      }
  }

    return (
        <div className ={"wrapper"} style={{ backgroundColor: colors[value] }}>
            <div className ={"content"}>
                <h1>Лабораторная работа №1</h1>
                <div className = "taskConteiner">
                    <h2>Задание:</h2>
                    <p>
                    &nbsp;Поместите на форму разноцветные кнопки. Щелчок по кнопке делает цвет фона
                        документа таким же, как у данной кнопки. Через 2 секунды цвет фона автоматически
                        переключается на цвет следующей кнопки и т.д.
                    </p>
                </div>
                <div className = "solutionConteiner">
                    <h2>Решение:</h2>
                    <button className={'colorButton'} type="primary" onClick={onButtonClick} style = {{
                        background: 'green',
                    }}>Зеленый</button>
                    <button className={'colorButton'} type="primary" onClick={onButtonClick} style = {{
                        background: 'blue',
                    }}>Синий</button>
                    <button className={'colorButton'} type="primary" onClick={onButtonClick} style = {{
                        background: 'red',
                    }}>Красный</button>
                    <Button type="primary" shape="circle" icon={<ReloadOutlined />} onClick={resetColor} />
                </div>
            </div>
        </div>
    )
}

export default Laba1;
