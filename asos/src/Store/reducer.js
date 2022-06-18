const istate={
    products:[]
}
export const reducer=(state=istate,action)=>{
    switch(action.type){
        case 'SET_PRODUCTS':
            return {...state,products:action.payload};
        default:
            return state;
        }           
}