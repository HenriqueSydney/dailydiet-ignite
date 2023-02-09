import { useEffect, useState } from "react";
import { useRoute, useNavigation } from '@react-navigation/native';

import { 
    Container, 
    FeedbackContainer, 
    Title, 
    Description, 
    DescriptionBold, 
    FeedbackImage, 
    ButtonContainer 
} from "./styles";

import { Button } from "@components/Button";

type RouteParams = {
    accomplishment: accomplishmentTypeEnum;
}
  
export function Feedback(){
    const [title, setTitle] = useState('Continue assim!');    
    const [descriptionStart, setDescriptionStart] = useState('Você continua ');
    const [descriptionBoldPart, setDescriptionBoldPart] = useState('dentro da dieta.');
    const [descriptionEnd, setDescriptionEnd] = useState(' Muito bem!');
    
    const navigation = useNavigation();
    const route = useRoute();
    const { accomplishment } = route.params as RouteParams;

    useEffect(() => {
        if(accomplishment === 'SUCCESS'){
            setTitle('Continue assim!');
            setDescriptionStart('Você continua');    
            setDescriptionBoldPart(' dentro da dieta.');    
            setDescriptionEnd(' Muito bem!');        
        } else{
            setTitle('Que pena!');
            setDescriptionStart('Você');    
            setDescriptionBoldPart(' saiu da dieta');    
            setDescriptionEnd(' dessa vez, mas continue se esforçando e não desista');            
        }

    },[]);
   
    function handleGoHome(){
        navigation.navigate('home');
    }

    return (
        <Container>
            <FeedbackContainer>
                <Title
                    accomplishment={accomplishment}
                >
                    {title}
                </Title>

                <Description>
                    {descriptionStart}
                    <DescriptionBold>{descriptionBoldPart}</DescriptionBold>
                    {descriptionEnd}
                </Description>

            </FeedbackContainer>

            <FeedbackImage source={accomplishment === 'SUCCESS' ? require('@assets/successImage.png') : require('@assets/failureImage.png')}/>
            <ButtonContainer>
                <Button 
                    title="Ir para a página inicial"
                    onPress={handleGoHome}
                />
            </ButtonContainer>
        </Container>
    
    );
}