export default class ImmutableMap<K, V> {
  protected map: object;

  // objectの型指定したいです
  constructor(map: object = {}) {
    this.map = map;
  }

  has(key: K): boolean {
    return Object.keys(this.map).includes(key as any); // eslint-disable-line @typescript-eslint/no-explicit-any
  }

  get(key: K): V {
    if (this.has(key)) {
      return this.map[key as any]; // eslint-disable-line @typescript-eslint/no-explicit-any
    }

    return null;
  }

  set(key: K, value: V): ImmutableMap<K, V> {
    return new ImmutableMap({ ...this.map, [key as any]: value }); // eslint-disable-line @typescript-eslint/no-explicit-any
  }
}
