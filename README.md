# Hướng dẫn cho project
// please read it for one time, i wrote this for u guys to make things easier
project có 4 đối tượng, 2 folder là back end với front end
2 đôí tượng còn lại là 2 file gitignore và README

---------------------------------

### README
Là file hiện tại, hướng dẫn những người trong project cách sử dụng git, git hub, workflow
"READ - ME" aka hãy đọc tôi đi.

### .Gitignore

"Git - ignore" là những file sẽ bị bỏ qua trong quá trình dev, hiện tại dùng node nên khi cần dùng không cần commit những file build ( ..._lock.json, nodemodules ). 

---------------------------------
### Update code với nhánh main, có thể tạo nhánh mới từ nhánh main nếu conflict quá nhiều
---------------------------------
# Clear cache để clear file thừa 
Mở vs code trong thư mục project, chọn nhánh git cá nhân, copy và chạy những dòng lệnh sau đây trong vscode terminal
##### `git -rm -r --cached .`
##### `git add .`
##### `git commit -m 'commit message bất kỳ'`

----------------------------------
# Front end
Sau bước clear cache, nhập vào terminal (window = console/`window terminal`) những câu lệnh sau 
##### `cd .\front_end\`
##### `npm install`
##### `npm start`

------------------------
# Back end
Sau bước clear cache, lần này nếu muốn start backend thì thực hiện những câu lệnh sau
##### `cd .\back_end\`
##### `python -m venv env`
##### `.\env\Scripts\activate`
##### `pip install -r .\requirements.txt`
##### `pip install fastapi`
##### `pip install pydantic_settings`
##### `pip install pymongo`
##### `pip install passlib`
##### `pip install bcrypt`

Sau khi thực hiện những bước trên, từ giờ trở đi chỉ cần thực hiện những câu lệnh sau thì project có thể chạy
##### `cd .\back_end\`
##### `.\env\Scripts\activate`
##### `python -m uvicorn main:app --reload`

Ghi chú
--------------------
Câu lệnh `cd` dùng để change directory, sau những câu lệnh cd, chú ý xem path hiện tại có đúng hay chưa, nếu như chưa đúng thì phải cd lại cho đúng. Trên terminal sẽ thấy path 

![alt text](https://github.com/khanhha112003/Pop4u_Group2/blob/main/terminal_img.png)
