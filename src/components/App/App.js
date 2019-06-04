import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchPokemon, loaded, errored} from '../../store/actions/';
import PokeList from '../../container/PokeList';
import { Loading } from '../Loading/';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      isLoading: this.props.isLoading || true
    }
  }

  componentDidMount() {
    let URL = 'http://localhost:3001/pokemon'

    fetch(URL)
      .then(response => response.json())
      .then(result=> {
        this.setState({isLoading:false})
        this.props.loaded(true)
        this.props.fetchPokemon(result)
      })
      .catch(error => this.props.errored(true, error))
  }

  render() {
    console.log('STORE', this.props)
    return (
      <div className='App'>
        <header>
          <h1 className='header'> POKéDEX </h1>
        </header>
        {this.state.isLoading && <Loading />}
        {!this.state.isLoading && <PokeList />}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  pokemon: state.pokemon,
  isLoading: state.isLoading,
  isErrored: state.isErrored
})

export const mapDispatchToProps = (dispatch) => ({
  fetchPokemon: (pokemon) => dispatch(fetchPokemon(pokemon)),
  loaded: (bool) => dispatch(loaded(bool)),
  errored: (bool, error) => dispatch(errored(bool, error.message))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
