namespace Capability {
  export class Speakable implements CapabilityCheker {
    isCapable(species: string): boolean {
      return species === 'human';
    }
  }
}
