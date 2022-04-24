
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate)
    renderApts(relevantApts)
})

const renderApts = function (apartments) {
    $("#results").empty()

    if(apartments.length == 0){
        const noSource = $('#not-available').html();
        const noTemplate = Handlebars.compile(noSource)
        let noHTML = noTemplate({text: "No apartments available!"})
        $('#results').append(noHTML)
    }

    const source = $('#template').html();
    const template = Handlebars.compile(source)
    let newHTML= template({apartments})
    $('#results').append(newHTML)
}

renderApts(apartments) //renders apartments when page loads