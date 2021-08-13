import React from "react";
import styled from "styled-components";

export interface IEducationItem {
  title: string;
  school: string;
  institute: string;
  startingYear: string;
  endingYear: string | null;
}

const StyledEducationItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  h3 {
    font-size: 18px;
    margin-bottom: 0.5em;
    font-weight: 600;
  }
  span {
    font-size: 15px;
  }
  > img {
    width: 200px;
  }
`;

const EducationItem = ({
  title,
  school,
  institute,
  startingYear,
  endingYear,
}: IEducationItem) => {
  return (
    <StyledEducationItem>
      <img
        src={`../assets/logos/${school.toLowerCase()}.webp`}
        alt={institute.toLowerCase()}
        style={{ margin: 8 }}
      />
      <h3>{title}</h3>
      <span>
        {startingYear} - {endingYear}
      </span>
    </StyledEducationItem>
  );
};

export default EducationItem;
