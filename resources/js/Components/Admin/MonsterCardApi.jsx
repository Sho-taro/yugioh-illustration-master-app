import React from 'react';

function MonsterCardApi({ cardData }) {
	return (
		<div className="p-2 rounded-md border border-gray-700">
			<table key={cardData.id}>
				<thead className="hidden">
					<tr>
						<th>項目</th>
						<td>値</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>card_official_id:</th>
						<td>　{cardData.id}</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>name_en:</th>
						<td>　{cardData.name}</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>frame_type:</th>
						<td>　{cardData.frameType}</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>archetype:</th>
						<td>　{cardData.archetype && cardData.archetype}</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>attack:</th>
						<td>　{cardData.atk}</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>defense:</th>
						<td>　{cardData.def}</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>race:</th>
						<td>　{cardData.race}</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>attribute:</th>
						<td>　{cardData.attribute}</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>level_or_rank:</th>
						<td>　{cardData.level && cardData.level}</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>link_value:</th>
						<td>　{cardData.linkval && cardData.linkval}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default MonsterCardApi;
