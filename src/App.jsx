import style from './App.module.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <header className={style.menu} id='menu'>
        <nav>
            <h1>&lsaquo;/M&rsaquo;</h1>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#sobremim">Sobre Mim</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contatos">Contato</a></li>
            </ul>
        </nav>
    </header>   
    </>
  )
}

export default App
