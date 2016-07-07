/**
 * Created by lixiaodong on 16/6/29.
 */
import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
const { SHOW_ALL } = VisibilityFilters


const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
};

function todos(state = [],action={}){
    switch (action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        case COMPLETE_TODO:
            return [
              ...state.slice(0, action.index),
              Object.assign({}, state[action.index], {
                completed: true
              }),
              ...state.slice(action.index + 1)
            ]
        default:
            return state
    }
}

function visibilityFilter(state = SHOW_ALL, action={}){
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
}

//function todoApp(state = initialState, action) {
//    switch (action.type) {
//        case SET_VISIBILITY_FILTER:
//            return Object.assign({}, state, {
//                visibilityFilter: action.filter
//            });
//        case ADD_TODO:
//        case TOGGLE_TODO:
//            return Object.assign({},state,{
//                todos : todos(state.todos, action)
//            });
//        default:
//            return state;
//    }
//}
//export default function todoApp(state = {}, action) {
//    return {
//        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//        todos: todos(state.todos, action)
//    }
//}
//等价于下面
const todoApp = combineReducers(visibilityFilter, todos);
export default todoApp;
