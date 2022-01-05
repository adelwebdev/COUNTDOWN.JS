function getInputValue(){
    let choice = document.getElementById('choice').value;
    
    if(isNaN(choice)){
        alert("Entrer un nombre")
    } else{
        let startingMinutes = choice;
        this.choice.value = ('')
        let time = startingMinutes * 60;
        
        const countdownEl = document.getElementById('countdown');
        // console.log(time);
        // console.log(countdownEl);
        
        setInterval(updateCountdown, 1000);
        
        function updateCountdown() {
            const minutes = Math.floor(time / 60);
            let seconds = time % 60;
        
            seconds = seconds < 10 ? '0' + seconds : seconds;
            
            countdownEl.innerHTML = `${minutes} : ${seconds}`;
        
            if(time > 0) {
                time--;
            } else {
                countdownEl.innerHTML = `IT'S OVER!`
            }
        }
    }
}
