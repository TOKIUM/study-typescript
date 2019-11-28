// import Flyable from './Flyable';
// import Swimmable from './Swimmable';
// import Speakable from './Speakable';
// import Healable from './Healable';

const flyable = new Capability.Flyable();
const swimmable = new Capability.Swimmable();
const speakable = new Capability.Speakable();
const healable = new Capability.Healable();

describe('Capability', () => {
  test('flyable', () => {
    expect(flyable.isCapable('cat')).toBe(false);
    expect(flyable.isCapable('human')).toBe(false);
    expect(flyable.isCapable('bird')).toBe(true);
    expect(flyable.isCapable('fish')).toBe(false);
  });
  test('swimmalbe', () => {
    expect(swimmable.isCapable('cat')).toBe(false);
    expect(swimmable.isCapable('human')).toBe(false);
    expect(swimmable.isCapable('bird')).toBe(false);
    expect(swimmable.isCapable('fish')).toBe(true);
  });
  test('speakable', () => {
    expect(speakable.isCapable('cat')).toBe(false);
    expect(speakable.isCapable('human')).toBe(true);
    expect(speakable.isCapable('bird')).toBe(false);
    expect(speakable.isCapable('fish')).toBe(false);
  });
  test('healabke', () => {
    expect(healable.isCapable('cat')).toBe(true);
    expect(healable.isCapable('human')).toBe(true);
    expect(healable.isCapable('bird')).toBe(false);
    expect(healable.isCapable('fish')).toBe(false);
  });
})
