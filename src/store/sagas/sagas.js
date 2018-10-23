// import { delay } from 'redux-saga'
import { put, takeLatest, all } from 'redux-saga/effects'
import Constants from '../../lib/constants'

const articlesTemp = [
    {
        text: 'Article title 1',
        img: require('../../images/articleImage1.jpg'),
        tags: [
            'winter',
            'ski',
            'contest'
        ],
        views: '20',
        likes: '5',
        coments: [
            {text: 'Some coments 1'},
            {text: 'Some coments 1'}
        ]
    },
    {
        text: 'Article title 2',
        img: require('../../images/articleImage2.jpg'),
        tags: [
            'winter',
            'ski',
            'sloupstile'
        ],
        views: '15',
        likes: '7',
        coments: [
            {text: 'Some coments 1'},
            {text: 'Some coments 1'},
            {text: 'Some coments 1'}
        ]
    },
    {
        text: 'Article title 3',
        img: require('../../images/articleImage3.jpg'),
        tags: [
            'winter',
            'ski',
            'carving'
        ],
        views: '30',
        likes: '13',
        coments: [
            
        ]
    },
]

export default function* rootSaga() {
   yield all([
       getArticlesListWatcher(),
   ])
}

export function* getArticlesList(action) {
    yield put({type: Constants.Actions.GET_ARTICLES_LIST_SUCCESS, articles: articlesTemp})
}

export function* getArticlesListWatcher() {
    yield takeLatest(Constants.Actions.GET_ARTICLES_LIST_SAGA, getArticlesList)
}