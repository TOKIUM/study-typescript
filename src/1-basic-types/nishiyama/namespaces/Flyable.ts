import * as capabilities from './Capability';

export namespace Capability {
  export class Flyable implements capabilities.Capability.CapabilityCheker {
    isCapable(species: string): boolean {
      return species === 'bird';
    }
  }
}
