import styled from "styled-components";

const FooterWrapper = styled.footer`
    background-color: rgb(165, 42, 120);
    color: rgb(255, 196, 218);
    padding: 1vh 1vw;
    display: flex;
    justify-content: center;
`;

const Footer = () => {
    return (
        <FooterWrapper>
             <p>All Rights Reserved by Arooj Kamran <a href="../credits/credits.html"> Credits</a> &copy;</p>
        </FooterWrapper>
    );
};

export default Footer;
