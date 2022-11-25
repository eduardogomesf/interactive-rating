import { useState } from "react";
import { Container, IconContainer, Message, RatingOption, RatingSelect, SubmitButton, Title } from "./styles";

const gradeOptions = [1, 2, 3, 4, 5]

export function InteractiveRating () {
    const [selectedGrade, setSelectedGrade] = useState(0)

    function handleSelectGrade (grade: number) {
        if (grade === selectedGrade) {
            setSelectedGrade(0)
        } else {
            setSelectedGrade(grade)
        }
    }

    return (
        <Container>
            <IconContainer>
                <img src='/star.svg' alt="yellow star" />
            </IconContainer>

            <Title>How did we go?</Title>

            <Message>
                Please let us know how we did with your support request. All feedback is appreciated to help us improve your offering!
            </Message>

            <RatingSelect>
                {gradeOptions.map(grade => (
                    <RatingOption
                        key={grade}
                        isSelected={grade === selectedGrade}
                        onClick={() => handleSelectGrade(grade)}
                    >
                        {grade}
                    </RatingOption>
                ))}
            </RatingSelect>

            <SubmitButton
                disabled={!selectedGrade}
            >
                SUBMIT
            </SubmitButton>
        </Container>
    )
}