export const errorReducer = (state = {isError: false, message: ''}, action) => {
  switch (action.type) {
    case 'DID_ERROR':
      state.isError = action.bool
      state.message = action.message
      return state;
    default:
      return state;
  }
}