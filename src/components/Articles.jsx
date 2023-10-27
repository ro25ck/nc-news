import React from 'react'
import { useState, useEffect } from 'react'
import { getArticles } from '../api'
import ArticleShowCard from './ArticleShowCard'
import { useSearchParams } from 'react-router-dom'

function Articles() {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const queryCategory = searchParams.get("topic")

    useEffect(()=>{
        getArticles()
        .then((fetchedData) => {
            setData(fetchedData)
            setIsLoading(false)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }, [])
    
    if (isLoading) return <p>Loading...</p>

    const filteredCategoryData = queryCategory
    ? data.filter(article => article.topic === queryCategory)
    : data

/* next iteration of page 
   Author link will re-render current Articles component with filtered list of articles in queried author
*/

    return (
        <>
        <section className="main-articleList">
            <p>Here is the list of the articles</p>
                <div id="articleList">
                <ArticleShowCard filteredCategoryData={filteredCategoryData}/>
                </div>
        </section>
    </>
  )
}

export default Articles