
import styled from "styled-components";

const ReferencesContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(222, 135, 157);
    padding: 20px;
    text-align: center;
`;

export default function References() {
    return (
        <ReferencesContentDiv>
            <h2>References</h2>
            <h3>Professional</h3>
            <table border="1" style={{ borderCollapse: "collapse", textAlign: "center", width: "80%" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ms. Gomez</td>
                        <td>Gomez & Palumbo Boss</td>
                        <td>978-433-1298</td>
                    </tr>
                    <tr>
                        <td>Mr. Stevens</td>
                        <td>Law Firm Colleague</td>
                        <td>978-766-3657</td>
                    </tr>
                </tbody>
            </table>
            <h3>Personal</h3>
            <table border="1" style={{ borderCollapse: "collapse", textAlign: "center", width: "80%" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Relation</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Asia Zaheen</td>
                        <td>Mother</td>
                        <td>978-807-1935</td>
                    </tr>
                    <tr>
                        <td>Ayyan Kamran</td>
                        <td>Brother</td>
                        <td>978-394-7758</td>
                    </tr>
                </tbody>
            </table>
        </ReferencesContentDiv>
    );
}
