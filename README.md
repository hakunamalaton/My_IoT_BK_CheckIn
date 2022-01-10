# vaccination-info-management-system
A vaccination info management system for HCMUT


Reqs Doc: https://docs.google.com/document/d/1pXNn_Yv_a9ySRqS4RHoC19OlIzG-7vrH8cP-EptUhpw/edit?usp=sharing


#### 
Danh sách các giao diện trên Web App quản lý

1
Khung giao diện quản lý (vd: Admin LTE)
( header, navigation, menu,..)

Menu chức năng bên trái:
  Cán bộ/ Sinh Viên
    Thông tin cá nhân
  Cán bộ quản lý
    Quản lý thông tin phản hồi
    Tra cứu cá nhân
    Tra cứu nâng cao
    Quản lý máy IoT
    Quản lý cấu hình
Role: CBQL; CB/SV


2
Nhóm các giao diện Xác thực:
  Đăng nhập; 
  Đăng xuất; 
  Đổi mật khẩu
Role: CBQL; CB/SV


3
Giao diện thông tin cá nhân:
 Bao gồm 2 phần
  + Thông tin cá nhân (họ lót  (string), tên  (string), cmnd so  (string), cb_sv_flag (string), cb_sv_ma (string), sdt (string), email, thông tin vx (string) ; lastupdatetime; diachilienlac (string)
  + List các địa điểm đã check-in: thời gian  (string); vị trí  (string); nhiệt độ (float) ; khẩu trang  (string); vắc xin  (string)  - Hỗ trợ paging
  + Nút phản hồi: cho phép người dùng phản hồi khai báo thông tin tiêm vacxin và thông tin cá nhân nếu có sai sót.
Role: CB/SV


4
Giao diện qly thông tin phản hồi
  Cho phép CBQL xem danh sách các phản hồi về thông tin bị sai.
  Hiển thị danh sách các feedback của CB/SV/Guest
  View detail 1 thông tin feedback
  Ở view detail sẽ có nút “Duyệt” thông tin. (Khi duyệt, thông tin sẽ được update vào table user_info)
Role: CBQL


5
Giao diện tra cứu cá nhân
Input: 
option Nhập mã cb/sv hay cmnd (radio)
textbox mã cb_sv/ cmnd
Button: “Search”.
Output: 
   Thông tin danh tính ; 
   List of thông tin check-in
Role: CBQL


6
Giao diện tra cứu nâng cao
Input: nhập 
Thời gian BĐ - Thời gian BĐ (datePicker)
Chọn Ds máy IoT ( select2 multiple)
Button “Search”
Output: list of thông tin check-in  (mã cb/sv, cmnd, hoten, địa điểm check-in; thời gian check-in; nhiệt độ; khẩu trang) 
→  hỗ trợ paging
→ box search trên list kết quả đã trả về.
           → Sau khi search, người dùng có thể export data (*.xlsx)


Role: CBQL


7
Giao diện CRUD Cấu hình  (table iot_confif_common)
# id, config_group, config_code, config_value, ghi_chu, last_updated_time
Role: CBQL


8
Giao diện CRUD Máy IoT  (table iot_bot)
# id (int), ma  (string), ten  (string), vitri  (string), ghichu  (string)
, cauhinh (json_string), use_cauhinh_chung_flag (checkbox)
, tinhtrang (string)
, username (string), password (string)


Role: CBQL


# BACKEND

## build
1 
After pulling code from git, you must cd to **backend** folder then command **npm install** to install node modules.

2
In /backend/src/config/db/index.js has some fields such as host, user, password. You should to edit these fields.

3
In /backedn/src/index.js, the snippet code run on localhost:3000 so you should change these information

## run
1
In backend directory, you command **npm start**. Your code then run on the server that you setup in build step. If **Success!** appear in the terminal, you connect to database successfully.

2
To test example API and for that code, you can command **https://localhost:3000/get_user_info/v1/date=2021-25-12&time=19:00:00** to check for API 1. The host name must be editted to suitable for your code.

3
After typing, your browser then return an array of object whom visit school after this time.
