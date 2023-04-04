import * as React from "react";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { useAppDispatch } from "../redux/hooks";
import { fetchCocktails } from "../redux/features/cocktailSlice";
import { RootState } from "../redux/store";
import Spinner from "../components/shared/Spinner";
import { Link } from "react-router-dom";

interface IDrinkListProps {}

interface ICocktail {
  id: string;
  imgSrc: string;
  name: string;
  info: string;
  glass: string;
}

const DrinkList: React.FunctionComponent<IDrinkListProps> = (props) => {
  //state to manage cocktails
  const initialCocktailState: ICocktail[] = [];
  const [modifiedCocktails, setModifiedCocktails] =
    useState(initialCocktailState);
  const dispatch = useAppDispatch();
  const { loading, cocktails, error } = useAppSelector(
    (state: RootState) => state.cocktail
  );
  useEffect(() => {
    dispatch(fetchCocktails());
  }, []);

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map(
        ({
          idDrink: id,
          strAlcoholic: info,
          strDrinkThumb: imgSrc,
          strGlass: glass,
          strDrink: name,
        }) => ({
          id,
          name,
          info,
          glass,
          imgSrc,
        })
      );
      setModifiedCocktails(newCocktails);
    } else {
      setModifiedCocktails([]);
    }
  }, [cocktails]);

  if (error) {
    return <p className="danger">{error.message}</p>;
  }
  return loading ? (
    <Spinner />
  ) : (
    <Layout>
      <div className="d-flex flex-wrap justify-content-center bg-transparent p-2 justify-content-md-around">
        {modifiedCocktails.map(
          ({ id, name, imgSrc, info, glass }: ICocktail) => (
            <div
              key={id}
              className="d-flex flex-column align-items-start bg-white m-1 border border-dark"
            >
              <div>
                <img className="cocktail-img" src={imgSrc} alt={name} />
              </div>
              <p className="ms-3 mt-2">
                <b>{name} </b>
              </p>
              <p className="ms-3">
                <b>{info} </b>
              </p>
              <p className="ms-3 m-1">
                <b>{glass} </b>
              </p>
              <Link className="p-2" to={`/products/${id.toString()}`}>
                <button className="ms-1 btn btn-primary">Details</button>
              </Link>
            </div>
          )
        )}
      </div>
    </Layout>
  );
};

export default DrinkList;
