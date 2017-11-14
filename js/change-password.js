function validateForm(){
  var changePassword=document.getElementById('changePassword').value;
  var changePasswordSe=document.getElementById('changePasswordSe').value;
  var changePasswordRe = /^[a-z0-9_-]{6,18}$/;

  if(changePassword == ""){
     alert("密码不能为空");
     return false;
   }

  if(changePasswordSe == ""){
    alert("确认密码不能为空");
     return false;
   }

  if( changePasswordRe.test(changePassword) && changePasswordRe.test(changePasswordRe && changePassword == changePasswordSe)) {
    // 添加产生动画的类名
    document.getElementById('loginBtnInput')["className"] = "login-btn-ani";
    return true;
  } else {
    alert("请输入正确的相同密码");
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




