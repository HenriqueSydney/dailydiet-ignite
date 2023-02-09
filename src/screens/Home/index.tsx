import { useState, useCallback } from 'react';
import { Alert, SectionList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import moment from 'moment';

import { Loading } from '@components/Loading';
import { HomeHeader } from '@components/HomeHeader';
import { PercentageBox } from '@components/PercentageBox';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { Meal } from '@components/Meal';

import { mealsGetAll } from '@storage/meals/mealsGetAll';

import { CalculateAccomplishmentPercent } from '@utils/CalculateAndVerifyPercent';
import { AppError } from '@utils/AppError';

import { 
  Container,
  MealScheduleContainer,
  MealScheduleTitle,
  DateMealsHeaderSection
 } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Home() {   
  const [meals, setMeals] = useState<MealDataParams[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<accomplishmentTypeEnum>('');
  const [accomplishmentPercent, setAccomplishmentPercent] = useState(0);
 
  const navigation = useNavigation();
  
  function handleOpenDashboard(){
    navigation.navigate('dashboard');
  } 

  function handleAddMeal(){
    const mealInfo: MealInfoProps = { 
      mealName: '',
      mealDescription: '',
      mealDate: '',
      mealTime: '',
      mealInDiet: false
    }
    navigation.navigate('newMeal', { mealInfo });
  } 

  function handleOpenMeal(mealInfo: MealInfoProps){
    navigation.navigate('meal', { mealInfo });
  }

  async function calculatePercentage() {
    try {
      //await AsyncStorage.clear();
      const mealsAccomplishmentInfo = await CalculateAccomplishmentPercent();
      
      if(mealsAccomplishmentInfo !== undefined  &&  mealsAccomplishmentInfo !== null){
        setResult(mealsAccomplishmentInfo.result);
        setAccomplishmentPercent(mealsAccomplishmentInfo.accomplishmentPercent);
      }      
    } catch (error) {
      if(error instanceof AppError){
        Alert.alert('Cálculo de Percentual',error.message);
      } else{            
        Alert.alert('Cálculo de Percentual', 'Não foi possível calcular o percentual de refeições dentro da dieta.');
      }
    }  
  }

  async function fetchMeals(){ 
    try{    
      
      setIsLoading(true); 

      const fetchedMeals = await mealsGetAll();

      const mealsSortedByDate: MealDataParams[] = fetchedMeals.sort((a, b) =>  b.title.localeCompare(a.title));
            
      mealsSortedByDate.map((value) =>  value.data.sort((a, b) =>  b.mealTime.localeCompare(a.mealTime)));

      setMeals(mealsSortedByDate); 
    
      setIsLoading(false);
         
    }catch (error) {
      if(error instanceof AppError){
        Alert.alert('Cálculo de Percentual',error.message);
      } else{            
        Alert.alert('Informações de refeições', 'Não foi possível recuperar as informações sobre suas refeiçẽos.');
      }      
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeals();
    calculatePercentage();
  }, []));

  return (
    <Container>  
      <HomeHeader />
      <PercentageBox 
        result={result}
        accomplishmentPercent={accomplishmentPercent}  
        onPress={handleOpenDashboard}
      />   

      <MealScheduleContainer>
        <MealScheduleTitle>
          Refeições
        </MealScheduleTitle>

        <Button 
          title="Nova refeição"
          onPress={handleAddMeal}
          icon="add"
        />

      {isLoading ? <Loading /> : <SectionList
        fadingEdgeLength={300}
        style={{ width: '100%', paddingBottom: 30}}
        sections={meals}
        keyExtractor={(item, index) => item.mealName + index }
        renderItem={({ item }) => (
          <Meal 
            mealTime={item.mealTime}
            mealName={item.mealName} 
            isInDiet={item.mealInDiet}
            onPress={() => handleOpenMeal(item)}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <DateMealsHeaderSection>{ moment(title,"YYYYMMDD").format("DD-MM-YYYY") }</DateMealsHeaderSection>
        )}
        ListEmptyComponent={() => (
          <ListEmpty 
            message="Nenhum registro localizado. Quer cadastrar uma refeição?" />
        )}
        contentContainerStyle={meals.length === 0 && { flex: 1 }}
        showsVerticalScrollIndicator={false}
      />}
      
        
      </MealScheduleContainer>     
         
    </Container>
  );
}
