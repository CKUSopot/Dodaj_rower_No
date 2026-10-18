import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import List from './components/List';
import Stats from './components/Stats';
import rowery from './assets/rowery.json';

function App() {
  const [listaRowerow, setListaRowor] = useState(rowery);

  function dodajNowyRower(nowyRower) {
    setListaRowor((prevState) => [...prevState, nowyRower]);
  }

  return (
    <>
      <Form add={dodajNowyRower} />
      <List list={listaRowerow} />
      <Stats list={listaRowerow} />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
