import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>🛒 Products from Cloud API</h1>
      <ul>
        {products.map(p => (
          <li key={p._id}>
            {p.name} — ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
