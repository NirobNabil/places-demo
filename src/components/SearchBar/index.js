import React from 'react';
import { Form, Icon, Input, Button, Select } from 'antd';

const { Option } = Select;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class SearchBarForm extends React.Component {
  constructor(props){
    super(props)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        console.log("went");
        this.props.addMarker(values);
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
          {getFieldDecorator('filters', {
            rules: [{ required: true, message: 'Please input your Longitude' }],
          })(
            <Select
              mode="multiple"
              style={{ width: '40em', flexGrow: '1' }}
              placeholder="Please select"
            >
              {['restaurants', 'coffee shop', 'park', 'theatre', 'shopping mall'].map( elem => <Option key={elem}> {elem} </Option> ) }
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const SearchBar = Form.create({ name: 'SearchBar' })(SearchBarForm);

export default SearchBar;