import React from 'react'
import { useState } from 'react'
import { updateVotes } from '../api'

function Votes({data}) {
    const {article_id, votes} = data
    const [votesChange, setVotesChange] = useState(0)

    const updateVoteDisplay = (value) =>{
        setVotesChange((currentVotes)=> {
            return currentVotes + value
        })
        updateVotes(article_id, value).catch(()=> {
            setVotesChange(0)
        })
    }

  return (<>
    Votes: {votes + votesChange}
    <button 
        disabled={votesChange === 1}
        onClick={()=>{
        updateVoteDisplay(1)
        }}
    >
        +
    </button>
    <button 
        disabled={votesChange === -1}    
        onClick={()=>{
        updateVoteDisplay(-1)
        }}
    >
        -
    </button>
    </>
  )
}


export default Votes
