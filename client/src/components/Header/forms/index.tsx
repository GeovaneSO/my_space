import { ReactNode } from "react";
import { MatrixContext } from "../../../contexts/matrix.context";
import { HeaderContainer } from "../style";
import { ContainerRegister } from "./style";
import { ButtonAdd } from "../../Button";
import { BsLightbulb } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
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
            <ButtonAdd
                className="bt"
                                onClick={() => {
                                    setCurrentTheme(currentTheme === "lightTheme" ? "darkTheme" : "lightTheme")
                                    localStorage.setItem('theme',
                                        // currentTheme === "lightTheme" ? "darkTheme" : "ligthTheme"
                                        currentTheme
                                    )
                                }}
                            >
                                {
                                    currentTheme === "lightTheme" ?
                                        
                                        <><BsLightbulb /><span>Tema claro</span></> :
                                        <> <MdDarkMode /> <span>Tema escuro</span></>
                                }
                            </ButtonAdd>
        </HeaderContainer>
    );
};

export { HeaderForms };
