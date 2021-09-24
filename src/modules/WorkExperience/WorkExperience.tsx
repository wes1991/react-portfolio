import React from "react";
import {
  StyledBackgroundCover,
  StyledBackgroundTopper,
  StyledCommonSection,
  StyledTitle,
} from "../../common/styles";
import { config } from "../../config";
import { IModuleBase } from "../../contracts";
import Workplace from "./WorkplaceItem";

export interface IWorkplace {
  company: string;
  title: string;
  startingYear: number;
  endingYear: number | null;
  description?: string;
  showWorkplaceName?: boolean;
  showWorkplaceImage?: boolean;
}
export interface IWorkExperienceProps extends IModuleBase {
  data: IWorkplace[];
}

const WorkExperience = ({ data, title, index }: IWorkExperienceProps) => {
  return (
    <StyledCommonSection
      backgroundUrl={`./assets/themes/${config.theme}/1.jpg`}
      id={`module-${index}`}
    >
      <StyledBackgroundCover fadeAmount={40} />
      <StyledBackgroundTopper>
        <StyledTitle>{title}</StyledTitle>
        {data.map((job, index) => (
          <Workplace key={index} job={job} isLast={index === data.length - 1} />
        ))}
      </StyledBackgroundTopper>
    </StyledCommonSection>
  );
};

export default WorkExperience;
