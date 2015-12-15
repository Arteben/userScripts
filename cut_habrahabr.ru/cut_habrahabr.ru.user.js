// ==UserScript==
// @name        cut_habrahabr.ru
// @namespace   arteben
// @include     http://habrahabr.ru/*
// @version     1
// ==/UserScript==

var sait = 'http://habrahabr.ru/';

switch (true) {
    case /(http:\/\/habrahabr\.ru\/)$/.test(location):
    case /(http:\/\/habrahabr\.ru\/interesting\/)$/.test(location):
    case /(http:\/\/habrahabr\.ru\/all\/)$/.test(location):
    case /(http:\/\/habrahabr\.ru\/top\/)/.test(location):
    case /(http:\/\/habrahabr\.ru\/company\/.+\/blog\/$)/.test(location): 
        hide_leftbar();
        hide_null_posts();
        hide_column_bottom();
    case /(http:\/\/habrahabr\.ru\/post\/)/.test(location):
        hide_leftbar();
        hide_column_bottom();
        hide_after_post_show();
    break;
}

function hide_leftbar() {
    document.getElementsByClassName('sidebar_right')[0].style.display = 'none';
    document.getElementsByClassName('content_left')[0].style.paddingRight = '20px';
}

function hide_null_posts() {

    var i;
    var posts_list = document.getElementsByClassName('content_left')[0]
                        .getElementsByClassName('posts_list'); 
    var posts_items = posts_list[0].children[0].children;  
    var length = posts_items.length;
                    
    for ( i = 0; i < length; i++) {
                
        if (posts_items[i].id == '') {
            posts_items[i].style.display = 'none';
        }
    }
}

function hide_after_post_show(){
    
    var i;    
    var post = document.getElementsByClassName('post_show');
    var next_node = post[0].nextSibling;
    
    
    for(;;) {
        
        if (next_node.nodeType === 1){
            next_node.style.display = 'none';
        }
        
        if (next_node.nextSibling !== undefined)
            next_node = next_node.nextSibling;
        else
            break;
        
    }
}


function hide_column_bottom (){
    var column_bottom = document.getElementsByClassName('column-wrapper_bottom')[0];
    column_bottom.style.display = 'none';
}
