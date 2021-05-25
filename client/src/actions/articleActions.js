//makes requests to backend
import axios from 'axios';
import { GET_ARTICLES, ADD_ARTICLE, DELETE_ARTICLE, ARTICLES_LOADING } from './types';

export const getArticles = () => dispatch => {
    dispatch(setArticlesLoading());
    axios.get('/articles/') //wrong request server: /api/articles
        .then(res => dispatch({                     //http://localhost:5000/articles/
            type: GET_ARTICLES,
            payload: res.data
        }));
};

export const deleteArticle = (id) => {
    return {
        type: DELETE_ARTICLE,
        payload: id
    };
};

export const addArticle = (article) => dispatch => {
    axios.post('http://localhost:5000/articles/', article)
    .then(res => dispatch({
        type: ADD_ARTICLE,
        payload: res.data
    }))
};

export const setArticlesLoading = () => {
    return {
        type: ARTICLES_LOADING
    };
}