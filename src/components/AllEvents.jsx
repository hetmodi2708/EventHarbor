import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const AllEvents = () => {
  const events = [
    {
      id: 1,
      name: "Event 1",
      description: "Event 1 description",
      category: "Music",
      date: "2021-10-01",
      time: "12:00",
      location: "Event 1 location",
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
      location: "Event 2 location",
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
      location: "Event 3 location",
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
      location: "Event 4 location",
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
      location: "Event 5 location",
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
      location: "Event 6 location",
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
      location: "Event 7 location",
      image: "https://picsum.photos/200/300",
      price: "$10",
      capacity: 100,
      booked: 0,
      available: 100,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState(events);

  const categories = [
    "Music",
    "Business & Professional",
    "Food & Drink",
    "Night Life",
  ];

  const handleMenuClick = (e) => {
    setSelectedCategory(e.item.props.children);
    setFilteredEvents(
      events.filter(
        (event) => event.category === e.item.props.children[0][1].props.children
      )
    );
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {categories.map((category, index) => (
        <Menu.Item key={index}>{category}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="all-events-bg">
      <header>
        <Header />
      </header>

      <section className="all-events">
        <h2 className="all-events-title">
          Events
          <span id="dropdown-item">
            <Dropdown
              overlay={menu}
              placement="bottomLeft"
              arrow
              className="dropdown"
            >
              <button
                className="dropdown-btn"
                onClick={(e) => e.preventDefault()}
              >
                {selectedCategory || "Filter by Category"}
              </button>
            </Dropdown>
          </span>
        </h2>
        <div className="event-cards">
          {filteredEvents.map((event, index) => (
            <div className="event-card">
              <div className="card-img">
                <img src={event.image} alt={event.name} />
              </div>

              <div className="event-card-content">
                <h3>{event.title}</h3>
                <div className="event-card-date-container">
                  <button className="event-card-date-btn">
                    {event.category}
                  </button>
                  <div className="event-card-date">
                    <FontAwesomeIcon icon={faCalendar} />
                    <small className="allevent-date">{event.date}</small>
                  </div>
                </div>
                <p>
                  Discover groundbreaking opportunities and expand your network
                  at our premier business summit, featuring influential speakers
                  and industry pioneers.
                </p>
                <div className="event-card-location-container">
                  <div className="event-card-location">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <small className="allevent-location">
                      {event.location}
                    </small>
                  </div>
                  <div>
                    <Link to={`/event/${event.id}`}>
                      <ArrowRightOutlined />
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllEvents;
