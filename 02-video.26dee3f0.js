!function(){var e=document.getElementById("vimeo-player"),t=new Player(e),o="videoplayer-current-time";t.on("timeupdate",lodash((function(e){localStorage.setItem(o,e.seconds),console.log(localStorage.getItem(o))}),1e3)),localStorage.getItem(o)&&t.setCurrentTime(localStorage.getItem(o))}();
//# sourceMappingURL=02-video.26dee3f0.js.map
