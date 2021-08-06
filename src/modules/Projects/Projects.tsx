import { StyledBackgroundCover, StyledBackgroundTopper, StyledCommonSection, StyledTitle } from '../../common/styles'

import { IModuleBase } from '../../contracts'
import React from 'react'
import VolunteerItem from '../VolunteerWork/VolunteerItem'
import { config } from '../../config'

export interface IProjectProps extends IModuleBase {
}

const Projects = ({data, title, index}: IProjectProps) => {
    return (
        <StyledCommonSection backgroundUrl={`./assets/themes/${config.theme}/2.jpg`} id={`module-${index}`}>
                <StyledBackgroundCover fadeAmount={40} />
                <StyledBackgroundTopper>
                <StyledTitle>{title}</StyledTitle>
                <h1>Coming Soon</h1>
            </StyledBackgroundTopper>
        </StyledCommonSection>
    )
}

export default Projects
