namespace Capability {
  export class Healable implements CapabilityCheker {
    isCapable(species: string): boolean {
      return species === 'cat' || species === 'human';
    }
  }
}
