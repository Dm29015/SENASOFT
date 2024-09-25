export interface testResultModel{
    id: number,
    fecha: Date,
    id_orden: number, 
      id_procedimiento:number,
      id_prueba: number
      id_prueba_opcion: number
      res_opcion: string,
      res_numerico: number
      res_texto: string,
      res_memo: string,
      num_procesamientos: number
}