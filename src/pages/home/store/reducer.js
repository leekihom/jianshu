import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommedList:[],
    writerList:[],
	articlePage: 2,
	showScroll: false,
});

const changeHomeData = (state, action) => {
	return  state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommedList: fromJS(action.recommedList),
        writerList: fromJS(action.writerList) 
    })
};

const addArticleList = (state, action) => {
	return state.merge({
		'articleList':state.get('articleList').concat(action.list),
		'articlePage':action.nextPage
	});
};

export default function homeReducer (state = defaultState, action){
	switch(action.type) {
        case constants.CHANGE_HOME_DATA:
			return changeHomeData(state, action);
		case constants.ADD_ARTICLE_LIST:
			return addArticleList(state,action)
		case constants.TO_TOP:
			return state.set('showScroll',action.flag);
		default:
			return state;
	}
}