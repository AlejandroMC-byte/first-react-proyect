import React from 'react'
import ProductItem from '../components/ProductItem';
import '../styles/Elements.scss'

const Elements = () => {
    return (
      <section className="main-container">
			<div className="ProductList">
				<ProductItem />
			</div>
		</section>
     
    );
}

export default Elements;