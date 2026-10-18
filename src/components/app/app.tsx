import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import PrivateRoute from '../private-route/private-route';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import Review from '../../pages/review/review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';
import { AppRoute, RoutePath, AuthorizationStatus } from '../../const';
import type { FilmsType, PromoFilmType } from '../../types/films';

type AppProps = {
  films: FilmsType;
  promo: PromoFilmType;
}

const App = ({ films, promo }: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<Main films={films} promo={promo} />}
      />

      <Route
        path={AppRoute.Login}
        element={<Login />}
      />

      <Route
        path={AppRoute.MyList}
        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyList />
          </PrivateRoute>
        }
      />

      <Route
        path={AppRoute.Film}
        element={<Film />}
      />

      <Route
        path={AppRoute.AddReview}
        element={<Review />}
      />

      <Route
        path={AppRoute.Player}
        element={<Player />}
      />

      <Route
        path={AppRoute.NotFound}
        element={<NotFound />}
      />
      <Route
        path={RoutePath.NotFound}
        element={<NotFound />}
      />
    </Routes>
  </BrowserRouter>
);

export default App;
