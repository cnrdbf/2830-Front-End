// components/EventDetails.js

import React from 'react';

function EventDetails() {
    // Fetch event details based on ID from backend API
    // Example:
    // const eventId = useParams().id;
    // const [event, setEvent] = useState(null);
    // useEffect(() => {
    //     fetch(`/api/events/${eventId}`)
    //         .then(response => response.json())
    //         .then(data => setEvent(data))
    //         .catch(error => console.error('Error fetching event details:', error));
    // }, [eventId]);

    // For now, just display static event details
    const event = { id: 1, title: 'Event 1', date: '2024-05-10', location: 'Location 1' };

    return (
        <div>
            <h2>Event Details</h2>
            <p><strong>Title:</strong> {event.title}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
        </div>
    );
}

export default EventDetails;
