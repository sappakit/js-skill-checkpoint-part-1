// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้

function checkPasswordStrength(userPassword) {
  let passwordLength = userPassword.length;

  if (passwordLength > 10) {
    return "Strong";
  } else if (passwordLength >= 6 && passwordLength <= 10) {
    return "Medium";
  } else {
    return "Weak";
  }
}
