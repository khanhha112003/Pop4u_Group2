# Hướng dẫn cho project

project có 4 đối tượng, 2 folder là back end với front end
2 đôí tượng còn lại là 2 file gitignore và README

----------

#### README
Là file hiện tại, hướng dẫn những người trong project cách sử dụng git, git hub, workflow
"READ - ME" aka hãy đọc tôi đi.

#### .Gitignore
"Git - ignore" là những file sẽ bị bỏ qua trong quá trình dev, hiện tại dùng node nên khi cần dùng không cần commit những file build ( ..._lock.json, nodemodules ). 
---------------------------------

# Front end
Sau khi pull code về, mở **vscode trong thư mục `front_end`** (chú ý!!!) sau đó chạy câu lệnh

### `npm install`

Trong trường hợp ai dev mà có thêm package mới vào package.json (mục `dependencies`), install lại sẽ không bị quên

Sau đó chạy tiếp câu lệnh

### `npm start`

Để chạy project, để xem project chạy thì `localhost:3000` hoặc `127.0.0.1:3000`

Câu lệnh dưới đây khi mà project hoàn thành đưa lên web real (có địa chỉ đàng hoàng ~~ www.google.com) thì mới xài

### `npm run build`


------------------------
# Back end

Going to write sth here soon ok