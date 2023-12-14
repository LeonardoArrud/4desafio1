import '../Estilos/Navbar.css'
import { Link } from 'react-router-dom'
function Navbar(){
    return(
        <nav class = 'navbar'> 
        <Link to="/"> <p>FinançasGuard</p> </Link>
        <Link to ="/sobre"><p>Sobre nos</p></Link>
        <Link to="/contato"><p>Contanto</p></Link>
        <p>Quiz</p>
        </nav> 
    )

}
export default Navbar