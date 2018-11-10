import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_ITEM} from './actionTypes.js'

const defaultState = {
    inputValue:'',
    list:[]
}

//reducer可以接受state，但是不能修改state  所以需要拷贝一份state
export default (state = defaultState,action) => {
    console.log(state,action);  //拿到当前要做的事情action内容
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state))  //深拷贝state
        newState.inputValue = action.value;
        return newState; //把数据返回给store了  store会自动接受这个state  组件中就能使用这个新数据
    }
    if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue);
        newState.inputValue = ''
        return newState;
    }
    if(action.type === DELETE_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState;
    }
    return state;
}