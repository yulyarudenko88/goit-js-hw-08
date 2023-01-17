import Player from '@vimeo/player';
import lodash from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  lodash(data => {
    localStorage.setItem(STORAGE_KEY, data.seconds);
    console.log(localStorage.getItem(STORAGE_KEY));
  }, 1000)
);

if (localStorage.getItem(STORAGE_KEY)) {
  player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
}