function solution(array, commands) {
    let answer = [];
    for (let comArr = 0; comArr < commands.length; comArr++) {
        let sliceArr = array.slice(commands[comArr][0] - 1, commands[comArr][1]);
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (sliceArr[j] !== sliceArr[sliceArr.length - 1] && sliceArr[j] > sliceArr[j + 1]) {
                    let tmp = sliceArr[j + 1];
                    sliceArr[j + 1] = sliceArr[j];
                    sliceArr[j] = tmp;
                }
            }
        }
        let sliceArrNum = commands[comArr][2] - 1;
        answer.push(sliceArr[sliceArrNum]);
    }
    return answer;
}