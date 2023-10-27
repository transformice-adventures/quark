'use strict';

(async function() {
    const { register } = await import(new URL('./api/index.js', document.currentScript.src));
    
    document.head.querySelector("style").textContent += `.I_BoutonEtat .croix-active {position: relative;width:1em;height:1em;min-width:1em;min-height:1em;background-color: #281b12;border-radius: 0.2em;box-shadow: inset 1px 1px 1px #000000CC, inset -1px -1px 1px #927A5A;align-self: center;}.I_BoutonEtat .croix-active::after{position:absolute;content:'\\274c';font-size: 0.7em;margin-left:0.10em;color:#7BBD40;font-weight: bold;}`;
    
    const _define = define;
    window.define = function(params, callback) {
        return _define(params, function(...defargs) {
            register(params, defargs);
            callback(...defargs);
        });
    }

    const _require = require;
    window.require = function(params, callback) {
        return _require(params, function(...defargs) {
            register(params, defargs);
            callback(...defargs);
        });
    }
})();