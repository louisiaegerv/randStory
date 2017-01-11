var btn = document.querySelector("button");
var story = document.querySelector('.storyContainer');
var nameInput = document.getElementById("nameInput");

btn.addEventListener("click", output);

var storyText = "It was 94 fahrenheit outside, so :randName:  went for a walk. When he got to :randPlace:, he stared in horror for a few moments, then :randEvent:. Bob saw the whole thing, but he was not surprised — :randName: is :randNoun:, and it was a hot day."

var names = [ "Poseidon", "the zombie", "Snoop Dogg", "Justin Beiber", "Donald Trump", "Iron Man", "Captain America", "The Hulk", "The Rock", "Lebron James", "Steph Curry", "Tom Cruise", "Jack Sparrow", "Elvis Presley", "grandpa", "Kanye West", "Tony Romo", "Tom Brady", "Leonardo DiCaprio", "Will Smith"];

var places = ["School", "Disneyland", "the White House", "the International Space Station", "the Great Wall of China", "some random guy's house", "the cheapest bar in town", "a taxi", "a playground full of children", "a church", "the beach", "Six Flags", "the Supreme Court", "Hogwarts" ];

var events = [ "exploded", "spontaneously combusted", "melted into a puddle of ice cream", "turned into a banana and crawled away", "started doing the Macarena", "began to recite the Declaration of Independence", "fed pigeons his leftover bagels", "did a kamehameha", "started training for the Olympics"];

var nouns = ["a party animal", "a machine", "not a doctor", "part man, part horse", "an extra in The DaVinci Code", "a former graduate from junior chef academy", "an ex-Marine", "the winner of the Bachelor season 3", "one of the contestants of Fear Factor", "a retired pro wrestler", "a kung fu master", "part Koala, part Sloth", "the only person to ever watch Beverly Hills Chihuahua 2"];

function randArrVal(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function output() {
    var newStory = storyText;
    var randName = randArrVal(names);
    var randPlace = randArrVal(places);
    var randEvent = randArrVal(events);
    var randNoun = randArrVal(nouns);
    
    newStory = newStory.replace(":randName:", randName);
    newStory = newStory.replace(":randName:", randName);
    newStory = newStory.replace(":randPlace:", randPlace);
    newStory = newStory.replace(":randEvent:", randEvent);
    newStory = newStory.replace(":randNoun:", randNoun);
    
    if (nameInput != '') {
        var name = nameInput.value;
        newStory = newStory.replace('Bob', name);
    }
    
    story.textContent = newStory;
    story.style.backgroundColor = 'orange';
    story.style.padding = '20px';
}