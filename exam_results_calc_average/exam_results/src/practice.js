import allResults from "./results.js";

const filterByGrade = (results, grade) => {
    const filterdResult = [];
    for (let i = 0; i < results.length; i++) {
        if (results[i].grade === grade) {
            filterdResult.push(results[i]);
        }
    }
    return filterdResult;
}

// console.log("grade2", filterByGrade(allResults, 2));



const averageOf = (results, greade, subject) => {
    let allScore = 0;
    const filterdByGrade = filterByGrade(results, greade);
    for (let i = 0; i < filterByGrade.length; i++) {
        allScore += filterdByGrade[i].points[subject];
    }
    return allScore / filterdByGrade.length;
}

console.log("total count", allResults.length);
console.log("grade2", filterByGrade(allResults, 2));
console.log(
  "average of grade2 and Japanese",
  averageOf(allResults, 2, "Japanese") // 2年生の日本語の平均点が出力される
);