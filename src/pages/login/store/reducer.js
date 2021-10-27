import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
	login: false,
	sign:0
});



export default function loginReducer (state = defaultState, action){
	switch(action.type) {
		case constants.CHANGE_LOGIN:
			return state.merge({
				login:action.value.login,
				username:action.value.username
			});
		case constants.CHANGE_SIGN:
			return state.set('sign',action.value);
		case constants.CHANGE_LOGOUT:
			return state.set('login',action.value);
		default:
			return state;
	}
}