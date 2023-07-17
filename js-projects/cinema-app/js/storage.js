class Storagex{
    static keySelectedSeats="keySelectedSeats";
    static keyFullSeats="keyFullSeats";
    static keySelectedMovie="keySelectedMovie";

    getSelectedSeatsFromStorage(){
        let selectedSeats;
        if(localStorage.getItem(this.keySelectedSeats)===null){
            selectedSeats=[];
        }else{
           selectedSeats = JSON.parse(localStorage.getItem(this.keySelectedSeats)); 
        }
        return selectedSeats;
    }

    getFullSeatsFromStorage(){
        let fullSeats;
        if(localStorage.getItem(this.keyFullSeats)===null){
            fullSeats=[];
        }else{
            fullSeats = JSON.parse(localStorage.getItem(this.keyFullSeats));
        }
        return fullSeats;
    }

    //Ekleme

    addSelectedSeatToStorage(indexs){
        localStorage.setItem(this.keySelectedSeats, JSON.stringify(indexs));
    }
}