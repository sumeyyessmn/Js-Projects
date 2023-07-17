//Elementleri Seçmek

const container = document.querySelector(".container");
const selectMovie = document.querySelector("#selectMovie");
const count = document.querySelector("#count");
const amount = document.querySelector("#amount");

runEventListeners();

function runEventListeners(){
    container.addEventListener("click", select);
    selectMovie.addEventListener("change",changeMovie)
}

function select(e){
    const selectedElement = e.target.parentElement;
   if(selectedElement.classList.contains("seat")&& !selectedElement.classList.contains("full")){
    selectedElement.classList.toggle("selected");
    calculate();
   }
}

function changeMovie(){
    calculate();
}

function getSelectedSeats(){
    const selectedList = Array.from(container.querySelectorAll(".selected"));
    return selectedList;
}

function calculate(){
    const selectedSeatsCount = getSelectedSeats().length;
    // const price = selectMovie.options[selectMovie.selectedIndex].value;
    const price = selectMovie.value;
    count.textContent = selectedSeatsCount;
    amount.textContent = selectedSeatsCount*price;
}