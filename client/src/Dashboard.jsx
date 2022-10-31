import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import PetList from './PetList';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from './utils/queries';
// import ProductList from '../components/FriendList';
import PetForm from './PetForm';
// import { ADD_PRODUCT } from './utils/mutations';
import Auth from './utils/auth';

const Profile = () => {

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });
  
  // const [addProduct] = useMutation(ADD_PRODUCT);

  const user = data?.me || data?.user || {};

  // navigate to personal profile page if username is the logged-in user's
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/dashboard" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  // inform user they need to be logged in to see page
  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links above to sign up or log in!
      </h4>
    );
  }

  // const handleClick = async () => {
  //   try {
  //     await addProduct({
  //       variables: { id: user._id }
  //     });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <div>
      console.log('logged in')
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
           Viewing {userParam ? `${user.username}'s` : 'your'} dashboard.
        </h2>
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
        <PetList pets={user.pets} title={`${user.username}'s pets...`} />
        </div>

        {/* <div className="col-12 col-lg-3 mb-3">
        <ProductList
            username={user.username}
            productCount={user.productCount}
            products={user.products}
          />
        </div> */}
      </div>
      {/* only show pet form to user on their dashboard */}
      <div className="mb-3">{!userParam && <PetForm />}</div>
    </div>
  );
};

export default Profile;














