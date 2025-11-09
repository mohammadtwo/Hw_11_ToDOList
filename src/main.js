import "./style.css"
import { Header } from './components/header/header'
import { createTasks, Main} from "./components/main/showTask"
import { Footer } from "./components/footer/footer"
document.getElementById("app").append(Header(),Main(),Footer())
createTasks()