
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
    //const surname = sessionStorage.getItem('SURNAME');
    
    fetch("https://apidojo-yahoo-finaance-v1.p.rapidapi.com/stock/v2/get-statistics/?symbol="+name, {
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
  var tempValue = data.quoteType.longName;
  var tcash=data.financialData.totalCash.fmt;
  var tdebt=data.financialData.totalDebt.fmt;
  var tper=data.financialData.totalCashPerShare.fmt;
  var trat=data.financialData.targetMeanPrice.fmt;
  var tcr=data.financialData.currentRatio.fmt;
  var bkp=data.financialData.profitMargins.fmt;
  var bkpw=data.financialData.revenueGrowth.fmt;

  var re1=data.financialData.totalRevenue.fmt;
  var re2=data.financialData.revenuePerShare.fmt;
var re3=data.financialData.revenueGrowth.fmt;
var re4=data.financialData.grossProfits.fmt;
var re5=data.financialData.ebitda.fmt;
var re6=data.defaultKeyStatistics.netIncomeToCommon.fmt;
var re7=data.defaultKeyStatistics.trailingEps.fmt;
var re8=data.defaultKeyStatistics.earningsQuarterlyGrowth.fmt;

  //var kempValue = data.quoteType.longName;//data2.cashflowStatementHistory.cashflowStatements[0].changeToLiabilities.longFmt;
  //var aboutp =data.summaryProfile.longBusinessSummary;
 // var newss=data.summaryProfile.website;
 // var sectr=data.summaryProfile.sector;
  ///var nameValue = data.price.regularMarketPreviousClose.fmt//data2.cashflowStatementHistory.cashflowStatements[0].totalCashflowsFromInvestingActivities.longFmt;
  ///var descValue = data.earnings.earningsChart.quarterly[0].estimate.raw//data2.cashflowStatementHistory.cashflowStatements[0].netBorrowings.longFmt;
  //console.log(tempValue);

  document.getElementById('hel').innerHTML = tempValue;
  document.getElementById('tcash').innerHTML = tcash;
  document.getElementById('tdebt').innerHTML = tdebt;
  document.getElementById('tper').innerHTML = tper;

  document.getElementById('trat').innerHTML = trat;

  document.getElementById('tcr').innerHTML = tcr;

  document.getElementById('bkp').innerHTML = bkp;
  document.getElementById('bkpw').innerHTML = bkpw;



  document.getElementById('Revenue (ttm)').innerHTML = re1;
  document.getElementById('Revenue Per Share (ttm)').innerHTML = re2;
  document.getElementById('Quarterly Revenue Growth (yoy)').innerHTML = re3;
  document.getElementById('Gross Profit (ttm)').innerHTML = re4;

  document.getElementById('EBITDA').innerHTML = re5;

  document.getElementById('Net Income Avi to Common (ttm)').innerHTML = re6;

  document.getElementById('Diluted EPS (ttm)').innerHTML = re7;
  document.getElementById('Quarterly Earnings Growth (yoy)').innerHTML = re8;

    //document.getElementById('result-surname').innerHTML = nameValue;
  //document.getElementById('sector').innerHTML = sectr;
  //document.getElementById('news').innerHTML = newss;
    //document.getElementById('about').innerHTML = aboutp;
  //apidata.send(data);
 }).catch(function(error) {
    console.log("there is some problem");
 });

});