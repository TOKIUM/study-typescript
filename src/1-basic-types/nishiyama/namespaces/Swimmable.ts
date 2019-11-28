import * as capabilities from './Capability';

export namespace Capability {
  export class Swimmable implements capabilities.Capability.CapabilityCheker {
    isCapable(species: string): boolean {
      return species === 'fish';
    }
  }
}
