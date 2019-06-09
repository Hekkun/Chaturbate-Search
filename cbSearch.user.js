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
	
	function Bubbler(items) {
	    this.items = items;
	    var body = document.getElementsByTagName('body')[0];
	    var bubbler_wrapper = document.createElement('div');
	    bubbler_wrapper.className = 'bubbler-wrapper';
	    var menu_button = document.createElement('div');
	    menu_button.className = 'bubbler-menu-loader';
	    menu_button.innerHTML = '&#9776;';
	    for (var i = this.items.length - 1; i >= 0; i--) {
		var child = document.createElement('div');
		child.className = 'bubbler-menu-item';
		child.innerHTML = this.items[i].icon;
		if (this.items[i].callback) {
		    child.onclick = this.items[i].callback
		}
		if (this.items[i].display) {
		    for (var key in this.items[i].display) {
			if (!this.items[i].display.hasOwnProperty(key)) {
			    continue
			}
			child.style[key] = this.items[i].display[key]
		    }
		}
		var label_wrapper = document.createElement('label');
		label_wrapper.className = 'bubbler-menu-item-label-wrapper';
		var label = document.createElement('span');
		label.className = 'bubbler-menu-item-label';
		label.innerHTML = this.items[i].label;
		label_wrapper.appendChild(label);
		child.appendChild(label_wrapper);
		bubbler_wrapper.appendChild(child)
	    }
	    bubbler_wrapper.appendChild(menu_button);
	    body.appendChild(bubbler_wrapper)
	}
	
	function addCss(fileName) {

	  var head = document.head;
	  var link = document.createElement("link");

	  link.type = "text/css";
	  link.rel = "stylesheet";
	  link.href = fileName;

	  head.appendChild(link);
	}

	
	addCss('https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
	addCss('https://github.com/Hekkun/Chaturbate-Search/raw/master/bubbler.min.css');
	
	var zNode = document.createElement('div');
	
	var options =
	[
	  {
	    icon:'1',
	    label: 'Run alert function',
	    callback: function() {
	      alert('dasd');
	    }
	  },
	  {
	    icon:'<i class="fa fa-id-card" aria-hidden="true"></i>',
	    label: 'Test Element 2'
	  },
	  {
	    icon:'3',
	    label: 'Test Element 3',
	    display: {
	      color: 'blue',
	      background: 'red'
	    }
	  }
	];
	
	var context = new Bubbler(options);
	
	var button = document.createElement("Button");
	button.innerHTML = "Title";
	button.style = "top:100;right:100;position:absolute;z-index: 19999"
	document.body.appendChild(button);
	
})();
