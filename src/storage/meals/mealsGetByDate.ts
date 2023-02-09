import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEALS_COLLECTION } from '@storage/storageConfig';

export async function mealsGetByDate(date: string){
    try {
        const storage = await AsyncStorage.getItem(`${MEALS_COLLECTION}-${date}`);

        const meals: MealDataParams = storage ? JSON.parse(storage) : [];

        return meals;

    } catch (error) {
        throw error;
    }
}

