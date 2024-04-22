import React from 'react'; 
  
function CountryInfo({ countryData }) { 
    return ( 
        <div> 
            <img src={countryData.flags.svg} alt="Flag" className="flagImage" /> 
            <h2>{countryData.name.common}</h2> 
            <div className="row"> 
                <div className="dataRow"> 
                    <h4>Capital:</h4> 
                    <span>{countryData.capital[0]}</span> 
                </div> 
            </div> 
            <div className="row"> 
                <div className="dataRow"> 
                    <h4>Continent:</h4> 
                    <span>{countryData.continents[0]}</span> 
                </div> 
            </div> 
            <div className="row"> 
                <div className="dataRow"> 
                    <h4>Population:</h4> 
                    <span>{countryData.population}</span> 
                </div> 
            </div> 
            <div className="row"> 
                <div className="dataRow"> 
                    <h4>Currency:</h4> 
                    <span> 
                        {countryData.currencies[ 
                            Object.keys(countryData.currencies)[0] 
                        ].name}{' '} 
                        - {Object.keys(countryData.currencies)[0]} 
                    </span> 
                </div> 
            </div> 
            <div className="row"> 
                <div className="dataRow"> 
                    <h4>Common Languages:</h4> 
                    <span> 
                        {Object.values(countryData.languages) 
                            .toString() 
                            .split(',') 
                            .join(', ')} 
                    </span> 
                </div> 
            </div> 
            <div className="row"> 
                <div className="dataRow"> 
                    <h4>Borders:</h4> 
                    <span> 
                        {(countryData.borders) ? Object.values(countryData.borders) 
                            .toString() 
                            .split(',') 
                            .join(', ') : "NAN"} 
                    </span> 
                </div> 
            </div> 
            <div className="row"> 
                <div className="dataRow"> 
                    <h4>Area:</h4> 
                    <span>{countryData.area}</span> 
                </div> 
            </div> 
            <div className="row"> 
                <div className="dataRow"> 
                    <h4>Calling Are:</h4> 
                    <span>{countryData.idd.root}{countryData.idd.suffixes[0]}</span> 
                </div> 
            </div> 
            <div className="row"> 
                <div className="dataRow"> 
                    <h4>Capital Latitudes and Longitudes are:</h4> 
                    <span>{countryData.capitalInfo.latlng[0]} {countryData.capitalInfo.latlng[1]}</span> 
                </div> 
            </div> 
            <div className="row"> 
                <div className="dataRow"> 
                    <h4>TimeZones:</h4> 
                    <span> 
                        {Object.values(countryData.timezones) 
                            .toString() 
                            .split(',') 
                            .join(', ')} 
                    </span> 
                </div> 
            </div> 
        </div> 
    ); 
} 
  
export default CountryInfo;