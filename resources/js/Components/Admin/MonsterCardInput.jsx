import React from 'react'

function MonsterCardInput() {
  return (
		<>
			<table>
				<thead className="hidden">
					<tr>
						<th colSpan="2" className="text-center">
							モンスターカードの登録
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th className="text_left">product_code:</th>
						<td>
							<input type="text" placeholder="agov" />
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th className="text_left">list_number:</th>
						<td>
							<input type="text" placeholder="jp001" />
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th className="text_left">card_official_id:</th>
						<td>
							<input type="text" placeholder="00000000" />
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th className="text_left">name_ja:</th>
						<td>
							<input type="text" placeholder="青眼の白龍" />
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th className="text_left">name_ja_kana:</th>
						<td>
							<input type="text" placeholder="ブルーアイズ・ホワイトドラゴン" />
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th className="text_left">name_en:</th>
						<td>
							<input type="text" placeholder="Blue-Eyes White Dragon" />
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th className="text_left">frame_type_code:</th>
						<td>
							<input type="text" placeholder="normal" />
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th className="text_left mb-2">archetype_code:</th>
						<td>
							<input type="text" placeholder="9999" />
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th className="text_left">attack:</th>
						<td>
							<input type="text" placeholder="3000" />
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th className="text_left">defense:</th>
						<td>
							<input type="text" placeholder="2500" />
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th className="text_left">race_code:</th>
						<td>
							<input type="text" placeholder="0002" />
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th className="text_left">attribute_code:</th>
						<td>
							<input type="text" placeholder="0002" />
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th className="text_left">level or lank:</th>
						<td>
							<input type="text" placeholder="8" />
						</td>
					</tr>
				</tbody>
				<tbody>
					<tr>
						<th className="text_left">link_value:</th>
						<td>
							<input type="text" placeholder="N/A" />
						</td>
					</tr>
				</tbody>
			</table>
		</>
  );
}

export default MonsterCardInput