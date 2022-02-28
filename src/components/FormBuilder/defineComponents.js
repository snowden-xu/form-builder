// 第三方
import React from 'react';
import { Input, InputNumber, Select, DatePicker } from 'antd';

// 自定义
import FormBuilder from './FormBuilder';

// 单行文本
FormBuilder.defineComponent('input', Input);

// 多行文本
FormBuilder.defineComponent('textArea', Input.TextArea);

// 数字输入框
FormBuilder.defineComponent('number', InputNumber);

// 下拉框
FormBuilder.defineComponent('select', Select, (field) => {
  if (field.options && !field.children) {
    return {
      ...field,
      children: field.options.map((opt) => (
        <Select.Option label={opt.label} value={opt.value} key={opt.value} disabled={opt.disabled}>
          {opt.children || opt.label}
        </Select.Option>
      )),
    };
  }
  return field;
});

// 日期
FormBuilder.defineComponent('date-picker', DatePicker)
