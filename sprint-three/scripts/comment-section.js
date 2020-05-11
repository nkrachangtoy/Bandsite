// Default Comments Data//
// var comments = [
//   {
//     name: "Micheal Lyons",
//     date: new Date("12/18/2018"),
//     message:
//       "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a cencert I have EVER witnessed.",
//   },
//   {
//     name: "Gary Wong",
//     date: new Date("12/12/2018"),
//     message:
//       "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself.",
//   },
//   {
//     name: "Theodore Duncan",
//     date: new Date("11/15/2018"),
//     message:
//       "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definitely my favorite ever!",
//   },
// ];

// VARIABLES //
const url = "https://project-1-api.herokuapp.com";
const commentAPI = "comments?api_key=f83633f1-2214-4f06-abaf-f2e6da580294";

/**
 * Get comments array function
 */
function getComments() {
  axios
    .get(`${url}/${commentAPI}`)
    .then((resp) => {
      // Handle success
      const data = resp.data;
      listComments(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
getComments();

// Existing DOM elements //
const commentForm = document.querySelector(".comment-form"); // html form
const commentList = document.querySelector(".comment-list"); // html <ul>

//event listener for the message form, call createComment function
commentForm.addEventListener("submit", createComment);

/**
 * Loop through an array of comments and create an <li> that's appended to the <ul class="comment-list">
 */
function listComments(comments) {
  commentList.innerHTML = ""; // clear the commentList <ul> before appending to avoid duplicates
  for (let i = 0; i < comments.length; i++) {
    var commentLi = document.createElement("li"); // create <li> to append
    commentLi.classList.add("comment-list__item"); // add class="comment-list__item" to <li>

    var profileContainer = document.createElement("div");
    profileContainer.classList.add("comment-list__item--profile"); // create a container for profile picture
    var nameEl = document.createElement("p");
    nameEl.classList.add("comment-list__item--name"); // add class="comment-list__item--name" to <p>
    nameEl.innerHTML = comments[i].name;
    var dateEl = document.createElement("p");
    dateEl.classList.add("comment-list__item--date"); // add class="comment-list__item--date" to <p>
    // dateEl.innerHTML = formattedDate(comments[i].date); // with formattedDate function
    dateEl.innerHTML = comments[i].timestamp;
    var messageEl = document.createElement("p");
    messageEl.classList.add("comment-list__item--comment"); // add class="comment-list__item--comment" to <p>
    messageEl.innerHTML = comments[i].comment;

    commentLi.appendChild(profileContainer); // append profile circle container to <li>
    commentLi.appendChild(nameEl); // append name to <li>
    commentLi.appendChild(dateEl); // append date to <li>
    commentLi.appendChild(messageEl); // append message to <li>
    commentList.appendChild(commentLi); // finally append <li> to <ul> class="comment-list"
  }
}

/**
 *  Create a new comment <li> with name, date, and message, appends to commentList <ul>
 */
function createComment(event) {
  event.preventDefault();
  var nameVal = event.target.name.value;
  var dateVal = new Date();
  var messageVal = event.target.comment.value;
  if (nameVal !== "" && messageVal !== "") {
    comments.push({
      name: nameVal,
      date: dateVal,
      message: messageVal,
    });
    commentForm.reset();
    listComments(dateSortArray(comments));
  } else {
    alert("Please add a name and message");
  }
}

function dateSortArray(arr) {
  // using .slice makes a copy of the array, which keeps from sorting the original array
  var sortedArray = arr.slice().sort((a, b) => b.date - a.date);
  return sortedArray;
}

function formattedDate(date) {
  const daysInNum = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];
  const monthsInNum = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const formattedDate = `${
    monthsInNum[date.getMonth()]
  }/${date.getDate()}/${date.getFullYear()}`;

  return formattedDate;
}

// listComments(dateSortArray(data)); // call the listComments function
