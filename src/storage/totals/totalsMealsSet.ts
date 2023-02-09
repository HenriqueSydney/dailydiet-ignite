import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_COLLECTION } from "@storage/storageConfig";
import { totalsMealsGet } from "./totalsMealsGet";

type OperatorProps = 'INCREASE' | 'DECREASE' ; 

export async function totalsMealsSet(newMealInfo: MealInfoProps, operator: OperatorProps ='INCREASE'){    
    try{

        const storedTotalsMeals = await totalsMealsGet();
       
        let isInDiet = 0;
        let isNotInDiet = 0;

        if(operator === 'INCREASE'){
            newMealInfo.mealInDiet ? isInDiet++ : isNotInDiet++;
        } else{
            newMealInfo.mealInDiet ? isInDiet-- : isNotInDiet--;
        }
        
        const storageMealsTotals = JSON.stringify({
            mealsInDiet: storedTotalsMeals.mealsInDiet + isInDiet,
            mealsOutOfDiet: storedTotalsMeals.mealsOutOfDiet + isNotInDiet
        });   
      
        await AsyncStorage.setItem(`${MEALS_COLLECTION}-totals`, storageMealsTotals);
        
    } catch(error){
        throw error;        
    }
}