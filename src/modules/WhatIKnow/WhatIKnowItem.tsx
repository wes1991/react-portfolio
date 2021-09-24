import { Badge, Tooltip } from "@chakra-ui/react";
import { config, themeConfig } from "../../config";

import React from "react";
import styled from "styled-components";

const StyledWhatIKnowItem = styled.div`
	margin: 0 2em;
	position: relative;
	> img {
		width: 100px;
		opacity: 0.8;
		transition: 0.18s all;
		filter: grayscale(90%);
		&:hover {
			opacity: 1;
			filter: grayscale(0%);
		}
	}
`;

const StyledBadgeContainer = styled.div`
	position: absolute;
	top: 0.25em;
	left: 0.25em;
	z-index: 100;
`;

export enum WhatIKnowItemType {
	COMPONENT_FRAMEWORKS = "Component Frameworks",
	TESTING_FRAMEWORKS = "Testing frameworks",
	BACKEND_API = "Backend / API",
	DATABASES = "Databases",
	DESIGN_SYSTEMS = "Design Systems",
	UI_FRAMEWORKS = "UI frameworks",
	LANGUAGES = "Languages",
}

export interface IWhatIKnowItem {
	logo: string;
	name: string;
	type?: WhatIKnowItemType;
	isCurrentlyUsing?: boolean;
}

const WhatIKnowItem = ({ logo, name, isCurrentlyUsing = false }: IWhatIKnowItem) => {
	return (
		<StyledWhatIKnowItem>
			{isCurrentlyUsing && (
				<StyledBadgeContainer>
					<Badge variant="solid" colorScheme="red">
						Using
					</Badge>
				</StyledBadgeContainer>
			)}
			<Tooltip gutter={16} hasArrow label={name} bg={themeConfig[config.theme].darker} placement="top">
				<img src={`./assets/usages/${logo}.webp`} alt={name} />
			</Tooltip>
		</StyledWhatIKnowItem>
	);
};

export default WhatIKnowItem;
