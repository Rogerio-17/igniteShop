export function formatMoney(value: number) {
    const formated = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(value) / 100)


      return(formated)
        
}