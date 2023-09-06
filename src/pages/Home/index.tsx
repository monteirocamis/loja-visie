import { Container } from "@mui/material";
import { BaseButton } from "../../components/Buttons/BaseButton";
import { useNavigate, useParams } from "react-router-dom";

import './App.css'
export function Home(){
    const navigate = useNavigate();

    return <Container> <h1> </h1>
    <BaseButton/>
    </Container>

}