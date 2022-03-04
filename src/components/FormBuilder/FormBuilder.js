// 第三方
import React from 'react';
import { Row, Col } from 'antd';
// import find from 'lodash/find';
// 自定义
import FormBuilderField from './FormBuilderField';
import './FromBuilder.less';

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
  return <FormBuilderCore {...props} form={form || null} config={config || []} />;
}

// 表单创建核心方法
function FormBuilderCore(props) {
  const { config, viewMode, form = null } = props;
  if (!config) return null;

  // 标准化配置
  const newConfig = normalizeConfig(config);
  newConfig.viewMode = viewMode;
  console.log(newConfig, 'newConfig');

  const { fields, columns = 1, gutter = 10 } = newConfig;
  console.log(componentMap, 'componentMap');
  const elements = fields.map((field) => (
    <FormBuilderField key={field.key} field={field} config={newConfig} form={form} />
  ));
  // 单列
  if (columns === 1) {
    return elements;
  }
  // 多列
  const rows = [];
  const spanUnit = 24 / columns;
  for (let i = 0; i < elements.length; ) {
    const cols = [];
    for (
      let j = 0;
      (j < columns || j === 0) && // total col span is less than columns
      i < elements.length && // element exist
      (!['left', 'both'].includes(fields[i].clear) || j === 0); // field doesn't need to start a new row

    ) {
      const fieldSpan = fields[i].colSpan || 1;
      cols.push(
        <Col key={j} span={Math.min(24, spanUnit * fieldSpan)}>
          {elements[i]}
        </Col>
      );
      j += fieldSpan;
      if (['both', 'right'].includes(fields[i].clear)) {
        i += 1;
        break;
      }
      i += 1;
    }
    rows.push(
      <Row key={i} gutter={gutter}>
        {cols}
      </Row>
    );
  }
  return rows;
}

FormBuilder.defineComponent = (name, component, configConvertor = null) => {
  if (componentMap[name]) throw new Error(`component "${name}" already defined.`);
  componentMap[name] = { component, configConvertor };
};

export default FormBuilder;
