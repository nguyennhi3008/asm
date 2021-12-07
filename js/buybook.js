function submitForm(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var adr = document.getElementById("adr").value;
    var select = document.getElementById("select").value;
    var date = document.getElementById("date").value;
    var checkdate = new Date();
    var call = document.getElementById("yes").checked;
    var call1 = document.getElementById("no").checked;
    if (name.length === 0) {
        document.getElementById("set1").innerHTML = "Xin vui lòng nhập tên của bạn !";
    } else if (name.length > 100) {
        document.getElementById("set1").innerHTML = "Tên của bạn phải dưới 100 kí tự !";
    } else {
        document.getElementById("set1").innerHTML = "";
    }
    if (phone.length === 0) {
        document.getElementById("set2").innerHTML = "Vui lòng nhập số điện thoại của bạn !";
    } else if (phone.length < 10) {
        document.getElementById("set2").innerHTML = "Số điện thoại của bạn phải lớn hơn hoặc bằng 10 số !";
    } else if (phone.length > 14) {
        document.getElementById("set2").innerHTML = "Số điện thoại của bạn quá dài ! Vui lòng kiểm tra lại số !";
    } else {
        document.getElementById("set2").innerHTML = "";
    }
    if (adr.length === 0) {
        document.getElementById("set3").innerHTML = "Xin vui lòng nhập địa chỉ của bạn !";
    } else if (adr.length > 500) {
        document.getElementById("set3").innerHTML = "Địa chỉ của bạn phải dưới 500 kí tự !";
    } else {
        document.getElementById("set3").innerHTML = "";
    }
    if (select.length === 0) {
        document.getElementById("set4").innerHTML = "Vui lòng chọn 1 bộ sách !";
    } else {
        document.getElementById("set4").innerHTML = "";
    }
    if (date.length === 0) {
        document.getElementById("set6").innerHTML = "Xin vui lòng nhập ngày giao hàng !";
    } else if (new Date(date) < checkdate) {
        document.getElementById("set6").innerHTML = "Vui lòng không nhập ngày quá khứ !";
    } else {
        document.getElementById("set6").innerHTML = "";
    }
    if (call === false && call1 === false) {
        document.getElementById("set7").innerHTML = "Vui lòng chọn có hoặc không !";
    } else {
        document.getElementById("set7").innerHTML = "";
    }
}