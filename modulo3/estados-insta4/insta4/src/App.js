import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Maicon'}
          fotoUsuario={'https://media-exp1.licdn.com/dms/image/C4D03AQGXXHZc07Cwhg/profile-displayphoto-shrink_800_800/0/1640128740456?e=1656547200&v=beta&t=NwYbNgoGrgnj8iyG_Y8hjljtR08liT-qJIMMJrT51Qk'}
          fotoPost={'https://www.descomplicandoamusica.com/wp-content/uploads/2015/05/como-aprender-a-tocar-guitarra-1024x752.jpg'}
        />
        
        <Post
          nomeUsuario={'Gisela'}
          fotoUsuario={'https://media-exp1.licdn.com/dms/image/C4D03AQGWu26lySGYmw/profile-displayphoto-shrink_200_200/0/1521756266640?e=1656547200&v=beta&t=4aRFOwHHUbwatTeUPID-H11NZk9Sw-Bgn8e7KqtypnQ'}
          fotoPost={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSysFQmdYBzzpcDxxFyg8DhYibmvx69xYBu_w&usqp=CAU'}
        />

        
      </MainContainer>
    );
  }
}

export default App;
