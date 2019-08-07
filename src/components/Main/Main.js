import React, { useState, useEffect, useRef } from 'react';

import { auth, database } from '../../firebase/firebase';

import Auth from '../Auth/Auth';
import User from '../User/User';
import Form from '../Form/Form';
import Restaurants from '../Restaurants/Restaurants';

import './Main.css';

const Main = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [restaurants, setRestaurants] = useState(null);
  const [loadingState, setLoadingState] = useState(true);

  const restaurantRef = useRef(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoadingState(false);
      restaurantRef.current = database.ref('restaurants');
      restaurantRef.current.on('value', restaurants => {
        setRestaurants(restaurants.val());
      });
    });
  }, []);

  return (
    <main id="main-component">
      {loadingState && <p>Loading...</p>}
      {currentUser ? (
        <>
          <User user={currentUser} />
          <Form restaurantRef={restaurantRef} />
          {restaurants && (
            <Restaurants
              restaurants={restaurants}
              user={currentUser}
              restaurantRef={restaurantRef}
            />
          )}
        </>
      ) : (
        <Auth loadingState={loadingState} />
      )}
    </main>
  );
};

export default Main;
