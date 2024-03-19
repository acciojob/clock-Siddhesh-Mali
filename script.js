//your JS code here. If required.
const clockElement = document.getElementById('clock');

function updateClock() {
  const now = new Date();
  const month = now.getMonth() + 1; // Months are zero-indexed (January is 0)
  const day = now.getDate();
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const amPm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12; // Convert to 12-hour clock

  clockElement.textContent = `${month}/${day}/${year}, ${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${amPm}`;
}

updateClock(); 
setInterval(updateClock, 1000);