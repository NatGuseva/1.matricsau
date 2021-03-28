function array(n, m) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr[i] = [];
        for (var j = 0; j < m; j++) {
            arr[i][j] = Math.floor(Math.random() * (100 - 1) + 1);
        }
    }
    return arr;
}
var arr1 = array(5, 6);
//console.log(arr1);
var arr2 = array(7, 8);
//console.log(arr2);
function dop_i(arr_1, arr_2) {
    for (var i = arr_1[1].length; i < arr_2[1].length; i++) {
        for (var j = 0; j < arr_1.length; j++) {
            arr_1[j][i] = 0;
        }
    }
    return arr_1;
}
function dop_j(arr_1, arr_2) {
    for (var i = arr_1.length; i < arr_2.length; i++) {
        arr_1[i] = [];
        for (var j = 0; j < arr_1[1].length; j++) {
            arr_1[i][j] = 0;
        }
    }
    return arr_1;
}
if (arr1[1].length < arr2[1].length) {
    arr1 = dop_i(arr1, arr2);
}
if (arr1[1].length > arr2[1].length) {
    arr2 = dop_i(arr2, arr1);
}
if (arr1.length < arr2.length) {
    arr1 = dop_j(arr1, arr2);
}
if (arr1.length > arr2.length) {
    arr2 = dop_j(arr2, arr1);
}
console.log(arr1);
console.log(arr2);
function sum(arr1, arr2) {
    var arr3 = [];
    for (var i = 0; i < arr1.length; i++) {
        arr3[i] = [];
        for (var j = 0; j < arr1[1].length; j++) {
            arr3[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return arr3;
}
console.log(sum(arr1, arr2));
