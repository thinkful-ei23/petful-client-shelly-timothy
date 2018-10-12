import React from 'react';
import Pet from './components/Pet';

import { connect } from 'react-redux';
import {
  fetchCat,
  fetchDog,
  fetchAdoptCat,
  fetchAdoptDog
} from './actions/index';
import './grid.css';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  handleOnAdoptCat() {
    this.props.dispatch(fetchAdoptCat());
    // this.props.dispatch(fetchCat());
  }

  handleOnAdoptDog() {
    this.props.dispatch(fetchAdoptDog());
    // this.props.dispatch(fetchDog());
  }

  render() {
    // if (!this.props.catToAdopt.data) {
    //   return <p>Loading...</p>
    // }
    // if (!this.props.dogToAdopt.data){
    //   return <p>Loading...</p>
    // }
    // console.log(this.props.catToAdopt.data)
    // console.log(this.props.dogToAdopt.data)
    return (
      <main className="row">
        <h1>
          Save a <span>Life</span>. Adopt a Pet!
        </h1>
        <Pet
          Pet={this.props.catToAdopt.data}
          onAdoptPet={() => this.handleOnAdoptCat()}
        />
        <Pet
          Pet={this.props.dogToAdopt.data}
          onAdoptPet={() => this.handleOnAdoptDog()}
        />
      </main>
    );
  }
}

const mapStateToProps = (state, props) => ({
  catToAdopt: state.cat,
  dogToAdopt: state.dog
});

export default connect(mapStateToProps)(Dashboard);
