import RoutesMain from "./routes/index.routes";
import { ThemeProvider } from "styled-components";
import { themes } from "./styles/global/themes";
import { MatrixContext } from "./contexts/matrix.context";

const App = () => {
    const { currentTheme } = MatrixContext()
    return (
        <ThemeProvider 
            theme={
                currentTheme === "lightTheme" ? themes.dark : themes.light
          }
        >
            <RoutesMain />
        </ThemeProvider>
    );
};

export default App;
