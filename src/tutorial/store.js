/**
 * Created by lixiaodong on 16/7/14.
 */
import { createStore } from 'redux';

const reducer = function (state, action) {
    if(action.type === 'INC'){
        return state + 1;
    } else if(action.type === 'DEC'){
        return state - 1;
    }
    return state;
}

const store = createStore( reducer, 0 );//0 is initial state

store.subscribe(()=>{
    console.log('store changed',store.getState());
});

store.dispatch({type : 'INC', payload:1});
store.dispatch({type : 'INC', payload:100});
store.dispatch({type : 'INC', payload:22});
store.dispatch({type : 'DEC', payload:10});