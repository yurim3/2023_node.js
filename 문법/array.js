const arr = ['apple', 'banana', 'cherrry', 'apple'];

// data: 데이터, index: 데이터에 해당하는 idx(생략가능)
arr.forEach(function(data, index) {
    // console.log(`${index} : ${data}`);
});

//return 값이 true에 해당하는 idx 반환, 없으면 -1을 반환
const cherryIndex = arr.findIndex(function(data) {
    return data === 'cherry';
})
console.log(cherryIndex);