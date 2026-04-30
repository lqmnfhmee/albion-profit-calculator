import { useState } from "react";

import FarmingExpenses from "./FarmingExpenses";
import CraftingExpenses from "./CraftingExpenses";
import SellingSetup from "./SellingSetup";
import ProfitSummary from "./ProfitSummary";

function ProfitCalculator() {

    const [city, setCity] = useState("");

    const [babyAnimalCost, setBabyAnimalCost] = useState("");
    const [foodCost, setFoodCost] = useState("");
    const [seedCost, setSeedCost] = useState("");
    const [travelCost, setTravelCost] = useState("");

    const [butcherFee, setButcherFee] = useState("");
    const [craftFee, setCraftFee] = useState("");

    const [ingredients, setIngredients] = useState([
        { name: "", cost: "" }
    ]);

    const [itemName, setItemName] = useState("");
    const [amount, setAmount] = useState("");
    const [pricePerItem, setPricePerItem] = useState("");

    const [isPremium, setIsPremium] = useState(true);


    const updateIngredient = (index, field, value) => {

        const updated = [...ingredients];

        updated[index][field] = value;

        setIngredients(updated);

    };


    const addIngredient = () => {

        setIngredients([
            ...ingredients,
            { name: "", cost: "" }
        ]);

    };


    const removeIngredient = (index) => {

        const updated = ingredients.filter(
            (_, i) => i !== index
        );

        setIngredients(updated);

    };


    const ingredientCostTotal =
        ingredients.reduce(
            (total, item) =>
                total + Number(item.cost || 0),
            0
        );


    const totalFarmingCost =
        Number(babyAnimalCost || 0) +
        Number(foodCost || 0) +
        Number(seedCost || 0) +
        Number(travelCost || 0);


    const totalCraftingCost =
        Number(butcherFee || 0) +
        Number(craftFee || 0) +
        ingredientCostTotal;


    const grossRevenue =
        Number(amount || 0) *
        Number(pricePerItem || 0);


    const setupFee =
        grossRevenue * 0.025;


    const taxRate =
        isPremium ? 0.04 : 0.08;


    const marketplaceTax =
        grossRevenue * taxRate;


    const silverReceived =
        grossRevenue -
        setupFee -
        marketplaceTax;


    const finalProfit =
        silverReceived -
        totalFarmingCost -
        totalCraftingCost;


    return (

        <div className="min-h-screen bg-gray-100 p-8">

            <h1 className="text-3xl font-bold mb-6">
                Albion Profit Calculator
            </h1>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                <div className="space-y-6">

                    <div className="bg-white p-6 rounded-xl shadow">

                        <FarmingExpenses
                            city={city}
                            setCity={setCity}
                            babyAnimalCost={babyAnimalCost}
                            setBabyAnimalCost={setBabyAnimalCost}
                            foodCost={foodCost}
                            setFoodCost={setFoodCost}
                            seedCost={seedCost}
                            setSeedCost={setSeedCost}
                            travelCost={travelCost}
                            setTravelCost={setTravelCost}
                            totalFarmingCost={totalFarmingCost}
                        />

                    </div>


                    <div className="bg-white p-6 rounded-xl shadow">

                        <CraftingExpenses
                            butcherFee={butcherFee}
                            setButcherFee={setButcherFee}
                            craftFee={craftFee}
                            setCraftFee={setCraftFee}
                            ingredients={ingredients}
                            updateIngredient={updateIngredient}
                            addIngredient={addIngredient}
                            removeIngredient={removeIngredient}
                            ingredientCostTotal={ingredientCostTotal}
                            totalCraftingCost={totalCraftingCost}
                        />

                    </div>

                </div>


                <div className="space-y-6">

                    <div className="bg-white p-6 rounded-xl shadow">

                        <SellingSetup
                            itemName={itemName}
                            setItemName={setItemName}
                            amount={amount}
                            setAmount={setAmount}
                            pricePerItem={pricePerItem}
                            setPricePerItem={setPricePerItem}
                            isPremium={isPremium}
                            setIsPremium={setIsPremium}
                            setupFee={setupFee}
                            marketplaceTax={marketplaceTax}
                            silverReceived={silverReceived}
                        />

                    </div>


                    <div className="bg-white p-6 rounded-xl shadow text-center">

                        <ProfitSummary finalProfit={finalProfit} />

                    </div>

                </div>


            </div>

        </div>

    );

}

export default ProfitCalculator;