class List {
  constructor(_user, _name, _email, _pass, _date, _salary, _role, _time) {
    this.user = _user;
    this.name = _name;
    this.email = _email;
    this.pass = _pass;
    this.date = _date;
    this.salary = _salary;
    this.role = _role;
    this.time = _time;
    this.type = "";
    this.sumSalary = _salary;
  }
  listType() {
    if (this.time >= 192 && this.time < 200) {
      this.type = "Xuất sắc";
    } else if (this.time >= 176 && this.time < 192) {
      this.type = "Giỏi";
    } else if (this.time >= 160 && this.time < 176) {
      this.type = "Khá";
    } else if (this.time >= 80 && this.time < 160) {
      this.type = "Trung bình";
    }
  }
  calcSumSalary() {
    if (this.role === "sep") {
      this.sumSalary = this.salary * 3;
    } else if (this.role === "truongPhong") {
      this.sumSalary = this.salary * 2;
    }
  }
}
export default List;
