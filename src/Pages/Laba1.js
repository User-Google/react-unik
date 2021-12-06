import { React, useState } from "react";
import data from '../Data/airportsData.json';
import { Radio, Select, Button, Modal } from 'antd';
const { Option } = Select;



function Laba1() {
    const [country, setCountry] = useState("rusAirport");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [valueOfSelect, setValueOfSelect] = useState('Выберите аэропорт...');
    function showModal() {
    setIsModalVisible(true);
    };
    const handleCancel = () => {
    setIsModalVisible(false);
    };
  const onChange = e => {
    setCountry(e.target.value);
    setValueOfSelect('Выберите аэропорт...');
  };
  function handleChange(value) {
    setValueOfSelect(value);
  }
    return (
        <div className = "wrapper">
            <div className = "content">
                <h1>Лабораторная работа №1</h1>
                <div className = "taskConteiner">
                    <h2>Задание:</h2>
                    <p>
                    &nbsp;Поместите на форму радиокнопки и выпадающий список. Выбор радиокнопки формирует
                    значения в списке. Например, радионопки могут указывать страны, а в выпадающем списке
                    будут присутствовать международные аэропорты данных стран.
                    </p>
                </div>
                <div className = "solutionConteiner"
                //  style = {{display: 'flex'}}
                 >
                    <h2>Решение:</h2>
                    <Radio.Group onChange={onChange} value={country} style = {{display: 'flex', flexDirection: 'row'}}>
                        <Radio value={'rusAirport'}>Россия</Radio>
                        <Radio value={'gbrAirport'}>Великобритания</Radio>
                        <Radio value={'usaAirport'}>Америка</Radio>
                    </Radio.Group>
                    <div style = {{marginTop: '10px'}}>
                    <Select 
                    value = {valueOfSelect} 
                    style={{ width: 200, borderRadius: '0px 10px' }} 
                    onChange={handleChange}
                    dropdownStyle={{borderRadius: '0px 10px' }}>
                        {data[country].map(item => {
                            return (
                                <Option  key={item.value} value={item.title}>{item.title}</Option>
                            )
                        })}
                    </Select>
                    <Button type="primary" onClick={showModal} style = {{marginLeft: '30px'}}>Показать JSON</Button>
                    </div>
                    <Modal 
                        visible={isModalVisible} 
                        onOk={handleCancel} 
                        okText = "Закрыть" 
                        cancelButtonProps={{hidden: true}}
                    >
                        <pre>
                        <code>
                            {JSON.stringify(data, null, 3)}
                        </code>
                        </pre>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Laba1;
