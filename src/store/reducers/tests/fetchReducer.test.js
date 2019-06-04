import {fetchReducer} from '../fetchReducer';
import * as actions from '../../actions/';

describe('fetchReducer', () => {
  it('should return intial state', () => {
    const expected = [];
    const result = fetchReducer(undefined, []);
    expect(result).toEqual(expected);
  })
  it('should return state w/ pokemon when case is FETCH_POKEMON', () => {
    let mockPokemon = [
      {name: 'Pika'}, {name: 'Meowth'}
    ]
    const expected = mockPokemon;
    const result = fetchReducer(undefined, actions.fetchPokemon(mockPokemon));

    expect(result).toEqual(expected)
  })
})