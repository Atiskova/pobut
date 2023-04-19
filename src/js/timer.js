
let intervalId = null;



function onStartTimer() {
    intervalId = setInterval(() => {
let now = new Date().getTime();
        
      let diff = 1731362400000 - now;
          if (diff <= 0) {
        clearInterval(intervalId);
        return;
      }

      const {hours, minutes, seconds } = convertMs(diff);
      
        document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
        document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
        document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
    }, 1000);
  }

  function convertMs(diff) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(diff / day);
    // Remaining hours
    const hours = Math.floor((diff % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((diff % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((diff % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
    
  function addLeadingZero(value) {
    return String(value).padStart(2, 0);
  }

  onStartTimer();