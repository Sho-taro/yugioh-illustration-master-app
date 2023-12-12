import React from 'react'

function ReleasedCardsForm() {
  return (
		<>
			<form>
				<table>
					<thead className="hidden">
						<tr>
							<th colSpan="2" className="text-center">
								released_cardsテーブルに登録
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
				</table>
			</form>
		</>
  );
}

export default ReleasedCardsForm