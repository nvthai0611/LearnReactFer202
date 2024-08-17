console.log("vòng lặp");

let users = ["Hải", "Huy", "Minh", "Vy", "Hà"];
console.log(users);

// 1. fill() cập nhật tất cả các phần tử của mảng thành 1 giá trị
// users.fill("hello");
// console.log(users);

//2. forEach( callback )  Duyệt qua từng phần tử và trả về element, index trong callback
// không thể dừng được vòng lặp

// dùng callback trong es5 => function ẩn danh
// users.forEach(function (user, index) {
//     if(index == 1){
//         return;
//     }
//     console.log(user, index);
// });

// cú pháp es6 => chính là cú pháp của reactjs
// arrow function  (element, index) => {} là 1(callback)
// users.forEach((user, index) => {
//     console.log(user, index);
// })

//3. map(callback)  duyệt qua từng phần tử trong mảng, trả về element, index, trong callback
/*
- Trả về 1 mảng mới chính là return trong callback
- Số lượng phần tử của mảng mới bằng số lượng phần tử của mảng ban đầu
- Sử dụng để giải quyết các bài toán về render dữ liệu lên trên giao diện
 */

// let newArray = users.map((user, index) => {
//     console.log(user, index);
//     return `<h1>${user} - ${index}</h1>`;
// });
// document.write(newArray);

// bài tập: thực hành giao diện sau
let arrContent = [
  {
    imgSrc: "https://picsum.photos/200",
    title: "Content 1",
    content: "Lorem ipsum, dolor sit amet consecte",
  },
  {
    imgSrc: "https://picsum.photos/200",
    title: "Content 2",
    content: "Lorem ipsum, dolor sit amet consecte",
  },
  {
    imgSrc: "https://picsum.photos/200",
    title: "Content 3",
    content: "Lorem ipsum, dolor sit amet consecte",
  },
];

let content = `
    ${
      // callback, element + index
      arrContent.map(function (cont, index) {
        return `<div class="total ${(index + 1) % 2 === 0 ? 'right-content' : ''} ">
<div>
  <img src=${cont.imgSrc} alt="ảnh đẹp" />
</div>
<div>
  <h1>${cont.title}</h1>
  <p>
        ${cont.content}
  </p>
</div>
</div>`;
      }).join('')
    }
`;

document.write(content);


//4. some( callback ) 
/*
- Giá trị của hàm some => true hoặc false 
- Trả về true nếu: có ít nhất 1 lần lặp return true
- ví dụ; tìm trong hàm có số lẻ hay không
[1,2,3,4,5,6] => true;
- Vòng lặp sẽ chạy tới khi có return true;
*/

let numbers = [1,3,1,5,1];
// kiểm tra xem trong mảng number có số lẻ không
// let check = numbers.some((num, index) => {
//     if(num % 2 !== 0){
//         console.log(num);
//         return true;
//     }
// })
// console.log(check);

// 6. every( callback ) 
/*
- trả về true / false 
- trả về true nếu tất cả trả về true
- trả về false nếu 1 phần tử ko return true
*/
// kiểm tra xem tất cả có phải số lẻ không
let check = numbers.every((num, index) => {
    if(num % 2 !== 0){
        console.log(num);
        return true;
    }
})
console.log(check);