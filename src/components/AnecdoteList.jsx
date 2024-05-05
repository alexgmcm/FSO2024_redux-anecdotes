import { useSelector, useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    
    const anecdotes = useSelector(state => state.filter=="" ? state.anecdotes: state.anecdotes.filter(x => x.content.includes(state.filter)))
    const sortedAnecdotes = [...anecdotes].sort((a,b) => b.votes - a.votes)
    const dispatch = useDispatch()

    const handleVote = (anecdote) => {
      const id = anecdote.id
      const content = anecdote.content
      console.log('vote', id)
      dispatch(voteAnecdote(anecdote))
      dispatch(setNotification(`you voted '${content}'`, 3))
    }
  

    return (
        <div>
      
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
      
    </div>

    )
}
export default AnecdoteList