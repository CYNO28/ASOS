import axios from 'axios';

export const getData=(path)=>(dispatch)=>{

    axios.get(`http://localhost:8080/${path}`).then(res=>{
console.log(res.data)
    dispatch({
        type:'GET_DATA_SUCCESS',
        payload:res.data
    })
})



}





