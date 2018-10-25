import {combineReducers} from 'redux';
import Constants from "../../lib/constants";

const articles = (state = {requestSuccess: false}, action) => {
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
        case Constants.Actions.INCREASE_VISITS_COUNTER_SUCCESS: 
            // const newArr = state.articles_list.map((item, i) => {
            //     if(action.index == i) {
            //         return {
            //             ...item,
            //             views: parseInt(item.views, 10) + 1 + ''
            //         }
            //     } else return item
            // })

            return {
                // ...state,
                articles_list: action.articles,
            }
        default: 
            return state;
    }
}

const reducers = combineReducers({
    articles
})

export default reducers