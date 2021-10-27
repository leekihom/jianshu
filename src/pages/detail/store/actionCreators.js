import axios from 'axios'
import * as constants from './constants'
import {apiServe} from "../../../config";
axios.defaults.withCredentials = true;

const changeDetail = (title,content) =>({
    type: constants.CHANGE_DETAIL,
    title,
    content
})

export const getDetail = (id) =>{
    return (dispatch)=>{
        axios.get(`${apiServe}/api/article/getArticle?id=${id}`).then((res)=>{
            const {code,data,message} = res.data
            if(code === 0){
                const {title,content} = data
                dispatch(changeDetail(title,content))
            }
        })
    }
}