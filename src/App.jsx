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
                <li><a href="#experiencia">Experiencia</a></li>
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
                <h3 className={style.nome}> Milena Calegari Dourado</h3>
                <input type="button" value="Download CV"/>
            </div>
      </section>
      <section className={style.sobremim} id='sobremim'>
                    <div className={style.pessoal}>
                <div className={style.textsobre}>
                    <h1>Quem sou eu?</h1>
                    <p> 
                        Olá meu nome é Milena ou mais conhecida por Mi.
                        Atualmente tenho 18 anos e sou apaixonada por tecnologia. Minha trajetória nesse universo se deu início no ano de 2021 meio a pandemia, quando tive a oportunidade
                        de fazer cursos voltado para a área de programação e logo de início descobri que queria que aquela fosse minha profissão, desenvolvedora.  Ao longo desses 3 anos procurei sempre
                        aprender cada vez mais e melhorar a cada dia, para que futuramente possa me tornar uma profissional influente no mundo da tecnologia.
                    </p>
                </div>
                <img src="../src/assets/picme.png" alt=""/>
            </div>
            <h1>Acadêmico</h1>
            <div className={style.academico}>
                <div className={style.cardacademico}>
                    <img src="../src/assets/escola.png" alt=""/>
                    <ul>
                        <li>
                            Ensino Médio Técnico em Eletrônica - CEEP Curitiba
                        </li>
                        <li>
                            Período 2020 - 2023
                        </li>
                        <li>
                            Técnico integrado ao ensino médio
                        </li>
                    </ul>
                    
                </div>
                <div className={style.cardacademico}>
                    <img src="../src/assets/aluno.png" alt=""/>
                    <ul>
                        <li>
                            Técnico em Desenvolvimento de Sistemas - Senai Curitiba
                        </li>
                        <li>
                            Período 2024 - 2025
                        </li>
                        <li>
                            Ensino técnico em parceria com aprendizagem 
                        </li>
                    </ul>
                </div>
                <div className={style.cardacademico}>
                    <img src="../src/assets/diplomado.png" alt=""/>
                    <ul>
                        <li>
                            Superior em Análise e Desenvolvimento de Sistemas -  UFPR 
                        </li>
                        <li>
                            Período 2024 - 2026
                        </li>
                        <li>
                            Ensino superior tecnólogo em Desenvolvimento de Sistemas
                        </li>
                    </ul>     
                </div>
            </div>
      </section>

      <section className={style.experiencia} id='experiencia'>
          <h1>Experiencias</h1>

          <details className={style.empresa}>
            <summary>Bosch</summary>
            <p>Aprendiz soluções digitais</p>
            <p>Desenvolvimento de habilidades na área de T.I e trabalho em equipe</p>
            <p>Data de início: 05/02/2024 até Atualmente</p>
          </details>

          <details className={style.empresa}>
            <summary>Grupo Barigui</summary>
            <p>Auxiliar de TI</p>
            <p>Auxilio em tasks</p>
            <p>Data de início: JUL/2022 até JAN/2024</p>
          </details>

          <details className={style.empresa}>
            <summary>Fundação de Ação Social - FAS</summary>
            <p>Aprendiz administrativo</p>
            <p>Desenvolvimento de habilidades na área de T.I e trabalho em equipe</p>
            <p>Data de início: JAN/2021 até FEV/2022</p>
          </details>
      </section>
    </main>
    </>
  )
}

export default App
