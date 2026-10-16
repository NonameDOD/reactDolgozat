import type { szobatipusok } from "../adatok"
import type {KartyaProps} from './Kartya.js'
import { TANULOSZOBAK } from '../adatok'
import Kartya from "./Kartya"


type KartyakProps = {
    lista : KartyaProps[]
}


function Kartyak() {
    return (
        <>
            <Kartya 
            id={0} 
            szoba_nev={'test'}
            szobatipus={'egyéni tanulás'}
            emelet={0}
            ferohely={0}
            foglalt_helyek={0}/>
        </>
    )
}
//Kartya({TANULOSZOBAK[0]})
export default Kartyak