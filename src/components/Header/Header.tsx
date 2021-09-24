import { Button, Link, theme } from "@chakra-ui/react";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "../../common/icons";
import { config, themeConfig } from "../../config";

import Navigation from "./Navigation";
import React from "react";
import styled from "@emotion/styled";

interface IHeaderProps {
  data: {
    name: string;
    title: string;
    showProfilePic: boolean;
    cvLink: string | null;
    linkedIn?: string;
    twitter?: string;
    github?: string;
  };
  modules: any[];
}

const StyledHeader = styled.div`
  width: 100vw;
  min-height: 50vh;
  padding-top: 1em;
  padding-bottom: 1em;
  background: url(${`./assets/themes/${config.theme}/bg.jpg`});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-position: 0%;
`;

const StyledName = styled.h1`
  color: ${theme.colors.white};
  font-size: 50px;
  font-weight: 400;
`;

const StyledWorkTitle = styled.h2`
  color: ${theme.colors.white};
  font-size: 25px;
  font-weight: 200;
`;

const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const StyledSocialLinks = styled.div`
  display: flex;
  margin-top: 2em;
  margin-bottom: 2em;
  align-items: center;
  > * {
    margin: 0 1em;
  }
`;

const Header = ({
  data: { name, title, showProfilePic, cvLink, linkedIn, twitter, github },
  modules,
}: IHeaderProps) => {
  return (
    <StyledHeader>
      <Navigation modules={modules} />
      {showProfilePic && <StyledImage src="./assets/profile.jpg" />}
      <StyledName>{name}</StyledName>
      <StyledWorkTitle>{title}</StyledWorkTitle>
      {(github || linkedIn || twitter) && (
        <StyledSocialLinks>
          {github && (
            <Link href={github} isExternal={true}>
              <GithubIcon />
            </Link>
          )}
          {linkedIn && (
            <Link href={linkedIn} isExternal={true}>
              <LinkedInIcon />
            </Link>
          )}
          {twitter && (
            <Link href={twitter} isExternal={true}>
              <TwitterIcon />
            </Link>
          )}
          {cvLink && (
            <Button
              colorScheme="gray"
              style={{ color: "white" }}
              _hover={{ color: themeConfig[config.theme].darker }}
              _pressed={{ color: themeConfig[config.theme].darker }}
              onClick={() => window.open(cvLink)}
              variant="outline"
              size="md"
            >
              My Resume
            </Button>
          )}
        </StyledSocialLinks>
      )}

    </StyledHeader>
  );
};

export default Header;
