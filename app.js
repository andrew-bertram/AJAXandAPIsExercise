// AJAX and APIs Exercise
// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1);
first.append(p2);
const jokeJSON = `{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;
const jokeJS = JSON.parse(jokeJSON);
p1.innerText = jokeJS.setup;
p2.innerText = jokeJS.punchline;

// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);

axios.get('https://official-joke-api.appspot.com/random_joke')
    .then(res => {
        const jokeJS2 = res.data;
        console.log(jokeJS2);
        p3.innerText = res.data.setup;
        p4.innerText = res.data.punchline;
    })
    .catch(err => {
        console.log(err);
    });

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);

async function jokeFunc() {
    try{
        const jokeJS3 = await axios.get(`https://official-joke-api.appspot.com/random_joke`);
        p5.innerText = jokeJS3.data.setup;
        p6.innerText = jokeJS3.data.punchline;
    } catch (err) {
        console.log(err);
    }
}
jokeFunc();

// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

const id = "38963";
const season = "1";
const number = "8";

const baseEndpoint = `http://api.tvmaze.com/`;
const episodeSearchURL = `shows/${id}/episodebynumber?season=:${season}&number=${number}`;
const fullEndpoint = baseEndpoint + episodeSearchURL;

async function tvMazeFunc() {
    try {
        const mando = await axios.get(fullEndpoint);
        p7.innerText = mando.data
    } catch(err) {
        console.log(err);
    }
}
tvMazeFunc();