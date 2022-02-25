// 第三方
import React from 'react';
import { Form, Button } from 'antd';

// 自定义
// @ts-ignore
import FormBuilder from './components/FormBuilder';

const App = (props: any) => {
  const handleSubmit = () => {
    console.log('1');
    props.form.validateFields((err: any, values: any) => {
      console.log(values, 'values');
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const formConfig = {
    columns: 1,
    fields: [
      {
        key: 'singleLineText',
        label: '单行文本',
        component: 'SINGLE_LINE_TEXT',
      },
      {
        key: 'address',
        label: '多行文本',
        required: true,
        tooltip: 'This is the tooltip.',
        component: 'MULTI_LINE_TEXT',
      },
      {
        key: 'singleLineNumber',
        label: '数字输入框',
        component: 'SINGLE_LINE_NUMBER',
      },
      {
        key: 'phone',
        label: '下拉框(单选)',
        component: 'DROPDOWN',
        options: [
          { value: '1', label: 'apple' },
          { value: '2', label: 'orange' },
        ],
      },
      {
        key: 'phone1',
        label: '下拉框单选',
        component: 'SINGLE_SELECT',
        options: [
          { value: '1', label: 'apple1' },
          { value: '2', label: 'orange1' },
        ],
      },
      {
        key: 'phone2',
        label: '下拉框多选',
        component: 'MULTI_SELECT',
        options: [
          { value: '1', label: 'apple2' },
          { value: '2', label: 'orange2' },
        ],
        componentProps: {
          mode: 'multiple',
        },
      },
    ],
  };
  return (
    <div style={{ width: 500, margin: '0 auto' }}>
      <Form>
        <FormBuilder form={props.form} config={formConfig} initialValues={{}} />
      </Form>
      <Button onClick={handleSubmit}>submit</Button>
    </div>
  );
};

export default Form.create()(App);
