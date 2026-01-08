import { useState } from 'react';
import EventCard from './EventCard';
import eventsData from '../data/events';

function Events() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter events based on search term
  const filteredEvents = eventsData.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // Add id="events" so navbar link works
    <div id="events" className="container my-5">
      <h2 className="text-center mb-4">Featured Events</h2>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search events by name..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => <EventCard key={event.id} event={event} />)
        ) : (
          <p className="text-center">No events found.</p>
        )}
      </div>
    </div>
  );
}

export default Events;
