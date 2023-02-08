import {  FormSession } from "../../components/Form/";
import { HeaderForms } from "../../components/Header";
import { ContainerMainSession, SvgContainer, SectionForm } from "./style";
import loginSVG from "../../utils/img/121421-login.json"
import Lottie from "react-lottie"
import { MatrixContext } from "../../contexts/matrix.context";
import { useMedia } from "react-use-media";
const Login = () => {
    const { isPaused, isStopped } = MatrixContext();
    const isWide = useMedia({
        minWidth: 700,
      });
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: loginSVG,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		}
	};
    return (

        <>
            <HeaderForms >
                <h2>Entre</h2>
            </HeaderForms>
        
            <ContainerMainSession>
                <SectionForm>
                    <FormSession />
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
            </ContainerMainSession>
        </>

    );
};

export { Login };
