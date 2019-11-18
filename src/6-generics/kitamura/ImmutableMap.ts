export default class ImmutableMap<K, V> {
  protected keys: K[];
  protected values: V[];

  constructor() {
    this.keys = [] as K[];
    this.values = [] as V[];
  }

  has(key: K): boolean {
    return this.keys.includes(key);
  }

  get(key: K): V {
    const index = this.keys.indexOf(key);

    if (index === -1) {
      return null;
    }

    return this.values[index];
  }

  set(key: K, value: V): ImmutableMap<K, V> {
    const index = this.keys.indexOf(key);
    let keys: K[];
    let values: V[];

    if (index === -1) {
      keys = [...this.keys, key];
      values = [...this.values, value];
    } else {
      keys = [...this.keys];
      values = [...this.values];
      values[index] = value;
    }

    const newMap = new ImmutableMap<K, V>();
    newMap.keys = keys;
    newMap.values = values;

    return newMap;
  }
}
