import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { QUERY_PETS, QUERY_ME } from './utils/queries';
import { ADD_PET } from './utils/mutations';


const PetForm = () => {

  const [{petName, type, breed}, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
 
  const [addPet, { error }] = useMutation(ADD_PET, {
    update(cache, { data: { addPet } }) {
     // could potentially not exist yet, so wrap in a try/catch
      try {
        // update dashboard array's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, pets: [...me.pets, addPet] } },
        });
      } catch (e) {
        console.warn("First pet insertion by user!")
      }
  
      // update pet array's cache
      const { pets } = cache.readQuery({ query: QUERY_PETS });
      cache.writeQuery({
        query: QUERY_PETS,
        data: { pets: [addPet, ...pets] },
      });
    },
});

  const handleChange = event => {
    if (event.target.value.length <= 20) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
        // add pet to database
        await addPet({
          variables: { petName, type, breed }
        });
    
        // clear form value
        setText('');
        setCharacterCount(0);
      } catch (e) {
        console.error(e);
      }
  };

  return (
    <div>
      {/* condition <p> element to count characters and send  error if text is empty or over 20 limit */}
      <p className={`m-0 ${characterCount === 20 ? 'text-error' : ''}`}>
         Character Count: {characterCount}/20
         {error && <span className="ml-2">Must be no more than 20 characters...</span>}
      </p>
      <form className="flex-row justify-center justify-space-between-md align-stretch"
         onSubmit={handleFormSubmit}
        >
        <input
          placeholder="Pet's name..."
          value={petName}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></input>
        <input
          placeholder="Dog or cat?"
          value={type}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></input>
        <input
          placeholder="Breed of pet"
          value={breed}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></input>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PetForm;