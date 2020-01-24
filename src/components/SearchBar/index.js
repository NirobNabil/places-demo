import React from 'react';
import './index.scss';
import { Form, Icon, Input, Button, Select, Spin } from 'antd';
import env from '../../utils/constants';
import { CSVLink } from "react-csv";

const { Option } = Select;
const API_KEY = env.API_KEY;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class SearchBarForm extends React.Component {
  constructor(props){
    super(props);
    console.log("gggggggggggggggggggggggggggggggggggggggg")
    console.log(props);
    this.props.set_setSearchbarDefaultCoordinate(this.setSearchbarDefaultCoordinate);
  }

  setSearchbarDefaultCoordinate = (coordinate) => {
    this.props.form.setFields({
      'latitude': {
        value: coordinate.latitude,
      },
      'longitude': {
        value: coordinate.longitude,
      },
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        console.log("went");
        this.props.find_places(values);
        //getPlaces({latitude: values.latitude, longitude: values.longitude}, values.radius, values.filters)
      }
    });
  };

  componentDidMount() {
    // To disable submit button at the beginning.
    this.props.form.validateFields();
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    // Only show error after a field is touched.
    //const usernameError = isFieldTouched('username') && getFieldError('username');
    //const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item validateStatus="success">
          {getFieldDecorator('latitude', {
            rules: [{ required: true, message: 'Please input your Latitude!' }],
          })(
            <Input
              placehoder="Latitude"
            />,
          )}
        </Form.Item>
        <Form.Item validateStatus="success">
          {getFieldDecorator('longitude', {
            rules: [{ required: true, message: 'Please input your Longitude' }],
          })(
            <Input
              placeholder="Longitude"
            />,
          )}
        </Form.Item>
        <Form.Item validateStatus="success">
          {getFieldDecorator('radius', {
            rules: [{ required: true, message: 'Please input your range' }],
          })(
            <Input
              placeholder="radius"
            />,
          )}
        </Form.Item>
        <Form.Item validateStatus="success">
          {getFieldDecorator('filters', {
            rules: [{ required: true, message: ' ' }],
          })(
            <Select
              mode="multiple"
              style={{ width: '25em', flexGrow: '1' }}
              placeholder="Please select"
            >
              {['restaurant', 'movie_theater', 'atm', 'mosque', 'bank', 'doctor'].map( elem => <Option key={elem}> {elem} </Option> ) }
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button type="primary" className="toCSVButton">
            <CSVLink data={this.props.places}>-> CSV</CSVLink>
          </Button>
          {(this.props.loading == true) ? <Spin className="spin" /> : <></>}
        </Form.Item>
      </Form>
    );
  }
}

const SearchBar = Form.create({ 
  name: 'SearchBar', 
})(SearchBarForm);

export default SearchBar;