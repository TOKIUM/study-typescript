namespace Capability {
  export class Swimmable implements CapabilityCheker {
    isCapable(species: string): boolean {
      return species === 'fish';
    }
  }
}
