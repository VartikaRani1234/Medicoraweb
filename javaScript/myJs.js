$(function () {
            $("#service").hover(function () {
                $('.list-div').stop().slideDown(100);
            }, function () {
                $('.list-div').stop().slideUp(100);
            });
        });