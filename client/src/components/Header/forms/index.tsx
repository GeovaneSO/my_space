import { ReactNode } from "react";
import { MatrixContext } from "../../../contexts/matrix.context";
import { HeaderContainer } from "../style";
import { ContainerRegister } from "./style";
interface PropsHeader {
    children: ReactNode
}

const HeaderForms = (children: PropsHeader) => {
    const { setInformationOwner, setCurrentTheme, currentTheme } = MatrixContext()

    return (
        <HeaderContainer>

            <ContainerRegister>
                {children.children}

            </ContainerRegister>

        </HeaderContainer>
    );
};

export { HeaderForms };
