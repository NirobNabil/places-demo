import React from 'react';
import { Table, Divider, Tag } from 'antd';

const columns = [
  {
    title: 'icon',
    dataIndex: 'icon',
    key: 'icon',
    render: icon => <img src={icon} />
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'vicinity',
    dataIndex: 'vicinity',
    key: 'vicinity',
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
          return (
            <Tag key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
];

// const data = data.map( (data, i) => {
//   return {
//     'key': i,
//     'name': data.name,
//     'icon': data.icon,
//     'coordinate': `${data.geometry.location.lat()} , ${data.geometry.location.lng()}`,
//     'tags': data.types,
//     'vicinity': data.vicinity
//   }
// })




class DataTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dataSource: {}
    }
  }

  render(){
    return (
      <Table 
        columns={columns} 
        dataSource={ 
          this.props.data.map( (data, i) => {
            return {
              'key': i,
              'name': data.name,
              'icon': data.icon,
              'coordinate': `${data.geometry.location.lat()} , ${data.geometry.location.lng()}`,
              'tags': data.types,
              'vicinity': data.vicinity,
            }
          })
        } 
      />
    )
  }
}

export default DataTable;
