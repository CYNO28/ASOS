import axios from 'axios';

export const getData=(path)=>(dispatch)=>{
axios.get(`http://localhost:8080/${path}`).then(res=>{
    dispatch({
        type:'GET_DATA',
        payload:res.data
    })
})



}





