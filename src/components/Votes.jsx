import React from 'react'
import { useState } from 'react'
import { updateVotes } from '../api'

function Votes({data}) {
    const {article_id, votes} = data
    const [votesChange, setVotesChange] = useState(0)
    const [error, setError] = useState(null)

    const updateVoteDisplay = (value) =>{
        setVotesChange((currentVotes)=> {
            return currentVotes + value
        })
        updateVotes(article_id, value).catch(({data})=> {
            setVotesChange(0)
            setError({data})
        })
    }

    const errorStyleTemp = {
        color: "red",
        fontSize: ".75rem"
    }

    if (error) return <p style={errorStyleTemp}>Sorry, unable to connect to server.  Please refresh and try again.</p>

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
