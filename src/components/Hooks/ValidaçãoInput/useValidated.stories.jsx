import React from "react";
import { storiesOf } from "@storybook/react";
import { ErrorComponent } from "./useValidated";


  storiesOf()
    .add("Padrão", () => <ErrorComponent DefaultText="" />)
    .add("Com error", () => <ErrorComponent DefaultText="luis davi pereira" />);
    



