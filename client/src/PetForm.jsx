import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { QUERY_PETS, QUERY_ME } from './utils/queries';
import { ADD_PET } from './utils/mutations';



const PetForm = () => {

  const [petName, setPetName] = useState('')
  const [type, setPetType] = useState('')
  const [breed, setPetBreed] = useState('')
  const [characterCount, setCharacterCount] = useState(0);
 
  const [addPet] = useMutation(ADD_PET, {

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

const handleChangeName = event => {
  if (event.target.value.length <= 20) {
    setPetName(event.target.value);
    setCharacterCount(event.target.value.length);
  }
};

const handleChangeType = event => {
  if (event.target.value.length <= 20) {
    setPetType(event.target.value);
    setCharacterCount(event.target.value.length);
  }
};

const handleChangeBreed = event => {
  if (event.target.value.length <= 20) {
    setPetBreed(event.target.value);
    setCharacterCount(event.target.value.length);
  }
};


  const handleFormSubmit = async event => {
    event.preventDefault();
    
    try {
        // add pet to database
        await addPet({
          variables: { petName, type, breed },
          
        });
    
        // clear form value
        setPetName('');
        setPetType('');
        setPetBreed('');
        setCharacterCount(0);
      
      
      } catch (e) {
        console.error(e);
      }

      // reload page with new pet
      document.location.reload()
  };

  
  return (
    <div>
      {/* condition <p> element to count characters and send  error if text is empty or over 20 limit */}
       <span>(20) characters per input max.</span>
      <p className={`m-0 ${characterCount === 20 ? 'text-error' : ''}`}>
         Character Count: {characterCount}/20 
      </p>
      <form className="flex-row justify-center justify-space-between-md align-stretch"
         onSubmit={handleFormSubmit} 
        >
        <input
          placeholder="Pet's name..."
          value={petName}
          className="form-input col-12 col-md-9"
          onChange={handleChangeName}
          // onChange={(event) => setPetName(event.target.value)}
        ></input>
        <input
          placeholder="Dog or cat?"
          value={type}
          className="form-input col-12 col-md-9"
          onChange={handleChangeType}
        ></input>
        <input
          placeholder="Breed of pet"
          value={breed}
          className="form-input col-12 col-md-9"
          onChange={handleChangeBreed}
        ></input>
      
        <button className="btn col-12 col-md-3" type="submit" >
          Submit
        </button>
  
      </form>
    </div>
  )


};

export default PetForm;
