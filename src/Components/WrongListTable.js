import React, { Component } from "react";
import { Table, Button, Space } from 'antd';
import Axios from "axios";

class ListTable extends Component {

    state = {
        filteredInfo: null,
        sortedInfo: null,
        data: this.props.val
    };

    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', this.state.data);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    };

    render() {
        let { sortedInfo, filteredInfo, data } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const columns = [
            {
                title: 'Производитель',
                dataIndex: 'manufacturer',
                key: 'manufacturer',
                filters: [
                    { text: 'TESS', value: 'TESS' },
                    { text: 'JustMont', value: 'JustMont' },
                ],
                filteredValue: filteredInfo.manufacturer || null,
                onFilter: (value, record) => record.manufacturer.includes(value),
                sorter: (a, b) => a.manufacturer.length - b.manufacturer.length,
                sortOrder: sortedInfo.columnKey === 'manufacturer' && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: 'Сорт',
                dataIndex: 'sort',
                key: 'sort',
                filters: [
                    { text: 'зеленый', value: 'зеленый' },
                    { text: 'черный', value: 'черный' },
                    { text: 'белый', value: 'белый' },
                ],
                filteredValue: filteredInfo.sort || null,
                onFilter: (value, record) => record.sort.includes(value),
                sorter: (a, b) => a.sort.length - b.sort.length,
                sortOrder: sortedInfo.columnKey === 'sort' && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: 'Вид',
                dataIndex: 'species',
                key: 'species',
                filters: [
                    { text: 'листовой', value: 'листовой' },
                    { text: 'пуэр', value: 'пуэр' },
                    { text: 'порох', value: 'порох' },
                ],
                filteredValue: filteredInfo.species || null,
                onFilter: (value, record) => record.species.includes(value),
                sorter: (a, b) => a.species.length - b.species.length,
                sortOrder: sortedInfo.columnKey === 'species' && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: 'Добавки',
                dataIndex: 'additives',
                key: 'additives',
                filters: [
                    { text: 'жасмин', value: 'жасмин' },
                    { text: 'бергамот', value: 'бергамот' },
                    { text: 'роза', value: 'роза' },
                ],
                filteredValue: filteredInfo.additives || null,
                onFilter: (value, record) => record.additives.includes(value),
                sorter: (a, b) => a.additives.length - b.additives.length,
                sortOrder: sortedInfo.columnKey === 'additives' && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: 'Вес',
                dataIndex: 'weight',
                key: 'weight',
                sorter: (a, b) => a.weight - b.weight,
                sortOrder: sortedInfo.columnKey === 'weight' && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: 'Стоимость',
                dataIndex: 'cost',
                key: 'cost',
                // filters: [
                //     { text: 'London', value: 'London' },
                //     { text: 'New York', value: 'New York' },
                // ],
                sorter: (a, b) => a.cost - b.cost,
                sortOrder: sortedInfo.columnKey === 'cost' && sortedInfo.order,
                ellipsis: true,
            },
            {
                title: 'Фото',
                dataIndex: 'picture',
                key: 'picture',
                render: (text) => <img height={'40'} src={text}/>
            },

        ];
        return (
            <>
                <Table rowKey={'id'} columns={columns} dataSource={this.props.val} onChange={this.handleChange} />
            </>
        );
    }
}

export default ListTable;
