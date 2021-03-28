//создаем матрицы нужного размера
function array (n:number,m:number):any {
    let arr: any[] = [];
    for (let i = 0; i < n; i++) {
        arr[i] = [];
        for (let j = 0; j < m; j++) {
            arr[i][j] = Math.floor(Math.random() * (100 - 1) + 1);
        }
    }
        return arr;
    }
    let arr1=array(5, 6);
//console.log(arr1);
let arr2=array(7, 8);
//пишем fункцию для пиведению числа строк к единому числу дополняя нулями
function dop_i (arr_1:any,arr_2:any):any {
    for (let i: number = arr_1[1].length; i < arr_2[1].length; i++) {
        for (let j = 0; j < arr_1.length; j++) {
            arr_1[j][i] = 0;
        }
    }
    return arr_1;
}
//пишем fункцию для пиведению числа строк к единому числу дополняя нулями
    function dop_j (arr_1:any,arr_2:any):any {
        for (let i: number = arr_1.length; i < arr_2.length; i++) {
            arr_1[i] = []
            for (let j = 0; j < arr_1[1].length; j++) {
                arr_1[i][j] = 0;
            }
    }
        return arr_1;
}
//приводим матрицы к одному размеру дополняя нулями
    if (arr1[1].length < arr2[1].length) {
        arr1=dop_i (arr1, arr2);
    }
if (arr1[1].length > arr2[1].length){
    arr2=dop_i (arr2, arr1);
}
if (arr1.length < arr2.length) {
    arr1=dop_j(arr1, arr2);
}
if (arr1.length > arr2.length) {
    arr2=dop_j(arr2, arr1);
}
console.log(arr1);
console.log (arr2);
//находим сумму матриц
    function sum (arr1:any,arr2:any):any {
    let arr3:any[]=[];
    for (let i = 0; i < arr1.length; i++) {
        arr3[i] = []
        for (let j = 0; j <arr1[1].length; j++) {
            arr3[i][j] = arr1[i][j] + arr2[i][j]
        }
    }
    return arr3;
}
console.log(sum(arr1,arr2));