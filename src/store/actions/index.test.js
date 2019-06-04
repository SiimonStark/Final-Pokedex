import * as actions from './index';

describe('actions', () => {
  describe('FETCH_POKEMON', () => {
    it('should have type w/ array', () => {
      const mockPokemon = [
        {name: 'Pika', sprite: {src: 'test'}, weight: 10}
      ];
      const expected = {
        type: 'FETCH_POKEMON',
        pokemon: mockPokemon
      };

      const result = actions.fetchPokemon(mockPokemon);

      expect(result).toEqual(expected);
    })
  })
  describe('IS_LOADING', () => {
    it('should have type & bool', () => {
      const bool = false;
      const expected = {
        type: 'IS_LOADING',
        bool
      }

      const result = actions.loaded(bool);

      expect(result).toEqual(expected);
    })
  })
  describe('DID_ERROR', () => {
    it('should have type & bool & message', () => {
      const bool = true;
      const message = 'Error Message';
      const expected = {
        type: 'DID_ERROR',
        bool, message
      }

      const result = actions.errored(bool, message);

      expect(result).toEqual(expected);
    })
  })
})