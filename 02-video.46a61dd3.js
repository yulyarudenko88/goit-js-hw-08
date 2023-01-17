const e=document.getElementById("vimeo-player"),t=new Player(e);t.on("timeupdate",lodash((e=>{localStorage.setItem("videoplayer-current-time",e.seconds),console.log(localStorage.getItem("videoplayer-current-time"))}),1e3)),localStorage.getItem("videoplayer-current-time")&&t.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
//# sourceMappingURL=02-video.46a61dd3.js.map
