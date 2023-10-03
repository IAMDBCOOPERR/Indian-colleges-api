# College API

Welcome to the College API! This API showcases a collection of undergraduate engineering colleges in India that are approved by the All India Council for Technical Education (AICTE) along with their respective states

### Usage

1. Use the /search?q={{query}} endpoint to get a list of all colleges.
2. Example: https://indian-colleges-api-5j5n.vercel.app/search?q=rajeev
```js
 result =   [
  {
    "id": 1899,
    "college": "RAJEEV LOCHAN AYURVED MEDICAL COLLEGE & HOSPITAL, GUNDERDEHI ROAD   ",
    "state": "Chhatisgarh",
    "district": "Durg"
  },
  {
    "id": 3014,
    "college": "Rajeev Gandhi College, Kala Bagh Belet Road, Ganjbasoda, V ",
    "state": "Madhya Pradesh",
    "district": "Vidisha"
  },
  {
    "id": 3015,
    "college": "Rajeev Gandhi College, Obedullahganj, Raisen   ",
    "state": "Madhya Pradesh",
    "district": "Raisen"
  },
  {
    "id": 3016,
    "college": "Rajeev Gandhi College, Raisen   ",
    "state": "Madhya Pradesh",
    "district": "Raisen"
  },
  {
    "id": 3017,
    "college": "Rajeev Gandhi College, Trilanga Colony, E-8 Shahpura, Bhopal   ",
    "state": "Madhya Pradesh",
    "district": "Bhopal"
  }
]
```


