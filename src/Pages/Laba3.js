import React from 'react'
import { Menu } from 'antd';
import { CustomerServiceOutlined, MailOutlined, SmileOutlined } from '@ant-design/icons';

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
                    &nbsp;Сделайте вертикальное меню-табличку: на странице слева расположена табличка.
                        Щелчок по пунктам меню может либо пересылать нас на нужную страницу, либо открывать
                        подстроки подменю (строки таблички раздвигаются и между ними появляется табличка-подменю, организованная аналогичным образом). Уровней вложенности подменю должно
                        быть не менее 3 (в идеале, не должно быть ограничено).
                    </p>
                </div>
                <div className = "solutionConteiner">
                    <h2>Решение:</h2>
                    <Menu
                        onClick={handleClick}
                        style={{ borderRadius: '10px', width: 256, backgroundColor: '#e2e2e2' }}
                        mode="inline"
                    >
                        <SubMenu key="sub1" icon={<MailOutlined />} title="Мессенджеры">
                        <Menu.ItemGroup key="g1" title="Русские">
                            <Menu.Item key="1"><a href = 'https://vk.com/' target="_blank">ВКонтакте</a></Menu.Item>
                            <Menu.Item key="2"><a href = 'https://ok.ru/' target="_blank">Одноклассники</a></Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g2" title="Американские">
                            <Menu.Item key="3"><a href = 'https://www.whatsapp.com/' target="_blank">WhatsApp</a></Menu.Item>
                            <Menu.Item key="4"><a href = 'https://www.instagram.com/' target="_blank">Instagram</a></Menu.Item>
                        </Menu.ItemGroup>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<CustomerServiceOutlined />} title="Музыка">
                        <Menu.Item key="5"><a href = 'https://music.youtube.com/' target="_blank">YouTube Music</a></Menu.Item>
                        <Menu.Item key="6"><a href = 'https://music.yandex.ru/' target="_blank">Яндекс.Музыка</a></Menu.Item>
                        <SubMenu key="sub3" title="И ещё музыка">
                            <Menu.Item key="7"><a href = 'https://www.spotify.com/' target="_blank">Spotify</a></Menu.Item>
                            <Menu.Item key="8"><a href = 'https://soundcloud.com/' target="_blank">SoundCloud</a></Menu.Item>
                        </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub4" icon={<SmileOutlined />} title="Другие развлечения">
                        <Menu.Item key="9"><a href = 'https://store.steampowered.com/' target="_blank">Steam</a></Menu.Item>
                        <Menu.Item key="10"><a href = 'https://www.epicgames.com/' target="_blank">EpicGames</a></Menu.Item>
                        <Menu.Item key="11"><a href = 'https://kion.ru/' target="_blank">Кинотеатр KION</a></Menu.Item>
                        </SubMenu>
                    </Menu>   
                </div>
            </div>
        </div>
    )
}

export default Laba3;
