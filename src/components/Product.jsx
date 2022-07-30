import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

 const Product = () => {
    const{id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () =>{
            setLoading(true);
            const response = await fetch(`http://localhost:5000/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, [])
    

    const Loading = () =>{
        return (
            <>
            Loading ...
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
            <div className='col-md-6' style={{borderRight:'6px green'}}>
                <img src={product.image} alt={product.title} height="400px" width ="300px"/>
            </div>
            <div className='col-md-6'>
                
                <h1 className='display-5'>{product.title}</h1>
                <p className="lead fw-bolder"> 
                Rating {product.rating}
                <i className='fa fa-star'></i>
                </p>
                <h3 className='display-6 fw-bolder my-4'>
                    ${product.amount}
                </h3>
                <p className="lead">{product.description}</p>
                <button className='btn btn-outline-dark px-4 py-2'>
                    Buy Now
                </button>
                <button className='btn btn-dark ms-2 px-3 py-2'>
                Add to Basket
                </button>
            </div>
            </>
        )
    }

  return (
    <div>
            <div className="container">
                <div className="row py-5">
                   {loading ?<Loading/> : <ShowProduct/>} 
                </div>
            </div>
    </div>
  );
}
export default Product;