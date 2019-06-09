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
	addScript('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js');
	
	const fabhtml = `
		<div class="fixed-action-btn">
		  <a class="btn-floating btn-large red">
		    <i class="large material-icons">mode_edit</i>
		  </a>
		  <ul>
		    <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
		    <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
		    <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
		    <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
		  </ul>
		</div>
	`;
	document.body.appendChild(fabhtml);
	
	document.addEventListener('DOMContentLoaded', function() {
	    var elems = document.querySelectorAll('.fixed-action-btn');
	    var instances = M.FloatingActionButton.init(elems, options);
	});
	
	var button = document.createElement("Button");
	button.innerHTML = "Title";
	button.style = "top:100px;right:100px;position:absolute;z-index: 19999"
	document.body.appendChild(button);
	
})();
