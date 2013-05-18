// ==UserScript==
// @name       500px Downloader
// @namespace  http://www.toto.com
// @version    1.1
// @description  get image from 500px
// @match      http://*/*
// @copyright  2012+, You
// ==/UserScript==

var url = window.location + "";

var rsTest = url.search('(500px.com/photo)');

if (rsTest !== -1) {
    
    var get_id = document.getElementById("thephoto").childNodes;
    
    var get_link = get_id[1].href;
    
    var a = document.createElement('a');
    var div = document.createElement('div');
    
    a.appendChild(div);
    
    var sp2 = document.getElementById('thephoto');
    var parentDiv = sp2.parentNode;
    parentDiv.insertBefore(a,sp2);
    
    //a.setAttribute('class', 'button like');
    a.setAttribute('href', get_link);
    a.setAttribute('download', '500px.jpg');
    div.setAttribute('class', 'button red');
    div.setAttribute('style', 'margin: 10px auto');
    div.appendChild(document.createTextNode("Download"));
    
    get_id = null;
    get_link = null;
}