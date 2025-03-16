function fetchDadJoke() {
    fetch(`https://api.dadjokes.io/api/random/joke`)
    .then(response => response.json())
    .then(data => {
        const joke = data.results[0] ? `${data.results[0].setup} ${data.results[0].punchline}` : "Here's a dad joke!";
        document.getElementById('joke').innerText = joke;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchDadJoke();
});