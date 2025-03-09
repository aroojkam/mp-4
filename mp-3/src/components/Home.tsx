import styled from "styled-components";
import profileImage from "../assets/profile.jpg"; 

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(222, 135, 157);
    padding: 20px;
    text-align: left;
`;

const ProfileImage = styled.img`
    width: 250px; 
    height: 250px;
    object-fit: cover; 
    margin-right: 30px;
`;

const TextContent = styled.div`
    flex: 1;
    font-size: 1.1rem;
    color: black;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
`;



export default function Home() {
    return (
        <HomeContainer>
            <ProfileImage src={profileImage} alt="Arooj Kamran" />
            <TextContent>
            <Title>Home</Title>
            <p>
                Hello! My name is Arooj. Welcome to my personal page for all things about me. Here you can find my work, passions, interests, useful links, and much more! I am a computer science and political science student at Boston University.
                I would like to further my academic and professional development by going to graduate school. Beyond academics and work, I am an avid artist and photographer interested in the intersection of art and advocacy. I love traveling and anything adventurous! I am also a certified open-water scuba diver, with my most recent dive being at the Great Barrier Reef off the coast of Cairns, AU. 
                I am a huge foodie! Currently, I am learning how to cook different cultural dishes. So far, I can (try my best to) cook Pakistani, Somali, Lebanese, and Turkish dishes. Always open to trying new things and exploring :)
            </p>
            <p>
                Welcome to my website, here you will find my <strong><em><u>Educational</u></em></strong> and my
                <strong><em><u>Employment</u></em></strong> history; as well as other information that might be
                of interest to you.
            </p>
            </TextContent>
        </HomeContainer>
    )
}
