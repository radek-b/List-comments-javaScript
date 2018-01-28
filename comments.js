'use strict';

$(document).ready(solution());

function solution() {
    console.log('solution')

    var commentListTag = $('.comment-list');
    var count = $(".comment-list").data("count");

    $.ajax({
        method: "GET",
        url: "comments.json",//"https://www.example.com/komentarz?count=" + count,
        dataType: "json",
        beforeSend: function () {
            console.log('beforeSend');
            $('.comment-list').html("Loading...");
        }
    })
    .success(function (data) {
        console.log('success - start');

        var comments = data;

        var list = comments.map(function (comment) {
            return '<div class="comment-item"><div class="comment-item__username">' + comment.username + "</div>" +
                '<div class="comment-item__message">' + comment.message + "</div></div>";
        });
        $('.comment-list').html(list.join(""));

        console.log('success - finish');
    })
    .fail(function (data) {
        console.log('fail');
    });

}
