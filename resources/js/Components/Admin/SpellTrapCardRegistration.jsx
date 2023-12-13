import React from 'react'
import { router } from '@inertiajs/react';

function SpellTrapCardRegistration({ values }) {
  const handleClick = () => {
    const newValues = {
      ...values,
      cardType: 'spell/trap'
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
						<th>play_type_code:</th>
						<td>　{values.play_type_code}</td>
					</tr>
				</tbody>
			</table>
			<button onClick={handleClick}>登録</button>
		</>
  );
}

export default SpellTrapCardRegistration