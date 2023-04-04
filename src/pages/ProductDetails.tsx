import * as React from "react";
import Layout from "../components/layout";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCocktailById } from "../redux/features/cocktailSlice";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { RootState } from "../redux/store";
import Spinner from "../components/shared/Spinner";

interface IProductDetailsProps {}

const initialState = {
  imgSrc: "",
  name: "",
  info: "",
  glass: "",
  ingredients: [],
  category: "",
  instruction: "",
} as {
  imgSrc: string;
  name: string;
  info: string;
  glass: string;
  category: string;
  instruction: string;
  ingredients: string[];
};

const ProductDetails: React.FunctionComponent<IProductDetailsProps> = (
  props
) => {
  const [modifiedCocktail, setModifiedCocktail] = useState(initialState);
  const { id } = useParams<{ id: string }>();
  const { loading, cocktail } = useAppSelector(
    (state: RootState) => state.cocktail
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCocktailById(id!));
  }, [dispatch, id]);
  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: imgSrc,
        strAlcoholic: info,
        strGlass: glass,
        strInstructions: instruction,
        strCategory: category,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0]!;
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        name,
        imgSrc,
        info,
        glass,
        ingredients,
        instruction,
        category,
      };
      setModifiedCocktail(newCocktail);
    } else {
      setModifiedCocktail(initialState);
    }
  }, [id, cocktail]);

  if (!modifiedCocktail) {
    return <h2>No Cocktail Details</h2>;
  } else {
    const { name, imgSrc, info, glass, ingredients, instruction, category } =
      modifiedCocktail;
    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <Layout>
            <div className="container mt-4">
              <Link to="/drinks" className="btn btn-info">
                GO BACK
              </Link>
              <div className="border border-dark d-flex flex-column flex-lg-row">
                <div className="">
                  <img className="details-img" src={imgSrc} alt="cocktail" />
                </div>
                <div className="ms-3 bg-light-subtle p-3">
                  <h2>Name: {name}</h2>
                  <p>
                    <b>Information:</b> {info}
                  </p>
                  <p>
                    <b>Glass:</b> {glass}
                  </p>
                  <p>
                    <b>Category: </b>
                    {category}
                  </p>
                  <p>
                    <b>Ingredients: </b>
                    {ingredients.join(", ")}
                  </p>
                  <p>
                    <b>Instruction:</b> {instruction}
                  </p>
                </div>
              </div>
            </div>
          </Layout>
        )}
      </>
    );
  }
};

export default ProductDetails;
