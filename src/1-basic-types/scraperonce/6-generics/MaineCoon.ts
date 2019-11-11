import ICat from './ICat';

export default class MaineCoon implements ICat {
  constructor(
    public name: string,
    public color: string
  ) { }
}
