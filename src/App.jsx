import "./App.css";

const Container = () => {
  const productData = [
    {
      productName: "iPhone",
      price: "20.000",
      productDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus autem.",
    },
    {
      productName: "Samsung",
      price: "18.000",
      productDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus autem.",
    },
    {
      productName: "Oppo",
      price: "10.000",
      productDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus autem.",
    },
    {
      productName: "Vivo",
      price: "11.000",
      productDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus autem.",
    },
  ];

  return (
    <div className="maine">
      <div className="header">
        <h1>Product Name</h1>
      </div>
      <div className="product-items">
        {productData.map((product, index) => {
          return (
            <div key={index} className="product">
              <h4>Product: {product.productName}</h4>
              <h4>Price: {product.price}</h4>
              <h4>Details: {product.productDetails}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Container />
    </div>
  );
}

export default App;
