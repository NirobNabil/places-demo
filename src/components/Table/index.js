import React from 'react';
import { Table, Divider, Tag } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }, 
  {
    title: 'Lat/Lon',
    dataIndex: 'coordinate',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'IZAKAYA',
    coordinate: 32 + " / " + 31.23,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'child friendly'],
  },
  {
    key: '2',
    name: 'Dacca',
    coordinate: 42.23 + " / " + 54,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Dacca',
    coordinate: 42.23 + " / " + 54,
    address: 'London No. 1 Lake Park',
    tags: ['NICE'],
  },
];


class DataTable extends React.Component{
  render(){
    return (
      <Table columns={columns} dataSource={data} />
    )
  }
}

export default DataTable;
