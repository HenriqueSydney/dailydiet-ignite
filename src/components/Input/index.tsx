import { TextInput, TextInputProps, View } from 'react-native';

import { Container, ErrorMessage, InputContainer, Label } from './styles';

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  label?: string;
  error?: string;
  touched: undefined | boolean; 
}

export function Input({ inputRef, touched, label='', error='' , ...rest }: Props){ 
  return (
    <Container>
      {label !== '' && 
        <>
          <Label>
            {label}
          </Label>
          <View style={{ height: 5}}/>
        </>
      }

      <InputContainer 
        touched={touched}
        error={error}   
        ref={inputRef}
        {...rest}  
      />
      {(error && touched) && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
}