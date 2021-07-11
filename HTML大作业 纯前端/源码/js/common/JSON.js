//利用localStorage模拟一个后端数据库

function utf8_to_b64(str) {//支持中文的base64加密解密
    if (str === null || str === 'null')
        return null;
    return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str) {
    if (str === null || str === 'null')
        return null;
    return decodeURIComponent(escape(window.atob(str)));
}

let user = {
    "name": "null",
    "pwd": "null",
    "username": "null",
    "type": "null",
    "id": "null",
    "highPermissions": "false",
    "admin": "true",
    "checker": "false",
    "message": "0",
    "messageDetial": [],
    "certification": false,
    "phone": "null",
    "wechat": "null",
    "qq": "null",
    "xinyong": "100",
    "Broom": []
}

function register(name, id, username, pwd, admin = false, highPermissions = false, check = false) {
    let userObj = user;
    userObj.username = username;
    userObj.pwd = pwd;
    userObj.name = name;
    userObj.id = id;
    userObj.admin = admin;
    userObj.highPermissions = highPermissions;
    if (id[0] === "1" && id[1] === "0") {
        userObj.type = "tea"
        userObj.highPermissions = true;
    } else
        userObj.type = "stu"
    if (admin)
        userObj.type = "admin"
    userObj.checker = check
    userObj.message = Math.floor(Math.random() * 99);
    console.log(userObj)
    updateUser(userObj)
}

function login(username, pwd) {
    let UserJsonString = localStorage.getItem(utf8_to_b64(username))
    let userObj = JSON.parse(b64_to_utf8(UserJsonString));
    if (userObj === undefined || userObj === null)
        return false;
    console.log(userObj)
    console.log(userObj.username === username)
    console.log(userObj.pwd === pwd)
    console.log(userObj.pwd)
    console.log(pwd)
    return userObj.username === username && userObj.pwd === pwd;
}

function getName(username) {
    let UserJsonString = localStorage.getItem(utf8_to_b64(username))
    let userObj = JSON.parse(b64_to_utf8(UserJsonString));
    return userObj.name;
}

function getUser(username) {

    if (username === null || username === 'null')
        return user;
    let UserJsonString = localStorage.getItem(utf8_to_b64(username))
    return JSON.parse(b64_to_utf8(UserJsonString));
}

function gettype(userOBJ) {
    if (userOBJ.type === "admin")
        return "管理员"
    else if (userOBJ.type === "tea")
        return "老师"
    else
        return "同学"
}

function updateUser(userObj) {
    let UserJsonString = JSON.stringify(userObj);
    localStorage.setItem(utf8_to_b64(userObj.username), utf8_to_b64(UserJsonString));
}

function newMessage(userObj, mes) {

}

function newRoom(userObj, mes) {

}