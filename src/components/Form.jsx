import { useState } from 'react';

function Form({ add }) {
  const [rower, setRower] = useState({
    name: '',
    price: 0,
    color: '',
    model: '',
  });
  const handleChange = (event) => {
    setRower((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nowy = {
      ...rower,
    };
    add(nowy);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1>Dodaj rower</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="nazwaRoweru" className="form-label">
                #
              </label>
              <input
                type="number"
                name="numer"
                id="numerRoweru"
                value={rower.id}
                className="form-control"
                onChange={handleChange}
                unselectable
              />
            </div>
            <div className="form-field">
              <label htmlFor="nazwaRoweru" className="form-label">
                Nazwa roweru
              </label>
              <input
                type="text"
                name="name"
                id="nazwaRoweru"
                value={rower.name}
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="modelRoweru" className="form-label">
                Model roweru
              </label>
              <input
                type="text"
                name="model"
                id="modelRoweru"
                value={rower.model}
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="kolorRoweru" className="form-label">
                Kolor roweru
              </label>
              <input
                type="text"
                name="color"
                id="kolorRoweru"
                value={rower.color}
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="cenaRoweru" className="form-label">
                Cena roweru
              </label>
              <input
                type="number"
                name="price"
                id="cenaRoweru"
                value={rower.price}
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <button type="submit" className="btn btn-primary mt-3 mb-3">
                Dodaj rower
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
