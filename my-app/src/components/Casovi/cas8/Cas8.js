function Cas8() {
  const getData = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <div>
      <button></button>
    </div>
  );
}

export default Cas8;

//moramo da storujemo ceo obj u komponentu i odatle da uzimamo a ne da radimo product.id itd...
