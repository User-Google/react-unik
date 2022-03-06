import React, { useState } from 'react';
import { Modal, Button } from 'antd';

function FilmCard(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
                <div className={'FilmCard'}>
                    <img src={props.val.imglink}/>
                    <h1>{props.val.title}</h1>
                    <h2>{props.val.director}</h2>
                    <h2>{props.val.year}, {props.val.genre}</h2>
                    <div className={'buttonConteiner'}>
                        <Button type="primary" onClick={showModal}>
                            Информация
                        </Button>
                        <a style = {{display: 'block'}} target={"_blank"} href={props.val.videolink}>
                            <Button type={'primary'}>Смотреть</Button>
                        </a>
                    </div>
                </div>
            <Modal title="Кинопоиск"
                   okText = "Закрыть"
                   cancelButtonProps={{hidden: true}}
                   visible={isModalVisible}
                   onOk={handleOk} >
                <h1>Информация о фильме</h1>
                <p>Название фильма: {props.val.title}</p>
                <p>Режиссер: {props.val.director}</p>
                <p>Год: {props.val.year}</p>
                <p>Жанр: {props.val.genre}</p>
                <p>Актеры: {props.val.actors}</p>
            </Modal>
        </div>
    )
}

export default FilmCard;
