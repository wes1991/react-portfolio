import { Button, Collapse } from "@chakra-ui/react";
import React, { useState } from "react";
import { StyledCommonSection, StyledTitle } from "../../common/styles";
import WhatIKnowItem, { IWhatIKnowItem, WhatIKnowItemType } from "./WhatIKnowItem";
import { config, themeConfig } from "../../config";

import { IModuleBase } from "../../contracts";
import Marquee from "react-fast-marquee";
import WhatIKnowListGroupContainer from "./WhatIKnowListGroupContainer";
import styled from "styled-components";

const StyledWhatIKnow = styled.div`
	margin: 3em 0 0 0;
	width: 1000px;
`;

const StyledWhatIKnowList = styled.div`
	margin-top: 2em;
	width: 100%;
`;

export interface IWhatIKnowProps extends IModuleBase {
	data: IWhatIKnowItem[];
}

const WhatIKnow = ({ data, title, index }: IWhatIKnowProps) => {
	const [showList, setShowList] = useState(true);

	return (
		<StyledCommonSection id={`module-${index}`}>
			<StyledTitle>{title}</StyledTitle>
			<Button colorScheme={themeConfig[config.theme].color} variant="outline" onClick={() => setShowList(!showList)}>
				{showList ? "Hide list" : "Show List"}
			</Button>
			<StyledWhatIKnow>
				<Marquee speed={50} play={true} pauseOnHover={true}>
					{data.map((item, index) => (
						<WhatIKnowItem key={index} logo={item.logo} name={item.name} isCurrentlyUsing={item.isCurrentlyUsing} />
					))}
				</Marquee>
				<Collapse in={showList} animateOpacity>
					<StyledWhatIKnowList>
						{(Object.keys(WhatIKnowItemType) as Array<keyof typeof WhatIKnowItemType>).map((key, index) => {
							const whatIKnowTypeGroup = data.filter((wik) => wik.type === WhatIKnowItemType[key]);
							return whatIKnowTypeGroup.length > 0 && <WhatIKnowListGroupContainer key={index} title={WhatIKnowItemType[key]} group={whatIKnowTypeGroup} />;
						})}
					</StyledWhatIKnowList>
				</Collapse>
			</StyledWhatIKnow>
		</StyledCommonSection>
	);
};

export default WhatIKnow;
