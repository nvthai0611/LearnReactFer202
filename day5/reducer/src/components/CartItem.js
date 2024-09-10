import React, { useContext } from 'react'
import AppContext from '../provider/Context'
import { Link } from 'react-router-dom';

function CartItem() {
    const {state, dispatch} = useContext(AppContext);
    // state = { items}
    const {items} = state;
  return (
    <div>
        <h1>List Cart Items</h1>
        <p><Link to={'/'}>Back to home</Link></p>
        <div>
            <div className='giaHang'>Gior hàng: {items.length}</div>
            <div style={{display: 'flex'}} className='cart'>
                {
                    items.map((item) => (
                        <div key={item.id}>
                            <h4>Name: {item.name}</h4>
                            <p>Description: {item.description}</p>
                            <p>Price: {item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => dispatch({
                                type: "deleteitem",
                                payload: item
                            })} className='btn btn-warning'>Delete Sản phẩm</button>
                        </div>
                    ))
                }
            </div>
            <button onClick={() => dispatch({
                type: "deleteAll"
            }
            )} className='btn btn-danger'>Clear all</button>
        </div>
    </div>
  )
}

export default CartItem