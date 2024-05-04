import { addAnecdote, createAddPayload} from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import { modifyNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const handleAddAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.content.value
        dispatch(addAnecdote(createAddPayload(content)))
        dispatch(modifyNotification({notificationText:`you added ${content}`}))
        setTimeout(() => {dispatch(modifyNotification({notificationText:""}))},5000)
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