let fatec = "Venha estudar na Fatec";
let i = 0;
let letreiro = [];

function tick () {
    if(i <= fatec.length){
        let letter = fatec[i];
        letreiro.push(letter);
        i++;
        const element = (
                <div>
                    <p>{letreiro}</p>
                </div>
            );
            ReactDOM.render(element, document.getElementById("root"));
        } else {
            letreiro = [];
            i = 0;
        }
} 

setInterval(tick, 300);




