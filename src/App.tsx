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
        required: true,
        component: 'input',
        formItemLayout: [8, 16],
      },
      {
        key: 'textAreaText',
        label: '多行文本',
        required: true,
        tooltip: 'This is the tooltip.',
        component: 'textArea',
        formItemLayout: [8, 16],
        initialValue: '1',
      },
      {
        key: 'singleLineNumber',
        label: '数字输入框',
        component: 'number',
        componentProps: {
          style: { width: '100%' },
        },
        formItemLayout: [8, 16],
      },
      {
        key: 'phone',
        label: '下拉框(单选)',
        component: 'select',
        options: [
          { value: '1', label: 'apple' },
          { value: '2', label: 'orange' },
        ],
        formItemLayout: [8, 16],
      },
      {
        key: 'phone1',
        label: '下拉框单选',
        component: 'select',
        options: [
          { value: '1', label: 'apple1' },
          { value: '2', label: 'orange1' },
        ],
        formItemLayout: [8, 16],
      },
      {
        key: 'phone2',
        label: '下拉框多选',
        component: 'select',
        options: [
          { value: '1', label: 'apple2' },
          { value: '2', label: 'orange2' },
        ],
        componentProps: {
          mode: 'multiple',
        },
        formItemLayout: [8, 16],
      },
      {
        key: 'phone3',
        label: '日期',
        component: 'date-picker',
        required: true,
        componentProps: {
          format: 'YYYY-MM-DD',
        },
        formItemLayout: [8, 16],
      },
      {
        key: 'phone4',
        label: '年月日时分',
        component: 'date-picker',
        required: true,
        componentProps: {
          format: 'YYYY-MM-DD HH:mm',
        },
        formItemLayout: [8, 16],
      },
      {
        key: 'phone5',
        label: '年月日时',
        component: 'date-picker',
        required: true,
        componentProps: {
          format: 'YYYY-MM-DD HH',
          style: { width: '100%' },
        },
        formItemLayout: [8, 16],
      },
    ],
  };

  const initialValues = {
    singleLineText: '老子是默认值',
  };

  // const arr = [
  //   {
  //     name: 'sponsor',
  //     tableId: '111',
  //     dispType: 'SINGLE_SELECT',
  //     hintMsg: 'toolTip',
  //     required: 0,
  //     maxLength: null,
  //     readOnly: 1,
  //     dictionaryEntries: [
  //       { value: '1', label: 'apple2' },
  //       { value: '2', label: 'orange2' },
  //     ],
  //     valueType: 'TEXT',
  //     i18nValue: '申办方',
  //   },
  // ];
  //
  // const componentMap: any = {
  //   SINGLE_LINE_TEXT: 'input',
  //   SINGLE_SELECT: 'select',
  //   MULTI_SELECT: 'select',
  // };
  //
  // const getComponentProps = (dispType) => {
  //   if (dispType === 'MULTI_SELECT') {
  //     return { mode: 'multiple' };
  //   }
  //   return null;
  // };
  //
  // const newArr = arr.map((item) => {
  //   return {
  //     label: item.i18nValue, // i18nValue
  //     key: item.name, // name
  //     component: componentMap[item.dispType], // dispType
  //     required: Boolean(item.required), // required
  //     tooltip: item.hintMsg, // hintMsg
  //     options: item.dictionaryEntries, // dictionaryEntries
  //     componentProps: {
  //       ...getComponentProps(item.dispType),
  //     }, // dispType
  //   };
  // });
  //
  // console.log(newArr, 'newArr');

  return (
    <div style={{ width: 500, margin: '0 auto' }}>
      <Form>
        <FormBuilder form={props.form} config={formConfig} initialValues={initialValues} />
      </Form>
      <Button onClick={handleSubmit}>submit</Button>
    </div>
  );
};

export default Form.create()(App);
