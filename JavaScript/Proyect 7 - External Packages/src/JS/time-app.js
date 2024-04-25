import html from "../index.html?raw";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import moment from 'moment-timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

let now = dayjs();
let returTimeZone = dayjs.tz.guess()

const changeTimeMoment = (timeZone) => {
    now = dayjs();
    const currentTime = document.querySelector("#current-time")
    currentTime.innerHTML = now.tz(timeZone).format("HH:mm:ss");
    setTimeout(() => {
        changeTimeMoment()
    }, 1000);
}

const timeZone = (timezone) => {
    const timeZoneUser = document.querySelector("#time-zone-user")
    timeZoneUser.innerHTML = timezone
}

const currentDate = (timezone) => {
    const currDate = document.querySelector("#current-date")
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const dayWeek = weekdays[dayjs().day()]
    currDate.innerHTML = `${dayWeek}, ${now.tz(timezone).format("D MMM, YYYY")}`
}

const allTimeZones = () => {
    const timezones = moment.tz.names();
    const timeZoneList = document.querySelector("#timezone-option");

    timezones.forEach(zone => {
        const option = document.createElement("option");
        option.classList = "option-list"
        option.value = zone;
        option.textContent = zone;
        timeZoneList.appendChild(option);
    });
}

const updateInfo = () => {
    const selectElement = document.querySelector('#timezone-option');
    return selectElement.value;
}
export const TimeZoneApp = (elementId) => {
    (() => {
      
        document.querySelector(elementId).innerHTML = html
     
        allTimeZones()
        currentDate(returTimeZone)
        timeZone(returTimeZone)
        changeTimeMoment(returTimeZone)    
    
    }
    )();

    const applyInfo = document.querySelector("#apply-info")
    const modal = document.querySelector("#modalOpen")


    applyInfo.addEventListener('click', () => {
        returTimeZone = updateInfo()
        dayjs.tz.setDefault(returTimeZone)
        currentDate(returTimeZone)
        timeZone(returTimeZone)
        changeTimeMoment(returTimeZone)   
    })
} 