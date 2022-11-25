import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCatsFailure, getCatsFetch } from "./catState";
import { RootState } from "./main";

function App() {
  const dispatch = useDispatch();
  const cats = useSelector((state: RootState) => state.cats.cats);
  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);
  console.log(cats);

  return (
    <div className="App">
      <h1>CATS SPECIES GALLERY</h1>
      <p>
        Images of different species of cats.Lots of cats for veiwing pleasures.
      </p>
      <hr />
      <div className="Gallery">
        {cats?.map((e: any) => (
          <div key={e.id} className="row">
            <div className="column column-left">
              <img src={e.image.url} alt={e.name} width="200" height="200" />
            </div>
            <div className="column column-right">
              <h2>{e.name}</h2>
              <h5>Temprament: {e.temperament}</h5>
              <p>{e.description}</p>
               <button>Veiw More</button>
            </div>
           
          </div>
        ))}
            
      </div>

    </div>
  );
}

export default App;
