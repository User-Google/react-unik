import React from 'react'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

function Laba3() {
    function handleClick(e){
        console.log('click ', e);
      };
    return (
        <div className = "wrapper">
            <div className = "content">
                <h1>Лабораторная работа №3</h1>
                <div className = "taskConteiner">
                    <h2>Задание:</h2>
                    <p>
                    &nbsp;Разместите в документе заголовки меню. Щелчок левой клавишей мыши по заголовку
                    меню вызывает появление подменю ссылок строкой ниже. Повторный щелчок убирает
                    подменю.
                    </p>
                </div>
                <div className = "solutionConteiner">
                    <h2>Решение:</h2>
                    <Menu
                        onClick={handleClick}
                        style={{ borderRadius: '10px', width: 256, backgroundColor: '#e2e2e2' }}
                        mode="inline"
                    >
                        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                        <Menu.ItemGroup key="g1" title="Item 1">
                            <Menu.Item key="1"><a href = 'https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0'>Вики</a></Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g2" title="Item 2">
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>   
                </div>
            </div>
        </div>
    )
}

export default Laba3;
