document.addEventListener("DOMContentLoaded", function() {
    // Autocomplete functionality for the search bar
    const searchInput = document.getElementById('search-bar');
    const suggestions = ["Software Engineer", "Data Scientist", "Product Manager", "Graphic Designer", "Marketing Specialist"];
    
    searchInput.addEventListener('input', function() {
        let input = searchInput.value.toLowerCase();
        let suggestionsList = suggestions.filter(item => item.toLowerCase().includes(input));
        
        let autocompleteResults = document.getElementById('autocomplete-results');
        if (!autocompleteResults) {
            autocompleteResults = document.createElement('div');
            autocompleteResults.id = 'autocomplete-results';
            searchInput.parentNode.appendChild(autocompleteResults);
        }
        
        autocompleteResults.innerHTML = '';
        suggestionsList.forEach(item => {
            let div = document.createElement('div');
            div.innerHTML = item;
            div.classList.add('autocomplete-item');
            div.addEventListener('click', function() {
                searchInput.value = item;
                autocompleteResults.innerHTML = '';
            });
            autocompleteResults.appendChild(div);
        });
    });
});
