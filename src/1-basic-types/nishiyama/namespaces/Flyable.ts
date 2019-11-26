namespace Capability {
  export class Flyable implements CapabilityCheker {
    isCapable(species: string): boolean {
      return species === 'bird';
    }
  }
}
