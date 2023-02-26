import {  FormSession } from "../../components/Form/";
import { HeaderForms } from "../../components/Header";
import { ContainerMainSession, SvgContainer, SectionForm } from "./style";
import loginSVG from "../../utils/img/121421-login.json"
import Lottie from "react-lottie"
import { MatrixContext } from "../../contexts/matrix.context";
import { useMedia } from "react-use-media";
import Loading from "../../components/Loading";
import { motion } from 'framer-motion';
import { Footer } from "../../components/Footer";

const Login = () => {
    const { isPaused, isStopped, loading } = MatrixContext();
    
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

        <motion.div>
        { loading && <Loading />}
            <HeaderForms >
                <h2>My Space</h2>
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
            <Footer />
        </motion.div>

    );
};

export { Login };
