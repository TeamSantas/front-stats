import styled from "styled-components";
import PresentModal from "../receivedPresents/PresentModal";
import { useState } from "react";
import CalendarDays from "./calendar-form";

interface IOtherCalendar {
  name: string;
}

const OtherCalendar = ({ name }: IOtherCalendar) => {
  // 현재 날짜 - ex) 20221129
  const date = new Date();
  // TODO:12월 오픈떄 주석으로 바꿔야 함
  // let today = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
  let today = `20231215`;
  if (process.env.NODE_ENV === "development") today = `20231215`;
  const today_day = date.getDate();
  const [presentModalShow, setPresentModalShow] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const handleClosePresentModal = () => setPresentModalShow(false);

  const handleShow = (selectedDay: number) => {
    setSelectedDay(selectedDay);

    let selDate: string = `202312${selectedDay}`;

    if (Number(selDate) < Number(today)) {
      alert("과거로는 선물을 보낼 수 없어요 ⌛");
    } else setPresentModalShow(true);
  };

  return (
    <>
      <CalendarWrapper>
        <CalendarDays name={name} handleShow={handleShow} />
      </CalendarWrapper>
      {presentModalShow && (
        <PresentModal
          // 선택한 캘린더 날짜로 쪽지 보내는 모달을 띄움
          show={presentModalShow}
          onHide={handleClosePresentModal}
          selectedDay={selectedDay}
          isMyCalendar={false}
        />
      )}
    </>
  );
};

export default OtherCalendar;
const CalendarWrapper = styled.div`
  border-radius: 10px;
  margin: 0px auto;
  z-index: 1;
  @media (max-width: 600px) {
    margin: 5px auto;
  }
`;
