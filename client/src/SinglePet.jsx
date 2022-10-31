import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PET } from './utils/queries';
// import Auth from '../utils/auth';

const SinglePet = props => {

  const { id: petId } = useParams();
    console.log(petId); 

    const { loading, data } = useQuery(QUERY_PET, {
      variables: { id: petId }
    });
    
    const pet = data?.thought || {};
    
    if (loading) {
      return <div>Loading...</div>;
    }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {pet.username}
          </span>{' '}
        </p>
        <div className="card-body">
          <p>{pet.petName}</p>
          <p>{pet.type}</p>
          <p>{pet.breed}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePet;