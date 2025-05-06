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

const currency_list=[
     {"code": "THB", "name": "Thai Baht"},
     {"code": "USD", "name": "US Dollar"},
     {"code": "EUR", "name": "Euro"},
     {"code": "JPY", "name": "Japanese Yen"},
     {"code": "GBP", "name": "British Pound"},
     {"code": "CNY", "name": "Chinese Yuan"},
     {"code": "KRW", "name": "South Korean Won"},
     {"code": "AUD", "name": "Australian Dollar"},
     {"code": "CAD", "name": "Canadian Dollar"},
     {"code": "SGD", "name": "Singapore Dollar"},
     {"code": "INR", "name": "Indian Rupee"},
     {"code": "MYR", "name": "Malaysian Ringgit"},
     {"code": "IDR", "name": "Indonesian Rupiah"},
     {"code": "CHF", "name": "Swiss Franc"},
     {"code": "SEK", "name": "Swedish Krona"}
]

const lengthConversion_list=[
     {"code": "CM", "name": "Centimeter"},
     {"code": "M", "name": "Meter"},
     {"code": "KM", "name": "Kilometer"},
     {"code": "IN", "name": "Inch"},
     {"code": "FT", "name": "Foot"},     
     {"code": "YD", "name": "Yard"},
     {"code": "MI", "name": "Mile"},
]
export {tools, currency_list}