import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { utils, Calendar } from "react-modern-calendar-datepicker";
import "./Calender.css";
function Calender() {
  const [selectedDay, setSelectedDay] = useState(null);
  const date = new Date();
  const defaultValue = {
    year: 2019,
    month: 4,
    day: 15,
  };

  const minimumDate = {
    year: 2020,
    month: 12,
    day: 10,
  };

  const maximumDate = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate() + 30,
  };
  const disabledDays = [
    {
      year: 2020,
      month: 12,
      day: 20,
    },
    {
      day: 21,
    },
    {
      day: 7,
    },
  ];
  const renderCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder="Check Availability"
      value={
        selectedDay
          ? `Booking date : ${selectedDay.day} -${
              selectedDay.day > date.getDate()
                ? date.getMonth() + 1
                : -(date.getMonth() - 12)
            }-${
              selectedDay.day < date.getDate() && date.getMonth() + 1 == 12
                ? date.getFullYear() + 1
                : date.getFullYear()
            }`
          : ""
      }
      style={{
        textAlign: "center",
        padding: "0",
        fontSize: "1.1rem",
        border: "1px solid #9c88ff",
        borderRadius: "100px",
        boxShadow: "0 1.5rem 2rem rgba(156, 136, 255, 0.2)",
        color: "#9c88ff",
        outline: "none",
        margin: 0,
        width: "240px",
        cursor: "pointer",
      }}
      className="my-custom-input-class select myInput" // a styling class
    />
  );
  return (
    <>
      <div>
        <DatePicker
          renderInput={renderCustomInput} // render a custom input
          value={selectedDay}
          onChange={setSelectedDay}
          minimumDate={utils().getToday()}
          maximumDate={maximumDate}
          disabledDays={disabledDays} // here we pass them
          shouldHighlightWeekends
        />
      </div>
      <br></br>
      {selectedDay && (
        <div className="select container d-flex justify-content-center">
          {selectedDay.day - 10 < date.getDate() && (
            <div className="select">
              {selectedDay.day !== date.getDate() && (
                <select>
                  <option selected disabled>
                    Available timing
                  </option>
                  <option>2:PM</option>
                  <option>3:PM</option>
                  <option>5:PM</option>
                </select>
              )}
            </div>
          )}
          {selectedDay.day - 10 >= date.getDate() && (
            <select>
              <option selected disabled>
                Available timing
              </option>
              <option>10:AM</option>
              <option>12:PM</option>
              <option>1:PM</option>
              <option>3:PM</option>
              <option>4:PM</option>
              <option>5:PM</option>
            </select>
          )}
          {selectedDay.day === date.getDate() && (
            <select>
              <option selected disabled>
                Available timing
              </option>
              <option selected disabled>
                Available timing
              </option>
              <option>5:PM</option>
            </select>
          )}
        </div>
      )}
    </>
  );
}

export default Calender;
