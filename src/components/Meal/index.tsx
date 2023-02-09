import { TouchableOpacityProps } from "react-native";

import { Container, MealInfoContainer, MealTime, VerticalLine, MealName, Icon} from "./styles";


type Props = TouchableOpacityProps & {
    mealTime: string;
    mealName: string;
    isInDiet: boolean;
}

export function Meal({ mealTime, mealName, isInDiet, ...rest }: Props){
  return (
    <Container {...rest}>
        <MealInfoContainer>
            <MealTime>
                {mealTime}
            </MealTime>

            <VerticalLine />

            <MealName>
                {mealName}
            </MealName>
        </MealInfoContainer>
      <Icon 
        isInDiet={isInDiet}
      />
    </Container>
  );

}
