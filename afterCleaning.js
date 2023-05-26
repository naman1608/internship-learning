let totalDuration = 0;
const secondsInHour = 3600;
const secondsInMinute = 60;

displayTotalTime();

var contentDOM = document.getElementById('contents');

if (window.addEventListener) {
  // Normal browsers
  contentDOM.addEventListener('DOMSubtreeModified', handleContentChange, false);
} else if (window.attachEvent) {
  // IE
  contentDOM.attachEvent('DOMSubtreeModified', handleContentChange);
}

function handleContentChange() {
  var timeDOM = document.getElementById('totaltime');
  timeDOM.parentNode.removeChild(timeDOM);
  displayTotalTime();
}

function fetchVideoDurations(){
  let videoTimes = Array.from(document.querySelectorAll('span.ytd-thumbnail-overlay-time-status-renderer'))
  .map((videoDuration) => videoDuration.innerText.trim());
  return videoTimes;
}

function createDurationObjects() {
  let videoTimes = fetchVideoDurations();
  return videoTimes.map((videoTime) => {
    const [hours, minutes, seconds] = videoTime.split(':').map(Number);
    return {
        hours: hours, 
        minutes: minutes, 
        seconds: seconds
    };
  });
}

function displayTotalTime() {
  let timeObjects = createDurationObjects();
  let totalDuration = getTotalDurationNumber(timeObjects);
  let durationInText = totalDurationToText(totalDuration);
  document.getElementById('stats').insertAdjacentHTML('beforeEnd', "<span id='totaltime'> • " + durationInText + '</span>');
}

function getTotalDurationNumber(timeObjects) {
  return timeObjects.reduce(time_add, 0);
}

function totalDurationToText(totalDuration) {
  let totalDurationObject = totalTimetoHMS(totalDuration);
  return durationToTextHours(totalDurationObject) + durationToTextMinutes(totalDurationObject) + durationToTextSeconds(totalDurationObject);
}

function totalTimetoHMS(totalDuration){
    const hours = Math.floor(totalDuration / 3600);
    const minutes = Math.floor((totalDuration % 3600) / 60);
    const seconds = totalDuration % 60;
  
    return {
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }; 
}

function durationToTextHours(totalDurationObject) {
  if(onlyMinutesAndSeconds(totalDurationObject)) return "";
  let durationInText = totalDurationObject.hours.toString();
  durationInText += ':';
  return durationInText;
}

function durationToTextMinutes(totalDurationObject) {
  if(onlySeconds(totalDurationObject)) return "";
  let durationInText;
  if (totalDurationObject.minutes < 10) {
    durationInText += '0';
  }
  durationInText = totalDurationObject.minutes.toString();
  durationInText += ':';
  return durationInText;
}

function durationToTextSeconds(totalDurationObject) {
  let durationInText = '0:';
  if (totalDurationObject.seconds < 10) {
    durationInText += '0';
  }
  durationInText += totalDurationObject.seconds.toString();
  return durationInText;
}

function time_add(acc, timeObject) {
  return acc + 3600 * timeObject.hours + 60 * timeObject.minutes + timeObject.seconds;
}

function onlySeconds(totalDurationObject){
  return (totalDurationObject.hours == 0 && totalDurationObject.minutes == 0);
}

function onlyMinutesAndSeconds(totalDurationObject){
  return (totalDurationObject.hours == 0);
}