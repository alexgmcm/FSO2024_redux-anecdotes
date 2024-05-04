import { useSelector, useDispatch } from 'react-redux'
import { createVoteAction } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    
    const anecdotes = useSelector(state => state.filter=="" ? state.anecdotes: state.anecdotes.filter(x => x.content.includes(state.filter)))
    const dispatch = useDispatch()

    const vote = (id) => {
      console.log('vote', id)
      dispatch(createVoteAction(id))
    }
  

    return (
        <div>
      
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      
    </div>

    )
}
export default AnecdoteList