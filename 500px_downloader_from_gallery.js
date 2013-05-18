// ==UserScript==
// @name       500px Downloader from gallery
// @namespace  http://www.toto.com
// @version    1.1
// @description  get image from 500px
// @match      http://*/*
// @copyright  2012+, You
// ==/UserScript==

var url = window.location + "";

var rsTest = url.search('(500px.com/)');

if (rsTest !== -1) {
    
    // @require        http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js
    var $ = unsafeWindow.jQuery;
    $(document).ajaxStop(function() {
        addButton($);
    });
    addButton($);
    
}

function addButton($) {
    var $toto = $('[class="photo medium"]').find("img");
    for (var i=0, maxV = $toto.length;i<maxV;++i) {
        
        var parentDiv = $($toto[i]).parent();
        debugger;
        if (($(parentDiv).parent().find('.button')).length == 0) {
            var get_link = ($($toto[i]).attr('src')).replace('3.jpg','4.jpg');
            
            var a = document.createElement('a');
            var div = document.createElement('div');
            
            a.appendChild(div);
            //parentDiv.insertBefore(a,sp2);
            $(a).insertBefore(parentDiv);
            
            //a.setAttribute('class', 'button like');
            a.setAttribute('href', get_link);
            a.setAttribute('download', '500px.jpg');
            div.setAttribute('class', 'button red');
            div.setAttribute('style', 'margin: 10px auto');
            div.setAttribute('style', 'padding: 14px');
            div.appendChild(document.createTextNode("Download"));
            
            get_link = null;
            a = null;
            div = null;
        }
    }
}

