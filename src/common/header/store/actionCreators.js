import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'
axios.defaults.withCredentials = true;

export const searchFocus = () =>({
    type:constants.SEARCH_FOCUS
})

export const searchBlur = () =>({
    type:constants.SEARCH_BLUR
})

export const mouseEnter = () =>({
    type:constants.MOUSE_ENTER
})

export const mouseLeave = () =>({
    type:constants.MOUSE_LEAVE
})

export const changeList = (data) =>({
    type:constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: data.length
})

export const changePage = (page) =>({
    type:constants.CHANGE_PAGE,
    page,
})

export const getList = ()=>{
    return (dispatch)=>{
        axios.get('/api/hearderList.json').then((res)=>{
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch((error)=>{
            console.log(error);
        })
    }
}