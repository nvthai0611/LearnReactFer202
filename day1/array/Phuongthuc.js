console.log('Mảng');
// int[] arr = new Inter
// khai báo theo ES6
/*
 - let : phạm vi cục bộ
 - const : phục vụ cho cơ chế hositing + không thể thay đổi
*/
// khai báo mảng users
// let users = ["Hải", "Hiền", "Hà", "Dũng", "Huy"];


// Khai báo kiểu khác
// let users = new Array("Hải", "Hiền", "Hà", "Dũng", "Huy"); // ko dùng


// let : phạm vi cục bộ

// 1. làm thế nào để kiểm tra 1 biến có phải là mảng hay không
// tại sao khai báo mảng -> lại ra object
// console.log(typeof users); // object
// console.log(typeof null); // object
// if(Array.isArray(users)){
//     console.log("là mảng");
// } else {
//     console.log("không phải mảng");
// }


// nếu đã là object => có các phương thức cho sẵn 
//2. Duyệt mảng 

// for(let index in users){
//     console.log(users[index], index);
// } // trả về index và user

// for(let user of users){
//     console.log(user);
// }


//3. Xóa mảng 
// Xóa phần tử tên hiền
let users = ["Hải", "Hiền", "Hà", "Dũng", "Huy", "Hải"];
console.log(users);
let indexDelete = 1;
let results = [];
// for(let index in users){
//     if(+(index) === indexDelete){ // parse về number 
//         // +(value); Number(value); parseInt(value);

//         continue; // bỏ qua lần lặp hiện tại 
//     }
//     results[results.length] = users[index];
// };
// console.log(results);

// phép so sánh == và ===
/*
 == : không quan tâm đến kiểu dữ liệu
 === ; so sánh cả kiểu dữ liệu
*/

// 3. splice (index, count) xóa count phần tử từ index

// mạnh 
// users.splice(1,1);
// console.log(users);

//4 concat(arr1, arr2,...)  nối các mảng lại với nhau
// console.log(users.concat([1,2,3,4] , ["x", "y", "z"])); // ["Hải", "Hiền", "Hà", "Dũng", "Huy", 1,2,3,4 , "x", "y", "z"] 
// let setMang = users.concat([1,2,3,4] , [1, 2, 3]);

// // reduce O(n);
// console.log(setMang); 


// // => trải mảng (có những giá trị trùng nhau => loại bỏ giá trị trùng nhau thì ????);

// //4. Set loại bỏ các giá trị trùng nhau
// let mangLoaiBo = [...new Set(setMang)] // O(n^2)
// console.log(mangLoaiBo); // tốc độ cao 


//5. indexOf(value) tìm vị trí xuất hiện đầu tiên của phần tử trong mảng
// console.log(users.indexOf("Hải")); // trả về -1 khi không tìm thấy => !== -1 auto tìm thấy
// if(users.lastIndexOf("Hải") === -1){
//     console.log("đéo có ai là hải chữ thường");
// } else {
//     console.log("có đấy");
// }


//6. lastindexOf(value) tìm vị trí xuất hiện cuối cùng của phần tử trong mảng
console.log(users.lastIndexOf("Hải")); // trả về -1 khi không tìm thấy => !== -1 auto tìm thấy


//7. includes(value)  tìm phần tử trong mảng 
// => chỉ trả về true hoặc false
console.log(users.includes("Hải")); // áp dụng rất nhiều


//8. slice(start, end) =. cắt mảng từ vị trí start => < end // trả về 1 mảng 
console.log(users.slice(0, 3)); 
console.log(users.slice(1));// lấy từ đầu
// giá trị âm
console.log(users.slice(-2)); // lấy từ đít



//9. join() nối các phần tử trong mảng lại thành 1 chuỗi
console.log(users.join(' - '));

// 10. push() thêm phần tử vào cuối mảng, thay đổi mảng ban đầu, trả về số lượng phàn tử sau khi thêm (return về number)
let count = users.push("hải 1", "hải 2", "hải 3");
console.log(count);
console.log(users);


// 11. unshift() thêm phần tử vào đầu mảng 
let count2 = users.unshift("hello 1", "hello", "jello");
console.log(count2);
console.log(users);


//12. xóa phần tử cuối mảng , trả về giá trị phần tử vừa xóa
let value = users.pop();
console.log(value)
console.log(users);
;

//13. shift() xóa phần tử đầu mảng,  trả về giá trị phần tử vừa xóa

let value2 = users.shift();
console.log(value2);
console.log(users);





 


