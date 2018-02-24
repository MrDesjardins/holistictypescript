import "reflect-metadata";
const formatMetadataKey = Symbol("format");

// Decorator to use on property
export function stringCoater(formatString: string, star: number) {
    const stringToUse = Array(star).join("*") 
    + formatString 
    + Array(star).join("*");
    return Reflect.metadata(formatMetadataKey, stringToUse);
}

// Read the decorator from the property
export function getFormat<T>(
    target: Object
    , propertyKey: keyof T
): string {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

class DecoratorOnProperty {
    @stringCoater("[%s]", 10)
    public title: string;
    constructor(title: string) { this.title = title; }
    public getFormattedTitle(): string {
        const formatString = getFormat<DecoratorOnProperty>(this, "title");
        return formatString.replace("%s", this.title);
    }
}
const objDecoProp = new DecoratorOnProperty("Test");
console.log("Out", objDecoProp.getFormattedTitle());
// Out *********[Test]*********