const tools = [
     {
          title: "Main Page",
          path: "/main_page",
          visible:false,
     },
     {
          title: "Currency Converter",
          description: "Convert between different currencies in real-time.",
          path: "/currency_conversion",
          visible:true,
     },
     {
          title: "Length Converter",
          description: "Easily convert between length units (m, cm, ft, in...).",
          path: "/length_conversion",
          visible:true,
     },
     {
          title: "Math Converter",
          description: "Find area, perimeter, and more for various shapes.",
          path: "/math_conversion",
          visible:true,
     },
     {
          title: "Temperature Converter",
          description: "Convert between Celsius, Fahrenheit, and Kelvin.",
          path: "/temperature_conversion",
          visible:true,
     },
];

const lengthUnits = [
     { label: "Meters (m)", value: "m" },
     { label: "Centimeters (cm)", value: "cm" },
     { label: "Millimeters (mm)", value: "mm" },
     { label: "Kilometers (km)", value: "km" },
     { label: "Inches (in)", value: "in" },
     { label: "Feet (ft)", value: "ft" },
     { label: "Yards (yd)", value: "yd" },
     { label: "Miles (mi)", value: "mi" },
   ];
   
   const lengthConversionRates = {
     m: {
          m: 1,
          cm: 100,
          mm: 1000,
          km: 0.001,
          in: 39.3701,
          ft: 3.28084,
          yd: 1.09361,
          mi: 0.000621371,
     },
     
     cm: {
          m: 0.01,
          cm: 1,
          mm: 10,
          km: 0.00001,
          in: 0.393701,
          ft: 0.0328084,
          yd: 0.0109361,
          mi: 0.0000062137,
     },

     mm: {
          m: 0.001,
          cm: 0.1,
          mm: 1,
          km: 0.000001,
          in: 0.0393701,
          ft: 0.00328084,
          yd: 0.00109361,
          mi: 0.000000621371,
     },

     km: {
          m: 1000,
          cm: 100000,
          mm: 1e6,
          km: 1,
          in: 39370.1,
          ft: 3280.84,
          yd: 1093.61,
          mi: 0.621371,
     },

     in: {
          m: 0.0254,
          cm: 2.54,
          mm: 25.4,
          km: 0.0000254,
          in: 1,
          ft: 0.0833333,
          yd: 0.0277778,
          mi: 0.0000157828,
     },

     ft: {
          m: 0.3048,
          cm: 30.48,
          mm: 304.8,
          km: 0.0003048,
          in: 12,
          ft: 1,
          yd: 0.333333,
          mi: 0.000189394,
     },

     yd: {
          m: 0.9144,
          cm: 91.44,
          mm: 914.4,
          km: 0.0009144,
          in: 36,
          ft: 3,
          yd: 1,
          mi: 0.000568182,
     },

     mi: {
          m: 1609.34,
          cm: 160934,
          mm: 1.609e+6,
          km: 1.60934,
          in: 63360,
          ft: 5280,
          yd: 1760,
          mi: 1,
     },
};
   
   
   
export {tools, currencyList, lengthUnits, lengthConversionRates }