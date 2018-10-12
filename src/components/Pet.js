import React from 'react';

export default function Pets(props) {
	// console.log(`In pets function ${props.value}`);
	return (
		<div className="pet-container">
			<section className="pet-section">
				<header className="pet-header">
					<h2>{props.pet.name}</h2>
					<img
						src={props.pet.imageURL}
						className="image"
						alt={props.pet.imageDescription}
					/>
				</header>

				<main>
					<dl>
						<dt>Sex </dt>
						<dd>{props.pet.sex}</dd>
						<dt>Age </dt>
						<dd>{props.pet.age}</dd>
						<dt>Breed </dt>
						<dd>{props.pet.breed}</dd>
						<dt>Story </dt>
						<dd>{props.pet.story} </dd>
					</dl>
					<button onClick={e => props.onClick(e)}>Adopt</button>
				</main>
			</section>
		</div>
	);
}
