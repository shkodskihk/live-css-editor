chrome.extension.sendRequest({settings:"keycode"},function(b){var a=b&&parseInt(b.value,0);window.addEventListener("keydown",function(d){var c=d.ctrlKey||d.metaKey;if(c&&d.shiftKey&&d.keyCode==a){if(document.getElementById("LiveCSSEditor-panel")){chrome.extension.sendRequest({stop:true},function(e){})}else{chrome.extension.sendRequest({start:true},function(e){})}}},false)});