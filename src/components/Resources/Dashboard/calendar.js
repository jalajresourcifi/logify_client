import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import myEventList from "mockdata/events";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
const localizer = momentLocalizer(moment);
const eventStyleGetter = (event, start, end, isSelected) => {
  var backgroundColor = "#" + event.hexColor;

  var style = {
    backgroundColor: backgroundColor,
    borderRadius: "0px",
    opacity: 0.8,
    color: "white",
    border: "0px",
    display: "block"
  };

  return {
    style: style
  };
};

const MyCalendar = props => {
  //STATES
  const [eventList, seteventList] = useState(myEventList);
  const [addmodal, setModal] = useState(false);
  const [eventNameInput, seteventNameInput] = useState("");
  const [tempselectedEvent, settempselectedEvent] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);

  //FUNCTIONS

  //Toggle modal
  const toggle = () => {
    setModal(!addmodal);
    seteventNameInput("");
  };
  const toggledropdown = () => setDropdownOpen(prevState => !prevState);
  //on date / 's select
  // const slotSelect = (slotInfo, bounds, box) => {
  //   console.log(slotInfo);
  //   const correctedend = new Date(slotInfo.end);
  //   correctedend.setHours(correctedend.getHours() + 8);
  //   settempselectedEvent({ start: slotInfo.start, end: correctedend });
  //   console.log(slotInfo.end);
  //   toggle();
  // };
  //on event select
  const eventSelect = (event, e) => {
    alert(event.title);
  };
  //on submit event
  const addSelectedEvents = () => {
    if (eventNameInput.length > 0) {
      const newEvent = { ...tempselectedEvent, title: eventNameInput };
      seteventList([...eventList, newEvent]);
      resetValues();
      toggle();
    } else {
      alert("Input field not Filled");
    }
  };
  //helper functions
  const resetValues = () => {
    settempselectedEvent({});
    seteventNameInput("");
  };
  //RETURN
  return (
    <>
      <div className="col-xl-12 col-lg-12">
        <div className="kt-portlet kt-portlet--height-fluid">
          <div className="kt-portlet__head">
            <div className="kt-portlet__head-label">
              <h3 className="kt-portlet__head-title">Calendar</h3>
            </div>
            <div className="kt-portlet__head-toolbar">
              <div className="dropdown dropdown-inline">
                <Dropdown isOpen={dropdownOpen} toggle={toggledropdown}>
                  <DropdownToggle className="btn btn-clean btn-sm btn-icon-md btn-icon">
                    <i className="flaticon-more-1"></i>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Demo Button</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="kt-widget14">
            <Calendar
              localizer={localizer}
              events={eventList}
              startAccessor="start"
              endAccessor="end"
              className="full-calendar"
              views={["month", "week", "day"]}
              popup={true}
              // selectable={true}
              eventPropGetter={eventStyleGetter}
              // onSelectSlot={slotSelect}
              onSelectEvent={eventSelect}
            />
          </div>
          <Modal isOpen={addmodal} toggle={toggle} className="event-modal">
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
              Add Event
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>EVENT</InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="event name"
                  value={eventNameInput}
                  onChange={e => seteventNameInput(e.target.value)}
                />
              </InputGroup>
              {eventNameInput.length >= 1 ? null : (
                <span className="text-danger">Please fill the input field</span>
              )}
            </ModalBody>

            <ModalFooter>
              <Button color="primary" onClick={addSelectedEvents}>
                Add Event
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default MyCalendar;
