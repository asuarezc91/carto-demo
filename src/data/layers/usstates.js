export default {
  name: 's_monica',

  visible: true,

  cartocss: `
  #layer {
  polygon-fill: #6ba2dc;
  polygon-opacity: 1;
}
#layer::outline {
  line-width: 1;
  line-color: #FFFFFF;
  line-opacity: 0.5;
}
  `,

  query: `
    SELECT * FROM s_monica
  `,

  options: {
    featureClickColumns: []
  }
};
