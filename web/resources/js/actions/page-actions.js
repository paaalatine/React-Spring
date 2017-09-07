/**
 * Created by sonya on 20.08.17.
 */
import $ from 'jquery'

function getPointsWithR(r) {
    var points = [];
    $.ajax({
        type: 'POST',
        url: "/sonya9_war_exploded/radiusChanged",
        data: { r : r },
        async: false
    }).done(function (data) {
        points = data;
    });
    return points;
}

function getNewPoint(x, y, r) {
    var point = null
    $.ajax({
        type: 'POST',
        url: "/sonya9_war_exploded/newPoint",
        data: {
            x : x,
            y : y,
            r : r
        },
        async: false
    }).done(function (data) {
        point = data;
    });
    return point;
}

export function newR(r) {
    return {
            type: 'GET_WITH_NEW_R',
            payload1: getPointsWithR(r),
            payload2: r
    }
}

export function newPoint(x, y, r) {
    return {
            type: 'GET_NEW_POINT',
            payload1: getNewPoint(x, y, r),
            payload2: r
    }
}
