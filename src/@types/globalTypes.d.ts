export declare global { 
    type accomplishmentTypeEnum = 'SUCCESS' | 'FAILURE' | ''; 
      
    type MealsProps ={
        mealsInDiet: number;
        mealsOutOfDiet: number;
    };

    type MealInfoProps = {
        mealName: string;
        mealDescription: string;
        mealDate: string;
        mealTime: string;
        mealInDiet: boolean
    };
    

    type MealDataParams = {
        title: string;
        data:  MealInfoProps[]

      };
}

