import { useFormContext } from 'react-hook-form';
import states from 'states-us';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components';

import { type TestCenter } from '.';

type AddressFormProps = {
  whichAddress: 'address' | 'primaryCoordinator.address' | 'shippingAddress';
};

export const AddressForm = ({ whichAddress }: AddressFormProps) => {
  const form = useFormContext<TestCenter>();
  const zipHandler = (
    { target: { value } }: React.ChangeEvent<HTMLInputElement>,
    onChange: (...event: unknown[]) => void,
  ) => {
    const nonDigitCheck = /\D/g;
    if (nonDigitCheck.test(value)) {
      const _value = value.replace(nonDigitCheck, '');
      onChange(_value);
      return;
    }
    onChange(value);
  };

  return (
    <>
      <FormField
        control={form.control}
        name={`${whichAddress}.address1`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Address 1</FormLabel>
            <FormControl>
              <Input type="text" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`${whichAddress}.address2`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Address 2</FormLabel>
            <FormControl>
              <Input type="text" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`${whichAddress}.address3`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Address 3</FormLabel>
            <FormControl>
              <Input type="text" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`${whichAddress}.city`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>City</FormLabel>
            <FormControl>
              <Input type="text" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`${whichAddress}.state`}
        render={({ field }) => (
          <FormItem data-testid="state">
            <FormLabel htmlFor="state">State</FormLabel>
            <Select
              onValueChange={(value) => {
                if (value === 'none') {
                  field.onChange('');
                  return;
                }
                field.onChange(value);
              }}
              value={!field.value ? 'none' : field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
              </FormControl>
              <SelectContent id="state">
                <SelectItem value="none">-- Choose a State --</SelectItem>
                {states.map((state) => (
                  <SelectItem
                    key={state.abbreviation}
                    value={state.abbreviation}
                  >
                    {state.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`${whichAddress}.zip5`}
        render={({ field: { onChange, ...field } }) => {
          return (
            <FormItem>
              <FormLabel>Zip 5</FormLabel>
              <FormControl>
                <Input
                  inputMode="numeric"
                  onChange={(event) => {
                    zipHandler(event, onChange);
                  }}
                  maxLength={5}
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />
      <FormField
        control={form.control}
        name={`${whichAddress}.zip4`}
        render={({ field: { onChange, ...field } }) => (
          <FormItem>
            <FormLabel>Zip 4</FormLabel>
            <FormControl>
              <Input
                inputMode="numeric"
                onChange={(event) => {
                  zipHandler(event, onChange);
                }}
                maxLength={4}
                type="text"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
