import React, { useContext } from 'react'
import AppContext from '../provider/Context'
import { Link } from 'react-router-dom';

function ListProducts() {
    const {sampleProducts, dispatch, state} = useContext(AppContext);
    const {items} = state;
  return (
    <div className='col-md-9'>
        <h1>List Products</h1>
        {/* Link -> chuyển hướng trang */}
        <p><Link to={'/cart'}>Cart: [{items.length}]</Link></p>
        <div style={{display: 'flex', justifyContent:'space-around'}}>
        {
            sampleProducts.map((p) => (
                <div style={{marginRight: '20px'}} key={p.id}>
                    <div>
                        <img src="https://picsum.photos/100/100"/>
                        <p>{p.name}<span style={{color: 'red'}}>{p.label}</span></p>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <p>{p.description}</p>
                        <p style={{color: 'green'}}>{p.price}</p>
                    </div>
                    <button onClick={() => dispatch({
                        type: "addtocard",
                        payload: p
                    })} className='btn btn-primary'>ADD</button>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default ListProducts