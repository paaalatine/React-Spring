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


const initialState = {
    r: 1,
    pointsForT: getPoints(),
    pointsForC: getPointsWithR(1)
}

function getPoints() {
    var points = [];
    $.ajax({
        type: 'POST',
        url: "/sonya9_war_exploded/getPoints",
        async: false
    }).done(function (data) {
        points = data;
    });
    return points;
}

export default function page(state = initialState, action) {
    switch (action.type) {
        case 'GET_WITH_NEW_R':
            return { state, pointsForT: state.pointsForT, pointsForC: action.payload1, r: action.payload2 }
        case 'GET_NEW_POINT':
            return { state, pointsForT: state.pointsForT.concat(action.payload1), pointsForC: state.pointsForC.concat(action.payload1), r: action.payload2 }
        default:
            return state;
    }
}