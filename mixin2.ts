// Disposable Mixin
interface IDisposable {
    dispose(): void;
}
class Disposable implements IDisposable {
    isDisposed: boolean;
    dispose() {
        this.isDisposed = true;
    }

}

// Activatable Mixin
interface IActivatable {
    isActive: boolean;
    activate: () => void;
    deactivate: () => void;

}
class Activatable implements IActivatable {
    isActive: boolean;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}
// Mixin utility functions
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

// Apply mixin
class ClassThatUseBothMixin implements IDisposable, IActivatable {
    // Disposable
    isDisposed: boolean = false;
    dispose: () => void;
    // Activatable
    isActive: boolean = false;
    activate: () => void;
    deactivate: () => void;
}
applyMixins(ClassThatUseBothMixin, [Disposable, Activatable]);

// Usage
let smartObj = new ClassThatUseBothMixin();