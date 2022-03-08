// 第三方
import React, { forwardRef } from 'react';
import { has, pick, memoize } from 'lodash';
import { Form, Input, Tooltip, Icon } from 'antd';
const FormItem = Form.Item;
import moment from 'moment';

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

const getWrappedComponentWithForwardRef = memoize((Comp) =>
  forwardRef((props, ref) => {
    return (
      <span ref={ref}>
        <Comp {...props} />
      </span>
    );
  })
);

function FormBuilderField(props) {
  // console.log(props, 'FormBuilderField');
  const { field, form, config } = props;

  const label = field.tooltip ? (
    <span>
      <Tooltip title={field.tooltip}>
        <Icon type="info-circle" style={{ marginRight: 5 }} />
      </Tooltip>
      <span title={field.label}>{field.label}</span>
    </span>
  ) : (
    field.label
  );

  let formItemLayout = field.formItemLayout || (field.label ? getValue(config, 'formItemLayout') || [8, 16] : null);
  if (Array.isArray(formItemLayout) && formItemLayout.length >= 2) {
    formItemLayout = {
      labelCol: { span: formItemLayout[0] },
      wrapperCol: { span: formItemLayout[1] },
    };
  }

  const isFieldViewMode = config.viewMode || field.readOnly;

  const formItemProps = {
    key: field.key,
    ...(config.formItemLayout !== null ? formItemLayout : {}),
    label,
    ...pick(field, ['extra']),
    // required: true
    // ...pick(field,['colon','extra','hasFeedback','help','htmlFor','validateStatus'])
  };

  if (field.colSpan && formItemProps.labelCol && !field.formItemLayout) {
    const labelCol = Math.round(formItemProps.labelCol.span / field.colSpan);
    Object.assign(formItemProps, {
      labelCol: { span: labelCol },
      wrapperCol: { span: 24 - labelCol },
    });
  }

  let initialValue;
  const initialValues = config.initialValues || {};
  if (has(field, 'initialValue')) {
    initialValue = field.initialValue;
  } else {
    initialValue = getValue(initialValues, field.key);
  }

  if (initialValue && field.componentType === 'date-picker') {
    initialValue = moment(initialValue);
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

  // 预览模式
  if (isFieldViewMode) {
    let viewEle = null;
    const formValues = form ? form.getFieldsValue() : {};
    let viewValue = has(formValues, field.key || field.name.join('.'))
      ? getValue(formValues, formItemProps.name || field.key)
      : initialValue;

    switch (field.componentType) {
      // 下拉框类型
      case 'select': {
        const found = field.options.find((opt) => opt.value === viewValue);
        if (found) {
          viewValue = found.label;
        }
        break;
      }
      // 日期类型
      case 'date-picker': {
        viewValue = (viewValue && moment(viewValue).format(field.componentProps.format)) || '';
        break;
      }
      default: {
        break;
      }
    }
    if (!viewEle) {
      viewEle = <span className="antd-form-builder-string-content">{String(viewValue) || ''}</span>;
    }
    if (form && field.readOnly) {
      const ele = <span className="antd-form-builder-read-only-content">{viewEle}</span>;
      return <FormItem {...formItemProps}>{form.getFieldDecorator(field.id || field.key, fieldProps)(ele)}</FormItem>;
    }
    return <FormItem {...formItemProps}>{viewEle}</FormItem>;
    // let viewEle = null;
    // const formValues = form ? form.getFieldsValue() : {};
    // let viewValue = has(formValues, field.key) ? getValue(formValues, field.key) : initialValue;
    // if (!viewEle) {
    //   viewEle = <span>{String(viewValue) || ''}</span>;
    // }
    // return <FormItem {...formItemProps}>{viewEle}</FormItem>;
  }

  // console.log(fieldProps, 'fieldProps');
  const cp = field.componentProps || {};
  const componentProps = {
    // ...pick(field, ['placeholder', 'type', 'className', 'class', 'onChange']),
    disabled: field.disabled || config.disabled,
    ...cp,
  };
  let FieldComponent = field.component || Input;

  if (field.forwardRef) {
    FieldComponent = getWrappedComponentWithForwardRef(FieldComponent);
  }

  const element = (
    <FieldComponent style={{ width: '100%' }} {...componentProps}>
      {field.children || null}
    </FieldComponent>
  );

  // console.log(FieldComponent, 'FieldComponent');

  return <FormItem {...formItemProps}>{form.getFieldDecorator(field.key, fieldProps)(element)}</FormItem>;
}

export default FormBuilderField;
