import * as capabilities from './Capability';

export namespace Capability {
  export class Healable implements capabilities.Capability.CapabilityCheker {
    isCapable(species: string): boolean {
      return species === 'cat' || species === 'human';
    }
  }
}
