import React from 'react';

function MonsterCardInput({ value, imageIndex, onChange }) {
	return (
		<>
			<table key={value.card_official_id}>
				<thead className="hidden">
					<tr>
						<th>項目</th>
						<td>データ</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th>product_code:</th>
						<td>
							<input
								key={`${imageIndex}_pc`}
								name="product_code"
								type="text"
								className="w-80"
								placeholder="agov"
								onChange={e => onChange(e)}
							/>
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>list_number:</th>
						<td>
							<input
								key={`${imageIndex}_ln`}
								name="list_number"
								type="text"
								className="w-80"
								placeholder="jp001"
								onChange={e => onChange(e)}
							/>
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>card_official_id:</th>
						<td>
							<input
								name="card_official_id"
								type="text"
								className="w-80"
								placeholder="00000000"
                value={value.card_official_id}
                readOnly
							/>
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>name_ja:</th>
						<td>
							<input
								name="name_ja"
								type="text"
								className="w-80"
								placeholder="青眼の白龍"
								onChange={e => onChange(e)}
							/>
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>name_ja_kana:</th>
						<td>
							<input
								name="name_ja_kana"
								type="text"
								className="w-80"
								placeholder="ブルーアイズ・ホワイトドラゴン"
								onChange={e => onChange(e)}
							/>
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>name_en:</th>
						<td>
							<input
								name="name_en"
								type="text"
								className="w-80"
								placeholder="Blue-Eyes White Dragon"
                value={value.name_en}
                readOnly
							/>
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>frame_type_code:</th>
						<td>
							<input
								name="frame_type_code"
								type="text"
								className="w-80"
								placeholder="normal"
                value={value.frame_type_code}
                readOnly
							/>
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>archetype_code:</th>
						<td>
							<input
								name="archetype_code"
								type="text"
								className="w-80"
								placeholder="Blue-Eyes"
                value={value.archetype_code}
                readOnly
							/>
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>attack:</th>
						<td>
              <input
                name="attack"
								type="text"
								className="w-80"
								placeholder="3000"
                value={value.attack}
                readOnly
							/>
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>defense:</th>
						<td>
              <input
                name="defense"
								type="text"
								className="w-80"
								placeholder="2500"
                value={value.defense}
                readOnly
							/>
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>race_code:</th>
						<td>
              <input
                name="race_code"
								type="text"
								className="w-80"
								placeholder="Dragon"
                value={value.race_code}
                readOnly
							/>
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>attribute_code:</th>
						<td>
              <input
                name="attribute_code"
								type="text"
								className="w-80"
								placeholder="LIGHT"
                value={value.attribute_code}
                readOnly
							/>
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>level or rank:</th>
						<td>
              <input
                name="level or rank"
								type="text"
								className="w-80"
								placeholder="8"
                value={value['level or rank']}
                readOnly
							/>
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>link_value:</th>
						<td>
              <input
                name="link_value"
								type="text"
								className="w-80"
								placeholder=""
                value={value.link_value}
                readOnly
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}

export default MonsterCardInput;