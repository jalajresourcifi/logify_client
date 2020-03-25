import React, { useState, useRef } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import calendarIcon from "css/assets/img/calendar.png";
import myEventList from "mockdata/events";
import DateTimePicker from "react-datetime-picker";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-datetime-picker/dist/DateTimePicker.css";
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
import "./dashboard.css";
const localizer = momentLocalizer(moment);
const eventStyleGetter = (event, start, end, isSelected) => {
  var backgroundColor = "#" + event.title[0] + "545DD";

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
const DraggableCalendar = withDragAndDrop(Calendar);
const MyCalendar = props => {
  //STATES
  const [eventList, seteventList] = useState(myEventList);
  const [addeventmodal, setModal] = useState(false);
  const [showeventmodal, seteventModal] = useState(false);
  const [eventNameInput, seteventNameInput] = useState("");
  const [editeventId, setEditEventId] = useState(null);
  const [editeventNameInput, setEditEventNameInput] = useState("");
  const [editeventStartDateInput, setEditEventStartDateInput] = useState("");
  const [editeventEndDateInput, setEditEventEndateInput] = useState("");
  const [tempselectedEvent, settempselectedEvent] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [editInputDisabled, setEditInputDisabled] = useState(true);

  const nameInput = useRef();
  //FUNCTIONS

  //Toggle Add Event Modal
  const toggle = () => {
    setModal(!addeventmodal);
    seteventNameInput("");
  };
  //Toggle Show Event Modal
  const toggleshowevent = () => {
    seteventModal(!showeventmodal);
    setEditInputDisabled(true);
  };
  //Toggle Dropdown
  const toggledropdown = () => setDropdownOpen(prevState => !prevState);

  //on date / 's click
  const slotSelect = (slotInfo, bounds, box) => {
    let dateDifference = slotInfo.end.getTime() - slotInfo.start.getTime();
    let dateDifference1 = dateDifference / (1000 * 3600 * 24);
    if (dateDifference1 >= 1) {
      slotInfo.end.setHours(18);
      settempselectedEvent({ start: slotInfo.start, end: slotInfo.end });
    } else {
      settempselectedEvent({ start: slotInfo.start, end: slotInfo.end });
    }

    toggle();
  };
  //on event click
  const eventSelect = (event, e) => {
    toggleshowevent();
    setEditEventId(event.id);
    setEditEventNameInput(event.title);
    setEditEventStartDateInput(event.start);
    setEditEventEndateInput(event.end);
  };

  //on submit event
  const addSelectedEvents = () => {
    if (eventNameInput.length > 0) {
      const newEvent = {
        ...tempselectedEvent,
        title: eventNameInput,
        id: eventList.length + 1
      };
      seteventList([...eventList, newEvent]);
      resetValues();
      toggle();
    } else {
      alert("Input field not Filled");
    }
  };
  //On Save Edit Submit
  const saveSelectedEvents = () => {
    const editedEvent = {
      id: editeventId,
      title: editeventNameInput,
      start: editeventStartDateInput,
      end: editeventEndDateInput
    };

    seteventList(
      eventList.map(event => (event.id === editeventId ? editedEvent : event))
    );
    toggleshowevent();
  };
  //On Drag Event
  const moveEvent = ({ event, start, end }) => {
    const events = eventList;

    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    seteventList(nextEvents);
  };
  //helper functions
  const resetValues = () => {
    settempselectedEvent({});
    seteventNameInput("");
  };
  const resizeEvent = ({ event, start, end }) => {
    const events = eventList;

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    seteventList(nextEvents);
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
            <DraggableCalendar
              localizer={localizer}
              events={eventList}
              startAccessor="start"
              endAccessor="end"
              className="full-calendar"
              views={["month", "week", "day"]}
              popup={true}
              selectable={true}
              eventPropGetter={eventStyleGetter}
              onSelectSlot={slotSelect}
              onSelectEvent={eventSelect}
              calendarIcon={calendarIcon}
              draggableAccessor={event => true}
              onEventDrop={moveEvent}
              onEventResize={resizeEvent}
            />
          </div>

          {/* MODAL ON DATE SELECT BELOW*/}

          <Modal isOpen={addeventmodal} toggle={toggle} className="event-modal">
            <ModalHeader toggle={toggle}>ADD EVENT</ModalHeader>
            <ModalBody>
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

          {/* MODAL ON EVENT SELECT BELOW*/}

          <Modal
            isOpen={showeventmodal}
            toggle={toggleshowevent}
            className="event-modal"
          >
            <ModalHeader toggle={toggleshowevent}>SHOW EVENT</ModalHeader>
            <ModalBody>
              <Button
                className="btn btn-primary float-right"
                onClick={e => {
                  setEditInputDisabled(!editInputDisabled);
                  setTimeout(() => {
                    nameInput.current.focus();
                  }, 0);
                }}
              >
                {editInputDisabled ? "Unlock Edit" : "Lock Edit"}
              </Button>

              <br />

              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>TITLE</InputGroupText>
                </InputGroupAddon>
                <input
                  placeholder="event name"
                  value={editeventNameInput}
                  onChange={e => setEditEventNameInput(e.target.value)}
                  className={
                    editInputDisabled ? "form-control disabled" : "form-control"
                  }
                  disabled={editInputDisabled}
                  ref={nameInput}
                />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>START </InputGroupText>
                </InputGroupAddon>
                <DateTimePicker
                  value={editeventStartDateInput}
                  onChange={e => setEditEventStartDateInput(e)}
                  className={
                    editInputDisabled
                      ? "form-control disabled h-100"
                      : "form-control h-100"
                  }
                  // disabled={editInputDisabled}
                  calendarIcon={<img src={calendarIcon} alt="" />}
                  disabled={editInputDisabled}
                />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>E N D</InputGroupText>
                </InputGroupAddon>
                <DateTimePicker
                  value={editeventEndDateInput}
                  onChange={e => setEditEventEndateInput(e)}
                  className={
                    editInputDisabled
                      ? "form-control disabled h-100"
                      : "form-control h-100"
                  }
                  calendarIcon={<img src={calendarIcon} alt="" />}
                  disabled={editInputDisabled}
                />
              </InputGroup>
            </ModalBody>

            <ModalFooter>
              <Button color="primary" onClick={saveSelectedEvents}>
                Save Event
              </Button>{" "}
              <Button color="secondary" onClick={toggleshowevent}>
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
