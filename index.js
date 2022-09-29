const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}
function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    return cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
}
function appendCat(name) {
    const allCats = [...cats, name];
    return allCats;
}
function prependCat(name) {
    const allCats = [name, ...cats];
    return allCats;
}
function removeLastCat(name) {
    return cats.slice(0, -1);
}
function removeFirstCat(name) {
    return cats.slice(1);
}