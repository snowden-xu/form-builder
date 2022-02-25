// 第三方
import React from 'react';
import { Input, InputNumber, Select } from 'antd';

// 自定义
import FormBuilder from './FormBuilder';

// 单行文本
FormBuilder.defineComponent('SINGLE_LINE_TEXT', Input);

// 多行文本
FormBuilder.defineComponent('MULTI_LINE_TEXT', Input.TextArea);

// 数字输入框
FormBuilder.defineComponent('SINGLE_LINE_NUMBER', InputNumber);

// 下拉框（单选）
FormBuilder.defineComponent('DROPDOWN', Select , (field)=>{
  if (field.options && !field.children) {
    return {
      ...field,
      children: field.options.map((opt) => (
        <Select.Option label={opt.label} value={opt.value} key={opt.value} disabled={opt.disabled}>
          {opt.children || opt.label}
        </Select.Option>
      )),
    }
  }
  return field
});

// 单选下拉框
FormBuilder.defineComponent('SINGLE_SELECT', Select, (field) => {
  if (field.options && !field.children) {
    return {
      ...field,
      children: field.options.map((opt) => (
        <Select.Option label={opt.label} value={opt.value} key={opt.value} disabled={opt.disabled}>
          {opt.children || opt.label}
        </Select.Option>
      )),
    }
  }
  return field
})

// 多选下拉框
FormBuilder.defineComponent('MULTI_SELECT',  Select, (field) => {
  if (field.options && !field.children) {
    return {
      ...field,
      children: field.options.map((opt) => (
        <Select.Option label={opt.label} value={opt.value} key={opt.value} disabled={opt.disabled}>
          {opt.children || opt.label}
        </Select.Option>
      )),
    }
  }
  return field
})
