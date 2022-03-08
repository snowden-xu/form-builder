// 第三方
import React from 'react';
import { Row, Col } from 'antd';
// import find from 'lodash/find';
// 自定义
import FormBuilderField from './FormBuilderField';
import './FromBuilder.less';

const componentMap = {};

const dispTypeMap = {
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
function normalizeFields(formDefines, config) {
  const fields = formDefines.map((item) => {
    const newItem = {
      label: item.i18nValue, // i18nValue
      key: item.name, // name
      component: dispTypeMap[item.dispType], // dispType
      componentType: dispTypeMap[item.dispType],
      required: Boolean(item.required), // required
      tooltip: item.hintMsg, // hintMsg
      options: normalizeOptions(item.dictionary?.dictionaryEntries), // dictionaryEntries
      disabled: Boolean(item.readOnly),
      // readOnly: true,
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

    // 判断该字段是否有自定义
    const currentFiled = config.customFields.find((customField) => customField.fieldName === item.name);
    if (currentFiled) {
      console.log(currentFiled, 'currentFiled');
      const _new = {
        ...newItem,
        ...currentFiled.customParams,
        componentProps: {
          ...componentProps,
          ...currentFiled.customParams.componentProps,
        },
      };
      console.log(_new, '_new');
      return _new;
    }

    return Object.assign(newItem, { componentProps });
  });
  return fields;
}

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
    const componentType = field.component;
    const component = getComponent(field.component);
    const item = Object.values(componentMap).find((item) => item.component === component && item.configConvertor);
    if (item) {
      const newField = item.configConvertor(field);
      if (!newField) {
        throw new Error(`configConvertor of '${String(field.component)}' must return a field`);
      }
      return { ...newField, componentType, component };
    }
    return { ...field, componentType, component };
  });
  return { ...config, fields };
}

// 表单创建入口
function FormBuilder(props) {
  const { form, config, formDefineType = 'tableColumn' } = props;
  console.log(props, 'props');

  // 根据表单定义类型应用不用类型解析器
  if (!config.fields) {
    switch (formDefineType) {
      case 'tableColumn':
        const fields = normalizeFields(config.formDefines, config);
        config.fields = fields || [];
        break;
      case 'simpleForm':
        break;
      default:
        break;
    }
  }
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
