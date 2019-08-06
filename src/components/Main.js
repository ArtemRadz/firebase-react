import React, { useState, useEffect, useRef } from 'react';

import { css } from '@emotion/core';

import { database } from '../firebase/firebase';

import Auth from './Auth';
import User from './User';
import Form from './Form';
import Restaurants from './Restaurants';

const Main = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingState, setLoadingState] = useState(true);
  const [restaurants, setRestaurants] = useState(null);

  const restaurantRef = useRef(database.ref('/restaurants'));

  useEffect(() => {
    restaurantRef.current.on('value', restaurants => {
      setRestaurants(restaurants.val());
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
          <User user={currentUser} />
          <Form />
          {restaurants && <Restaurants restaurants={restaurants} />}
        </>
      ) : (
        <Auth
          loadingState={loadingState}
          onAuthStateChanged={setCurrentUser}
          handleLoadingState={setLoadingState}
        />
      )}
    </main>
  );
};

export default Main;
