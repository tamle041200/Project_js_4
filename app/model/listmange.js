class ListMange {
  constructor() {
    this.arrList = [];
  }
  addList(list) {
    this.arrList.push(list);
  }
  findIndex(user) {
    let index = "";
    for (let i = 0; i < this.arrList.length; i++) {
      const listItem = this.arrList[i];
      if (listItem.user === user) {
        index = i;
        break;
      }
    }
    return index;
  }
  delete(user) {
    const index = this.findIndex(user);
    if (index !== "") {
      this.arrList.splice(index, 1);
    }
  }
  getListByUser(user) {
    let index = this.findIndex(user);
    if (index !== "") {
      return this.arrList[index];
    }
  }
  update(list) {
    const index = this.findIndex(list.user);
    if (index !== "") {
      this.arrList[index] = list;
    }
  }
  filterFood(role) {
    let arrFilter = [];
    if (!role) return this.arrList;

    let giaTriTimKiem = role.toLowerCase().trim();

    if (giaTriTimKiem === "sếp") {
      giaTriTimKiem = "sep";
    } else if (giaTriTimKiem === "trưởng phòng") {
      giaTriTimKiem = "truongPhong";
    } else if (giaTriTimKiem === "nhân viên") {
      giaTriTimKiem = "nhanVien";
    }

    for (let i = 0; i < this.arrList.length; i++) {
      let chucVuTrongData = this.arrList[i].role.trim();

      if (chucVuTrongData.includes(giaTriTimKiem)) {
        arrFilter.push(this.arrList[i]);
      }
    }
    return arrFilter;
  }
}
export default ListMange;
