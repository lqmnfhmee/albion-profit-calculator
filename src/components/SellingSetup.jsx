function SellingSetup({

    itemName,
    setItemName,
    amount,
    setAmount,
    pricePerItem,
    setPricePerItem,
    isPremium,
    setIsPremium,
    setupFee,
    marketplaceTax,
    silverReceived

}) {

    return (

        <div>

            <h3 className="text-lg font-semibold mb-4">
                Selling Setup
            </h3>


            <div className="grid grid-cols-2 gap-4">


                <div>

                    <label>Item Name</label>

                    <input
                        value={itemName}
                        onChange={(e) =>
                            setItemName(e.target.value)
                        }
                        className="border rounded-lg px-3 py-2 w-full mt-1"
                    />

                </div>


                <div>

                    <label>Amount</label>

                    <input
                        value={amount}
                        onChange={(e) =>
                            setAmount(e.target.value)
                        }
                        className="border rounded-lg px-3 py-2 w-full mt-1"
                    />

                </div>


                <div>

                    <label>Price Per Item</label>

                    <input
                        value={pricePerItem}
                        onChange={(e) =>
                            setPricePerItem(e.target.value)
                        }
                        className="border rounded-lg px-3 py-2 w-full mt-1"
                    />

                </div>


                <div className="flex items-center gap-2 mt-6">

                    <input
                        type="checkbox"
                        checked={isPremium}
                        onChange={() =>
                            setIsPremium(!isPremium)
                        }
                    />

                    Premium Account

                </div>

            </div>


            <p className="mt-4">
                Setup Fee (2.5%): {setupFee.toFixed(0)}
            </p>

            <p>
                Marketplace Tax: {marketplaceTax.toFixed(0)}
            </p>

            <p>
                Silver Received: {silverReceived.toFixed(0)}
            </p>

        </div>

    );

}

export default SellingSetup;