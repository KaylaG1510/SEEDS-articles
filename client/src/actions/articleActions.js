//makes requests to backend?
import { GET_ARTICLES, ADD_ARTICLE, DELETE_ARTICLE } from './types';

export const getArticles = () => {
    return {
        type: GET_ARTICLES
    };
}

export const deleteArticle = (id) => {
    return {
        type: DELETE_ARTICLE,
        payload: id
    };
}

export const addArticle = (article) => {
    return {
        type: ADD_ARTICLE,
        payload: article
    };
}