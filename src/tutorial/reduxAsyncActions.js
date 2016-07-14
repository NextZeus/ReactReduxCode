/**
 * Created by lixiaodong on 16/7/14.
 */
import { applyMiddlerware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import promise from 'redux-promise-middleware';

const initialState = {
    fetching:false,
    fetched:false,
    users:[],
    error:null
}

const reducer = function (state=initialState, action) {
    switch (action.type){
        case 'FETCH_USERS_START':
            return {...state, fetching:true};
            break;
        case 'RECEIVER_USERS':
            return {...state, fetching:false,fetched:true,data:action.payload};
            break;
        case 'FETCH_USERS_ERROR':
            return {...state, fetching:false,fetched:false,error : action.payload};
            break;
    }

    return state;
};


const middleware = applyMiddlerware(promise(), thunk,logger());

const store = createStore( reducer ,middleware);//0 is initial state

//store.dispatch((dispatch)=>{
//    dispatch({type : 'FETCH_USER_START'});
//
//    axios.get('http://rest.learncode.academy/api/wstern/users')
//    .then((response)=>{
//        dispatch({type : 'RECEIVER_USERS', payload : response.data});
//    })
//    .catch((err)=>{
//            dispatch({type : 'FETCH_USERS_ERROR', payload:err});
//    });
//});

//promise
store.dispatch({
    type : 'FETCH_USERS',
    payload:axios.get('http://rest.learncode.academy/api/wstern/users')
});

//promise reducer 三个状态 PENDING REJECTED FULFILLED
const reducer = function (state=initialState, action) {
    switch (action.type){
        case 'FETCH_USERS_PENDING':
            return {...state, fetching:true};
            break;
        case 'FETCH_USERS_FULFILLED':
            return {...state, fetching:false,fetched:true,data:action.payload};
            break;
        case 'FETCH_USERS_REJECTED':
            return {...state, fetching:false,fetched:false,error : action.payload};
            break;
    }

    return state;
};


store.dispatch({type : 'FOO', payload:1});
