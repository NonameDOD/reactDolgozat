
interface KartyaProps {
    id: number,
    szoba_nev: string,
    szobatipus: string,
    emelet: number,
    ferohely: number,
    foglalt_helyek: number
}

function Kartya(kartya : KartyaProps) {
    return (
        <>
            <div className="kartya">
                <h2>{kartya.szoba_nev}</h2>
            </div>
        </>
    )
}

export default Kartya