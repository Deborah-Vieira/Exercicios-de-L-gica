import { missingNumber } from "../src/exercise1"

describe('Check which value is missing between 1 and 100', () => {
    test('Check which value is missing 70', () => {     
        const arr = []
        for (let i = 0; i <= 99; i++) arr[i] = i + 1
        arr.splice(69,1)
        
        const result = missingNumber(arr)
        expect(result).toEqual(70)   

    }) 

    test('Check which value is missing 99', () => {        
        const arr = []
        for (let i = 0; i <= 99; i++) arr[i] = i + 1
        arr.splice(98,1)
        
        const result = missingNumber(arr)
        expect(result).toEqual(99)  
       

    })  
})
