export default function Times({ time }) {

  return (
    <>
    <div className="quadrado">
      <img src={time.escudos['60x60']} alt={time.nome} />
      <div className="palavras">
        <p className="titulo"><strong>{time.nome}</strong></p>
        <p className="subTitulo">{time.apelido}</p>
      </div>
    </div>
    <hr />
    </>
  )
}




