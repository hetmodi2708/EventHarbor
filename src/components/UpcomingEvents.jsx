import React from "react";

// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const items = [
  {
    id: 1,
    name: "Event 1",
    description: "Event 1 description",
    category: "Music",
    date: "2021-10-01",
    time: "12:00",
    location: "BC Place",
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
    location: "BC Place",
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
    location: "Canada Place",
    image: "https://picsum.photos/200/300",
    price: "$10",
    capacity: 100,
    booked: 0,
    available: 100,
  },
];

export default function UpcomingEvents() {
  return (
    <section className="upcoming-events">
      <h2>Upcoming Events</h2>

      <div className="cards">
        {items.map((item, index) => {
          return (
            <div className="card" key={index}>
              <div className="card-img">
                <img src={item.image} alt="" />
              </div>

              <div className="card-content">
                <h3>{item.title}</h3>
                <div className="card-date-container">
                  <button className="card-date-btn">{item.category}</button>
                  <div className="card-date">
                    <FontAwesomeIcon icon={faCalendar} />
                    <small className="date">{item.date}</small>
                  </div>
                </div>
                <p>
                  Discover groundbreaking opportunities and expand your network
                  at our premier business summit, featuring influential speakers
                  and industry pioneers.
                </p>
                <div className="card-location-container">
                  <div className="card-location">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <small className="location">{item.location}</small>
                  </div>
                  <div>
                    <Link to={`/event/${item.id}`}>
                      <ArrowRightOutlined />
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Link to="/events">
        <Button className="all-event-btn">ALL EVENTS</Button>
      </Link>
    </section>
  );
}
