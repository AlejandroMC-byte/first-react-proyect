import React from 'react'
import ProductItem from '../components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import '../styles/Elements.scss'

const API ='https://api.escuelajs.co/api/v1/products';

const Elements = () => {
	const products = useGetProducts(API);
    return (
      <section className="main-container">
			<div className="ProductList">
				{products.map(product =>(
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		</section> 
    );
}

export default Elements;