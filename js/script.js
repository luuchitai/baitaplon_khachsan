// Xử lý lưu thông tin đăng nhập vào LocalStorage
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username && password) {
      localStorage.setItem("username", username);
      alert("Đăng nhập thành công! Xin chào " + username);
    } else {
      alert("Vui lòng nhập đầy đủ thông tin!");
    }
  });
  