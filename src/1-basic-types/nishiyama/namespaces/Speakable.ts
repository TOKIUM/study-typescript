import * as capabilities from './Capability';

export namespace Capability {
  export class Speakable implements capabilities.Capability.CapabilityCheker {
    isCapable(species: string): boolean {
      return species === 'human';
    }
  }
}
