let [arr1, arr2] = [1, 2]; // 1 and 2
let [arr3, arr4] = [1, 2, 3, 4]; // 1 and 2
let [arr5, arr6, ...elements] = [1, 2, 3, 4, 5]; // 1 and 2 and [3,4,5]
let [arr7, arr8, , ...elements2] = [1, 2, 3, 4, 5]; // 1 and 2 and [4,5]