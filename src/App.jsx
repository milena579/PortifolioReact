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
    <main>
      <section className={style.home} id='home' >
            <div className={style.picme}>
                <img src="../src/assets/programacao.png" alt=""/>
            </div>

            <div className={style.texthome}>
                <h3>Olá meu nome é</h3>
                <h3 id="nome"> Milena Calegari Dourado</h3>
                <input type="button" value="Download CV"/>
            </div>
      </section>
    </main>
    </>
  )
}

export default App
