export default class ImmutableMap<K, V> {
  protected map: object;

  // objectの型指定したいです
  constructor(map: object = {}) {
    this.map = map;
  }

  has(key: K): boolean {
    return Object.keys(this.map).includes(key as any);
  }

  get(key: K): V {
    if (this.has(key)) {
      return this.map[key as any];
    }

    return null;
  }

  set(key: K, value: V): ImmutableMap<K, V> {
    return new ImmutableMap({ ...this.map, [key as any]: value });
  }
}
