import React from 'react';
import { Form, Input } from 'antd'
const FormItem = Form.Item

function FormBuilderField(props){
  console.log(props,'FormBuilderField');
  const {field, form} = props;
  let FieldComponent = field.component || Input;
  const element = <FieldComponent {...field.componentProps}>
    {field.children || null}
  </FieldComponent>



  return <FormItem>{form.getFieldDecorator(field.id || field.key)(element)}</FormItem>
}

export default FormBuilderField
