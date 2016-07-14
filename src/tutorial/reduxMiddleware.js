/**
 * Created by lixiaodong on 16/7/14.
 */
import { applyMiddlerware, createStore } from 'redux';

const reducer = function (state, action) {
    if(action.type === 'INC'){
        return state + 1;
    } else if(action.type === 'DEC'){
        return state - 1;
    } else if(action.type === 'E'){
        throw new Error('Error!!!!');
    }
    return state;
}

const logger = (store)=>(next)=>(action)=>{
    console.log('action fired',action);
    next(action);
}

const error = (store)=>(next)=>(action)=>{
    try{
        next(action);
    } catch(e){
        console.log('AAAAAAA');
    }
}

const middleware = applyMiddlerware(logger,error);

const store = createStore( reducer, 0 ,middleware);//0 is initial state

store.subscribe(()=>{
    console.log('store changed',store.getState());
});

store.dispatch({type : 'INC', payload:1});
store.dispatch({type : 'INC', payload:100});
store.dispatch({type : 'INC', payload:22});
store.dispatch({type : 'E', payload:10});