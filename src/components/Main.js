import React, { useState, useEffect, useRef } from 'react';

import { css } from '@emotion/core';

import { auth, database } from '../firebase/firebase';

import Auth from './Auth';
import User from './User';
import Form from './Form';
import Restaurants from './Restaurants';

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
    <main
      css={css`
        background-color: #19212b;
        color: #4fc3f7;
        padding: 15px;
      `}
    >
      {loadingState && <p>Loading...</p>}
      {currentUser ? (
        <>
          <User {...currentUser} />
          <Form restaurantRef={restaurantRef} />
          {restaurants && <Restaurants restaurants={restaurants} />}
        </>
      ) : (
        <Auth loadingState={loadingState} />
      )}
    </main>
  );
};

export default Main;
