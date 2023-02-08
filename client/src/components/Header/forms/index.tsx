import { ReactNode } from "react";
import { HeaderContainer } from "../style";
import { ContainerRegister } from "./style";

interface PropsHeader {
    children: ReactNode
}

const HeaderForms = (children: PropsHeader) => {

    return (
        <HeaderContainer>
            
            <ContainerRegister>
                {children.children}

            </ContainerRegister>
        </HeaderContainer>
    );
};

export { HeaderForms };
