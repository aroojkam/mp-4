import { styled } from 'styled-components';

const EmploymentContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(222, 135, 157);
    padding: 20px;
    text-align: left;
`;
export default function Employement() {
    return (
        <EmploymentContentDiv>
           <h2>Employment</h2>
            <ul>
            <li><strong>100 Black Men of London</strong> - Legal Research & Administration Intern</li>
            <li><strong>Gomez & Palumbo Law LLC</strong> - Immigration Law Intern</li>
            <li><strong>NOD Financial Technologies</strong> - Global Marketing Intern</li>
            <li><strong>Zaheen Medical Center</strong> - Patient Data Analyst</li>
            <li><strong>Boston University, Pardee Center</strong> - Research Assistant to Jorge Heine</li>
            <li><strong>United Nations Human Rights Office</strong> – Legal Policy Intern, focused on international human rights law</li>
            <li><strong>ACLU (American Civil Liberties Union)</strong> – Summer Legal Intern, working on civil rights litigation</li>
            <li><strong>Google Legal Department</strong> – Privacy & Compliance Intern, researching AI governance (2027)</li>
            <li><strong>World Bank Group</strong> – Research Associate, analyzing fintech policy and financial inclusion strategies</li>
            <li><strong>Harvard Kennedy School</strong> – Public Policy Fellow, focusing on tech regulations and global governance</li>
            </ul>
        </EmploymentContentDiv>
    )
}