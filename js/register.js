function validateForm(){
  var userName=document.getElementById('registerUserName').value;
  var registerPassword=document.getElementById('registerPassword').value;
  var registerNum=document.getElementById('registerNum').value;
  var registerId=document.getElementById('registerId').value;

  var userNameRe = /^1\d{10}$/;
  var registerPasswordRe = /^[a-z0-9_-]{6,18}$/;
  // 验证码：4位数字
  var registerNumRe = /\d{4}/;
  // ID：6位数字
  var registerIdRe = /\d{6}/;

  if(userName == ""){
     alert("账号不能为空");
     return false;
   }

  if(registerPassword == ""){
    alert("密码不能为空");
     return false;
   }

  if(registerNum == ""){
    alert("验证码不能为空");
     return false;
   }

  if(registerId == ""){
    alert("推荐人ID不能为空");
     return false;
   }

  if( userNameRe.test(userName) && registerPasswordRe.test(registerPassword) && registerNumRe.test(registerNum) && registerIdRe.test(registerId)) {
    // 添加产生动画的类名
    document.getElementById('register-btn-input')["className"] = "register-btn-ani";
    return true;
  } else {
    alert("格式错误，请检查");
    return false;
  }

}

//alert弹出层
window.alert = function(name){
    //创建一个大盒子
    var box = document.createElement("div");
    var back = document.createElement("div");
    //创建一个关闭按钮
    back.id = "backg";
    document.body.appendChild(back);
    var button = document.createElement("div");
    //定义一个对象保存样式
    box.id="alertbox";
    //把创建的元素添加到body中
    document.body.appendChild(box);
    //把alert传入的内容添加到box中
    if(arguments[0]){
        box.innerHTML = arguments[0];
    }
    button.innerHTML = "确定";
    //定义按钮样式
    button.id="alertbutton";
    //把按钮添加到box中
    box.appendChild(button);
    //给按钮添加单击事件
    button.addEventListener("click",function(){
        document.body.removeChild(box);
        document.body.removeChild(back);//每次点击需要移除子元素，不然呵呵哒
    })
};


