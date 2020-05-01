const showLists = [
  {
    id: 1,
    date: "Mon Dec 17 2018",
    venue: "Ronald Lane",
    location: "San Fancisco, CA",
  },
  {
    id: 2,
    date: "Tue Jul 18 2019",
    venue: "Pier 3 East",
    location: "San Fancisco, CA",
  },
  {
    id: 3,
    date: "Fri Jul 22 2019",
    venue: "View Loungue",
    location: "San Fancisco, CA",
  },
  {
    id: 4,
    date: "Sat Aug 12 2019",
    venue: "Hyatt Agency",
    location: "San Fancisco, CA",
  },
  {
    id: 5,
    date: "Fri Sep 05 2019",
    venue: "Moscow Center",
    location: "San Fancisco, CA",
  },
  {
    id: 6,
    date: "Wed Aug 11 2019",
    venue: "Pres Club",
    location: "San Fancisco, CA",
  },
];

const container = document.querySelector(".shows-list");

// Fuction Declaration //
function createLists(showLists) {
  let showListItemLi = document.createElement("li");
  showListItemLi.classList.add("shows-list__item");

  for (let i = 0; i < showLists.length; i++) {
    const date = document.createElement("div");
    date.classList.add("shows-list__date-wrapper");
  }
}
