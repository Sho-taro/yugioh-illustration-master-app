import React from 'react';
import { router } from '@inertiajs/react';

function MonsterCardRegistration({ values }) {
	const handleClick = () => {
		const newValues = {
			...values,
			cardType: 'monster',
		};
		// console.log(values);
		router.post(route('admin.card.store'), newValues);
	};

	return (
		<>
			<table>
				<thead className="hidden">
					<tr>
						<th>項目</th>
						<td>データ</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>product_code:</th>
						<td>　{values.product_code}</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>list_number:</th>
						<td>　{values.list_number}</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>card_official_id:</th>
						<td>　{values.card_official_id}</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>name_ja:</th>
						<td>　{values.name_ja}</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>name_ja_kana:</th>
						<td>　{values.name_ja_kana}</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>name_en:</th>
						<td>　{values.name_en}</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>frame_type_code:</th>
						<td>　{values.frame_type_code}</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>archetype_code:</th>
						<td>　{values.archetype_code}</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>attack:</th>
						<td>　{values.attack}</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>defense:</th>
						<td>　{values.defense}</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>race_code:</th>
						<td>　{values.race_code}</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>attribute_code:</th>
						<td>　{values.attribute_code}</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>level or rank:</th>
						<td>　{values['level or rank']}</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>link_value:</th>
						<td>　{values.link_value}</td>
					</tr>
				</tbody>
			</table>
			<button onClick={handleClick}>登録</button>
		</>
	);
}

export default MonsterCardRegistration;
