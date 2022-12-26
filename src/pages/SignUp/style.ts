import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100vh;

    @media screen and (max-width: 480px){
        flex-direction: column;
        margin-top: -60px;
        overflow-y: hidden;
        
    }
`

export const LeftContent = styled.section`
    margin-right: 120px;
    width: 260px;
    @media screen and (max-width: 480px){
        width: 300px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        margin-bottom: 20px;
        
    }
`

export const RightContent = styled.section`
    
`


export const SectionTitle = styled.h1`
    --font-family: "Poppins Semi Bold";
    --font: 30px;
    font-size: var(--font);
    font-family: var(--font-family);
    margin-bottom: 20px;
    text-align: center;
    margin: 0 auto 20px auto;
`

export const SectionText = styled.p`
    --font-family: "Poppins Medium";
    --font: 13px;
    font-size: var(--font);
    font-family: var(--font-family);
    text-align: center;
    margin: 0 auto;
`

export const Button = styled.button<{ backgroundColor?: "--accent-blue" | "--primary-green", width?: number | string}>`
    padding: var(--padding);
    border-radius: var(--border-radius);
    color: var(--white);
    background-color: var(${props => props.backgroundColor});
    --font-family: "Poppins Medium";
    font-family: var(--font-family);
    width: ${props => props.width};
    box-shadow: 0 5px 0px rgba(0, 0, 0, 0.2);
    

    &:nth-child(1) {
        margin-bottom: 15px;
    }

    &:nth-child(2) {
        margin-top: 20px;
    }
`

export const FormArea = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--white);
    padding: 20px;
    max-width: 450px;
    border-radius: 10px;
    box-shadow: 0 10px 0px rgba(0, 0, 0, 0.2);

    @media screen and (max-width: 480px){
        width: 320px;
        
    }
    
`

export const Fields = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
`

export const Input = styled.input`
    padding: var(--padding);
    border-radius: var(--border-radius);
    border: 2px solid var(--neutral-grayish-blue);
    --font-family: "Poppins Bold";
    --font: 12px;
    font-family: var(--font-family);
    font-size: var(--font);
    outline: 0;

    &:focus {
        border-color: var(--neutral-dark-blue);
    }
    
    
`



export const TermsContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 20px;
`



export const SmallText = styled.span`
    color: var(--neutral-grayish-blue);
    --font-family: "Poppins Medium";
    --font: 12px;
    font-family: var(--font-family);
    font-size: var(--font);
    
`

export const Link = styled.a`
    --font-family: "Poppins Medium";
    color: var(--primary-red);
    --font: 12px;
    font-family: var(--font-family);
    font-size: var(--font);
   
`
