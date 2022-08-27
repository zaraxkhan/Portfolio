// import data from data.js
const tableData= data;

// refrence the html table using d3
var tbody= d3.select("tbody");

// building functions
function buildTable(data) {
    tbody.html("");                                                             // clear out any existing data in table
    
    data.forEach((dataRow) =>{                                                  // for each loop, add a row and cell for each value in row
        let row= tbody.append("tr");                                            // add row to table body
        Object.values(dataRow).forEach((val) => {                               // loop through each field in dataRow and add values as table cell                                                
            let cell= row.append("td");
            cell.text(val);
            }
        );
    });
}

// creating filters for table
function handleClick() {
    let date= d3.select("#datetime").property("value");                         // grab datetime value from filter
    let filteredData= tableData;                                                      
   
    if (date) {                                                                  // if statement for handling date filter, check to see if date was entered in and filter the data to tht date                                                                  
        filteredData= filteredData.filter(row => row.datetime === date);        // apply filter to table where datetime row matches filter value
    } 
    
    buildTable(filteredData);                                                   // rebuild table w filtered data only
}

// attach an event site should listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// build the filtered table when the page loads
buildTable(tableData);