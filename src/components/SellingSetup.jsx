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

            <h3>Selling Setup</h3>

            Item Name

            <input
                value={itemName}
                onChange={(e) =>
                    setItemName(e.target.value)
                }
            />

            Amount

            <input
                value={amount}
                onChange={(e) =>
                    setAmount(e.target.value)
                }
            />

            Price Per Item

            <input
                value={pricePerItem}
                onChange={(e) =>
                    setPricePerItem(e.target.value)
                }
            />

            Premium Account

            <input
                type="checkbox"
                checked={isPremium}
                onChange={() =>
                    setIsPremium(!isPremium)
                }
            />

            <p>Setup Fee (2.5%): {setupFee.toFixed(0)}</p>

            <p>Marketplace Tax: {marketplaceTax.toFixed(0)}</p>

            <p>Silver Received: {silverReceived.toFixed(0)}</p>

            <hr />

        </div>

    );

}

export default SellingSetup;