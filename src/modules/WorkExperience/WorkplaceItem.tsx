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

const StyledDescription = styled.div`
max-width: 1000px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: 0 auto;
text-align: center;
`;

type Props = {
  job: IWorkplace;
  isLast: boolean;
}

const WorkplaceItem: React.FC<Props> = (props) => {
  const {showWorkplaceImage, company, showWorkplaceName, title, endingYear, startingYear, description} = props.job;
  return (
    <StyledWorkplaceItem>
      {showWorkplaceImage && (
        <img
          src={`./assets/logos/${company.toLowerCase()}.webp`}
          alt={company.toLowerCase()}
          style={{ margin: 8 }}
        />
      )}
      {showWorkplaceName && company}
      <StyledWorkplaceTitle>{title}</StyledWorkplaceTitle>
      <StyledWorkplaceDates>
        {startingYear} - {endingYear ?? "Present"}
      </StyledWorkplaceDates>
      <StyledDescription>
        {description}
      </StyledDescription>
      {!props.isLast && <StyledWorkplaceLine />}
    </StyledWorkplaceItem>
  );
};

export default WorkplaceItem;
