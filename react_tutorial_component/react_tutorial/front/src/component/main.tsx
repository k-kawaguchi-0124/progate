import ReactDOM from "react-dom/client";
import { Title } from "./title";
import { Body } from "./body";
import { Footer } from "./footer";

const rootElement = document.getElementById("root")!; // 画面上の要素を取得
const reactRoot = ReactDOM.createRoot(rootElement); // rootElementを描画領域として設定

const person = {
    name: "taro",
    age: 18,
};

const reactElement = (
    <>
        <Title text="World" />
        <Body person={person} />
        <Footer>
            <div>
                <a href="https://blog.example.com">Blog</a>
            </div>
            <div>
                <a href="https://sns.example.com">SNS</a>
            </div>
        </Footer>
    </>
)
reactRoot.render(reactElement);
