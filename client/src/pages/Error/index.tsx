import Lottie from "react-lottie"
import { ContainerSection } from "./style"
import loadingAnimated from "../../utils/img/90767-internal-server-error.json"
import { MatrixContext } from "../../contexts/matrix.context";

const Error = () => {
    const { isPaused, isStopped } = MatrixContext();

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: loadingAnimated,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		}
	};
      
    return (
        <ContainerSection>
			<div className="img">
				<Lottie
					options={defaultOptions}
					isStopped={isStopped}
					isPaused={isPaused}
				/>
			</div>
        </ContainerSection>
    );
};

export { Error };