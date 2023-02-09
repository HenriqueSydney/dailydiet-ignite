import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_COLLECTION } from "@storage/storageConfig";

import { mealsGetDates } from "./mealsGetDates";

export async function mealsAddDate(date: string){    
    try{
        const storedDates = await mealsGetDates();

        const storageDates = [...storedDates, date];

        const uniqueDates = storageDates.filter((value, index, self) => {
            return self.indexOf(value) === index;
        });

        await AsyncStorage.setItem(`${MEALS_COLLECTION}-dates`, JSON.stringify(uniqueDates));      
        
    } catch(error){
        throw error;        
    }
}