document.addEventListener("DOMContentLoaded", function(){

    const seats = document.querySelectorAll(".sear");
    const selectedSeat = document.querySelector("#selected-seats");
    const statusMessage = document.querySelector("#status-message");
    const reserveButton = document.querySelector("#btn-reserve");

    let selectedSeatCount = 0;

    function updateSelectedSeatCount() {
        selectedSeat.innerText = "Places sélectionnées : " + selectedSeatCount;
    }

    function seatClickHandler(){

        if(this.classList.contains("selected")){

            this.classList.remove("selected");
            selectedSeatCount--;

        }else{

            this.classList.add("selected");
            selectedSeatCount++;

        }

        updateSelectedSeatCount();
    }

    seats.forEach(function(seat){
        seat.addEventListener("click", seatClickHandler);
    });

    function reserveSeats(){
        if(selectedSeatCount > 0){
            statusMessage.innerText = 'Place reservée'
            statusMessage.style.color = "green"
        }else{
            statusMessage.innerText = 'selectionner au moin une place'
            statusMessage.style.color = "red"
        }
    }


    reserveButton.addEventListener("click",reserveSeats);

});