export const  firstValue=(value)=>{
    return {
        type:"CHANGE_FIRST",
        payload:value
    }
}
export const secondValue =(value)=>{ 
    return{
        type:"CHANGE_SECOND",
        payload:value
    }
}