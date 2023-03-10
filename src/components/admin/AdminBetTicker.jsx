import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default function AdminBetTicker() {
  return (
    <div className="bet_ticker_section">
      <div className="bet_ticker mb-5">
        <h2>Bet Ticker</h2>
        <div className="bet_ticker_inner d-flex">
          <Dropdown>
            <Dropdown.Toggle
              className="dropdown_button"
              variant="success"
              id="dropdown-basic"
            >
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle
              className="market_type_button"
              variant="success"
              id="dropdown-basic"
            >
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle
              className="market_button"
              variant="success"
              id="dropdown-basic"
            >
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <input type="text" className="mx-3" placeholder="event" />
          <input type="text" placeholder="event" />
          <button className="px-3 ml-3">Apply </button>
          <button className="px-3 ml-3">Clear</button>
        </div>
        </div>
        <hr />
        <p className="text-center">No bets matching this filter, try again</p>
        </div>
  );
}
