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

    // Form validation for job application
    const applicationForm = document.querySelector('.application-form form');
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            let valid = true;
            const formData = new FormData(applicationForm);
            for (let [key, value] of formData.entries()) {
                if (!value) {
                    alert(`${key} is required`);
                    valid = false;
                    break;
                }
            }
            if (valid) {
                alert('Application submitted successfully!');
                applicationForm.reset();
            }
        });
    }
});
