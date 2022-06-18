const initialState={
    products:{}
}



export const reducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case 'GET_DATA':
            {
                return {
                    ...state,
                    products:payload
                }
            }
        case 'SET_DATA':{
            return {
                ...state,
                
            }
        }    
   default:{
    return state;
   }
    }
}