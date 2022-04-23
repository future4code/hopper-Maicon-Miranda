import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQGXXHZc07Cwhg/profile-displayphoto-shrink_800_800/0/1640128740456?e=1655942400&v=beta&t=NAZ-NdEF-1tNi6AQjMJ5TqOF5TLCkOm7fEr-AN_1_YQ" 
          nome="Maicon Miranda" 
          descricao="Olá, eu sou o Maicon. Sou analisa de sistemas e estudo desenvolvimento web na Labenu. Tenho duas mulheres lindas na minha vida (minha eposa e filhinha). Adoro tocar guitarra e ler um bom livro."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://yt3.ggpht.com/ytc/AKedOLSUTiCkUhtaTqiUPJThc56GiLLcfM6i8FdqxU-R7g=s900-c-k-c0x00ffffff-no-rj" 
          nome="Colégio Notre Dame Brasília" 
          descricao="Analista de Suporte" 
        />
        
        <CardGrande 
          imagem="https://scontent.fbsb4-1.fna.fbcdn.net/v/t1.6435-9/99296127_575260363119101_713037980717023232_n.png?_nc_cat=103&_nc_map=control&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFGCv7s8Yam6j3BYJOmpMk3bEWggKn8FgBsRaCAqfwWAMx5Wrl3fCmahLfo1m6uES6-sBd-5UgigFsoPAz0S8Aq&_nc_ohc=i-AdAjUxyzcAX9fVfTt&tn=b9HNPBYylmDuKsb4&_nc_ht=scontent.fbsb4-1.fna&oh=00_AT_8YWNAX6-N8STIfQAAk-VGK6VlT-SCOCJeBdNvqUQomw&oe=628AB988" 
          nome="Labenu" 
          descricao="Estudande de Desenvolvimento Web" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
