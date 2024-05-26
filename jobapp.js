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

    // Form validation
    const form = document.getElementById('job-application-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Basic validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const resume = document.getElementById('resume').files[0];
        const coverLetter = document.getElementById('cover-letter').value;

        if (name && email && phone && resume && coverLetter) {
            alert('Application submitted successfully!');
            form.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
});
