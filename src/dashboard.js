import React from 'react';
import Pet from './components/Pet';

import { connect } from 'react-redux';
import {
	fetchCat,
	fetchDog,
	fetchAdoptCat,
	fetchAdoptDog
} from './actions/index';
import './dashboard.css';

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
		return (
			<main className="row" id="pet-display">
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
