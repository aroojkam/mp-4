import { styled } from 'styled-components';

const EducationContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(222, 135, 157);
    padding: 20px;
    text-align: left;
`;
export default function Education() {
    return (
        <EducationContentDiv>
           <h2>Education</h2>
            <ul>
            <li><strong> J.D. </strong> Columbia Law School NY, May 2028</li>
            <li><strong> B.A. in Computer Science</strong> Boston University MA, May 2025</li>
            <li><strong> B.S. in Political Science</strong> Boston University MA, May 2025</li>
            <li><strong>High School Diploma</strong> Brooks School MA, May 2021</li>
            <li><strong>Executive Education in International Law & Policy</strong> – Harvard Kennedy School (2027)</li>
            <li><strong>Study Abroad Scholar</strong> – Attended the University of Oxford for a summer research program in AI ethics and policy (2024)</li>
            <li><strong>Certificate in Human Rights & Advocacy</strong> – The Hague Academy of International Law (2026)</li>
            <li><strong>Top 1% of Graduating Class</strong> – Recognized for academic excellence and leadership at Boston University (2025)</li>
            </ul>
        </EducationContentDiv>
    )
}