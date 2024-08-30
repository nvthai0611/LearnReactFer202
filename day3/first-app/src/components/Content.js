import React, { useContext } from "react";
import NavBar from "./NavBar";
import MyContext from "./provider/Context";

function Content( {...args} ) { // 1 object {hello}
  const { count, setCount, products, setProducts } = useContext(MyContext);
  const {hello} = args;
  return (
    <div>
      <h1>Content của count: {args.hello}</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((pro, index) => (
            <tr>
              <td scope="row">{pro.name}</td>
              <td>{pro.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <NavBar hello={hello}/>
    </div>
  );
}

export default Content;
