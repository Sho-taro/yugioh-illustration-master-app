import React from 'react';
import FrameTypeFilter from './FrameTypeFilter';
import RaceFilter from './RaceFilter';
import AttributeFilter from './AttributeFilter';

function MonsterCardFilter() {
	return (
		<>
			<FrameTypeFilter />
			<RaceFilter />
			<AttributeFilter/>
		</>
	);
}

export default MonsterCardFilter;
