import styled from "styled-components";

export const Container = styled.div`
    max-width: 450px;
    width: 100%;
    padding: 2rem;

    background-color: #212832;

    border-radius: 20px;
`

export const IconContainer = styled.div`
   width: 50px;
   height: 50px;

   display: flex;
   align-items: center;
   justify-content: center;

   border-radius: 50%;

   background-color: #263037;
`

export const Title = styled.strong`
    display: block;

    margin-top: 2rem;

    font-size: 1.5rem;
    font-weight: 700;
    
    color: #f4fafe;
   
`

export const Message = styled.span`
    display: block;

    margin-top: 1.25rem;

    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    
    color: #878d97;
`

export const RatingSelect = styled.div`
    width: 100%;
    margin-top: 2rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

type RatingOptionProps = {
    isSelected: boolean
}

export const RatingOption = styled.button<RatingOptionProps>`
    height: 50px;
    width: 50px;

    background-color: ${props => props.isSelected ? '#7d8798' : '#263037'};
    color: ${props => props.isSelected ? '#e8edf0' : '#878d97'};
    
    border: none;
    border-radius: 50%;

    &:hover {
        transition: background-color 0.5s color 0.5s;
        background-color: #fc7612;
        color: #e8edf0;
    }
`

export const SubmitButton = styled.button`
    width: 100%;
    margin-top: 2rem;
    padding: 1rem;
    
    background-color: #fc7613;
    color: #fff;

    border: none;
    border-radius: 25px;

    letter-spacing: 0.15rem;

    &:disabled {
        transition: opacity 0.7;
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        transition: color 0.5s background-color 0.5s;
        background-color: #fff;
        color: #fc7613;
    }
`