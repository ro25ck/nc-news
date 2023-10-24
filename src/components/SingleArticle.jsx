import React from 'react'


const data = { 
    article_id: 2,
    title: "The Rise Of Thinking Machines: How IBM's Watson Takes On The World",
    topic: "coding",
    author: "jesshelly",
    body: "Many people know Watson as the IBM-developed cognitive super computer that won the Jeopardy! gameshow in 2011. In truth, Watson is not actually a computer but a set of algorithms and APIs, and since winning TV fame (and a $1 million prize) IBM has put it to use tackling tough problems in every industry from healthcare to finance. Most recently, IBM has announced several new partnerships which aim to take things even further, and put its cognitive capabilities to use solving a whole new range of problems around the world.",
    created_at: "2020-05-14T01:02:00.000Z",
    votes: 0,
    article_img_url:
      "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?w=700&h=700"
  }

const data2 = [{"comment_id":162,"body":"Et suscipit maxime sit sunt consequuntur consequatur fugiat molestias. Et quis enim vero.","article_id":2,"author":"grumpy19","votes":14,"created_at":"2020-10-03T19:22:00.000Z"},{"comment_id":102,"body":"Quia quos adipisci sint expedita voluptatem id ut at accusantium. Et ex itaque recusandae aut quo. Quia quam similique eum quidem iusto. Aspernatur ducimus vitae vel natus doloribus qui id. Excepturi voluptatem qui quia sit qui eveniet voluptatem. Fugit itaque libero quibusdam sunt.","article_id":2,"author":"jessjelly","votes":10,"created_at":"2020-09-14T12:13:00.000Z"}]

const commentFormat = data2.map((comment) => {
    const {comment_id, body, votes, author, created_at} = comment
    //need to grab avatar image if showing one
    return (
    <>
    <p><a href='#'>{author}</a> | {created_at.substring(0,10)} | votes: {votes}</p>
    <p>{body}</p>
    </>
    )
})


const imgStyle = { 
    maxWidth: "70%",
    }


export default function SingleArticle() {
    // const [isLoading, setIsLoading] = useState(true)
    // const [data, setData] = useState([])

    // useEffect(())

  return (
    <>
    <img src={data.article_img_url} key={data.article_id} style={imgStyle}></img>
    <div className='SingleArticleHeader'>
        <p>{data.topic}</p>
        <h4>{data.title}</h4>
        <p>By <a href='#'>{data.author}</a> | Posted: {data.created_at.substring(0,10)} | Votes: {data.votes}</p>
    </div>
    <div id="ArticleBody" className='SingleArticleBody'>
        <p>{data.body}</p>
    </div>
    <div className='SingleArticleComments'>
        <h4>Comments: {data2.length}</h4> 
        <p>{commentFormat}</p>
        <button >add comment</button>
    </div>
    </>
  )
}
