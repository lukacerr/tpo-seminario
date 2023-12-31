import { Chip } from '@mui/joy';
import Autocomplete from '@mui/joy/Autocomplete';
import AutocompleteOption from '@mui/joy/AutocompleteOption';
import FormControl, { FormControlProps } from '@mui/joy/FormControl';
import Typography from '@mui/joy/Typography';

interface IValue {
  id: string;
  label: string;
  postsAmount: number;
}

export default function ContrySelector({ sx, values, ...props }: FormControlProps & { values?: IValue[] }) {
  return (
    <FormControl {...props} sx={[{ display: { sm: 'contents' } }, ...(Array.isArray(sx) ? sx : [sx])]}>
      <Autocomplete
        autoHighlight
        multiple
        isOptionEqualToValue={(option, value) => option.id === value.id}
        defaultValue={values}
        limitTags={3}
        options={values || []}
        renderOption={(optionProps, option) => (
          <AutocompleteOption {...optionProps}>
            <Chip>{option.label}</Chip>
            <Typography component="span" textColor="text.tertiary" ml={0.5}>
              📄{option.postsAmount}
            </Typography>
          </AutocompleteOption>
        )}
        slotProps={{
          input: {
            autoComplete: 'new-password', // disable autocomplete and autofill
          },
        }}
      />
    </FormControl>
  );
}

interface CountryType {
  code: string;
  label: string;
  postsAmount: string;
  suggested?: boolean;
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries: readonly CountryType[] = [
  { code: 'AD', label: 'Andorra', postsAmount: '376' },
  { code: 'AI', label: 'Anguilla', postsAmount: '1-264' },
  { code: 'AL', label: 'Albania', postsAmount: '355' },
  { code: 'AM', label: 'Armenia', postsAmount: '374' },
  { code: 'AO', label: 'Angola', postsAmount: '244' },
  { code: 'AQ', label: 'Antarctica', postsAmount: '672' },
  { code: 'AR', label: 'Argentina', postsAmount: '54' },
  { code: 'AS', label: 'American Samoa', postsAmount: '1-684' },
  { code: 'AT', label: 'Austria', postsAmount: '43' },
];
