interface Action<T> {
    requireAuth: boolean;
    payload: T;
}
const Action1ID = "Action1";
interface Action1 extends Action<string> {
    kind: typeof Action1ID;
}
const Action2ID = "Action2";
interface Action2 extends Action<number> {
    kind: typeof Action2ID;
    uniqueProperty: string;
}
const Action3ID = "Action3";
interface Action3 extends Action<boolean> {
    kind: typeof Action3ID;
}

function handleAction(action: Action1 | Action2 | Action3): void {
    if (action.kind === Action1ID) {
        console.log(action.payload.substr(0, 1));
    } else if (action.kind === Action2ID) {
        console.log("Unique:" + action.uniqueProperty + " for # " + action.payload);
    }
}

function createAction1(s: string): Action1 {
    return {
        payload: s,
        requireAuth: true,
        kind: Action1ID
    };
}
function createAction2(n: number, unique: string): Action2 {
    return {
        payload: n,
        requireAuth: true,
        kind: Action2ID,
        uniqueProperty: unique
    };
}
handleAction(createAction1("This is a test"));
handleAction(createAction2(100, "Super"));