import { styled } from 'styled-components';

const AchievementsContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(222, 135, 157);
    padding: 20px;
    text-align: left;
`;
export default function Achievements() {
    return (
        <AchievementsContentDiv>
           <h2>Achievements</h2>
            <ul>
                <li><strong>Recipient of the Noble Peace Prize </strong> - Recognized for groundbreaking activism (2030)</li>
                <li><strong>Keynote Speaker at the United Nations</strong> - Delivered a talk (2026)</li>
                <li><strong>Winner of the National Coding Championship</strong> - Secured first place in a nationwide competitive coding contest (2025)</li>
                <li><strong>Published in Forbes 30 under 30</strong> - Recognized for charity work (2023)</li>
                <li><strong>Volunteer of the Year</strong> - Awarded for contributions to community service and social impact projects (2022)</li>
                <li><strong>Author of a Bestselling Book</strong> – Published a critically acclaimed book on leadership and social change (2028)</li>
                <li><strong>Inventor of a Breakthrough AI Model</strong> – Developed an AI tool to assist underserved communities (2029)</li>
                <li><strong>Youngest Board Member of a Global NGO</strong> – Appointed to advise on policy and innovation (2025)</li>
                <li><strong>Recipient of the Presidential Medal of Freedom</strong> – Honored for contributions to human rights and social justice (2031)</li>
            </ul>
        </AchievementsContentDiv>
    )
}
