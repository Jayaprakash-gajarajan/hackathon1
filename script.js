let div = document.createElement("div");
div.setAttribute("class", "main1");

let formgroup = document.createElement("div");
formgroup.setAttribute("class", "form-group");

let htag = document.createElement("h1");
htag.setAttribute("id", "h");
htag.innerHTML = "Book Details";
htag.style.textAlign = "center";
htag.style.fontStyle = "normal";
htag.style.marginBottom = "20px";

let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("class", "form-control");
input.setAttribute("id", "main");
input.setAttribute("placeholder", "enter the book number");
input.style.width = "620px";

let button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn", "btn-primary");
button.innerHTML = "Search";
button.style.marginLeft = "270px";
button.style.marginTop = "20px";
button.addEventListener("click", foo);
//for active cases
let nam = document.createElement("div");
nam.setAttribute("id", "name");
let isbn = document.createElement("div");
isbn.setAttribute("id", "isbn");
let numberOfPages = document.createElement("div");
numberOfPages.setAttribute("id", "numberOfPages");
let authors = document.createElement("div");
authors.setAttribute("id", "author");
let publisher = document.createElement("div");
publisher.setAttribute("id", "publisher");
let released = document.createElement("div");
released.setAttribute("id", "released");
let characters = document.createElement("div");
characters.setAttribute("id", "characters");
//<div id="active">Total Number Of Active cases:123455</div>
formgroup.append(htag, input, button, nam, isbn, numberOfPages, authors, publisher, released, characters);

//For active cases

div.append(formgroup);
document.body.append(div);


async function foo() {
    try {
        let number = document.getElementById("main").value;
        console.log(number);
        //the API contain only 12 datas only so enter book number is below 13.
        let res = await fetch(`https://www.anapioficeandfire.com/api/books/${number}`);
        let res1 = await res.json();
        // console.log(res1);
        var index = 1;
        // console.log(res1.name);
        nam.innerHTML = `Book name is:  ${res1.name}.`;
        // console.log(res1.isbn);
        isbn.innerHTML = `Book isbn is:  ${res1.isbn}.`;
        // console.log(res1.numberOfPages);
        //console.log(res1.authors)
        numberOfPages.innerHTML = `Book total pages:  ${res1.numberOfPages}.`;
        authors.innerHTML = `Book author is: ${res1.authors}.`;
        // console.log(res1.publisher);
        publisher.innerHTML = `PublisherName: ${res1.publisher}.`;
        // console.log(res1.released);
        released.innerHTML = `Book release date is: ${res1.released}.`
        var names = ""; var con = 5;
        //output come after few seconds.
        for (var i = 0; i < con; i++) {
            let c1 = await fetch(`${res1.characters[i]}`)
            if (res1.characters.length < 1) {
                names = " Characters Name Not Mentioned";
                break;
            }
            let c2 = await c1.json();

            if (c2.name != "") {
                names += " " + c2.name + ",";
            }
            else if (c2.name == "") {
                con += 1;
            }


        }
        //  console.log(res1.characters.length);
        // console.log(names);
        characters.innerHTML = `Story Characters: ${names}.`;
        //  console.log(res1.povCharacters[0].length);
    } catch (error) {
        console.log(error);
    }

}