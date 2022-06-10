import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CarouselComponent } from "../components/CarouselComponent";
import { FooterComponent } from "../components/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { SwiperComponent } from "../components/SwiperComponent";
import { actionGetFilmAll } from "../stores/actions/actionFilm";
import { setIdCategory } from "../stores/reducers/reducerFilm";

export enum TypeCategory {
  filmNew = "filmNew",

  filmAction = "filmAction",
  filmRomance = "filmRomance",
  filmAnime = "filmAnime",
  filmHoror = "filmHoror",
  filmCategoryOrSearch = "filmCategoryOrSearch",
  filmScifi = "filmScifi",
}

export const Home: FC = () => {
  const { filmNew, filmAction, filmRomance, filmAnime, filmHoror, filmScifi } =
    useSelector((state: any) => state.filmReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetFilmAll({ id: 0, name: TypeCategory.filmNew }));
    dispatch(actionGetFilmAll({ id: 6, name: TypeCategory.filmHoror }));
    dispatch(actionGetFilmAll({ id: 5, name: TypeCategory.filmAnime }));
    dispatch(actionGetFilmAll({ id: 3, name: TypeCategory.filmAction }));
    dispatch(actionGetFilmAll({ id: 4, name: TypeCategory.filmRomance }));
    dispatch(actionGetFilmAll({ id: 7, name: TypeCategory.filmScifi }));
  }, []);

  return (
    <>
      <HeaderComponent />
      <CarouselComponent />
      <SwiperComponent film={filmNew} title="New" />
      <SwiperComponent film={filmAction} title="Action" />
      <SwiperComponent film={filmScifi} title="Sci-fi" />
      <SwiperComponent film={filmAnime} title="Amine" />
      <SwiperComponent film={filmHoror} title="Horror" />
      <FooterComponent />
    </>
  );
};
