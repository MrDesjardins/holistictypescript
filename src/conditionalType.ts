type SwapType<T extends number | string> = T extends number ? string : number;

function swapper<T extends number | string>(id: T): SwapType<T>{
    switch (typeof id) {
		case "number": 
			return id.toString();
		case "string": 
			return Number(id);
		default:
			throw new TypeError("Not supported");
	}
}

const idNumber = swapper("123");
const idString = swapper(123);
console.log(`Number ${typeof idNumber} and string ${typeof idString}`);