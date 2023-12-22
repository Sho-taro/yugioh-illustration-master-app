import React from 'react';
import FrameTypeFilter from './FrameTypeFilter';
import RaceFilter from './RaceFilter';
import AttributeFilter from './AttributeFilter';
import LevelOrRankFilter from './LevelOrRankFilter';
import LinkValueFilter from './LinkValueFilter';

function MonsterCardFilter() {
	return (
		<>
			<FrameTypeFilter />
			<RaceFilter />
			<AttributeFilter />
			<LevelOrRankFilter />
			<LinkValueFilter />
		</>
	);
}

export default MonsterCardFilter;
