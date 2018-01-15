class PrivateConstructor {
    private constructor() { }
    public static getNewInstance(): PrivateConstructor {
        return new PrivateConstructor();
    }
}
const pc1 = new PrivateConstructor(); // Doesn't compile
const pc2 = PrivateConstructor.getNewInstance();