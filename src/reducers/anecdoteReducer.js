
import { createSlice, current } from '@reduxjs/toolkit'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

export const createAddPayload = (content) => {
 return {id: getId(), votes:0, content: content}
}

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    vote(state, action){
      console.log(current(state))
      console.log(action)
      return state.map(x => x.id!=action.payload.id ? x : {...x, votes: x.votes + 1})
    },
    addAnecdote(state, action){
      return state.concat(action.payload)
    }
  },

  })

export const {vote, addAnecdote} = anecdoteSlice.actions
export default anecdoteSlice.reducer