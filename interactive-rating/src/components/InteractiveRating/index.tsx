import { useState } from "react";
import { Container, IconContainer, Message, RatingOption, RatingSelect, SubmitButton, Title } from "./styles";

const gradeOptions = [1, 2, 3, 4, 5]

export function InteractiveRating () {
    const [selectedGrade, setSelectedGrade] = useState(0)
    const [gradeHasBeenSent, setGradeHasBeenSent] = useState(false)

    function handleSelectGrade (grade: number) {
        if (grade === selectedGrade) {
            setSelectedGrade(0)
        } else {
            setSelectedGrade(grade)
        }
    }

    function handleSendRating () {
        if (!selectedGrade) {
            return
        }

        console.log("Selected rate: " + selectedGrade)
        setSelectedGrade(0)
        setGradeHasBeenSent(true)
    }

    return (
        <Container>
            {gradeHasBeenSent ?
                (
                    <>
                        <h1>Thank you!</h1>
                    </>
                )
                :
                (
                    <>
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
                            onClick={handleSendRating}
                        >
                            SUBMIT
                        </SubmitButton>
                    </>
                )

            }
        </Container>
    )
}