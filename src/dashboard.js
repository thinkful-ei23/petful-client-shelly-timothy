import React from 'react';
import Pet from './components/Pet';
import './dashboard.css';

export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dogToAdopt: {
				imageURL:
					'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
				imageDescription:
					'A smiling golden-brown golden retreiver listening to music.',
				name: 'Zeus',
				sex: 'Male',
				age: 3,
				breed: 'Golden Retriever',
				story: 'Owner Passed away'
			},

			catToAdopt: {
				imageURL:
					'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
				imageDescription:
					'Orange bengal cat with black stripes lounging on concrete.',
				name: 'Fluffy',
				sex: 'Female',
				age: 2,
				breed: 'Bengal',
				story: 'Thrown on the street'
			}
		};
	}

	onAdoptPet(e) {
		console.log('Adopt button was clicked');
	}

	render() {
		// console.log(this.state.dogToAdopt, this.state.catToAdopt);
		return (
			<div className="pet-adoption">
				<Pet
					value={this.state.dogToAdopt.name}
					pet={this.state.dogToAdopt}
					onClick={e => this.onAdoptPet(e)}
				/>
				<Pet
					value={this.state.catToAdopt.name}
					pet={this.state.catToAdopt}
					onClick={e => this.onAdoptPet(e)}
				/>
			</div>
		);
	}
}
