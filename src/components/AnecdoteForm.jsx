import { createAddAction} from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        dispatch(createAddAction(event.target.content.value))
      } 

    return (
        <div>
        <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="content"/></div>
        <button>create</button>
      </form>
      </div>
    )

}

export default AnecdoteForm