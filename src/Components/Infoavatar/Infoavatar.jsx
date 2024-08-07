import './Infoavatar.css';
import imgava from '../../assets/avatar-jessica.jpeg'

function Infoavatar (){
    return(
<div id='Infoava'>
<img src={imgava} />
<label id='name'>Jessica Randall</label>
<label id='Country'>London, United Kingdom</label>
<label id='jop'>"Front-end developer and avid reader."</label>
</div>
    )
}

export default Infoavatar ;