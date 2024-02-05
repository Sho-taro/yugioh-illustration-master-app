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

import getAttributeData from '@/utils/getDBDataFuncs/getAttributeData';
import { getAttributeNameJa } from '@/utils/getNameJaFunctions';

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

function getStyles(attribute, attributes, theme) {
	return {
		fontWeight:
			attributes.indexOf(attribute) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

function AttributeFilterMUI({ filters, attributes, setAttributes }) {
	const theme = useTheme();
	const [attributeArray, setAttributeArray] = React.useState([]);

	const handleChange = event => {
		const {
			target: { value },
		} = event;
		setAttributes(
			// On autofill we get a stringified value.
			typeof value === 'string' ? value.split(',') : value
		);
	};

	React.useEffect(() => {
		// console.log('useEffect');
		getAttributeData()
			.then(data => {
				setAttributeArray([...data]);
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
					value={attributes}
					onChange={handleChange}
					// input={<OutlinedInput id="select-multiple-chip" label="Chip" />}   // labelの文字指定
					renderValue={selected => {
						return (
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
									alignItems: 'center',
									py: '0.5rem',
								}}>
								<Typography component="p" sx={{ ml: '1rem' }}>
									属性
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
												<Chip
													key={value}
													label={getAttributeNameJa(value)}
												/>
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
						<ListItemText primary="属性" />
					</MenuItem>
					{attributeArray.map(attribute => (
						<MenuItem
							key={attribute.name_en}
							value={attribute.name_en}
							disableRipple
							style={getStyles(attribute.name_en, attributes, theme)}>
							<Checkbox checked={attributes.indexOf(attribute.name_en) > -1} />
							<ListItemText primary={attribute.name_ja} />
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}

export default AttributeFilterMUI;