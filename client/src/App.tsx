import RoutesMain from "./routes/index.routes";
import { ThemeProvider } from "styled-components";
import { themes } from "./styles/global/themes";
import { MatrixContext } from "./contexts/matrix.context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
    const { currentTheme } = MatrixContext()
    return (
        <ThemeProvider 
            theme={
                currentTheme === "lightTheme" ? themes.dark : themes.light
          }
        >
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <RoutesMain />
        </ThemeProvider>
    );
};

export default App;
