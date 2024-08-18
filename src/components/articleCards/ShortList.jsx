import React from 'react'
import './articles.css'

function ShortList(data) {
console.log(data)

   return (
    <div className='container__ShortList'>
      <div className="ShortList__header">
      <div className="ShortList__topic">{data.topic}</div>
      <div className='ShortList__topic-link'>MORE</div>

      </div>
    </div>
  )
}


export default ShortList