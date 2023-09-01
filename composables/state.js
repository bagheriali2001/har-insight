export const useConfig = () => {
	return useState('config', () => {
		return {
			// default config
			autoSelectFirstPage: true,
		};    });

};