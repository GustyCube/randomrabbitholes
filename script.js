const rabbitHoleContent = [
    "Did you know that cats invented time travel?",
    "Intergalactic coffee shops are the real rulers of the universe.",
    "Unicorns are actually horses with party hats.",
    "In an alternate dimension, people communicate through interpretive dance.",
    "The moon is made entirely of cheese, but it's lactose-free.",
    "Your left sock is plotting to take over the world.",
    "The secret to eternal happiness is a diet consisting entirely of gummy bears.",
    "A fly without wings is a walk.",
    "Is an orange called an orange because an orange is orange, or is an orange called orange because an orange is orange?",
    "A serial killer cannot kill you if you jump off a building.",
    "You don't need a parachute to skydive once, you only need one to skydive twice.",
    "I ate a box of cereal for breakfast. I am now a serial killer.",
    "You can only be born once, but you can die twice.",
    "I can guess one thing about you: You are currently reading this sentence.",
    "The Great Wall of China was built to keep out giant mutant hamsters.",
    "Trees are actually just really slow-moving, ancient creatures.",
    "The Bermuda Triangle is just a Bermuda Square with rounded corners.",
    "Every time you blink, you're communicating with aliens in Morse code.",
    "The lost city of Atlantis is actually an underwater disco party that never ends.",
    "If you stare at a pineapple long enough, it will start to recite Shakespeare.",
    "The Loch Ness Monster is a professional synchronized swimmer in disguise.",
    "Penguins have secret underground dance clubs in Antarctica.",
    "All clouds are just fluffy pillows for giants taking a nap.",
    "The first language ever spoken was Pig Latin.",
    "Mars is populated entirely by intergalactic hipster aliens.",
    "The internet is powered by a giant hamster running on a wheel.",
    "If you hum 'Twinkle, Twinkle, Little Star' backward, you can summon interdimensional jellyfish."
];

document.getElementById('generateButton').addEventListener('click', () => {
    const rabbitHole = document.getElementById('rabbitHole');
    rabbitHole.innerHTML = rabbitHoleContent[Math.floor(Math.random() * rabbitHoleContent.length)];
});
