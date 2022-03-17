import React, {Component, useState} from "react";
import { Modal, Table, Typography, Button, Space } from 'antd';
import Axios from "axios";
const { Text } = Typography;


class ListTable extends Component {

    state = {
        filteredInfo: null,
        sortedInfo: null,
        data: this.props.val,
        isModalVisible: false,
        par_id: '1',
        part_info: {}
    };

    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', this.state.data);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };

    showModal = (name) => {
        console.log(name.target.innerText)
        this.setState({
            isModalVisible: true,
            par_id: name.target.innerText
        });
        Axios.get("http://localhost:3001/getPartInfo", { params: {
                part_name: name.target.innerText
            }
        }).then((response) => {
            this.setState({
                part_info: response.data
            });
            console.log(this.state.part_info)
        });
    };

    handleOk = () => {
        this.setState({
            isModalVisible: false
        });
    };

    render() {
        let { sortedInfo, filteredInfo, data, isModalVisible, par_id, part_info } = this.state;

        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const columns = [
            {
                title: 'Участник',
                dataIndex: 'participant',
                key: 'participant',
                render: (text) => <a onClick={this.showModal}>{text}</a>
            },
            {
                title: 'Вид гонки',
                dataIndex: 'race',
                key: 'race',
                filters: [
                    { text: 'спринт', value: 'спринт' },
                    { text: 'гонка преследования', value: 'гонка преследования' },
                    { text: 'индивидуальный спринт', value: 'индивидуальный спринт' },
                    { text: 'суперспринт', value: 'суперспринт' },
                ],
                filteredValue: filteredInfo.race || null,
                onFilter: (value, record) => record.race.includes(value),
                sorter: (a, b) => a.race.length - b.race.length,
                sortOrder: sortedInfo.columnKey === 'race' && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: 'Пол',
                dataIndex: 'gender',
                key: 'gender',
                filters: [
                    { text: 'М', value: 'М' },
                    { text: 'Ж', value: 'Ж' },
                ],
                filteredValue: filteredInfo.gender || null,
                onFilter: (value, record) => record.gender.includes(value),
                sorter: (a, b) => a.gender.length - b.gender.length,
                sortOrder: sortedInfo.columnKey === 'gender' && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: 'Страна',
                dataIndex: 'cup_country',
                key: 'cup_country',
                filters: [
                    { text: 'Россия', value: 'Россия' },
                    { text: 'Китай', value: 'Китай' },
                    { text: 'Германия', value: 'Германия' },
                    { text: 'Англия', value: 'Англия' },
                ],
                filteredValue: filteredInfo.cup_country || null,
                onFilter: (value, record) => record.cup_country.includes(value),
                sorter: (a, b) => a.cup_country.length - b.cup_country.length,
                sortOrder: sortedInfo.columnKey === 'cup_country' && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: 'Очки',
                dataIndex: 'score',
                key: 'score',
                sorter: (a, b) => a.score - b.score,
                sortOrder: sortedInfo.columnKey === 'score' && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: 'Место',
                dataIndex: 'place',
                key: 'place',
                sorter: (a, b) => a.place - b.place,
                sortOrder: sortedInfo.columnKey === 'place' && sortedInfo.order,
                ellipsis: true,
            },
        ];
        return (
            <>
                <Table rowKey={'id'} columns={columns} dataSource={this.props.val} onChange={this.handleChange}
                       summary={pageData => {
                           let totalScore = 0;

                           pageData.forEach(({ score }) => {
                               totalScore += score;
                           });

                           return (
                               <>
                                   <Table.Summary.Row>
                                       <Table.Summary.Cell>Всего очков</Table.Summary.Cell>
                                       <Table.Summary.Cell>
                                           <Text type="danger">{totalScore}</Text>
                                       </Table.Summary.Cell>
                                   </Table.Summary.Row>
                               </>
                           );
                       }}/>
                <Modal title="Информация о спортсмене"
                       okText = "Закрыть"
                       cancelButtonProps={{hidden: true}}
                       visible={isModalVisible}
                       onOk={this.handleOk} >
                    {part_info[0] && par_id === part_info[0].surname ? (<div>
                            {part_info[0].photo ? (<img style={{width: '200px'}} src={part_info[0].photo}/>) : (<div><u>Фото отсутствует</u></div>)}
                            <div>Фамилия: {part_info[0].surname}</div>
                            <div>Имя: {part_info[0].name}</div>
                            {part_info[0].lastname ? (<div>Отчество: {part_info[0].lastname}</div>) : (null)}
                            <div>Возраст: {part_info[0].age}</div>
                            <div>Пол: {part_info[0].gender == "М" ? (<span>Мужской</span>) : (<span>Женский</span>)}</div>
                            <div>Место рождения: {part_info[0].country}</div>
                            </div>)
                        : (<div>Загрузка...</div>)}
                </Modal>
            </>
        );
    }
}

export default ListTable;
