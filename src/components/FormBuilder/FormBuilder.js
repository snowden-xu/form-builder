// 第三方
import React from 'react';
// import { Button } from 'antd';
import find from 'lodash/find';
// 自定义
import FormBuilderField from './FormBuilderField';

const componentMap = {};

function getComponent(component) {
  if (!component) return null;
  if (typeof component === 'string') {
    if (!componentMap[component] || !componentMap[component].component) {
      throw new Error(`定义组件中未找到改${component}，请去defineComponents文件中定义`);
    }
    return componentMap[component].component;
  }
  return component;
}

// 标准化配置
function normalizeConfig(config) {
  let fields = config.fields.map((field) => {
    const component = getComponent(field.component);

    const item = Object.values(componentMap).find((item) => item.component === component && item.configConvertor);
    if (item) {
      const newField = item.configConvertor(field);
      if (!newField) {
        throw new Error(`configConvertor of '${String(field.component)}' must return a field`);
      }
      return { ...newField, component };
    }
    return { ...field, component };
  });
  return { ...config, fields };
}

// 表单创建入口
function FormBuilder(props) {
  const { form, config } = props;
  // 表单创建核心
  return <FormBuilderCore {...props} form={form ? form : null} config={config} />;
}

// 表单创建核心方法
function FormBuilderCore(props) {
  const { config, viewMode, initialValues, disabled = false, form = null } = props;
  if (!config) return null;

  // 标准化配置
  const newConfig = normalizeConfig(config);
  newConfig.initialValues = initialValues;

  const { fields, columns = 1 } = newConfig;
  console.log(componentMap, 'componentMap');
  const elements = fields.map((field) => (
    <FormBuilderField key={field.key} field={field} disabled={disabled} config={newConfig} form={form} />
  ));
  if (columns === 1) {
    return elements;
  }
}

FormBuilder.defineComponent = (name, component, configConvertor = null) => {
  if (componentMap[name]) throw new Error(`component "${name}" already defined.`);
  componentMap[name] = { component, configConvertor };
};

export default FormBuilder;
