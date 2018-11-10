import React,{Component} from 'react'
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'
import store from './store'
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_ITEM} from './store/actionTypes.js'

export default class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState()
        console.log(store.getState())

        store.subscribe(this.handleStoreChange) //订阅store里面的内容
    }

    handleInputChange = (e) => {
        const action = {
            type:CHANGE_INPUT_VALUE,
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
            type: ADD_TODO_ITEM
        }
        store.dispatch(action)
    }

    handleItemDelete = (index) => {
        const action = {
            type:DELETE_ITEM,
            index
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
                    renderItem={(item,index) => (<List.Item onClick={this.handleItemDelete.bind(index)}>{item}</List.Item>)}
                />
            </div>
        )
    }
}