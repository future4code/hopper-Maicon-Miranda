const BalaoDeMensagem = styled.div`

background-color: ${props => {
        if (props.tipo === "eu") {
            return "#DDF7C8" 
        } else if (props.tipo === "outro") {
            return "#ffffff" 
        }
    }};
`

//  if (nome === "eu") {
//             return (
//                 <BalaoDeMensagem tipo={"eu"}>
//                     {this.props.conteudo}   
//                 </BalaoDeMensagem>
//             )
//         } else {
//             return (
//                 <BalaoDeMensagem tipo={"outro"}>
//                     <div>{this.props.nome}</div>
//                     <div>{this.props.conteudo}</div>
//                 </BalaoDeMensagem>
//             )
//         }

//         export default BalaoDeMensagem;