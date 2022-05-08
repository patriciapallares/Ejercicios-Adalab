// importar las librerías para trabajar con testing

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import { BrowserRouter } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import localStorage from '../services/localStorage'

// comprobar que la aplicación tiene un nombre específico

test('Test Name App', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // const element = screen.getByText('Aplicación de Película')

  // de esta manera decimos que es un string mayus o minus:
  const element = screen.getByText(/Aplicación de Película/i);
  expect(element).toBeInTheDocument();
});

// comprobar que en el formulario estén los elementos Nombre
test('Testing Label Name', () => {
  render(<MovieForm></MovieForm>);
  const element = screen.getByLabelText(/Nombre/i);
  expect(element).toBeInTheDocument();
});

// comprobar que tenemos el enlace de Listado de películas
test('Testing Link Menu', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const element = screen.getByText(/listado de películas/i);
  // incorrecto: Link & to
  // expect(element).toHaveAttribute('to','/movies/list')
  // Correcto: a & href
  expect(element).toHaveAttribute('href', '/movies/list');
  // otra opción: 
  // expect(element.href).toBe('http://localhost/movies/list')
});

// comprobar que el código de ls funcione correctamente
test('Testing Local Storage get', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const result = localStorage.get('movies', [])
  expect(result).toEqual([]);
})