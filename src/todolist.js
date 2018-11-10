import React,{Component} from 'react'
import 'antd/dist/antd.css'
import store from './store'
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_ITEM} from './store/actionTypes.js'
import TodoListUI from './TodoListUI'

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
            <TodoListUI
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleAddList={this.handleAddList}
                list={this.state.list}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }
}