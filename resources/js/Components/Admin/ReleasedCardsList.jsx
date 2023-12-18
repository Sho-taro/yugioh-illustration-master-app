import React from 'react'

function ReleasedCardsList({releasedCards}) {
  return (
		<table>
			<thead>
				<tr>
					<th className="w-48">イラスト</th>
					<th className="w-40">型番</th>
					<th className="w-80">収録</th>
					<th className="w-40">発売日</th>
					<th className="w-20">初登場時期</th>
				</tr>
			</thead>
			{releasedCards.map((rc, index) => (
        <tbody key={index}>
					<tr>
						<td>
							<img
								src={`/images/card-images/${rc.product_code}-${rc.list_number}.jpg`}
                className="w-40"
								alt="イラスト"
							/>
						</td>
						<td>{`${rc.product_code}-${rc.list_number}`}</td>
						<td>{rc.name_ja}</td>
						<td>{rc.release_date}</td>
						<td>{rc.name}</td>
					</tr>
				</tbody>
			))}
		</table>
  );
}

export default ReleasedCardsList