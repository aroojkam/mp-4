
import Home from "./components/Home";
import Achievements from './components/Achievements.tsx';
import Education from './components/Education.tsx';
import Employment from './components/Employment.tsx';
import Projects from './components/Projects.tsx';
import References from './components/References.tsx';

import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

import styled from "styled-components";

const PageWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

const MainContent = styled.div`
    flex-grow: 1;
    padding: 20px;
`;

const Root = () => {
    return (
        <PageWrapper>
            <Header />
            <ContentWrapper>
                <Nav />
                <MainContent>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/achievements" element={<Achievements />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/employment" element={<Employment />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/references" element={<References />} />
                    </Routes>
                </MainContent>
            </ContentWrapper>
            <Footer />
        </PageWrapper>
    );
};

const router = createBrowserRouter([{ path: "*", Component: Root}]);

export default function App(){
  return <RouterProvider router={router} />
}