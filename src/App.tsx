import About, { IAboutProps } from './modules/About/About';
import Projects, { IProjectProps } from './modules/Projects/Projects';
import VolunteerWork, { IVolunteerWorkProps } from './modules/VolunteerWork/VolunteerWork';
import WhatIKnow, { IWhatIKnowProps } from './modules/WhatIKnow/WhatIKnow';
import WorkExperience, { IWorkExperienceProps } from './modules/WorkExperience/WorkExperience';

import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header/Header';
import React from 'react';
import data from './data.json';
import styled from '@emotion/styled';

const StyledApp = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export enum Module {
  ABOUT = "about",
  WORK_EXPERIENCE = "workExperience",
  WHAT_I_KNOW = "whatIKnow",
  VOLUNTEERING = "volunteering",
  PROJECTS = "projects"
}

function App() {
  return (
    <ChakraProvider>
      <StyledApp>
        <Header data={data.header} modules={data.modules} />
        {data.modules.map((module, index) => {
          switch (module.type) {
            case Module.ABOUT:
              return <About {...module as Omit<IAboutProps,'index'>} index={index} key={index} />
            case Module.WORK_EXPERIENCE:
              return <WorkExperience {...module as Omit<IWorkExperienceProps,'index'>} index={index} key={index} />
            case Module.WHAT_I_KNOW:
              return <WhatIKnow {...module as Omit<IWhatIKnowProps,'index'>} index={index} key={index} />
            case Module.PROJECTS:
              return <Projects {...module as Omit<IProjectProps,'index'>} index={index} key={index}/>
            default:
              return <></>
          }
        })}
      </StyledApp>
    </ChakraProvider>
  );
}

export default App;
