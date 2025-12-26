import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./hooks/useBooking";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isLoading, error } = useBooking();
  const status = "checked-in";
  const navigate = useNavigate();

  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;
  if (error) {
    return <Spinner />;
  }
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
  console.log(booking);
  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking {booking.id}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>

        {status === "unconfirmed" && (
          <Button
            icon={<HiEye />}
            onClick={() => navigate(`/checkin/${bookingId}`)}
          >
            Check in
          </Button>
        )}
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
