import { Reports } from './input';

function parseReportStringToArray(reportString: string): number[] {
  return reportString.trim().split(/\s+/).map(Number);
}

function isSafeReport(reportArray: number[]): boolean {
  if (reportArray.length < 2) return true;

  let direction: number | null = null;

  for (let i = 0; i < reportArray.length - 1; i++) {
    const current = reportArray[i];
    const next = reportArray[i + 1];
    const diff = next - current;

    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return false;
    }

    if (direction === null) {
      direction = diff > 0 ? 1 : -1;
    } else {
      if ((diff > 0 && direction === -1) || (diff < 0 && direction === 1)) {
        return false;
      }
    }
  }

  return true;
}

const reports = Reports.trim().split('\n').map(parseReportStringToArray);

let counter = 0;

for (const report of reports) {
  const result = isSafeReport(report);
  if (result) {
    counter++;
  }
}

console.log(`Part 1 - Number of valid reports: ${counter}`);

let dampenedCounter = 0;

for (const report of reports) {
  if (isSafeReport(report)) {
    dampenedCounter++;
    continue;
  }

  for (let i = 0; i < report.length; i++) {
    let dampenedReport = [...report];
    dampenedReport.splice(i, 1);
    const dampenedResult = isSafeReport(dampenedReport);
    if (dampenedResult) {
      dampenedCounter++;
      break;
    }
  }
}

console.log(`Part 2 - Number of valid reports after dampening: ${dampenedCounter}`);
