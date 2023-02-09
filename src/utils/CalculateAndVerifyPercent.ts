import { totalsMealsGet } from "@storage/totals/totalsMealsGet";
import { mealsGetAll } from '@storage/meals/mealsGetAll';

type returnCalculatePercentProps ={
    accomplishmentPercent: number;
    result: accomplishmentTypeEnum;
    mealsInDiet: number;
    mealsOutOfDiet: number;
    bestSequenceInDiet: number;
}


export async function CalculateAccomplishmentPercent(calculateBestSequence = false): Promise<returnCalculatePercentProps> {

    try {
        const totals = await totalsMealsGet();

        const mealsInDiet = totals.mealsInDiet;
        const mealsOutOfDiet = totals.mealsOutOfDiet;
        
        var bestSequenceInDiet = 0;            

        if(mealsOutOfDiet === 0 && mealsInDiet === 0){
            const mealsAccomplishmentInfo: returnCalculatePercentProps = {
                accomplishmentPercent: 0,
                result: '',
                mealsInDiet: mealsInDiet,
                mealsOutOfDiet: mealsOutOfDiet,
                bestSequenceInDiet: bestSequenceInDiet
                
            }
            return mealsAccomplishmentInfo;
        }

        const fetchedMeals = await mealsGetAll();    

        if(calculateBestSequence){
            const mealsSortedByDate: MealDataParams[] = fetchedMeals.sort((a, b) =>  b.title.localeCompare(a.title));
            
            mealsSortedByDate.map((value) =>  value.data.sort((a, b) =>  b.mealTime.localeCompare(a.mealTime)));
            
            var bestSequence = 0; 
            mealsSortedByDate.map((meals) => meals.data.map((meal) =>  {          
                if(meal.mealInDiet){
                    bestSequence++;
                    if(bestSequence>bestSequenceInDiet){
                        bestSequenceInDiet = bestSequence;
                    }
                }else{
                    bestSequence = 0;
                }
            }));
        }
               
        const accomplishmentPercent = parseFloat(((100*mealsInDiet)/(mealsOutOfDiet+mealsInDiet)).toFixed(2));
    
        const result = (accomplishmentPercent >= 80) ? 'SUCCESS' : 'FAILURE';    
        
        const mealsAccomplishmentInfo: returnCalculatePercentProps  = {
            accomplishmentPercent: accomplishmentPercent,
            result: result,
            mealsInDiet: mealsInDiet,
            mealsOutOfDiet: mealsOutOfDiet,
            bestSequenceInDiet
        }

        return mealsAccomplishmentInfo;
       
    } catch (error) {
        throw error;
    } 

   
}