import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CreateEvent from "./pages/CreateEvent.jsx";
import ViewEvents from "./pages/ViewEvents.jsx";
import ViewEventDetails from "./pages/ViewEventDetails.jsx";
import { useState } from "react";

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const editEvent = (id) => {
    // Logic to edit event
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/create-event" element={<CreateEvent addEvent={addEvent} />} />
        <Route path="/view-events" element={<ViewEvents events={events} deleteEvent={deleteEvent} editEvent={editEvent} />} />
      <Route path="/event/:id" element={<ViewEventDetails events={events} />} />
      </Routes>
    </Router>
  );
}

export default App;
