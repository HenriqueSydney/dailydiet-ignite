import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import { AppError } from '../../utils/AppError';
import _ from 'lodash';

import { MEALS_COLLECTION } from "@storage/storageConfig";

import { mealsGetByDate } from "./mealsGetByDate";
import { mealsAddDate } from "@storage/dates/mealsAddDate";
import { totalsMealsSet } from "@storage/totals/totalsMealsSet";

export async function mealAdd(newMealInfo: MealInfoProps){    
    try{       

        const formatedDate = moment(newMealInfo.mealDate,"DD/MM/YYYY").format("YYYYMMDD");

        const storedMeals = await mealsGetByDate(formatedDate);
        
        const storedDataMeals = storedMeals.data;

        if(storedDataMeals !== undefined){            
            storedDataMeals.map((mealInfo: MealInfoProps) => {            
                if(_.isEqual(mealInfo, newMealInfo)){
                        throw new AppError('Refeição já cadastrada.');
                }                   
            });
                   
            const storageDataMeals = [...storedDataMeals, newMealInfo];
            
            const stoarageMeals = {
                title: formatedDate,
                data: storageDataMeals
            }
           
            await AsyncStorage.setItem(`${MEALS_COLLECTION}-${formatedDate}`, JSON.stringify(stoarageMeals));
        } else{

            const stoarageMeals = {
                title: formatedDate,
                data: [newMealInfo]
            }
           
            await AsyncStorage.setItem(`${MEALS_COLLECTION}-${formatedDate}`, JSON.stringify(stoarageMeals));

        }
    
        await mealsAddDate(formatedDate);

        await totalsMealsSet(newMealInfo);           
        
    } catch(error){
        throw error;        
    }
}