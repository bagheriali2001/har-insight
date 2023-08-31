export const useConfig = () => useState('config', () => {
    return {
        // default config
        autoSelectFirstPage: true,
    };
});