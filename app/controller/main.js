import List from "../model/list.js";
import ListMange from "../model/listmange.js";
import Validation from "../model/validation.js";
const validation = new Validation();
const listMange = new ListMange();
function getId(id) {
  return document.getElementById(id);
}
function getInfoList(isAdd) {
  const user = getId("tknv").value;
  const name = getId("name").value;
  const email = getId("email").value;
  const pass = getId("password").value;
  const date = getId("datepicker").value;
  const salary = getId("luongCB").value;
  const role = getId("chucvu").value;
  const time = getId("gioLam").value;
  let isValid = true;
  if (isAdd) {
    isValid =
      validation.checkEmpty(user, "tbTKNV", "Vui Lòng Nhập User") &&
      validation.checkExistId(
        user,
        "tbTKNV",
        "User Đã Dùng",
        listMange.arrList,
      ) &&
      validation.checkUser(user, "tbTKNV", "Tài khoản tối đa 4 - 6 ký số");
  }
  isValid &=
    validation.checkEmpty(name, "tbTen", "Vui Lòng Nhập Họ và Tên") &&
    validation.checkCharacterString(name, "tbTen", "Vui Lòng Nhập Chữ");
  isValid &=
    validation.checkEmpty(email, "tbEmail", "Vui Lòng Nhập Email") &&
    validation.checkEmail(email, "tbEmail", "Email Không Hợp Lệ");
  isValid &=
    validation.checkEmpty(pass, "tbMatKhau", "Vui Lòng Nhập Mật Khẩu") &&
    validation.checkPass(
      pass,
      "tbMatKhau",
      "Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt) ",
    );
  isValid &= validation.checkEmpty(date, "tbNgay", "Vui Lòng Nhập Ngày Làm");
  // &&
  // validation.checkDate(date, "tbNgay", "Nhập Đúng Theo Định Dạng mm/dd/yyyy");
  isValid &=
    validation.checkEmpty(salary, "tbLuongCB", "Vui Lòng Nhập Lương Cơ Bản") &&
    validation.checkSalary(
      salary,
      "tbLuongCB",
      "Nhập Từ 1 000 000 đến 20 000 000",
    );
  isValid &=
    validation.checkEmpty(time, "tbGiolam", "Vui Lòng Nhập Giờ Làm") &&
    validation.checkTime(time, "tbGiolam", "Nhập Giờ Làm từ 80 đến 200 giờ");
  isValid &= validation.checkSelectOption(
    "chucvu",
    "tbChucVu",
    "Vui Lòng Chọn Chức Vụ",
  );
  if (!isValid) return;
  const list = new List(user, name, email, pass, date, salary, role, time);
  list.listType();
  list.calcSumSalary();
  return list;
}
function renderList(list) {
  let content = "";
  for (let i = 0; i < list.length; i++) {
    let listItem = list[i];
    let roleFormat = listItem.role;
    if (roleFormat === "sep") {
      roleFormat = "Sếp";
    } else if (roleFormat === "truongPhong") {
      roleFormat = "Trưởng Phòng";
    } else {
      roleFormat = "Nhân Viên";
    }
    content += `<tr>
    <td>${listItem.user}</td>
    <td>${listItem.name}</td>
    <td>${listItem.email}</td>
    <td>${listItem.date}</td>
    <td>${roleFormat}</td>
    <td>${listItem.sumSalary}</td>
    <td>${listItem.type}</td>
    <td><button onclick="handDelete('${listItem.user}')">Xóa</button>
    <button onclick="handEdit('${listItem.user}')" data-toggle="modal" data-target="#myModal">Cập Nhật</button></td>
    </tr>`;
  }
  getId("tableDanhSach").innerHTML = content;
}
window.handEdit = handEdit;
function handEdit(user) {
  getId("header-title").innerHTML = "Cập Nhật Nhân Viên";
  getId("btnThemNV").style.display = "none";
  getId("btnCapNhat").style.display = "block";
  const list = listMange.getListByUser(user);
  getId("tknv").value = list.user;
  getId("tknv").disabled = true;
  getId("name").value = list.name;
  getId("email").value = list.email;
  getId("password").value = list.pass;
  getId("datepicker").value = list.date;
  getId("luongCB").value = list.salary;
  getId("chucvu").value = list.role;
  getId("gioLam").value = list.time;
}
getId("btnCapNhat").onclick = function () {
  const list = getInfoList(false);
  listMange.update(list);
  renderList(listMange.arrList);
  setLocalStorage();
  getId("btnDong").click();
};
window.handDelete = handDelete;
function handDelete(user) {
  listMange.delete(user);
  renderList(listMange.arrList);
  setLocalStorage();
}
getId("btnThemNV").onclick = function () {
  const list = getInfoList(true);
  if (!list) return;
  listMange.addList(list);
  renderList(listMange.arrList);
  setLocalStorage();
  getId("btnDong").click();
};
getId("btnThem").onclick = function () {
  getId("header-title").innerHTML = "Thêm Nhân Viên";
  getId("btnThemNV").style.display = "block";
  getId("btnCapNhat").style.display = "none";
  getId("tknv").disabled = false;
  getId("listForm").reset();
};
function setLocalStorage() {
  const dataString = JSON.stringify(listMange.arrList);
  localStorage.setItem("ListNV", dataString);
}
function getLocalStorage() {
  const dataString = localStorage.getItem("ListNV");
  const data = JSON.parse(dataString);
  listMange.arrList = data;
  renderList(listMange.arrList);
}
getLocalStorage();
getId("btnTimNV").onclick = function () {
  const role = getId("searchName").value;
  const filter = listMange.filterFood(role);
  renderList(filter);
};
