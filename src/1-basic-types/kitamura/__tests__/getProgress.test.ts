// app/frontend/javascripts/applications/reports/actions/corporateReport.js
/**
 * 進捗どうですか？
 * @param {Array<string>} finish 配列っぽい？
 * @param {Array<string>} remaining 配列っぽい？
 * @return {number} 進捗
 */
function getProgress(finish?: Array<string>, remaining?: Array<string>): number {
  if (!finish || !remaining) {
    return 0;
  }
  const fin: number = finish.length || 0;
  const rem: number = remaining.length || 0;
​
  switch (true) {
    case fin <= 0: return 0;
    case rem <= 0: return 100;
    default: return parseInt((fin / (fin + rem) * 100).toString(), 10);
  }
}

describe('getProgress', () => {
  test('進捗50%', () => {
    const finishedApprovals: string[] = ['1', '2', '3'];
    const remainingApprovals: string[] = ['4', '5', '6'];

    expect(getProgress(finishedApprovals, remainingApprovals)).toBe(50);
  })

  test('進捗0%', () => {
    const finishedApprovals: string[] = [];
    const remainingApprovals: string[] = ['4', '5', '6'];

    expect(getProgress(finishedApprovals, remainingApprovals)).toBe(0);
  })

  test('進捗100%', () => {
    const finishedApprovals: string[] = ['1', '2', '3'];
    const remainingApprovals: string[] = [];

    expect(getProgress(finishedApprovals, remainingApprovals)).toBe(100);
  })

  test('ぬるぽ1', () => {
    const finishedApprovals: string[] = null;
    const remainingApprovals: string[] = ['4', '5', '6'];

    expect(getProgress(finishedApprovals, remainingApprovals)).toBe(0);
  })

  test('ぬるぽ2', () => {
    const finishedApprovals: string[] = ['1', '2', '3'];
    const remainingApprovals: string[] = null;

    expect(getProgress(finishedApprovals, remainingApprovals)).toBe(0);
  })
})
