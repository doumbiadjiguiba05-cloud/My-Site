document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('merciCard');
    if (card) {
        card.addEventListener('click', function(event) {
            event.preventDefault();
            card.classList.toggle('flipped');
        });
    }
});
