import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.nav`
    background-color: rgb(179, 48, 111);
    padding: 10px;
    display: flex;
    justify-content: center;
    width: 30%;

    @media (max-width: 900px) {
        width: 100%;
        justify-content: space-around;
    }
`;

const Ul = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    text-align: center;

    @media (max-width: 900px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;


const Li = styled.li`
    font-size: calc(3px + 3vw);
    width: 90%;
    background-color: rgb(222, 135, 157);
    padding: 2vh 0;
    margin: 5vh auto;

    @media (max-width: 900px) {
        font-size: calc(2px + 1.5vw);
        padding: 1vh 1vw;
        margin: 1vh auto;
        width: auto;
    }
`;


const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-weight: bold;
    padding: 10px;

`;

const Nav = () => {
    return (
        <NavWrapper>
            <Ul>
                <Li><StyledLink to="/">Home</StyledLink></Li>
                <Li><StyledLink to="/education">Education</StyledLink></Li>
                <Li><StyledLink to="/employment">Employment</StyledLink></Li>
                <Li><StyledLink to="/achievements">Achievements</StyledLink></Li>
                <Li><StyledLink to="/references">References</StyledLink></Li>
                <Li><StyledLink to="/projects">Projects</StyledLink></Li>
            </Ul>
        </NavWrapper>
    );
};

export default Nav;
