import { ReactNode } from "react";
import { HeaderContainer } from "../style";
interface PropsHeader {
    children: ReactNode
}
const HeaderForms = (children: PropsHeader) => {

    return (
        <HeaderContainer>
            <div className="container">
                {children.children}

            </div>
        </HeaderContainer>
    );
};

export { HeaderForms };
