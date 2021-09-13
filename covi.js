$.ajax({
    type: "GET",
    url: 'https://api.covid19api.com/summary',
    success: function(data) {
        $('#new-cases').html('NewCases :' + data.Global.NewConfirmed);
        $('#total-cases').html('TotalCases :' + data.Global.TotalConfirmed);
        $('#total-deaths').html('Total deaths :' + data.Global.TotalDeaths);
        $('#total-recovered').html('Total Recovered :' + data.Global.TotalRecovered);
        data.Countries.forEach(function(Country){
            $('#Countries > tbody ').append(`<tr><th><table>
                    ${Country.Country}</th>
                <td>confirmed${Country.TotalConfirmed}</td>
                <td>Deaths${Country.TotalDeaths}</td>
                <td>Recovered${Country.TotalRecovered}</td>
                </table></tr>`)
        })
    },
})