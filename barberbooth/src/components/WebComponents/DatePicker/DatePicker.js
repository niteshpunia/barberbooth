import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import "./DatePicker.css";
const Example = () => {
  return (
    <div>
      <button>hello</button>
    </div>
  );
};
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayChange(day) {
    this.setState({ selectedDay: day });
  }
  modifiersStyles = {
    backgroundColor: "red",
  };

  render() {
    const { selectedDay } = this.state;
    return (
      <>
        <span>Choose a day</span>
        <DayPickerInput
          selected={selectedDay}
          onDayChange={this.handleDayChange}
          modifiers={this.modifiers}
        />
      </>
    );
  }
}
