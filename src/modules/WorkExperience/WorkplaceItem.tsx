import { config, themeConfig } from "../../config";

import { IWorkplace } from "./WorkExperience";
import React from "react";
import styled from "styled-components";

const StyledWorkplaceItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    width: 200px;
  }
`;

const StyledWorkplaceLine = styled.div`
  height: 100px;
  width: 1px;
  background-color: ${themeConfig[config.theme].main};
  margin-top: 1em;
`;

const StyledWorkplaceTitle = styled.span`
  font-weight: 500;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;

const StyledWorkplaceDates = styled.div`
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;

const WorkplaceItem = ({
  company,
  title,
  startingYear,
  endingYear,
  showWorkplaceName = false,
  showWorkplaceImage = false,
  isLast = false,
}: IWorkplace & { isLast: boolean }) => {
  return (
    <StyledWorkplaceItem>
      {showWorkplaceImage && (
        <img
          src={`../assets/logos/${company.toLowerCase()}.webp`}
          alt={company.toLowerCase()}
          style={{ margin: 8 }}
        />
      )}
      {showWorkplaceName && company}
      <StyledWorkplaceTitle>{title}</StyledWorkplaceTitle>
      <StyledWorkplaceDates>
        {startingYear} - {endingYear ?? "Present"}
      </StyledWorkplaceDates>
      {!isLast && <StyledWorkplaceLine />}
    </StyledWorkplaceItem>
  );
};

export default WorkplaceItem;
