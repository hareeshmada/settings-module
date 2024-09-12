
function createPair<S, T>(v1: S, v2: T): string {
    return `entered string was ${v2}and${v1}`;
}
console.log(createPair<number,string>(1,"hello"));

