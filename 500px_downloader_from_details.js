// ==UserScript==
// @name       500px Downloader from detail
// @namespace  http://www.toto.com
// @version    1.1
// @description  get image from 500px
// @match      http://*/*
// @copyright  2012+, You
// ==/UserScript==

var url = window.location + "";

var rsTest = url.search('(500px.com/photo)');

if (rsTest !== -1) {

    // @require http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js
    var $ = unsafeWindow.jQuery;
    $(document).ajaxStop(function() {
        addButton($);
    });

    var get_id = document.getElementById("thephoto").childNodes;

    var get_link = get_id[1].href;

    var a = document.createElement('a');
    var div = document.createElement('div');

    a.appendChild(div);

    var sp2 = document.getElementById('thephoto');
    var parentDiv = sp2.parentNode;
    parentDiv.insertBefore(a,sp2);
    //document.getElementById('subheader').appendChild(a);
    //document.getElementById('subheader').setAttribute('style', 'height: 100px');

    //a.setAttribute('class', 'button like');
    a.setAttribute('href', get_link);
    a.setAttribute('download', $('.photo_subheader').find('h2').html() || '500px.jpg');
    div.setAttribute('class', 'button red');
    div.setAttribute('style', 'margin: 10px auto');
    div.appendChild(document.createTextNode("Download"));

    get_id = null;
    get_link = null;
}