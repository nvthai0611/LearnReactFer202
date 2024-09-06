// Chỉ để quản lí reducer
import { useReducer } from "react";

// Khởi tạo state
export const initState = {
  items: [], // khai báo items trong giả hàng
};

// Khởi tạo action
const ADD_TO_CART = "addtocard";
const DELETE_ITEM = "deleteItem";
const DELETE_ALL = "deleteAll";
// const products =  [
//     {
//         name: 'hải đz',
//         price: 10000000,
//         quantity: 4
//     }
//     // playload : products (hải đz)
// ]
// products.name = "hải cute"
// products.sex = "male"
// let nums = [1,2,3,4,5] = để lấy được value bên trong mảng
// destructoring => [...nums] => nums bao gồm các giá trị (1,2,3,4,5) -=> chỉ copy nội dung
// items ban đầu là rỗng
// const newItem = products[0];
// return [...items, newItem];
// Khởi tạo reducer
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // tìm cái trùng,
      // Update số lượng
      // tìm vị trí
      // const findItem = cần truyền id để tìm sản phầm
      // => biết vị trí ( truy xuất được cái sản phẩm đó {...findItem, quantity: quantiti + 1})
      // action.payload.proId
      const existProduct = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existProduct !== -1) {
        let items = [...state.items]; // phải clone lại bảo toàn dữ liệu
        items[existProduct] = {
          // giữ lại giá trị cũ
          ...items[existProduct],
          quantity: items[existProduct].quantity + 1,
        };
        return {
          ...state,
          items: items,
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    // để xóa item,  map () => return cái gì trả về cái đó
    // filter () => return true; => coi như những cái khác cái payload.id là đúng return
    case DELETE_ITEM:
      return {
        ...state,
        // trả về 1 mảng
        // mảng này chỉ chứa những thằng khác thằng id chúng ta gửi
        items: state.items.filter((item) => item.id !== action.payload.id), // return về mảng chứa khác ID cần xóa
      };
    case DELETE_ALL:
      return {
        ...state,
        items: [],
      };
    // case UPDATE_QUANTITY:
    //   return {
    //     ...state,
    //     // trả về 1 mảng
    //     // mảng này chỉ chứa những thằng khác thằng id chúng ta gửi
    //     items: state.items.map((item) =>
    //       item.id === action.payload.id ? item.id.quantity + 1 : ""
    //     ), // return về mảng chứa khác ID cần xóa
    //   };
    // case DELETE_QUANTITY:
    //   return {
    //     ...state,
    //     // trả về 1 mảng
    //     // mảng này chỉ chứa những thằng khác thằng id chúng ta gửi
    //     items: state.items.map((item) =>
    //       item.id === action.payload.id ? item.id.quantity - 1 : ""
    //     ), // return về mảng chứa khác ID cần xóa
    //   };
  }
};

export default reducer;
