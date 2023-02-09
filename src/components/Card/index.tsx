import { Container, Totals, Description } from "./styles";


type Props = {
    accomplishment: accomplishmentTypeEnum;
    totals: number;
    description: string;
}

export function Card({ accomplishment, totals, description }: Props){
    return(
        <Container
            accomplishment = {accomplishment}
        >
        <Totals>
            {totals}
        </Totals>

        <Description>
            {description}
        </Description>
            
        </Container>

    );
}