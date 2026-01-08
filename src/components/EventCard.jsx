function EventCard({ event }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={event.poster} className="card-img-top" alt={event.name} />
        <div className="card-body">
          <h5 className="card-title">{event.name}</h5>
          <p className="card-text">{event.description}</p>
          <p className="card-text">
            <small>{event.date} | {event.time}</small><br />
            <small>{event.location}</small>
          </p>
          <button className="btn btn-primary">Register</button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
