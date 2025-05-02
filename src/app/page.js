'use client';
import React, { useState } from 'react';
import { Button, Typography, Container } from '@mui/material';
import { auth, provider, signInWithPopup } from '../../firebaseConfig.js'

export default function Page() {
  const [user, setUser] = useState(null);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Google Sign-In</Typography>
      {user ? (
        <>
          <Typography>Welcome, {user.displayName}</Typography>
          <img src={user.photoURL} alt="Profile" style={{ width: 80, borderRadius: 10 }} />
        </>
      ) : (
        <Button variant="contained" onClick={handleGoogleLogin}>
          Sign in with Google
        </Button>
      )}
    </Container>
  );
}
