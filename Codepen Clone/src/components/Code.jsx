import { useContext } from "react";

//components
import Editor from "./Editor";

import { Box, styled } from "@mui/material";

import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
  background-color: #060606;
  height: 50vh;
  display: flex;
`;

const Code = () => {
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

  return (
    <Container>
      <Editor
        language="xml"
        heading="HTML"
        value={html}
        onChange={setHtml}
        icon="<>"
        color="#ef476f"
      />
      <Editor
        language="css"
        heading="CSS"
        value={css}
        onChange={setCss}
        icon="#"
        color="#168aad"
      />
      <Editor
        language="javascript"
        heading="JS"
        value={js}
        onChange={setJs}
        icon="{}"
        color="#d9ed92"
      />
    </Container>
  );
};

export default Code;
