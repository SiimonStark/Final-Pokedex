export const fetchPokemon = (pokemon) => ({
  type: 'FETCH_POKEMON',
  pokemon
});

export const loaded = (bool) => ({
  type: 'IS_LOADING',
  bool
});

export const errored = (bool, message) => ({
  type: 'DID_ERROR',
  bool,
  message
});