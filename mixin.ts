type Constructor<T = {}> = new (...args: any[]) => T;
class Player {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

function Runner<TBase extends Constructor>(Base: TBase) {
    return class Timestamped extends Base {
        private speed = 10;
        public do = () => {
            console.log("Run at the pace of " + this.speed)
        };
    };
}


// Mixin with a constructo
function Walker<TBase extends Constructor>(Base: TBase) {
    return class Timestamped extends Base {
        private speed: number;
        constructor(...args: any[]) {
            super(...args);
            this.speed = 5;
        }
        public do = () => {
            console.log("Walk at the pace of " + this.speed)
        };

        public stop(): void {
            console.log("Walk has stopped");
            this.speed = 0;
        }
    };
}

// const PlayerThatCanRun = Walker(Runner(Player));
const PlayerThatCanRun = Runner(Walker(Player));

const user = new PlayerThatCanRun("Patrick");

console.log(user.name);
user.do();
user.stop();