import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEALS_COLLECTION } from '@storage/storageConfig';

export async function mealsGetDates(){
    try {
        const storage = await AsyncStorage.getItem(`${MEALS_COLLECTION}-dates`);

        const orderedDates : [] = storage ? JSON.parse(storage).sort() : [];

        const dates: [] = orderedDates;

        return dates;

    } catch (error) {
        throw error;
    }
}

