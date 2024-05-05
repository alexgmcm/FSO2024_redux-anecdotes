
import { createSlice, current } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'
/*
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

 //anecdotesAtStart.map(asObject)

export const createAddPayload = (content) => {
 return {id: getId(), votes:0, content: content}
} */

const initialState = []
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
    },
    setAnecdotes(state,action){
      return action.payload
    }
  },

  })

  export const initialiseAnecdotes = () => {
    return async dispatch => {
      const anecdotes = await anecdoteService.getAll()
      //console.log(anecdotes)
      dispatch(setAnecdotes(anecdotes))
    }
  }

  export const createAnecdote = content => {
    return async dispatch => {
      const newAnecdote = await anecdoteService.createNew(content)
      dispatch(addAnecdote(newAnecdote))
    }
  }

export const voteAnecdote = anecdote => {
  return async dispatch => {
    const updatedAnecdote = {...anecdote, votes: anecdote.votes +1} 
    const response =  await anecdoteService.updateById(anecdote.id, updatedAnecdote )
    dispatch(vote(response))   
  }
}

const {vote, addAnecdote, setAnecdotes} = anecdoteSlice.actions
export default anecdoteSlice.reducer