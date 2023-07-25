//console.log("Welcom to Typescript");

    interface Airplane {
    numberOfEngines: number;
    isJet: boolean;
    maxHeight: number;
    capacity?: number
}

    
const privateJet: Airplane = {
    numberOfEngines: 2,
    isJet: true,
    maxHeight: 11200,
    capacity: 12
}
    
const boeing: Airplane = {
    numberOfEngines: 3,
    isJet: false,
    maxHeight: 5400,
}
    
const an124: Airplane = {
    numberOfEngines: 4,
    isJet: false,
    maxHeight: 5200,
}