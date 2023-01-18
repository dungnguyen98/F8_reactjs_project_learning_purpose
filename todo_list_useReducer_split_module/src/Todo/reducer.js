import { ADD_JOB, SET_JOB, DELETE_JOB } from './constants'

export const initState = {
    job: '',
    jobs: []
  }

export const reducer = (state, action) => {
    switch(action.type){
      case SET_JOB:
        return {
          ...state,
          job: action.payload
        }
      
      case ADD_JOB:
        return {
          ...state,
          jobs: [...state.jobs, action.payload]
        }
      
      case DELETE_JOB:
        return {
          ...state,
          jobs: state.jobs.filter((job, index) => index !== Number(action.payload))
        }
       
    }
  }