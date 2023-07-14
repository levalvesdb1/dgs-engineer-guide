import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Container from './../../components/container/container';
import {translate} from '@docusaurus/Translate';

function Foot() {

	const component = 'shift-foot';

	return (
		<div className={component}>
			<Container
				componentClass={component}
				spacingBottom={'small'}
				spacingTop={'none'}
				bgColor={'light'}
			>
				<div className={`${component}__columns`}>
					<div className={`${component}__column ${component}__column--left`}
						dangerouslySetInnerHTML={{
							__html: translate({message: "foot.credits"}),
						}}>
					</div>
					<div className={`${component}__column ${component}__column--right`}>
						<span className={`${component}__copy`}>
							{translate({message: "foot.reserved"})}
						</span>
						<span className={`${component}__logo-wrap`}>
						{translate({message: "foot.part-of"})}
							<a href="https://infinum.com/" target="_blank" rel="noopener noreferrer" className={`${component}__logo`}>
								<img src={useBaseUrl('img/ic-infinum-logo.svg')} />
							</a>
						</span>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Foot;
