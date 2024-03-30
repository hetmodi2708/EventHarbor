import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Maps from "./Maps";

const Event_description = () => {
  const events = [
    {
      id: 1,
      name: "Event 1",
      description: "Event 1 description",
      category: "Music",
      date: "2021-10-01",
      time: "12:00",
      latitude: 49.275379,
      longitude: -123.111938,
      location: "BC Place",
      location_detail: "777 Pacific Blvd, Vancouver, BC V6B 4Y8",
      image: "https://picsum.photos/200/300",
      price: "$10",
      capacity: 100,
      booked: 0,
      available: 100,
    },
    {
      id: 2,
      name: "Event 2",
      description: "Event 2 description",
      category: "Music",
      date: "2021-10-02",
      time: "12:00",
      latitude: 49.275379,
      longitude: -123.111938,
      location: "BC Place",
      location_detail: "777 Pacific Blvd, Vancouver, BC V6B 4Y8",
      image: "https://picsum.photos/200/300",
      price: "$10",
      capacity: 100,
      booked: 0,
      available: 100,
    },
    {
      id: 3,
      name: "Event 3",
      description: "Event 3 description",
      category: "Music",
      date: "2021-10-03",
      time: "12:00",
      latitude: 49.288219,
      longitude: -123.115723,
      location: "Canada Place",
      location_detail: "999 Canada Pl, Vancouver, BC V6C 3T4",
      image: "https://picsum.photos/200/300",
      price: "$10",
      capacity: 100,
      booked: 0,
      available: 100,
    },
    {
      id: 4,
      name: "Event 4",
      description: "Event 4 description",
      category: "Business & Professional",
      date: "2021-10-04",
      time: "12:00",
      latitude: 49.27692,
      longitude: -123.12719,
      location: "Ramada by Wyndham Vancouver Downtown",
      location_detail: "1221 Granville St, Vancouver, BC V6Z 1M6",
      image: "https://picsum.photos/200/300",
      price: "$10",
      capacity: 100,
      booked: 0,
      available: 100,
    },
    {
      id: 5,
      name: "Event 5",
      description: "Event 5 description",
      category: "Food & Drink",
      date: "2021-10-05",
      time: "12:00",
      latitude: 49.277939,
      longitude: -123.136757,
      location: "Sunset Beach Park",
      location_detail: "1204 Beach Ave, Vancouver, BC V6E 1V3",
      image: "https://picsum.photos/200/300",
      price: "$10",
      capacity: 100,
      booked: 0,
      available: 100,
    },
    {
      id: 6,
      name: "Event 6",
      description: "Event 6 description",
      category: "Night Life",
      date: "2021-10-06",
      time: "12:00",
      latitude: 50.67643,
      longitude: -120.32991,
      location: "The Night Shift on 5th",
      location_detail: "130 5 Ave, Kamloops, BC V2C 3P8",
      image: "https://picsum.photos/200/300",
      price: "$10",
      capacity: 100,
      booked: 0,
      available: 100,
    },
    {
      id: 7,
      name: "Event 7",
      description: "Event 7 description",
      category: "Night Life",
      date: "2021-10-07",
      time: "12:00",
      latitude: 50.67643,
      longitude: -120.32991,
      location: "The Night Shift on 5th",
      location_detail: "130 5 Ave, Kamloops, BC V2C 3P8",
      image: "https://picsum.photos/200/300",
      price: "$10",
      capacity: 100,
      booked: 0,
      available: 100,
    },
  ];

  const { id } = useParams();

  return (
    <>
      <header>
        <Header />
      </header>
      {events.map((event) => {
        if (event.id === parseInt(id)) {
          return (
            <div>
              <div className="event-img">
                <img src={event.image} alt={event.name} />
              </div>

              <div className="event-content">
                <h3>{event.name}</h3>
                <div className="event-date-container">
                  <button className="event-date-btn">{event.category}</button>
                  <div className="event-date">
                    <small className="date">{event.date}</small>
                  </div>
                </div>
                <p>
                  Discover groundbreaking opportunities and expand your network
                  at our premier business summit, featuring influential speakers
                  and industry pioneers.
                </p>
                <div className="event-details">
                  <p>Price: {event.price}</p>
                  <p>Capacity: {event.capacity}</p>
                  <p>Booked: {event.booked}</p>
                  <p>Available: {event.available}</p>
                </div>
                <div className="event-location-container">
                  <div className="event-location">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p className="location">
                      <span style={{ fontSize: "1.3em" }}>
                        <b>{event.location}</b>
                      </span>
                      <br />
                      {event.location_detail}
                      <br />
                    </p>

                    <Maps
                      latitude={event.latitude}
                      longitude={event.longitude}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default Event_description;
