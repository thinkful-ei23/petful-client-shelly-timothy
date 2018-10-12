import React from 'react';

export default function Pets(props) {
	// console.log(`In pets function ${props.value}`);
	return (
		<div className="pet-container">
			<section className="pet-section">
				<header className="pet-header">
					<h2>{props.value.name}</h2>
					<img
						src={props.value.imageURL}
						className="image"
						alt={props.value.imageDescription}
					/>
				</header>

				<main>
					<dl>
						<dt>Sex </dt>
						<dd>{props.value.sex}</dd>
						<dt>Age </dt>
						<dd>{props.value.age}</dd>
						<dt>Breed </dt>
						<dd>{props.value.breed}</dd>
						<dt>Story </dt>
						<dd>{props.value.story} </dd>
					</dl>
					<button className="adopt">Adopt</button>
				</main>
			</section>
		</div>
	);
}
