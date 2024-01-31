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

import getSpellPlayTypeData from '@/utils/getDBDataFuncs/getSpellPlayTypeData';
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

function getStyles(spellPlayType, spellPlayTypes, theme) {
	return {
		fontWeight:
			spellPlayTypes.indexOf(spellPlayType) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

function SpellPlayTypeFilterMUI({ filters, spellPlayTypes, setSpellPlayTypes }) {
	const theme = useTheme();
	const [spellPlayTypeArray, setSpellPlayTypeArray] = React.useState([]);

	const handleChange = event => {
		const {
			target: { value },
		} = event;
		setSpellPlayTypes(
			// On autofill we get a stringified value.
			typeof value === 'string' ? value.split(',') : value
		);
	};

	React.useEffect(() => {
		// console.log('useEffect');
		getSpellPlayTypeData()
			.then(data => {
				setSpellPlayTypeArray([...data]);
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
					value={spellPlayTypes}
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
					{spellPlayTypeArray.map(spellPlayType => (
						<MenuItem
							key={spellPlayType.name_en}
							value={spellPlayType.name_en}
							disableRipple
							style={getStyles(spellPlayType.name_en, spellPlayTypes, theme)}>
							<Checkbox checked={spellPlayTypes.indexOf(spellPlayType.name_en) > -1} />
							<ListItemText primary={spellPlayType.name_ja} />
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}

export default SpellPlayTypeFilterMUI;