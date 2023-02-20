// style
import { SectionForm } from '../../styles/global/index';
import { ContainerMainRegister, SvgContainer } from "./style";

// components
import { FormRegister } from "../../components/Form/";
import { HeaderForms } from "../../components/Header";
import Loading from '../../components/Loading';

// libs
import Lottie from "react-lottie";
import { useMedia } from "react-use-media";
import { motion, AnimatePresence } from 'framer-motion';
import RegisterSVG from "../../utils/img/87718-waiting-register.json";

// contexts
import { MatrixContext } from "../../contexts/matrix.context";

const Register = () => {
    const { isPaused, isStopped, loading } = MatrixContext();

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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
        { loading && <Loading />}
            <HeaderForms >
                <h2>Crie sua conta</h2>
                <span>Rápido e grátis, vamos nessa</span>
            </HeaderForms>
            <ContainerMainRegister>
                <SectionForm>
                    <AnimatePresence>
                        <FormRegister />

                    </AnimatePresence>
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
        </motion.div>
    );
};

export { Register };
