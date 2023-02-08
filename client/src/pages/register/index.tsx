// style
import { SectionForm } from '../../styles/global/index';
import { ContainerMainRegister, SvgContainer } from "./style";

// components
import { FormRegister } from "../../components/Form/";
import { HeaderForms } from "../../components/Header";

// libs
import Lottie from "react-lottie";
import { useMedia } from "react-use-media";
import RegisterSVG from "../../utils/img/87718-waiting-register.json";

// contexts
import { MatrixContext } from "../../contexts/matrix.context";

const Register = () => {
    const { isPaused, isStopped } = MatrixContext();

    const isWide = useMedia({
        minWidth: 700,
    });

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: RegisterSVG,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    };

    return (
       <>
            <HeaderForms >
                <h2>Crie sua conta</h2>
                <span>Rápido e grátis, vamos nessa</span>
            </HeaderForms>
            <ContainerMainRegister>
                <SectionForm>
                    <FormRegister />
                    {
                        isWide &&
                        <SvgContainer>
                            <Lottie
                                options={defaultOptions}
                                isStopped={isStopped}
                                isPaused={isPaused}
                            />
                        </SvgContainer>
                    }
                </SectionForm>
            </ContainerMainRegister>
        </>
    );
};

export { Register };
