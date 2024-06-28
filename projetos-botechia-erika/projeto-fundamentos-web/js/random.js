class Question{
    id="";
    subject ="";
    category = 1;
    question = "";
    answer = "";
    optionA = "";
    optionB = "";
    optionC = "";
    optionD = "";
    optionE = "";
    explanation = "";
    author = "";

    buildTrueOrFalse(){
        template = `
        <article>
        <div>
            <h2>Verdadeiro ou Falso</h2>
            <p>${this.question}</p>
            <button>Verdadeiro</button>
            <button>Falso</button>
        </div>
        <div class="modal-1">
            <h3></h3>
        
        </div>
        </article>
        `
    }
}