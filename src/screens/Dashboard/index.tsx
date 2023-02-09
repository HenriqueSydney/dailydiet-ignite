import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { Header } from '@components/Header';
import { Card } from '@components/Card';

import { CalculateAccomplishmentPercent } from '@utils/CalculateAndVerifyPercent';
import { AppError } from '@utils/AppError';

import { 
  Container,
  Body,
  Title,
  Data,
  DataRow
 } from './styles';

export function Dashboard(){   
  const [result, setResult] = useState<accomplishmentTypeEnum>('');
  const [accomplishmentPercent, setAccomplishmentPercent] = useState(0);
  const [mealsInDiet, setMealsInDiet] = useState(0);
  const [mealsOutOfDiet, setMealsOutOfDiet] = useState(0);
  const [bestSequenceInDiet, setBestSequenceInDiet] = useState(0);
  
  async function calculatePercentage() {
    try {
      const mealsAccomplishmentInfo = await CalculateAccomplishmentPercent(true);
      if(mealsAccomplishmentInfo !== undefined  &&  mealsAccomplishmentInfo !== null){
        setResult(mealsAccomplishmentInfo.result);
        setAccomplishmentPercent(mealsAccomplishmentInfo.accomplishmentPercent);
        setMealsInDiet(mealsAccomplishmentInfo.mealsInDiet);
        setMealsOutOfDiet(mealsAccomplishmentInfo.mealsOutOfDiet);
        setBestSequenceInDiet(mealsAccomplishmentInfo.bestSequenceInDiet);
      }  
    } catch (error) {
      if(error instanceof AppError){
        Alert.alert('Cálculo de Percentual',error.message);
      } else{            
        Alert.alert('Cálculo de Percentual', 'Não foi possível calcular o percentual de refeições dentro da dieta.');
      }
    }
  }

  useEffect(() => {
    calculatePercentage();
  }, [accomplishmentPercent, mealsInDiet, mealsOutOfDiet, bestSequenceInDiet ])
   

  return (
    <Container
      accomplishment={result} 
    > 
      <Header 
        title={result !== '' ? accomplishmentPercent+'%' : '0'}
        description={result !== '' ? 'das refeições dentro da dieta' : 'refeições cadastradas'}
        accomplishment={result}
      />

      <Body>
        <Title>
          Estatísticas Gerais
        </Title>    

        <Data>
          <DataRow>
            <Card 
              accomplishment=""
              totals={bestSequenceInDiet}
              description = "melhor sequência de pratos dentro da dieta"
            />
          </DataRow>
          <DataRow>
            <Card 
              accomplishment=""
              totals ={mealsInDiet+mealsOutOfDiet}
              description = {(mealsInDiet+mealsOutOfDiet) > 1 ? "refeições registradas" : "refeição registrada"}
            />
          </DataRow>
          <DataRow>
            <Card 
              accomplishment="SUCCESS"
              totals={mealsInDiet}
              description = {mealsInDiet > 1 ? "refeições dentro da dieta" : "refeição dentro da dieta"}
            />

            <Card 
              accomplishment="FAILURE"
              totals={mealsOutOfDiet}
              description = {mealsOutOfDiet > 1 ? "refeições fora da dieta" : "refeição fora da dieta"}
            />
          </DataRow>
        </Data>   

      </Body>
    </Container>
  );
}
