import './App.css';
import MainPage from './Pages/MainPage';
import Laba1 from './Pages/Laba1';
import Laba2 from './Pages/Laba2';
import Laba3 from './Pages/Laba3';
import Laba4 from './Pages/Laba4';
import { Routes, Route, Link } from "react-router-dom";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link  to = "/laba1">Лаба №1</Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link  to = "/laba2">Лаба №2</Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link  to = "/laba3">Лаба №3</Link>
    </Menu.Item>
    <Menu.Item key="4">
      <Link  to = "/laba4">Лаба №4</Link>
    </Menu.Item>
  </Menu>
);



function App() {
  return (
    <>
    <nav>
    <div className = "header">
      <div className = "nav">
        <ul className = "navList">
          <li className = "navItem"><Link style = {{textDecoration:"none", color: "#000"}} to = "/">Главная</Link></li>
          {/* <li className = "navItem"><Link style = {{textDecoration:"none", color: "#000"}} to = "/laba1">Лаба №1</Link></li>
          <li className = "navItem"><Link style = {{textDecoration:"none", color: "#000"}} to = "/laba2">Лаба №2</Link></li>
          <li className = "navItem"><Link style = {{textDecoration:"none", color: "#000"}} to = "/laba3">Лаба №3</Link></li>
          <li className = "navItem"><Link style = {{textDecoration:"none", color: "#000"}} to = "/laba4">Лаба №4</Link></li> */}
        </ul>
        <Dropdown className = "navItem" overlay={menu} trigger={['click']}>
          <a style = {{color: 'black'}} className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Лабораторные работы <DownOutlined />
          </a>
        </Dropdown>
      </div>
    </div>
    </nav>
    <div className = "paddingBottom">
       <div>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/laba1" element={<Laba1 />} />
            <Route path="/laba2" element={<Laba2 />} />
            <Route path="/laba3" element={<Laba3 />} />
            <Route path="/laba4" element={<Laba4 />} />
          </Routes>
        </div>
    </div>
    </>
  );
}

export default App;
