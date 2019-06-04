import App from './App';
import React from 'react'
import {shallow} from 'enzyme';
import {fetchPokemon, loaded, errored} from '../../store/actions/'
import { mapStateToProps } from '../App/App';
import { mapDispatchToProps } from '../App/App';

let mockPokemon = [{name: 'Pika'}, {name: 'pidgey'}]
let mockisLoading = true;
let mockisErrored = false;
let mockStore = {
  pokemon: mockPokemon, 
  isLoading: mockisLoading, 
  isErrored: mockisErrored
}

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App 
        store={ mockStore}
        fetchPokemon= {fetchPokemon}
        loaded= {loaded}
        errored= {errored} />
    )
  })
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})

describe('mapStateToProps', () => {
  it('should set props with an array from the store', () => {
    const expected = {
      pokemon: mockPokemon,
      isLoading: mockisLoading,
      isErrored: mockisErrored
    }
    const mappedProps = mapStateToProps(mockStore);

    expect(mappedProps).toEqual(expected);
  })
})

describe('mapDispatchToProps', () => {
  it('should call dispatch on fetchPokemon', () => {
    const mockDispatch = jest.fn();
    const mockState = {
      pokemon: mockPokemon
    }
    const actionToDispatch = fetchPokemon(mockState);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.fetchPokemon(mockState);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})
