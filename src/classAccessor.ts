class ClassWithAccessor {
    private _privateMember: string;
    private _privateMember2: string;

    get privateMember(): string {
        return this._privateMember;
    }

    set privateMember(newName: string) {
        this._privateMember = newName;
    }
    get privateMember2(): string {
        return this._privateMember2;
    }
}
const cwa = new ClassWithAccessor();
cwa.privateMember = "Value";
cwa.privateMember2 = "Value"; // Doesn't compile
console.log(cwa.privateMember);
console.log(cwa.privateMember2);