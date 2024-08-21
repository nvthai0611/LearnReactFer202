
// Tính chất hoisting trong js (Đưa lên trước)

// java,.... => chạy tuần tự
// let và const đều có cơ chế hoisting => chết trước khi in ra
// Function declaration 
// console.log(sum(1,3));

// function sum(a, b) {
//     return a + b;
// }

// // expression function
// const sum = function () {
//     console.log();
// }

// // arrow function 
// const sum = () => {

// }

// 2. filter( callback ) => return về 1 mảng 
/*
 - Chỉ trả về những return true => mọi người coi cái gì là true thì hàm sẽ trả về cái đó
*/

// let users = ["hải", "hùng", "vy", "mạnh", "duy anh", "anh cute"];

// arrow function
// tìm sản phẩm có id = 2 
// rất quan trọng, reactjs nó dùng rất nhiều

// truthy, falsy 
// cứ khác falsy thì auto là truthy
// falsy :  "", 0, null, undefine, NaN, false
// let idSearch = NaN;
// let searchPro = products.filter((pro, _) => {
//     return idSearch;
// });

// console.log(searchPro);

// Callback => 1 function
//3. reduce( callback, initalvalue)
/*
- trong callback => 2 giá trị (có thể đặt tên tùy ý theo định dạng)
callback( prevValue , currentValue ) => hàm reduce luôn RETURN PREV
                            current => phần tử hiện tại sau mỗi lần lặp
- INITALVALUE => thường sẽ là 0 hoặc [];
- Nguyên tắc:
+ output của lần lặp trước sẽ là input của lần lặp sau
--> giống bài toán tính tổng (Mỗi lần lặp thì giá trị tổng thay đổi)

- Các trường hợp:
TH1:  KHÔNG CÓ INITALVALUE 
    - prevValue mặc định sẽ là phần tử mảng đầu tiên
    vd: [1,2,3,4] => prev = 1, curr = 2
    - prevValue của lần lặp sau sẽ là return của lần lặp trước (prev)
    - số lần lặp sẽ giảm đi 1
TH2: CÓ INITALVALUE 
    - prevValue sẽ lấy initalValue làm giá trị ban đầu
    - prevValue của lần lặp sau sẽ là return của lần lặp trước
    - số lần cũng sẽ giảm đi 1

*/

// let check = products.reduce((total, pro) => {
//     // prev = phần tử đầu tiên của mảng
// });

// let check = products.reduce((total, pro) => {
//     // prev là 1 mảng 
//     return total;
// }, 0);
// console.log(check);
// let numbers = [100, 5, 10, 11, 12, 67];
// let results = numbers.reduce((prev, current) => {
//     console.log(prev, current);
//     //         0         100
//     //          
//     return current;
// }, 0); // prev ban đầu
// console.log(results);

// tính tổng các phần tử có trong mảng 
let productsOfVy = [
    {
        id: 1,
        name: "product 1",
        quantity: 1,
        price: 4
    },
    {
        id: 2,
        name: "product 2",
        quantity: 2,
        price: 4
    },
    {
        id: 3,
        name: "product 3",
        quantity: 3,
        price: 4
    },
    {
        id: 4,
        name: "product 4",
        quantity: 4,
        price: 4
    },
]
// // tính tổng tiền lượng hàng mà mình có ;
// let total = productsOfVy.reduce((total, pro) => {
//     return total + (pro.quantity * pro.price);
// }, 0);
// console.log(total);

// 4,5. find( callback ) => trả về cho 1 đối tượng Object đầu tiên
//      findLast ( callback ) => trả về thằng cuối cùng
// chỉ lấy những thằng có id = 1 , tìm thằng đầu tiên
// let productMatch = productsOfVy.findLast((pro) => pro.id !== 1);
// console.log(productMatch);

// 6,7 findIndex , findLastIndex ( callback ) => trả về vị trí của thằng muốn tìm
let indexMatch = productsOfVy.findLastIndex((pro) => pro.id === 5);
// áp dụng cho những bài trong 1 mảng product 
// có thằng nào trùng => không thêm nó nữa , không trùng => thêm nó 
if(indexMatch !== -1){
    console.log(" có sản phẩm trong đó");
    // logic
} else {
    console.log("không có sản phẩm");
    // logic
}
// làm bài tập 
// ai xung phong

// 5. flatMap( callback ) trải mảng => trả về 1 list (JSON)
 let numbers = [1, 2, 3, [2, 4], [7, 10, [12 , 16]]];

 // trải mảng này ra [ 1, 2 , 3, 2, 4, 7, 10, 12, 16];
// genres = [Comedy, Action, Cartoon, Drama]
 let movies = [
    {
      "id": 1,
      "title": "Keeping Up with the Steins",
      "release": "2024-05-10",
      "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      "producer": 5,
      "director": 1,
      "genres": [
        "Comedy",
        "Action"
      ],
      "stars": []
    },
    {
      "id": 2,
      "title": "Quartet",
      "release": "2024-05-25",
      "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
      "producer": 1,
      "director": 2,
      "genres": [
        "Comedy",
        "Cartoon",
        "Action"
      ],
      "stars": [
        2,
        "3",
        3,
        1
      ]
    },
    {
      "id": 3,
      "title": "This Boy's Life",
      "release": "2024-05-28",
      "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
      "producer": 2,
      "director": 5,
      "genres": [
        "Drama",
        "Comedy"
      ],
      "stars": [
        3,
        2,
        1
      ]
    },
    {
      "id": 4,
      "title": "Each Dawn I Die",
      "release": "2024-05-03",
      "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      "producer": 4,
      "director": 2,
      "genres": [
        "Cartoon"
      ],
      "stars": [
        1,
        2
      ]
    },
    {
      "id": 5,
      "title": "Green Slime, The",
      "release": "2024-05-07",
      "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
      "producer": 1,
      "director": 2,
      "genres": [
        "Action",
        "Comedy"
      ],
      "stars": [
        4,
        1,
        6,
        3,
        5
      ]
    },
    {
      "id": 6,
      "title": "Unknown Known, The",
      "release": "2024-05-14",
      "description": "Nullam sit amet turpis elementum ligula vehicula consequat.",
      "producer": 4,
      "director": 4,
      "genres": [
        "Action"
      ],
      "stars": [
        5,
        4,
        2,
        3
      ]
    },
    {
      "id": 7,
      "title": "Bigger Than Life",
      "release": "2024-05-07",
      "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula",
      "producer": 3,
      "director": 4,
      "genres": [
        "Cartoon",
        "Comedy"
      ],
      "stars": [
        2,
        1,
        3
      ]
    },
    {
      "id": 8,
      "title": "October",
      "release": "2024-05-18",
      "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "producer": 4,
      "director": 5,
      "genres": [
        "Drama",
        "Comedy"
      ],
      "stars": [
        5,
        6,
        2,
        4,
        3,
        1
      ]
    },
    {
      "id": 9,
      "title": "Behind the Screen",
      "release": "2024-05-26",
      "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius.",
      "producer": 4,
      "director": 6,
      "genres": [
        "Drama"
      ],
      "stars": [
        3,
        5,
        6,
        4,
        1,
        2
      ]
    },
    {
      "id": 10,
      "title": "Screamers",
      "release": "2024-05-24",
      "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula.",
      "producer": 2,
      "director": 3,
      "genres": [
        "Drama",
        "Cartoon"
      ],
      "stars": [
        1,
        5,
        3,
        4,
        6
      ]
    }
  ]
    // let traiMang = movies.flatMap((mov) => {
    //     return mov.genres.map(gen => gen); // mảng [comedy, action]
    // });
    // console.log(traiMang);
    // mình muốn các giá trị trùng lặp biến mất (reduce => O(n))
    // Set => lọc các giá trị trùng nhau
    
    // destrutoring => lấy các giá trị có trong 1 phương thức 
    // ví dụ cần chuyển ngày/tháng/năm => năm/tháng/ngày (không dùng locationString)
    // 24/7/2023 - bất kì định dạng ngày nào cũng chơi tất
    // const formatDate = (dateString) => {
    //     // destructoring để chuyển đổi ngày 
    //     const [ngay , thang , nam] = dateString.split("/");
    //     return `${thang}/${nam}/${ngay}`;
    // }
    // // 
    // console.log(formatDate("24/7/2023"));

    // spread => copy value
    // let a = [1,2,3,4,5,6,7];
    // let b = [2,4,5,6,7,8];
    // // ghép 2 mảng thành 1 => [1,2,3,4,5,6,7, 2,4,5,6,7,8];
    // // code lâu
    // let ab = [...a,...b];
    // console.log(ab);
    // console.log(...a);
    // áp dụng trong function
    function CheckSpread(a, b, c, ...args) {
        console.log(a,b,c);
        args[1]();
    }

    CheckSpread(1,2,3,function(){
        console.log("log");
    }, function() {
        console.log("log2");
    });
    


