import { useState } from "react"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ProductList from "./components/ProductList"

function App() {
  //  npx json-server -w data/products.json -p 3500

  const [viewCart, setViewCart] = useState<boolean>(false);
  const pageContent = viewCart ? <Cart /> : <ProductList />;

  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </>
  )

  return content
}

export default App
