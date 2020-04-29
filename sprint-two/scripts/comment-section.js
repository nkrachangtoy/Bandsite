// Default Comments Data//
var defaultComments = [
  {
    id: 1,
    firstName: "Micheal",
    lastName: "Lyons",
    datePosted: "12/18/2018",
    description:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a cencert I have EVER witnessed.",
  },
  {
    id: 2,
    firstName: "Gary",
    lastName: "Wong",
    datePosted: "12/12/2018",
    description:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself.",
  },
  {
    id: 3,
    firstName: "Theodore",
    lastName: "Duncan",
    datePosted: "11/15/2018",
    description:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definitely my favorite ever!",
  },
];

// Generate a table in Chrome console //
console.table(defaultComments);

var commentSection = document.querySelector(".comment");

// Function Declaration //
function generateComments(defaultComments) {
  var commentContainerElem = document.createElement("div");
  commentContainerElem.classList.add("comment__container");
  var commentHeader = document.createElement("h1");
  commentHeader.innerHTML = "Join the Conversation";
}

generateComments(defaultComments);
