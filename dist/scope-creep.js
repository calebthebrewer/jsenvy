var ScopeCreep=function(e){function r(e){"object"!=typeof e&&(e=n()),u=e.properties,i=e.methods}function t(){var e=o();return r(e.scope),e}function n(){for(var r=[],t=[],n=["length","__CommandLineAPI"],o=Object.getOwnPropertyNames(e),p=0;p<o.length;p++){var u=o[p];n.indexOf(u)>=0||("function"==typeof window[u]?t.push(u):r.push(u))}return{properties:r,methods:t}}function o(){var e=n(),r=p(u,e.properties),t=p(i,e.methods);return{properties:r,methods:t,scope:e}}function p(e,r){for(var t=[],n=[],o=0;o<e.length;o++)t[e[o]]=!0;for(var o=0;o<r.length;o++)t[r[o]]?delete t[r[o]]:t[r[o]]=!0;for(var p in t)n.push(p);return n}var u=[],i=[];return r(),{update:t,peek:o,get:n}};