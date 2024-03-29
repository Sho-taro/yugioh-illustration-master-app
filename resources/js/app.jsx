import './bootstrap';
import '../css/app.css';    //tailwindcss のエントリポイントを import
import '../css/style.css';  // 生のcssを import
// ↓ Material UI で使う Robot fontのimport
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
	// title: title => `${title} - ${appName}`,
	title: title => title,
	resolve: name =>
		resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
	setup({ el, App, props }) {
		const root = createRoot(el);

		root.render(<App {...props} />);
	},
	progress: {
		color: '#4B5563',
	},
});
