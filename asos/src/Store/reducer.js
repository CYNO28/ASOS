import {GET_DATA_SUCCESS,GET_DATA_LOADING,GET_DATA_ERROR} from './action.type';
const istate={
    products:{}
    ,
    loading:false,
}
export const reducer=(state=istate,action)=>{
    switch(action.type){
        case GET_DATA_SUCCESS:
            return {...state,products:action.payload};
        case GET_DATA_LOADING:
            return {...state,loading:true};
        case GET_DATA_ERROR:
            return {...state,loading:false};
        default:
            return state;
        }           
}