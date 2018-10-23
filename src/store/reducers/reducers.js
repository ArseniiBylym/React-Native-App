import {combineReducers} from 'redux';
import Constants from "../../lib/constants";

const articles = (state = {}, action) => {
    switch (action.type) {
        case Constants.Actions.GET_ARTICLES_LIST_SUCCESS: 
            return {
                articles_list: action.articles,
                requestSuccess: true
            };
        case Constants.Actions.GET_ARTICLES_LIST_FAILED:
            return {
                articles_list: action.articles,
                requestSuccess: false
            };
        default: 
            return state;
    }
}

const reducers = combineReducers({
    articles
})

export default reducers