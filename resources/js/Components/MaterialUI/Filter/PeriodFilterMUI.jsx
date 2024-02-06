import * as React from 'react';
import { useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';

// select boxのoption部分にチェックボックスをつけるために必要
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

// 選択したものをinput欄にchip形式で表示するために必要
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import { isCheckboxOn } from '@/utils/isCheckboxOn';

import getPeriodData from '@/utils/getDBDataFuncs/getPeriodData';

const ITEM_HEIGHT = 96;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
	// 以下を追加（Menuの表示位置のカスタマイズ）
	getContentAnchorEl: null, // anchorOrigin, transformOrigin が変更可能になるように元々ポップオーバーの基準となっている要素を解除
	anchorOrigin: { vertical: 'top', horizontal: 'right' }, // ポップオーバーの表示起点
	transformOrigin: { vertical: 'top', horizontal: 'left' }, // 表示時の transform の起点
};

function getStyles(period, periods, theme) {
	return {
		fontWeight:
			periods.indexOf(period) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

function PeriodFilterMUI({ filters, periods, setPeriods }) {
	const theme = useTheme();
	const [periodArray, setPeriodArray] = React.useState([]);

	const handleChange = event => {
		const {
			target: { value },
		} = event;
		setPeriods(
			// On autofill we get a stringified value.
			typeof value === 'string' ? value.split(',') : value
		);
	};

	React.useEffect(() => {
		// console.log('useEffect');
		getPeriodData()
			.then(data => {
				setPeriodArray([...data]);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<FormControl sx={{ width: '25rem' }}>
				<Select
					variant="standard"
					multiple
					displayEmpty
					// autoWidth
					value={periods}
					onChange={handleChange}
					// input={<OutlinedInput id="select-multiple-chip" label="Chip" />}   // labelの文字指定
					renderValue={selected => {
						// if (selected.length === 0) {
						// 	// return <em className="text-gray">指定なし</em>;
						// 	return (
						// 		<Typography component="em" sx={{ color: 'gray' }}>
						// 			指定なし
						// 		</Typography>
						// 	);
						// }
						// // return selected.join(', ');
						// return (
						// 	<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
						// 		{selected.map(value => (
						// 			<Chip key={value} label={value} />
						// 		))}
						// 	</Box>
						// );
						return (
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									py: '0.5rem',
								}}>
								<Typography component="p" sx={{ ml: '1rem' }}>
									初収録
								</Typography>
								<div className="mr-4">
									{selected.length === 0 ? (
										<Typography component="em" sx={{ color: 'gray' }}>
											指定なし
										</Typography>
									) : (
										<Box
											sx={{
												ml: '2rem',
												display: 'flex',
												flexWrap: 'wrap',
												gap: 0.5,
											}}>
											{selected.map(value => (
												<Chip key={value} label={value} />
											))}
										</Box>
									)}
								</div>
							</Box>
						);
					}}
					MenuProps={MenuProps}
					inputProps={{ 'aria-label': 'Without label' }}>
					{/* ↓ menu先頭に表示用 */}
					<MenuItem
						// value=''
						disableRipple
						disabled>
						<ListItemText primary="初収録" />
					</MenuItem>
					{periodArray.map(period => (
						<MenuItem
							key={period.name}
							value={period.name}
							disableRipple
							style={getStyles(period.name, periods, theme)}>
							<Checkbox checked={periods.indexOf(period.name) > -1} />
							<ListItemText primary={period.name} />
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}

export default PeriodFilterMUI;