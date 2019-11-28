export namespace Capability {
  export interface CapabilityCheker {
    isCapable(species: string): boolean;
  }

  export class Healable implements CapabilityCheker {
    isCapable(species: string): boolean {
      return species === 'cat' || species === 'human';
    }
  }

  export class Flyable implements CapabilityCheker {
    isCapable(species: string): boolean {
      return species === 'bird';
    }
  }

  export class Speakable implements CapabilityCheker {
    isCapable(species: string): boolean {
      return species === 'human';
    }
  }

  export class Swimmable implements CapabilityCheker {
    isCapable(species: string): boolean {
      return species === 'fish';
    }
  }
}
