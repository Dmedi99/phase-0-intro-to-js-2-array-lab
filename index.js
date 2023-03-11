// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    name = "Ralph"
    cats.push(name)

}

function destructivelyPrependCat(name){
    name = "Bob"
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
} 

function appendCat(name){
        var newCats = [...cats,name]
        return newCats
}

function prependCat(name){
    var newCats = [name, ...cats]
    return newCats
} 

function removeLastCat(){
    var newCats = cats.slice(0,-1)
    return newCats
}

function removeFirstCat(){
    var newCats = cats.slice(1)
    return newCats


}
