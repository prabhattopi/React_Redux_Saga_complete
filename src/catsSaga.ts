import { put, call, takeEvery } from "redux-saga/effects";
import { getCatsSuccess } from "./catState";
export interface Cats {
  weight?: {
    imperial?: string;
    metric?: string;
  };
  id: string;
  name: string;
  cfa_url?: string;
  vetstreet_url?: string;
  vcahospitals_url?: string;
  temperament?: string;
  origin?: string;

  description?: string;
  life_span?: string;

  image: {
    id?: string;
    width?: number;
    height?: number;
    url?: string;
  };
}
const getCats = () => fetch("https://api.thecatapi.com/v1/breeds");
function* workGetCatsFetch():any {
  const cats = yield call(getCats);
  const formattedCats = yield cats.json();
  const formattedCatsShortend = formattedCats.slice(0, 10);
  yield put(getCatsSuccess(formattedCatsShortend));
}
function* catSaga() {
  //name and then action in State
  yield takeEvery("cats/getCatsFetch", workGetCatsFetch);
}

export default catSaga