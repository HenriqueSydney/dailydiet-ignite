import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEALS_COLLECTION } from '@storage/storageConfig';
import { TotalsStorageDTO } from './TotalsStorageDTO';

export async function totalsMealsGet(){
    
    try {
        const storage = await AsyncStorage.getItem(`${MEALS_COLLECTION}-totals`);

        const storageMealsTotalsInitialValue = {
            mealsInDiet: 0,
            mealsOutOfDiet: 0
        };
        
        const mealsTotals: TotalsStorageDTO = storage ? JSON.parse(storage) : storageMealsTotalsInitialValue;

        return mealsTotals;

    } catch (error) {
        throw error;
    }
}

