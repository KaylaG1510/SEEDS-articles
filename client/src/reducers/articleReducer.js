import { v4 as uuid } from 'uuid';
import { GET_ARTICLES, ADD_ARTICLE, DELETE_ARTICLE } from '../actions/types';

const initialState = {
    articles: [
        {id: uuid(), 
            title: 'The Cat in The Hat', 
            author: 'Dr. Seuss',
            year: 2000, 
            practice: 'TDD',
            claim: 'Teamwork makes the dream work',
            strength: 'Moderately supports'},
          {id: uuid(), 
            title: 'Thrawn',
            author: 'Timothy Zahn',
            year: 2017,
            practice: 'TDD',
            claim: 'Thrawn is better than Tarkin',
            strength: 'Strongly suppports'},
          {id: uuid(), 
            title: 'Thrawn: Alliances',
            author: 'Timothy Zahn',
            year: 2018,
            practice: 'TDD',
            claim: 'Thrawn knows what happened to Vader',
            strength: 'Weakly supports'}
    ]
}

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_ARTICLES:
            return {
                ...state
            };
        case ADD_ARTICLE:
            return {
                ...state,
                articles: [action.payload, ...state.articles]
            };
        case DELETE_ARTICLE:
            return {
                ...state,
                articles: state.articles.filter(article => article.id !== action.payload)
            };
        default:
            return state;
    }
}