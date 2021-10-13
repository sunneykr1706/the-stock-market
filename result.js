



window.addEventListener('load', () => 
{

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */
    
    const name = sessionStorage.getItem('NAME');
    const surname = sessionStorage.getItem('SURNAME');
    
    fetch("https://apidojo-yahoo-finaance-v1.p.rapidapi.com/stock/v2/get-summary/?symbol="+name, {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "38bee3c3bbmsh17c2f3986646b92p11bb64jsne645f7e5aa3e",
          "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
      }).then((apiadata)=>
 {
  return apiadata.json();
 }).then((data)=>
 {
  console.log(data);
  var tempValue = data.quoteType.longName;//data2.cashflowStatementHistory.cashflowStatements[0].changeToLiabilities.longFmt;
  var aboutp =data.summaryProfile.longBusinessSummary;
  var newss=data.summaryProfile.website;
  var sectr=data.summaryProfile.sector;
  var nameValue = data.price.regularMarketPreviousClose.fmt//data2.cashflowStatementHistory.cashflowStatements[0].totalCashflowsFromInvestingActivities.longFmt;
  //var descValue = data.earnings.earningsChart.quarterly[0].estimate.raw//data2.cashflowStatementHistory.cashflowStatements[0].netBorrowings.longFmt;
  //console.log(tempValue);

  document.getElementById('result-name').innerHTML = tempValue;
    document.getElementById('result-surname').innerHTML = nameValue;
  document.getElementById('sector').innerHTML = sectr;
  document.getElementById('news').innerHTML = newss;
    document.getElementById('about').innerHTML = aboutp;
  //apidata.send(data);
 }).catch(function(error) {
    console.log("there is some problem");
 });

});