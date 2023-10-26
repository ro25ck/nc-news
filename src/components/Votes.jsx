import React from 'react'
import { useState } from 'react'

function Votes({data}) {
    const [votesChange, setVotesChange] = useState(0)

    const updateVoteDisplay = (value) =>{
        setVotesChange((currentVotes)=> {
            return currentVotes + value
        })
    }

  return (<>
    Votes: {data.votes + votesChange}
    <button onClick={()=>{
        updateVoteDisplay(1)
        }}
    >
        +
    </button>
    <button onClick={()=>{
        updateVoteDisplay(-1)
        }}
    >
        -
    </button>
    </>
  )
}


export default Votes
