import PokeList from './index';
import React from 'react'
import { shallow } from 'enzyme';
import { mapStateToProps } from './index';

let mockPokemon = [{ name: 'Pika' }, { name: 'pidgey' }]
let mockStore = {
  pokemon: mockPokemon,
}

describe('PokeList', () => {
  describe('PokeList component', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(
        <PokeList pokemon={mockPokemon} />
      )
    })
    it('should match snapshots', () => {

    })
  })
  
  describe('mapStateToProps', () => {
    it('should set props with an array from the store', () => {
      const expected = {
        pokemon: mockPokemon,
      }
      const mappedProps = mapStateToProps(mockStore);

      expect(mappedProps).toEqual(expected);
    })
  })
})