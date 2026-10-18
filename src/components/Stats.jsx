function Stats({list}) {
  return (
    <>
      <h1>Statystyki</h1>
      <p>Ilość rowerów: {list.length}</p>
      <p>średnia cena: {
        list.reduce((suma, item) => suma + Number(item.price), 0)/list.length}</p>
    </>
  );
}

export default Stats;
