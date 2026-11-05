const filterSubmitBtn = document.getElementById('submit-filters')
const filterControls = document.getElementById('filter-controls')
const container = document.getElementById('Music-Collection')
const bookmarksOnlyFilter = document.getElementById('bookmarks-only')
const bookmarksStorageKey = 'music-collection-bookmarks'
const categoryStorageKey = 'music-collection-category'
let itemList = []
let bookmarkList = []

function loadPreferences() {
    try {
        const savedBookmarks = JSON.parse(localStorage.getItem(bookmarksStorageKey));
        bookmarkList = Array.isArray(savedBookmarks) ? savedBookmarks.map(String) : [];
    } catch {
        bookmarkList = [];
    }
}

container.addEventListener('click', (event) => { // for bookmarks
    const bookmarkButton = event.target.closest('.bookmark-btn');
    if (!bookmarkButton) return;

    event.preventDefault();
    event.stopPropagation();

    const star = bookmarkButton.querySelector('.bookmark-star');
    const isBookmarked = star.classList.toggle('fa-solid');
    star.classList.toggle('fa-regular', !isBookmarked);
    bookmarkButton.setAttribute('aria-pressed', isBookmarked);

    const itemId = bookmarkButton.dataset.itemId;
    if (isBookmarked && !bookmarkList.includes(itemId)) {
        bookmarkList.push(itemId);

        const bookmarkedItem = itemList.find(item => String(item.id) === itemId);
        if (bookmarkedItem) {
            localStorage.setItem(categoryStorageKey, bookmarkedItem.category);
        }
    } else if (!isBookmarked) {
        bookmarkList = bookmarkList.filter(id => id !== itemId);
    }

    localStorage.setItem(bookmarksStorageKey, JSON.stringify(bookmarkList));
    applyFilters();
})

function applyFilters() {
    const selectedCategory = document.getElementById("category-filter").value;
    const selectedGenre = document.getElementById("genre-filter").value;
    const selectedName = document.getElementById("name-filter").value.trim().toLowerCase();
    const bookmarksOnly = document.getElementById("bookmarks-only").checked;
    const itemsEls = container.querySelectorAll('.item');


    itemsEls.forEach(el => {
        const matchesCategory = (selectedCategory === "Select one") || (el.dataset.category === selectedCategory);
        const matchesGenre = (selectedGenre === "Select one") || (el.dataset.genre === selectedGenre);
        const matchesName = (selectedName === "") || (el.dataset.name && el.dataset.name.toLowerCase().includes(selectedName));
        const matchesBookmarks = !bookmarksOnly || bookmarkList.includes(String(el.dataset.id));

        if (matchesCategory && matchesGenre && matchesName && matchesBookmarks) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    });
}

filterSubmitBtn.addEventListener("click", applyFilters)

bookmarksOnlyFilter.addEventListener('change', applyFilters);

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
        card.dataset.id = item.id;
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
        <button type="button" class="button bookmark-btn" data-item-id="${item.id}" aria-label="Bookmark ${item.name}" aria-pressed="${bookmarkList.includes(String(item.id))}"><i class="${bookmarkList.includes(String(item.id)) ? 'fa-solid' : 'fa-regular'} fa-star bookmark-star"></i></button>
        `;
        summary.appendChild(info)
        card.appendChild(summary);
        container.appendChild(card);
    })

    console.log("The last bookmarked category (preference) is: " + localStorage.getItem(categoryStorageKey))
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

loadPreferences();

fetch("items.json")
    .then (r => r.json())
    .then (data => {
        itemList = data;
        renderItems()
        populateFilterOptions()
    })
    .catch(err => console.error("Failed to load items:", err));