import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ProductsData from './ProductsData';
//import ProductsDetails from './ProductsDetails';
import './Products.scss';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: ProductsData
        } 
    }
    render() {
        return (
            <div className="products">
                <h3 className="products__title">Best Sellers</h3>
                <div className="products__container">
                    {this.state.products.map(product => (
                        <div className="products__container--item" key={product.name} >
                            <Link to={`./products/${product.name}`} >
                                <img className="products__container--item--img" src={product.src} alt={product.name}/>
                            </Link>
                        
                            <Link  to={`./products/${product.name}`} >
                                <h5 className="products__container--item--name">${product.name}</h5>
                            </Link>

                            <Link to={`./products/${product.name}`} >
                                <h4 className="products__container--item--price">${product.price}</h4>
                            </Link>

                            <Link to={`./products/${product.name}/addtocart`} >
                                <button className="products__container--item--cart">ADD TO CART</button>    
                            </Link> 
                        </div>
                    ))}
                  
                    </div> 
            </div>
        )
    }
}

export default Products;



