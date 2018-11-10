import React,{Component} from 'react'
import 'antd/dist/antd.css'
import store from './store'
import {getInputChangeAction,getItemAction,getdeleteItemAction,initListAction } from './store/actionCreators'
//import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_ITEM} from './store/actionTypes.js'
import TodoListUI from './TodoListUI'
import axios from 'axios'

export default class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState()
        console.log(store.getState())

        store.subscribe(this.handleStoreChange) //订阅store里面的内容
    }

    handleInputChange = (e) => {
        // const action = {
        //     type:CHANGE_INPUT_VALUE,
        //     value:e.target.value
        // }
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action);
    }

    handleStoreChange = () => {
        console.log('store change')
        this.setState(store.getState())
    }

    handleAddList = () => {
        // const action = {
        //     type: ADD_TODO_ITEM
        // }
        const action = getItemAction()
        store.dispatch(action)
    }

    handleItemDelete = (index) => {
        // const action = {
        //     type:DELETE_ITEM,
        //     index
        // }
        const action = getdeleteItemAction(index)
        store.dispatch(action)
    }

    componentDidMount(){
        axios.get('/list.json').then((res) => {
            console.log(res)
            const data = res.data
            const action = initListAction(data)
            console.log(action)
            store.dispatch(action)
        })
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