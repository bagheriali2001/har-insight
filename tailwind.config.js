module.exports = {
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				custom: {
					"primary": "#3abff8",

					"secondary": "#828df8",

					"accent": "#f471b5",

					"neutral": "#1d283a",

					"base-100": "#0f1729",
					// "base-100": "#0177B6",

					"info": "#0ca6e9",

					"success": "#2bd4bd",

					"warning": "#f4c152",

					"error": "#fb6f84",

					"--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
					"--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
					"--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
					"--animation-btn": "0.25s", // duration of animation when you click on button
					"--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
					"--btn-text-case": "uppercase", // set default text transform for buttons
					"--btn-focus-scale": "0.95", // scale transform of button when you focus on it
					"--border-btn": "1px", // border width of buttons
					"--tab-border": "1px", // border width of tabs
					"--tab-radius": "0.5rem", // border radius of tabs
				},
			}
		],
	},
	theme: {
		extend: {
			boxShadow: {
				'zero': '0 0 6px 6px rgb(74, 222, 128)',
			}
		}
	}
};
