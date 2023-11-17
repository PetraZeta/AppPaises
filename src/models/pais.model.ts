export interface Pais{
    name:{
        common:string;
        nativeName:{
            spa:{
                common:string;
            }
        }
    };
    continents:string[];
    capital: string[];
    cca3: string;
    flags:{
        alt:string;
        png:string;
    };
    population:number;
    region:string;
    subregion:string;
    maps:{
        googleMaps:string;
    };
}