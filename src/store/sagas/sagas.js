// import { delay } from 'redux-saga'
import { put, takeLatest, all, select } from 'redux-saga/effects'
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
            {
                author: 'John',
                img: require('../../images/Unknown-avatar.jpg'),
                date: 'date',    
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            },
            {
                author: 'Bill',
                img: require('../../images/Unknown-avatar.jpg'),
                date: 'date',    
                text: 'Praesentium, iure fuga debitis dicta, ducimus accusantium quasi dolor non voluptatem minus id expedita sint inventore repellat ab odit fugit officiis!'
            },
            {
                author: 'some_user',
                img: require('../../images/Unknown-avatar.jpg'),
                date: 'date',    
                text: 'Some coments 1'
            },
        ],
        mainText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, iure fuga debitis dicta, ducimus accusantium quasi dolor non voluptatem minus id expedita sint inventore repellat ab odit fugit officiis! Beatae neque quis vel autem, doloremque eveniet expedita quisquam sint at eum. Quidem laborum neque pariatur quam et, sed, dicta odit consectetur modi voluptates necessitatibus sapiente quia vitae maxime totam consequuntur porro perspiciatis. Harum itaque consequatur error. Quibusdam repellendus repellat, esse sapiente iusto quidem, nemo tempore quo vitae dolores error quam dolorum voluptate minima. Ab quaerat est voluptatibus molestias vel, dolore quos magni similique error placeat debitis id sed aspernatur quae.'
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
            {
                author: 'Mark',
                img: require('../../images/Unknown-avatar.jpg'),
                date: 'date',    
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            },
            {
                author: 'Rebecca',
                img: require('../../images/Unknown-avatar.jpg'),
                date: 'date',    
                text: 'Praesentium, iure fuga debitis dicta, ducimus accusantium quasi dolor non voluptatem minus id expedita sint inventore repellat ab odit fugit officiis!'
            },
            {
                author: 'some_user',
                img: require('../../images/Unknown-avatar.jpg'),
                date: 'date',    
                text: 'Some coments 1'
            },
        ],
        mainText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, iure fuga debitis dicta, ducimus accusantium quasi dolor non voluptatem minus id expedita sint inventore repellat ab odit fugit officiis! Beatae neque quis vel autem, doloremque eveniet expedita quisquam sint at eum. Quidem laborum neque pariatur quam et, sed, dicta odit consectetur modi voluptates necessitatibus sapiente quia vitae maxime totam consequuntur porro perspiciatis. Harum itaque consequatur error. Quibusdam repellendus repellat, esse sapiente iusto quidem, nemo tempore quo vitae dolores error quam dolorum voluptate minima. Ab quaerat est voluptatibus molestias vel, dolore quos magni similique error placeat debitis id sed aspernatur quae.'
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
            
        ],
        mainText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, iure fuga debitis dicta, ducimus accusantium quasi dolor non voluptatem minus id expedita sint inventore repellat ab odit fugit officiis! Beatae neque quis vel autem, doloremque eveniet expedita quisquam sint at eum. Quidem laborum neque pariatur quam et, sed, dicta odit consectetur modi voluptates necessitatibus sapiente quia vitae maxime totam consequuntur porro perspiciatis. Harum itaque consequatur error. Quibusdam repellendus repellat, esse sapiente iusto quidem, nemo tempore quo vitae dolores error quam dolorum voluptate minima. Ab quaerat est voluptatibus molestias vel, dolore quos magni similique error placeat debitis id sed aspernatur quae.'
    },
]

export default function* rootSaga() {
   yield all([
       getArticlesListWatcher(),
       increaseVisitsCounterWatcher()
   ])
}

export function* getArticlesList(action) {
    yield put({type: Constants.Actions.GET_ARTICLES_LIST_SUCCESS, articles: articlesTemp})
}
export function* getArticlesListWatcher() {
    yield takeLatest(Constants.Actions.GET_ARTICLES_LIST_SAGA, getArticlesList)
}



export function* increaseVisitsCounter(action) {
    const articles = yield select(state => state.articles_list)


    // const newArticles = state.map((item, i) => {
    //     if(action.index == i) {
    //         return {
    //             ...item,
    //             views: parseInt(item.views, 10) + 1 + ''
    //         }
    //     } else return item
    // })
   
    yield put({type: Constants.Actions.INCREASE_VISITS_COUNTER_SUCCESS, articles: articles})
}
export function* increaseVisitsCounterWatcher() {
    yield takeLatest(Constants.Actions.INCREASE_VISITS_COUNTER_SAGA, increaseVisitsCounter)
}