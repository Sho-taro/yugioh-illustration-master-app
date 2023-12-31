import React from 'react';

function SpellTrapCardInput({ value, imageIndex, onChange, errors }) {
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
								name="product_code"
								key={`${imageIndex}_pc`}
								type="text"
								className="w-80"
								placeholder="agov"
								onChange={onChange}
							/>
							{errors.product_code && (
								<p className="text-red-500">{errors.product_code}</p>
							)}
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>list_number:</th>
						<td>
							<input
								name="list_number"
								key={`${imageIndex}_ln`}
								type="text"
								className="w-80"
								placeholder="jp001"
								onChange={onChange}
							/>
							{errors.list_number && (
								<p className="text-red-500">{errors.list_number}</p>
							)}
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
							{errors.card_official_id && (
								<p className="text-red-500">{errors.card_official_id}</p>
							)}
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
								placeholder="三戦の才"
								onChange={onChange}
							/>
							{errors.name_ja && <p className="text-red-500">{errors.name_ja}</p>}
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
								placeholder="さんせんのさい"
								onChange={onChange}
							/>
							{errors.name_ja_kana && (
								<p className="text-red-500">{errors.name_ja_kana}</p>
							)}
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
							{errors.name_en && <p className="text-red-500">{errors.name_en}</p>}
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
							{errors.frame_type_code && (
								<p className="text-red-500">{errors.frame_type_code}</p>
							)}
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
							{errors.archetype_code && (
								<p className="text-red-500">{errors.archetype_code}</p>
							)}
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th>play_type_code:</th>
						<td>
							<input
								name="play_type_code"
								type="text"
								className="w-80"
								placeholder="3000"
								value={value.play_type_code}
								readOnly
							/>
							{errors.play_type_code && (
								<p className="text-red-500">{errors.play_type_code}</p>
							)}
						</td>
					</tr>
				</tbody>
			</table>
		</>
  );
}

export default SpellTrapCardInput;