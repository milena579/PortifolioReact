import style from './App.module.css';
import programacao from '../src/assets/programacao.png';
import eu from '../src/assets/picme.png';
import escola from '../src/assets/escola.png';
import aluno from '../src/assets/aluno.png';
import diploma from '../src/assets/diplomado.png';
import whats from '../src/assets/whatssapp-big-logo.png';
import git from '../src/assets/github.png';
import linkedin from '../src/assets/linkedin.png';
import email from '../src/assets/o-email.png';

function App() {
  //const [count, setCount] = useState(0)

    const defaultPhoneNumber = "5541999999999"

    const conversar = () => {
        const urlZAPZAP = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text= Olá vim pelo seu currículo!`
        window.open(urlZAPZAP, '_blank')
    }

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
                <img src={programacao} alt=""/>
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
                <img src={eu} alt="" />
            </div>
            <h1>Acadêmico</h1>
            <div className={style.academico}>
                <div className={style.cardacademico}>
                    <img src={escola} alt=""/>
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
                    <img src={aluno} alt=""/>
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
                    <img src={diploma} alt=""/>
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

          <div className={style.empresas}>
            <div style={{width:'400px', height:'auto'}}>
            <details className={style.empresa}>
              <summary><b>Bosch</b></summary>
              <p>Aprendiz soluções digitais</p>
              <p>Desenvolvimento de habilidades na área de T.I e trabalho em equipe</p>
              <p>Data de início: 05/02/2024 até Atualmente</p>
            </details>
            </div>

            <div style={{width:'400px', height:'auto'}}>
              <details className={style.empresa2}>
                <summary><b>Grupo Barigui</b></summary>
                <p>Auxiliar de TI</p>
                <p>Auxilio em tasks</p>
                <p>Data de início: JUL/2022 até JAN/2024</p>
              </details>
            </div>

            <div style={{width:'400px', height:'auto'}}>
                <details className={style.empresa3}>
                  <summary><b>Fundação de Ação Social - FAS</b></summary>
                  <p>Aprendiz administrativo</p>
                  <p>Desenvolvimento de habilidades na área de T.I e trabalho em equipe</p>
                  <p>Data de início: JAN/2021 até FEV/2022</p>
                </details>
            </div>
          </div>
      </section>
    </main>
    <section className={style.projetos} id='projetos'>
        <h1>Projetos</h1>
        <div className={style.galeria}>
            <div className={style.card}>
                <a href="https://github.com/milena579/projetoSenai">
                    <h3>Projeto Senai</h3>
                    <p>
                        Projeto desenvolvido em aula do curso técnico de desenvolvimento de sistemas com intuito de elaborar um sistema simples.
                    </p>
                </a>
            </div>
            <div className={style.card}>
                <a href="https://github.com/milena579/Projeto-Final-IoT">
                    <h3>Projeto final de Iot</h3>
                    <p>
                        Projeto de IOT feito em aula do curso técnico de desenvolvimento de sistemas com iot em elaborção de um alimentador de pets funcional
                    </p>
                </a>
            </div>
            <div className={style.card}>
                <a href="https://github.com/JuanoneD/Sistema_Gestao_Empresa">
                    <h3>Projeto final C</h3>
                    <p>
                        Projeto final da matéria de linguagem C do curso técnico em desenvolvimento de sistemas.
                        O projeto se consiste em uma necessidade do mercado de um sistema em uma confeitaria que possuia problemas de gestão.
                    </p>
                </a>
            </div>
        </div>
    </section>
    <section id="contatos" className={style.contatos}>
            <h2>Contatos</h2>
            <div className={style.contato}>
                <span>
                    <img src={email} alt="icone email"/>
                    <a href="" type="email">
                        <h3>milena.calegari.dourado579@gmail.com</h3>
                    </a>
                </span>
                <span>
                    <img src={linkedin} alt="icone linkedin"/>
                    <a href="https://br.linkedin.com/in/milena-calegari-dourado-027025223"><h3>Milena Calegari Dourado</h3></a>
                </span>
                <span>
                    <img src={git} alt="icone github"/>
                    <a href="https://github.com/milena579"><h3>milena579</h3></a>
                </span>
                <span>
                    <img src={whats} alt="icone github" style={{width:'35px'}}/>
                    <a onClick={conversar}><h3>WhatsApp</h3></a>
                </span>
            </div>
        </section>
    </>
  )
}

export default App
