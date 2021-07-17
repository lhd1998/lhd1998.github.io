
// //平台、设备和操作系统 
// var system = {
//     win: false,
//     mac: false,
//     xll: false
// };

// //检测平台 
// var p = navigator.platform;
// system.win = p.indexOf("Win") == 0;
// system.mac = p.indexOf("Mac") == 0;
// system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
// //跳转语句 
// if (system.win || system.mac || system.xll) {//转向后台登陆页面 
//     window.location.href = "http://www.baidu.com";
// }


function IsPC(){  
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
    var flag = true;  
    for (var v = 0; v < Agents.length; v++) {  
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
    }  
    return flag;  
 }

 if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    //alert(navigator.userAgent);  
    window.location.href ="http://crazyl.work";
} else if (/(Android)/i.test(navigator.userAgent)) {
    //alert(navigator.userAgent); 
    window.location.href ="http://crazyl.work";
} else {
    window.location.href ="http://www.baidu.com";
};


document.onkeydown = document.onkeyup = document.onkeypress = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 123) {
        e.returnValue = false;
        return (false);
    }
}
if (window.Event) {
    document.captureEvents(Event.MOUSEUP);
}
function nocontextmenu() {
    event.cancelBubble = true
    event.returnValue = false;
    return false;
}
function norightclick(e) {
    if (window.Event) {
        if (e.which == 2 || e.which == 3)
            return false;
    } else if (event.button == 2 || event.button == 3) {
        event.cancelBubble = true
        event.returnValue = false;
        return false;
    }
}
document.oncontextmenu = nocontextmenu; // for IE5+
document.onmousedown = norightclick; // for all others