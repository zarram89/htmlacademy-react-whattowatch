import Main from '../../pages/main/main';
import { Film, Promo } from '../../types/films';

type AppProps = {
  films: Film[];
  promo: Promo;
}

const App = ({films, promo}: AppProps): JSX.Element => (
  <Main
    films = {films}
    promo = {promo}
  />
);

export default App;
