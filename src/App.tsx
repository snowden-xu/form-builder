// 第三方
import React, { useState } from 'react';
import { Form, Button, Input, Row, Col } from 'antd';

// 自定义
// @ts-ignore
import FormBuilder from './components/FormBuilder';
import sourceData from './souceData';

const DemoComponent = (props) => {
  console.log(props, 'props');

  const handleClick = () => {
    props['data-__meta'].reload();
  };

  return (
    <Row gutter={10}>
      <Col span={20}>
        <Input {...props} />
      </Col>
      <Col span={2}>
        <Button onClick={handleClick} disabled={Boolean(props.disabled)}>
          +
        </Button>
      </Col>
    </Row>
  );
};

const componentMap: any = {
  SINGLE_LINE_TEXT: 'input',
  SINGLE_SELECT: 'select',
  DATE: 'date-picker',
  SINGLE_LINE_NUMBER: 'number',
  MULTI_SELECT: 'select',
  MULTI_LINE_TEXT: 'textArea',
};

function normalizeOptions(options) {
  if (!options) {
    return [];
  }
  return options.map((item) => {
    return {
      value: item.id,
      label: item.i18nValue,
    };
  });
}

// 表转化表单配置
function normalizeFields(formDefines) {
  const fields = formDefines.map((item) => {
    const newItem = {
      label: item.i18nValue, // i18nValue
      key: item.name, // name
      component: componentMap[item.dispType], // dispType
      required: Boolean(item.required), // required
      tooltip: item.hintMsg, // hintMsg
      options: normalizeOptions(item.dictionary?.dictionaryEntries), // dictionaryEntries
      disabled: Boolean(item.readOnly),
      // componentProps: {
      //   ...componentMap[item.dispType],
      // }, // dispType
    };

    let componentProps = {};

    switch (item.dispType) {
      case 'SINGLE_LINE_TEXT':
        componentProps = {
          maxLength: 250,
        };
        break;
      case 'SINGLE_SELECT':
      case 'MULTI_SELECT':
        componentProps = {
          placeholder: '请选择',
          allowClear: true,
          showSearch: true,
          optionFilterProp: 'children',
        };
        break;
      case 'MULTI_LINE_TEXT':
        componentProps = {
          maxLength: 20000,
          autoSize: { minRows: 2, maxRows: 5 },
        };
        break;
      case 'DATE':
        componentProps = {
          format: item.valueFormat,
          showTime: Boolean(item.valueFormat !== 'YYYY-MM-DD'),
          style: { width: '100%' },
          placeholder: '请选择日期',
        };
        break;
      default:
        break;
    }
    return Object.assign(newItem, { componentProps });
  });
  return fields;
}

const CreateForm = Form.create()(
  React.forwardRef((props, ref) => {
    console.log(props, 'props');
    React.useImperativeHandle(ref, () => ({ form: props.form }));
    const handleSubmit = () => {
      props.form.validateFields((err: any, values: any) => {
        console.log(values, 'values');
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
    return (
      <>
        <Form>
          <FormBuilder form={props.form} config={props.config} viewMode={false} />
        </Form>
        <Button onClick={handleSubmit}>submit</Button>
      </>
    );
  })
);

const App = (props: any) => {
  const formRef = React.createRef();
  const getFormConfig = (params) => {
    const { columnList } = params;
    const fields = normalizeFields(columnList);
    console.log(fields, 'fields');

    const [persons, setPersons] = useState([]);
    // 部分字段自定义逻辑
    fields.forEach((field) => {
      console.log(field, 'field');
      switch (field.key) {
        case 'sponsor': {
          const customField = {
            initialValue: '浙江省抗癌协会',
          };
          Object.assign(field, customField);
          break;
        }
        case 'siteId': {
          const customField = {
            options: [{ value: '2c94bba87aa424e1017af0ffa44b54e2', label: '001 株洲第四人民医院' }],
            componentProps: {
              ...field.componentProps,
              onChange: (v) => {
                console.log(v, 'v');
                console.log(formRef.current.form.getFieldValue('sponsor'), "formRef.current.form.getField('sponsor')");
                formRef.current.form.setFieldsValue({ principalInvestigator: v });
                setPersons([{ value: '1', label: 'zc' }]);
              },
            },
          };
          Object.assign(field, customField);
          break;
        }
        case 'inspectUser':
          const customField = {
            options: persons,
          };
          Object.assign(field, customField);
          break;
        default:
          break;
      }
    });

    const formConfig = {
      columns: 1,
      gutter: 10,
      formItemLayout: [8, 16],
      disabled: false,
      fields,
      // fields: [
      //   {
      //     key: 'singleLineNumber1',
      //     label: '数字输入框数字输入框数字输入框数字输入框数字输入框数字输入框数字输入框',
      //     component: 'number',
      //     componentProps: {
      //       style: { width: '100%' },
      //     },
      //     colSpan: 1,
      //   },
      //   {
      //     key: 'singleLineText',
      //     label: '单行文本单行文本单行文本单行文本单行文本单行文本单行文本',
      //     required: true,
      //     forwardRef: true,
      //     component: DemoComponent,
      //     fieldProps: {
      //       siteId: '0702',
      //       reload: () => {
      //         console.log('reload');
      //       },
      //     },
      //
      //     // clear: 'right',
      //
      //     // formItemLayout: [8, 14],
      //     // componentProps: {
      //     //   maxlength: 150,
      //     // },
      //     // tooltip: <div>{111}</div>,
      //     // // readOnly: true,
      //     // // disabled: true,
      //     // message: ' 22',
      //     // extra: '我是第一个多余的付款单据看风景打卡练腹肌打开附件看到附件打开发',
      //   },
      //   {
      //     key: 'textAreaText',
      //     label: '多行文本多行文本多行文本多行文本多行文本多行文本多行文本',
      //     required: true,
      //     tooltip: 'This is the tooltip. This is the tooltip. ',
      //     component: 'textArea',
      //     // formItemLayout: [8, 16],
      //     initialValue: '地方大师傅地方大师傅地方大师傅地方大师傅地方大师傅',
      //     componentProps: {
      //       maxLength: 20,
      //       autoSize: { minRows: 2, maxRows: 5 },
      //     },
      //   },
      //   {
      //     key: 'textAreaText1',
      //     label: '多行文本多行',
      //     required: true,
      //     tooltip: 'This is the tooltip. This is the tooltip. ',
      //     component: 'textArea',
      //   },
      //   {
      //     key: 'singleLineNumber',
      //     label: '数字输入框',
      //     component: 'number',
      //     // componentProps: {
      //     //   style: { width: '100%' },
      //     // },
      //     // formItemLayout: [8, 16],
      //   },
      //   {
      //     key: 'phone',
      //     label: '下拉框(单选)',
      //     component: 'select',
      //     options: [
      //       { value: '1', label: 'apple' },
      //       { value: '2', label: 'orange' },
      //     ],
      //     // formItemLayout: [8, 16],
      //     componentProps: {
      //       placeholder: '请选择',
      //       allowClear: true,
      //       showSearch: true,
      //       optionFilterProp: 'children',
      //     },
      //   },
      //   {
      //     key: 'phone1',
      //     label: '下拉框单选',
      //     component: 'select',
      //     options: [
      //       { value: '1', label: 'apple1' },
      //       { value: '2', label: 'orange1' },
      //     ],
      //     // children: [
      //     //   { value: '1', label: 'apple1111' },
      //     //   { value: '2', label: 'orange111' },
      //     // ].map((key) => <Option key={key.value}>{key.label}</Option>),
      //     // formItemLayout: [8, 16],
      //     componentProps: {
      //       placeholder: '请选择',
      //       allowClear: true,
      //       showSearch: true,
      //       optionFilterProp: 'children',
      //     },
      //   },
      //   {
      //     key: 'phone2',
      //     label: '下拉框多选',
      //     component: 'select',
      //     options: [
      //       { value: '1', label: 'apple2' },
      //       { value: '2', label: 'orange2' },
      //     ],
      //     componentProps: {
      //       mode: 'multiple',
      //       placeholder: '请选择',
      //       allowClear: true,
      //       showSearch: true,
      //       optionFilterProp: 'children',
      //     },
      //     // formItemLayout: [8, 16],
      //   },
      //   {
      //     key: 'phone3',
      //     label: '日期',
      //     component: 'date-picker',
      //     required: true,
      //     componentProps: {
      //       format: 'YYYY-MM-DD',
      //       placeholder: '请选择日期',
      //     },
      //     // formItemLayout: [8, 16],
      //   },
      //   {
      //     key: 'phone4',
      //     label: '年月日时分',
      //     component: 'date-picker',
      //     required: true,
      //     componentProps: {
      //       format: 'YYYY-MM-DD HH:mm',
      //       placeholder: '请选择日期',
      //     },
      //     // formItemLayout: [8, 16],
      //   },
      //   {
      //     key: 'phone5',
      //     label: '年月日时',
      //     component: 'date-picker',
      //     required: true,
      //     componentProps: {
      //       format: 'YYYY-MM-DD HH',
      //       style: { width: '100%' },
      //       placeholder: '请选择日期',
      //     },
      //     // formItemLayout: [8, 16],
      //   },
      // ],
      initialValues: {
        sponsor: '浙江省抗癌协会',
        // singleLineText: '老子是默认值',
        // phone1: '1',
        // phone2: ['1', '2'],
      },
    };
    return formConfig;
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
    <div style={{ width: 600, margin: '0 auto' }}>
      <CreateForm wrappedComponentRef={formRef} config={getFormConfig(sourceData.data)} viewMode={false} />
      {/*<Form>*/}
      {/*  <FormBuilder form={props.form} config={formConfig} viewMode={false} />*/}
      {/*</Form>*/}
      {/*<Button onClick={handleSubmit}>submit</Button>*/}
    </div>
  );
};

export default App;
