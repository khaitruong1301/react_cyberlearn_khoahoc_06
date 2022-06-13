import React, { useEffect } from 'react'
import Carts from './Carts'
import ProductItem from './ProductItem'
import { useSelector,useDispatch } from 'react-redux'
import { getAllProductApi } from '../../redux/reducers/shopReducer';

export default function Products(props) {

    let { dataProduct } = useSelector(state => state.shopReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
        const actionThunk = getAllProductApi();
        //dispatch action thunk
        dispatch(actionThunk);
    }, [])

    return (
        <div className='container'>
            <h3>Shoes Shop</h3>
            <Carts />
            <h3 className='mt-2'>
                Product list
            </h3>
            <div className='row'>
                {dataProduct.map((item, index) => {
                    return <div className='col-4 mt-2' key={index}>
                        <ProductItem item={item} />
                    </div>
                })}



            </div>


        </div>
    )
}
