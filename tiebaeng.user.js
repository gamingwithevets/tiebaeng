// ==UserScript==
// @name         tiebaeng
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Baidu Tieba English mod
// @author       Steveyboi
// @match        *://tieba.baidu.com/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

// Follow button
$('.islike_focus').css('background-image', 'url(https://gamingwithevets.github.io/tiebaeng/img/frs_islike.png)');
$('.cancel_focus').css('background-image', 'url(https://gamingwithevets.github.io/tiebaeng/img/frs_cancel_02.png)');

// Guide
$('head').append('<style>.post_head_official_guide { background-image: url(https://gamingwithevets.github.io/tiebaeng/img/guide-pic.png); }</style>');

// Enter Post Bar button
$('.j_enter_ba').html('Enter Post Bar').css('width', '110px');

// Search All Bars button
$('.j_search_post').html('Search All Bars').css('width', '110px');

// Top navigation bar
$('.j_search_nav').css('margin-right', '700px');

// Editor icons
$('.edui-icon').css('background-image', 'url(https://gamingwithevets.github.io/tiebaeng/img/icon_png8_old.png)').css('width', '52px');
$('.edui-icon-medal').css('background-image', 'url(https://gamingwithevets.github.io/tiebaeng/img/icon_png8_bubble.png)');
$('.edui-icon-topic').css('background-image', 'url(https://gamingwithevets.github.io/tiebaeng/img/icon_topic_n.png)');
$('.j_topic_add_btn').css('background-image', 'url(https://gamingwithevets.github.io/tiebaeng/img/icon_topic_n.png)');
$('.edui-icon-fullscreen').css('background-image', '').css('width', '');
