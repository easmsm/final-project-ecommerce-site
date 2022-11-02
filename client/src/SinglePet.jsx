import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PET } from './utils/queries';
import { Link } from 'react-router-dom';
// import Auth from './utils/auth';

const SinglePet = props => {

  const { id: petId } = useParams();
    console.log(petId); 

    const { loading, data } = useQuery(QUERY_PET, {
      variables: { id: petId }
    });
    
    const pet = data?.pet || {};
    
    if (loading) {
      return <div>Loading...</div>;
    }

  return (
    
    <div>
      <h1>{pet.petName}</h1>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {pet.username}
          </span>
        </p>
        <div className="card-body">
         <span>Name:</span> <p>{pet.petName}</p>
          <span>Type:</span><p>{pet.type}</p>
          <span>Breed:</span><p>{pet.breed}</p>
          <Link to="/product" ><button>Go to Products/Services</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePet;