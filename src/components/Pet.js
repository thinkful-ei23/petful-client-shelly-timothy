import React from 'react';

export default function Pet(props) {
	// console.log(props);
	if (!props.Pet) {
		return <p>Thank you for adopting!</p>;
	}

	return (
		<section className="col-6" id="pet-section">
			<header>
				<h2>{props.Pet.name}</h2>
				<img src={props.Pet.imageURL} alt={props.Pet.imageDescription} />
			</header>
			<main>
				<h3>More about {props.Pet.name}</h3>
				<dl>
					<dt>Sex:</dt>
					<dd>{props.Pet.sex}</dd>
					<dt>Age:</dt>
					<dd>{props.Pet.age}</dd>
					<dt>Breed:</dt>
					<dd>{props.Pet.breed}</dd>
					<dt>Story:</dt>
					<dd>{props.Pet.story}</dd>
				</dl>
				<button onClick={e => props.onAdoptPet(e)}>Adopt</button>
			</main>
		</section>
	);
}
