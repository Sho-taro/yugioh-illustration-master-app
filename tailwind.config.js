import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
		'./storage/framework/views/*.php',
		'./resources/views/**/*.blade.php',
		'./resources/js/**/*.jsx',
		'./resources/js/**/*.js', // 念の為 js ファイルも追加
	],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Figtree', ...defaultTheme.fontFamily.sans],
			},
			width: {
				// widthのカスタマイズ
				'1/10': '10%',
				'2/10': '20%',
				'3/10': '30%',
				'4/10': '40%',
				'5/10': '50%',
				'6/10': '60%',
				'7/10': '70%',
				'8/10': '80%',
				'9/10': '90%',
			},
		},
	},

	plugins: [forms],
};
