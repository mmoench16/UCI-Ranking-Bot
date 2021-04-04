// const fetch = require("node-fetch");
// const fs = require("fs");
// import {FormData} from "formdata-node"
// fetch("https://dataride.uci.org/iframe/RankingDetails/1?disciplineId=10&groupId=1&momentId=56398&disciplineSeasonId=150&rankingTypeId=1&categoryId=22&raceTypeId=0")
//   .then(res => res.text())
//   .then(data => {
//     // data = JSON.stringify(data);
//     fs.writeFile("html.text", data, err => {
//       if (err) {
//         console.log(err);
//       }
//     })
//   })

// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// function GetData()  {
//   const xhr = new XMLHttpRequest();
//   const formData = new FormData("rankingId=1&disciplineId=10&rankingTypeId=1&take=40&skip=0&page=1&pageSize=40&filter%5Bfilters%5D%5B0%5D%5Bfield%5D=RaceTypeId&filter%5Bfilters%5D%5B0%5D%5Bvalue%5D=0&filter%5Bfilters%5D%5B1%5D%5Bfield%5D=CategoryId&filter%5Bfilters%5D%5B1%5D%5Bvalue%5D=22&filter%5Bfilters%5D%5B2%5D%5Bfield%5D=SeasonId&filter%5Bfilters%5D%5B2%5D%5Bvalue%5D=150&filter%5Bfilters%5D%5B3%5D%5Bfield%5D=MomentId&filter%5Bfilters%5D%5B3%5D%5Bvalue%5D=0&filter%5Bfilters%5D%5B4%5D%5Bfield%5D=CountryId&filter%5Bfilters%5D%5B4%5D%5Bvalue%5D=&filter%5Bfilters%5D%5B5%5D%5Bfield%5D=IndividualName&filter%5Bfilters%5D%5B5%5D%5Bvalue%5D=&filter%5Bfilters%5D%5B6%5D%5Bfield%5D=TeamName&filter%5Bfilters%5D%5B6%5D%5Bvalue%5D=");

//   xhr.open( "POST", "https://dataride.uci.org/iframe/ObjectRankings/", false )


//   xhr.onreadystatechange = function() {
//     if(xhr.readyState == 4 && xhr.status == 200) {
//       fs.writeFile("html2.text", xhr.responseText, err => {
//         if (err) {
//           console.log(err);
//         }
//       });
//     }
//   }

//   xhr.send(formData);
// }

// GetData();