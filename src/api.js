import axios from "axios";

const articleAPI = axios.create({
    baseURL: "https://eb-nc-news.onrender.com/api"
})

export const getArticles = () => {
    return articleAPI
    .get("/articles")
    .then((response) => {
            return response.data.articles
    })
}

export const getArticleById = (article_id) => {
    return articleAPI
        .get(`/articles/${article_id}`)
        .then((response) => {
            return response.data.article
        })  
}

export const getCommentsByArticleId = (article_id) => {
    return articleAPI
        .get(`/articles/${article_id}/comments`)
        .then((response) => {
            return response.data
        })
}

export const getTopics = () => {
    return articleAPI
        .get("/topics")
        .then((response)=> {
            return response.data
        })
}

export const updateVotes = (article_id, value) => {
    return articleAPI
        .patch(`articles/${article_id}`, {inc_votes: value})
}