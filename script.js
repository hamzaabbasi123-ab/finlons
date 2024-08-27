       // scripts.js
       document.getElementById('menu-btn').addEventListener('click', function() {
        var navigation = document.getElementById('navigation');
        navigation.classList.toggle('active'); // Toggle the 'active' class on the navigation
    });
    function toggleAnswer(button) {
        const answer = button.nextElementSibling;
        button.classList.toggle('active');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    }