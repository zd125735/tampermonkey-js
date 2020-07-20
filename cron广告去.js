// ==UserScript==
// @name         在线cron广告删除
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  删除页面div广告
// @author       zhoudong
// @grant        none
// @include      https://www.pppet.net/
// ==/UserScript==

(function() {
    'use strict';
    var box = document.getElementsByClassName("easyui-layout layout");
    for(var i=0;i<box.length;i++){
        if (box[i] != null) {
            box[i].parentNode.removeChild(box[i]);
        }
    }
})();