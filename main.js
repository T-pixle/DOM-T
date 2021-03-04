// part1: My jokes.
const main = document.querySelector("main");
var joke1 = "Knock, knock. Who's there? Cows go. Cows go who? No silly, cows go MOO!";
var joke2 = "Why did the duck cross the road? Because it thought it was a chicken.";
var joke3 = "What do sprinters eat before a race? Nothing, they fast!";
const template = `
    <section>
        <h2> My Jokes. </h2>
        <p>
            <ol>
                <li>${joke1}</li>
                <li>${joke2}</li>
                <li>${joke3}</li>
            </ol>
        
        </p>
    </section>
`;
main.innerHTML = template

// part2: That's all folks!
const body = document.querySelector("body");
const p = document.createElement("p")
p. textContent = "That's all folks!";
body.appendChild(p);