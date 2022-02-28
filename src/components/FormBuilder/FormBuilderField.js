// 第三方
import React from 'react';
import { has } from 'lodash';
import { Form, Input, Tooltip, Icon } from 'antd';
const FormItem = Form.Item;

// 自定义
const getValue = (obj, namePath) => {
  const arr = typeof namePath === 'string' ? namePath.split('.') : namePath;
  let current = obj;

  for (let i = 0; i < arr.length; i += 1) {
    if (has(current, arr[i])) {
      current = current[arr[i]];
    } else {
      return undefined;
    }
  }

  return current;
};

function FormBuilderField(props) {
  console.log(props, 'FormBuilderField');
  const { field, form, config } = props;

  const label = field.tooltip ? (
    <span>
      <Tooltip title={field.tooltip}>
        <Icon type="info-circle" style={{ marginRight: 5 }} />
      </Tooltip>
      {field.label}
    </span>
  ) : (
    field.label
  );

  let formItemLayout = {
    labelCol: { span: field.formItemLayout[0] },
    wrapperCol: { span: field.formItemLayout[1] },
  };

  const formItemProps = {
    key: field.key,
    ...(config.formItemLayout !== null ? formItemLayout : {}),
    label,
    // required: true
    // ...pick(field,['colon','extra','hasFeedback','help','htmlFor','validateStatus'])
  };

  let initialValue;
  const initialValues = config.initialValues || {};
  if (has(field, 'initialValue')) {
    initialValue = field.initialValue;
  } else {
    initialValue = getValue(initialValues, field.key);
  }

  const rules = [...(field.rules || [])];
  if (field.required) {
    rules.unshift({ required: true, message: field.message || `${field.label}为必填项` });
  }
  const fieldProps = {
    initialValue,
    rules,
    ...field.fieldProps,
  };

  console.log(fieldProps, 'fieldProps');

  let FieldComponent = field.component || Input;
  const element = (
    <FieldComponent style={{ width: '100%' }} {...field.componentProps}>
      {field.children || null}
    </FieldComponent>
  );

  return <FormItem {...formItemProps}>{form.getFieldDecorator(field.key, fieldProps)(element)}</FormItem>;
}

export default FormBuilderField;
