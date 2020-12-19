import React from 'react';
import { Form, Input, Button } from 'antd';

const { Item } = Form;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        string: '${label} is not valid title!',
        desc: '${label} is not a valid description!',
    },
    string: {
        range: '${label} must be between ${min} and ${max}',
    },
    title: {
        range: '${label} must be between ${min} and ${max}',
    },
    pattern: {
        mismatch: "'${name}' should start with capital letter!",
    },   
};

var desc;

export const ToDoForm = (props) => {
    const {onSubmit} = props;
    const finish = (values) => {
        onSubmit(values.title, values.desc)
        
    }

    return (
        <Form {...layout} className={'todo-form'} onFinish={finish} validateMessages={validateMessages} >
            <Item name={'title'} label="Title" rules={[{ type: 'string', min: 3, max: 30, required: true, pattern: /^[A-Z]/}]}> 
                <Input />         
            </Item>
            <Item name={'desc'} label="Description" rules={[{type: 'string', min: 3, max: 200}]}>
                <Input.TextArea />
            </Item>
            <Item wrapperCol={{ ...layout.wrapperCol, offset: 8}}>
                <Button type='primary' htmlType={'submit'}>Add</Button>
            </Item>
        </Form>
    )
}