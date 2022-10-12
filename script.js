let books = [
    {
        "id":1,
        "title": "Homo Deus",
        "author": "Yuval Noah Harari",
        "cover-color":"black"
    },
    {
        "id":2,
        "title": "Quando accade l'impossibile",
        "author": "Stanislav Grof",
        "cover-color":"white"
    },
    {
        "id":3,
        "title": "Atomic Habits",
        "author": "James Clear",
        "cover-color":"white"
    },
    {
        "id":4,
        "title": "Il pensiero flessibile",
        "author": "Leonard Mlodinow",
        "cover-color":"yellow"
    },
    {
        "id":5,
        "title": "Siddharta",
        "author": "Hermann Hesse",
        "cover-color":"light blue"
    },
    {
        "id":6,
        "title": "The subtle art of not giving a fuck",
        "author": "Mark Manson",
        "cover-color":"white"
    },
    {
        "id":7,
        "title": "Bioenergetica",
        "author": "Alexander Lowen",
        "cover-color":"red"
    },
    {
        "id":8,
        "title": "1984",
        "author": "George Orwell",
        "cover-color":"black"
    },
    {
        "id":9,
        "title": "La misura del mondo",
        "author": "Daniel Kehlmann",
        "cover-color":"beige"
    },
    {
        "id":10,
        "title": "Utopia",
        "author": "Thomas More",
        "cover-color":"green"
    }
];
let searched = [];

let search_bar = document.getElementById('search')
let submit_btn = document.getElementById('btn')
let searched_list = document.getElementById('searched_items')


submit_btn.onclick = () => {
    // clearDisplay();
    displayBookData()
    
}

function displayBookData(){
    let input_title = search_bar.value.toLowerCase().trim().replaceAll('  ', ' ');
    console.log(input_title);
    
    for(let book of books){
        let title = book.title.toLowerCase();
       
        let display = document.getElementById('display')
        let searched_list = document.getElementById('searched_items')
        
        console.log(book.title)
        if(title === input_title){
            display.innerHTML = '';
            
            // let cover_img = document.getElementById('img_container')

            display.innerHTML = `
            <h2>Title: ${book.title}</h2>
            <h3>Author: ${book.author}</h3>
            `
            // cover_img.innerHTML = `<img src="${book.coverimg}" alt="book cover">`


            searched.push(book)
            break
        }else{
            display.innerHTML = '';

            display.innerHTML = '<h3>Sorry: Error 404 (°_°)" </h3>'
        }
    }
    // console.log(searched)
    searched_list.innerHTML = '';
    for(let searchedBook of searched){
        searched_list.innerHTML += `<li>${searchedBook.title}</li>`
    }





    search_bar.value = '';
}



