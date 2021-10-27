import axios from 'axios'
import * as constants from './constants'
import { fromJS } from 'immutable'
import {apiServe} from "../../../config";
axios.defaults.withCredentials = true;


const changeHomeData = (result) =>({
            type:constants.CHANGE_HOME_DATA,
            topicList:result.topicList,
            articleList:result.articleList,
            recommedList:result.recommedList,
            writerList:result.writerList
})
const addArticleList = (list,nextPage) =>({
            type: constants.ADD_ARTICLE_LIST,
            list:fromJS(list),
            nextPage
})

export const getHomeInfo = (search='') =>{
    return (dispatch)=>{
        axios.get(`${apiServe}/api/article/getList?search=${search}`).then((res)=>{
            const result = res.data;
            const {code,data,Message} = result;
            //TODO data:{list:[],total:'数据总条数，可用于阅读更多判断',page:'当前分页',pageSize:'每页数据量'}
            if(code === 0){
                dispatch(changeHomeData({
                    topicList:[{
                        "id": 1,
                        "title": "社会热点",
                        "imgUrl": "https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg"
                    },{
                        "id": 2,
                        "title": "简书电影",
                        "imgUrl": "https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg"
                    },{
                        "id": 3,
                        "title": "旅行",
                        "imgUrl": "https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg"
                    }],
                    articleList:data.list,
                    writerList:[{
                        "id": 1,
                        "name":"茶点故事",
                        "info": "写了547.6k字 · 15k喜欢",
                        "writerImgUrl":"assets/388e471.jpeg"
                    },{
                        "id": 2,
                        "name":"卢璐说",
                        "info": "写了1955.1k字 · 33.9k喜欢",
                        "writerImgUrl":"assets/189d69dd3.jpg"
                    },{
                        "id": 3,
                        "name":"念远怀人",
                        "info": "写了702.8k字 · 14.5k喜欢",
                        "writerImgUrl":"assets/21cb.jpg"
                    },{
                        "id": 4,
                        "name":"闫泽华",
                        "info": "写了254.1k字 · 4.7k喜欢",
                        "writerImgUrl":"assets/dc99c361412c.jpg"
                    },{
                        "id": 5,
                        "name":"木清琳",
                        "info": "写了290.7k字 · 3.3k喜欢",
                        "writerImgUrl":"assets/f4370c.jpg"
                    }],
                    recommedList:[{
                        "id": 1,
                        "Url": "assets/banner1.png"
                    },{
                        "id": 2,
                        "Url": "assets/banner2.png"
                    },{
                        "id": 3,
                        "Url": "assets/banner3.png"
                    },{
                        "id": 4,
                        "Url": "assets/banner4.png"
                    }],
                    
                }));
            }

        }).catch((error)=>{
            console.log(error);
        })
    }
}

export const getMoreList = (page) =>{
    return (dispatch)=>{
        axios.get(`${apiServe}/api/article/getList?page=${page}`).then((res)=>{
            const result = res.data.data;
            dispatch(addArticleList(result,page+1));
        }).catch((error)=>{
            console.log(error);
        })
    }
}

export const toTop = (flag) =>({
    type:constants.TO_TOP,
    flag
})