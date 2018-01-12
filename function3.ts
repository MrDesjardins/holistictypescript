const family = {
    names: ["Patrick", "Alicia", "Melodie"],
    emotion: "love",
    print: function () {
        console.log("print", this); // this = the family object
        // return this.names.forEach((name: string) => {
        return this.names.forEach(function (name: string) {
            console.log("forEach", this); // this = Node.js
            console.log(`${this.emotion} with ${name}.`);
        });
    }
};
family.print();