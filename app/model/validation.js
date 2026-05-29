function getId(id) {
  return document.getElementById(id);
}
class Validation {
  checkEmpty(value, divId, mess) {
    if (value === "") {
      getId(divId).innerHTML = mess;
      getId(divId).style.display = "block";
      return false;
    }
    getId(divId).innerHTML = "";
    getId(divId).style.display = "none";
    return true;
  }
  checkSelectOption(idSelect, divId, mess) {
    const element = getId(idSelect);
    if (element.selectedIndex !== 0) {
      getId(divId).innerHTML = "";
      getId(divId).style.display = "none";
      return true;
    }
    getId(divId).innerHTML = mess;
    getId(divId).style.display = "block";
    return false;
  }
  checkExistId(value, divId, mess, arr) {
    let isExist = false;
    for (let i = 0; i < arr.length; i++) {
      let list = arr[i];
      if (list.user === value) {
        isExist = true;
        break;
      }
    }
    if (isExist) {
      getId(divId).innerHTML = mess;
      getId(divId).style.display = "block";
      return false;
    } else {
      getId(divId).innerHTML = "";
      getId(divId).style.display = "none";
      return true;
    }
  }
  checkCharacterString(value, divId, mess) {
    let letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter)) {
      getId(divId).innerHTML = "";
      getId(divId).style.display = "none";
      return true;
    }
    getId(divId).innerHTML = mess;
    getId(divId).style.display = "block";
    return false;
  }
  checkUser(value, divId, mess) {
    if (value.length >= 4 && value.length <= 6) {
      getId(divId).innerHTML = "";
      getId(divId).style.display = "none";
      return true;
    }
    getId(divId).innerHTML = mess;
    getId(divId).style.display = "block";
    return false;
  }
  checkEmail(value, divId, mess) {
    let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(email)) {
      getId(divId).innerHTML = "";
      getId(divId).style.display = "none";
      return true;
    }
    getId(divId).innerHTML = mess;
    getId(divId).style.display = "block";
    return false;
  }
  checkPass(value, divId, mess) {
    let pass =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
    if (value.match(pass)) {
      getId(divId).innerHTML = "";
      getId(divId).style.display = "none";
      return true;
    }
    getId(divId).innerHTML = mess;
    getId(divId).style.display = "block";
    return false;
  }
  // checkDate(value, divId, mess) {
  //   let date = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
  //   if (value.match(date)) {
  //     getId(divId).innerHTML = "";
  //     getId(divId).style.display = "none";
  //     return true;
  //   }
  //   getId(divId).innerHTML = mess;
  //   getId(divId).style.display = "block";
  //   return false;
  // }
  checkSalary(value, divId, mess) {
    if (value >= 1000000 && value <= 20000000) {
      getId(divId).innerHTML = "";
      getId(divId).style.display = "none";
      return true;
    }
    getId(divId).innerHTML = mess;
    getId(divId).style.display = "block";
    return false;
  }
  checkTime(value, divId, mess) {
    if (value >= 80 && value <= 200) {
      getId(divId).innerHTML = "";
      getId(divId).style.display = "none";
      return true;
    }
    getId(divId).innerHTML = mess;
    getId(divId).style.display = "block";
    return false;
  }
}
export default Validation;
