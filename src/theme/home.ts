import { extendTheme } from '@mui/joy/styles';
import { inputClasses } from '@mui/joy/Input';

export default extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#2a0009',
          100: '#540112',
          200: '#7e021b',
          300: '#a80324',
          400: '#D2042D',
          500: '#db3656',
          600: '#e46881',
          700: '#ed9aab',
          800: '#f6ccd5',
          900: '#fae5ea',
          solidBg: 'var(--joy-palette-primary-600)',
          solidHoverBg: 'var(--joy-palette-primary-500)',
          solidActiveBg: 'var(--joy-palette-primary-400)',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: '#2a0009',
          100: '#540112',
          200: '#7e021b',
          300: '#a80324',
          400: '#D2042D',
          500: '#db3656',
          600: '#e46881',
          700: '#ed9aab',
          800: '#f6ccd5',
          900: '#fae5ea',
          solidBg: 'var(--joy-palette-primary-700)',
          solidColor: 'var(--joy-palette-common-black)',
          solidHoverBg: 'var(--joy-palette-primary-600)',
          solidActiveBg: 'var(--joy-palette-primary-400)',
        },
        background: {
          body: 'var(--joy-palette-common-black)',
          surface: 'var(--joy-palette-neutral-900)',
        },
      },
    },
  },
  fontFamily: {
    display: "'Inter', var(--joy-fontFamily-fallback)",
    body: "'Inter', var(--joy-fontFamily-fallback)",
  },
  components: {
    JoyInput: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.variant === 'outlined' && {
            [`&:not(.${inputClasses.focused}):hover::before`]: {
              boxShadow: `inset 0 0 0 2px ${theme.vars.palette?.[ownerState.color!]?.outlinedBorder}`,
            },
          }),
        }),
        input: {
          caretColor: 'var(--Input-focusedHighlight)',
        },
      },
    },
  },
});
