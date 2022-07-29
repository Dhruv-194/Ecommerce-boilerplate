import { wait } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom';
const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("http://localhost:5000/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                Loading....
            </>
        )
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline">All</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className='col-md-3 mb-4'>
                                <div class="card h-100 text-center p-4" key={product.id} >
                                    <NavLink to={`/products/${product.id}`}><img src={product.image} class="card-img-top" alt={product.title} height="250px"/></NavLink>
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0,10)}</h5>
                                        <p class="card-text">${product.amount}</p>
                                        <p class="card-text">{product.rating}</p>
                                        <a to="#" className="btn btn-light mr-5"><i className="fa fa-heart mr-5"></i></a>
                                        <a to="#" className="btn btn-light ml-5"><i  className="fa fa-shopping-cart ml-5"></i></a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )

    }
    return (

        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>PRODUCTS</h1>
                        <hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
}
export default Products;
