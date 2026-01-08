const events = [
  {
    id: 1,
    name: "Tech Meetup 2026",
    date: "January 15, 2026",
    time: "3:00 PM",
    location: "Islamabad, Pakistan",
    description: "Join us for a tech meetup and networking session with local developers.",
  },
  {
    id: 2,
    name: "Startup Pitch Night",
    date: "January 20, 2026",
    time: "6:00 PM",
    location: "Lahore, Pakistan",
    description: "Pitch your startup ideas to investors and get valuable feedback."
  },
  {
    id: 3,
    name: "Art & Design Workshop",
    date: "January 25, 2026",
    time: "11:00 AM",
    location: "Karachi, Pakistan",
    description: "Learn the fundamentals of graphic design from professional designers."
  },
  {
    id: 4,
    name: "Marketing Masterclass",
    date: "February 26, 2026",
    time: "01:00 PM",
    location: "Islamabad, Pakistan",
    description: "Learn modern marketing strategies to grow your brand effectively."
  },
  {
    id: 5,
    name: "Software Development Bootcamp",
    date: "March 02, 2026",
    time: "11:00 AM",
    location: "Islamabad, Pakistan",
    description: "Hands-on coding bootcamp covering HTML, CSS, JS, and React basics.",
  }
];

// Add poster dynamically based on event name
events.forEach(event => {
  event.poster = new URL(`../assets/${event.name}.jpg`, import.meta.url).href;
});

export default events;
