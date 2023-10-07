/*function validate(username, password){
  if (password.includes('||') || password.includes('//'))
    return 'Wrong username or password!'
  var database = new Database();
  return database.login(username, password);
}
*/

function validate(username, password){
    var database = new Database();
    return password.indexOf('||') > -1 || password.indexOf('//') > -1 ? 'Wrong username or password!': database.login(username, password)
  }