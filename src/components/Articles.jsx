import React from 'react'
import { useState, useEffect } from 'react'
import { getArticles } from '../api'
import ArticleShowCard from './ArticleShowCard'


function Articles() {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    
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

/* next iteration of page 
   Category link will re-render current Articles component with filtered list of articles in queried category
   Author link will re-render current Articles component with filtered list of articles in queried author

*/

    return (
        <>
        <section className="main-articleList">
            <p>Here is the list all of the articles on the site</p>
                <section id="articleList">
                <ArticleShowCard data={data}/>
                </section>
        </section>
    </>
  )
}

export default Articles