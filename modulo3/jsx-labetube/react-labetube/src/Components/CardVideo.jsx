import React from 'react';

class CardVideo extends React.Component {

    titulo = "Titulo do vídeo";

    reproduzVideo = () => {
        alert("O vídeo está sendo reproduzido");
    }

    render() {

        return (
            <div>
                <div className="box-pagina-principal na-principal media1">
                    <img
                        src={`https://picsum.photos/400/400?a=${this.props.numeroImagem}`}
                        alt=""
                    />
                    <h4 onClick={this.reproduzVideo}> {this.titulo} </h4>
                </div>
            </div>
        );

    }



}
export default CardVideo;
