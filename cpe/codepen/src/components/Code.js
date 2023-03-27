import { useContext } from "react";
import { Box ,styled} from "@mui/material";
import Editor from "./Editor";
import { DataContext } from "../context/DataProvider";
const Container =styled(Box)`
    display:flex;
    background-color:#060606;
    height:50vh;
    `

const Code = ()=> {
    const {html,setHtml,css,setCss,js,setJS}=useContext(DataContext);
    return(
        <Container>
        <Editor
         heading="HTML"
         icon="/"
         color="red"
         value={html}
         onChange={setHtml}
        />
        <Editor
        heading="CSS"
        icon="*"
        color="#0EBEFF"
        value={css}
        onChange={setCss}
        />
        <Editor
        heading="Javascript"
        icon="()"
        color="#FCD000"
        value={js}
        onChange={setJS}
        />
        </Container>
    )
 }
 export default Code;