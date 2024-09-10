## reducer

# init state 
// const [count, setCount] = useState(0);
const [items, setItems] = useState([]);
const initState = 0; // number
const initState2 = []; // array
# action
const UP_ACTION = "up";
const DOWN_ACTION = "down";
// thêm sản phẩm
const ADD_ACTION = "add";

// update số lượng
const UPDATE_ACTION = "update";

// xóa sản phẩm
const DELETE_ACTION = "delete";

// Thực chất là 1 cái hàm -> Hoạt động dựa trên nhận đầu vào là state và action 
// Trả về 1 state mới
# Ví dụ: 
# reducer
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error("Invalid action");
    }
}

# useReducer
const [count, dispatch] = useReducer(reducer, initState);

# dispatch



## React-route-dom
- bộ định tuyến -> thực thi trên dom ảo -> không cần refresh lại trang

// 1 install (npm i react-router-dom)
// 2 khai báo
// 3 sử dụng


// Dùng thẻ Link để chuyển hướng trang
+ Chúng ta phải bọc router rồi

// <Outlet>