import React from 'react';
import Pet from './components/Pet';
import { connect } from 'react-redux';
import { fetchCat, fetchDog } from './actions';
import './grid.css';

let catToAdopt = {
  imageURL: 'https://static.pexels.com/photos/20787/pexels-photo.jpg',
  imageDescription:
    'Grey siamese cat with bright green eyes, looking up to the camera.',
  name: 'Tina',
  sex: 'female',
  age: 3,
  breed: 'Siamese',
  story: 'Abandoned by previous owner.'
};

let dogToAdopt = {
  imageURL:
    'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription:
    'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden retriever',
  story: 'Owner passed away.'
};

//ddd

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  handleOnAdoptPet() {
    console.log('You tried to adopt a pet!');
  }

  render() {
    return (
      <main className="row">
        <h1>
          Save a <span>Life</span>. Adopt a Pet!
        </h1>
        <Pet Pet={catToAdopt} onAdoptPet={() => this.handleOnAdoptPet()} />
        <Pet Pet={dogToAdopt} onAdoptPet={() => this.handleOnAdoptPet()} />
      </main>
    );
  }
}
export default connect()(Dashboard);
