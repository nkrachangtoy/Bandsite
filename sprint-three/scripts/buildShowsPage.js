// var shows = [
//   {
//     date: "Mon Dec 17 2018",
//     venue: "Ronald Lane",
//     location: "San Fancisco, CA",
//   },
//   {
//     date: "Tue Jul 18 2019",
//     venue: "Pier 3 East",
//     location: "San Fancisco, CA",
//   },
//   {
//     date: "Fri Jul 22 2019",
//     venue: "View Loungue",
//     location: "San Fancisco, CA",
//   },
//   {
//     date: "Sat Aug 12 2019",
//     venue: "Hyatt Agency",
//     location: "San Fancisco, CA",
//   },
//   {
//     date: "Fri Sep 05 2019",
//     venue: "Moscow Center",
//     location: "San Fancisco, CA",
//   },
//   {
//     date: "Wed Aug 11 2019",
//     venue: "Pres Club",
//     location: "San Fancisco, CA",
//   },
// ];

// VARIABLES //
const url = "https://project-1-api.herokuapp.com";
const showDatesAPI = "showdates?api_key=f83633f1-2214-4f06-abaf-f2e6da580294";

// DOM ELEMENTS //
const showsList = document.querySelector(".shows-list"); // html <ul>

// AXIOS GET SHOW DATES
axios.get(`${url}/${showDatesAPI}`).then((resp) => {
  // Handle success
  const data = resp.data;
  console.log(data);
});
/**
 * Loop through an array of show lists and create <li> that's appended to the <ul class="shows-list">
 */

function listShows(showArray) {
  showsList.innerHTML = ""; // clear the showsList <ul> before appending to avoid duplicates
  for (let i = 0; i < showArray.length; i++) {
    var showsLi = document.createElement("li"); // create <li> to append
    showsLi.classList.add("shows-list__item"); // add class="comment-list__item" to <li>

    var dateWrapper = document.createElement("div");
    dateWrapper.classList.add("shows-list__date-wrapper"); // create a wrapper for date
    var dateEl = document.createElement("p");
    dateEl.classList.add("shows-list__date"); // add class="shows-list__date" to <p>
    dateEl.innerHTML = showArray[i].date;

    var venueWrapper = document.createElement("div");
    venueWrapper.classList.add("shows-list__venue-wrapper"); // create a wrapper for venue
    var venueEl = document.createElement("p");
    venueEl.classList.add("shows-list__venue"); // add class="shows-list__date" to <p>
    venueEl.innerHTML = showArray[i].venue;

    var locationWrapper = document.createElement("div");
    locationWrapper.classList.add("shows-list__location-wrapper"); // create a wrapper for location
    var locationEl = document.createElement("p");
    locationEl.classList.add("shows-list__location"); // add class="shows-list__date" to <p>
    locationEl.innerHTML = showArray[i].location;

    var btnEl = document.createElement("button");
    btnEl.classList.add("shows-list__btn"); // add class="shows-list__btn" to <button>
    btnEl.innerHTML = "BUY TICKETS";

    dateWrapper.appendChild(dateEl); // append <p> to <div>
    showsLi.appendChild(dateWrapper); // append <div> to <li>

    venueWrapper.appendChild(venueEl); // append <p> to <div>
    showsLi.appendChild(venueWrapper); // append <div> to <li>

    locationWrapper.appendChild(locationEl); // append <p> to <div>
    showsLi.appendChild(locationWrapper); // append <div> to <li>

    showsLi.appendChild(btnEl); // append <button> to <li>

    showsList.appendChild(showsLi); // finally append <li> to <ul>
  }
}

listShows(shows); // call the listShows function
