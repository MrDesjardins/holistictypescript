const arrskip1 = [0, , , 3, 4];
arrskip1[100] = 100;
arrskip1.forEach((i) => { console.log("{" + i + "}"); });
console.log("This is undefined:" + arrskip1[1]);