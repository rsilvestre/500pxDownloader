// ==UserScript==
// @name       500px Downloader from gallery all
// @namespace  http://www.toto.com
// @version    1.1
// @description  get image from 500px
// @match      http://*/*
// @copyright  2012+, You
// ==/UserScript==

var url = window.location + "";

//var rsTest = url.search('(500px.com/)');
var pattern = new RegExp("500px.com/(?!(login|flow|activity|market|photo[^s]|blog|upgrade|settings)).*");

//if (rsTest !== -1) {
if (pattern.test(url) && window.location.pathname != "/") {

    // @require        http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js
    var $ = unsafeWindow.jQuery;

    var parentDiv = $('.container');

    var a = document.createElement('a');
    var div = document.createElement('div');

    a.appendChild(div);
    //parentDiv.insertBefore(a,sp2);
    //$(a).insertBefore(parentDiv);
    $(parentDiv).prepend(a);

    a.setAttribute('class', 'fileDownloadCustomRichExperience');
    //a.setAttribute('href', get_link);
    //a.setAttribute('download', '500px.jpg');
    div.setAttribute('class', 'button red');
    div.setAttribute('style', 'margin: 10px auto');
    div.setAttribute('style', 'padding: 14px');
    div.appendChild(document.createTextNode("Download All"));

    $(function () {
        $("a.fileDownloadCustomRichExperience").click(function () {
            var $aImageContainer = $('[class="photo medium"]');
            var $image = $aImageContainer.find("img");
            var filenameContainer = [];
            for (var i=0, maxV = $image.length;i<maxV;++i) {

                var get_link = ($($image[i]).attr('src')).replace('3.jpg','4.jpg');
                if (!window.ActiveXObject) {
                    var save = document.createElement('a');
                    save.href = get_link;
                    save.target = '_blank';
                    var filename = $($aImageContainer[i]).parent().find('div.title').find('a').html();
                    filenameContainer[filename] = typeof filenameContainer[filename] !== 'undefined' && filenameContainer[filename] !== null ? filenameContainer[filename]+1:0;
                    save.download = filename + ((filenameContainer[filename] >0) ?" "+ filenameContainer[filename]:"") || '500px.jpg';

                    var event = document.createEvent('Event');
                    event.initEvent('click', true, true);
                    save.dispatchEvent(event);
                    (window.URL || window.webkitURL).revokeObjectURL(save.href);
                }
                /*
                // for IE
                else if ( !! window.ActiveXObject && document.execCommand)     {
                    var _window = window.open(get_link, '_blank');
                    _window.document.close();
                    _window.document.execCommand('SaveAs', true, fileName || fileURL)
                    _window.close();
                }
                */
            }

            return false; //this is critical to stop the click event which will trigger a normal file download!
        });
    });

}