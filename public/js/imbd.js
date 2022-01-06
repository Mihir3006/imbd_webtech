// fetch("https://imdb8.p.rapidapi.com/auto-complete?q=avengers%20endgame", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "imdb8.p.rapidapi.com",
// 		"x-rapidapi-key": "bba6fbd440mshc77d22f105f016ep1742d3jsn96e896a48a7f"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

const msg =() =>{
    alert("best expirence on desktop.")
}
const text = document.getElementById('ShowName');

text.addEventListener("click",function(){
    document.querySelector('.showitems').innerHTML = "";
})

const search = document.getElementById("btn");

const show = () => {
    const search = document.getElementById('ShowName').value;
    const splitText = search.replace(" ", "%20");
    console.log(splitText)
    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${splitText}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": "bba6fbd440mshc77d22f105f016ep1742d3jsn96e896a48a7f"
        }
    })
        .then(response => response.json())
        .then(data => {
            const list = data.d;
            console.log(list);
            list.map((items) => {
                const year = items.y;
                const name = items.l;
                const Caste = items.s;
                const rank = items.rank;
                const poster = items.i.imageUrl;
                const movie = `<div class="col-lg-4 col-md-6 col-sm-12 ">
        <div class="movie_card">
        <div class="poster">
            <img src="${poster}" alt="soory">
        </div>
        <div class="card-body">
            <h2>${name}</h2>
            <h3>Rank:- ${rank}</h3>
            <h3>Lanch year:- ${year}</h3>
            <p>Caste:${Caste} </p>
        </div>
        <div class="button">
            <button><i class="far fa-play-circle"></i>WACH NOW</button>
            <button><i class="fas fa-arrow-circle-down"></i>Download</button>
        </div>
        </div>
    </div>`
                // document.querySelector('.row').innerHTML = "";
                document.querySelector('.showitems').innerHTML += movie;
            });
        })

        .catch(err => {
            alert("Enter right name");
        });
}

search.addEventListener("click", show);