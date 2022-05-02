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


function prova () {
    
    const filteredItems = icons.filter( (currentItem) => {
        const filterBy = document.getElementById("filter-by").value;
        console.log(filterBy);
        if (filterBy === "all") {
            return currentItem;
        } else if (filterBy === "animal" && currentItem.type === "animal") {
            return currentItem;
        } else if (filterBy === "vegetable" && currentItem.type === "vegetable") {
            return currentItem;
        } else if (filterBy === "user" && currentItem.type === "user") {
            return currentItem;
        }
    });
    
    // Pulisco l'HTML per fare in modo che cambiano l'option del select non si accumulino gli item.
    htmlWrapper.innerHTML = "";
    
    console.log(filteredItems);
    
    filteredItems.forEach( (currentItem) => {
        htmlWrapper.innerHTML += `<div class="item">
        <i class="${currentItem.family} ${currentItem.prefix}${currentItem.name}" style="color: ${currentItem.color}"></i>
        <p>${currentItem.name.toUpperCase()}</p> 
        </div>`
    });
}

window.onload = prova()
select.onchange = prova;