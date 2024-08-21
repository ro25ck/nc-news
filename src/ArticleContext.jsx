import React, {createContext, useState, useEffect} from 'react'
import {articles as dataArticles} from './assets/data-dev/articles.js'

export const ArticleContext =
createContext()

export const ArticleProvider = ({ children }) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {

        const fetchArticles = async () => {
            try {
                await new Promise(resolve => 
                    setTimeout(resolve, 500))
                setArticles(dataArticles)
                setLoading(false)
        } catch (error) { 
            console.error(`Error loading data: `, error)
            setLoading(false)
        }
    }
        fetchArticles()
    },[])

    return(
        <ArticleContext.Provider 
        value = { { articles, loading } }>
            {children}
        </ArticleContext.Provider>
    )
}
