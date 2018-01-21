import "reflect-metadata";
const notnullMetadataKey = Symbol("notnull");

export function notnull(
    target: Object
    , propertyKey: string | symbol
    , parameterIndex: number) {
    let existingRequiredParameters: number[]
        = Reflect.getOwnMetadata(notnullMetadataKey, target, propertyKey)
        || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(notnullMetadataKey
        , existingRequiredParameters, target, propertyKey);
}

export function validatenotnull(target: Object
    , propertyName: string
    , descriptor: TypedPropertyDescriptor<Function>) {
    const originalMethod = descriptor.value;
    if (originalMethod !== undefined) {
        descriptor.value = function (...args: any[]) {
            const requiredParameters: number[]
                = Reflect.getOwnMetadata(notnullMetadataKey
                    , target, propertyName);
            if (requiredParameters) {
                for (const parameterIndex of requiredParameters) {
                    const valueOfParameter = args[parameterIndex];
                    if (valueOfParameter === undefined
                        || valueOfParameter === null) {
                        const types = Reflect.getMetadata("design:paramtypes"
                            , target, propertyName) as object[];
                        throw new Error("Missing required argument name at index '"
                            + parameterIndex + "' of type '"
                            + types[parameterIndex].toString()
                            + "'. Value is '" + valueOfParameter + "'.");
                    }
                }
            }
            return originalMethod.apply(this, args);
        }
    }
    return undefined;
}

class DecoratorOnParameter {
    @validatenotnull
    public concatenate(@notnull s1?: string, s2: string = ""): string {
        return s1 + s2;
    }
}
const objDecoParam = new DecoratorOnParameter();
objDecoParam.concatenate(undefined);