import { useState, useEffect } from 'react'
import { getTopics } from '../api'

 function Topics() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  
  useEffect(()=> {
    getTopics()
    .then((topics)=> {
      setData(topics)
      setIsLoading(false)
    })
    .catch((error)=>{
      console.log(error.response)
    })
  }, [])
  
  if (isLoading) return <p>Loading...</p>
 
  const formatTopics = data.topics.map((topic)=>{
    const queryTopicHref = "/articles?topic="+topic.slug
    return (
      <div key={topic.slug}>
        <p>{topic.slug} -> {topic.description}</p>
      </div>
    )
  })

  return (<section id="topics" className='list-topic'>
    <p>Please click the topic below for a list of articles available on the topic</p>
    <div>
      {formatTopics}
    </div>
    </section>
  )
}

export default Topics