document.addEventListener('DOMContentLoaded', () => {
    console.log('Ласкаво просимо до Морських турів, Валентино!');

    document.querySelector('.tour-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const destination = event.target.destination.value;
        const departure = event.target.departure.value;
        const people = event.target.people.value;
        const country = event.target.country.value;

        console.log(`Пошук турів до ${destination} з ${departure} для ${people} людей у країні ${country}.`);
        alert(`Пошук турів до ${destination} з ${departure} для ${people} людей у країні ${country}.`);

        filterToursByCountry(country);
    });

    function filterToursByCountry(country) {
        const tourCards = document.querySelectorAll('.tour-card');
        tourCards.forEach(card => {
            if (country === 'all' || country === 'Romania' || card.dataset.country === country) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});
