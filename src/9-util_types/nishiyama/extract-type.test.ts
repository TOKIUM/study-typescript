type usableToys = '猫じゃらし' | 'まり' | 'ポインター';
type lovedToys = 'ポインター' | 'ぬいぐるみ';

type playableToys = Extract<usableToys, lovedToys>;

function play(toy: playableToys): string {
  return `${toy}で遊ぶの楽しいにゃん`;
}

describe('#play', () => {
  test('Pointer', () => {
    expect(play('ポインター')).toBe('ポインターで遊ぶの楽しいにゃん');
  })
})
