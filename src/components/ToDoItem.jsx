import React from 'react';
import { Checkbox, Button, Typography, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export const ToDoitem = (props) => {
    const { item, onCheck, onRemove } = props;
    const check = () => {
        onCheck(item.id);
    }

    const remove = () => {
        onRemove(item.id)
    }
    
    const { Text, Link } = Typography;

    const getDate = () => {
        var today = new Date(),
        date = today.getUTCDay() +'.'+ today.getUTCMonth() +'.'+today.getUTCFullYear() + ' - ' + today.getHours() +':'+ today.getMinutes();
        return date;
    }

    return (
        <div>
        <li className={'todo-item'}>
            <Checkbox checked={item.checked} onChange={check} style = {item.checked ? {'color' : 'red', 'text-decoration' : 'line-through'} : {}} >{item.title}</Checkbox>
            <Button danger onClick={remove} icon={<DeleteOutlined />} size='medium'></Button>
        </li>
        <p className="todo-item-desc" style = { item.checked ? {'color':'red', 'text-decoration':'line-through'}: {}}>Description: {item.desc}</p>
        <p style = { item.checked ? {'color':'red', 'text-decoration':'line-through', 'fontStyle':'revert' }:{'fontStyle':'revert', 'color' : 'gray'}}>Time of creation: {getDate()}</p>
        </div>
    )
}