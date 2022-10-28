console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


let basket = [];
const maxItems = 5;

function isFull(curItems) {
    if (curItems.length < 5) {
        return false;
    }
        
    return true;
}

console.log(book);

function addItem(item) {
    if (isFull(basket)) {
        basket.push(item);
        return true;
    }
    return false;
}

function listItems(basket) {
    for (let i = 0; i < basket.length; i++) {
        console.log(basket[i]);
    }
}


function empty(){
    basket = [];
    return console.log('your basket has been emptied')
}