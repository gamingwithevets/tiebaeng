// ==UserScript==
// @name         tiebaeng
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Baidu Tieba English mod
// @author       Steveyboi
// @match        *://tieba.baidu.com/*
// @grant        none
// ==/UserScript==

// follow button
try { document.getElementsByClassName('islike_focus')[0].style.backgroundImage = "url(https://gamingwithevets.github.io/tiebaeng/img/frs_islike.png)"; } catch(e) { null; }
// unfollow button
try { document.getElementsByClassName('cancel_focus')[0].style.backgroundImage = "url(https://gamingwithevets.github.io/tiebaeng/img/frs_cancel_02.png)"; } catch(e) { null; }

// Guide
try { document.getElementsByClassName('post_head_official_guide')[0].style.backgroundImage = "url(https://gamingwithevets.github.io/tiebaeng/img/guide-pic.png)"; } catch(e) { null; }

// Enter Post Bar button
try {
	document.getElementsByClassName('j_enter_ba')[0].innerHTML = "Enter Post Bar";
	document.getElementsByClassName('j_enter_ba')[0].style.width = "110px";
} catch(e) { null; }

// Search All Bars button
try {
	
	document.getElementsByClassName('j_search_post')[0].innerHTML = "Search All Bars";
	document.getElementsByClassName('j_search_post')[0].style.width = "110px";
} catch(e) { null; }


// Editor icons
edui = document.getElementsByClassName('edui-icon');
for (let i = 0; i < edui.length; i++) {
	edui[i].style.backgroundImage = "url(https://gamingwithevets.github.io/tiebaeng/img/icon_png8_old.png)";
	edui[i].style.width = "52px";
}
try { document.getElementsByClassName('edui-icon-medal')[0].style.backgroundImage = "url(https://gamingwithevets.github.io/tiebaeng/img/icon_png8_bubble.png)"; } catch(e) { null; }
try { document.getElementsByClassName('edui-icon-topic')[0].style.backgroundImage = "url(https://gamingwithevets.github.io/tiebaeng/img/icon_topic_n.png)"; } catch(e) { null; }
try { document.getElementsByClassName('j_topic_add_btn')[0].style.backgroundImage = "url(https://gamingwithevets.github.io/tiebaeng/img/icon_topic_n.png)"; } catch(e) { null; }
try { document.getElementsByClassName('edui-icon-fullscreen')[0].removeAttribute("style"); } catch(e) { null; }
