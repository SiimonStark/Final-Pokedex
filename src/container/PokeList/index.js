import React, {Component} from 'react';
import { connect } from 'react-redux';

export class PokeList extends Component{
  constructor(props) {
    super(props)
  }

  mapPoke = () => {
    return this.props.pokemon.map(poke => (
      <article className="pokeCard" key={poke.name}>
        <img src={poke.sprites.front_default} alt={poke.name} />
        <h3>Name: {poke.name}</h3>
        <p>Weight: {poke.weight}</p>
      </article>
    ))
  }

  render() {
    return (
      <section className="PokeList-field">
        {this.mapPoke()}
      </section>
    )
  }
  
}

export const mapStateToProps = (state) => ({
  pokemon: state.pokemon
});

export default connect(mapStateToProps, null)(PokeList);