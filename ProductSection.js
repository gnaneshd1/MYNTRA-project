import React , { useEffect , useState } from 'react' ;
import ProductItem from './ProductItem'

function ProductSection() {

let [products , setProducts] = useState([]) ;
 let getproducts = () => {
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setProducts(data))
  .catch(error => console.error('Error fetching products:', error));
 }
 useEffect(getproducts,[])

return (<>
            <div className="container bg-white">
                <div className="row">
                     {products.map(product =>
                     <ProductItem key={product.id} product={product} />)}
                </div>
            </div>
        </>
  );
}

export default ProductSection