const colors = {
  primary: "#0099CC",
  background: "#e5e5e5",
  button: "#0099CC",
  h1: "#0E0D0D",
  h2: "#2D2928",
  h3: "#636160",
  h4: "#92908F",
  h5: "#C7C3C2",
  header:{
    title: "#FFFFFF",
    background: "#0099CC",
    icon: "#FFFFFF"
  },
  input: {
    text: "grey",
    placeholder: "#C0C0C0"
  }
}

const createRows = (data, columns) => {
  const array = data.filter(item => item)

  const rows = Math.floor(array.length / columns)
  let lastRowElements = array.length - rows * columns
  while (lastRowElements !== columns) { 
    console.log(lastRowElements)
    array.push({ 
      id: `empty-${lastRowElements}`,
      name: `empty-${lastRowElements}`,
      empty: true
    });
    lastRowElements ++;
  }
  
  return array; 
}

const priceFormat = (price) => {
  return `R$ ${price.toString().replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
}

export {
  colors,
  createRows,
  priceFormat
}