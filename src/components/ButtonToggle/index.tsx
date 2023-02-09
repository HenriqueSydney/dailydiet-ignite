import { TextProps, TouchableOpacityProps } from "react-native";
import { Container, StatusIcon, Title } from "./styles";

type Props = TouchableOpacityProps & TextProps & {
    title: string;
    isActive?: boolean;
    type?: accomplishmentTypeEnum
}
  

export function ButtonToggle({ title, isActive=false, type='SUCCESS', ...rest }: Props){

    return (
        <Container 
            {...rest}           
            isActive={isActive}
            type={type}
        >
            
            <StatusIcon 
                isActive={isActive}
                type={type}
            />
            
            <Title>
                {title}
            </Title>

        </Container>
    );
}