## reducer

# init state 
const initState = 0;
# action
const UP_ACTION = "up";
const DOWN_ACTION = "down";
 
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


