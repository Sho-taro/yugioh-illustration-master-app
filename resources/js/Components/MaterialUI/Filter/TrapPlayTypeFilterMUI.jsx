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

import getTrapPlayTypeData from '@/utils/getDBDataFuncs/getTrapPlayTypeData';
import { getPlayTypeNameJa } from '@/utils/getNameJaFunctions';

const ITEM_HEIGHT = 96;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

function getStyles(trapPlayType, trapPlayTypes, theme) {
	return {
		fontWeight:
			trapPlayTypes.indexOf(trapPlayType) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

function TrapPlayTypeFilterMUI({ filters, trapPlayTypes, setTrapPlayTypes }) {
	const theme = useTheme();
	const [trapPlayTypeArray, setTrapPlayTypeArray] = React.useState([]);

	const handleChange = event => {
		const {
			target: { value },
		} = event;
		setTrapPlayTypes(
			// On autofill we get a stringified value.
			typeof value === 'string' ? value.split(',') : value
		);
	};

	React.useEffect(() => {
		// console.log('useEffect');
		getTrapPlayTypeData()
			.then(data => {
				setTrapPlayTypeArray([...data]);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<FormControl sx={{ minWidth: '20rem' }}>
				<Select
					multiple
					displayEmpty
					autoWidth
					value={trapPlayTypes}
					onChange={handleChange}
					// input={<OutlinedInput id="select-multiple-chip" label="Chip" />}   // labelの文字指定
					renderValue={selected => {
						if (selected.length === 0) {
							// return <em className="text-gray">指定なし</em>;
							return (
								<Typography component="em" sx={{ color: 'gray' }}>
									指定なし
								</Typography>
							);
						}
						// return selected.join(', ');
						return (
							<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
								{selected.map(value => (
									<Chip key={value} label={getPlayTypeNameJa(value)} />
								))}
							</Box>
						);
					}}
					MenuProps={MenuProps}
					inputProps={{ 'aria-label': 'Without label' }}>
					{trapPlayTypeArray.map(trapPlayType => (
						<MenuItem
							key={trapPlayType.name_en}
							value={trapPlayType.name_en}
							disableRipple
							style={getStyles(trapPlayType.name_en, trapPlayTypes, theme)}>
							<Checkbox checked={trapPlayTypes.indexOf(trapPlayType.name_en) > -1} />
							<ListItemText primary={trapPlayType.name_ja} />
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}

export default TrapPlayTypeFilterMUI;