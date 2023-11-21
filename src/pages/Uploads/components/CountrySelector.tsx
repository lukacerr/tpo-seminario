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
        placeholder="Etiquetas"
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
