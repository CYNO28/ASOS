const initialState={
    Data:[]
}



export const reducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case 'GET_DATA_SUCCESS':
            {
                return {
                    ...state,
                    Data:payload
                }
            }
    
          
   default:{
    return state;
   }
    }
}