type GenericAlias1<T> = {
    id: T;
    linkedList?: GenericAlias1<T>
};
const ga1: GenericAlias1<number> = {
    id: 1,
    linkedList: {
        id: 2
    }
}