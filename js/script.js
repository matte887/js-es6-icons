const icons = [
	{
		name: "cat",
		prefix: "fa-",
		type: "animal",
		family: "fas",
		color: "orange"
	},
	{
		name: "crow",
		prefix: "fa-",
		type: "animal",
		family: "fas",
		color: "orange"
	},
	{
		name: "dog",
		prefix: "fa-",
		type: "animal",
		family: "fas",
		color: "orange"
	},
	{
		name: "dove",
		prefix: "fa-",
		type: "animal",
		family: "fas",
		color: "orange"
	},
	{
		name: "dragon",
		prefix: "fa-",
		type: "animal",
		family: "fas",
		color: "orange"
	},
	{
		name: "horse",
		prefix: "fa-",
		type: "animal",
		family: "fas",
		color: "orange"
	},
	{
		name: "hippo",
		prefix: "fa-",
		type: "animal",
		family: "fas",
		color: "orange"
	},
	{
		name: "fish",
		prefix: "fa-",
		type: "animal",
		family: "fas",
		color: "orange"
	},
	{
		name: "carrot",
		prefix: "fa-",
		type: "vegetable",
		family: "fas",
		color: "green"
	},
	{
		name: "apple-alt",
		prefix: "fa-",
		type: "vegetable",
		family: "fas",
		color: "green"
	},
	{
		name: "lemon",
		prefix: "fa-",
		type: "vegetable",
		family: "fas",
		color: "green"
	},
	{
		name: "pepper-hot",
		prefix: "fa-",
		type: "vegetable",
		family: "fas",
		color: "green"
	},
	{
		name: "user-astronaut",
		prefix: "fa-",
		type: "user",
		family: "fas",
		color: "blue"
	},
	{
		name: "user-graduate",
		prefix: "fa-",
		type: "user",
		family: "fas",
		color: "blue"
	},
	{
		name: "user-ninja",
		prefix: "fa-",
		type: "user",
		family: "fas",
		color: "blue"
	},
	{
		name: "user-secret",
		prefix: "fa-",
		type: "user",
		family: "fas",
		color: "blue"
	}
];

// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

// Bonus
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

const htmlWrapper = document.querySelector(".wrapper");
const select = document.getElementById("filter-by");

// window.onload = main;
main();

select.addEventListener('change', function() {
    main();
});

function main () {
    
    const filteredItems = icons.filter( (currentItem) => {
        const filterBy = document.getElementById("filter-by").value;
        if (filterBy === "all") {
            return currentItem;
        } else if (filterBy === currentItem.type) {
            return currentItem;
        }
    });
    
    // Pulisco l'HTML per fare in modo che cambiando l'option del select non si accumulino gli item.
    htmlWrapper.innerHTML = "";
    
    filteredItems.forEach( (currentItem) => {
        htmlWrapper.innerHTML += `<div class="card">
        <i class="${currentItem.family} ${currentItem.prefix}${currentItem.name}" style="color: ${currentItem.color}"></i>
        <p>${currentItem.name.toUpperCase()}</p> 
        </div>`
    });
    
}

