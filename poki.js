let main = document.querySelector('.main');

function show(pokemons){
    main.textContent = '';
    for(let i = 0; i < pokemons.length; i++){
        let box = document.createElement('div');
        box.classList.add('pokbox');
    
        let pic = document.createElement('img');
        pic.classList.add('pic');
        pic.src = pokemons[i].img;
        pic.alt = pokemons[i].name;
    
        let title = document.createElement('h2');
        title.classList.add('title');
        title.textContent = pokemons[i].name;
    
        let num = document.createElement('span');
        num.classList.add('num');
        num.textContent = pokemons[i].id;
    
        let list = document.createElement('ul');
        list.classList.add('list');
        
        let data = pokemons[i].weaknesses;
        for (let j = 0; j < data.length; j++){
            let item = document.createElement('li');
            item.classList.add('item');
            item.textContent = data[j];
            list.appendChild(item);
    
        }
    
        box.appendChild(num);
        box.appendChild(pic);
        box.appendChild(title);
        box.appendChild(list);
    
        main.appendChild(box);
    }
}

show(pokemons);
let input = document.querySelector('.search');

input.addEventListener('keyup', function(){
    let key = new RegExp(input.value, 'gi' );

    let pokemons2 = pokemons.filter (function(x){
        return x.name.match(key);
    })
    show(pokemons2);
})