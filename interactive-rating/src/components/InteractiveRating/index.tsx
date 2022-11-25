import { useState } from "react";
import {
    Container,
    Content,
    IconContainer,
    Message,
    RatingOption,
    RatingSelect,
    SubmitButton,
    Title
} from "./styles";

const gradeOptions = [1, 2, 3, 4, 5]

export function InteractiveRating () {
    const [selectedRating, setSelectedRating] = useState(0)
    const [ratingHasBeenSent, setRatingHasBeenSent] = useState(false)

    function handleSelectRating (grade: number) {
        if (grade === selectedRating) {
            setSelectedRating(0)
        } else {
            setSelectedRating(grade)
        }
    }

    function handleSendRating () {
        if (!selectedRating) {
            return
        }

        console.log("Selected rate: " + selectedRating)
        setSelectedRating(0)
        setRatingHasBeenSent(true)
    }

    return (
        <Container>
            {ratingHasBeenSent ?
                (
                    <Content isCentralized={true}>
                        <h1>Thank you!</h1>
                    </Content>
                )
                :
                (
                    <Content>
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
                                    isSelected={grade === selectedRating}
                                    onClick={() => handleSelectRating(grade)}
                                >
                                    {grade}
                                </RatingOption>
                            ))}
                        </RatingSelect>

                        <SubmitButton
                            disabled={!selectedRating}
                            onClick={handleSendRating}
                        >
                            SUBMIT
                        </SubmitButton>
                    </Content>
                )

            }
        </Container>
    )
}