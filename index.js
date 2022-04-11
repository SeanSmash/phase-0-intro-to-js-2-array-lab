const cats = ["Milo", "Otis", "Garfield"];

function beforeEach(){
    cats.length = 0;
    cats.push = ["Milo", "Otis", "Garfield"];
}

function destructivelyAppendCat(name){
    return cats.push(name);
}

//beforeEach(cats);

const destructivelyPrependCat = name => cats.unshift(name);

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(name){
    const catsAppend = [...cats, name];
    return catsAppend;
}

function prependCat(name){
    const catsPrepend = [name, ...cats];
    return catsPrepend;
}

function removeLastCat(){
    const catsRemove = cats.slice(0, -1);
    return catsRemove;
}

function removeFirstCat(){
    const catsRemoveFirst = cats.slice(1);
    return catsRemoveFirst;
}