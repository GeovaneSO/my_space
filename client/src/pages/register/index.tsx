import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { ContainerMainRegister, SectionForm } from "./style";

const Register = () => {
    return (
        <ContainerMainRegister>
            <Header />
            <SectionForm>
                <Form />
            </SectionForm>
        </ContainerMainRegister>
    );
};

export { Register };
