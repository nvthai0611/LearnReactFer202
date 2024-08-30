import React, { useContext, useEffect, useState } from 'react'
import MyContext from './provider/Context'

function LearnUseEffect() {
    const {products} = useContext(MyContext);
    const [productSearch , setProductSearch] = useState([]);
    const userId = 1;
    useEffect(() => {
        // tìm product cần tìm 
        const listSearch = products.filter((pro) => pro.userId === userId);
        if(listSearch.length){
            setProductSearch(listSearch);
        };
        console.log("Check dependence");
        
    }, [userId]); // khi nào dependence thay đổi thì useEffect mới được chạy
    console.log(products);
    console.log(productSearch);
  return (
    <div>
        {
            productSearch.map((pro, ind) => (
                <div key={pro.id}>
                    <h4>{pro.title}</h4>
                </div>
            ))
        }
    </div>

  )
}

export default LearnUseEffect