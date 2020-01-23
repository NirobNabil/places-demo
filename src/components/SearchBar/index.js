import React from 'react';
import { Form, Icon, Input, Button, Select } from 'antd';

const { Option } = Select;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
  componentDidMount() {
    // To disable submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          <Input
            placeholder="Lattitude"
          />,
        </Form.Item>
        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          <Input
            placeholder="Longitude"
          />,
        </Form.Item>
        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          <Input
            placeholder="Range"
          />,
        </Form.Item>
        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
        <Select
          mode="multiple"
          style={{ minWidth: '30em', flexGrow: '1' }}
          placeholder="Please select"
          defaultValue={['restaurant']}
        >
          {['restaurants', 'coffee shop', 'park', 'theatre', 'shopping mall'].map( elem => <Option key={elem}> {elem} </Option> ) }
        </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);

export default WrappedHorizontalLoginForm;