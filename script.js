const rabbitHoleContent = [
    "Did you know that cats invented time travel?",
    "Intergalactic coffee shops are the real rulers of the universe.",
    "Unicorns are actually horses with party hats.",
    "In an alternate dimension, people communicate through interpretive dance.",
    "The moon is made entirely of cheese, but it's lactose-free.",
    "Your left sock is plotting to take over the world.",
    "The secret to eternal happiness is a diet consisting entirely of gummy bears.",
];

document.getElementById('generateButton').addEventListener('click', () => {
    const rabbitHole = document.getElementById('rabbitHole');
    rabbitHole.innerHTML = rabbitHoleContent[Math.floor(Math.random() * rabbitHoleContent.length)];
});
