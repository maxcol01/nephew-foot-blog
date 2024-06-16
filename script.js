let photoId = 0
$("button").on("click", () => {
    if (photoId < 7){
        photoId++;
    }else{
        photoId = 1;
    }
    
    fetch("text/text.json")
        .then(response => response.json())
        .then(data => {
            let toDisplay = data.textList.find(element => element.id === photoId)
            
            $("img").attr("src", `images/foot${toDisplay.id}.jpeg`);
            $("h2").html(`${toDisplay.text}`)
        })
        .catch(error => console.error('Error fetching the JSON file:', error));

});
