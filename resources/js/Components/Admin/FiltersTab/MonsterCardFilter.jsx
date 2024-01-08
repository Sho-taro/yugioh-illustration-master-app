import React from 'react';
import FrameTypeFilter from './FrameTypeFilter';
import RaceFilter from './RaceFilter';
import AttributeFilter from './AttributeFilter';
import LevelOrRankFilter from './LevelOrRankFilter';
import LinkValueFilter from './LinkValueFilter';

function MonsterCardFilter({filters}) {
	return (
		<>
			<FrameTypeFilter filters={filters} />
			<RaceFilter filters={filters} />
			<AttributeFilter filters={filters} />
			<LevelOrRankFilter filters={filters} />
			<LinkValueFilter filters={filters} />
		</>
	);
}

export default MonsterCardFilter;
