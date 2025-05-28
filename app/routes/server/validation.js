export function validateText(text) {
  if (text.length < 2 || text === "") {
    return "Please add a relevant input";
  } else {
    return null;
  }
}

export function validateImage(value) {
  if (value.length === 0) {
    return "Its important to have an image URL to boost sales";
  } else {
    return null;
  }
}

export function validateAmount(price) {
  if (price.length < 1) {
    return "Invalid input please add a relevant dataset";
  }
}
