import type { szobatipusok } from "../adatok"
import { TANULOSZOBAK } from '../adatok'

interface KartyakProps {
    kartyaList
}

function Kartyak() {
    return (
        <>
            Kartya(TANULOSZOBAK[0]);
        </>
    )
}

export default Kartyak