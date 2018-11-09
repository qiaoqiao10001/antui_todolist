import React,{Component} from 'react'
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'
import store from './store'

export default class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState()
        console.log(store.getState())

        store.subscribe(this.handleStoreChange) //订阅store里面的内容
    }

    handleInputChange = (e) => {
        const action = {
            type:'change_input_value',
            value:e.target.value
        }
        store.dispatch(action);
    }

    handleStoreChange = () => {
        console.log('store change')
        this.setState(store.getState())
    }

    handleAddList = () => {
        const action = {
            type: 'add_todo_item'
        }
        store.dispatch(action)
    }

    render(){
        return(
            <div style={{margin:'10px 20px'}}>
                <Input type="text"
                       value={this.state.inputValue}
                       style={{width:'400px',marginRight:'10px'}}
                       onChange = {this.handleInputChange}
                />
                <Button type="primary" onClick={this.handleAddList}>提交</Button>
                <List
                    style={{width:'400px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }
}