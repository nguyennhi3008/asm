function submitForm(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var phone = document.getElementById("phone").value;
    var ques = document.getElementById("exampleFormControlTextarea1").value;
    if (name.length === 0) {
        document.getElementById("set").innerHTML = "Xin vui lòng nhập tên !";
    } else if (name.length > 100) {
        document.getElementById("set").innerHTML = "Tên của bạn phải dưới 100 kí tự !";
    } else {
        document.getElementById("set").innerHTML = "";
    }
    if (mail.length === 0) {
        document.getElementById("set1").innerHTML = "Xin vui lòng nhập địa chỉ email !";
    } else if (mail.length > 100) {
        document.getElementById("set1").innerHTML = "Email của bạn phải dưới 100 kí tự !";
    } else {
        document.getElementById("set1").innerHTML = "";
    }
    if (phone.length === 0) {
        document.getElementById("set2").innerHTML = "Vui lòng nhập số điện thoại !";
    } else if (phone.length < 10) {
        document.getElementById("set2").innerHTML = "Số điện thoại của bạn phải lớn hơn hoặc bằng 10 số !";
    } else if (phone.length > 14) {
        document.getElementById("set2").innerHTML = "Số điện thoại của bạn quá dài ! Vui lòng kiểm tra lại số !";
    } else {
        document.getElementById("set2").innerHTML = "";
    }
    if (ques.length === 0) {
        document.getElementById("set3").innerHTML = "Vui lòng gửi câu hỏi !";
    } else if (ques.length > 500) {
        document.getElementById("set3").innerHTML = "Câu hỏi của bạn phải dưới 500 kí tự !";
    } else {
        document.getElementById("set3").innerHTML = "";
    }
}