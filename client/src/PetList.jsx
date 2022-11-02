import React from 'react';
import { Link } from 'react-router-dom';


const PetList = ({ pets, title }) => {

  if (!pets.length) {
    return <h3>No Pets Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {pets &&
        pets.map(pet => (
          <div key={pet._id} className="card mb-3">
            <p className="card-header">
            <Link
                to={`/dashboard/${pet.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
            >
                {pet.username}
            </Link>{''}
            </p>
            <div className="card-body">
            <Link to={`/pet/${pet._id}`}>
                <p>{pet.petName}</p>
                <p>{pet.type}</p>
                <p>{pet.breed}</p>
            </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PetList;