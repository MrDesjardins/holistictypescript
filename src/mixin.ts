type Constructor<T = {}> = new (...args: any[]) => T;

// Mixing without a constructor
// Add a "do" function
function Runner<TBase extends Constructor>(Base: TBase) {
    return class Timestamped extends Base {
        private speed = 10;
        public do = () => {
            console.log("Run at the pace of " + this.speed)
        };
    };
}


// Mixin with a constructor
// Add a "do" function (or override if Runner is used)
// Add a "stop" function
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

class Player {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const PlayerThatCanRunWalk = Walker(Runner(Player));
const PlayerThatCanWalkRun = Runner(Walker(Player));
const user1 = new PlayerThatCanRunWalk("Patrick");
const user2 = new PlayerThatCanWalkRun("Patrick");
user1.do();
user1.stop();
user2.do();
user2.stop();
// Walk at the pace of 5
// Walk has stopped
// Run at the pace of 10
// Walk has stopped