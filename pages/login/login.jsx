import React, { useState } from 'react';
import { auth } from '../../firebaseConfig';
import { Container, Form, Button } from 'react-bootstrap';
import styles from './Login.module.css'; // Importa el CSS Module


function StaticExample() {
    const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
      
        const handleLogin = async (event) => {
          event.preventDefault();
          try {
            // Usar auth para iniciar sesión
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            console.log("Usuario autenticado:", userCredential.user);
            // Aquí puedes redirigir al usuario o manejar el estado de autenticación
          } catch (error) {
            console.error("Error de autenticación:", error.message);
            // Manejar errores de autenticación aquí
          }
        };
  return (
    <Container className={styles.container}>
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={StaticExample}>
          Iniciar Sesion
        </Button>
      </Form>
    </Container>
  );
}

export default StaticExample;