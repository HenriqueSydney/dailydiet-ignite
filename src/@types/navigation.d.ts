export declare global {
    namespace ReactNavigation{
        interface RootParamList {
            home: undefined;
            dashboard: undefined;
            newMeal: {
                mealInfo: MealInfoProps;
            }
            feedback: {
                accomplishment: accomplishmentTypeEnum;
            }
            meal: {
                mealInfo: MealInfoProps;
            }
            
        }
    }
}