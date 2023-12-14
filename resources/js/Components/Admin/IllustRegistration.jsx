import React from 'react';
import { router } from '@inertiajs/react';

function IllustRegistration({ values }) {
  const neededValues = {
    product_code: values.product_code,
    list_number: values.list_number,
    card_official_id: values.card_official_id
  };
  const handleClick = () => {
    // console.log(neededValues);
    router.post(route('admin.releasedcard.store'), neededValues);
  }
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
			</table>
			<button onClick={handleClick} className="mt-4 simple-button">登録</button>
		</>
  );
}

export default IllustRegistration