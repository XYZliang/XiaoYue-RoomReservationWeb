//判断是否在iframe中
checkFrame()

function checkFrame() {
    if (self.frameElement && self.frameElement.tagName == "IFRAME")
        return true;
    else {
        window.location.replace("403.html") //非app访问该页面（即不是通过index的iframe访问的）拒绝访问。
        return false;
    }
}