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

            <h3 className="text-lg font-semibold mb-4">
                Crafting Expenses
            </h3>


            <div className="grid grid-cols-2 gap-4">


                <div>

                    <label className="text-sm font-medium">
                        Butcher Fee
                    </label>

                    <input
                        value={butcherFee}
                        onChange={(e) =>
                            setButcherFee(e.target.value)
                        }
                        className="border rounded-lg px-3 py-2 w-full mt-1"
                    />

                </div>


                <div>

                    <label className="text-sm font-medium">
                        Craft Fee
                    </label>

                    <input
                        value={craftFee}
                        onChange={(e) =>
                            setCraftFee(e.target.value)
                        }
                        className="border rounded-lg px-3 py-2 w-full mt-1"
                    />

                </div>


            </div>


            <h4 className="mt-6 font-medium">
                Ingredient Costs
            </h4>


            {

                ingredients.map((ingredient, index) => (

                    <div
                        key={index}
                        className="flex gap-2 mt-2"
                    >

                        <input
                            placeholder="Ingredient name"
                            value={ingredient.name}
                            onChange={(e) =>
                                updateIngredient(
                                    index,
                                    "name",
                                    e.target.value
                                )
                            }
                            className="border rounded-lg px-3 py-2 w-full"
                        />


                        <input
                            placeholder="Cost"
                            type="number"
                            value={ingredient.cost}
                            onChange={(e) =>
                                updateIngredient(
                                    index,
                                    "cost",
                                    e.target.value
                                )
                            }
                            className="border rounded-lg px-3 py-2 w-full"
                        />


                        <button
                            onClick={() =>
                                removeIngredient(index)
                            }
                            className="text-red-500"
                        >
                            Remove
                        </button>

                    </div>

                ))

            }


            <button
                onClick={addIngredient}
                className="mt-2 text-blue-500"
            >
                Add Ingredient
            </button>


            <p className="mt-4 text-gray-600">
                Total Ingredient Cost: {ingredientCostTotal}
            </p>


            <p className="text-gray-600">
                Total Crafting Cost: {totalCraftingCost}
            </p>

        </div>

    );

}

export default CraftingExpenses;