export function validateText(text) {
  if (text.length < 2 || text === "") {
    // alert("please have a correct input ");
    return "Please add a relevant input";
  }
}

export function validateImage(value) {
  if (value.length === 0) {
    return "Its important to have an image URL to boost sales";
  }
}

export function validateAmount(price) {
  if (price.length < 2) {
    return "Invalid input please add a relevant dataset";
  }
}
