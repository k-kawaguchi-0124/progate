import allResults from "./results.js";

// 学年の抽出を行う関数
const filterByGrade = (results, grade) => {
  const filteredResults = [];
  for (let i = 0; i < results.length; i++) {
    if (results[i].grade === grade) {
      filteredResults.push(results[i]);
    }
  }
  return filteredResults;
};

// 合計値を算出する関数
const sum = numbers => {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
};

// 合計値を追加する関数
const addTotalPoints = results => {
  const addTotalScore = [];
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    const total = sum(Object.values(result.points));
    addTotalScore.push({...result, total: total});
  }
  return addTotalScore;
};

// ソートする関数
const sortedResult = results => {
  return results.sort((a, b) => b.total - a.total);
};

const averageTotal = resultsWithTotal => {
  const totals = [];
  for (let i = 0; i < resultsWithTotal.length; i++) {
    const result = resultsWithTotal[i];
    totals.push(result.total);
  }
  return Math.round(sum(totals) / resultsWithTotal.length);
};

const calcSummary = (results, grade) => {
  const filteredResults = filterByGrade(results, grade);
  const resultsWithTotal = addTotalPoints(filteredResults);
  const sorted = sortedResult(resultsWithTotal);
  const topResult = sorted.slice(0, 3);
  const average = averageTotal(resultsWithTotal);
  return {topResults: topResult, average: average};
};

console.log("# Top 3 of total points");
const summary = calcSummary(allResults, 2);
const topResults = summary.topResults;
for (let i = 0; i < topResults.length; i++) {
  const result = topResults[i];
  console.log(`${i + 1} | ${result.grade} | ${result.name} | ${result.total}`);
}
console.log(`average: ${summary.average}`);
