import styled from "styled-components";

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    background-color: rgb(165, 42, 120);
    color: rgb(255, 196, 218);
    text-align: left;
`;

const Title = styled.h1`
    margin: 0;
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <Title>Arooj Kamran</Title>
            <p>My Online Resume</p>
        </HeaderWrapper>
    );
}

