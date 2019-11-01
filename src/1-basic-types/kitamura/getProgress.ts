// app/frontend/javascripts/applications/reports/actions/corporateReport.js
/**
 * 進捗どうですか？
 * @param {Array<string>} finish 配列っぽい？
 * @param {Array<string>} remaining 配列っぽい？
 * @return {number} 進捗
 */
export default function getProgress(
  finish?: Array<string>,
  remaining?: Array<string>
): number {
  if (!finish || !remaining) {
    return 0;
  }
  const fin: number = finish.length || 0;
  const rem: number = remaining.length || 0;
  switch (true) {
    case fin <= 0:
      return 0;
    case rem <= 0:
      return 100;
    default:
      return parseInt(((fin / (fin + rem)) * 100).toString(), 10);
  }
}
