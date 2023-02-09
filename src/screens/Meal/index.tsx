import { Alert } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';

import { Header } from "@components/Header";
import { Button } from "@components/Button";

import { Body } from '@styles/body';

import { mealRemoveByDate } from "@storage/meals/mealRemoveByDate";

import { Container,   
    MealInfoContainer, 
    MealName,
    MealDescription,
    MealDateTimeLabel,
    MealDateTimeInfo,
    AccomplishmentIndicatorContainer,
    StatusIcon,
    AccomplishmentTitle
} from "./styles";
import { useState } from "react";
import { AlertModal } from "@components/AlertModal";


type RouteParams = {
    mealInfo: MealInfoProps;
}

export function Meal(){
    const navigation = useNavigation();
    const [modalAlertVisible, setModalAlertVisible] = useState(false);
    const route = useRoute();
    const { mealInfo } = route.params as RouteParams;

    async function mealRemove(){
        try {
          await mealRemoveByDate(mealInfo); 
          navigation.navigate('home'); 
        } catch (error) {
          Alert.alert('Remover a Refeição', 'Não foi possível remover a refeição.');        
        }        
    }
    
     
    async function handleRemoveMeal(){
        setModalAlertVisible(true)
    }

    function handleEditMeal(){
        navigation.navigate('newMeal', { mealInfo });
    }

    return(
        <Container
            accomplishment={mealInfo.mealInDiet ? 'SUCCESS' : 'FAILURE'}
        >
            <Header
                title="Refeição"
                accomplishment={mealInfo.mealInDiet ? 'SUCCESS' : 'FAILURE'}
            />

            <Body>
                <MealInfoContainer>   

                    <MealName>
                        {mealInfo.mealName}
                    </MealName>

                    <MealDescription>
                        {mealInfo.mealDescription}
                    </MealDescription>
               
                    <MealDateTimeLabel>Data e hora</MealDateTimeLabel>

                    <MealDateTimeInfo>
                        {`${mealInfo.mealDate} às ${mealInfo.mealTime}`}
                    </MealDateTimeInfo>

                    <AccomplishmentIndicatorContainer
                      accomplishment={mealInfo.mealInDiet ? 'SUCCESS' : 'FAILURE'}  
                    >
                        <StatusIcon 
                            accomplishment={mealInfo.mealInDiet ? 'SUCCESS' : 'FAILURE'}  
                        />

                        <AccomplishmentTitle>
                            {mealInfo.mealInDiet ? 'dentro da dieta' : 'fora da dieta'}
                        </AccomplishmentTitle>

                    </AccomplishmentIndicatorContainer>

                </MealInfoContainer>

                <Button 
                    title="Editar refeição"
                    icon="border-color"
                    onPress={handleEditMeal}
                />

                <Button 
                    title="Excluir refeição"
                    type="SECUNDARY"
                    icon="delete"
                    onPress={handleRemoveMeal}
                />

                <AlertModal                 
                    modalAlertVisible={modalAlertVisible}
                    setModalAlertVisible={setModalAlertVisible}
                    title="Deseja realmente excluir o registro da refeição?"
                    buttons={[
                        {title: 'Cancelar', onPress: 'cancel', type: 'SECUNDARY' },
                        {title: 'Sim, excluir', onPress: () => mealRemove(), type: 'PRIMARY'}
                    ]}
                />

            </Body>
        </Container>
    );
}