import React from 'react'

function SpellTrapCardUpdateForm({ values, handleSubmit, onChange, isEditable, errors }) {
	return (
		<>
			<form onSubmit={handleSubmit} method="POST">
				<table className="show-table">
					<thead className="hidden">
						<tr>
							<th>項目</th>
							<td>データ</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th className="">ID:</th>
							<td>
								<p className="w-80">{values.id}</p>
							</td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<th>card_official_id:</th>
							<td>
								<p className="w-80">{values.card_official_id}</p>
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
									value={values.name_ja}
									onChange={e => onChange(e)}
									disabled={!isEditable}
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
									placeholder="ブルーアイズ・ホワイトドラゴン"
									value={values.name_ja_kana}
									onChange={e => onChange(e)}
									disabled={!isEditable}
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
									value={values.name_en}
									onChange={e => onChange(e)}
									disabled={!isEditable}
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
									value={values.frame_type_code}
									onChange={e => onChange(e)}
									disabled={!isEditable}
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
									value={values.archetype_code}
									onChange={e => onChange(e)}
									disabled={!isEditable}
								/>
								{errors.archetype_code && (
									<p className="text-red-500">{errors.archetype_code}</p>
								)}
							</td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<th>play_type_code</th>
							<td>
								<input
									name="play_type_code"
									type="text"
									className="w-80"
									placeholder="N/A"
									value={values.play_type_code}
									onChange={e => onChange(e)}
									disabled={!isEditable}
								/>
								{errors.play_type_code && (
									<p className="text-red-500">{errors.play_type_code}</p>
								)}
							</td>
						</tr>
					</tbody>
				</table>
				<button type="submit" className="simple-button" disabled={!isEditable}>
					変更を保存
				</button>
			</form>
		</>
	);
}

export default SpellTrapCardUpdateForm