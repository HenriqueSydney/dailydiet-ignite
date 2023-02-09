import AsyncStorage from '@react-native-async-storage/async-storage';
import { mealsGetDates } from '@storage/dates/mealsGetDates';

import { MEALS_COLLECTION } from '@storage/storageConfig';
export async function mealsGetAll(){
    try {

        const dates = await mealsGetDates();

        const storages = dates.map((date)=>{
            return `${MEALS_COLLECTION}-${date}`;
        });

        let meals: MealDataParams[] = [];
        await AsyncStorage.multiGet( storages, ( err, stores )=>{
            stores?.map(( value ) => {
               value[1] !== null && meals.push(JSON.parse(value[1]));
            });
        });

        return meals;

    } catch (error) {
        throw error;
    }
}

