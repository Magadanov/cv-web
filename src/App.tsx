import cls from "./App.module.css";
import Header from "./components/header/header";
import Main from "./components/main/main";

function App() {
    return (
        <div className={cls.app}>
            <div className={cls.container}>
                <Header />
                <Main />
            </div>
        </div>
    );
}

export default App;
