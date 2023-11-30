function getArrayParams(...arr) {
  if (arr.length === 0) return 0;

  let min = Infinity; 
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
       max = arr[i];
    }
    if (arr[i] < min) {
       min = arr[i];
    }
      sum += arr[i];
  }

  let average = sum / arr.length;
  let avg = average.toFixed(2);

return { min: min, max: max, avg: Number(avg) };

}

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
summElementsWorker();




function differenceMaxMinWorker(...arr) {
  if(arr.length===0) return 0;

  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let difference = max - min;

 return difference;
}
differenceMaxMinWorker();




function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else if (arr[i] % 2 !== 0) {
      sumOddElement += arr[i];
    }
  }
  let difference = sumEvenElement - sumOddElement;

 return difference;
}
differenceEvenOddWorker();




function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {

     if (arr[i] % 2 === 0) {
       sumEvenElement += arr[i];
       countEvenElement++;
      }
  }

   let result = sumEvenElement / countEvenElement;
   return result;
}
averageEvenElementsWorker();


function makeWork (arrOfArr, func) { 
  if (arr.length === 0) return 0;

  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
makeWork(arr, summElementsWorker);
makeWork(arr, differenceMaxMinWorker);
makeWork(arr, differenceEvenOddWorker);
makeWork(arr, averageEvenElementsWorker);

