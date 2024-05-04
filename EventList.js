// components/EventList.js

import React, { useState, useEffect } from 'react';

function EventList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch event data from backend API
        // Example:
        // fetch('/api/events')
        //     .then(response => response.json())
        //     .then(data => setEvents(data))
        //     .catch(error => console.error('Error fetching events:', error));

        // Mock event data
        const mockEvents = [
            { id: 1, title: 'Event 1', date: '2024-05-10', location: 'Location 1' },
            { id: 2, title: 'Event 2', date: '2024-05-15', location: 'Location 2' },
            { id: 3, title: 'Event 3', date: '2024-05-20', location: 'Location 3' }
        ];
        setEvents(mockEvents);
    }, []);

    return (
        <div>
            <h2>Event List</h2>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <strong>{event.title}</strong> - {event.date}, {event.location}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EventList;
