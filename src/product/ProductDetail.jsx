import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShouldRender from '../util/ShouldRender';
import ProductItem from './ProductItem';

// functional components 16.x
// legacy
// migration
// hooks -> useEffect
function ProductDetail() {
    const [product, setProduct] = useState(null);
    const params = useParams();

    // componentDidMount
    useEffect(() => {
        const id = params.id;
        axios.get('https://cgc-node-b1.onrender.com/api/v1/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, []);

    return <ShouldRender when={product}>
        <ProductItem product={product} />
    </ShouldRender>;
}

export default ProductDetail;
