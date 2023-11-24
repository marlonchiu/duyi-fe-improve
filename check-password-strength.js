/*
 * 写一段正则表达式用于校验密码，密码要求如下：
 * 密码必须为 6~12位
 * 密码包含 数字、小写字母、大写字母、特殊字符（$@,_.之一）
*/

const checkPasswordStrength = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,12}$/;
  return regex.test(password);
}
console.log(checkPasswordStrength('aaaA1$'))
console.log(checkPasswordStrength('aA1$'))
console.log(checkPasswordStrength('aaaA1'))