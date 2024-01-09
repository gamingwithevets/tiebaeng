// ==UserScript==
// @name         tiebaeng
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Baidu Tieba English mod
// @author       Steveyboi
// @match        *://tieba.baidu.com/*
// @grant        none
// ==/UserScript==

try {
	// follow button
	document.getElementsByClassName('islike_focus')[0].style.background = "url(https://gamingwithevets.github.io/tiebaeng/img/frs_islike.png) no-repeat top left";
} catch(e) {
	// unfollow button
	document.getElementsByClassName('cancel_focus')[0].style.background = "url(https://gamingwithevets.github.io/tiebaeng/img/frs_cancel_02.png) no-repeat top left";
}

try {
	// Enter Post Bar button
	document.getElementsByClassName('j_enter_ba')[0].innerHTML = "Enter Post Bar";
	document.getElementsByClassName('j_enter_ba')[0].style.width = "110px";
} catch(e) {
	null;
}

try {
	// Search All Bars button
	document.getElementsByClassName('j_search_post')[0].innerHTML = "Search All Bars";
	document.getElementsByClassName('j_search_post')[0].style.width = "110px";
} catch(e) {
	null;
}

