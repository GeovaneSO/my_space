import {  FormSession } from "../../components/Form/";
import { HeaderForms } from "../../components/Header";
import { ContainerMainSession, SvgContainer, SectionForm } from "./style";
import loginSVG from "../../utils/img/121421-login.json"
import Lottie from "react-lottie"
import { MatrixContext } from "../../contexts/matrix.context";
import { useMedia } from "react-use-media";
import Loading from "../../components/Loading";
import { motion } from 'framer-motion';

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

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
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
        </motion.div>

    );
};

export { Login };
