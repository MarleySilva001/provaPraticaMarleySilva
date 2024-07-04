import { useEffect, useState } from "react"
import Times from "./Times";

export default function Clubes() {
  const [times, setTimes] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTimes = async () => {
      try {
        const response = await fetch('https://api.cartola.globo.com/clubes');
        const data = await response.json();
        const clubesArray = Object.values(data);
        setTimes(clubesArray);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar clubes:', error);
        setLoading(false);
      }
    };

    fetchTimes();
  }, []);

  return (
    <div className="tudo">
      {Loading ? (
        <p>Carregando...</p>
      ) : (
        <ul className="lista">
          {times.map((time) => (
            <li key={time.id}>
              <Times time={time} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );

}