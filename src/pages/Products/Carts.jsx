import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeQuantityAction, delItemAction } from '../../redux/reducers/shopReducer';


export default function Carts(props) {

    const { cart } = useSelector(state => state.shopReducer);
    const dispatch = useDispatch();

    return (
        <>
            <h3>Carts</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>name</th>
                        <th>image</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td><img src={item.image} width={50} /></td>
                            <td>{item.price}</td>
                            <td>
                                <button className='btn btn-outline-primary mr-2' onClick={() => {
                                    const itemQuantity = {
                                        id: item.id,
                                        quantity: 1
                                    }
                                    const action = changeQuantityAction(itemQuantity);
                                    /*
                                        action = {
                                            type: "shopReducer/changeQuantityAction",
                                            payload: {
                                                 id: item.id,
                                                 quantity: 1
                                            }
                                        }
                                    */


                                    dispatch(action);

                                }}>+</button>
                                {item.quantity}
                                <button className='btn btn-outline-primary ml-2' onClick={() => {
                                    const itemQuantity = {
                                        id: item.id,
                                        quantity: -1
                                    }
                                    const action = changeQuantityAction(itemQuantity);
                                    

                                    dispatch(action);
                                }}>-</button>
                            </td>
                            <td>{item.quantity * item.price}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => {
                                    const action = delItemAction(item.id);
                                    // console.log(first)
                                    // debugger;
                                    dispatch(action);

                                }}>Del</button>
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>

        </>
    )
}
