import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const handleAddAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.content.value
        dispatch(createAnecdote(content))
        dispatch(setNotification(`you created '${content}'`, 3))
        
      } 

    return (
        <div>
        <h2>create new</h2>
      <form onSubmit={handleAddAnecdote}>
        <div><input name="content"/></div>
        <button>create</button>
      </form>
      </div>
    )

}

export default AnecdoteForm