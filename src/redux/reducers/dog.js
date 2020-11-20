import * as type from '../types';

const initialState = {
    dog: null,
    loading: false,
    error: null,
  }
  
  export default function dog(state = initialState, action) {
    switch (action.type) {
      case type.GET_DOG_REQUESTED:
        return {
          ...state,
          loading: true,
        }
      case type.GET_DOG_SUCCESS:
        return {
          ...state,
          loading: false,
          dog: action.dog
        }
      case type.GET_DOG_FAILED:
        return {
          ...state,
          loading: false,
          error: action.message,
        }
      default:
        return state
    }
  }