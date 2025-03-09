

import styled from "styled-components";
import Calculator from "./Calculator"; // ✅ Import Calculator Component

const ProjectsContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(222, 135, 157);
    padding: 20px;
    text-align: center;
`;

export default function Projects() {
    return (
        <ProjectsContentDiv>
            <h2>Projects</h2>
            <Calculator />
        </ProjectsContentDiv>
    );
}
