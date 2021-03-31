'use strict';

// UserAgent
var ua = navigator.userAgent;

var pc = false;
var tablet = false;
var sp = false;
var ios = false;

if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
    sp = true;
} else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
    tablet = true;
} else {
    pc = true;
}

if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPad') > 0) {
    ios = true;
}




var ie = false;
var safari = false;

if (ua.indexOf('MSIE') > 0 || ua.indexOf('Trident') > 0) {
    ie = true;
}

if (ua.indexOf('Safari') > 0 && ua.indexOf('Chrome') === -1 && ua.indexOf('Edge') === -1) {
    safari = true;
}