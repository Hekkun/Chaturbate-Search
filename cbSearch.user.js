// ==UserScript==
// @name	Chaturbate Search
// @namespace	http://tampermonkey.net/
// @version	0.3.1
// @description	Search for Chaturbate models on camcaps.me
// @author	hekkun
// @match	https://chaturbate.com/*/
// @match	http://camcaps.me/all-models-videos/p/*
// @include	http://www.blank.org/
// @exclude	https://chaturbate.com/tag/*
// @exclude	https://chaturbate.com/*-cams/
// @grant	GM_addStyle
// @grant   GM_openInTab
// @downloadURL	https://github.com/Hekkun/Chaturbate-Search/raw/master/cbSearch.user.js
// @updateURL	https://github.com/Hekkun/Chaturbate-Search/raw/master/cbSearch.user.js
// ==/UserScript==

(function() {
	'use strict';

	// Reference: https://stackoverflow.com/questions/6480082/add-a-javascript-button-using-greasemonkey-or-tampermonkey

    var zNode = document.createElement ('div');
    zNode.innerHTML = '<button id="myButton" type="button">'
        + 'Search...</button>'
    ;
    zNode.setAttribute ('id', 'myContainer');
    document.body.appendChild (zNode);

    //--- Activate the newly added button.
    document.getElementById ("myButton").addEventListener (
        "click", ButtonClickAction, false
    );



    function ButtonClickAction (zEvent) {
	var host = window.location.hostname;
	var url = window.location.pathname;
	var finalurl, modurl = "";
	    
	console.log(host, url);
	if (host == "chaturbate.com")
	{
		console.log("At cbate");
		
		modurl = url.replace(/^\/|\/$/g, '');
		console.log(modurl);
		
		finalurl = "http://camcaps.me/search/" + modurl;
	}
	else if(host == "camcaps.me")
	{
		modurl = url.match(/.\/*chaturbate-(.*)/) [1];
		modurl = modurl.replace("-", "_");
		console.log(modurl);
		
		finalurl = "https://chaturbate.com/" + modurl;
		console.log("At ccaps");
	}        
	
	GM_openInTab(finalurl);
    }

    //--- Style our newly added elements using CSS.

	GM_addStyle ( `
	    #myContainer {
		position:               fixed;
		top:                    50px;
		right:                  5px;
		z-index:                19999;
	    }
	    #myButton {
		cursor:                 pointer;
	    }
	` );



})();
