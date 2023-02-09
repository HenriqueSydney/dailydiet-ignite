import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import _ from 'lodash';

import { MEALS_COLLECTION } from "@storage/storageConfig";

import { mealsGetByDate } from "./mealsGetByDate";
import { totalsMealsSet } from "@storage/totals/totalsMealsSet";

export async function mealRemoveByDate(mealInfo: MealInfoProps){    
    try{       

        const formatedDate = moment(mealInfo.mealDate,"DD/MM/YYYY").format("YYYYMMDD");

        const storedMeals = await mealsGetByDate(formatedDate);
        
        const storedDataMeals = storedMeals.data;
            
        const storage = storedDataMeals.filter(mealStored => !_.isEqual(mealStored, mealInfo));
                
        if(storage.length === 0){
            await AsyncStorage.removeItem(`${MEALS_COLLECTION}-${formatedDate}`);
            await totalsMealsSet(mealInfo, 'DECREASE');   
            return;
        }
        
        const stoarageMeals = {
            title: formatedDate,
            data: storage
        }
        
        await AsyncStorage.setItem(`${MEALS_COLLECTION}-${formatedDate}`, JSON.stringify(stoarageMeals));                   
        await totalsMealsSet(mealInfo, 'DECREASE');           
        
    } catch(error){
        throw error;        
    }
}