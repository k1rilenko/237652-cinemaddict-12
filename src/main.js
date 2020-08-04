import {render} from './util/util';
import {card} from './view/card';
import {profile} from './view/profile';
import {menu} from './view/menu';
import {layout} from './view/main-layout';
import {sort} from './view/sort';
import {button} from './view/button';
import {filmsLayout} from './view/extra-layout';

const header = document.querySelector(`.header`);
const main = document.querySelector(`.main`);

render(header, profile());
render(main, menu());
render(main, sort());
render(main, layout());
const mainContent = document.querySelector(`.films`);
render(mainContent, filmsLayout(` film__list_main`, `visually-hidden`, `All movies. Upcoming`));
render(mainContent, filmsLayout(`--extra film__list_top-rated`, ``, `Top rated`));
render(mainContent, filmsLayout(`--extra film__list_most-commented`, ``, `Most commented`));
const mainFilmContainer = document.querySelector(`.film__list_main .films-list__container`);
const topRatedFilmContainer = document.querySelector(`.film__list_top-rated .films-list__container`);
const mostCommentedFilmContainer = document.querySelector(`.film__list_most-commented .films-list__container`);

for (let i = 0; i < 5; i++) {
  render(mainFilmContainer, card());
}
render(mainFilmContainer, button(), `afterend`);
for (let i = 0; i < 2; i++) {
  render(topRatedFilmContainer, card());
}
for (let i = 0; i < 2; i++) {
  render(mostCommentedFilmContainer, card());
}
