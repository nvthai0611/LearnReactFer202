### tạo dự án reactjs:
- khi chưa có folder chứa  package.json
- npx create-react-app ten-du-an

## cài thêm thư viện 
npm i then-thu-vien
vd: npm i bootstrap react-bootstrap


## Function components
- Component được tạo bằng 1 function
- Khi re-render -> chạy lại hàm component(chạy lại hết ) = render dữ liệu chajyu lại hết component

## react hook
- Không có săn các thành phần: state, lifecycle,... -> khắc phục bằng cách sử dụng Hook (hàm đặc biệt)

## hook là gì

- hook là 1 hàm đặc biết do react nó build sẵn

- bắt đầu bằng từ khóa use (useState, useEffect)
- Chỉ được gọi hook ở trong function component (Không thể gọi được ở class, event handler, hoặc bất kì hàm con nào trong function)

## props 
- là đối số truyền qua hàm nhận đối số


## useState- -> Hook lưu trữ cũng như chập trạng thái cho tham số

- useState: trạng thái ban đầu
            Hàm xử lí thay đổi trạng thái (khai báo giá trị ban đầu của trạng thái)

            - Sử dụng sự kiện để thay đổi trạng thái


## Khái niệm quan trọng
- Khi state thay đổi -> component sẽ re-render



### useContext -> thay thế cho props 
- Các bước tại 1 context 
- khai báo context
- triển trai Provider (cung cấp data);
- Nhận data về


### useEffect( callback , dependence) -> mô phỏng lại vòng đời của 1 functional component
1. useEffect (callback) // không dùng
2. useEffect (callback, dependence) // khi muốn tìm kiếm data thông qua 1 biến,.....
2. useEffect (callback, []); // thường dùng khi restApi -> lấy data từ api xuống

## thứ tự xử lí
1. khi state thay đổi -> component re-render -> chạy lại 1 lần
2. khi UI update 
3. cleanup -> timer -> đến giây
4. chạy callback trong useEffect


