const ingredients = ['Farina', 'Uova', 'Latte', 'Biscotti', 'Pomodori', 'Pollo', 'Mele', 'Burro', 'Zucchero', 'Grana', 'Pane', 'Gelato', 'Aceto', 'Deodorante', 'Yogurt']

const shopping_notes = document.querySelector('.shopping-list');

let i = 0;
let list = '';
let list_item = '';


while (i < ingredients.length) {

    list = ingredients[i];
    i++;
    
    list_item += `<li>${i}</li>`;
    shopping_notes.innerHTML = list_item;
}




