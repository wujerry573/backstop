import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getSquirtleFunc,
  getCharmanderFunc,
  getBulbasaurFunc,
  getRandomFunc,
} from "../store/actions";
import "../App.css";
import Pokemon from "./pokemon";
import Header from "./header";
import Footer from "./footer";

class MainContainer extends Component {
  async componentDidMount() {
    await Promise.all([
      this.props.getSquirtle(),
      this.props.getCharmander(),
      this.props.getBulbasaur(),
    ]);
  }

  render() {
    let random;
    if (Object.keys(this.props.state.randomPokemon).length !== 0) {
      random = (
        <div class="column">
          <Pokemon {...this.props.state.randomPokemon} />
        </div>
      );
    }

    return (
      <div>
        <Header />
        {console.log(this.props.state)}
        <section class="hero is-large is-info">
          <div class="hero-body">
            <div class="columns is-centered">
              <div class="column">
                <Pokemon {...this.props.state.pokemon[0]} />
              </div>
              <div class="column">
                <Pokemon {...this.props.state.pokemon[1]} />
              </div>
              <div class="column">
                <Pokemon {...this.props.state.pokemon[2]} />
              </div>
              {random}
            </div>
            <div class="has-text-centered">
              <button
                class="button is-centered"
                onClick={() => {
                  this.props.getRandom();
                }}
              >
                Random Pokemon
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSquirtle: getSquirtleFunc(dispatch),
    getCharmander: getCharmanderFunc(dispatch),
    getBulbasaur: getBulbasaurFunc(dispatch),
    getRandom: getRandomFunc(dispatch),
  };
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);

export default ConnectedApp;
