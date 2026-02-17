import { Reports } from './input';

function parseReportStringToArray(reportString: string): number[] {
  return reportString.split(' ').map(Number);
}

function validateReportArrayInput(reportArray: number[]): boolean {
  return reportArray.every((num) => !isNaN(num) && num >= 0);
}

function validateDirection(reportArray: number[]) {
  let direction: number | null = null;
  for (let i = 0; i < reportArray.length; i++) {
    if (reportArray[i] > reportArray[i + 1]) {
      if (direction === null) {
        direction = -1;
      } else if (direction === 1) {
        return false;
      }
    }
    if (reportArray[i] < reportArray[i + 1]) {
      if (direction === null) {
        direction = 1;
      } else if (direction === -1) {
        return false;
      }
    }

    if (reportArray[i] === reportArray[i + 1]) {
      return false;
    }
  }
  return true;
}

function validateAdjacentDifference(reportArray: number[]): boolean {
  for (let i = 0; i < reportArray.length - 1; i++) {
    const diff = Math.abs(reportArray[i] - reportArray[i + 1]);
    if (diff >= 1 && diff <= 3) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

const reports = Reports.split('\n').map(parseReportStringToArray);

let counter = 0;
for (const report of reports) {
  const result = validateReportArrayInput(report) && validateDirection(report) && validateAdjacentDifference(report);
  console.log(`Report: ${report.join(', ')} - Valid: ${result}`);
  if (result) {
    counter++;
  }
}

console.log(`Number of valid reports: ${counter}`);
