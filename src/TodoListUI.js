import React,{Component} from 'react'
import {Button, Input, List} from "antd";

const TodoListUI = (props) => {
    return (
        <div style={{margin:'10px 20px'}}>
            <Input type="text"
                   value={props.inputValue}
                   style={{width:'400px',marginRight:'10px'}}
                   onChange = {props.handleInputChange}
            />
            <Button type="primary" onClick={props.handleAddList}>提交</Button>
            <List
                style={{width:'400px'}}
                bordered
                dataSource={props.list}
                renderItem={(item,index) =>
                    (<List.Item onClick={(index) => {props.handleItemDelete(index)}}>{item}</List.Item>)}
            />
        </div>
    )
}
export default TodoListUI
/*export default class TodoListUI extends Component{
    render(){
        return(
            <div style={{margin:'10px 20px'}}>
                <Input type="text"
                       value={this.props.inputValue}
                       style={{width:'400px',marginRight:'10px'}}
                       onChange = {this.props.handleInputChange}
                />
                <Button type="primary" onClick={this.props.handleAddList}>提交</Button>
                <List
                    style={{width:'400px'}}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item,index) =>
                        (<List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
                />
            </div>
        )
    }
}*/