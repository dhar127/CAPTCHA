import React from 'react';
import Captcha from './captcha';

export default function Home() {
  return (
    <main style={styles.container}>
      <div style={styles.captcha}><Captcha /></div>
    </main>
  );
}

const styles: {
  container: React.CSSProperties;
  input: React.CSSProperties;
  button: React.CSSProperties;
  captcha?: React.CSSProperties; // Optional if you're using it
} = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: '20px',
    backgroundColor: '#232323',
    fontFamily: 'Arial, sans-serif',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '300px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#44ff00',
    color: '#000000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
