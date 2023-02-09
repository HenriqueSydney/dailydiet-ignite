import { useState, useEffect } from "react";
import { Alert, View } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { useFormik } from "formik";
import * as yup from 'yup';
import _ from 'lodash';
import moment from "moment";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ButtonToggle } from "@components/ButtonToggle";
import { AppError } from "@utils/AppError";

import { Body } from '@styles/body';

import { mealAdd } from "@storage/meals/mealAdd";
import { mealRemoveByDate } from "@storage/meals/mealRemoveByDate";

import { 
    Container, 
    FormContainer,
    Form, 
    InputContainer, 
    Label 
} from "./style";


type RouteParams = {
    mealInfo: MealInfoProps;
}    

export function NewMeal() {   
    const navigation = useNavigation();       
    const route = useRoute(); 

    const { mealInfo } = route.params as RouteParams; 

   
    const [isYesActive, setIsYesActive] = useState(mealInfo.mealInDiet);
    const [isNoActive, setIsNoActive] = useState(!mealInfo.mealInDiet);
    const [headerTitle, setHeaderTitle] = useState('Nova Refeição');
    const [buttonSubmitText, setButtonSubmitText] = useState('Cadastrar refeição');
    const [addMealAction, setAddMealAction] = useState(true);  
   
    function handleIsYesNoActiveToggle(yesNoButtonToggle: string){
        if(yesNoButtonToggle == 'Yes'){
           isYesActive ? setIsYesActive(false) : setIsYesActive(true);
           isNoActive && setIsNoActive(false);
        } 

        if(yesNoButtonToggle == 'No'){
            isNoActive ? setIsNoActive(false) : setIsNoActive(true);
            isYesActive && setIsYesActive(false);
        } 

        return;
    }

    async function handleFormSubmit(values: MealInfoProps){
        if(!isNoActive && !isYesActive){
            Alert.alert('Nova Refeição','Para cadastrar, informe se a refeição está dentro da dieta.');
            return;
        }
       
        const NewMealInfo ={
            mealName: values.mealName.trim(),
            mealDescription: values.mealDescription.trim(),
            mealDate: values.mealDate,
            mealTime: values.mealTime,
            mealInDiet: isYesActive ? true : false
        }

        try {
            await mealAdd(NewMealInfo);  
            if(!addMealAction){
                if(_.isEqual(mealInfo, NewMealInfo)){
                    Alert.alert('Alteração de Refeição','As informações dos campos são os mesmos que os anteriores. Nenhuma edição foi efetuada.');
                    return;
                }
                await mealRemoveByDate(mealInfo);
            }            
            
            const accomplishment: accomplishmentTypeEnum = isYesActive ? 'SUCCESS' : 'FAILURE';         
                      
            navigation.navigate('feedback', { accomplishment });
        } catch (error) {
            if(error instanceof AppError){
                Alert.alert('Nova Refeição',error.message);
            } else{            
                Alert.alert('Nova Refeição', 'Não foi possível cadastrar refeição.');
            }
        }        
    }

    const ValidationSchema = yup.object().shape({
        mealName: yup
            .string()
            .required('Preencha o nome da refeição')
            .min(2, ({ min }) => `O nome da refeição deve ter, no mínimo, ${min} caracteres`)
            .max(25, ({ max }) => `O nome da refeição deve ter, no máximo, ${max} caracteres`),
        mealDescription: yup
            .string()
            .required('Preencha a descrição da refeição')
            .min(5, ({ min }) => `A descrição da refeição deve ter, no mínimo, ${min} caracteres`)
            .max(100, ({ max }) => `A descrição da refeição deve ter, no máximo, ${max} caracteres`),
        mealDate: yup
            .string()
            .test(
                'Data inválida',
                'A data digitada não é válida',
                (value) => moment(value, "DD/MM/YYYY", true).isValid()
            
            )
            .test(
                'Data máxima',
                'A data não pode ser maior que hoje',
                (value) => moment(value,"DD/MM/YYYY").format("YYYYMMDD") <= moment().format("YYYYMMDD"),
            ),
        mealTime: yup
          .string()
          .test(
            'Hora inválida',
            'A hora digitada não é válida',
            (value) => moment(value, "HH:mm", true).isValid()
        )
    });   
    
    const { handleChange, values, handleSubmit, handleBlur, isValid, errors, touched } = useFormik({
        validationSchema:ValidationSchema,
        initialValues:{
          mealName: mealInfo.mealName,
          mealDescription: mealInfo.mealDescription,
          mealDate: mealInfo.mealDate,
          mealTime: mealInfo.mealTime,
          mealInDiet: mealInfo.mealInDiet                  
        },
        onSubmit: values => {handleFormSubmit(values)}
    });

    useEffect(() => {
        if(mealInfo.mealName !== ''){
            setHeaderTitle('Editar refeição');
            setButtonSubmitText('Salvar alterações');
            setAddMealAction(false);
        } else{
            setIsNoActive(false);
        }
    }, [])
      //"softwareKeyboardLayoutMode": "pan"
    return(   

        <Container>
             <Header 
                title={headerTitle}
            />
           
            <Body>
                <FormContainer contentContainerStyle={{flexGrow: 1}}>         
                    <Form >                    
                        <InputContainer>
                            <Input                                 
                                label="Nome"
                                placeholder="Digite o nome da refeição"
                                value={values.mealName}
                                onChangeText={handleChange('mealName')}   
                                onBlur={handleBlur('mealName')}                        
                                error={errors.mealName}
                                touched={touched.mealName}
                            />
                        
                        </InputContainer>
                        <InputContainer>
                            <Input 
                                label="Descrição"
                                placeholder="Descreva a refeição"
                                multiline={true}
                                numberOfLines={5}
                                value={values.mealDescription}
                                onChangeText={handleChange('mealDescription')}
                                onBlur={handleBlur('mealDescription')}
                                error={errors.mealDescription}
                                touched={touched.mealDescription}
                            />
                        </InputContainer>
                        <InputContainer>
                            <Input 
                                label="Data"
                                placeholder="DD/MM/AAAA"
                                value={values.mealDate}
                                onChangeText={handleChange('mealDate')}
                                onBlur={handleBlur('mealDate')}
                                error={errors.mealDate}     
                                touched={touched.mealDate}                      
                            />
                            <View style={{width: 20}}/>
                            <Input 
                                label="Hora"
                                placeholder="HH:MM"
                                value={values.mealTime}
                                onChangeText={handleChange('mealTime')}
                                onBlur={handleBlur('mealTime')}
                                error={errors.mealTime}
                                touched={touched.mealTime}
                            />
                        </InputContainer>
                    
                        <Label>
                            Está dentro da dieta?
                        </Label>
                        <View style={{height: 5}}/>
                        <InputContainer>
                            <ButtonToggle 
                                title="Sim"
                                isActive={isYesActive}
                                type="SUCCESS"                            
                                onPress={() => {handleIsYesNoActiveToggle('Yes')}}
                            />
                            <View style={{width: 10}}/>
                            <ButtonToggle 
                                title="Não"
                                isActive={isNoActive}
                                type="FAILURE"
                                onPress={() => {handleIsYesNoActiveToggle('No')}}
                            />
                        </InputContainer>

                        
                        
                    </Form> 
                    <Button 
                                
                        title={buttonSubmitText}
                        onPress={() => handleSubmit()}
                        disabled={!isValid || (!isNoActive && !isYesActive)}
                    /> 
                  
                               
                </FormContainer>  
                
            </Body>
        </Container>
    );
}