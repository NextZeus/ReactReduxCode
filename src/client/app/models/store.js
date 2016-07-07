/**
 * getState 获取state
 * dispatch (action) 更新state
 * subscribe( listener ) 注册监听器
 * 再次强调一下 Redux 应用只有一个单一的 store。当需要拆分数据处理逻辑时
 * 你应该使用 reducer 组合 而不是创建多个 store
 */

import { createStore } from 'redux';
import todoApp from './reducers.js';

let store = createStore(todoApp);

/**
 *createStore() 的第二个参数是可选的, 用于设置 state 初始状态。
 * 这对开发同构应用时非常有用，服务器端 redux 应用的 state 结构可以与客户端保持一致,
 * 那么客户端可以将从网络接收到的服务端 state 直接用于本地数据初始化。
 */

import {addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions.js';

console.log(store.getState());

let subscribe = store.subscribe( () => {
    console.log(store.getState());
});

store.dispatch(addTodo('learn about actions'));
store.dispatch(addTodo('learn about reducers'));
store.dispatch(addTodo('learn about store'));

store.dispatch(completeTodo(0));
store.dispatch(completeTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

store.unsubscribe();