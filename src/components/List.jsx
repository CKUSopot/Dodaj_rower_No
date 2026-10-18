import { useState } from 'react';

function List({ list }) {
  //const [listaRow, setListaRow] = useState(list);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Lista rowerów</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nazwa</th>
                <th scope="col" Kolor></th>
                <th scope="col">Cena</th>
                <th scope="col">Rodzaj</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.color}</td>
                  <td>{item.price}</td>
                  <td>{item.model}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default List;
