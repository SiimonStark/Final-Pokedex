export const fetchReducer = (state = [], action) => {
  
  switch (action.type) {
    case 'FETCH_POKEMON':
      return action.pokemon;
    default:
      return state;
  }
}