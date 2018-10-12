import React from 'react';

export default function Pet(props) {
  // console.log(props);
  if (!props.Pet) {
    return <p>No more pets to show</p>;
  }

  return (
    <section className="col-6">
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
        <button onClick={() => props.onAdoptPet()}>Adopt</button>
      </main>
    </section>
  );
}
