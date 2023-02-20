import ReactLoading from "react-loading";
import { MatrixContext } from "../../contexts/matrix.context";
import { LoadingBox } from "./style";

const Loading = () => {
    const { loading } = MatrixContext();

    return (
        <>
            { 
                loading && 
                    <LoadingBox className="box_loading">
                       <ReactLoading type="spinningBubbles" />
                    </LoadingBox>
            }
        </>
    )
}

export default Loading;