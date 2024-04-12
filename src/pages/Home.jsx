import PersonalInfo from '../Componentes/PersonalInfo';
import Skills from '../Componentes/Skills';
import ContactForm from '../Componentes/ContactForm'

function Home() {

  const usuariosDados = [
    {nome:'Gustavo', email:'gugu@gmail.com', telefone:"88 88888888"},
    {nome:'Caio', email:'bebe@gmail.com', telefone:"88 99999999"},
  ]

  return (
    <div className="mainInfo">
      <section id='info'>
          <PersonalInfo usuarios={usuariosDados}/>
          <Skills />
        </section>
        <ContactForm />
    </div>
  );
}

export default Home;