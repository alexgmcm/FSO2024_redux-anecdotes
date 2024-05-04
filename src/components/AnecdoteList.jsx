import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { modifyNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    
    const anecdotes = useSelector(state => state.filter=="" ? state.anecdotes: state.anecdotes.filter(x => x.content.includes(state.filter)))
    const sortedAnecdotes = [...anecdotes].sort((a,b) => b.votes - a.votes)
    const dispatch = useDispatch()

    const handleVote = (anecdote) => {
      const id = anecdote.id
      const content = anecdote.content
      console.log('vote', id)
      dispatch(vote({id: id}))
      dispatch(modifyNotification({notificationText:`you voted ${content}`}))
      setTimeout(() => {dispatch(modifyNotification({notificationText:""}))},5000)
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