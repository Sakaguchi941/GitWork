(()=>{
    'use strict';

    setInterval(()=>{
        const eltime = document.querySelector('#time');
        eltime.textContent = new Date().toLocaleTimeString();
    },100);
})();