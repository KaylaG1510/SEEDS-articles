//makes requests to backend
import axios from 'axios';
import { GET_ARTICLES, ADD_ARTICLE, DELETE_ARTICLE, ARTICLES_LOADING } from './types';

export const getArticles = () => dispatch => {
    dispatch(setArticlesLoading());
    axios.get('/articles/')                     //http://localhost:5000/articles/ DEP: /articles/
        .then(res => dispatch({                     
            type: GET_ARTICLES,
            payload: res.data
        }));
};

// export const searchArticles = (prac) => dispatch => {
//     dispatch(setArticlesLoading());
//     axios.get('/articles/')
//     .then(res => dispatch ({
//         type: GET_ARTICLES,
//         payload: this.filterContent(res.data.article, prac)
//     }))
// }

export const searchArticles = (prac) => dispatch => {
    dispatch(setArticlesLoading());
    axios.get('/articles/')
    .then(res => dispatch ({
        type: GET_ARTICLES,
        payload: res.data.filter((article) => article.practice.include(prac))
    }));
}

// filterContent(articles, searchTerm) {
//     const result = articles.filter((article) => article.practice.includes(searchTerm));
//     this.setState({ articles: result });
//   }

export const addArticle = (article) => dispatch => {
    axios.post('/articles/', article)
       .then(res => dispatch({
        type: ADD_ARTICLE,
        payload: res.data
    }))
};

// export const searchArticles = (prac) => dispatch => {
//     dispatch(setArticlesLoading());
//     axios.get('http://localhost:5000/articles/', {params: {practice: prac}})
//         .then(res => dispatch ({
//             type: GET_ARTICLES,
//             payload: res.data
//         }));
// };

export const deleteArticle = (id) => {
    return {
        type: DELETE_ARTICLE,
        payload: id
    };
};

export const setArticlesLoading = () => {
    return {
        type: ARTICLES_LOADING
    };
}