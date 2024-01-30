document.addEventListener('DOMContentLoaded', function() {
    const set1 = [
        {
            text: "This product changed my life! Highly recommended.",
            name: "- Client 1"
        },
        {
            text: "Exceptional service and fast support. Thank you very much.",
            name: "- Client 2"
        },
        {
            text: "High quality, I can't believe how good it is.",
            name: "- Client 3"
        }
    ];

    const set2 = [
        {
            text: "The user interface is so intuitive and easy to use. I'm impressed!",
            name: "- Client 4"
        },
        {
            text: "Their attention to detail and customer service is unmatched.",
            name: "- Client 5"
        },
        {
            text: "I've seen a significant improvement in efficiency since using this product.",
            name: "- Client 6"
        }
    ];
    let currentSet = set2;
    function updateTestimonials() {
        const cards = document.querySelectorAll('.testimonial-card');
        cards.forEach(card => card.classList.add('hide'));
        setTimeout(() => {
            cards.forEach((card, index) => {
                card.querySelector('.testimonial-text').textContent = `"${currentSet[index].text}"`;
                card.querySelector('.client-name').textContent = currentSet[index].name;
            });
            cards.forEach(card => card.classList.remove('hide'));
            currentSet = currentSet === set1 ? set2 : set1;
        }, 500);
    }
    setInterval(updateTestimonials, 5000);
});
