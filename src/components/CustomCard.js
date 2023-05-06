import cards from '../css/card.module.css'
import imageEmu from '../css/imageEmulator.module.css'
import thickboy from '../thickboy.jpg'

function CustomCard(){
    return(<div className={cards.card}>
        <img className={imageEmu.thickboy} src={thickboy} alt='Emulator'/>
    </div>
    )
}

export default CustomCard;