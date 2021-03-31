'use strict';

$(document).ready(function () {
    var buttonHtml = '' +
        '<div class="return-to-top">' +
            '<a href="/">Back</a>' +
        '</div>';

    $('body').prepend($(buttonHtml));
    var button = $('.return-to-top');

    if (pc) {
        $(button)
            .on('mouseover', function () {
                $(this).addClass('on');
            })
            .on('mouseout', function () {
                $(this).removeClass('on');
            });
    } else {
        $(button)
            .on('touchstart', function () {
                $(this).addClass('on');
            })
            .on('touchend', function () {
                $(this).removeClass('on');
            });
    }


    // Change link theme
    // Get script params
    function GetScriptParam() {
        var fileName = 'return-to-top.js';
        var scripts = $('script');
        var path = '';

        $(scripts).each(function () {
            var src = $(this).attr('src');
            if (typeof src === 'string' &&
                src.indexOf(fileName) > -1) {
                path = src;
                return true;
            }
        });

        var query = '';
        var parameters = '';
        if (path.indexOf('?') > -1) {
            query = path.substring(path.indexOf('?') + 1);
            parameters = query.split('&');
            for (var i = 0; i < parameters.length; i++) {
                var el = parameters[i].split('=');

                if (el[0] === 'type') {
                    return el[1];
                }
            }
        }
        return 'light';
    }

    var type = GetScriptParam();
    if (type === 'dark') {
        $(button).addClass('dark');
    }
});