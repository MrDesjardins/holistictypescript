function undefinedOptional1(a:number|undefined, b:number){
}

function undefinedOptional2F(a?:number, b:number){ // Doesn't compile because a is using optional: ?
}