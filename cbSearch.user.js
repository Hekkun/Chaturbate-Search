// ==UserScript==
// @name	Chaturbate Search
// @namespace	http://tampermonkey.net/
// @version	0.2
// @description	Search for Chaturbate models on camcaps.me
// @author	hekkun
// @match	https://chaturbate.com/*/
// @exclude	https://chaturbate.com/tag/*
// @exclude	https://chaturbate.com/*-cams/
// @grant	GM_addStyle
// @downloadURL	https://github.com/Hekkun/Chaturbate-Search/raw/master/cbSearch.user.js
// @updateURL	https://github.com/Hekkun/Chaturbate-Search/raw/master/cbSearch.user.js
// ==/UserScript==

(function() {
	'use strict';
	
	// Your code here...

	
	function addCss(fileName) {

	  var head = document.head;
	  var link = document.createElement("link");

	  link.rel = "stylesheet";
	  link.href = fileName;

	  head.appendChild(link);
	}
	
	function addScript(fileName) {

	  var head = document.head;
	  var script = document.createElement("script");

	  script.src = fileName

	  head.appendChild(script);
	}

	
	addCss('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css');
	addScript('https://github.com/Hekkun/Chaturbate-Search/raw/master/bubbler.min.css');
	
	
	//var context = new Bubbler(options);
	
	var button = document.createElement("Button");
	button.innerHTML = "Title";
	button.style = "top:100px;right:100px;position:absolute;z-index: 19999"
	document.body.appendChild(button);
	
})();
