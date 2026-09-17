const filterSubmitBtn = document.getElementById('submit-filters')
const filterControls = document.getElementById('filter-controls')
const container = document.getElementById('Music-Collection')
let itemList = []

filterSubmitBtn.addEventListener("click", () => {
    const selectedCategory = document.getElementById("category-filter").value;
    const selectedGenre = document.getElementById("genre-filter").value;
    const selectedName = document.getElementById("name-filter").value.trim().toLowerCase();
    const itemsEls = container.querySelectorAll('.item');

    itemsEls.forEach(el => {
        const matchesCategory = (selectedCategory === "Select one") || (el.dataset.category === selectedCategory);
        const matchesGenre = (selectedGenre === "Select one") || (el.dataset.genre === selectedGenre);
        const matchesName = (selectedName === "") || (el.dataset.name && el.dataset.name.toLowerCase().includes(selectedName));

        if (matchesCategory && matchesGenre && matchesName) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    });
})



function getCategory(category) {
    return itemList.filter(item => item.category === category);
}

function toggleFilterControls() {
    filterControls.classList.toggle('hidden')
}

function renderItems() {
    container.innerHTML= "";
    itemList.forEach(item => {

        const card = document.createElement("details");
        card.className = "item";
        card.dataset.category = item.category;
        card.dataset.genre = item.genre;
        card.dataset.name = item.name;

        const summary = document.createElement("summary");

        const info = document.createElement("div");
        info.className = "item-info";
        info.innerHTML = `
        <img class="song-image" src="${item.images}">
        <h2 class="name">${item.name}</h2>
        <h4 class="genre"><strong>Genre:</strong> ${item.genre}</h4>
        <h5 class="category"><strong>Category:</strong> ${item.category}</h5>
        <p class="description">${item.description}</p>
        `;
        summary.appendChild(info)
        card.appendChild(summary);
        container.appendChild(card);
    })
}

function populateFilterOptions() {
    const genreSelect = document.getElementById('genre-filter');
    const categorySelect = document.getElementById('category-filter');

    const genres = new Set();
    const categories = new Set();

    itemList.forEach(item => {
        if (item.genre) genres.add(item.genre.trim());
        if (item.category) categories.add(item.category.trim());
    });

    // Helper to create option
    const makeOption = (value, text) => {
        const opt = document.createElement('option');
        opt.value = value;
        opt.textContent = text;
        return opt;
    };

    // Clear existing and add default
    genreSelect.innerHTML = '';
    genreSelect.appendChild(makeOption('Select one', 'Select one'));
    Array.from(genres).sort().forEach(g => genreSelect.appendChild(makeOption(g, g)));

    categorySelect.innerHTML = '';
    categorySelect.appendChild(makeOption('Select one', 'Select one'));
    Array.from(categories).sort().forEach(c => categorySelect.appendChild(makeOption(c, c)));
}

fetch("items.json")
    .then (r => r.json())
    .then (data => {
        itemList = data;
        renderItems()
        populateFilterOptions()
    })
    .catch(err => console.error("Failed to load items:", err));