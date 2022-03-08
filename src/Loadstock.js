const LoadData = [
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"price": 0.55,
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"price": 0.55
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"price": 0.55
	}
]

return(
    {
        LoadData.map(Load => <Loadstock Load={LoadData}/>)
    }
)