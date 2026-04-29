function CraftingExpenses({
    butcherFee,
    setButcherFee,
    craftFee,
    setCraftFee,
    ingredients,
    updateIngredient,
    addIngredient,
    removeIngredient,
    ingredientCostTotal,
    totalCraftingCost
}) {

    return (

        <div>

            <h3>Crafting Expenses</h3>

            Butcher Fee

            <input
                value={butcherFee}
                onChange={(e) =>
                    setButcherFee(e.target.value)
                }
            />

            Craft Fee

            <input
                value={craftFee}
                onChange={(e) =>
                    setCraftFee(e.target.value)
                }
            />

            <h4>Ingredient Costs</h4>

            {

                ingredients.map((ingredient, index) => (

                    <div key={index}>

                        Name

                        <input
                            value={ingredient.name}
                            onChange={(e) =>
                                updateIngredient(
                                    index,
                                    "name",
                                    e.target.value
                                )
                            }
                        />

                        Cost

                        <input
                            type="number"
                            value={ingredient.cost}
                            onChange={(e) =>
                                updateIngredient(
                                    index,
                                    "cost",
                                    e.target.value
                                )
                            }
                        />

                        <button
                            onClick={() =>
                                removeIngredient(index)
                            }
                        >
                            Remove
                        </button>

                    </div>

                ))

            }

            <button onClick={addIngredient}>
                Add Ingredient
            </button>

            <p>Total Ingredient Cost: {ingredientCostTotal}</p>

            <p>Total Crafting Cost: {totalCraftingCost}</p>

            <hr />

        </div>

    );

}

export default CraftingExpenses;