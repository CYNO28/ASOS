const initialState={
    data:[]
}



export const reducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case 'GET_DATA':
            {
                return {
                    ...state,
                    data:payload
                }
            }
   default:{
    return state;
   }
    }
}