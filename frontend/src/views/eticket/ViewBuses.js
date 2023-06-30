import React from 'react';
import {

  Row,
  Col
} from "react-bootstrap";


import { VisibleFilter, DynamicFilter, ModernFilter } from './components/table-filter-search';

function ViewBuses() {
	return (
    <div className="">
   
      <section className="content">
      <Row>

<ModernFilter
  headlines={[
    {
      name: "id"
    },
    {
      name: "Source"
    },
    {
      name: "Destination"
    },
   
    {
      name: "RouteNumber"
    }
  ]}
 

 datas={[
  {
    "id": "1",
    "route_no": "1",
    "distance": "19.6 KM",
    "origin": "Jayanagara 9th Block",
    "destination": "Yeshwanathapura new railway station",
    "departure_from_origin": "07:35,  08:15,  08:55,  10:40,  11:20,  12:00,  13:20,  14:00,  14:40,  16:25,  17:05,  17:45",
    "arrival_at_origin": "10:10, 10:50, 11:55, 13:15, 13:55, 14:35, 15:55, 16:35, 17:40, 19:35, 19:55",
    "departure_from_destination": "08:55, 09:35, 10:40, 12:00, 12:40, 13:20, 14:40, 15:20, 16:25, 17:45, 18:25",
    "arrival_at_destination": "08:50,  09:30,  10:10,  11:55,  12:35,  13:15,  14:35,  15:15,  15:55,  17:40,  18:20,  19:00",
    "map_json_content": [
      {
        "busstop": "Jayanagara 9th Block,JAYANAGARA 9TH BLOCK,BESIDE HOTEL SRI SAI"
      },
      {
        "busstop": "Jayanagara T Block,JAYANAGARA 4TH T BLOCK,BESIDE HDFC BANK"
      },
      {
        "busstop": "Jayanagara 18th Main,JAYANAGARA 4TH T BLOCK,OPPOSITE OF LAKSHMI AYURVEDIC CENTER"
      },
      {
        "busstop": "Church,JAYANAGARA 4TH T BLOCK,BESIDE POORNIMA CONVENTION"
      },
      {
        "busstop": "Jayanagara 4th Block,TTMC"
      },
      {
        "busstop": "Jayanagara 3rd Block,JAYANAGARA 3RD BLOCK,OPPOSITE OF UTL TECHNOLOGIS"
      },
      {
        "busstop": "Madavan Park,JAYANAGARA 3RD BLOCK,OPPOSITE OF ORIENTAL INSUARENCE"
      },
      {
        "busstop": "Southend Circle,BASAVANAGUDI,BESIDE GANDHARVA FAMILY BAR"
      },
      {
        "busstop": "Nagasandra Circle,BASAVANAGUDI,BESIDE PROSPER PARK APPARTMENT"
      },
      {
        "busstop": "Netakallappa Circle,BASAVANAGUDI,OPPOSITE OF GURU RAGHAVENDRA BANK"
      },
      {
        "busstop": "Basavanagudi Police Station,BASAVANAGUDI,BESIDE ACHIEVE SCHOOL OF EDUCATION"
      },
      {
        "busstop": "Gandhi Bazaar,BASAVANAGUDI,BESIDE ASHOKA PLAZA"
      },
      {
        "busstop": "Ramakrishna Ashrama,GAVIPURAM EXTENTION,OPPOSITE OF STATE BANK OF INDIA"
      },
      {
        "busstop": "Bangalore High School,KEMPE GOWDA NAGARA,IN FRONT OF MORE MEGHA STORE"
      },
      {
        "busstop": "Chamarajapet,CHAMARAJA PETE,BESIDE VENKUS & CO. PETROL BUNK"
      },
      {
        "busstop": "Makkalakoota"
      },
      {
        "busstop": "Krishnarajendra Market"
      },
      {
        "busstop": "Veterinary Hospital"
      },
      {
        "busstop": "Goodshed Road Gate,COTTONPET,BESIDE BALAGANGADHARANATHA SWAMYJI FREE HOSTEL SCHOOL"
      },
      {
        "busstop": "Majestic,Opposite to City Railway Station"
      },
      {
        "busstop": "Ananda Rao Circle,IN FRONT OF DIRECTOR OF MEDICAL EDUCATION"
      },
      {
        "busstop": "Central,SHESHADRI PURAM,OPPOSITE TO HOTEL GREEN ARCHID"
      },
      {
        "busstop": "Malleshwaram Circle,MALLESHWARAM,BESIDE R.R.GOLD PALACE"
      },
      {
        "busstop": "Malleshwaram 8th Cross,MALLESHWARAM,BESIDE FLOWER MARKET"
      },
      {
        "busstop": "Malleshwaram 15th Cross,MALLESHWARAM,BESIDE SAI MANDIR"
      },
      {
        "busstop": "Malleshwaram 18th Cross,MALLESHWARAM,BESIDE KARNATAKA EXAMINATION AUTHORITY"
      },
      {
        "busstop": "Tata Institute"
      },
      {
        "busstop": "Yeshawanthapura TTMC"
      },
      {
        "busstop": "Govardhan Talkies,YESHAWANTHPURA,BESIDE BSNL OFFICE"
      },
      {
        "busstop": "Yeshwanathapura new railway station"
      }
    ]
  },
  {
    "id": "2",
    "route_no": "1E",
    "distance": "20.8 KM",
    "origin": "JPNagara 6th Phase",
    "destination": "Chowdeshwari Bus Stand JP Park",
    "departure_from_origin": "07:20,  10:45,  17:30,  21:00",
    "arrival_at_origin": "07:15, 10:15, 17:00, 20:30",
    "departure_from_destination": "05:30, 08:50, 15:35, 19:00",
    "arrival_at_destination": "08:45,  12:20,  18:55,  22:25",
    "map_json_content": [
      {
        "busstop": "JPNagara 6th Phase,JP NAGARA 6TH PHASE,OPPOSITE OF THE BIG MARKET"
      },
      {
        "busstop": "JP Nagara 15th Cross,JP NAGARA 2ND PHASE,BESIDE CELL CITY"
      },
      {
        "busstop": "RVDental College,JP NAGARA 1ST PHASE,BESIDE R.V.COLLEGE"
      },
      {
        "busstop": "Marenahalli,JP NAGARA 1ST PHASE,BESIDE 3M CAR CARE"
      },
      {
        "busstop": "Jayanagara 5th Block,JAYANAGARA 5TH BLOCK,BESIDE AIR WAAVE"
      },
      {
        "busstop": "Telephone Exchange,JAYANAGARA 4TH BLOCK,BESIDE BSNL OFFICE"
      },
      {
        "busstop": "Jayanagara 4th Block,TTMC"
      },
      {
        "busstop": "Jayanagara 3rd Block,JAYANAGARA 3RD BLOCK,OPPOSITE OF UTL TECHNOLOGIS"
      },
      {
        "busstop": "Madavan Park,JAYANAGARA 3RD BLOCK,OPPOSITE OF ORIENTAL INSUARENCE"
      },
      {
        "busstop": "Vijaya College,BASAVANAGUDI,OPPOSITE OF INFORMATICS"
      },
      {
        "busstop": "RV Teachers College,BASAVANAGUDI,BESIDE MEGA AGENSIS"
      },
      {
        "busstop": "Lalbagh West Gate,V.V.PURAM,BESIDE HDFC BANK"
      },
      {
        "busstop": "Minarva Circle,V.V.PURAM"
      },
      {
        "busstop": "Town Hall,OPPOSITE OF RANI CHANNAMMA STATUE"
      },
      {
        "busstop": "Corporation,CORPORATION,IN FRONT OF BANAPPA PARK"
      },
      {
        "busstop": "Mysore Bank,VASANTHA NAGARA,BESIDE ALL INDIA COUNCIL FOR TECHNICAL"
      },
      {
        "busstop": "Telephone Exchange,VASANTHA NAGARA,BESIDE TELEPHONE EXCHANGE"
      },
      {
        "busstop": "RC College,VASANTHA NAGARA,BESIDE R.C.COLLEGE"
      },
      {
        "busstop": "Shivananda Stores,VASANTHA NAGARA,BESIDE SEA ROCK RESTAURANT"
      },
      {
        "busstop": "Swastik,SHESHADRI PURAM,OPPOSITE OF SESHADRIPURAM POLICE STATION"
      },
      {
        "busstop": "Central,SHESHADRI PURAM,OPPOSITE TO HOTEL GREEN ARCHID"
      },
      {
        "busstop": "Malleshwaram Circle,MALLESHWARAM,BESIDE R.R.GOLD PALACE"
      },
      {
        "busstop": "Malleshwaram 8th Cross,MALLESHWARAM,BESIDE FLOWER MARKET"
      },
      {
        "busstop": "Malleshwaram 15th Cross,MALLESHWARAM,BESIDE SAI MANDIR"
      },
      {
        "busstop": "Malleshwaram 18th Cross,MALLESHWARAM,BESIDE KARNATAKA EXAMINATION AUTHORITY"
      },
      {
        "busstop": "Tata Institute"
      },
      {
        "busstop": "Yeshwanthpura"
      },
      {
        "busstop": "Yeshwanthpura Market,YESHAWANTHAPURA,IN FRONT OF SYNDICATE BANK ATM"
      },
      {
        "busstop": "Bombay Dyeing,YESHAWANTHAPURA,IN FRONT OF RAGHU MEDICALS"
      },
      {
        "busstop": "Mathikere Post Office,MATHIKERE,IN FRONT OF SAI INTERNATIONAL ELECTRONICS"
      },
      {
        "busstop": "Mathikere,MATHIKERE,IN FRONT OF VINAYAKA CONDIMENTS"
      },
      {
        "busstop": "Chowdeshwari Bus Stand JP Park,MATHIKERE, CHOUDESHWARI BUS STOP,IN FRONT OF LOK ANAND APARTMENTS"
      }
    ]
  },
  {
    "id": "3",
    "route_no": "1F",
    "distance": "11.5 KM",
    "origin": "BTM Layout",
    "destination": "Krishnarajendra Market",
    "departure_from_origin": "08:20,  10:10,  12:25,  14:15,  16:25,  18:10",
    "arrival_at_origin": "10:05, 12:20, 14:10, 15:55, 18:05, 19:55",
    "departure_from_destination": "09:15, 11:30, 13:20, 15:10, 17:15, 19:05",
    "arrival_at_destination": "09:10,  11:00,  13:15,  15:05,  17:10,  19:00",
    "map_json_content": [
      {
        "busstop": "BTM Layout,BTM Layout 2nd Stage,Kuvempunagara Bus Stand"
      },
      {
        "busstop": "Udupi Garden 16th Main,BTM Layout,Opp Axis Bank"
      },
      {
        "busstop": "BTM water Tank,BTM LAYOUT,OPPOSITE OF CORPORATION BANK"
      },
      {
        "busstop": "MICO Layout,BTM LAYOUT,IN FRONT OF METRIC STREAM"
      },
      {
        "busstop": "Jayadeva Hospital,BTM MICO LAYOUT,OPPOSITE OF JAYADEVA HOSPITAL"
      },
      {
        "busstop": "East End,Adjacent to Shekhar Hospital"
      },
      {
        "busstop": "Jayanagara Pump House,JAYANAGARA 9TH BLOCK,BESIDE SAINT MARY ENTERPRISES"
      },
      {
        "busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE THINK SPAN TECHNOLOGIES"
      },
      {
        "busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,RAJEEV GANDHI UNIVERSITY OF HEALTH"
      },
      {
        "busstop": "Church,JAYANAGARA 4TH T BLOCK,BESIDE THASHI'S HERBAL"
      },
      {
        "busstop": "Jayanagara 4th Block,TTMC"
      },
      {
        "busstop": "Jayanagara 3rd Block,JAYANAGARA 3RD BLOCK,OPPOSITE OF UTL TECHNOLOGIS"
      },
      {
        "busstop": "Madavan Park,JAYANAGARA 3RD BLOCK,OPPOSITE OF ORIENTAL INSUARENCE"
      },
      {
        "busstop": "Southend Circle,BASAVANAGUDI,BESIDE GANDHARVA FAMILY BAR"
      },
      {
        "busstop": "Nagasandra Circle,BASAVANAGUDI,BESIDE PROSPER PARK APPARTMENT"
      },
      {
        "busstop": "Netakallappa Circle,BASAVANAGUDI,OPPOSITE OF GURU RAGHAVENDRA BANK"
      },
      {
        "busstop": "Basavanagudi Police Station,BASAVANAGUDI,BESIDE ACHIEVE SCHOOL OF EDUCATION"
      },
      {
        "busstop": "Gandhi Bazaar,BASAVANAGUDI,BESIDE ASHOKA PLAZA"
      },
      {
        "busstop": "Ramakrishna Ashrama,GAVIPURAM EXTENTION,OPPOSITE OF STATE BANK OF INDIA"
      },
      {
        "busstop": "Bangalore High School,KEMPE GOWDA NAGARA,IN FRONT OF MORE MEGHA STORE"
      },
      {
        "busstop": "Chamarajapet,CHAMARAJA PETE,BESIDE VENKUS & CO. PETROL BUNK"
      },
      {
        "busstop": "Makkalakoota"
      },
      {
        "busstop": "Krishnarajendra Market"
      }
    ]
  },
  {
    "id": "-3",
    "route_no": "1F",
    "distance": "11.5 KM",
    "destination": "BTM Layout",
    "origin": "Krishnarajendra Market",
    "departure_from_origin": "08:20,  10:10,  12:25,  14:15,  16:25,  18:10",
    "arrival_at_origin": "10:05, 12:20, 14:10, 15:55, 18:05, 19:55",
    "departure_from_destination": "09:15, 11:30, 13:20, 15:10, 17:15, 19:05",
    "arrival_at_destination": "09:10,  11:00,  13:15,  15:05,  17:10,  19:00",
    "map_json_content": [
      {
        "busstop": "Krishnarajendra Market"
      },
      {
        "busstop": "Chamarajapet,CHAMARAJA PETE,BESIDE VENKUS & CO. PETROL BUNK"
      },
      {
        "busstop": "Bangalore High School,KEMPE GOWDA NAGARA,IN FRONT OF MORE MEGHA STORE"
      },
      {
        "busstop": "Ramakrishna Ashrama,GAVIPURAM EXTENTION,OPPOSITE OF STATE BANK OF INDIA"
      },
      {
        "busstop": "Gandhi Bazaar,BASAVANAGUDI,BESIDE ASHOKA PLAZA"
      },
      {
        "busstop": "Basavanagudi Police Station,BASAVANAGUDI,BESIDE ACHIEVE SCHOOL OF EDUCATION"
      },
      {
        "busstop": "Netakallappa Circle,BASAVANAGUDI,OPPOSITE OF GURU RAGHAVENDRA BANK"
      },
      {
        "busstop": "Nagasandra Circle,BASAVANAGUDI,BESIDE PROSPER PARK APPARTMENT"
      },
      {
        "busstop": "Southend Circle,BASAVANAGUDI,BESIDE GANDHARVA FAMILY BAR"
      },
      {
        "busstop": "Madavan Park,JAYANAGARA 3RD BLOCK,OPPOSITE OF ORIENTAL INSUARENCE"
      },
      {
        "busstop": "Jayanagara 3rd Block,JAYANAGARA 3RD BLOCK,OPPOSITE OF UTL TECHNOLOGIS"
      },
      {
        "busstop": "Jayanagara 4th Block,TTMC"
      },
      {
        "busstop": "Church,JAYANAGARA 4TH T BLOCK,BESIDE THASHI'S HERBAL"
      },
      {
        "busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,RAJEEV GANDHI UNIVERSITY OF HEALTH"
      },
      {
        "busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE THINK SPAN TECHNOLOGIES"
      },
      {
        "busstop": "Jayanagara Pump House,JAYANAGARA 9TH BLOCK,BESIDE SAINT MARY ENTERPRISES"
      },
      {
        "busstop": "East End,Adjacent to Shekhar Hospital"
      },
      {
        "busstop": "Jayadeva Hospital,BTM MICO LAYOUT,OPPOSITE OF JAYADEVA HOSPITAL"
      },
      {
        "busstop": "MICO Layout,BTM LAYOUT,IN FRONT OF METRIC STREAM"
      },
      {
        "busstop": "BTM water Tank,BTM LAYOUT,OPPOSITE OF CORPORATION BANK"
      },
      {
        "busstop": "Udupi Garden 16th Main,BTM Layout,Opp Axis Bank"
      },
      {
        "busstop": "BTM Layout,BTM Layout 2nd Stage,Kuvempunagara Bus Stand"
      }
    ]
  },
  {
    "route_no": "600CA",
    "distance": "32.1 KM",
    "origin": "BANASHANKARI TTMC",
    "destination": "Anekal",
    "departure_from_origin": "05:45,  07:05,  07:35,  08:00,  08:35,  10:05,  10:35,  11:00,  14:25,  15:15,  16:55,  17:30,  18:15,  20:40,  21:15",
    "arrival_at_origin": "07:00, 07:30, 08:30, 10:00, 10:30, 10:55, 11:55, 14:20, 16:50, 17:25, 18:10, 18:55, 20:10, 20:50, 21:50",
    "departure_from_destination": "05:45, 06:15, 07:05, 08:35, 09:05, 09:30, 10:30, 12:55, 15:25, 16:00, 16:45, 17:30, 18:40, 19:25, 20:20",
    "arrival_at_destination": "07:00,  08:30,  09:00,  09:25,  10:00,  11:30,  12:00,  12:25,  15:50,  16:40,  18:20,  18:55,  19:40,  22:05,  22:30",
    "map_json_content": [{"busstop": "BANASHANKARI TTMC"}, {"busstop": "Sangam Circle,JAYANAGARA 8TH BLOCK,BESIDE INDIAN TYRE CENTER"}, {"busstop": "Jayanagara 5th Block,JAYANAGARA 5TH BLOCK,BESIDE KRISHNA SEVA ASHRAMA HOSPITAL"}, {"busstop": "Marenahalli Petrol Bunk,PATTABHIRAMA NAGARA,BESIDE AKKA MAHADEVI PARK"}, {"busstop": "Ragigudda,JAYANAGARA 9TH BLOCK,BESIDE RAGHAVENDRA UPAHARA"}, {"busstop": "Jayanagara 9th Block East"}, {"busstop": "MICO Layout,BTM LAYOUT 1ST STAGE"}, {"busstop": "Udupi Garden 16th Main,BTM LAYOUT,BESIDE BANGLOR ONE CENTER"}, {"busstop": "BTM Layout Bus Stop,BTM LAYOUT 2ND STAGE,IN FROUNT OF KUVEMPUNAGRA BUS STAND"}, {"busstop": "Central Silk Board,BTM LAYOUT MADIWALA,OPPOSITE OF CENTRAL SILK BOARD"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi,HEBBAGODI,OPPOSITE OF SHRI PRASANNA ANJANEYA SWAMI TEMPLE"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Igglur,CHANDAPURA POST & ANEKAL TALUK,BEHIND SRI VENUGOPAL SWAMY TEMPLE"}, {"busstop": "Ramakrishnapur gate ,ANEKAL TALUK,OPPOSITE OF SRI PRASANNA VENKATESHWARA SWAMY TEMPLE ARCH"}, {"busstop": "Marsoor gate ,ANEKAL TALUK,OPPOSITE OF BHARAT PETROL BUNK, CG CABLES & WIRES INDIA PRIVATE LIMITED"}, {"busstop": "Begadadevanahalli,ANEKAL TALUK,OPPOSITE OF GOVERNMENT PRIMARY SCHOOL"}, {"busstop": "Ahuddevanahalli gate ,ANEKAL TALUK,OPPOSITE OF M.G.B.CLASSIC LAYOUT"}, {"busstop": "Karpura Gate,KARPOORA ANEKAL TALUK,IN FRONT OF A.N.ELITE GARDEN"}, {"busstop": "Chikkegade cross,CHIKKA HOGODE GATE,OPPOSITE OF ALLIANCE UNIVERSITY"}, {"busstop": "Kawalu hosalli,ANEKAL TALUK,IN FRONT OF ANGANAWADI CENTER"}, {"busstop": "Anekal Circle,ANEKAL,IN FRONT OF HOTEL SRI SAI SAGAR"}, {"busstop": "Anekal ,ANEKAL,BUS STAND"}]
  },
  {
    "route_no": "1E",
    "distance": "20.8 KM",
    "origin": "JPNagara 6th Phase",
    "destination": "Chowdeshwari Bus Stand JP Park",
    "departure_from_origin": "07:20,  10:45,  17:30,  21:00",
    "arrival_at_origin": "07:15, 10:15, 17:00, 20:30",
    "departure_from_destination": "05:30, 08:50, 15:35, 19:00",
    "arrival_at_destination": "08:45,  12:20,  18:55,  22:25",
    "map_json_content": [{"busstop": "JPNagara 6th Phase,JP NAGARA 6TH PHASE,OPPOSITE OF THE BIG MARKET"}, {"busstop": "JP Nagara 15th Cross,JP NAGARA 2ND PHASE,BESIDE CELL CITY"}, {"busstop": "RVDental College,JP NAGARA 1ST PHASE,BESIDE R.V.COLLEGE"}, {"busstop": "Marenahalli,JP NAGARA 1ST PHASE,BESIDE 3M CAR CARE"}, {"busstop": "Jayanagara 5th Block,JAYANAGARA 5TH BLOCK,BESIDE AIR WAAVE"}, {"busstop": "Telephone Exchange,JAYANAGARA 4TH BLOCK,BESIDE BSNL OFFICE"}, {"busstop": "Jayanagara 4th Block,TTMC"}, {"busstop": "Jayanagara 3rd Block,JAYANAGARA 3RD BLOCK,OPPOSITE OF UTL TECHNOLOGIS"}, {"busstop": "Madavan Park,JAYANAGARA 3RD BLOCK,OPPOSITE OF ORIENTAL INSUARENCE"}, {"busstop": "Vijaya College,BASAVANAGUDI,OPPOSITE OF INFORMATICS"}, {"busstop": "RV Teachers College,BASAVANAGUDI,BESIDE MEGA AGENSIS"}, {"busstop": "Lalbagh West Gate,V.V.PURAM,BESIDE HDFC BANK"}, {"busstop": "Minarva Circle,V.V.PURAM"}, {"busstop": "Town Hall,OPPOSITE OF RANI CHANNAMMA STATUE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BANAPPA PARK"}, {"busstop": "Mysore Bank,VASANTHA NAGARA,BESIDE ALL INDIA COUNCIL FOR TECHNICAL"}, {"busstop": "Telephone Exchange,VASANTHA NAGARA,BESIDE TELEPHONE EXCHANGE"}, {"busstop": "RC College,VASANTHA NAGARA,BESIDE R.C.COLLEGE"}, {"busstop": "Shivananda Stores,VASANTHA NAGARA,BESIDE SEA ROCK RESTAURANT"}, {"busstop": "Swastik,SHESHADRI PURAM,OPPOSITE OF SESHADRIPURAM POLICE STATION"}, {"busstop": "Central,SHESHADRI PURAM,OPPOSITE TO HOTEL GREEN ARCHID"}, {"busstop": "Malleshwaram Circle,MALLESHWARAM,BESIDE R.R.GOLD PALACE"}, {"busstop": "Malleshwaram 8th Cross,MALLESHWARAM,BESIDE FLOWER MARKET"}, {"busstop": "Malleshwaram 15th Cross,MALLESHWARAM,BESIDE SAI MANDIR"}, {"busstop": "Malleshwaram 18th Cross,MALLESHWARAM,BESIDE KARNATAKA EXAMINATION AUTHORITY"}, {"busstop": "Tata Institute"}, {"busstop": "Yeshwanthpura"}, {"busstop": "Yeshwanthpura Market,YESHAWANTHAPURA,IN FRONT OF SYNDICATE BANK ATM"}, {"busstop": "Bombay Dyeing,YESHAWANTHAPURA,IN FRONT OF RAGHU MEDICALS"}, {"busstop": "Mathikere Post Office,MATHIKERE,IN FRONT OF SAI INTERNATIONAL ELECTRONICS"}, {"busstop": "Mathikere,MATHIKERE,IN FRONT OF VINAYAKA CONDIMENTS"}, {"busstop": "Chowdeshwari Bus Stand JP Park,MATHIKERE, CHOUDESHWARI BUS STOP,IN FRONT OF LOK ANAND APARTMENTS"}]
  },
  {
    "route_no": "1F",
    "distance": "11.5 KM",
    "origin": "BTM Layout",
    "destination": "Krishnarajendra Market",
    "departure_from_origin": "08:20,  10:10,  12:25,  14:15,  16:25,  18:10",
    "arrival_at_origin": "10:05, 12:20, 14:10, 15:55, 18:05, 19:55",
    "departure_from_destination": "09:15, 11:30, 13:20, 15:10, 17:15, 19:05",
    "arrival_at_destination": "09:10,  11:00,  13:15,  15:05,  17:10,  19:00",
    "map_json_content": [{"busstop": "BTM Layout,BTM Layout 2nd Stage,Kuvempunagara Bus Stand"}, {"busstop": "Udupi Garden 16th Main,BTM Layout,Opp Axis Bank"}, {"busstop": "BTM water Tank,BTM LAYOUT,OPPOSITE OF CORPORATION BANK"}, {"busstop": "MICO Layout,BTM LAYOUT,IN FRONT OF METRIC STREAM"}, {"busstop": "Jayadeva Hospital,BTM MICO LAYOUT,OPPOSITE OF JAYADEVA HOSPITAL"}, {"busstop": "East End,Adjacent to Shekhar Hospital"}, {"busstop": "Jayanagara Pump House,JAYANAGARA 9TH BLOCK,BESIDE SAINT MARY ENTERPRISES"}, {"busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE THINK SPAN TECHNOLOGIES"}, {"busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,RAJEEV GANDHI UNIVERSITY OF HEALTH"}, {"busstop": "Church,JAYANAGARA 4TH T BLOCK,BESIDE THASHI'S HERBAL"}, {"busstop": "Jayanagara 4th Block,TTMC"}, {"busstop": "Jayanagara 3rd Block,JAYANAGARA 3RD BLOCK,OPPOSITE OF UTL TECHNOLOGIS"}, {"busstop": "Madavan Park,JAYANAGARA 3RD BLOCK,OPPOSITE OF ORIENTAL INSUARENCE"}, {"busstop": "Southend Circle,BASAVANAGUDI,BESIDE GANDHARVA FAMILY BAR"}, {"busstop": "Nagasandra Circle,BASAVANAGUDI,BESIDE PROSPER PARK APPARTMENT"}, {"busstop": "Netakallappa Circle,BASAVANAGUDI,OPPOSITE OF GURU RAGHAVENDRA BANK"}, {"busstop": "Basavanagudi Police Station,BASAVANAGUDI,BESIDE ACHIEVE SCHOOL OF EDUCATION"}, {"busstop": "Gandhi Bazaar,BASAVANAGUDI,BESIDE ASHOKA PLAZA"}, {"busstop": "Ramakrishna Ashrama,GAVIPURAM EXTENTION,OPPOSITE OF STATE BANK OF INDIA"}, {"busstop": "Bangalore High School,KEMPE GOWDA NAGARA,IN FRONT OF MORE MEGHA STORE"}, {"busstop": "Chamarajapet,CHAMARAJA PETE,BESIDE VENKUS & CO. PETROL BUNK"}, {"busstop": "Makkalakoota"}, {"busstop": "Krishnarajendra Market"}]
  },
  {
    "route_no": "CCC-1",
    "distance": "15.4 KM",
    "origin": "City Civil Court",
    "destination": "City Civil Court",
    "departure_from_origin": "09:05,  10:05,  11:05,  12:30,  13:30,  14:30,  15:30,  16:55,  17:55",
    "arrival_at_origin": "10:00, 11:00, 12:00, 13:25, 14:25, 15:25, 16:25, 17:50, 18:50",
    "departure_from_destination": "09:05, 10:05, 11:05, 12:30, 13:30, 14:30, 15:30, 16:55, 17:55",
    "arrival_at_destination": "10:00,  11:00,  12:00,  13:25,  14:25,  15:25,  16:25,  17:50,  18:50",
    "map_json_content": [{"busstop": "City Civil Court"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "St Marthas Hospital,BESIDE POLICE HEAD QUARTERS"}, {"busstop": "Corporation"}, {"busstop": "Poornima Talkies,K.S.GARDEN,BESIDE KAVERI ENTERPRISES"}, {"busstop": "Shanthi Nagara Bus Station,SHANTHI NAGAR,OPPOSITE TO SHANTHINAGAR TTMC"}, {"busstop": "KH Road"}, {"busstop": "Richmond Circle"}, {"busstop": "StJosephs College"}, {"busstop": "Mayohall"}, {"busstop": "MG Road "}, {"busstop": "Shivajinagar Bus Station,SHIVAJI NAGARA,BESIDE BMTC BUS STAND"}, {"busstop": "Indian Express"}, {"busstop": "Vidhana Soudha"}, {"busstop": "KR Circle,Post Office Road"}, {"busstop": "City Civil Court"}]
  },
  {
    "route_no": "FDR-1",
    "distance": "19 KM",
    "origin": "Vasanthapura",
    "destination": "Vasanthapura",
    "departure_from_origin": "05:30,  06:05,  06:15,  06:40,  07:15,  07:25,  07:40,  07:50,  08:20,  08:35,  08:50,  09:00,  09:30,  09:45,  10:00,  10:35,  11:05,  11:20,  11:35,  11:45,  12:15,  12:30,  12:45,  13:25,  13:40,  13:55,  14:35,  14:50,  15:05,  15:15,  15:45,  16:00,  16:15,  16:25,  16:55,  17:10,  17:25,  18:00,  18:30,  18:45,  19:10,  19:40,  19:55,  20:20,  21:05,  21:30",
    "arrival_at_origin": "06:35, 07:10, 07:20, 07:45, 08:20, 08:30, 08:45, 08:55, 09:25, 09:40, 09:55, 10:05, 10:35, 10:50, 11:05, 11:40, 12:10, 12:25, 12:40, 12:50, 13:20, 13:35, 13:50, 14:30, 14:45, 15:00, 15:40, 15:55, 16:10, 16:20, 16:50, 17:05, 17:20, 17:30, 18:00, 18:15, 18:30, 19:05, 19:35, 19:50, 20:15, 20:50, 21:00, 21:15, 21:25, 22:35",
    "departure_from_destination": "05:30, 06:05, 06:15, 06:40, 07:15, 07:25, 07:40, 07:50, 08:20, 08:35, 08:50, 09:00, 09:30, 09:45, 10:00, 10:35, 11:05, 11:20, 11:35, 11:45, 12:15, 12:30, 12:45, 13:25, 13:40, 13:55, 14:35, 14:50, 15:05, 15:15, 15:45, 16:00, 16:15, 16:25, 16:55, 17:10, 17:25, 18:00, 18:30, 18:45, 19:10, 19:40, 19:55, 20:20, 21:05, 21:30",
    "arrival_at_destination": "06:35,  07:10,  07:20,  07:45,  08:20,  08:30,  08:45,  08:55,  09:25,  09:40,  09:55,  10:05,  10:35,  10:50,  11:05,  11:40,  12:10,  12:25,  12:40,  12:50,  13:20,  13:35,  13:50,  14:30,  14:45,  15:00,  15:40,  15:55,  16:10,  16:20,  16:50,  17:05,  17:20,  17:30,  18:00,  18:15,  18:30,  19:05,  19:35,  19:50,  20:15,  20:50,  21:00,  21:15,  21:25,  22:35",
    "map_json_content": [{"busstop": "Vasanthapura,VASANTHAPURA,IN FRONT OF VASANTHA VALLABHARAYA SWAMY TEMPLE"}, {"busstop": "Yadalam Nagara,YADALAM NAGARA,IN FRONT OF SRI MANIKANTA SOUND SYSTEM"}, {"busstop": "Subramanyapura Co-operative Society,SUBRAMANYA PURA,BESIDE K.E.B."}, {"busstop": "Subramanyapura Police station,SUBRAMANYA PURA,IN FRONT OF YADALAM ADI LAKSHMAMMA SUBBAIAH SHETTY MIDDLE SCHOOL"}, {"busstop": "Uttarahalli,UTHARAHALLI,IN FRONT OF PUBLIC LIBRARY UTHARAHALLI"}, {"busstop": "Uttarahalli KR Hospital,UTHARAHALLI,IN FRONT OF I.C.I.C.I.BANK"}, {"busstop": "Chikkalsandra Canara Bank Colony,CHIKKALASANDRA,BESIDE STATE BANK OF MYSORE"}, {"busstop": "Chikkalsandra Aralimara,CHIKKALASANDRA,IN FRONT OF C.S.HOSPITAL"}, {"busstop": "Gowdana palya,TELECOM NAGARA,BESIDE SRI BALAJI C.D.CENTRE"}, {"busstop": "Prarthana School,PADMANABHA NAGARA"}, {"busstop": "Kadirenahalli Village,KADIRENAHALLI,IN FRONT OF BELURU IYENGAR BAKERY"}, {"busstop": "kadirenahalli cross,BANASHANKRI 2ND STAGE TEACHERS COLONY,BESIDE S.A.F00T WEAR"}, {"busstop": "BANASHANKARI TTMC"}, {"busstop": "Sangam Circle,JAYANAGARA 8TH BLOCK,BESIDE INDIAN TYRE CENTER"}, {"busstop": "Jayanagara 40th Cross"}, {"busstop": "Telephone Exchange,JAYANAGARA 4TH BLOCK,BESIDE BSNL OFFICE"}, {"busstop": "Jayanagara Bus Stand,JAYANAGARA 4TH BLOCK,BESIDE JAIN TEMPLE"}, {"busstop": "Telephone Exchange,JAYANAGARA 5TH BLOCK,SAMSKRUTI BANQUET HALL"}, {"busstop": "Jayanagara 40th Cross,JAYANAGARA 5TH BLOCK,BESIDE LIC OFFICE"}, {"busstop": "Sangam Circle,JAYANAGARA 8TH BLOCK,BESIDE BANGALORE WATER SUPPLY"}, {"busstop": "BANASHANKARI TTMC"}, {"busstop": "Hunase Mara Banashankari"}, {"busstop": "Monotype,BANASHANKARI, 2ND STAGE,BESIDE AVK & NSVK INSTITUTIONS"}, {"busstop": "Banashankari BDA Complex,BANASHANKARI 2ND STAGE,BISIDE HDFC BANK"}, {"busstop": "Indira Nursing Home,BANASHANKARI 2ND STAGE,OPPOSITE OF MUTHOOT FINANCE"}, {"busstop": "Devegowda Petrol Bunk,BANASHANKARI 3RD STAGE,BESIDE BESCOM"}, {"busstop": "Padmanabha Nagara,PADMANABHA NAGARA,OPPOSITE OF STATE BANK OF INDIA"}, {"busstop": "Prarthana School,PADMANABHA NAGARA,OPPOSITE OF PRARTHANA SCHOOL"}, {"busstop": "Gowdana palya,GOWDANA PALYA,OPPOSITE OF SRI BALAJI C.D.CENTRE"}, {"busstop": "Chikkallasandra Aralimara,CHIKKALASANDRA,IN FRONT OF BESCOM OFFICE"}, {"busstop": "Chikkalsandra Canara Bank Colony,CHIKKALASANDRA,OPPOSITE OF STATE BANK OF MYSORE"}, {"busstop": "Uttarahalli KR Hospital,UTHARAHALLI,OPPOSITE OF I.C.I.C.I.BANK"}, {"busstop": "Uttarahalli,UTHARAHALLI,BESIDE BMTC MAIN BUS STAND"}, {"busstop": "Subramanyapura Police station,SUBRAMANYA PURA,IN FRONT OF POST OFFICE"}, {"busstop": "Subramanyapura Co-operative Society,SUBRAMANYA PURA,OPPOSITE OF K.E.B."}, {"busstop": "Yadalam Nagara,YADALAM NAGARA,IN FRONT OF SMASHANA"}, {"busstop": "Vasanthapura,VASANTHAPURA,IN FRONT OF VASANTHA VALLABHARAYA SWAMY TEMPLE"}]
  },
  {
    "route_no": "G-1",
    "distance": "21.8 KM",
    "origin": "MG Road",
    "destination": "Kadugodi",
    "departure_from_origin": "07:35,  07:45,  07:55,  08:00,  08:05,  08:15,  08:20,  08:25,  08:30,  08:35,  08:45,  08:55,  09:05,  09:15,  09:25,  09:30,  09:55,  10:05,  10:15,  10:25,  10:35,  10:40,  10:45,  10:55,  11:05,  11:20,  11:30,  11:35,  11:40,  11:50,  12:30,  12:40,  12:50,  13:10,  13:15,  13:20,  13:30,  13:40,  13:55,  14:05,  14:10,  14:15,  14:25,  14:50,  15:00,  15:10,  15:20,  15:25,  15:30,  15:40,  15:50,  16:00,  16:15,  16:20,  16:25,  16:35,  16:40,  16:45,  17:10,  17:20,  17:30,  17:35,  17:40,  18:05,  18:15,  18:25,  18:35,  18:50,  19:00,  19:10,  19:15,  19:20,  19:45,  19:55,  20:05,  20:15,  20:25,  20:35,  20:45,  20:55,  22:35",
    "arrival_at_origin": "07:55, 08:00, 08:10, 08:15, 08:20, 08:30, 08:40, 08:50, 09:00, 09:10, 09:20, 09:25, 09:50, 10:00, 10:10, 10:20, 10:30, 10:35, 10:40, 10:50, 11:00, 11:15, 11:20, 11:30, 11:40, 12:25, 12:35, 12:45, 13:00, 13:05, 13:10, 13:15, 13:25, 13:35, 13:50, 14:00, 14:05, 14:10, 14:20, 14:45, 14:55, 15:05, 15:20, 15:25, 15:35, 15:45, 15:55, 16:10, 16:15, 16:20, 16:30, 16:35, 16:40, 17:05, 17:15, 17:25, 17:30, 17:35, 18:00, 18:10, 18:20, 18:25, 18:30, 18:45, 18:55, 19:05, 19:10, 19:15, 19:40, 19:45, 19:50, 20:00, 20:10, 20:20, 20:30, 20:40, 20:50, 21:30, 21:45, 22:00, 22:10, 22:20, 22:30",
    "departure_from_destination": "06:45, 07:00, 07:10, 07:15, 07:20, 07:30, 07:40, 07:50, 07:55, 08:10, 08:20, 08:25, 08:50, 09:00, 09:10, 09:20, 09:30, 09:35, 09:40, 09:50, 10:00, 10:15, 10:20, 10:30, 10:35, 10:40, 11:25, 11:35, 11:45, 11:55, 12:05, 12:10, 12:15, 12:25, 12:35, 12:50, 13:00, 13:05, 13:10, 13:20, 13:45, 13:55, 14:05, 14:20, 14:25, 14:35, 14:45, 14:55, 15:10, 15:15, 15:20, 15:30, 15:35, 15:40, 16:05, 16:15, 16:25, 16:30, 16:35, 17:00, 17:10, 17:20, 17:25, 17:30, 17:45, 17:55, 18:05, 18:10, 18:15, 18:40, 18:45, 18:50, 19:00, 19:10, 19:20, 19:30, 19:40, 19:50, 20:30, 20:45, 21:00, 21:05, 21:10, 21:30",
    "arrival_at_destination": "08:35,  08:45,  08:55,  09:05,  09:15,  09:20,  09:25,  09:30,  09:35,  09:45,  10:00,  10:05,  10:15,  10:25,  10:30,  10:55,  11:05,  11:15,  11:25,  11:35,  11:40,  11:45,  11:55,  12:05,  12:20,  12:30,  12:35,  12:40,  12:50,  13:30,  13:40,  13:50,  14:10,  14:15,  14:20,  14:30,  14:40,  14:55,  15:05,  15:10,  15:15,  15:25,  15:50,  16:00,  16:10,  16:20,  16:25,  16:30,  16:40,  16:50,  17:00,  17:15,  17:20,  17:25,  17:35,  17:40,  17:45,  18:10,  18:20,  18:30,  18:35,  18:40,  19:05,  19:15,  19:25,  19:35,  19:50,  20:00,  20:10,  20:15,  20:20,  20:45,  20:55,  21:05,  21:15,  21:25,  21:35,  21:45,  21:55,  23:30",
    "map_json_content": [{"busstop": "MG Road "}, {"busstop": "Trinity Circle"}, {"busstop": "Military Accounts Office"}, {"busstop": "Commando Hospital"}, {"busstop": "Domlur"}, {"busstop": "KODIHALLI"}, {"busstop": "Manipal Hospital"}, {"busstop": "Murgeshpalya,Opp.Sir MV COLLAGE"}, {"busstop": "Rajeshwari Talkies"}, {"busstop": "HAL Main Gate"}, {"busstop": "Helicopter Division"}, {"busstop": "HAL Kalyanamantapa"}, {"busstop": "Borewell"}, {"busstop": "Maratahalli"}, {"busstop": "Maratahalli Bridge"}, {"busstop": "Spice Garden"}, {"busstop": "Kundalahalli Gate"}, {"busstop": "Thubarahalli"}, {"busstop": "Siddapura"}, {"busstop": "Ramgundanhalli"}, {"busstop": "Varthuru Kodi"}, {"busstop": "Brook Bond"}, {"busstop": "White Field"}, {"busstop": "Old Sai Baba Hospitals"}, {"busstop": "Munish Hospital"}, {"busstop": "Hope Form"}, {"busstop": "Prajwal School"}, {"busstop": "Kadugodi"}]
  },
  {
    "route_no": "K-1",
    "distance": "27.8 KM",
    "origin": "Central Silk Board",
    "destination": "Yeshwanathapura new railway station",
    "departure_from_origin": "05:00,  05:20,  05:40,  06:40,  06:45,  07:05,  07:25,  08:00,  08:25,  08:45,  09:00,  09:15,  09:40,  10:00,  10:30,  11:45,  14:45,  15:30,  15:45,  16:25,  16:45,  17:05,  17:25,  17:45,  18:05,  18:15,  19:00,  20:50,  21:10,  21:30,  22:00",
    "arrival_at_origin": "06:40, 07:00, 07:20, 07:55, 08:20, 08:40, 08:55, 09:10, 09:30, 09:35, 10:25, 11:15, 13:55, 14:40, 15:25, 15:40, 15:55, 16:15, 16:35, 16:55, 17:15, 17:35, 17:45, 18:10, 18:55, 19:45, 20:10, 20:20, 20:40, 21:00, 21:55, 22:40, 23:00",
    "departure_from_destination": "05:00, 05:20, 05:40, 06:00, 06:30, 06:45, 07:00, 07:15, 07:30, 07:45, 08:25, 08:30, 09:20, 12:05, 12:55, 13:30, 13:45, 14:00, 14:20, 14:40, 15:00, 15:20, 15:40, 15:55, 16:15, 17:05, 17:55, 18:10, 18:25, 18:45, 19:05, 20:05, 21:00, 21:25",
    "arrival_at_destination": "06:40,  06:55,  07:25,  08:25,  08:40,  09:00,  09:30,  09:55,  10:20,  10:40,  10:55,  11:10,  11:35,  11:50,  12:25,  13:40,  16:40,  17:25,  17:40,  18:20,  18:40,  19:00,  19:15,  19:35,  20:00,  20:20,  21:05,  22:40,  23:00,  23:20,  23:45",
    "map_json_content": [{"busstop": "Central Silk Board"}, {"busstop": "Madivala Mosque,KORAMANGALA 2ND BLOCK,IN FROUNT OF UJWAL FAB INDIA"}, {"busstop": "Koramangala Water Tank,KORAMANGALA RING ROAD,OPPOSITE OF KARNATAKA BANK"}, {"busstop": "BDA Complex koramangala,KORAMANGALA RING ROAD,OPPOSITE OF BDA COMPLEX"}, {"busstop": "Canara Bank Koramangala,KORAMANGALA RING ROAD,BESIDE SPICE HOT SHOP"}, {"busstop": "Jn of 80 and 100 Feet Road,KORAMANGALA RING ROAD,OPPOSITE OF OASIS CENTER & LIFE STYLE"}, {"busstop": "Sreenivagilu,KORAMANGALA RING ROAD,BESIDE ASC NORTH COMPLEX"}, {"busstop": "Military Bridge"}, {"busstop": "Jn of New Bridge,DOMLURU,BESIDE GINGER COFFEE DAY"}, {"busstop": "Domlur,DOMLURU,OPPOSITE OF HDFC BANK"}, {"busstop": "Domlur Bridge"}, {"busstop": "Doopanahalli,INDIRA NAGARA,BESIDE RELIANCE DIGITAL"}, {"busstop": "New Horizon School,HAL 2ND STAGE,BESIDE NAC HOME"}, {"busstop": "HAL 12th Main,HAL 2ND STAGE,BESIDE AXIS BANK"}, {"busstop": "HAL 6th Main,HAL 2ND STAGE,BESIDE BANK OF BARODA"}, {"busstop": "Indiranagar Police Station,INDIRA NAGARA,BESIDE POLICE STATION & K.F.C."}, {"busstop": "Indiranagar Double Road,INDIRA NAGARA,BESIDE MANYVARA, 13TH CROSS"}, {"busstop": "Lakshmipura Ulsoor,INDIRA NAGARA,BESIDE BBMP BURIAL GROUND"}, {"busstop": "Halasur"}, {"busstop": "Trinity Circle"}, {"busstop": "Manipal Centre,M.G.ROAD,BESIDE MILITARY GATE"}, {"busstop": "maniksha pardeground,M.G.ROAD,BESIDE PARADE GROUND"}, {"busstop": "Shivajinagar Bus Station,SHIVAJI NAGARA,BESIDE BMTC BUS STAND"}, {"busstop": "Forties Hospital"}, {"busstop": "Vasantha Nagara"}, {"busstop": "Jaymahal Extension"}, {"busstop": "Munireddy Palya"}, {"busstop": "TV Tower Munireddy palya"}, {"busstop": "Mekhri Circle"}, {"busstop": "Kendriya Vidyalaya CPRI"}, {"busstop": "Tata Institute"}, {"busstop": "Yeshwanthpura Circle"}, {"busstop": "Govardhan Talkies,YESHAWANTHPURA,BESIDE BSNL OFFICE"}, {"busstop": "Yeshwanathapura new railway station"}]
  },
  {
    "route_no": "KHC-1",
    "distance": "10.8 KM",
    "origin": "Mysore Bank",
    "destination": "Mysore Bank",
    "departure_from_origin": "09:40,  10:35,  11:55,  12:50,  13:45,  14:40,  15:35,  16:55",
    "arrival_at_origin": "10:30, 11:25, 12:45, 13:40, 14:35, 15:30, 16:25, 17:45",
    "departure_from_destination": "09:40, 10:35, 11:55, 12:50, 13:45, 14:40, 15:35, 16:55",
    "arrival_at_destination": "10:30,  11:25,  12:45,  13:40,  14:35,  15:30,  16:25,  17:45",
    "map_json_content": [{"busstop": "Mysore Bank,VASANTHA NAGARA,BESIDE ALL INDIA COUNCIL FOR TECHNICAL"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "Vidhana Soudha"}, {"busstop": "Indian Express"}, {"busstop": "Shivajinagar Bus Station"}, {"busstop": "Mayohall"}, {"busstop": "DSouza Circle"}, {"busstop": "Boldwin Girls High School"}, {"busstop": "Richmond Circle"}, {"busstop": "Poornima Talkies,NEW MISSION ROAD,BESIDE JAYALAKSHMI BAKARY"}, {"busstop": "Mysore Bank,VASANTHA NAGARA,BESIDE ALL INDIA COUNCIL FOR TECHNICAL"}]
  },
  {
    "route_no": "MF-1",
    "distance": "14.5 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Kempegowda Bus Station",
    "departure_from_origin": "06:05,  06:15,  06:25,  06:35,  06:55,  07:05,  07:15,  07:25,  07:35,  07:55,  08:05,  08:15,  08:25,  08:35,  08:55,  09:05,  09:15,  09:25,  09:35,  09:55,  10:30,  10:40,  10:50,  11:00,  11:20,  11:30,  11:40,  11:50,  12:20,  14:20,  14:30,  14:40,  14:50,  15:00,  15:20,  15:30,  15:40,  16:15,  16:25,  16:45,  16:55,  17:05,  17:15,  17:25,  17:45,  17:55,  18:05,  18:15,  18:25,  18:45,  18:55,  19:05,  19:15,  19:25,  19:45,  19:55,  20:05,  20:15,  20:25,  20:45,  21:20,  21:30,  21:40,  21:50",
    "arrival_at_origin": "07:00, 07:10, 07:20, 07:30, 07:50, 08:00, 08:10, 08:20, 08:30, 08:50, 09:00, 09:10, 09:20, 09:30, 09:50, 10:00, 10:10, 10:20, 10:30, 10:50, 11:25, 11:35, 11:45, 12:00, 12:15, 12:25, 12:35, 12:45, 13:15, 15:15, 15:25, 15:35, 15:45, 15:55, 16:15, 16:25, 16:35, 17:10, 17:20, 17:40, 17:50, 18:00, 18:10, 18:20, 18:40, 18:50, 19:00, 19:10, 19:20, 19:40, 19:50, 20:00, 20:10, 20:20, 20:40, 20:50, 21:00, 21:10, 21:20, 21:40, 22:15, 22:25, 22:35, 22:45",
    "departure_from_destination": "06:05, 06:15, 06:25, 06:35, 06:55, 07:05, 07:15, 07:25, 07:35, 07:55, 08:05, 08:15, 08:25, 08:35, 08:55, 09:05, 09:15, 09:25, 09:35, 09:55, 10:30, 10:40, 10:50, 11:00, 11:20, 11:30, 11:40, 11:50, 12:20, 14:20, 14:30, 14:40, 14:50, 15:00, 15:20, 15:30, 15:40, 16:15, 16:25, 16:45, 16:55, 17:05, 17:15, 17:25, 17:45, 17:55, 18:05, 18:15, 18:25, 18:45, 18:55, 19:05, 19:15, 19:25, 19:45, 19:55, 20:05, 20:15, 20:25, 20:45, 21:20, 21:30, 21:40, 21:50",
    "arrival_at_destination": "07:00,  07:10,  07:20,  07:30,  07:50,  08:00,  08:10,  08:20,  08:30,  08:50,  09:00,  09:10,  09:20,  09:30,  09:50,  10:00,  10:10,  10:20,  10:30,  10:50,  11:25,  11:35,  11:45,  12:00,  12:15,  12:25,  12:35,  12:45,  13:15,  15:15,  15:25,  15:35,  15:45,  15:55,  16:15,  16:25,  16:35,  17:10,  17:20,  17:40,  17:50,  18:00,  18:10,  18:20,  18:40,  18:50,  19:00,  19:10,  19:20,  19:40,  19:50,  20:00,  20:10,  20:20,  20:40,  20:50,  21:00,  21:10,  21:20,  21:40,  22:15,  22:25,  22:35,  22:45",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "St Marthas Hospital,BESIDE POLICE HEAD QUARTERS"}, {"busstop": "Corporation Office"}, {"busstop": "Museum Kasturba Road"}, {"busstop": "MG Road Metro Station"}, {"busstop": "Maniksha Parade Ground"}, {"busstop": "Shivajinagar Bus Station"}, {"busstop": "Indian Express"}, {"busstop": "Vidhana Soudha"}, {"busstop": "KR Circle,VASANTHA NAGARA,BESIDE SJP COLLEGE"}, {"busstop": "Cauvery Bhavana,VASANTHA NAGARA,BESIDE PETROL BUNK"}, {"busstop": "Kempegowda Bus Station"}]
  },
  {
    "route_no": "NLMF-1",
    "distance": "9.9 KM",
    "origin": "Peenya 2nd stage",
    "destination": "Chikkabanawara",
    "departure_from_origin": "09:20,  10:40,  12:25,  13:45,  15:05,  16:50,  18:10",
    "arrival_at_origin": "09:15, 10:35, 12:20, 13:40, 15:00, 16:45, 18:05, 19:25",
    "departure_from_destination": "08:40, 10:00, 11:45, 13:05, 14:25, 16:10, 17:30, 18:50",
    "arrival_at_destination": "09:55,  11:15,  13:00,  14:20,  15:40,  17:25,  18:45",
    "map_json_content": [{"busstop": "Peenya 2nd stage,PEENYA 2ND STAGE,IN FRONT OF M.P.P.TEHNOLOGIES PVT LTD"}, {"busstop": "Rajagopalanagar Rajni Farms,PEENYA INDUSTRIAL AREA 2ND STAGE,IN FRONT OF MANJUNATHA REFRESHMENT"}, {"busstop": "Peenya 14th Cross,PEENYA INDUSTRIAL AREA 2ND STAGE,OPPOSITE OF SISTEMS MANUFACTURING PVT LTD"}, {"busstop": "Brundavana Peenya 2nd Stage,PEENYA INDUSTRIAL AREA 2ND STAGE,IN FRONT OF NEW TIMBER INDUSTRY"}, {"busstop": "NTTF,N.T.T.F.CROSS,IN FRONT OF NEW TIMBER INDUSTRY"}, {"busstop": "Rolling Mill,PEENYA INDUSTRIAL AREA,BESIDE ARVIND MOTORS"}, {"busstop": "TVS Cross ,PEENYA INDUSTRIAL AREA,IN FRONT OF MALLIPORE LIMITED"}, {"busstop": "System Jalahalli Cross,PEENYA INDUSTRIAL AREA,IN FRONT OF SISTEMS MANUFACTURING PVT LTD"}, {"busstop": "Jalahalli Cross"}, {"busstop": "T Dasarahalli"}, {"busstop": "Tumkur Road 8th Mile,8TH MILE,BESIDE DURGA SAW MILL"}, {"busstop": "Widia School Bagalagunte,T.DASARAHALLI,BESIDE ESHWARI MEDICALS"}, {"busstop": "Bagalagunte,BAGALAGUNTE,BESIDE MATAJI STEEL CENTER"}, {"busstop": "Bone Mill,BONE MILL,BESIDE PAVAN MEDICALS"}, {"busstop": "Sapthagiri College Chikka Banawara,KIRLOSKAR LAYOUT,BESIDE NEW UDUPI UPAHARA"}, {"busstop": "Janapriya Apartments,JANAPRIYA APARTMENTS,BESIDE OPEN AREA"}, {"busstop": "Chikkabanawara Railway Gate,CHIKKA BANAVARA,BESIDE GREEN COMFORT CAMPUS HOME"}, {"busstop": "Chikkabanawara ,CHIKKA BANAVARA,BESIDE SUMA TRADERS"}]
  },
  {
    "route_no": "WFS-1",
    "distance": "19.4 KM",
    "origin": "Borewell",
    "destination": "Borewell",
    "departure_from_origin": "09:25,  09:35,  11:50,  12:00,  13:50,  14:00,  16:15,  16:25,  18:15,  18:25",
    "arrival_at_origin": "09:20, 09:30, 11:20, 11:30, 13:45, 13:55, 16:10, 16:20, 18:10, 18:20",
    "departure_from_destination": "08:25, 08:35, 10:25, 10:35, 12:50, 13:00, 15:15, 15:25, 17:15, 17:25",
    "arrival_at_destination": "10:20,  10:30,  12:45,  12:55,  14:45,  14:55,  17:10,  17:20,  19:10,  19:20",
    "map_json_content": [{"busstop": "Borewell"}, {"busstop": "Maratahalli"}, {"busstop": "Maratahalli Bridge"}, {"busstop": "Spice Garden"}, {"busstop": "Kundalahalli Gate,KUNDALAHALLI,OPPOSITE OF HYPER CITY"}, {"busstop": "BEML Gate,KUNDALAHALLI,OPPOSITE OF HYPER CITY"}, {"busstop": "AECS Layout,KUNDALAHALLI,OPPOSITE OF BROOK FIELD"}, {"busstop": "Graphite India"}, {"busstop": "SAP ITPL,WHITEFIELD,IN FRONT OF SAP"}, {"busstop": "Vydehi Hospital,WHITEFIELD,BESIDE TTMC BUS STAND"}, {"busstop": "Sai Baba Hospital,WHITEFIELD,OPPOSITE OF SRI SATHYA SAI HOSPITAL"}, {"busstop": "Pattandur Agrahara Gate,IN FRONT OF APPOLO PHARMACY"}, {"busstop": "ITPL,OPPOSITE OF I.T.P.L. MAIN GATE"}, {"busstop": "B P L,OPPOSITE OF CINEMA HALL"}, {"busstop": "Hope Farm"}, {"busstop": "White Field"}, {"busstop": "Varthuru Kodi"}, {"busstop": "Ramagondanahalli Varthuru"}, {"busstop": "Siddapura"}, {"busstop": "Thubarahalli"}, {"busstop": "Kundalahalli Gate"}, {"busstop": "Spice Garden"}, {"busstop": "Maratahalli Bridge"}, {"busstop": "Maratahalli"}, {"busstop": "Borewell"}]
  },
  {
    "route_no": "2",
    "distance": "14.5 KM",
    "origin": "JPNagara 6th Phase",
    "destination": "Kempegowda Bus Station",
    "departure_from_origin": "05:10,  05:30,  06:40,  06:50,  07:10,  07:35,  08:05,  08:30,  09:10,  09:15,  09:45,  10:40,  10:50,  11:30,  11:35,  11:45,  11:55,  12:15,  12:25,  13:45,  13:50,  14:05,  14:50,  15:10,  15:25,  15:30,  15:45,  17:05,  17:25,  17:30,  17:40,  17:50,  18:55,  19:00,  19:15,  19:25,  19:30,  19:35,  21:10,  22:15,  23:45",
    "arrival_at_origin": "05:05, 06:25, 07:30, 08:00, 08:20, 08:40, 09:10, 09:40, 10:10, 10:45, 11:15, 11:25, 12:15, 12:20, 13:05, 13:30, 13:40, 13:45, 14:00, 15:05, 15:25, 15:40, 16:35, 16:55, 17:00, 17:10, 17:20, 18:50, 18:55, 19:10, 19:15, 19:25, 19:30, 20:40, 20:55, 21:00, 21:05, 21:10, 21:20, 22:10, 22:40, 23:40",
    "departure_from_destination": "04:30, 05:50, 06:55, 07:20, 07:30, 07:45, 08:00, 08:25, 08:50, 09:25, 10:00, 10:25, 10:40, 10:45, 11:30, 11:35, 12:20, 12:35, 12:50, 13:00, 13:15, 14:20, 14:35, 14:40, 14:55, 15:45, 16:05, 16:15, 16:25, 16:35, 18:00, 18:20, 18:25, 18:40, 18:45, 19:50, 20:00, 20:10, 20:15, 20:20, 20:25, 21:30, 22:00, 23:00",
    "arrival_at_destination": "00:20,  05:45,  06:15,  07:25,  07:40,  07:55,  08:20,  08:45,  09:20,  10:00,  10:20,  10:35,  11:25,  11:30,  12:15,  12:30,  12:35,  12:45,  13:00,  13:10,  14:30,  14:35,  14:50,  15:40,  16:00,  16:10,  16:20,  16:30,  17:55,  18:15,  18:20,  18:35,  18:40,  19:45,  19:55,  20:05,  20:15,  20:20,  21:20,  22:55",
    "map_json_content": [{"busstop": "JPNagara 6th Phase,JP NAGARA 6TH PHASE,OPPOSITE OF THE BIG MARKET"}, {"busstop": "JP Nagara 15th Cross,JP NAGARA 2ND PHASE,BESIDE CELL CITY"}, {"busstop": "RVDental College,JP NAGARA 1ST PHASE,BESIDE R.V.COLLEGE"}, {"busstop": "Marenahalli,JP NAGARA 1ST PHASE,BESIDE 3M CAR CARE"}, {"busstop": "Jayanagara 5th Block,JAYANAGARA 5TH BLOCK,BESIDE AIR WAAVE"}, {"busstop": "Telephone Exchange,JAYANAGARA 4TH BLOCK,BESIDE BSNL OFFICE"}, {"busstop": "Jayanagara 4th Block,TTMC"}, {"busstop": "Jayanagara 3rd Block,JAYANAGARA 3RD BLOCK,OPPOSITE OF UTL TECHNOLOGIS"}, {"busstop": "Madavan Park,JAYANAGARA 3RD BLOCK,OPPOSITE OF ORIENTAL INSUARENCE"}, {"busstop": "Vijaya College,BASAVANAGUDI,OPPOSITE OF INFORMATICS"}, {"busstop": "RV Teachers College,BASAVANAGUDI,BESIDE MEGA AGENSIS"}, {"busstop": "Lalbagh West Gate,V.V.PURAM,BESIDE HDFC BANK"}, {"busstop": "Minarva Circle,V.V.PURAM"}, {"busstop": "Town Hall,OPPOSITE OF RANI CHANNAMMA STATUE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BANAPPA PARK"}, {"busstop": "Cauvery Bhavana,K.R. MARKET,OPPOSITE OF BWSSB"}, {"busstop": "Kempegowda Bus Station"}]
  },
  {
    "route_no": "2A",
    "distance": "13.7 KM",
    "origin": "JP Nagara 1st Phase",
    "destination": "Kempegowda Bus Station",
    "departure_from_origin": "06:20,  06:40,  07:00,  07:20,  07:45,  08:00,  08:15,  08:30,  09:00,  09:25,  09:40,  09:55,  10:10,  11:05,  11:30,  12:00,  12:10,  12:45,  13:10,  13:40,  13:55,  14:15,  14:50,  15:15,  15:30,  16:15,  16:25,  16:35,  17:05,  17:20,  17:55,  18:15,  18:30,  19:10,  19:25,  19:40,  19:55,  20:10,  20:45,  21:50",
    "arrival_at_origin": "06:15, 07:40, 07:55, 08:05, 08:10, 08:25, 08:55, 09:20, 09:35, 09:50, 10:05, 10:35, 11:00, 11:15, 11:30, 11:40, 12:40, 13:05, 13:35, 13:45, 14:25, 14:45, 15:10, 15:25, 15:45, 16:05, 16:20, 16:55, 17:00, 17:50, 18:00, 18:10, 18:40, 19:20, 19:35, 19:50, 20:05, 20:40, 21:20, 21:40",
    "departure_from_destination": "05:30, 07:00, 07:10, 07:15, 07:25, 07:45, 08:10, 08:35, 08:50, 09:05, 09:20, 09:50, 10:15, 10:30, 10:45, 11:00, 11:55, 12:20, 12:50, 13:00, 13:40, 14:00, 14:25, 14:40, 15:05, 15:20, 15:40, 16:05, 16:15, 17:05, 17:15, 17:25, 17:55, 18:25, 18:45, 19:00, 19:20, 19:55, 20:25, 20:35, 21:00",
    "arrival_at_destination": "07:10,  07:20,  07:40,  08:05,  08:20,  08:45,  09:00,  09:15,  09:45,  10:10,  10:25,  10:40,  10:55,  11:50,  12:15,  12:45,  12:55,  13:35,  13:55,  14:20,  14:35,  15:00,  15:15,  15:35,  16:00,  16:10,  17:00,  17:10,  17:20,  17:50,  18:20,  18:40,  19:00,  19:15,  19:50,  20:20,  20:30,  20:45,  20:55,  21:25,  22:30",
    "map_json_content": [{"busstop": "JP Nagara 1st Phase,SHAKAMBARI NAGARA,BESIDE APOLLO PHARMACY"}, {"busstop": "Indira Gandhi Circle,SHAKAMBARI NAGARA,BESIDE S.B.M.LAYOUT"}, {"busstop": "RVDental College,JP NAGARA 1ST PHASE,BESIDE R.V.COLLEGE"}, {"busstop": "Marenahalli,JP NAGARA 1ST PHASE,BESIDE 3M CAR CARE"}, {"busstop": "Jayanagara 5th Block,JAYANAGARA 5TH BLOCK,BESIDE AIR WAAVE"}, {"busstop": "Telephone Exchange,JAYANAGARA 4TH BLOCK,BESIDE BSNL OFFICE"}, {"busstop": "Jayanagara 4th Block,TTMC"}, {"busstop": "Jayanagara 3rd Block,JAYANAGARA 3RD BLOCK,OPPOSITE OF UTL TECHNOLOGIS"}, {"busstop": "Madavan Park,JAYANAGARA 3RD BLOCK,OPPOSITE OF ORIENTAL INSUARENCE"}, {"busstop": "Vijaya College,BASAVANAGUDI,OPPOSITE OF INFORMATICS"}, {"busstop": "RV Teachers College,BASAVANAGUDI,BESIDE MEGA AGENSIS"}, {"busstop": "Lalbagh West Gate,V.V.PURAM,BESIDE HDFC BANK"}, {"busstop": "Minarva Circle,V.V.PURAM"}, {"busstop": "Town Hall,OPPOSITE OF RANI CHANNAMMA STATUE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BANAPPA PARK"}, {"busstop": "Cauvery Bhavana,K.R. MARKET,OPPOSITE OF BWSSB"}, {"busstop": "Kempegowda Bus Station"}]
  },
  {
    "route_no": "2B",
    "distance": "14 KM",
    "origin": "Eliyas Nagar",
    "destination": "Kempegowda Bus Station",
    "departure_from_origin": "06:45,  08:30,  10:20,  12:35,  15:35,  17:25,  19:40,  21:30",
    "arrival_at_origin": "08:25, 10:15, 12:30, 15:30, 17:20, 19:10, 21:25",
    "departure_from_destination": "07:35, 09:25, 11:40, 14:40, 16:30, 18:20, 20:35",
    "arrival_at_destination": "07:30,  09:20,  11:10,  13:25,  16:25,  18:15,  20:30,  21:45",
    "map_json_content": [{"busstop": "Eliyas Nagar,ILYASA NAGARA,BESIDE M.S.MADEENA STORE"}, {"busstop": "Jn Of Ring Road,ILYAS NAGARA,BESIDE R.R.DIAGNOSTIC CENTER"}, {"busstop": "JPNagara 6th Phase,JP NAGARA 6TH PHASE,OPPOSITE OF THE BIG MARKET"}, {"busstop": "JP Nagara 15th Cross,JP NAGARA 2ND PHASE,BESIDE CELL CITY"}, {"busstop": "RVDental College,JP NAGARA 1ST PHASE,BESIDE R.V.COLLEGE"}, {"busstop": "Marenahalli,JP NAGARA 1ST PHASE,BESIDE 3M CAR CARE"}, {"busstop": "Jayanagara 5th Block,JAYANAGARA 5TH BLOCK,BESIDE AIR WAAVE"}, {"busstop": "Telephone Exchange,JAYANAGARA 4TH BLOCK,BESIDE BSNL OFFICE"}, {"busstop": "Jayanagara 4th Block,TTMC"}, {"busstop": "Jayanagara 3rd Block,JAYANAGARA 3RD BLOCK,OPPOSITE OF UTL TECHNOLOGIS"}, {"busstop": "Madavan Park,JAYANAGARA 3RD BLOCK,OPPOSITE OF ORIENTAL INSUARENCE"}, {"busstop": "Vijaya College,BASAVANAGUDI,OPPOSITE OF INFORMATICS"}, {"busstop": "RV Teachers College,BASAVANAGUDI,BESIDE MEGA AGENSIS"}, {"busstop": "Lalbagh West Gate,V.V.PURAM,BESIDE HDFC BANK"}, {"busstop": "Minarva Circle,V.V.PURAM"}, {"busstop": "Town Hall,OPPOSITE OF RANI CHANNAMMA STATUE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BANAPPA PARK"}, {"busstop": "Cauvery Bhavana,K.R. MARKET,OPPOSITE OF BWSSB"}, {"busstop": "Kempegowda Bus Station"}]
  },
  {
    "route_no": "2D",
    "distance": "13 KM",
    "origin": "JPNagara 6th Phase",
    "destination": "City Railway Station",
    "departure_from_origin": "06:15,  07:00,  07:50,  11:20,  15:05,  16:25,  17:10,  18:05,  19:00,  19:55,  21:05,  22:10,  22:45",
    "arrival_at_origin": "06:10, 06:55, 07:45, 08:45, 11:15, 11:55, 12:55, 15:55, 16:40, 18:00, 18:55, 19:50, 20:35, 21:40, 22:40",
    "departure_from_destination": "05:30, 06:10, 07:05, 07:55, 10:30, 11:10, 12:10, 15:10, 15:55, 17:15, 18:05, 19:00, 19:50, 20:50, 21:55",
    "arrival_at_destination": "07:00,  07:50,  08:35,  12:05,  15:50,  17:10,  18:00,  18:55,  19:45,  20:45,  21:50,  23:00,  23:30",
    "map_json_content": [{"busstop": "JPNagara 6th Phase,JP NAGARA 6TH PHASE,OPPOSITE OF THE BIG MARKET"}, {"busstop": "JP Nagara 15th Cross,JP NAGARA 2ND PHASE,BESIDE CELL CITY"}, {"busstop": "RVDental College,JP NAGARA 1ST PHASE,BESIDE R.V.COLLEGE"}, {"busstop": "Marenahalli,JP NAGARA 1ST PHASE,BESIDE 3M CAR CARE"}, {"busstop": "Jayanagara 5th Block,JAYANAGARA 5TH BLOCK,BESIDE AIR WAAVE"}, {"busstop": "Telephone Exchange,JAYANAGARA 4TH BLOCK,BESIDE BSNL OFFICE"}, {"busstop": "Jayanagara 4th Block,TTMC"}, {"busstop": "Jayanagara 3rd Block,JAYANAGARA 3RD BLOCK,OPPOSITE OF UTL TECHNOLOGIS"}, {"busstop": "Madavan Park,JAYANAGARA 3RD BLOCK,OPPOSITE OF ORIENTAL INSUARENCE"}, {"busstop": "Vijaya College,BASAVANAGUDI,OPPOSITE OF INFORMATICS"}, {"busstop": "RV Teachers College,BASAVANAGUDI,BESIDE MEGA AGENSIS"}, {"busstop": "Lalbagh West Gate,V.V.PURAM,BESIDE HDFC BANK"}, {"busstop": "Minarva Circle,V.V.PURAM"}, {"busstop": "Town Hall,OPPOSITE OF RANI CHANNAMMA STATUE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BANAPPA PARK"}, {"busstop": "Cauvery Bhavana,K.R. MARKET,OPPOSITE OF BWSSB"}, {"busstop": "City Railway Station,BESIDE CITY RAILWAY STATION"}]
  },
  {
    "route_no": "2E",
    "distance": "14.5 KM",
    "origin": "JPNagara 6th Phase",
    "destination": "Kempegowda Bus Station",
    "departure_from_origin": "05:35,  07:05,  07:30,  08:15,  09:20,  10:05,  11:05,  11:10,  11:40,  12:20,  12:50,  14:00,  14:30,  15:45,  16:00,  16:10,  16:15,  17:50,  18:00,  18:15,  18:40,  19:50,  20:05,  21:30,  21:45",
    "arrival_at_origin": "07:05, 08:10, 08:40, 08:50, 09:00, 10:00, 11:05, 11:50, 12:45, 13:55, 14:25, 15:30, 15:40, 16:05, 16:10, 17:30, 17:45, 19:45, 20:00, 20:45, 21:35, 21:45, 23:20",
    "departure_from_destination": "06:20, 07:20, 07:55, 08:00, 08:20, 09:10, 10:15, 11:00, 12:00, 13:10, 13:40, 14:45, 14:50, 15:20, 15:25, 16:40, 16:50, 17:00, 18:50, 18:55, 19:10, 19:45, 20:45, 20:55, 22:35",
    "arrival_at_destination": "06:15,  07:50,  07:55,  08:15,  09:05,  10:10,  10:55,  11:55,  12:45,  13:10,  13:35,  14:45,  15:15,  16:35,  16:45,  16:55,  17:00,  18:45,  18:50,  19:05,  19:40,  20:40,  20:55,  21:55,  22:30",
    "map_json_content": [{"busstop": "JPNagara 6th Phase,JP NAGARA 6TH PHASE,OPPOSITE OF THE BIG MARKET"}, {"busstop": "Power House,JP NAGARA 6TH PHASE,BESIDE R.G.V.TELECOM PVT.LTD."}, {"busstop": "JP Nagara 15th Cross,JP NAGARA 2ND PHASE,BESIDE CELL CITY"}, {"busstop": "RVDental College,JP NAGARA 1ST PHASE,BESIDE R.V.COLLEGE"}, {"busstop": "Marenahalli,JP NAGARA 1ST PHASE,BESIDE 3M CAR CARE"}, {"busstop": "Jayanagara 5th Block,JAYANAGARA 5TH BLOCK,BESIDE AIR WAAVE"}, {"busstop": "Telephone Exchange,JAYANAGARA 4TH BLOCK,BESIDE BSNL OFFICE"}, {"busstop": "Jayanagara 4th Block,TTMC"}, {"busstop": "Jayanagara 3rd Block,JAYANAGARA 3RD BLOCK,OPPOSITE OF UTL TECHNOLOGIS"}, {"busstop": "Madavan Park,JAYANAGARA 3RD BLOCK,OPPOSITE OF ORIENTAL INSUARENCE"}, {"busstop": "Vijaya College,BASAVANAGUDI,OPPOSITE OF INFORMATICS"}, {"busstop": "RV Teachers College,BASAVANAGUDI,BESIDE MEGA AGENSIS"}, {"busstop": "Lalbagh West Gate,V.V.PURAM,BESIDE HDFC BANK"}, {"busstop": "Minarva Circle,V.V.PURAM"}, {"busstop": "Town Hall,OPPOSITE OF RANI CHANNAMMA STATUE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BANAPPA PARK"}, {"busstop": "Cauvery Bhavana,K.R. MARKET,OPPOSITE OF BWSSB"}, {"busstop": "Kempegowda Bus Station"}]
  },
  {
    "route_no": "CHAKRA-2",
    "distance": "13.5 KM",
    "origin": "Banashankari Bus Station",
    "destination": "Banashankari Bus Station",
    "departure_from_origin": "08:25,  09:15,  10:05,  11:20,  12:10,  13:00,  13:50,  14:40,  15:30,  16:45,  17:35,  18:25",
    "arrival_at_origin": "09:10, 10:00, 10:50, 12:05, 12:55, 13:45, 14:35, 15:25, 16:15, 17:30, 18:20, 19:10",
    "departure_from_destination": "08:25, 09:15, 10:05, 11:20, 12:10, 13:00, 13:50, 14:40, 15:30, 16:45, 17:35, 18:25",
    "arrival_at_destination": "09:10,  10:00,  10:50,  12:05,  12:55,  13:45,  14:35,  15:25,  16:15,  17:30,  18:20,  19:10",
    "map_json_content": [{"busstop": "Banashankari Bus Station"}, {"busstop": "Kadirenahalli Cross,BANASHANKRI 2ND STAGE KAVERI NAGARA,BESIDE KAVERI GLASS & PLYWOODS"}, {"busstop": "Dayananda Sagar College,KUMARASWAMY AYOUT 2ND STAGE,IN FRONT OF STATE BANK OF INDIA"}, {"busstop": "Kumaraswamy Layout Police Station,KUMARA SWAMY LAYOUT,IN FRONT OF KUMARA SWAMY LAYOUT POLICE STATION"}, {"busstop": "Kumaraswamy Layout "}, {"busstop": "Canara Bank"}, {"busstop": "ISRO Layout,ISRO LAYOUT,IN FRONT OF BHARTHIYA STATE BANK"}, {"busstop": "Vasanthapura,VASANTHAPURA,BESIDE OPEN AREA"}, {"busstop": "Yadalam Nagara,YADALAM NAGARA,IN FRONT OF SRI MANIKANTA SOUND SYSTEM"}, {"busstop": "Subramanyapura Co-operative Society,SUBRAMANYA PURA,BESIDE K.E.B."}, {"busstop": "Subramanyapura Police station,SUBRAMANYA PURA,IN FRONT OF YADALAM ADI LAKSHMAMMA SUBBAIAH SHETTY MIDDLE SCHOOL"}, {"busstop": "Uttarahalli,UTHARAHALLI,IN FRONT OF PUBLIC LIBRARY UTHARAHALLI"}, {"busstop": "Uttarahalli KR Hospital,UTHARAHALLI,IN FRONT OF I.C.I.C.I.BANK"}, {"busstop": "Chikkalsandra Canara Bank Colony,CHIKKALASANDRA,BESIDE STATE BANK OF MYSORE"}, {"busstop": "Chikkalsandra Aralimara,CHIKKALASANDRA,IN FRONT OF C.S.HOSPITAL"}, {"busstop": "Gowdana palya,TELECOM NAGARA,BESIDE SRI BALAJI C.D.CENTRE"}, {"busstop": "Prarthana School,PADMANABHA NAGARA"}, {"busstop": "Kadirenahalli Village,KADIRENAHALLI,IN FRONT OF BELURU IYENGAR BAKERY"}, {"busstop": "kadirenahalli cross,BANASHANKRI 2ND STAGE TEACHERS COLONY,BESIDE S.A.F00T WEAR"}, {"busstop": "Yarab Nagara,BANASHANKRI 2ND STAGE KAVERI NAGARA,OPPOSITE OF BRAHMALINGESHWARA CONDIMENTS"}, {"busstop": "Cauvery Nagara,BANASHANKRI 2ND STAGE KAVERI NAGARA,BESIDE VINAYAKA SABHA BHAVANA"}, {"busstop": "Monotype,BANASHANKARI, 2ND STAGE,OPPOSITE OF THALAM AL-TIUS"}, {"busstop": "Hunase Mara Banashankari"}, {"busstop": "Banashankari Bus Station"}]
  },

  {
    "route_no": "27",
    "distance": "15.5 KM",
    "origin": "BTM Layout South",
    "destination": "Shivajinagar Bus Station",
    "departure_from_origin": "07:50,  09:30,  12:20,  15:50,  18:20,  20:20",
    "arrival_at_origin": "09:25, 11:50, 15:45, 17:50, 20:15",
    "departure_from_destination": "08:50, 10:40, 14:45, 16:50, 19:15",
    "arrival_at_destination": "08:45,  10:35,  13:20,  16:45,  19:10,  21:20",
    "map_json_content": [{"busstop": "BTM Layout South,MADHESHWARA NAGARA,BESIDE BUS STOP"}, {"busstop": "BTM Layout 7th Main"}, {"busstop": "Udupi Garden 16th Main,BTM Layout,Opp Axis Bank"}, {"busstop": "BTM water Tank,BTM LAYOUT,OPPOSITE OF CORPORATION BANK"}, {"busstop": "MICO Layout,BTM LAYOUT,IN FRONT OF METRIC STREAM"}, {"busstop": "East End,Adjacent to Shekhar Hospital"}, {"busstop": "Jayanagara Pump House,JAYANAGARA 9TH BLOCK,BESIDE SAINT MARY ENTERPRISES"}, {"busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE THINK SPAN TECHNOLOGIES"}, {"busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,RAJEEV GANDHI UNIVERSITY OF HEALTH"}, {"busstop": "Church,JAYANAGARA 4TH T BLOCK,BESIDE POORNIMA CONVENTION"}, {"busstop": "Jayanagara 4th Block,TTMC"}, {"busstop": "Jayanagara 3rd Block,JAYANAGARA 3RD BLOCK,OPPOSITE OF UTL TECHNOLOGIS"}, {"busstop": "Madavan Park,JAYANAGARA 3RD BLOCK,OPPOSITE OF ORIENTAL INSUARENCE"}, {"busstop": "Rani Saraladevi School,JAYANAGARA 1ST BLOCK,BESIDE SATYASAI TOURS & TRAVELS"}, {"busstop": "Ashoka Pillar,JAYANAGARA 1ST BLOCK,BESIDE HEMACHANDRA KALYANA MANTAPA"}, {"busstop": "Siddapura,SIDDAPURA,OPPOSITE OF GOVT.PRIMARY SCHOOL"}, {"busstop": "Mallige Hospital Siddapura,SIDDAPURA,OPPOSITE OF MALLIGE HOSPITAL"}, {"busstop": "Wilson Garden 10th Cross,WILSON GARDEN,BESIDE KARNATAKA HANDBALL ASSOCIATION"}, {"busstop": "Wilson Garden Police Station,WILSON GARDEN,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Double Road Shanthinagar"}, {"busstop": "Richmond Circle"}, {"busstop": "StJosephs College"}, {"busstop": "State Bank Of India,BESIDE HONDA SERVISING COMPANY"}, {"busstop": "MG Road Anil Kumble Circle"}, {"busstop": "Shivajinagar Bus Station"}]
  },
  {
    "route_no": "27A",
    "distance": "14.1 KM",
    "origin": "Nayanappa Shettipalya",
    "destination": "Shivajinagar Bus Station",
    "departure_from_origin": "07:45,  09:35,  11:35,  13:10,  14:55,  17:20,  19:20",
    "arrival_at_origin": "07:40, 09:30, 11:05, 13:05, 14:50, 16:50, 19:15, 21:00",
    "departure_from_destination": "06:55, 08:40, 10:30, 12:15, 14:00, 15:55, 18:20, 20:25",
    "arrival_at_destination": "08:35,  10:25,  12:10,  13:55,  15:50,  18:15,  20:20",
    "map_json_content": [{"busstop": "Nayanappa Shettipalya"}, {"busstop": "JP Nagara 3rd Phase,JP NAGARA 3RD PHASE,BESIDE H.D.F.C.BANK"}, {"busstop": "Jn of 8th Main and 3rd Cross,JP NAGARA 2ND PHASE,BESIDE D.T.D.C."}, {"busstop": "Milk Booth,JP NAGARA 2ND PHASE,BESIDE NANDINI PARLOUR"}, {"busstop": "Water Tank Raggigudda,JP NAGARA 3RD PHASE,OPPOSITE OF B.W.S.S.B."}, {"busstop": "East End,JAYANAGARA 9TH BLOCK,ROYAL TOUCH INTERIOR DECORATOR"}, {"busstop": "Jayanagara Pump House,JAYANAGARA 9TH BLOCK,BESIDE SAINT MARY ENTERPRISES"}, {"busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE THINK SPAN TECHNOLOGIES"}, {"busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,RAJEEV GANDHI UNIVERSITY OF HEALTH"}, {"busstop": "Church,JAYANAGARA 4TH T BLOCK,BESIDE THASHI'S HERBAL"}, {"busstop": "Jayanagara 4th Block,TTMC"}, {"busstop": "Jayanagara 3rd Block,JAYANAGARA 3RD BLOCK,OPPOSITE OF UTL TECHNOLOGIS"}, {"busstop": "Madavan Park,JAYANAGARA 3RD BLOCK,OPPOSITE OF ORIENTAL INSUARENCE"}, {"busstop": "Rani Saraladevi School,JAYANAGARA 1ST BLOCK,BESIDE SATYASAI TOURS & TRAVELS"}, {"busstop": "Ashoka Pillar,JAYANAGARA 1ST BLOCK,BESIDE HEMACHANDRA KALYANA MANTAPA"}, {"busstop": "Siddapura,SIDDAPURA,OPPOSITE OF GOVT.PRIMARY SCHOOL"}, {"busstop": "Mallige Hospital Siddapura,SIDDAPURA,OPPOSITE OF MALLIGE HOSPITAL"}, {"busstop": "Wilson Garden 10th Cross,WILSON GARDEN,BESIDE KARNATAKA HANDBALL ASSOCIATION"}, {"busstop": "Wilson Garden Police Station,WILSON GARDEN,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Shanthi Nagara Bus Station,SHANTHI NAGAR,OPPOSITE TO SHANTHINAGAR TTMC"}, {"busstop": "Double Road Shanthinagar"}, {"busstop": "Richmond Circle"}, {"busstop": "StJosephs College"}, {"busstop": "State Bank Of India,BESIDE HONDA SERVISING COMPANY"}, {"busstop": "MG Road Anil Kumble Circle"}, {"busstop": "Shivajinagar Bus Station,SHIVAJI NAGARA,BESIDE BMTC BUS STAND"}]
  },
  {
    "route_no": "27E",
    "distance": "13.6 KM",
    "origin": "JP Nagara 3rd Phase",
    "destination": "Shivajinagar Bus Station",
    "departure_from_origin": "07:10,  07:30,  09:30,  11:15,  11:35,  15:15,  16:40,  17:50,  18:40,  20:05,  20:35",
    "arrival_at_origin": "07:30, 09:00, 11:10, 11:30, 15:10, 16:10, 17:20, 18:35, 20:00, 20:30, 21:40",
    "departure_from_destination": "06:45, 08:05, 10:15, 10:30, 14:10, 15:15, 16:20, 17:40, 19:00, 19:40, 21:05",
    "arrival_at_destination": "08:00,  08:20,  10:25,  12:05,  12:35,  16:15,  17:35,  18:55,  19:35,  21:00,  21:25",
    "map_json_content": [{"busstop": "JP Nagara 3rd Phase,JP NAGARA 3RD PHASE,BESIDE H.D.F.C.BANK"}, {"busstop": "Jn of 8th Main and 3rd Cross,JP NAGARA 2ND PHASE,BESIDE D.T.D.C."}, {"busstop": "Milk Booth,JP NAGARA 2ND PHASE,BESIDE NANDINI PARLOUR"}, {"busstop": "Water Tank Raggigudda,JP NAGARA 3RD PHASE,OPPOSITE OF B.W.S.S.B."}, {"busstop": "East End,JAYANAGARA 9TH BLOCK,ROYAL TOUCH INTERIOR DECORATOR"}, {"busstop": "Jayanagara Pump House,JAYANAGARA 9TH BLOCK,BESIDE SAINT MARY ENTERPRISES"}, {"busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE THINK SPAN TECHNOLOGIES"}, {"busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,RAJEEV GANDHI UNIVERSITY OF HEALTH"}, {"busstop": "Church,JAYANAGARA 4TH T BLOCK,BESIDE THASHI'S HERBAL"}, {"busstop": "Jayanagara 4th Block,TTMC"}, {"busstop": "Jayanagara 3rd Block,JAYANAGARA 3RD BLOCK,OPPOSITE OF UTL TECHNOLOGIS"}, {"busstop": "Madavan Park,JAYANAGARA 3RD BLOCK,OPPOSITE OF ORIENTAL INSUARENCE"}, {"busstop": "Rani Saraladevi School,JAYANAGARA 1ST BLOCK,BESIDE SATYASAI TOURS & TRAVELS"}, {"busstop": "Ashoka Pillar,JAYANAGARA 1ST BLOCK,BESIDE HEMACHANDRA KALYANA MANTAPA"}, {"busstop": "Siddapura,SIDDAPURA,OPPOSITE OF GOVT.PRIMARY SCHOOL"}, {"busstop": "Mallige Hospital Siddapura,SIDDAPURA,OPPOSITE OF MALLIGE HOSPITAL"}, {"busstop": "Wilson Garden 10th Cross,WILSON GARDEN,BESIDE KARNATAKA HANDBALL ASSOCIATION"}, {"busstop": "Wilson Garden Police Station,WILSON GARDEN,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Shanthi Nagara Bus Station,SHANTHI NAGAR,OPPOSITE TO SHANTHINAGAR TTMC"}, {"busstop": "Double Road Shanthinagar"}, {"busstop": "Richmond Circle"}, {"busstop": "StJosephs College"}, {"busstop": "State Bank Of India,BESIDE HONDA SERVISING COMPANY"}, {"busstop": "MG Road Anil Kumble Circle"}, {"busstop": "Shivajinagar Bus Station,SHIVAJI NAGARA,BESIDE BMTC BUS STAND"}]
  },
  {
    "route_no": "27N",
    "distance": "17.8 KM",
    "origin": "BTM Layout South",
    "destination": "Shivajinagar Bus Station",
    "departure_from_origin": "08:45,  11:15,  13:15,  15:15,  17:15,  19:10",
    "arrival_at_origin": "08:40, 10:45, 13:10, 15:10, 17:10, 19:10, 21:35",
    "departure_from_destination": "07:40, 09:45, 12:10, 14:10, 16:10, 18:10, 20:35",
    "arrival_at_destination": "09:40,  12:05,  14:05,  16:05,  18:05,  20:30",
    "map_json_content": [{"busstop": "BTM Layout South,MADHESHWARA NAGARA,BESIDE BUS STOP"}, {"busstop": "BTM Layout 7th Main"}, {"busstop": "Udupi Garden 16th Main,BTM Layout,Opp Axis Bank"}, {"busstop": "BTM water Tank,BTM LAYOUT,OPPOSITE OF CORPORATION BANK"}, {"busstop": "MICO Layout,BTM LAYOUT,IN FRONT OF METRIC STREAM"}, {"busstop": "East End,Adjacent to Shekhar Hospital"}, {"busstop": "Jayanagara Pump House,JAYANAGARA 9TH BLOCK,BESIDE SAINT MARY ENTERPRISES"}, {"busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE THINK SPAN TECHNOLOGIES"}, {"busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,RAJEEV GANDHI UNIVERSITY OF HEALTH"}, {"busstop": "Church,JAYANAGARA 4TH T BLOCK,BESIDE POORNIMA CONVENTION"}, {"busstop": "Jayanagara 4th Block,TTMC"}, {"busstop": "Jayanagara 3rd Block,JAYANAGARA 3RD BLOCK,OPPOSITE OF UTL TECHNOLOGIS"}, {"busstop": "Madavan Park,JAYANAGARA 3RD BLOCK,OPPOSITE OF ORIENTAL INSUARENCE"}, {"busstop": "Rani Saraladevi School,JAYANAGARA 1ST BLOCK,BESIDE SATYASAI TOURS & TRAVELS"}, {"busstop": "Ashoka Pillar,JAYANAGARA 1ST BLOCK,BESIDE HEMACHANDRA KALYANA MANTAPA"}, {"busstop": "Siddapura,SIDDAPURA,OPPOSITE OF GOVT.PRIMARY SCHOOL"}, {"busstop": "Mallige Hospital Siddapura,SIDDAPURA,OPPOSITE OF MALLIGE HOSPITAL"}, {"busstop": "Wilson Garden 10th Cross,WILSON GARDEN,BESIDE KARNATAKA HANDBALL ASSOCIATION"}, {"busstop": "Wilson Garden Police Station,WILSON GARDEN,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Double Road Shanthinagar"}, {"busstop": "Richmond Circle"}, {"busstop": "StJosephs College"}, {"busstop": "State Bank Of India,BESIDE HONDA SERVISING COMPANY"}, {"busstop": "MG Road Anil Kumble Circle"}, {"busstop": "Shivajinagar Bus Station"}]
  },
  {
    "route_no": "29",
    "distance": "13 KM",
    "origin": "JPNagara 6th Phase",
    "destination": "Shivajinagar Bus Station",
    "departure_from_origin": "06:50,  08:40,  10:55,  16:30,  18:20,  20:35,  22:25",
    "arrival_at_origin": "06:45, 08:35, 10:25, 12:40, 16:00, 18:15, 20:05, 22:20",
    "departure_from_destination": "05:55, 07:45, 09:35, 11:50, 15:10, 17:25, 19:15, 21:30",
    "arrival_at_destination": "07:40,  09:30,  11:45,  17:20,  19:10,  21:25,  23:10",
    "map_json_content": [{"busstop": "JPNagara 6th Phase,J.P.NAGARA 6TH PHASE,IN FRONT OF NANDHINI HOTEL"}, {"busstop": "JP Nagara 15th Cross,JP NAGARA 2ND PHASE,BESIDE CELL CITY"}, {"busstop": "RVDental College,JP NAGARA 1ST PHASE,BESIDE R.V.COLLEGE"}, {"busstop": "Marenahalli,JP NAGARA 1ST PHASE,BESIDE 3M CAR CARE"}, {"busstop": "Jayanagara 5th Block,JAYANAGARA 5TH BLOCK,BESIDE PANASONIC SHOW ROOM"}, {"busstop": "Telephone Exchange,JAYANAGARA 5TH BLOCK,SAMSKRUTI BANQUET HALL"}, {"busstop": "Jayanagara 4th Block,TTMC"}, {"busstop": "Jayanagara 3rd Block,JAYANAGARA 3RD BLOCK,OPPOSITE OF UTL TECHNOLOGIS"}, {"busstop": "Madavan Park,JAYANAGARA 3RD BLOCK,OPPOSITE OF ORIENTAL INSUARENCE"}, {"busstop": "Rani Saraladevi School,JAYANAGARA 1ST BLOCK,BESIDE SATYASAI TOURS & TRAVELS"}, {"busstop": "Ashoka Pillar,JAYANAGARA 1ST BLOCK,BESIDE HEMACHANDRA KALYANA MANTAPA"}, {"busstop": "Siddapura,SIDDAPURA,OPPOSITE OF GOVT.PRIMARY SCHOOL"}, {"busstop": "Mallige Hospital Siddapura,SIDDAPURA,OPPOSITE OF MALLIGE HOSPITAL"}, {"busstop": "Wilson Garden 10th Cross,WILSON GARDEN,BESIDE KARNATAKA HANDBALL ASSOCIATION"}, {"busstop": "Wilson Garden Police Station,WILSON GARDEN,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Double Road Shanthinagar"}, {"busstop": "Richmond Circle"}, {"busstop": "StJosephs College"}, {"busstop": "State Bank Of India,BESIDE HONDA SERVISING COMPANY"}, {"busstop": "MG Road Anil Kumble Circle"}, {"busstop": "Shivajinagar Bus Station"}]
  },
  {
    "route_no": "29E",
    "distance": "14.3 KM",
    "origin": "Eliyas Nagar",
    "destination": "Shivajinagar Bus Station",
    "departure_from_origin": "07:00,  09:25,  11:40,  14:10,  16:00,  18:15,  20:05",
    "arrival_at_origin": "08:40, 11:10, 13:25, 15:55, 17:45, 20:00, 21:40",
    "departure_from_destination": "07:50, 10:20, 12:35, 15:05, 16:55, 19:10, 20:55",
    "arrival_at_destination": "07:45,  10:15,  12:30,  15:00,  16:50,  19:05,  20:50",
    "map_json_content": [{"busstop": "Eliyas Nagar,ILYASA NAGARA,BESIDE M.S.MADEENA STORE"}, {"busstop": "JPNagara 6th Phase,JP NAGARA 6TH PHASE,OPPOSITE OF THE BIG MARKET"}, {"busstop": "JP Nagara 15th Cross,JP NAGARA 2ND PHASE,BESIDE CELL CITY"}, {"busstop": "RVDental College,JP NAGARA 1ST PHASE,BESIDE R.V.COLLEGE"}, {"busstop": "Marenahalli,JP NAGARA 1ST PHASE,BESIDE 3M CAR CARE"}, {"busstop": "Jayanagara 5th Block,JAYANAGARA 5TH BLOCK,BESIDE LADY HOSPITAL"}, {"busstop": "Telephone Exchange,JAYANAGARA 4TH BLOCK,BESIDE BSNL OFFICE"}, {"busstop": "Jayanagara 4th Block,TTMC"}, {"busstop": "Jayanagara 3rd Block,JAYANAGARA 3RD BLOCK,OPPOSITE OF UTL TECHNOLOGIS"}, {"busstop": "Madavan Park,JAYANAGARA 3RD BLOCK,OPPOSITE OF ORIENTAL INSUARENCE"}, {"busstop": "Rani Saraladevi School,JAYANAGARA 1ST BLOCK,BESIDE SATYASAI TOURS & TRAVELS"}, {"busstop": "Ashoka Pillar,JAYANAGARA 1ST BLOCK,BESIDE HEMACHANDRA KALYANA MANTAPA"}, {"busstop": "Siddapura,SIDDAPURA,OPPOSITE OF GOVT.PRIMARY SCHOOL"}, {"busstop": "Mallige Hospital Siddapura,SIDDAPURA,OPPOSITE OF MALLIGE HOSPITAL"}, {"busstop": "Wilson Garden 10th Cross,WILSON GARDEN,BESIDE KARNATAKA HANDBALL ASSOCIATION"}, {"busstop": "Wilson Garden Police Station,WILSON GARDEN,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Double Road Shanthinagar"}, {"busstop": "Richmond Circle"}, {"busstop": "StJosephs College"}, {"busstop": "State Bank Of India,BESIDE HONDA SERVISING COMPANY"}, {"busstop": "MG Road Anil Kumble Circle"}, {"busstop": "Shivajinagar Bus Station"}]
  },
  {
    "route_no": "31",
    "distance": "11.5 KM",
    "origin": "NRColony",
    "destination": "Kempegowda Bus Station",
    "departure_from_origin": "05:10,  06:30,  07:55,  09:30,  16:00,  17:55,  19:25,  21:20",
    "arrival_at_origin": "06:25, 07:50, 09:25, 15:55, 17:25, 19:20, 20:50, 22:45",
    "departure_from_destination": "05:50, 07:10, 08:40, 15:15, 16:45, 18:40, 20:10, 22:05",
    "arrival_at_destination": "05:45,  07:05,  08:35,  10:25,  16:40,  18:35,  20:05,  22:00",
    "map_json_content": [{"busstop": "NRColony,N.R.COLONY,BESIDE BBMP OFFICE, OPPOSITE AMBHA BHAVANI TEMPLE"}, {"busstop": "Netakallappa Circle,BASAVANAGUDI,OPPOSITE OF GURU RAGHAVENDRA BANK"}, {"busstop": "Basavanagudi Police Station,BASAVANAGUDI,BESIDE ACHIEVE SCHOOL OF EDUCATION"}, {"busstop": "Gandhi Bazaar,BASAVANAGUDI,BESIDE ASHOKA PLAZA"}, {"busstop": "Ramakrishna Ashrama,GAVIPURAM EXTENTION,OPPOSITE OF STATE BANK OF INDIA"}, {"busstop": "Bangalore High School,KEMPE GOWDA NAGARA,IN FRONT OF MORE MEGHA STORE"}, {"busstop": "Chamarajapet,CHAMARAJA PETE,BESIDE VENKUS & CO. PETROL BUNK"}, {"busstop": "Makkalakoota"}, {"busstop": "Krishnarajendra Market"}, {"busstop": "Town Hall,OPPOSITE OF RANI CHANNAMMA STATUE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BANAPPA PARK"}, {"busstop": "Cauvery Bhavana,K.R. MARKET,OPPOSITE OF BWSSB"}, {"busstop": "Kempegowda Bus Station"}]
  },
  {
    "route_no": "31A",
    "distance": "10.8 KM",
    "origin": "Thyagaraja Nagara",
    "destination": "Kempegowda Bus Station",
    "departure_from_origin": "08:10",
    "arrival_at_origin": "08:05",
    "departure_from_destination": "07:30",
    "arrival_at_destination": "08:40",
    "map_json_content": [{"busstop": "Thyagaraja Nagara,THYAGARAJA NAGARA 2ND BLOCK,BESIDE IYANGAR BAKERY"}, {"busstop": "M M Industries,BANASHANKARI, 2ND STAGE,IN FRONT OF KODAK EXPRESS STUDIO"}, {"busstop": "Tata Silk Farm,BASAVANAGUDI,IN FRONT OF GARADI APARTMENT"}, {"busstop": "Basavanagudi Police Station,BASAVANAGUDI,BESIDE ACHIEVE SCHOOL OF EDUCATION"}, {"busstop": "Gandhi Bazaar,BASAVANAGUDI,BESIDE ASHOKA PLAZA"}, {"busstop": "Ramakrishna Ashrama,GAVIPURAM EXTENTION,OPPOSITE OF STATE BANK OF INDIA"}, {"busstop": "Bangalore High School,KEMPE GOWDA NAGARA,IN FRONT OF MORE MEGHA STORE"}, {"busstop": "Chamarajapet,CHAMARAJA PETE,BESIDE VENKUS & CO. PETROL BUNK"}, {"busstop": "Makkalakoota"}, {"busstop": "Krishnarajendra Market"}, {"busstop": "Town Hall"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BANAPPA PARK"}, {"busstop": "Cauvery Bhavana,K.R. MARKET,OPPOSITE OF BWSSB"}, {"busstop": "Kempegowda Bus Station"}]
  },
  {
    "route_no": "31B",
    "distance": "9.7 KM",
    "origin": "Dattatreya Temple",
    "destination": "Kempegowda Bus Station",
    "departure_from_origin": "07:40,  09:10,  11:05,  12:35,  14:05,  15:35,  17:05",
    "arrival_at_origin": "07:35, 09:05, 10:35, 12:30, 14:00, 15:30, 17:00",
    "departure_from_destination": "06:55, 08:25, 09:55, 11:50, 13:20, 14:50, 16:20",
    "arrival_at_destination": "08:20,  09:50,  11:45,  13:15,  14:45,  16:15,  17:45",
    "map_json_content": [{"busstop": "Dattatreya Temple"}, {"busstop": "NRColony,N.R.COLONY,BESIDE BBMP OFFICE, OPPOSITE AMBHA BHAVANI TEMPLE"}, {"busstop": "Netakallappa Circle,BASAVANAGUDI,OPPOSITE OF GURU RAGHAVENDRA BANK"}, {"busstop": "Basavanagudi Police Station,BASAVANAGUDI,BESIDE ACHIEVE SCHOOL OF EDUCATION"}, {"busstop": "Gandhi Bazaar,BASAVANAGUDI,BESIDE ASHOKA PLAZA"}, {"busstop": "Ramakrishna Ashrama,GAVIPURAM EXTENTION,OPPOSITE OF STATE BANK OF INDIA"}, {"busstop": "Bangalore High School,KEMPE GOWDA NAGARA,IN FRONT OF MORE MEGHA STORE"}, {"busstop": "Chamarajapet,CHAMARAJA PETE,BESIDE VENKUS & CO. PETROL BUNK"}, {"busstop": "Makkalakoota"}, {"busstop": "Krishnarajendra Market"}, {"busstop": "Town Hall"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BANAPPA PARK"}, {"busstop": "Cauvery Bhavana,K.R. MARKET,OPPOSITE OF BWSSB"}, {"busstop": "Kempegowda Bus Station"}]
  },
  {
    "route_no": "31E",
    "distance": "11.9 KM",
    "origin": "Indira Nursing Home Tyagarajanagar",
    "destination": "Kempegowda Bus Station",
    "departure_from_origin": "06:30,  07:25,  07:30,  07:45,  08:00,  08:40,  09:10,  09:30,  09:50,  10:15,  10:50,  11:20,  11:35,  11:45,  11:50,  12:20,  14:35,  14:45,  14:50,  14:55,  15:45,  16:40,  16:45,  17:10,  17:25,  18:15,  18:40,  18:50,  19:20,  19:45,  20:10,  20:35,  21:40",
    "arrival_at_origin": "06:25, 07:20, 07:40, 07:55, 08:35, 09:05, 09:20, 09:30, 10:15, 10:50, 11:30, 11:40, 11:45, 12:15, 13:05, 13:25, 14:30, 14:45, 15:15, 16:05, 16:15, 16:35, 16:40, 17:20, 18:10, 18:35, 18:50, 19:15, 19:40, 20:05, 20:30, 20:35, 21:05, 21:10, 21:35",
    "departure_from_destination": "05:45, 06:40, 07:00, 07:15, 07:50, 08:20, 08:35, 08:50, 09:30, 10:00, 10:15, 10:45, 10:50, 11:05, 11:35, 12:25, 12:40, 13:50, 14:05, 14:35, 15:25, 15:35, 15:40, 15:50, 16:35, 17:30, 17:35, 18:00, 18:20, 19:00, 19:25, 19:40, 19:45, 20:20, 20:30, 20:55",
    "arrival_at_destination": "07:25,  08:00,  08:15,  08:30,  08:40,  09:25,  09:55,  10:10,  10:40,  11:00,  11:30,  12:05,  12:15,  12:30,  13:00,  15:15,  15:30,  15:35,  15:45,  16:30,  17:25,  17:30,  17:55,  18:15,  18:55,  19:20,  19:35,  19:40,  20:15,  20:25,  20:50,  21:20,  22:25",
    "map_json_content": [{"busstop": "Indira Nursing Home Tyagarajanagar,BANASHANKARI 2ND STAGE,BESIDE INDIRA NURSING HOME"}, {"busstop": "Thyagaraja Nagara,THYAGARAJA NAGARA,BESIDE APOLLO PHARMACY"}, {"busstop": "KEB Thyagaraja nagara,THYAGARAJA NAGARA,OPPOSITE OF K.E.B. QUARTERS"}, {"busstop": "NRColony,N.R.COLONY,BESIDE BBMP OFFICE, OPPOSITE AMBHA BHAVANI TEMPLE"}, {"busstop": "Netakallappa Circle,BASAVANAGUDI,OPPOSITE OF GURU RAGHAVENDRA BANK"}, {"busstop": "Basavanagudi Police Station,BASAVANAGUDI,BESIDE ACHIEVE SCHOOL OF EDUCATION"}, {"busstop": "Gandhi Bazaar,BASAVANAGUDI,BESIDE ASHOKA PLAZA"}, {"busstop": "Ramakrishna Ashrama,GAVIPURAM EXTENTION,OPPOSITE OF STATE BANK OF INDIA"}, {"busstop": "Bangalore High School,KEMPE GOWDA NAGARA,IN FRONT OF MORE MEGHA STORE"}, {"busstop": "Chamarajapet,CHAMARAJA PETE,BESIDE VENKUS & CO. PETROL BUNK"}, {"busstop": "Makkalakoota"}, {"busstop": "Krishnarajendra Market"}, {"busstop": "Town Hall"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BANAPPA PARK"}, {"busstop": "Cauvery Bhavana,K.R. MARKET,OPPOSITE OF BWSSB"}, {"busstop": "Kempegowda Bus Station"}]
  },
  {
    "route_no": "3F-1",
    "distance": "22.6 KM",
    "origin": "Dommasandra",
    "destination": "Anekal",
    "departure_from_origin": "06:00,  06:30,  07:00,  07:30,  08:00,  08:30,  09:00,  09:30,  10:00,  10:30,  11:25,  11:55,  15:25,  15:55,  16:25,  16:55,  17:50,  18:20,  18:50,  19:20,  19:50,  20:20,  20:50",
    "arrival_at_origin": "06:55, 07:25, 07:55, 08:25, 08:55, 09:25, 09:55, 10:25, 11:20, 11:50, 12:20, 12:50, 16:20, 16:50, 17:20, 17:50, 18:20, 18:50, 19:45, 20:15, 20:45, 21:15, 23:00",
    "departure_from_destination": "06:00, 06:30, 07:00, 07:30, 08:00, 08:30, 09:00, 09:30, 10:25, 10:55, 11:25, 11:55, 15:25, 15:55, 16:25, 16:55, 17:25, 17:55, 18:50, 19:20, 19:50, 20:20, 22:15",
    "arrival_at_destination": "06:55,  07:25,  07:55,  08:25,  08:55,  09:25,  09:55,  10:25,  10:55,  11:25,  12:20,  12:50,  16:20,  16:50,  17:20,  17:50,  18:45,  19:15,  19:45,  20:15,  20:45,  21:15,  21:45",
    "map_json_content": [{"busstop": "Dommasandra "}, {"busstop": "Chandapura Cross,DOMMASANDRA,IN FRONT OF HOTEL SHRI LAKSHMI & N.R STORE"}, {"busstop": "Chokkanahalli Gate,Chokkanahalli ,ABR Cricket Ground"}, {"busstop": "Head Start School Gate,Kommasandra,Temple"}, {"busstop": "Kaggalipura Gate,Kaggalipura,Junction Near Jcc Park"}, {"busstop": "Chikka Thimmasandra Gate,CHikka Thimmasandra,IOCL Gas Station"}, {"busstop": "Muttanallur Cross,MUTHANALLURU,IN FRONT OF R.R.WINES"}, {"busstop": "Narayana Ghatta,ANEKAL TALUK,IN FRONT OF ASHWATHA KATTE"}, {"busstop": "Ramasagara,ANEKAL TALUK,OPPOSITE OF SRI BASAVESHWARA TEMPLE"}, {"busstop": "Heelalige,Heelalige,Hanuman Temple"}, {"busstop": "Chandapura,ANEKAL TALUK,IN FRONT OF PANCHAYAT COMPLEX & S.K.MEDICAL & GENERAL STORE"}, {"busstop": "Igglur,CHANDAPURA POST & ANEKAL TALUK,BEHIND SRI VENUGOPAL SWAMY TEMPLE"}, {"busstop": "Ramakrishnapur gate ,ANEKAL TALUK,OPPOSITE OF SRI PRASANNA VENKATESHWARA SWAMY TEMPLE ARCH"}, {"busstop": "Marsoor gate ,ANEKAL TALUK,OPPOSITE OF BHARAT PETROL BUNK, CG CABLES & WIRES INDIA PRIVATE LIMITED"}, {"busstop": "Begadadevanahalli,ANEKAL TALUK,OPPOSITE OF GOVERNMENT PRIMARY SCHOOL"}, {"busstop": "Avadadenahalli,Avadadenahalli,Tree"}, {"busstop": "Karpoora Gate,Karpoora,Tea Shop"}, {"busstop": "Chikka Hagade Gate,Chikka Hagade,Tree"}, {"busstop": "Kavala Hosahalli,Anekal,Temple"}, {"busstop": "Anjaneya Temple,Anekal,Temple"}, {"busstop": "Devarakondappa Circle,Anekal,Circle Pillo"}, {"busstop": "Anekal ,ANEKAL,BUS STAND"}]
  },
  {
    "route_no": "3F-2",
    "distance": "18.9 KM",
    "origin": "Indlawadi Cross",
    "destination": "Adigondana Halli",
    "departure_from_origin": "06:00,  06:30,  07:00,  07:30,  08:00,  08:30,  09:00,  09:30,  10:25,  10:55,  11:25,  11:55,  13:55,  14:25,  14:55,  15:25,  15:55,  16:25,  16:55,  17:25,  18:50,  19:20,  19:50,  22:00",
    "arrival_at_origin": "06:55, 07:55, 08:25, 08:55, 09:25, 09:55, 10:25, 10:55, 11:25, 12:20, 12:50, 13:20, 13:50, 15:50, 16:20, 16:50, 17:20, 17:50, 18:45, 19:15, 19:45, 20:45, 21:15, 21:45",
    "departure_from_destination": "06:00, 07:00, 07:30, 08:00, 08:30, 09:00, 09:30, 10:00, 10:30, 11:25, 11:55, 12:25, 12:55, 14:55, 15:25, 15:55, 16:25, 16:55, 17:50, 18:20, 18:50, 19:50, 20:20, 20:50",
    "arrival_at_destination": "06:55,  07:25,  07:55,  08:25,  08:55,  09:25,  09:55,  10:25,  11:20,  11:50,  12:20,  12:50,  14:50,  15:20,  15:50,  16:20,  16:50,  17:20,  17:50,  18:20,  19:45,  20:15,  20:45,  22:45",
    "map_json_content": [{"busstop": "Indlawadi Cross,Opp to open area"}, {"busstop": "Sidihosakote,ANEKAL TALUK,OPPOSITE OF GOVERNMENT SENIOR PRIMARY SCHOOL"}, {"busstop": "Doddahagade,ANEKAL TALUK,IN FRONT OF AGRICULTURE SERVICE CO-OPERATIVE SOCIETY"}, {"busstop": "Begadadevanahalli,ANEKAL TALUK,IN FRONT OF GOVERNMENT PRIMARY SCHOOL"}, {"busstop": "Marsoor gate ,ANEKAL TALUK,IN FRONT OF BHARAT PETROL BUNK, CG CABLES & WIRES INDIA PRIVATE LIMITED"}, {"busstop": "Ramakrishnapur gate ,ANEKAL TALUK,IN FRONT OF SRI VENKATESHWARA SWAMY TEMPLE ARCH"}, {"busstop": "Igglur,CHANDAPURA POST & ANEKAL TALUK,BEHIND SRI VENUGOPAL SWAMY TEMPLE"}, {"busstop": "Chandapura,ANEKAL TALUK,IN FRONT OF SWAMY VIVEKANANDA HIGH SCHOOL"}, {"busstop": "Hale Chandapura"}, {"busstop": "LAXMISAGARA"}, {"busstop": "Ali Bommasandra,Ali Bommasandra"}, {"busstop": "Adigondana Halli,ATTIBELE HOBLI,ANEKAL TALUKU,IN FRONT OF SRI LAKSHMI PROVISION STORE"}]
  },
  {
    "route_no": "33",
    "distance": "12.9 KM",
    "origin": "Hosakerahalli village",
    "destination": "Kempegowda Bus Station",
    "departure_from_origin": "09:45,  16:30,  18:35,  20:25",
    "arrival_at_origin": "09:15, 11:30, 16:00, 20:20",
    "departure_from_destination": "08:25, 10:40, 15:15, 19:30",
    "arrival_at_destination": "10:35,  17:20,  19:25,  21:15",
    "map_json_content": [{"busstop": "Hosakerahalli village,HOSAKEREHALLI,IN FRONT OF S.L.N.TYPING COMPUTER EDUCATION CENTER"}, {"busstop": "Banashankari 3rd Stage 2nd Phase,BESIDE HOSAKEREHALLI VIDYA NAGARA NEW BUS STAND"}, {"busstop": "Nanjundeswara traders,BANASHANKARI 3RD STAGE,BESIDE COFFEE DAY"}, {"busstop": "Hosakerahalli Cross,BANASHANKARI 3RD STAGE,IN FRONT OF BWSSB"}, {"busstop": "Seetha Cricle"}, {"busstop": "Bank Colony,BANASHANKARI 1ST STAGE, SRINIVASANAGARA,IN FRONT OF SULABH SHOWCHALAYA"}, {"busstop": "Srinivasa Nagara,BANASHANKARI 1ST STAGE, SRINIVASANAGARA,OPPOSITE OF BANK OF BARODA"}, {"busstop": "Maruthi Circle,HANUMANTHA NAGARA,OPPOSITE OF GANESHA TEMPLE, CHAMARAJA PETE"}, {"busstop": "Sri Krishna Traders"}, {"busstop": "Hanumantha Nagara Ward Office,HANUMANTHA NAGARA,OPPOSITE OF AXIS BANK & HDFC BANK ATM"}, {"busstop": "Syndicate Bank,HANUMANTHA NAGARA,IN FRONT OF AMRIN BEDDING HOUSE"}, {"busstop": "Kohinoor Ground,GAVIPURAM EXTENTION,IN FRONT OF D.NAGANNA PLAY GROUND"}, {"busstop": "Ramakrishna Ashrama,GAVIPURAM EXTENTION,OPPOSITE OF STATE BANK OF INDIA"}, {"busstop": "Bangalore High School,KEMPE GOWDA NAGARA,IN FRONT OF MORE MEGHA STORE"}, {"busstop": "Chamarajapet,CHAMARAJA PETE,BESIDE VENKUS & CO. PETROL BUNK"}, {"busstop": "Makkalakoota"}, {"busstop": "Krishnarajendra Market"}, {"busstop": "Town Hall"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BANAPPA PARK"}, {"busstop": "Cauvery Bhavana,K.R. MARKET,OPPOSITE OF BWSSB"}, {"busstop": "Kempegowda Bus Station"}]
  },
  {
    "route_no": "3F-3",
    "distance": "21.5 KM",
    "origin": "Handenahalli",
    "destination": "Jigani APC Circle",
    "departure_from_origin": "06:30,  07:00,  07:30,  08:00,  08:30,  09:00,  09:30,  10:00,  10:30,  12:25,  14:25,  14:55,  15:25,  15:55,  16:25,  16:55,  17:50,  18:20,  19:20,  19:50,  20:20,  22:15,  22:45",
    "arrival_at_origin": "06:55, 07:25, 08:25, 08:55, 09:25, 09:55, 10:25, 11:20, 11:50, 12:20, 12:50, 14:20, 16:20, 16:50, 17:20, 17:50, 18:50, 19:45, 20:15, 21:15, 22:00, 22:30",
    "departure_from_destination": "06:00, 06:30, 07:30, 08:00, 08:30, 09:00, 09:30, 10:25, 10:55, 11:25, 11:55, 13:25, 15:25, 15:55, 16:25, 16:55, 17:55, 18:50, 19:20, 20:20, 21:15, 21:45",
    "arrival_at_destination": "07:25,  07:55,  08:25,  08:55,  09:25,  09:55,  10:25,  10:55,  11:25,  13:20,  15:20,  15:50,  16:20,  16:50,  17:20,  17:50,  18:45,  19:15,  20:15,  20:45,  21:15,  23:00,  23:30",
    "map_json_content": [{"busstop": "Handenahalli,Bidarguppe,Near Thyavakanahalli"}, {"busstop": "Sollepura,Sollepura"}, {"busstop": "Sammenahalli,SARJAPURA, HOBLI,IN FRONT OF MILK PRODUCT CO.OPERATIVE SOCIETY"}, {"busstop": "Muttanalluru,Muttanallur"}, {"busstop": "Muttanallur Cross,MUTHANALLURU,IN FRONT OF R.R.WINES"}, {"busstop": "Narayana Ghatta,ANEKAL TALUK,IN FRONT OF ASHWATHA KATTE"}, {"busstop": "Ramasagara,ANEKAL TALUK,OPPOSITE OF SRI BASAVESHWARA TEMPLE"}, {"busstop": "Heelalige Cross,ANEKAL TALUK,OPPOSITE OF PRIYANKA ENTERPRISES"}, {"busstop": "Chandapura,Chandapura,Bmtc Bus Stop Board"}, {"busstop": "Depot 32,CHANDAPURA POST & ANEKAL TALUK,BESIDE B.M.T.C.DEPARTMENT 32"}, {"busstop": "Igglur,CHANDAPURA POST & ANEKAL TALUK,BEHIND SRI VENUGOPAL SWAMY TEMPLE"}, {"busstop": "Ramakrishnapur gate ,ANEKAL TALUK,IN FRONT OF SRI VENKATESHWARA TEMPLE ARCH"}, {"busstop": "Ramakrishnapura,ANEKAL TALUK,NEAR DISTRICT AGRICULTURE TRAINING CENTER"}, {"busstop": "Hinnakki,ANEKAL TALUK,IN FRONT OF HOTEL ANNAPOORNESHWARI"}, {"busstop": "Rajapura,ANEKAL TALUK,OPPOSITE OF GANGOTHRI PROVISION STORE, JAGADISHARADYA"}, {"busstop": "Seethanayakanahalli"}, {"busstop": "Haragadde,Open area"}, {"busstop": "Madapatna"}, {"busstop": "Jigani APC Circle"}]
  },
  {
    "route_no": "505E",
    "distance": "29.9 KM",
    "origin": "Electronic City Wipro Gate",
    "destination": "Tin Factory",
    "departure_from_origin": "06:00,  06:15,  06:30,  06:45,  07:00,  07:15,  07:30,  07:45,  08:00,  08:15,  08:30,  08:45,  09:00,  09:15,  09:30,  09:45,  10:00,  10:15,  10:30,  10:45,  11:55,  12:10,  12:25,  13:10,  14:25,  14:40,  14:55,  15:10,  15:25,  15:40,  15:55,  16:10,  16:50,  17:05,  17:20,  17:35,  17:50,  18:05,  18:20,  18:35,  18:50,  19:05,  19:20,  19:35,  19:50,  20:05,  20:20,  22:05",
    "arrival_at_origin": "08:25, 08:40, 08:55, 09:10, 09:25, 09:40, 09:55, 10:10, 10:25, 10:40, 10:55, 11:10, 11:25, 11:40, 11:55, 12:10, 12:25, 12:40, 12:55, 13:10, 14:20, 14:35, 14:50, 15:40, 16:20, 16:35, 16:50, 17:05, 17:20, 17:35, 17:50, 18:05, 18:20, 18:35, 19:15, 19:30, 19:45, 20:00, 20:15, 20:30, 20:45, 21:00, 21:15, 21:30, 21:45, 22:00, 22:15, 22:30, 22:45",
    "departure_from_destination": "07:15, 07:30, 07:45, 08:00, 08:15, 08:30, 08:45, 09:00, 09:15, 09:30, 09:45, 10:00, 10:15, 10:30, 10:45, 11:00, 11:15, 11:30, 11:45, 12:00, 13:10, 13:25, 13:40, 14:30, 15:10, 15:25, 15:40, 15:55, 16:10, 16:25, 16:40, 16:55, 17:10, 17:25, 18:05, 18:20, 18:35, 18:50, 19:05, 19:20, 19:35, 19:50, 20:05, 20:20, 20:35, 20:50, 21:05, 21:20, 21:35",
    "arrival_at_destination": "07:10,  07:25,  07:40,  07:55,  08:10,  08:25,  08:40,  08:55,  09:10,  09:25,  09:40,  09:55,  10:10,  10:25,  10:40,  10:55,  11:10,  11:25,  11:40,  11:55,  13:05,  13:20,  13:35,  14:20,  15:35,  15:50,  16:05,  16:20,  16:35,  16:50,  17:05,  17:20,  18:00,  18:15,  18:30,  18:45,  19:00,  19:15,  19:30,  19:45,  20:00,  20:15,  20:30,  20:45,  21:00,  21:15,  21:30,  23:15",
    "map_json_content": [{"busstop": "Electronic City Wipro Gate"}, {"busstop": "BHEL"}, {"busstop": "Velankani Electronic City,Electronic City"}, {"busstop": "Infosys Parking Lot"}, {"busstop": "Konappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF LAVAKUSHA BULDING"}, {"busstop": "PES College"}, {"busstop": "Hosa Road"}, {"busstop": "Singasandra"}, {"busstop": "Kudlu Gate"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Bommanahalli"}, {"busstop": "Rupena Agrahar"}, {"busstop": "Central Silk Board,MADIWALA,IN FRONT OF SHRI KRISHNA BHAVAN HOTEL"}, {"busstop": "HSR Apartment,KORAMANAGALA, HSR LAYOUT,IN FRONT OF ARANYA MULTI CUISINE RESTAURANT"}, {"busstop": "14th Main HSR Layout,HSR LAYOUT,IN FRONT OF WESTMEAD CLINIC"}, {"busstop": "Depot-25,HSR LAYOUT,OPPOSITE OF SAROVARA APARTMENT, DEPOT 25"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellandur gate,BELLANDUR,IN FRONT OF OM SAI COMPLEX"}, {"busstop": "Eco Space,BELLANDUR,IN FRONT OF MARUTHI SUZUKI MOTORS"}, {"busstop": "Devarabisanahalli,DEVERA BISANAHALLI,OPPOSTIE OF COUNTRY CLUB"}, {"busstop": "New Horizon College,DEVARA BISANAHALLI, KADABEESANAHALLI,BESIDE SALAPURIA TOUCH STONE"}, {"busstop": "Kada Bisanahalli,KADABEESANAHALLI,IN FRONT OF V.R.CHAMBERS"}, {"busstop": "Multiplex Marathahalli,MARATHAHALLI,BESIDE PRESTIGE TECH PARK"}, {"busstop": "Jn of Marathalli Bridge,MARATHAHALLI,IN FRONT OF SOUL SPACE PARDIGM"}, {"busstop": "Kala Mandir Marathalli,MARATHAHALLI,IN FRONT OF ITTINA AKYA"}, {"busstop": "Karthik Nagara,MARATHAHALLI,IN FRONT OF A.P.RESIDENCY, GUEST HOUSE"}, {"busstop": "Dodda Nekkundi,DODDANEKUNDI,NEAR BY CAFE COFFEE DAY"}, {"busstop": "Mahadevapura Cross,MAHADEVAPURA,IN FRONT OF MTB MANGALAMERU KALAYANA MANTAPA"}, {"busstop": "B Narayanapura,B.NARAYANA PURA,OPPOSITE OF MORE MEGA STORE"}, {"busstop": "Tin Factory"}]
  },
  {
    "route_no": "506",
    "distance": "42.7 KM",
    "origin": "Banashankari Bus Station",
    "destination": "Devanagundi",
    "departure_from_origin": "05:50",
    "arrival_at_origin": "22:20",
    "departure_from_destination": "20:30",
    "arrival_at_destination": "07:40",
    "map_json_content": [{"busstop": "Banashankari Bus Station"}, {"busstop": "Sangam Circle,JAYANAGARA 8TH BLOCK,BESIDE INDIAN TYRE CENTER"}, {"busstop": "Jayanagara 5th Block,JAYANAGARA 5TH BLOCK,BESIDE GRIHA VAIBHAVA FAMILY SHOP"}, {"busstop": "Marenahalli Petrol Bunk,PATTABHIRAMA NAGARA,BESIDE AKKA MAHADEVI PARK"}, {"busstop": "Ragigudda,JAYANAGARA 9TH BLOCK,OPPOSITE OF CENTRAL MALL"}, {"busstop": "Jayadeva Hospital,JAYANAGARA 9TH BLOCK,HEALTHY INTERNATIONAL HOMEOPATHY"}, {"busstop": "MICO Layout,BTM LAYOUT 1ST STAGE"}, {"busstop": "BTM water Tank,BTM LAYOUT,IN FRONT OF CORPORATION BANK"}, {"busstop": "Udupi Garden 16th Main,BTM LAYOUT,BESIDE BANGLOR ONE CENTER"}, {"busstop": "BTM Layout Bus Stop,BTM LAYOUT 2ND STAGE,IN FROUNT OF KUVEMPUNAGRA BUS STAND"}, {"busstop": "Central Silk Board,MADIWALA,IN FRONT OF SHRI KRISHNA BHAVAN HOTEL"}, {"busstop": "HSR Apartment,KORAMANAGALA, HSR LAYOUT,IN FRONT OF ARANYA MULTI CUISINE RESTAURANT"}, {"busstop": "14th Main HSR Layout,HSR LAYOUT,IN FRONT OF WESTMEAD CLINIC"}, {"busstop": "Depot-25,HSR LAYOUT,OPPOSITE OF SAROVARA APARTMENT, DEPOT 25"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Sarjapura Cross,HSR LAYOUT,IN FRONT OF SHOBHA GRANET APARTMENT"}, {"busstop": "Petrol Bunk,BELLANDUR,IN FRONT OF INDIAN OIL CORPORATION"}, {"busstop": "Bellandur gate,BELLANDUR,IN FRONT OF OM SAI COMPLEX"}, {"busstop": "Eco Space,BELLANDUR,IN FRONT OF MARUTHI SUZUKI MOTORS"}, {"busstop": "Subbaiah Circle,DEVERA BISANAHALLI,IN FRONT OF MUTHOOT FINANCE"}, {"busstop": "New Horizon College,DEVARA BISANAHALLI, KADABEESANAHALLI,BESIDE SALAPURIA TOUCH STONE"}, {"busstop": "Kada Bisanahalli,KADABEESANAHALLI,IN FRONT OF V.R.CHAMBERS"}, {"busstop": "Multiplex Marathahalli,MARATHAHALLI,BESIDE PRESTIGE TECH PARK"}, {"busstop": "Maratahalli Bridge"}, {"busstop": "Spice Garden"}, {"busstop": "Kundalahalli Gate,KUNDALAHALLI,OPPOSITE OF HYPER CITY"}, {"busstop": "BEML Gate,KUNDALAHALLI,OPPOSITE OF HYPER CITY"}, {"busstop": "AECS Layout,KUNDALAHALLI,OPPOSITE OF BROOK FIELD"}, {"busstop": "CMRIT,KUNDALAHALLI,IN FRONT OF CMR INSTITUTE OF TECHNOLOGY"}, {"busstop": "Kundala Halli colony,KUNDALAHALLI,BESIDE KUNDALAHALLI COLONY ARCH"}, {"busstop": "Graphite India"}, {"busstop": "SAP ITPL,WHITEFIELD,IN FRONT OF SAP"}, {"busstop": "I Gate ITPL Road,WHITEFIELD,OPPOSITE OF GINGER"}, {"busstop": "KTPO,WHITEFIELD,OPPOSITE OF GE HEALTH CARE GATE"}, {"busstop": "Vydehi Hospital,WHITEFIELD,BESIDE TTMC BUS STAND"}, {"busstop": "SJR Park ITPL,WHITEFIELD,IN FRONT OF SJR GROUP"}, {"busstop": "Sai Baba Hospital,WHITEFIELD,OPPOSITE OF SRI SATHYA SAI HOSPITAL"}, {"busstop": "ITPL Back Gate,WHITEFIELD,IN FRONT OF ORACLE INDIA"}, {"busstop": "Big Bazaar,OPPOSITE OF BIG BAZAAR"}, {"busstop": "Pattandur Agrahara Gate,IN FRONT OF APPOLO PHARMACY"}, {"busstop": "ITPL,OPPOSITE OF I.T.P.L. MAIN GATE"}, {"busstop": "B P L,OPPOSITE OF CINEMA HALL"}, {"busstop": "Hope Form,IN FRONT OF FARM HOUSE"}, {"busstop": "MVJ College,OPPOSITE OF ENCHANTED WOODS"}, {"busstop": "Channasandra,OPPOSITE OF MUTHOOT FINANACE"}, {"busstop": "Thirumalashettyhalli Cross,IN FRONT OF S.L.V.FAST OOD"}, {"busstop": "Samethanahalli,IN FRONT OF ALADAMARA"}, {"busstop": "Bhodana Hosahalli,BESIDE GOVT. MILK DAIRY"}, {"busstop": "Dunnasandra,IN FRONT OF GOVT. SCHOOL"}, {"busstop": "Dunnasandra Cross,IN FRONT OF SRI PARVATHI JEWELLERS"}, {"busstop": "D Hosahalli Cross,DEVANAGONDI,BESIDE RENUKA MAHESHWARI  WOOD WORKS"}, {"busstop": "Devanagundi,DEVANAGONDI,IN FRONT OF K.E.B.OFFICE"}]
  },
  {
    "route_no": "506A",
    "distance": "31.8 KM",
    "origin": "Hebbala Bridge",
    "destination": "Devanagundi",
    "departure_from_origin": "07:35,  17:30,  21:10",
    "arrival_at_origin": "07:30, 10:40, 17:00, 20:40",
    "departure_from_destination": "06:00, 09:10, 15:35, 19:05",
    "arrival_at_destination": "09:05,  19:00,  22:40",
    "map_json_content": [{"busstop": "Hebbala Bridge,HEBBALA,OPPOSITE OF GAYATHRI LAKE FRONT"}, {"busstop": "Kempapura,HEBBALA,IN FRONT OF BHAVANI ENTERPRISES"}, {"busstop": "Veeranna Palya,VEERANNAPALYA, NAGAVARA,OPPOSITE OF INDIAN OIL PETROL BUNK"}, {"busstop": "Manyatha Tech Park,NAGAVARA,IN FRONT OF IBM MANYATA EMBASSY BUSINESS PARK"}, {"busstop": "Nagavara Junction,NAGAVARA,IN FRONT OF HOTEL REDDYS RESTAURANT, J.B.J.COMPLEX"}, {"busstop": "HBR Layout"}, {"busstop": "Hennuru Junction,HENNURU,OPPOSITE OF FLORENCE FRORIDA GROUP OF INSTITUTIONS"}, {"busstop": "Kalyananagara Bus Stand,KALYANA NAGARA,OPPOSITE OF PANASONIC SHOW ROOM"}, {"busstop": "80 Feet Road Kalyan Nagara,KALYANA NAGARA,IN FRONT OF CROMA ELECTRONICS MEGASTORE"}, {"busstop": "Babusab Palya,KALYANA NAGARA,IN FRONT OF HOTEL LITTLE IMPERIAL"}, {"busstop": "HORAMAVU PETROL BUNK,BANASAWADI,BESIDE UDUPI SAGAR HOTEL"}, {"busstop": "Vijaya Bank Colony,DODDA BANASAWADI,IN FRONT OF CACHE FURNITURE LIMITED, S.J.C.COMPLEX"}, {"busstop": "Jn OF B CHANNASANDRA,CHANNASANDRA, RAMAMURTHY NAGARA,OPPOSITE OF ANDREWS WOOD CRAFTS"}, {"busstop": "Kasturi Nagara,KASTURI NAGARA,OPPOSITE OF SRISHANT TOWER"}, {"busstop": "Tin Factory,DOORAVANI NAGARA,OPPOSITE OF SUDHIR WEIGH BRIDGE"}, {"busstop": "KR Puram Railway Station,KR PURAM,BACK SIDE OF RAILWAY STATION"}, {"busstop": "B Narayanapura,DOORAVANI NAGARA,OPPOSITE OF SRI MANJUNATHA STEEL ALLOYS"}, {"busstop": "Mahadevapura Cross,HOODI,IN FRONT OF BASAVESHWARA KHANAVALI"}, {"busstop": "SINGAYYANPALLYA,HOODI,OPPOSITE OF GEARS & PINIONS PVT LTD"}, {"busstop": "Garudachar Palya,HOODI,IN FRONT OF XYLEM AIR BUS"}, {"busstop": "Bhorka Steel,GARUDACHAR PALYA,IN FRONT OF ABB. BHORUKA TECH PARK"}, {"busstop": "Hoodi,IN FRONT OF NETRA HOTEL VEG & NON VEG"}, {"busstop": "Rajapalya,BESIDE MUTHOOT FINANCE"}, {"busstop": "Big Bazaar,OPPOSITE OF BIG BAZAAR"}, {"busstop": "Pattandur Agrahara Gate,IN FRONT OF APPOLO PHARMACY"}, {"busstop": "ITPL,OPPOSITE OF I.T.P.L. MAIN GATE"}, {"busstop": "B P L,OPPOSITE OF CINEMA HALL"}, {"busstop": "Hope Form,IN FRONT OF FARM HOUSE"}, {"busstop": "MVJ College,OPPOSITE OF ENCHANTED WOODS"}, {"busstop": "Channasandra,OPPOSITE OF MUTHOOT FINANACE"}, {"busstop": "Thirumalashettyhalli Cross,IN FRONT OF S.L.V.FAST OOD"}, {"busstop": "Samethanahalli,IN FRONT OF ALADAMARA"}, {"busstop": "Bhodana Hosahalli,BESIDE GOVT. MILK DAIRY"}, {"busstop": "Dunnasandra,IN FRONT OF GOVT. SCHOOL"}, {"busstop": "Dunnasandra Cross,IN FRONT OF SRI PARVATHI JEWELLERS"}, {"busstop": "D Hosahalli Cross,DEVANAGONDI,BESIDE RENUKA MAHESHWARI  WOOD WORKS"}, {"busstop": "Devanagundi,DEVANAGONDI,IN FRONT OF K.E.B.OFFICE"}]
  },
  {
    "route_no": "507",
    "distance": "28 KM",
    "origin": "K R Puram",
    "destination": "Sunkadakatte",
    "departure_from_origin": "06:10,  06:30,  07:05,  07:25,  08:10,  08:35,  09:00,  09:30,  09:45,  10:00,  10:50,  11:35,  12:00,  13:10,  14:35,  15:00,  15:25,  16:10,  17:15,  18:00,  18:20,  18:50,  20:45",
    "arrival_at_origin": "07:20, 08:05, 08:55, 09:25, 09:40, 09:55, 10:20, 11:05, 11:30, 12:50, 13:05, 13:20, 14:55, 16:05, 16:45, 17:55, 18:20, 18:45, 20:15, 21:45, 22:10",
    "departure_from_destination": "06:00, 06:40, 07:35, 08:00, 08:20, 08:30, 08:55, 09:40, 10:05, 11:25, 11:40, 11:55, 13:30, 14:40, 15:20, 16:30, 16:55, 17:20, 18:45, 20:20, 20:45",
    "arrival_at_destination": "07:30,  07:55,  08:25,  08:50,  09:35,  10:00,  10:25,  10:55,  11:10,  11:25,  12:15,  13:00,  13:25,  14:35,  16:00,  16:25,  16:50,  17:35,  18:40,  19:25,  20:15,  22:10",
    "map_json_content": [{"busstop": "K R Puram"}, {"busstop": "ITI Gate,DOORAVANI NAGARA,BESIDE ITI QUARTERS"}, {"busstop": "ITI Circle KRPuram,DOORAVANI NAGARA,IN FRONT OF J.B.DAIRY"}, {"busstop": "Church RM Nagar,RAMAMURTHI NAGARA,IN FRONT OF SUNIL BANKERS & JEWELLERS"}, {"busstop": "Alada Mara Ramamurthy Nagar,RAMAMURTHI NAGARA,IN FRONT OF ASHWINI NURSING HOME"}, {"busstop": "Yaranapalya,RAMAMURTHI NAGARA,IN FRONT OF FASHION WORLD"}, {"busstop": "Manipal,RAMAMURTHI NAGARA,OPPOSITE OF PETRA PARK"}, {"busstop": "Police Station Ramamurthinagar,RAMAMURTHI NAGARA,OPPOSITE OF POLICE STATION"}, {"busstop": "B Channasandra Bridge,RAMAMURTHI NAGARA,BESIDE RAILWAY BRIDGE"}, {"busstop": "Vijaya Bank Colony,DODDA BANASAWADI,OPPOSITE OF CACHE FURNITURES LIMITED"}, {"busstop": "Horamabu petrol bunk,BANASAWADI,OPPOSITE OF UDUPI SAGAR HOTEL"}, {"busstop": "Babusab Palya,KALYANA NAGARA,IN FRONT OF SHRI R.V.PLAZA"}, {"busstop": "80 Feet Road Kalyan Nagara,KALYANA NAGARA,OPPOSITE OF SATISH SAGAR HOTEL"}, {"busstop": "Kalyana Nagara,KALYANA NAGARA,OPPOSITE OF INDO ASIAN ACADEMY DEGREE COLLEGE"}, {"busstop": "Jn of Hennur Cross,HENNURU,OPPOSITE OF NAVAJEEVA ASHRAM, NEW LIFE COLLEGE"}, {"busstop": "Jn of Nagavara,NAGAVARA,IN FRONT OF RASI TVS SERVICE CENTER"}, {"busstop": "Manyatha Tech Park,NAGAVARA,OPPOSITE OF IBM MANYATA COMPANY"}, {"busstop": "Veeranna Palya,NAGAVARA,OPPOSITE OF UDUPI UPHAR HOTEL"}, {"busstop": "Kempapura,HEBBALA,OPPOSITE OF SHRI BHAVANI ENTERPRISES"}, {"busstop": "Hebbal,HEBBALA,BESIDE PITTY SHOP"}, {"busstop": "Bhadrappa Layout,BHADRAPPA LAYOUT,BESIDE OPEN AREA"}, {"busstop": "Devi Nagara,LOTTEGOLLAHALLI,BESIDE OPEN AREA"}, {"busstop": "Kuvempu Circle,JALAHALLI,BESIDE A.G.N.ELECTRICALS"}, {"busstop": "BEL Circle,BHARAT ELECTRONICS LIMITED,IN FRONT OF BHARAT ELECTRONICS LIMITED PARK"}, {"busstop": "BEL Market,JALAHALLI,BESIDE NEW STONE BAKERY"}, {"busstop": "HMT House,JALAHALLI,BEISDE HMT TRANSIT HOUSE"}, {"busstop": "Gangamma Circle,JALAHALLI,BESIDE PRESTIGE APARTMENTS"}, {"busstop": "Fathima Church Gangamma Circle,JALAHALLI,BESIDE OPEN AREA"}, {"busstop": "KG Halli Bridge,K.G.HALLI,BESIDE OPEN AREA"}, {"busstop": "Jalahalli West,INDIAN AIR FORCE JALAHALLI,OPPOSITE OF NO.1 SNCOS MESS"}, {"busstop": "Shetty Halli Cross,INDIAN AIR FORCE JALAHALLI,NEAR & OPPOSITE OF STATE BANK OF INDIA ATM"}, {"busstop": "Jalahalli Cross Ayyappa Temple,JALAHALLI WEST,OPPOSITE OF NEW RAGHU HOTEL"}, {"busstop": "Jalahalli Cross,PEENYA INDUSTRIAL AREA,OPPOSITE OF INDIAN BANK"}, {"busstop": "System Jalahalli Cross,PEENYA INDUSTRIAL AREA,IN FRONT OF NEW TIMBER INDUSTRY"}, {"busstop": "TVS Cross Peenya 2nd Stage,PEENYA INDUSTRIAL AREA,OPPOSITE OF SRI DHARMASTALA UPAHAR HOTEL"}, {"busstop": "Rolling Mill,PEENYA INDUSTRIAL AREA,IN FRONT OF HITZE EQUIPMENTS PVT LTD"}, {"busstop": "NTTF,N.T.T.F.CROSS,OPPOSITE OF INDIAN BANK"}, {"busstop": "Brundavana Peenya 2nd Stage,PEENYA INDUSTRIAL AREA 2ND STAGE,OPPOSITE OF INDIAN BANK"}, {"busstop": "Peenya 2nd stage 14th Cross,PEENYA INDUSTRIAL AREA 2ND STAGE,OPPOSITE OF PEENYA GYMKHANA"}, {"busstop": "Rajagopalanagar Rajni Farms,PEENYA INDUSTRIAL AREA 2ND STAGE,BESIDE CANARA BANK ATM"}, {"busstop": "Peenya 2nd stage,PEENYA 2ND STAGE,IN FRONT OF JYOTHI ELECTRICALS"}, {"busstop": "Dairy Hegganahalli,HEGGANA HALLI,IN FRONT OF SMART AGE INFOTECH"}, {"busstop": "Hegganahalli,HEGGANA HALLI,OPPOSITE OF GOVT HIGH SCHOOL"}, {"busstop": "Hegganahalli Cross,HEGGANA HALLI,IN FRONT OF PRAKASH HARDWARE & ELECTRICALS"}, {"busstop": "Neelagiri Thopu,SUNKADA KATTE,OPPOSITE OF S.S.K.CHOULTRY"}, {"busstop": "Vigneshwara Nagara,SUNKADA KATTE,OPPOSITE OF SALLAPURADAMMA TEMPLE"}, {"busstop": "Aralimara Sunkadakatte,SUNKADA KATTE,IN FRONT OF RAJ JEWELLERS & BANKERS"}, {"busstop": "Sunkadakatte"}, {"busstop": "Sunkadakatte"}]
  },
  {
    "route_no": "507A",
    "distance": "31.2 KM",
    "origin": "Chikkabanavara",
    "destination": "KR Puram Railway Station",
    "departure_from_origin": "05:45,  06:50,  07:00,  07:15,  07:30,  07:45,  08:00,  08:15,  08:45,  09:15,  09:30,  09:45,  10:40,  11:10,  11:25,  11:40,  12:40,  12:55,  14:40,  15:10,  15:40,  16:10,  16:50,  17:05,  17:20,  17:35,  17:50,  18:05,  18:40,  20:35,  20:50,  21:10",
    "arrival_at_origin": "07:10, 07:40, 07:55, 08:10, 08:40, 09:40, 09:55, 10:10, 10:25, 10:40, 10:55, 11:10, 12:05, 12:35, 12:50, 13:05, 15:35, 15:50, 16:05, 16:20, 16:35, 16:50, 17:05, 17:20, 17:35, 18:35, 19:05, 19:30, 19:45, 20:05, 20:15, 20:40, 20:45, 22:10",
    "departure_from_destination": "05:45, 06:10, 06:30, 06:45, 07:15, 08:15, 08:30, 08:45, 09:00, 09:15, 09:30, 09:45, 10:40, 11:10, 11:25, 11:40, 14:10, 14:25, 14:40, 14:55, 15:10, 15:25, 15:40, 15:55, 16:10, 17:05, 17:35, 18:05, 18:20, 18:35, 18:50, 19:10, 19:20, 20:40",
    "arrival_at_destination": "07:10,  08:10,  08:25,  08:40,  08:55,  09:10,  09:25,  09:40,  10:10,  10:40,  10:55,  11:10,  12:05,  12:35,  12:50,  13:05,  14:05,  14:20,  16:05,  16:35,  17:05,  17:35,  18:15,  18:30,  18:45,  19:05,  19:15,  19:35,  20:10,  22:10,  22:15,  22:45",
    "map_json_content": [{"busstop": "Chikkabanavara,CHIKKA BANAVARA,BESIDE A.ONE MOBILE SHOP"}, {"busstop": "KR Puram Railway Station,KR PURAM,OPPOSITE OF BRIDGE"}]
  },
  {
    "route_no": "507B",
    "distance": "31 KM",
    "origin": "K R Puram",
    "destination": "Peenya 2nd stage",
    "departure_from_origin": "05:45,  07:25,  08:15,  09:05,  09:55,  11:10,  12:00,  13:40,  15:20,  16:35,  17:25,  18:15,  19:05,  19:55,  22:00",
    "arrival_at_origin": "07:20, 08:10, 09:00, 09:50, 10:40, 11:55, 13:35, 15:15, 16:05, 16:55, 18:10, 19:00, 19:50, 21:30, 23:15",
    "departure_from_destination": "05:45, 06:35, 07:25, 08:15, 09:05, 10:20, 12:00, 13:40, 14:30, 15:20, 16:35, 17:25, 18:15, 19:55, 22:00",
    "arrival_at_destination": "07:20,  09:00,  09:50,  10:40,  11:30,  12:45,  13:35,  15:15,  16:55,  18:10,  19:00,  19:50,  20:40,  21:25,  23:15",
    "map_json_content": [{"busstop": "K R Puram"}, {"busstop": "NTTF"}, {"busstop": "Jalahalli Cross"}, {"busstop": "S R S Jalahalli Cross"}, {"busstop": "Alisda,JALAHALLI,BESIDE MILITARY GATE"}, {"busstop": "BEL Circle"}, {"busstop": "Devi Nagara,LOTTEGOLLAHALLI,BESIDE CHOWDESHWARI TEMPLE"}, {"busstop": "Hebbala Bridge,HEBBALA,OPPOSITE OF GAYATHRI LAKE FRONT"}, {"busstop": "Veeranna Palya,VEERANNAPALYA, NAGAVARA,OPPOSITE OF INDIAN OIL PETROL BUNK"}, {"busstop": "Nagavara Junction,NAGAVARA,IN FRONT OF HOTEL REDDYS RESTAURANT, J.B.J.COMPLEX"}, {"busstop": "Kalyananagara Bus Stand,KALYANA NAGARA,OPPOSITE OF PANASONIC SHOW ROOM"}, {"busstop": "Babusab Palya,KALYANA NAGARA,IN FRONT OF HOTEL LITTLE IMPERIAL"}, {"busstop": "B Channasandra,Ramamurthi Nagara,Bridge By Pass"}, {"busstop": "Ramamurthinagar Police Station,RAMAMURTHI NAGARA,IN FRONT OF POLICE STATION"}, {"busstop": "KR Puram"}, {"busstop": "Peenya 2nd stage,PEENYA 2ND STAGE,IN FRONT OF M.P.P.TEHNOLOGIES PVT LTD"}]
  },
  {
    "route_no": "510A",
    "distance": "27.6 KM",
    "origin": "BANASHANKARI TTMC",
    "destination": "BANASHANKARI TTMC",
    "departure_from_origin": "06:30,  06:55,  07:20,  07:45,  08:10,  08:20,  08:35,  09:00,  09:25,  10:00,  10:15,  10:40,  11:05,  11:30,  11:40,  11:55,  12:20,  12:45,  13:10,  13:45,  14:20,  14:45,  15:25,  15:30,  15:50,  16:00,  16:50,  17:30,  17:55,  18:05,  18:30,  19:10,  19:35,  19:55,  20:10,  21:15,  21:40",
    "arrival_at_origin": "08:05, 08:30, 08:55, 09:20, 09:45, 09:55, 10:10, 10:35, 11:00, 11:35, 11:50, 12:15, 12:20, 13:05, 13:15, 13:20, 13:55, 14:15, 14:40, 15:20, 15:55, 16:20, 17:00, 17:25, 17:35, 18:25, 19:00, 19:05, 19:30, 19:50, 20:05, 20:45, 21:10, 21:30, 22:50, 23:15",
    "departure_from_destination": "06:30, 06:55, 07:20, 07:45, 08:10, 08:20, 08:35, 09:00, 09:25, 10:00, 10:15, 10:40, 11:05, 11:30, 11:40, 11:55, 12:20, 12:45, 13:10, 13:45, 14:20, 14:45, 15:25, 15:30, 15:50, 16:00, 16:50, 17:30, 17:55, 18:05, 18:30, 19:10, 19:35, 19:55, 20:10, 21:15, 21:40",
    "arrival_at_destination": "08:05,  08:30,  08:55,  09:20,  09:45,  09:55,  10:10,  10:35,  11:00,  11:35,  11:50,  12:15,  12:20,  13:05,  13:15,  13:20,  13:55,  14:15,  14:40,  15:20,  15:55,  16:20,  17:00,  17:25,  17:35,  18:25,  19:00,  19:05,  19:30,  19:50,  20:05,  20:45,  21:10,  21:30,  22:50,  23:15",
    "map_json_content": [{"busstop": "BANASHANKARI TTMC"}, {"busstop": "BANASHANKARI TTMC"}]
  },
  {
    "route_no": "600",
    "distance": "117 KM",
    "origin": "BANASHANKARI TTMC",
    "destination": "BANASHANKARI TTMC",
    "departure_from_origin": "05:20,  05:30,  06:00,  08:00,  08:05,  08:15,  08:40,  12:35,  13:05,  13:45,  14:40,  15:15,  15:30,  15:40,  15:45,  18:45",
    "arrival_at_origin": "10:30, 10:35, 11:00, 13:00, 13:05, 13:15, 13:40, 17:35, 18:05, 18:45, 19:40, 20:15, 20:30, 20:40, 20:45, 23:30",
    "departure_from_destination": "05:20, 05:30, 06:00, 08:00, 08:05, 08:15, 08:40, 12:35, 13:05, 13:45, 14:40, 15:15, 15:30, 15:40, 15:45, 18:45",
    "arrival_at_destination": "10:30,  10:35,  11:00,  13:00,  13:05,  13:15,  13:40,  17:35,  18:05,  18:45,  19:40,  20:15,  20:30,  20:40,  20:45,  23:30",
    "map_json_content": [{"busstop": "BANASHANKARI TTMC"}, {"busstop": "Sangam Circle,JAYANAGARA 8TH BLOCK,BESIDE INDIAN TYRE CENTER"}, {"busstop": "Jayanagara 5th Block,JAYANAGARA 5TH BLOCK,BESIDE GRIHA VAIBHAVA FAMILY SHOP"}, {"busstop": "Marenahalli Petrol Bunk,PATTABHIRAMA NAGARA,BESIDE AKKA MAHADEVI PARK"}, {"busstop": "Ragigudda,JAYANAGARA 9TH BLOCK,BESIDE RAGHAVENDRA UPAHARA"}, {"busstop": "Jayadeva Hospital,JAYANAGARA 9TH BLOCK,HEALTHY INTERNATIONAL HOMEOPATHY"}, {"busstop": "MICO Layout,BTM LAYOUT 1ST STAGE"}, {"busstop": "BTM water Tank,BTM LAYOUT,IN FRONT OF CORPORATION BANK"}, {"busstop": "Udupi Garden 16th Main,BTM LAYOUT,BESIDE BANGLOR ONE CENTER"}, {"busstop": "BTM Layout Bus Stop,BTM LAYOUT 2ND STAGE,IN FROUNT OF KUVEMPUNAGRA BUS STAND"}, {"busstop": "Central Silk Board,BTM LAYOUT MADIWALA,OPPOSITE OF CENTRAL SILK BOARD"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Hale Chandapura,ATTIBELE HOBLI,ANEKAL TALUKU,IN FRONT OF SHAND PIPE INDUSTRY PVT.LTD."}, {"busstop": "Thirumagondanahalli Cross,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF BAGAWAN SRI RAMANAMAHARISHI ASHRAM"}, {"busstop": "Neraluru Gate,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF NERALURU GRAMA PANCHAYAT OFFICE"}, {"busstop": "Guddatti Gate,NERALURU POST,OPPOSITE OF SHASHANK TOWERS"}, {"busstop": "Guest Line Hotel,ATTIBELE INDUSTRIAL AREA,IN FRONT OF SRI VEERANJANEYA SWAMI TEMPLE"}, {"busstop": "Yadavanahalli Gate,ATTIBELE HOBLI,IN FRONT OF SYNDICATE BANK"}, {"busstop": "Attibele,ANEKAL TALUKU,IN FRONT OF SRI RAGHAVA SAGARA HOTEL"}, {"busstop": "Jigala cross,ATTIBELE,OPPOSITE OF MAYURA BAKERY & SWEETS"}, {"busstop": "Indlubele,ATTIBELE HOBLI,OPPOSITE OF GOVT. JUNIOR PRIMARY SCHOOL"}, {"busstop": "Bidaraguppa,BIDARAGUPPE,ATTIBELE HOBLI,OPPOSITE OF GOVT.PRIMARY SCHOOL"}, {"busstop": "Silk Form,MEDAHALLI,BIRAGUPPE POST,IN FRONT OF SRINIVAS INDUSTRIES"}, {"busstop": "Medahalli,SARJAPURA HOBLI,OPPOSITE OF MILK PRODUCT CO-OPERATIVE SOCIETY"}, {"busstop": "Tyavakanahalli,SARJAPURA HOBLI,NEAR S.V.S. PROVISION STORE"}, {"busstop": "Exide Factory,BILLAPURA, SARJAPURA HOBLI,OPPOSITE OF SHRI BASAVANNA TEMPLE"}, {"busstop": "Billapura,SARJAPURA, HOBLI,OPPOSITE OF GOVT. PRIMARY SCHOOL"}, {"busstop": "boorugunte"}, {"busstop": "Garments,SARJAPURA,IN FRONT OF SILVER CREST CLOTHING PVT.LTD."}, {"busstop": "Sarjapura,POLICE STATION"}, {"busstop": "Sarjapura Bus Stand"}, {"busstop": "Sompura Gate"}, {"busstop": "Kristal Apartment Sarjapura road"}, {"busstop": "Yamare"}, {"busstop": "Chambenahalli"}, {"busstop": "Chowdadevanahalli"}, {"busstop": "Dommasandra"}, {"busstop": "Dommasandra Circle,DOMMASANDRA,IN FRONT OF AVADHOOTH SHRI GURU GOVARDHAN SWAMI ASHRAM"}, {"busstop": "Green Wood School,HEGGONDANA HALLI, GUNJURU POST,OPPOSITE OF GREEN WOOD HIGH SCHOOL"}, {"busstop": "Heggondanhalli,GUNJURU,IN FRONT OF MILK PRODUCT CO-OPERATIVE SOCIETY"}, {"busstop": "Devasthana,GUNJURU,OPPOSITE OF SHANESHWARA TEMPLE"}, {"busstop": "Gunjoor,GUNJURU,IN FRONT OF ASWATHA  KATTE"}, {"busstop": "Vinayak Nagara,GUNJURU,J.P. PALACE(RIGHT SIDE)"}, {"busstop": "K K School,VARTURU,IN FRONT OF K.K SCHOOL"}, {"busstop": "Varthuru,VARTURU,BESIDE ANJANEYA TEMPLE(RIGHT SIDE)"}, {"busstop": "Varthoor College,VARTURU,IN FRONT OF  GOVT.COLLEGE VARTURU"}, {"busstop": "Varthuru Kodi"}, {"busstop": "Brook Bond"}, {"busstop": "White Field Post Office,WHITEFIELD,BESIDE VASWANI PINNACLE(LEFT SIDE)"}, {"busstop": "Old Sai Baba Hospitals"}, {"busstop": "Munish Hospital"}, {"busstop": "Hope Form,WHITEFIELD,BESIDE CORPORATION BANK ATM"}, {"busstop": "B P L,WHITEFIELD,BESIDE CINEMA HALL"}, {"busstop": "ITPL,WHITEFIELD,IN FRONT OF G.R.TECH PARK"}, {"busstop": "ITPL,WHITEFIELD,IN FRONT OF PARK SQUARE I.T.P.L."}, {"busstop": "Pattandur Agrahara Gate,WHITEFIELD,IN FRONT OF DAN HOSPITALITY INDIA PVT . LTD"}, {"busstop": "Big Bazaar,OPPOSITE OF PRESTIGE SHANTINIKETAN"}, {"busstop": "Rajapalya,IN FRONT OF PUNJAB NATIONAL BANK"}, {"busstop": "Hoodi,WARD NO.54,OPPOSITE OF B.B.M.P.SURVEYS POINT"}, {"busstop": "Bhorka Steel,GARUDACHAR PALYA,OPPOSITE OF ABB. BHORUKA TECH PARK"}, {"busstop": "Garudachar Palya,HOODI,OPPOSITE OF XYLEM AIR BUS"}, {"busstop": "Singayyana Palya,HOODI,IN FRONT OF GEARS & PINIONS PVT LTD"}, {"busstop": "MAHADEVAPURA,HOODI,OPPOSITE OF SRI SATHYA KALYANA MANTAPA"}, {"busstop": "B Narayanapura,DOORAVANI NAGARA,IN FRONT OF SRI MANJUNATHA STEEL ALLOYS"}, {"busstop": "KR Puram Railway Station,KR PURAM,OPPOSITE OF BRIDGE"}, {"busstop": "Tin Factory"}, {"busstop": "Jn of Kasturi Nagara,KASTURI NAGARA,BESIDE SHRI SHANTI TOWER"}, {"busstop": "BChannasandra,RAMAMURTHY NAGARA,UNDER PASS ENTRANCE"}, {"busstop": "Vijaya Bank Colony,DODDA BANASAWADI,OPPOSITE OF CACHE FURNITURES LIMITED"}, {"busstop": "Horamabu petrol bunk,BANASAWADI,OPPOSITE OF UDUPI SAGAR HOTEL"}, {"busstop": "Babusab Palya,KALYANA NAGARA,IN FRONT OF SHRI R.V.PLAZA"}, {"busstop": "80 Feet Road Kalyan Nagara,KALYANA NAGARA,OPPOSITE OF SATISH SAGAR HOTEL"}, {"busstop": "Kalyana Nagara,KALYANA NAGARA,OPPOSITE OF INDO ASIAN ACADEMY DEGREE COLLEGE"}, {"busstop": "Jn of Hennur Cross,HENNURU,OPPOSITE OF NAVAJEEVA ASHRAM, NEW LIFE COLLEGE"}, {"busstop": "Jn of Nagavara,NAGAVARA,IN FRONT OF RASI TVS SERVICE CENTER"}, {"busstop": "Manyatha Tech Park,NAGAVARA,OPPOSITE OF IBM MANYATA COMPANY"}, {"busstop": "Veeranna Palya,NAGAVARA,OPPOSITE OF UDUPI UPHAR HOTEL"}, {"busstop": "Kempapura,HEBBALA,OPPOSITE OF SHRI BHAVANI ENTERPRISES"}, {"busstop": "Hebbal,HEBBALA,BESIDE PITTY SHOP"}, {"busstop": "Bhadrappa Layout,BHADRAPPA LAYOUT,BESIDE OPEN AREA"}, {"busstop": "Devi Nagara,LOTTEGOLLAHALLI,BESIDE OPEN AREA"}, {"busstop": "Kuvempu Circle,JALAHALLI,BESIDE A.G.N.ELECTRICALS"}, {"busstop": "BEL Circle,JALAHALLI,BESIDE INDANE MOHAN GAS SERVICE"}, {"busstop": "Muthyalanagara,JALAHALLI,BESIDE KIRAN SUPER BAZAAR"}, {"busstop": "Bakery,JALAHALLI,BESIDE KRISHNA BAKERY"}, {"busstop": "Jalahalli Village,JALAHALLI,BESIDE OPEN AREA"}, {"busstop": "Alisda,JALAHALLI,BESIDE MILITARY GATE"}, {"busstop": "Goragunte Palya"}, {"busstop": "Reliance Petrol Bunk Guragunte palya,GORAGUNTEPALYA,OPPOSITE OF RELIANCE PETROL BUNK"}, {"busstop": "Foreman Training Insititue,GORAGUNTEPALYA,OPPOSITE OF MODERN BREAD FACTORY"}, {"busstop": "Kanteerava Studio,GORAGUNTEPALYA,BESIDE PETROL BUNK"}, {"busstop": "Rajkumar Samadhi"}, {"busstop": "Muneshwaranagara Nandini Layout,NANDINI LAYOUT,IN FRONT OF RANGANATHA SWAMY KABBINA MANDI"}, {"busstop": "Laggere Bridge,NARASHIMA SWAMY LAYOUT, LAGGERE,IN FRONT OF KADAMBA BAR AND RESTAURANT"}, {"busstop": "Lourdhubhai Kalyana mantapa,PREMA NAGARA,IN FRONT OF BENAKA BAR & RESTAURANT"}, {"busstop": "Summanahalli Magadi Road,SUMANAHALLI,UNDER THE FLYOVER"}, {"busstop": "Kottige Palya Magadi Road"}, {"busstop": "Vokkaligara School,KOTTIGEPALYA,OPPOSITE OKKALIGARASANGA SCHOOL, SRIGANDHA KAVALU"}, {"busstop": "Nagarabhavi BDA Complex,NAGARABHAVI 2ND STAGE,BESIDE BDA COMPLEX NAGARABHAVI"}, {"busstop": "Aladamara Papareddy palya,NAGARABHAVI 2ND STAGE,BESIDE ALANKAR TILES & SANITARY SHOP"}, {"busstop": "Papareddy Palya,PAPAREDDY PALYA,OPPOSITE OF SHARADA TIMBERS"}, {"busstop": "Deepa Complex,ITI LAYOUT PAPAREDDY PALYA,OPPOSITE OF PETROL BUNK"}, {"busstop": "Kengunte Ambedkar College,KENGUNTE, MALLATHAHALLI,BESIDE AMBEDKAR COLLEGE"}, {"busstop": "Kengunte,KENGUNTE, MALLATHAHALLI,OPPOSITE OF MANJUSHREE UPAHARA"}, {"busstop": "Mallathahalli Cross,MALLATHAHALLI,OPPOSITE OF BHAGAVAN BUDDA HOMEOPATHIC MEDICAL COLLEGE"}, {"busstop": "University Quarters,JNANABHARATHI,BESIDE UNIVERSITY QUARTERS"}, {"busstop": "PVP Shool,JNANAGANGA NAGARA,BESIDE P.V.P.SCHOOL"}, {"busstop": "Mariyappana Palya,MARIYAPPANA PALYA,OPPOSITE OF DODDAMMA TEMPLE"}, {"busstop": "Kenchanapura Cross,NAGADEVANAHALLI,OPPOSITE OF H.P.PETROL BUNK"}, {"busstop": "Nagadevanahalli RR Temple,NAGADEVANAHALLI,BESIDE SRI KRUPA EDUCATION CENTER & SS TILES SANITARY WARE"}, {"busstop": "Shirke KHB Quarters"}, {"busstop": "Church,KENGERI UPANAGARA"}, {"busstop": "Hoysala Circle Kengeri Satellite Town,KENGERI UPANAGARA"}, {"busstop": "Kengeri Satalite Town Society"}, {"busstop": "Railway Station Kengeri"}, {"busstop": "Jn of Kommaghatta Road"}, {"busstop": "Ganesha Temple"}, {"busstop": "Kengeri Police Station"}, {"busstop": "Kengeri TTMC"}, {"busstop": "Mylasandra Gate"}, {"busstop": "Dubasi Palya Cross"}, {"busstop": "RV College"}, {"busstop": "Jayaram Das Factory"}, {"busstop": "Bangalore University Gate Mysore Road"}, {"busstop": "Rajarajeshwarinagara Gate"}, {"busstop": "BWSSB Quarters"}, {"busstop": "Nayandahalli"}, {"busstop": "Jn of Nayandahalli"}, {"busstop": "Virabhadranagara Cross,VEERABHADRA NAGARA,BESIDE SRINIVASA BAR & RESTAURANT"}, {"busstop": "PES College"}, {"busstop": "Hosakerehalli Junction,BANASHANKARI 3RD STAGE DWARAKA NAGARA,OPPOSITE OF R.K.COLOUR LAB"}, {"busstop": "Hosakerehalli Cross,BANASHANKARI 3RD STAGE,OPPOSITE OF N.C.E.R.T."}, {"busstop": "Janatha Bazar,BANASHANKARI 3RD STAGE,OPPOSITE OF SHIVA SHANKARA SABHANGANA"}, {"busstop": "Banashankari 3rd Stage 3rd Phase,BANASHANKARI 3RD STAGE,IN FRONT OF LITTLE MILLENIUM NURSERY SCHOOL"}, {"busstop": "Kamakya Talkies,BANASHANKARI 3RD STAGE,IN FRONT OF BMTC DEPOT-13"}, {"busstop": "Devegowda Petrol Bunk,BANASHANKARI 3RD STAGE,BESIDE BIG MEGA MART"}, {"busstop": "Kempegowda Medical  Hospital,BANASHANKARI 3RD STAGE,OPPOSITE OF KEMPEGOWDA MEDICAL COLLEGE"}, {"busstop": "Indira Nursing Home Tyagarajanagar,BANASHANKARI 2ND STAGE,BESIDE INDIRA NURSING HOME"}, {"busstop": "Post Office,BANASHANKARI, 2ND STAGE,OPPOSITE POST OFFICE, BANASHANKARI, 2ND STAGE"}, {"busstop": "Monotype Corporation"}, {"busstop": "Cauvery Nagara,BANASHANKRI 2ND STAGE KAVERI NAGARA,BESIDE BANASHANKARI STORES"}, {"busstop": "Yarab Nagara,BANASHANKRI 2ND STAGE KAVERI NAGARA,BESIDE BRAHMALINGESHWARA CONDIMENTS"}, {"busstop": "BANASHANKARI TTMC"}]
  },
  {
    "route_no": "600A",
    "distance": "31.1 KM",
    "origin": "MCTC Bus Stand",
    "destination": "Chandapura",
    "departure_from_origin": "09:55,  18:30",
    "arrival_at_origin": "09:50, 18:25",
    "departure_from_destination": "08:20, 17:00",
    "arrival_at_destination": "11:25,  19:45",
    "map_json_content": [{"busstop": "MCTC Bus Stand,TIMBER YARD LAYOUT,IN FRONT OF GANESH BAKERY"}, {"busstop": "Telecom Colony Cross,RAGHAVA BLOCK,BESIDE DEEPA CONDIMENTS"}, {"busstop": "Muneshwara Block,MUNESHWARA BLOCK,BESIDE SOHAN ENTERPRISES"}, {"busstop": "Nagendra Block,BANASHANKARI 3RD STAGE NAGENDRA BLOCK,BESIDE SWASTIK HARD WARE"}, {"busstop": "Bank Colony,BANASHANKARI 1ST STAGE,IN FRONT OF PADMASHREE CLINIC"}, {"busstop": "Seetha Circle,BANASHANKARI 1ST STAGE,IN FRONT OF SBI BANK ATM"}, {"busstop": "Hosakerehalli Cross,BANASHANKARI 3RD STAGE,IN FRONT OF CHANDAN HARDWERE"}, {"busstop": "Janatha Bazar,BANASHANKARI 3RD STAGE,OPPOSITE OF SHIVA SHANKARA SABHANGANA"}, {"busstop": "Banashankari 3rd Stage 3rd Phase,BANASHANKARI 3RD STAGE,IN FRONT OF LITTLE MILLENIUM NURSERY SCHOOL"}, {"busstop": "Devegwada Petrol Bunk,BANASHANKARI 2ND STAGE,BESIDE BESCOM"}, {"busstop": "Kadirenahalli Park,BANASHANKRI 2ND STAGE KAVERI NAGARA,BESIDE HANUMAN MANDIR"}, {"busstop": "kadirenahalli cross,BANASHANKRI 2ND STAGE TEACHERS COLONY,BESIDE S.A.F00T WEAR"}, {"busstop": "BANASHANKARI TTMC"}, {"busstop": "Sangam Circle,JAYANAGARA 8TH BLOCK,BESIDE INDIAN TYRE CENTER"}, {"busstop": "Jayanagara 5th Block,JAYANAGARA 5TH BLOCK,BESIDE KRISHNA SEVA ASHRAMA HOSPITAL"}, {"busstop": "Marenahalli Petrol Bunk,PATTABHIRAMA NAGARA,BESIDE AKKA MAHADEVI PARK"}, {"busstop": "Ragigudda,JAYANAGARA 9TH BLOCK,OPPOSITE OF CENTRAL MALL"}, {"busstop": "Jayanagara 9th Block East"}, {"busstop": "MICO Layout,BTM LAYOUT 1ST STAGE"}, {"busstop": "BTM water Tank,BTM LAYOUT,IN FRONT OF CORPORATION BANK"}, {"busstop": "Udupi Garden 16th Main,BTM LAYOUT,BESIDE BANGLOR ONE CENTER"}, {"busstop": "BTM Layout Bus Stop,BTM LAYOUT 2ND STAGE,IN FROUNT OF KUVEMPUNAGRA BUS STAND"}, {"busstop": "Central Silk Board,BTM LAYOUT MADIWALA,OPPOSITE OF CENTRAL SILK BOARD"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi,HEBBAGODI,OPPOSITE OF SHRI PRASANNA ANJANEYA SWAMI TEMPLE"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}]
  },
  {
    "route_no": "600C",
    "distance": "20.5 KM",
    "origin": "Banashankari Bus Station",
    "destination": "Chandapura",
    "departure_from_origin": "06:00,  06:25,  06:35,  07:05,  07:30,  07:35,  07:45,  08:10,  08:40,  08:45,  09:15,  09:25,  09:45,  09:55,  10:00,  10:45,  10:50,  11:25,  11:35,  12:30,  12:45,  13:25,  13:35,  14:15,  14:20,  14:45,  15:05,  15:15,  15:35,  15:45,  16:10,  16:25,  16:40,  16:55,  17:10,  17:25,  17:45,  18:10,  18:20,  18:25,  18:45,  19:00,  19:30,  20:00,  20:55,  21:05,  21:35,  22:05",
    "arrival_at_origin": "05:55, 06:30, 07:00, 07:30, 08:05, 08:35, 08:40, 09:10, 09:20, 09:40, 09:50, 09:55, 10:40, 10:45, 11:15, 11:20, 11:30, 11:45, 12:15, 12:25, 12:45, 12:50, 13:20, 13:30, 14:15, 14:35, 15:10, 15:30, 15:40, 16:05, 16:20, 16:35, 16:50, 17:05, 17:20, 17:40, 18:05, 18:15, 18:40, 18:55, 19:20, 19:25, 19:55, 20:25, 20:30, 20:35, 20:50, 21:05, 21:35, 22:30",
    "departure_from_destination": "05:00, 05:30, 06:00, 06:30, 07:05, 07:35, 07:40, 08:10, 08:20, 08:40, 08:45, 08:50, 09:40, 09:45, 10:15, 10:25, 10:30, 10:45, 11:15, 11:25, 11:40, 11:50, 12:20, 12:30, 13:10, 13:35, 14:00, 14:30, 14:40, 15:05, 15:20, 15:30, 15:50, 16:05, 16:20, 16:30, 16:55, 17:05, 17:15, 17:40, 17:55, 18:15, 18:25, 18:55, 19:25, 19:30, 19:50, 20:05, 20:35, 21:30",
    "arrival_at_destination": "07:00,  07:30,  07:35,  08:05,  08:35,  08:40,  08:45,  09:10,  09:40,  09:45,  10:15,  10:20,  10:25,  10:45,  10:55,  11:10,  11:45,  11:50,  12:25,  12:40,  13:30,  13:55,  14:25,  14:35,  15:15,  15:25,  15:45,  16:05,  16:15,  16:25,  16:35,  16:45,  17:10,  17:25,  17:45,  17:55,  18:10,  18:25,  18:55,  19:20,  19:25,  19:45,  20:00,  20:30,  21:00,  21:55,  22:10,  22:35,  23:05",
    "map_json_content": [{"busstop": "Banashankari Bus Station"}, {"busstop": "Sangam Circle,JAYANAGARA 8TH BLOCK,BESIDE INDIAN TYRE CENTER"}, {"busstop": "Jayanagara 5th Block,JAYANAGARA 5TH BLOCK,BESIDE KRISHNA SEVA ASHRAMA HOSPITAL"}, {"busstop": "Marenahalli Petrol Bunk,PATTABHIRAMA NAGARA,BESIDE AKKA MAHADEVI PARK"}, {"busstop": "Ragigudda,JAYANAGARA 9TH BLOCK,OPPOSITE OF CENTRAL MALL"}, {"busstop": "Jayadeva Hospital,JAYANAGARA 9TH BLOCK,HEALTHY INTERNATIONAL HOMEOPATHY"}, {"busstop": "MICO Layout,BTM LAYOUT 1ST STAGE"}, {"busstop": "BTM water Tank,BTM LAYOUT,IN FRONT OF CORPORATION BANK"}, {"busstop": "Udupi Garden 16th Main,BTM LAYOUT,BESIDE BANGLOR ONE CENTER"}, {"busstop": "BTM Layout Bus Stop,BTM LAYOUT 2ND STAGE,IN FROUNT OF KUVEMPUNAGRA BUS STAND"}, {"busstop": "Central Silk Board,BTM LAYOUT MADIWALA,OPPOSITE OF CENTRAL SILK BOARD"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi,HEBBAGODI,OPPOSITE OF SHRI PRASANNA ANJANEYA SWAMI TEMPLE"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}]
  },
  {
    "route_no": "600CA",
    "distance": "32.1 KM",
    "origin": "BANASHANKARI TTMC",
    "destination": "Anekal",
    "departure_from_origin": "05:45,  07:05,  07:35,  08:00,  08:35,  10:05,  10:35,  11:00,  14:25,  15:15,  16:55,  17:30,  18:15,  20:40,  21:15",
    "arrival_at_origin": "07:00, 07:30, 08:30, 10:00, 10:30, 10:55, 11:55, 14:20, 16:50, 17:25, 18:10, 18:55, 20:10, 20:50, 21:50",
    "departure_from_destination": "05:45, 06:15, 07:05, 08:35, 09:05, 09:30, 10:30, 12:55, 15:25, 16:00, 16:45, 17:30, 18:40, 19:25, 20:20",
    "arrival_at_destination": "07:00,  08:30,  09:00,  09:25,  10:00,  11:30,  12:00,  12:25,  15:50,  16:40,  18:20,  18:55,  19:40,  22:05,  22:30",
    "map_json_content": [{"busstop": "BANASHANKARI TTMC"}, {"busstop": "Sangam Circle,JAYANAGARA 8TH BLOCK,BESIDE INDIAN TYRE CENTER"}, {"busstop": "Jayanagara 5th Block,JAYANAGARA 5TH BLOCK,BESIDE KRISHNA SEVA ASHRAMA HOSPITAL"}, {"busstop": "Marenahalli Petrol Bunk,PATTABHIRAMA NAGARA,BESIDE AKKA MAHADEVI PARK"}, {"busstop": "Ragigudda,JAYANAGARA 9TH BLOCK,BESIDE RAGHAVENDRA UPAHARA"}, {"busstop": "Jayanagara 9th Block East"}, {"busstop": "MICO Layout,BTM LAYOUT 1ST STAGE"}, {"busstop": "Udupi Garden 16th Main,BTM LAYOUT,BESIDE BANGLOR ONE CENTER"}, {"busstop": "BTM Layout Bus Stop,BTM LAYOUT 2ND STAGE,IN FROUNT OF KUVEMPUNAGRA BUS STAND"}, {"busstop": "Central Silk Board,BTM LAYOUT MADIWALA,OPPOSITE OF CENTRAL SILK BOARD"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi,HEBBAGODI,OPPOSITE OF SHRI PRASANNA ANJANEYA SWAMI TEMPLE"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Igglur,CHANDAPURA POST & ANEKAL TALUK,BEHIND SRI VENUGOPAL SWAMY TEMPLE"}, {"busstop": "Ramakrishnapur gate ,ANEKAL TALUK,OPPOSITE OF SRI PRASANNA VENKATESHWARA SWAMY TEMPLE ARCH"}, {"busstop": "Marsoor gate ,ANEKAL TALUK,OPPOSITE OF BHARAT PETROL BUNK, CG CABLES & WIRES INDIA PRIVATE LIMITED"}, {"busstop": "Begadadevanahalli,ANEKAL TALUK,OPPOSITE OF GOVERNMENT PRIMARY SCHOOL"}, {"busstop": "Ahuddevanahalli gate ,ANEKAL TALUK,OPPOSITE OF M.G.B.CLASSIC LAYOUT"}, {"busstop": "Karpura Gate,KARPOORA ANEKAL TALUK,IN FRONT OF A.N.ELITE GARDEN"}, {"busstop": "Chikkegade cross,CHIKKA HOGODE GATE,OPPOSITE OF ALLIANCE UNIVERSITY"}, {"busstop": "Kawalu hosalli,ANEKAL TALUK,IN FRONT OF ANGANAWADI CENTER"}, {"busstop": "Anekal Circle,ANEKAL,IN FRONT OF HOTEL SRI SAI SAGAR"}, {"busstop": "Anekal ,ANEKAL,BUS STAND"}]
  },
  {
    "route_no": "600CF",
    "distance": "19.2 KM",
    "origin": "BANASHANKARI TTMC",
    "destination": "Electronic City Wipro Gate",
    "departure_from_origin": "05:30,  05:50,  06:10,  06:30,  07:05,  07:25,  07:45,  07:55,  08:05,  08:15,  08:25,  09:00,  09:20,  09:40,  09:50,  09:55,  10:10,  10:45,  11:20,  12:05,  12:30,  14:00,  14:20,  14:40,  14:50,  15:00,  15:20,  15:30,  15:55,  16:15,  16:35,  16:45,  16:55,  17:15,  17:25,  18:15,  18:35,  18:55,  19:15,  19:45,  20:10,  20:30,  20:50,  21:10,  21:35",
    "arrival_at_origin": "07:00, 07:20, 07:40, 08:00, 08:20, 08:55, 09:15, 09:35, 09:45, 09:50, 10:05, 10:15, 11:15, 11:35, 11:55, 12:00, 12:10, 12:25, 12:35, 13:05, 14:20, 14:55, 15:50, 16:10, 16:30, 16:40, 16:50, 17:10, 17:20, 18:10, 18:30, 18:50, 19:00, 19:10, 19:30, 19:40, 20:05, 20:25, 20:45, 21:05, 21:30, 22:00, 22:20, 22:40, 23:10",
    "departure_from_destination": "06:05, 06:25, 06:45, 07:05, 07:25, 08:00, 08:20, 08:40, 08:50, 09:00, 09:10, 09:20, 10:20, 10:40, 11:00, 11:10, 11:20, 11:30, 11:40, 12:15, 13:25, 14:00, 14:55, 15:15, 15:35, 15:45, 15:55, 16:15, 16:25, 17:15, 17:35, 17:55, 18:10, 18:15, 18:35, 18:45, 19:10, 19:30, 19:50, 20:10, 20:40, 21:05, 21:25, 21:45, 22:25",
    "arrival_at_destination": "06:20,  06:40,  07:00,  07:20,  07:55,  08:15,  08:35,  08:45,  08:55,  09:05,  09:15,  09:50,  10:10,  10:30,  10:40,  10:45,  11:00,  11:35,  12:10,  12:55,  13:20,  14:50,  15:10,  15:30,  15:40,  15:50,  16:10,  16:20,  16:45,  17:05,  17:25,  17:35,  17:45,  18:05,  18:15,  19:05,  19:25,  19:45,  20:05,  20:35,  21:00,  21:20,  21:40,  21:55,  22:20",
    "map_json_content": [{"busstop": "BANASHANKARI TTMC"}, {"busstop": "Sangam Circle,JAYANAGARA 8TH BLOCK,BESIDE INDIAN TYRE CENTER"}, {"busstop": "Jayanagara 5th Block,JAYANAGARA 5TH BLOCK,BESIDE KRISHNA SEVA ASHRAMA HOSPITAL"}, {"busstop": "Marenahalli Petrol Bunk,PATTABHIRAMA NAGARA,BESIDE AKKA MAHADEVI PARK"}, {"busstop": "Ragigudda,JAYANAGARA 9TH BLOCK,BESIDE RAGHAVENDRA UPAHARA"}, {"busstop": "Jayanagara 9th Block East"}, {"busstop": "MICO Layout,BTM LAYOUT 1ST STAGE"}, {"busstop": "BTM water Tank,BTM LAYOUT,IN FRONT OF CORPORATION BANK"}, {"busstop": "Udupi Garden 16th Main,BTM LAYOUT,BESIDE BANGLOR ONE CENTER"}, {"busstop": "BTM Layout Bus Stop,BTM LAYOUT 2ND STAGE,IN FROUNT OF KUVEMPUNAGRA BUS STAND"}, {"busstop": "Electronic City Wipro Gate"}]
  },
  {
    "route_no": "361C",
    "distance": "38 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Anekal",
    "departure_from_origin": "05:20,  05:30,  05:40,  06:00,  06:30,  06:40,  07:00,  07:30,  07:40,  07:50,  08:00,  08:05,  08:20,  08:30,  08:40,  09:00,  09:20,  09:40,  09:50,  10:20,  10:50,  11:20,  11:30,  11:50,  12:55,  13:45,  14:30,  15:10,  15:25,  15:45,  15:55,  16:05,  16:25,  17:10,  17:30,  18:35,  19:05,  19:35,  19:55,  20:15,  20:25,  20:35,  20:40,  20:55,  21:45",
    "arrival_at_origin": "05:25, 06:35, 07:20, 07:35, 07:55, 08:15, 08:35, 08:55, 09:05, 09:15, 09:35, 09:45, 10:15, 10:30, 10:45, 11:00, 11:15, 11:25, 11:35, 11:45, 11:55, 12:10, 12:50, 15:05, 15:20, 15:50, 16:40, 17:00, 18:20, 18:30, 18:55, 19:00, 19:25, 19:30, 19:45, 20:05, 20:20, 20:25, 20:35, 21:20, 21:30, 21:45, 22:05, 22:40, 23:05",
    "departure_from_destination": "04:00, 04:50, 05:35, 05:50, 06:10, 06:30, 06:50, 07:10, 07:20, 07:30, 07:50, 08:00, 08:30, 08:45, 09:00, 09:15, 09:30, 09:40, 09:50, 10:00, 10:10, 10:30, 10:55, 13:20, 13:30, 14:05, 14:55, 15:15, 16:30, 16:45, 17:15, 17:20, 17:40, 18:00, 18:20, 18:35, 18:40, 18:50, 19:25, 19:35, 19:45, 20:00, 20:25, 20:55, 21:25",
    "arrival_at_destination": "07:05,  07:15,  07:25,  07:45,  07:55,  08:15,  08:25,  08:40,  09:10,  09:25,  09:35,  09:45,  10:05,  10:25,  10:45,  11:05,  11:25,  11:35,  12:05,  12:35,  13:05,  13:15,  13:35,  14:50,  15:35,  16:15,  16:25,  16:50,  17:10,  17:30,  17:40,  17:50,  18:10,  18:55,  19:15,  20:20,  20:50,  21:20,  21:40,  22:00,  22:20,  22:25,  22:40,  23:20",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi,HEBBAGODI,OPPOSITE OF SHRI PRASANNA ANJANEYA SWAMI TEMPLE"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Depot 32,CHANDAPURA POST & ANEKAL TALUK,BESIDE B.M.T.C.DEPARTMENT 32"}, {"busstop": "Igglur,CHANDAPURA POST & ANEKAL TALUK,BEHIND SRI VENUGOPAL SWAMY TEMPLE"}, {"busstop": "Ramakrishnapur gate ,ANEKAL TALUK,OPPOSITE OF SRI PRASANNA VENKATESHWARA SWAMY TEMPLE ARCH"}, {"busstop": "Marsoor gate ,ANEKAL TALUK,OPPOSITE OF BHARAT PETROL BUNK, CG CABLES & WIRES INDIA PRIVATE LIMITED"}, {"busstop": "Begadadevanahalli,ANEKAL TALUK,OPPOSITE OF GOVERNMENT PRIMARY SCHOOL"}, {"busstop": "Ahuddevanahalli gate ,ANEKAL TALUK,IN FRONT OF M.G.B.CLASSIC LAYOUT"}, {"busstop": "Karpura Gate,KARPOORA ANEKAL TALUK,OPPOSITE OF A.N.ELITE GARDEN"}, {"busstop": "Chikkegade cross,CHIKKA HOGODE GATE,IN FRONT OF ALLIANCE UNIVERSITY"}, {"busstop": "Choudireddy Circle,KAVALA HOSAHALLI ANEKAL TALUK,BESIDE SRI YALLAMMADEVI TEMPLE"}, {"busstop": "Kawalu hosalli,ANEKAL TALUK,IN FRONT OF ANGANAWADI CENTER"}, {"busstop": "Anekal Circle,ANEKAL,IN FRONT OF HOTEL SRI SAI SAGAR"}, {"busstop": "Anekal ,ANEKAL,BUS STAND"}]
  },
  {
    "route_no": "361K",
    "distance": "29 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Naganayakanahalli",
    "departure_from_origin": "06:35,  14:10,  20:35",
    "arrival_at_origin": "06:30, 10:05, 20:00",
    "departure_from_destination": "05:00, 08:35, 18:35",
    "arrival_at_destination": "08:05,  15:30,  22:00",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi,HEBBAGODI,OPPOSITE OF SHRI PRASANNA ANJANEYA SWAMI TEMPLE"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Depot 32,CHANDAPURA POST & ANEKAL TALUK,BESIDE B.M.T.C.DEPARTMENT 32"}, {"busstop": "Igglur,CHANDAPURA POST & ANEKAL TALUK,BEHIND SRI VENUGOPAL SWAMY TEMPLE"}, {"busstop": "Ramakrishnapur gate ,ANEKAL TALUK,OPPOSITE OF SRI PRASANNA VENKATESHWARA SWAMY TEMPLE ARCH"}, {"busstop": "Marsoor gate ,ANEKAL TALUK,OPPOSITE OF BHARAT PETROL BUNK, CG CABLES & WIRES INDIA PRIVATE LIMITED"}, {"busstop": "Naganayakanahalli,ANEKAL TALUK,BESIDE GOVERNMENT SENIOR PRIMARY SCHOOL"}]
  },
  {
    "route_no": "362",
    "distance": "16.2 KM",
    "origin": "Shivajinagar Bus Station",
    "destination": "Vijaya Bank Layout",
    "departure_from_origin": "08:00,  10:10,  12:45,  15:40,  17:50,  20:20",
    "arrival_at_origin": "07:55, 10:05, 12:40, 15:35, 17:45, 20:20",
    "departure_from_destination": "06:55, 09:05, 11:40, 14:35, 16:45, 19:20",
    "arrival_at_destination": "09:00,  11:10,  13:45,  16:40,  18:50,  21:20",
    "map_json_content": [{"busstop": "Shivajinagar Bus Station"}, {"busstop": "MG Road "}, {"busstop": "Mayohall"}, {"busstop": "DSouza Circle"}, {"busstop": "Johnson Market"}, {"busstop": "Tollgate Adugodi"}, {"busstop": "Adugodi"}, {"busstop": "Adugodi Police Quarters"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahara"}, {"busstop": "Bommanahalli,MADHESHWARA NAGARA,BESIDE S.R.S.TRAVELS, BLACKBIRD GARMENTS"}, {"busstop": "Nayanappanahalli cross,BOMMANAHALLI CIRCLE,OPPOSITE OF BHARATH PETROLEUM BANK"}, {"busstop": "Viratnagara cross"}, {"busstop": "Kodichikkanahalli cross,BOMMANAHALLI KAVERI NAGARA,NEAR INDANE OFFICE"}, {"busstop": "Kodi Chikkanahalli"}, {"busstop": "Vijaya Bank Layout"}]
  },
  {
    "route_no": "362C",
    "distance": "14.5 KM",
    "origin": "Shivajinagar Bus Station",
    "destination": "Beguru",
    "departure_from_origin": "05:30,  05:45,  06:00,  06:20,  06:50,  07:00,  07:30,  07:50,  08:15,  08:30,  08:55,  09:00,  09:05,  09:10,  09:40,  10:25,  11:05,  11:15,  11:35,  11:45,  13:00,  13:40,  14:00,  14:15,  14:25,  14:45,  15:00,  15:10,  15:50,  16:05,  16:15,  16:25,  16:35,  17:05,  17:10,  18:20,  18:35,  18:40,  18:55,  19:10,  19:40,  19:45,  20:05,  20:45,  21:00,  21:10,  21:45,  22:15",
    "arrival_at_origin": "06:15, 06:40, 06:45, 07:25, 07:45, 08:05, 08:25, 08:50, 08:55, 09:00, 09:05, 09:35, 10:20, 10:35, 11:00, 11:10, 11:30, 11:40, 12:10, 12:55, 13:35, 13:50, 15:05, 15:45, 16:00, 16:10, 16:20, 16:30, 17:00, 17:05, 17:15, 17:40, 18:20, 18:30, 18:35, 18:50, 19:05, 19:35, 19:40, 20:00, 20:40, 20:45, 20:55, 21:40, 21:45, 22:00, 22:40",
    "departure_from_destination": "05:15, 05:40, 05:45, 06:30, 06:45, 07:05, 07:25, 07:50, 07:55, 08:00, 08:05, 08:35, 09:20, 09:30, 10:00, 10:10, 10:30, 10:40, 11:10, 11:55, 12:35, 12:50, 14:05, 14:45, 15:00, 15:15, 15:25, 15:30, 16:00, 16:05, 16:40, 16:45, 17:20, 17:30, 17:35, 17:50, 18:05, 18:35, 18:40, 19:00, 19:40, 19:45, 20:00, 20:45, 21:10, 21:50",
    "arrival_at_destination": "06:25,  06:40,  07:00,  07:20,  07:50,  08:00,  08:30,  09:00,  09:15,  09:30,  09:55,  10:00,  10:05,  10:10,  10:40,  11:25,  12:05,  12:10,  12:35,  12:45,  14:00,  14:40,  14:55,  15:10,  15:25,  15:45,  15:55,  16:00,  16:10,  16:50,  17:05,  17:20,  17:25,  17:35,  18:05,  18:10,  19:20,  19:35,  19:40,  19:55,  20:10,  20:40,  20:45,  21:05,  21:35,  21:50,  22:00,  22:40,  23:05",
    "map_json_content": [{"busstop": "Shivajinagar Bus Station"}, {"busstop": "MG Road "}, {"busstop": "Mayohall"}, {"busstop": "DSouza Circle"}, {"busstop": "Johnson Market"}, {"busstop": "Tollgate Adugodi"}, {"busstop": "Adugodi"}, {"busstop": "Adugodi Police Quarters"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahara"}, {"busstop": "Bommanahalli,MADHESHWARA NAGARA,BESIDE S.R.S.TRAVELS, BLACKBIRD GARMENTS"}, {"busstop": "Hongansandra,VIRAT NAGARA,OPPOSITE OF LATHA TRADERS"}, {"busstop": "Dekkan ,HONGASANDRA,NEAR SHANTHISAGAR HOTEL"}, {"busstop": "Kallyanamantappa,HONGASANDRA,OPPOSITE OF BAKERY"}, {"busstop": "Tent ,BEGURU,OPPOSITE OF MANJUSHREE BAKERY"}, {"busstop": "Vijaya Bank"}, {"busstop": "Church"}, {"busstop": "aralimara"}, {"busstop": "Beguru"}]
  },
  {
    "route_no": "362F",
    "distance": "23.8 KM",
    "origin": "Vivekanagara",
    "destination": "Wipro gate",
    "departure_from_origin": "07:30",
    "arrival_at_origin": "18:15",
    "departure_from_destination": "17:05",
    "arrival_at_destination": "08:40",
    "map_json_content": [{"busstop": "Vivekanagara,VIVEKA NAGARA,BESIDE BUS STAND"}, {"busstop": "Vivekanagar Cross"}, {"busstop": "Jn Of Egipura"}, {"busstop": "NGV Gate"}, {"busstop": "Rajendranagar,RAJENDRANAGARA"}, {"busstop": "BMTC Depot-15"}, {"busstop": "Jn of 80 and 100 Feet Road,SONY"}, {"busstop": "Maharaja Hotel Koramangala"}, {"busstop": "Wipro Park Koramangala"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "14th Main HSR Layout,HSR LAYOUT,OPPOSITE OF RELIANCE AUTOZONE"}, {"busstop": "HSR Appartment,HSR LAYOUT,IN FRONT OF FEMHILL GARDENS APARTMENT"}, {"busstop": "Central Silk Board,MADIWALA,OPPOSITE OF BANK OF INDIA & FLYOVER"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konappana Agrahara"}, {"busstop": "Infosys Parking Lot"}, {"busstop": "BHEL"}, {"busstop": "Wipro gate ,ELECTRONIC CITY,OPPOSITE OF AMERICAN POWER CONVERSION INDIA PRIVATE LIMITED"}]
  },
  {
    "route_no": "362K",
    "distance": "34.7 KM",
    "origin": "Shivajinagar Bus Station",
    "destination": "Bandenallasandra",
    "departure_from_origin": "08:05,  15:35",
    "arrival_at_origin": "11:55, 19:25",
    "departure_from_destination": "10:15, 17:45",
    "arrival_at_destination": "09:45,  17:15",
    "map_json_content": [{"busstop": "Shivajinagar Bus Station"}, {"busstop": "Maniksha Pardeground,M.G.ROAD,BESIDE PARADE GROUND"}, {"busstop": "Mayohall"}, {"busstop": "DSouza Circle"}, {"busstop": "Johnson Market"}, {"busstop": "Anepalya"}, {"busstop": "Adugodi"}, {"busstop": "Adugodi Police Station"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi,HEBBAGODI,OPPOSITE OF SHRI PRASANNA ANJANEYA SWAMI TEMPLE"}, {"busstop": "Bommasandra Indl Area 4th Cross"}, {"busstop": "ARAVINDA LIMITED"}, {"busstop": "YARANDAHALLI GATE"}, {"busstop": "BIOCON"}, {"busstop": "O-MAX CIRCLE"}, {"busstop": "Kyalasanahalli,HULIMANGALA POST & JIGANI HUBLI,OPPOSITE OF VEENA PROVISION STORE"}, {"busstop": "Bandenallasandra,JIGANI HUBLI,OPPOSITE OF GOVERNMENT JUNIOR PRIMARY SCHOOL"}]
  },
  {
    "route_no": "362S",
    "distance": "36.9 KM",
    "origin": "Shivajinagar Bus Station",
    "destination": "Anekal",
    "departure_from_origin": "09:35,  13:00,  16:00",
    "arrival_at_origin": "09:30, 12:55, 15:55",
    "departure_from_destination": "08:00, 11:30, 14:30",
    "arrival_at_destination": "11:00,  14:25,  17:30",
    "map_json_content": [{"busstop": "Shivajinagar Bus Station"}, {"busstop": "MG Road "}, {"busstop": "Mayohall"}, {"busstop": "DSouza Circle"}, {"busstop": "Johnson Market"}, {"busstop": "Anepalya"}, {"busstop": "Adugodi"}, {"busstop": "Adugodi Police Quarters"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi,HEBBAGODI,OPPOSITE OF SHRI PRASANNA ANJANEYA SWAMI TEMPLE"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,ANEKAL TALUK,IN FRONT OF SWAMY VIVEKANANDA HIGH SCHOOL"}, {"busstop": "Surya city,CHANDAPURA,OPPOSITE OF K.H.B.ARCH"}, {"busstop": "Igglur,CHANDAPURA POST & ANEKAL TALUK,BEHIND SRI VENUGOPAL SWAMY TEMPLE"}, {"busstop": "Ramakrishnapur gate ,ANEKAL TALUK,OPPOSITE OF SRI PRASANNA VENKATESHWARA SWAMY TEMPLE ARCH"}, {"busstop": "Marsoor gate ,ANEKAL TALUK,OPPOSITE OF BHARAT PETROL BUNK, CG CABLES & WIRES INDIA PRIVATE LIMITED"}, {"busstop": "Begadadevanahalli,ANEKAL TALUK,OPPOSITE OF GOVERNMENT PRIMARY SCHOOL"}, {"busstop": "Ahuddevanahalli gate ,ANEKAL TALUK,OPPOSITE OF M.G.B.CLASSIC LAYOUT"}, {"busstop": "Karpura Gate,KARPOORA ANEKAL TALUK,IN FRONT OF A.N.ELITE GARDEN"}, {"busstop": "Chikkegade cross,CHIKKA HOGODE GATE,IN FRONT OF ALLIANCE UNIVERSITY"}, {"busstop": "Choudireddy Circle,KAVALA HOSAHALLI ANEKAL TALUK,BESIDE SRI YALLAMMADEVI TEMPLE"}, {"busstop": "Kawalu hosalli,ANEKAL TALUK,IN FRONT OF ANGANAWADI CENTER"}, {"busstop": "Anekal Circle,ANEKAL,IN FRONT OF HOTEL SRI SAI SAGAR"}, {"busstop": "Anekal ,ANEKAL,BUS STAND"}]
  },
  {
    "route_no": "363A",
    "distance": "16.1 KM",
    "origin": "Banashankari Bus Station",
    "destination": "Parappana Agrahara",
    "departure_from_origin": "08:10,  10:20,  12:45,  14:45,  17:10",
    "arrival_at_origin": "10:15, 12:40, 14:40, 17:05, 19:05",
    "departure_from_destination": "09:15, 11:45, 13:45, 16:10, 18:10",
    "arrival_at_destination": "09:10,  11:15,  13:40,  15:40,  18:05",
    "map_json_content": [{"busstop": "Banashankari Bus Station"}, {"busstop": "Parappana Agrahara,ELECTRONIC CITY POST,OPPOSITE OF SRI GANAPATHI TEMPLE & ASHWATHA KATTE"}]
  },
  {
    "route_no": "364",
    "distance": "13.9 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Yelenahalli",
    "departure_from_origin": "05:45,  07:40,  08:30,  09:40,  10:30,  12:50,  14:35,  15:05,  16:35,  16:55,  19:00",
    "arrival_at_origin": "07:35, 09:35, 10:25, 12:00, 12:45, 14:35, 16:30, 16:50, 18:40, 18:55, 20:55",
    "departure_from_destination": "06:40, 08:40, 09:30, 11:05, 11:55, 13:45, 15:35, 16:00, 17:50, 18:00, 20:00",
    "arrival_at_destination": "06:35,  08:35,  09:25,  10:35,  11:25,  13:40,  15:30,  15:55,  17:30,  17:45,  19:55",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Mahila samaja"}, {"busstop": "National College"}, {"busstop": "Basavanagudi Police Station"}, {"busstop": "Gunasheela Hospital,BASAVANAGUDI,OPPOSITE OF SOWMYA SPRINGS"}, {"busstop": "Southend Circle"}, {"busstop": "Madhavan Park,JAYANAGARA 2ND BLOCK,OPPOSITE OF RAMAKRISHNA NURSING HOME"}, {"busstop": "Jayanagara 3rd block,JAYANAGARA 3RD BLOCK,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Jayanagara Bus Stand,JAYANAGARA 4TH BLOCK,BESIDE KCC BUILDING"}, {"busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,BESIDE UDUPI UPAHAR"}, {"busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE CARMEL CONVENT"}, {"busstop": "Pump House Jayanagar East End,JAYANAGARA 9TH BLOCK,BESIDE SURABHI ARTS"}, {"busstop": "Jayadeva Hospital,JAYANAGARA 9TH BLOCK,HEALTHY INTERNATIONAL HOMEOPATHY"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "HSBC"}, {"busstop": "Ayyappa Mantapa"}, {"busstop": "Vijaya Bank Layout"}, {"busstop": "Petrol Bunk"}, {"busstop": "Devarachikkanahalli,KODICHIKKANAHALLI,BESIDE ARALIKATTE, GOVERNMENT PRIMARY SCHOOL"}, {"busstop": "Nayanappanahalli"}, {"busstop": "Yelenahalli"}]
  },
  {
    "route_no": "364A",
    "distance": "16.72 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Arekere MICO Layout",
    "departure_from_origin": "06:30,  07:20,  08:00,  09:05,  09:30,  10:10,  12:05,  12:45,  14:25,  14:55,  15:35,  16:40,  17:30,  18:10,  19:20,  19:40,  20:15,  22:35",
    "arrival_at_origin": "06:25, 07:15, 07:55, 09:00, 09:25, 10:05, 11:10, 12:00, 12:40, 14:20, 14:50, 15:30, 16:35, 17:25, 18:05, 19:15, 19:35, 20:15, 22:30",
    "departure_from_destination": "05:30, 06:15, 06:55, 08:00, 08:25, 09:05, 10:10, 11:00, 11:40, 13:20, 13:50, 14:30, 15:35, 16:25, 17:05, 18:15, 18:35, 19:15, 21:45",
    "arrival_at_destination": "07:30,  08:20,  09:00,  10:05,  10:30,  11:10,  13:10,  13:45,  15:30,  15:55,  16:35,  17:45,  18:30,  19:10,  20:25,  20:40,  21:15,  23:30",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Poornima Talkies,K.S.GARDEN,BESIDE KAVERI ENTERPRISES"}, {"busstop": "Lalbhagh Main Gate,DODDAMAVALLI,BESIDE DURGA BEARINGS PVT.LTD."}, {"busstop": "Lalbhag West Gate,BASAVANAGUDI,BESIDE TECHNOMARK TELEVISION"}, {"busstop": "RVTeachers College,BASAVANAGUDI,OPPOSITE OF MEGA AGENSIS"}, {"busstop": "Vijaya College,BASAVANAGUDI,BESIDE VIJAYA COLLEGE"}, {"busstop": "Madhavan Park,JAYANAGARA 2ND BLOCK,OPPOSITE OF RAMAKRISHNA NURSING HOME"}, {"busstop": "Jayanagara 3rd block,JAYANAGARA 3RD BLOCK,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Jayanagara Bus Stand,JAYANAGARA 4TH BLOCK,BESIDE KCC BUILDING"}, {"busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,BESIDE UDUPI UPAHAR"}, {"busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE CARMEL CONVENT"}, {"busstop": "Pump House Jayanagar East End,JAYANAGARA 9TH BLOCK,BESIDE SURABHI ARTS"}, {"busstop": "Jayanagara 9th East "}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arekere Gate"}, {"busstop": "Arekere MICO Layout"}]
  },
  {
    "route_no": "364B",
    "distance": "17.8 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Devarachikkanahalli",
    "departure_from_origin": "05:45,  07:35,  08:15,  09:35,  09:55,  10:00,  10:15,  12:20,  13:30,  14:20,  14:40,  15:00,  16:20,  16:40,  17:40,  18:20,  19:10,  20:30,  20:45",
    "arrival_at_origin": "05:40, 06:10, 07:30, 07:45, 08:10, 09:30, 09:45, 09:50, 10:10, 12:15, 12:35, 16:15, 16:35, 17:35, 18:15, 19:05, 20:00, 20:40",
    "departure_from_destination": "05:00, 05:20, 06:35, 06:50, 07:15, 08:35, 08:50, 09:15, 11:20, 11:40, 15:20, 15:40, 16:30, 17:20, 18:05, 18:50, 19:45",
    "arrival_at_destination": "06:30,  08:30,  09:10,  10:30,  10:50,  10:55,  11:10,  13:15,  14:25,  15:15,  15:35,  16:00,  17:15,  17:35,  18:45,  19:15,  20:10,  21:35,  21:40",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Poornima Talkies,K.S.GARDEN,BESIDE KAVERI ENTERPRISES"}, {"busstop": "Lalbhagh Main Gate,DODDAMAVALLI,BESIDE DURGA BEARINGS PVT.LTD."}, {"busstop": "Lalbhag West Gate,BASAVANAGUDI,BESIDE TECHNOMARK TELEVISION"}, {"busstop": "RVTeachers College,BASAVANAGUDI,OPPOSITE OF MEGA AGENSIS"}, {"busstop": "Vijaya College,BASAVANAGUDI,BESIDE VIJAYA COLLEGE"}, {"busstop": "Madhavan Park,JAYANAGARA 2ND BLOCK,OPPOSITE OF RAMAKRISHNA NURSING HOME"}, {"busstop": "Jayanagara 3rd block,JAYANAGARA 3RD BLOCK,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Jayanagara Bus Stand,JAYANAGARA 4TH BLOCK,BESIDE KCC BUILDING"}, {"busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,BESIDE UDUPI UPAHAR"}, {"busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE CARMEL CONVENT"}, {"busstop": "Pump House Jayanagar East End,JAYANAGARA 9TH BLOCK,BESIDE SURABHI ARTS"}, {"busstop": "Jayanagara 9th East "}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "HSBC"}, {"busstop": "Ayyappa Mantapa"}, {"busstop": "Vijaya Bank Layout"}, {"busstop": "Petrol Bunk"}, {"busstop": "Devarachikkanahalli,KODICHIKKANAHALLI,BESIDE ARALIKATTE, GOVERNMENT PRIMARY SCHOOL"}]
  },
  {
    "route_no": "364C",
    "distance": "16.9 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Vijaya Bank Layout",
    "departure_from_origin": "06:15,  08:00,  08:05,  09:35,  14:45",
    "arrival_at_origin": "08:00, 09:30, 10:10, 11:45, 16:40",
    "departure_from_destination": "07:10, 08:40, 09:15, 10:55, 15:45",
    "arrival_at_destination": "07:05,  08:45,  08:55,  10:25,  15:40",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Poornima Talkies,K.S.GARDEN,BESIDE KAVERI ENTERPRISES"}, {"busstop": "Lalbhagh Main Gate,DODDAMAVALLI,BESIDE DURGA BEARINGS PVT.LTD."}, {"busstop": "Lalbhag West Gate,BASAVANAGUDI,BESIDE TECHNOMARK TELEVISION"}, {"busstop": "RVTeachers College,BASAVANAGUDI,OPPOSITE OF MEGA AGENSIS"}, {"busstop": "Vijaya College,BASAVANAGUDI,BESIDE VIJAYA COLLEGE"}, {"busstop": "Madhavan Park,JAYANAGARA 2ND BLOCK,OPPOSITE OF RAMAKRISHNA NURSING HOME"}, {"busstop": "Jayanagara 3rd block,JAYANAGARA 3RD BLOCK,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Jayanagara Bus Stand,JAYANAGARA 4TH BLOCK,BESIDE KCC BUILDING"}, {"busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,BESIDE UDUPI UPAHAR"}, {"busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE CARMEL CONVENT"}, {"busstop": "Pump House Jayanagar East End,JAYANAGARA 9TH BLOCK,BESIDE SURABHI ARTS"}, {"busstop": "Jayanagara 9th East "}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "HSBC"}, {"busstop": "Ayyappa Mantapa"}, {"busstop": "Vijaya Bank Layout"}]
  },
  {
    "route_no": "364D",
    "distance": "17.5 KM",
    "origin": "Vijayanagara",
    "destination": "Devarachikkanahalli",
    "departure_from_origin": "06:00,  08:00,  10:25,  14:50,  16:50,  19:15",
    "arrival_at_origin": "07:55, 09:55, 12:20, 16:45, 19:10, 21:05",
    "departure_from_destination": "07:00, 09:00, 11:25, 15:50, 18:15, 20:10",
    "arrival_at_destination": "06:55,  08:55,  11:20,  15:45,  17:45,  20:05",
    "map_json_content": [{"busstop": "Vijayanagara,VIJAYANAGARA,BESIDE OM ARCADE, SONY SHOW ROOM"}, {"busstop": "Maruthi mandira,VIJAYANAGARA,BESIDE BUNNY BAKERY"}, {"busstop": "Vijayanagara TTMC,REMCO LAYOUT, VIJAYANAGARA,BESIDE DR. SHETTY MATERNITY CLINIC"}, {"busstop": "Attiguppe,RPC LAYOUT,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Deepanjalinagara Depot-16,DEEPANJALI NAGARA,OPPOSITE OF DEPOT 16"}, {"busstop": "Quality Biscuits"}, {"busstop": "Jn of Nayandahalli"}, {"busstop": "Virabhadranagara Cross,VEERABHADRA NAGARA,BESIDE SRINIVASA BAR & RESTAURANT"}, {"busstop": "PES College,BANASHANKARI 3RD STAGE DWARAKA NAGARA,BESIDE PAVITRA HARDWARE"}, {"busstop": "Banashankari 3rd Stage 2rd Phase,BANASHANKARI 3RD STAGE DWARAKA NAGARA,OPPOSITE OF RATNAGIRI PUBLIC SCHOOL"}, {"busstop": "Hosakerehalli Cross,BANASHANKARI 3RD STAGE,OPPOSITE OF N.C.E.R.T."}, {"busstop": "Janatha Bazar,BANASHANKARI 3RD STAGE,OPPOSITE OF SHIVA SHANKARA SABHANGANA"}, {"busstop": "Banashankari 3rd Stage 3rd Phase,BANASHANKARI 3RD STAGE,IN FRONT OF LITTLE MILLENIUM NURSERY SCHOOL"}, {"busstop": "Kamakya Talkies,BANASHANKARI 3RD STAGE,IN FRONT OF BMTC DEPOT-13"}, {"busstop": "Devegwada Petrol Bunk,BANASHANKARI 2ND STAGE,BESIDE BESCOM"}, {"busstop": "Kadirenahalli Park,BANASHANKRI 2ND STAGE KAVERI NAGARA,BESIDE HANUMAN MANDIR"}, {"busstop": "kadirenahalli cross,BANASHANKRI 2ND STAGE TEACHERS COLONY,BESIDE S.A.F00T WEAR"}, {"busstop": "BANASHANKARI TTMC"}, {"busstop": "Sangam Circle,JAYANAGARA 8TH BLOCK,BESIDE INDIAN TYRE CENTER"}, {"busstop": "Jayanagara 5th Block,JAYANAGARA 5TH BLOCK,BESIDE GRIHA VAIBHAVA FAMILY SHOP"}, {"busstop": "Marenahalli Petrol Bunk,PATTABHIRAMA NAGARA,BESIDE AKKA MAHADEVI PARK"}, {"busstop": "Ragigudda,JAYANAGARA 9TH BLOCK,BESIDE RAGHAVENDRA UPAHARA"}, {"busstop": "Water Tank Raggigudda,JP NAGARA 3RD PHASE,BESIDE OF B.W.S.S.B."}, {"busstop": "Milk Booth,JP NAGARA 2ND PHASE,BESIDE NANDINI PARLOUR"}, {"busstop": "JP Nagara 3rd Phase,JP NAGARA 3RD PHASE,BESIDE COLLABERA"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "HSBC"}, {"busstop": "Ayyappa Mantapa"}, {"busstop": "Vijaya Bank Layout"}, {"busstop": "Petrol Bunk"}, {"busstop": "Devarachikkanahalli,KODICHIKKANAHALLI,BESIDE ARALIKATTE, GOVERNMENT PRIMARY SCHOOL"}]
  },
  {
    "route_no": "364F",
    "distance": "19.2 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Nayanappanahalli",
    "departure_from_origin": "05:10,  06:55,  07:55,  09:10,  09:40,  10:25,  11:30,  12:00,  14:15,  14:35,  16:20,  17:20,  18:20,  19:05,  21:50",
    "arrival_at_origin": "06:50, 07:50, 09:05, 09:35, 10:20, 11:25, 11:55, 14:10, 16:15, 17:15, 18:15, 19:00, 20:50, 21:20",
    "departure_from_destination": "05:45, 06:45, 08:00, 08:30, 09:15, 10:20, 10:50, 13:05, 15:10, 16:10, 17:10, 17:55, 19:50, 20:15",
    "arrival_at_destination": "06:15,  08:00,  09:00,  10:15,  10:45,  11:30,  12:35,  13:05,  15:20,  15:40,  17:25,  18:25,  19:25,  20:10,  22:50",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Poornima Talkies,K.S.GARDEN,BESIDE KAVERI ENTERPRISES"}, {"busstop": "Lalbhagh Main Gate,DODDAMAVALLI,BESIDE DURGA BEARINGS PVT.LTD."}, {"busstop": "Lalbhag West Gate,BASAVANAGUDI,BESIDE TECHNOMARK TELEVISION"}, {"busstop": "RVTeachers College,BASAVANAGUDI,OPPOSITE OF MEGA AGENSIS"}, {"busstop": "Vijaya College,BASAVANAGUDI,BESIDE VIJAYA COLLEGE"}, {"busstop": "Madhavan Park,JAYANAGARA 2ND BLOCK,OPPOSITE OF RAMAKRISHNA NURSING HOME"}, {"busstop": "Jayanagara 3rd block,JAYANAGARA 3RD BLOCK,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Jayanagara Bus Stand,JAYANAGARA 4TH BLOCK,BESIDE KCC BUILDING"}, {"busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,BESIDE UDUPI UPAHAR"}, {"busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE CARMEL CONVENT"}, {"busstop": "Pump House Jayanagar East End,JAYANAGARA 9TH BLOCK,BESIDE SURABHI ARTS"}, {"busstop": "Jayanagara 9th East "}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate"}, {"busstop": "Government Hospital"}, {"busstop": "Arekere BTS Layout"}, {"busstop": "Jn of BDA Ring Road"}, {"busstop": "Avani Shringeri Nagara"}, {"busstop": "Nayanappanahalli"}]
  },
  {
    "route_no": "364G",
    "distance": "17.2 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Kodi Chikkanahalli",
    "departure_from_origin": "05:55,  07:45,  09:25,  10:05,  11:35,  14:10,  16:20,  20:20",
    "arrival_at_origin": "05:50, 07:40, 09:20, 10:00, 11:30, 14:05, 16:15, 17:25, 20:15",
    "departure_from_destination": "05:00, 06:50, 08:20, 08:45, 10:30, 13:05, 15:15, 16:25, 19:15",
    "arrival_at_destination": "06:45,  08:40,  10:25,  11:00,  12:35,  15:10,  17:20,  21:20",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Poornima Talkies,K.S.GARDEN,BESIDE KAVERI ENTERPRISES"}, {"busstop": "Lalbhagh Main Gate,DODDAMAVALLI,BESIDE DURGA BEARINGS PVT.LTD."}, {"busstop": "Lalbhag West Gate,BASAVANAGUDI,BESIDE TECHNOMARK TELEVISION"}, {"busstop": "RVTeachers College,BASAVANAGUDI,OPPOSITE OF MEGA AGENSIS"}, {"busstop": "Vijaya College,BASAVANAGUDI,BESIDE VIJAYA COLLEGE"}, {"busstop": "Madhavan Park,JAYANAGARA 2ND BLOCK,OPPOSITE OF RAMAKRISHNA NURSING HOME"}, {"busstop": "Jayanagara 3rd block,JAYANAGARA 3RD BLOCK,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Jayanagara Bus Stand,JAYANAGARA 4TH BLOCK,BESIDE KCC BUILDING"}, {"busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,BESIDE UDUPI UPAHAR"}, {"busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE CARMEL CONVENT"}, {"busstop": "Pump House Jayanagar East End,JAYANAGARA 9TH BLOCK,BESIDE SURABHI ARTS"}, {"busstop": "Jayanagara 9th East "}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "HSBC"}, {"busstop": "Ayyappa Mantapa"}, {"busstop": "Vijaya Bank Layout"}, {"busstop": "Kodi Chikkanahalli"}]
  },
  {
    "route_no": "365",
    "distance": "31 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Bannerghatta National Park",
    "departure_from_origin": "05:45,  06:15,  06:20,  07:30,  07:45,  08:35,  08:50,  10:20,  10:25,  10:50,  10:55,  13:25,  13:30,  13:40,  15:00,  15:40,  15:55,  16:00,  16:05,  16:35,  17:55,  18:45,  19:10,  20:05,  21:40,  22:15",
    "arrival_at_origin": "06:15, 08:30, 08:45, 10:15, 10:20, 11:15, 11:50, 13:20, 13:25, 13:35, 15:50, 15:55, 16:30, 17:50, 18:30, 18:40, 19:05, 20:05, 21:25, 21:45",
    "departure_from_destination": "05:15, 07:25, 07:30, 09:05, 10:10, 10:35, 12:10, 12:30, 14:40, 14:50, 15:15, 16:40, 17:20, 17:35, 17:50, 19:30, 20:20, 20:30",
    "arrival_at_destination": "07:00,  07:20,  07:25,  08:40,  09:00,  09:40,  10:05,  11:30,  11:40,  12:00,  12:05,  14:35,  14:45,  16:10,  16:50,  17:05,  17:10,  17:20,  17:45,  17:50,  19:05,  19:50,  20:25,  21:20,  22:55,  23:30",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Sampigehalli,BHANNERGAHTTA POST"}, {"busstop": "Bannerghatta National Park"}]
  },
  {
    "route_no": "365B",
    "distance": "26.4 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Malenallasandra",
    "departure_from_origin": "07:35,  08:35,  11:40,  18:15,  21:20",
    "arrival_at_origin": "07:30, 10:15, 11:35, 14:15, 20:50",
    "departure_from_destination": "06:15, 08:55, 10:20, 13:00, 19:35",
    "arrival_at_destination": "08:50,  09:50,  12:55,  19:30,  22:30",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden Police Station,WILSON GARDEN,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Tuliph Resort"}, {"busstop": "Sakalwara"}, {"busstop": "Malenallasandra"}]
  },
  {
    "route_no": "365C",
    "distance": "29.1 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Koppa",
    "departure_from_origin": "08:55,  12:10,  15:00",
    "arrival_at_origin": "12:05, 14:55, 18:10",
    "departure_from_destination": "10:45, 13:35, 16:50",
    "arrival_at_destination": "10:15,  13:30,  16:20",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden Police Station,WILSON GARDEN,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama Bismilla Nagara Bannerghatta Road"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Koppa"}]
  },
  {
    "route_no": "365D",
    "distance": "22.5 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Bilwarada Halli",
    "departure_from_origin": "05:15,  05:30,  05:55,  06:00,  06:05,  06:30,  07:25,  07:40,  08:05,  08:10,  08:15,  08:35,  08:50,  09:30,  09:35,  10:30,  11:55,  12:00,  12:25,  14:35,  14:55,  15:45,  15:55,  16:00,  16:10,  16:40,  17:25,  17:50,  18:45,  18:50,  19:05,  19:50,  20:05,  20:35,  20:45,  21:30,  22:00,  22:45",
    "arrival_at_origin": "05:25, 05:50, 06:00, 07:20, 07:30, 08:05, 08:10, 08:25, 08:45, 09:25, 09:55, 10:25, 10:30, 10:45, 10:55, 11:25, 11:30, 11:50, 11:55, 12:20, 12:55, 14:50, 16:05, 17:45, 18:35, 18:40, 18:45, 18:50, 19:00, 19:45, 20:15, 21:00, 21:20, 21:25, 22:15, 22:30",
    "departure_from_destination": "04:30, 05:00, 06:20, 07:00, 07:05, 07:10, 07:15, 07:40, 08:15, 08:55, 09:15, 09:20, 09:45, 09:50, 10:15, 10:25, 10:45, 11:10, 11:45, 13:40, 15:00, 16:35, 17:25, 17:35, 17:45, 17:50, 18:35, 19:05, 19:55, 20:20, 21:15, 21:25",
    "arrival_at_destination": "06:15,  06:30,  07:00,  07:05,  07:10,  07:35,  08:25,  08:50,  09:10,  09:15,  09:20,  09:45,  09:55,  10:40,  11:40,  13:00,  13:10,  13:35,  15:35,  16:05,  16:55,  17:05,  17:15,  17:45,  18:30,  19:00,  19:50,  20:15,  20:55,  21:10,  21:35,  21:55,  22:35,  23:05,  23:45",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden Police Station,WILSON GARDEN,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Weavers Colony,WEAVERS COLONY,IN FRONT OF AMBIKA HARDWARE"}, {"busstop": "Maruthi Layout,MARUTHI LAYOUT,OPPOSITE OF SRINIVASAN GROUNDNUT SWEETS"}, {"busstop": "Bilwarada Halli,BILAVARADAHALLI,IN FRONT OF TAJ HERITAGE"}]
  },
  {
    "route_no": "365E",
    "distance": "26 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Shanubhogana Halli",
    "departure_from_origin": "07:20,  08:30,  11:10,  14:05,  14:15,  14:25,  17:20,  17:30,  18:40,  20:35,  21:55",
    "arrival_at_origin": "07:15, 07:35, 09:55, 11:05, 14:10, 17:15, 17:25, 20:05, 21:25",
    "departure_from_destination": "06:00, 06:20, 08:40, 09:50, 12:55, 15:55, 16:10, 18:45, 18:50, 20:05",
    "arrival_at_destination": "08:35,  09:45,  12:25,  15:25,  15:30,  15:40,  18:40,  18:45,  20:00,  21:40,  23:05",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden Police Station,WILSON GARDEN,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Weavers Colony,WEAVERS COLONY,IN FRONT OF AMBIKA HARDWARE"}, {"busstop": "Maruthi Layout,MARUTHI LAYOUT,OPPOSITE OF SRINIVASAN GROUNDNUT SWEETS"}, {"busstop": "Bilwarada Halli,BILAVARADAHALLI,IN FRONT OF TAJ HERITAGE"}, {"busstop": "Shanubhogana Halli,SHANUBHOGANA HALLI,IN FRONT OF GOVT.HIGHER PRIMARY SCHOOL"}]
  },
  {
    "route_no": "365F",
    "distance": "35.5 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Nosenoor",
    "departure_from_origin": "06:00,  09:10,  16:00,  18:55",
    "arrival_at_origin": "09:05, 18:50, 22:25",
    "departure_from_destination": "07:35, 17:40, 20:55",
    "arrival_at_destination": "07:30,  10:40,  17:10,  20:25",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden Police Station,WILSON GARDEN,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Sarala Birla Academy"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Cricle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "KEB"}, {"busstop": "Madapatna,Open Area"}, {"busstop": "Haragadde,Open area"}, {"busstop": "Dyavasandra,Open Area"}, {"busstop": "Nosenoor"}]
  },
  {
    "route_no": "365J",
    "distance": "32.9 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Jigani APC Cricle",
    "departure_from_origin": "20:05,  22:30,  22:45",
    "arrival_at_origin": "05:10, 05:35, 22:40",
    "departure_from_destination": "04:00, 04:30, 21:30",
    "arrival_at_destination": "00:00,  21:25,  23:30",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama Bismilla Nagara Bannerghatta Road"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani APC Cricle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}]
  },
  {
    "route_no": "365K",
    "distance": "20.7 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "CK Palya",
    "departure_from_origin": "09:10,  11:55,  14:10,  16:30",
    "arrival_at_origin": "09:05, 11:50, 14:05, 16:25",
    "departure_from_destination": "08:00, 10:45, 13:05, 15:20",
    "arrival_at_destination": "10:15,  13:00,  15:15,  17:35",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden Police Station,WILSON GARDEN,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Chikkammanahalli Cross"}, {"busstop": "Dinne"}, {"busstop": "CK Palya"}]
  },
  {
    "route_no": "365M",
    "distance": "42 KM",
    "origin": "Bannerghatta National Park",
    "destination": "Yelahanka Satelite Town 4th Phase",
    "departure_from_origin": "09:25,  17:15",
    "arrival_at_origin": "09:20, 14:00",
    "departure_from_destination": "07:25, 12:05",
    "arrival_at_destination": "11:20,  19:10",
    "map_json_content": [{"busstop": "Bannerghatta National Park"}, {"busstop": "Sampigehalli,BHANNERGHATTA"}, {"busstop": "Bannerughatta Circle"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Kalkere"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Basavanapura Gate Bannerghatta Road"}, {"busstop": "TJohn College Cross"}, {"busstop": "Gottigere"}, {"busstop": "Gottigere High School Himagiri"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Loyala School"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Hulimavu Gate"}, {"busstop": "BPL"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Bilekalli"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "MICO Layout Checkpost,GOPALANMALL"}, {"busstop": "Gurappana palya"}, {"busstop": "Ashrama Bismilla Nagara Bannerghatta Road"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Nimhans Hospital,IN FRONT OF KIDWAI HOSPITAL"}, {"busstop": "Lakkasandra,LAKKASANDRA,IN FRONT VIGNANA HOSPITAL"}, {"busstop": "Wilson Garden 10th Cross,WILSON GARDEN,BESIDE KARNATAKA HANDBALL ASSOCIATION"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Shanthi Nagara Bus Station,SHANTHI NAGAR,OPPOSITE TO SHANTHINAGAR TTMC"}, {"busstop": "Double Road Shanthinagar"}, {"busstop": "Pallavi talikes"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BANAPPA PARK"}, {"busstop": "Cauvery Bhavana,K.R. MARKET,OPPOSITE OF BWSSB"}, {"busstop": "Kempegowda Bus Station,MAJESTIC,BESIDE AMAR HOTEL"}, {"busstop": "Ananda Rao Circle,NEHARU NAGARA,JANATHA DALA(S) OFFICE"}, {"busstop": "Shivananda store,KUMARA PARK EAST,BESIDE KHADI EMPORIUM"}, {"busstop": "RM Guttahalli,PALACE GUTTAHALLI,BESIDE GARUDA SEVADAL"}, {"busstop": "Palace Ground,SADASHIVA NAGARA,BESIDE SIIMPLY SOFAR"}, {"busstop": "Mekhri Circle,Mekri Circle"}, {"busstop": "Ganga Nagara"}, {"busstop": "Veternary College"}, {"busstop": "Canara Bank Hebbal"}, {"busstop": "Hebbala"}, {"busstop": "Military Dairy Farm,BESIDE MILITARY COMPOUND"}, {"busstop": "Kodigehalli gate,BESIDE ROYAL OAK WOOD IN CORPORATION"}, {"busstop": "Byatarayana Pura"}, {"busstop": "GKVK"}, {"busstop": "Aerodrum"}, {"busstop": "Allalasandra Gate"}, {"busstop": "Yelahanka Police Station"}, {"busstop": "Yelahanaka NES Office"}, {"busstop": "Sheshadripuram College"}, {"busstop": "Sharavathi Hotel"}, {"busstop": "Chikkabommasandra Cross"}, {"busstop": "Yelahanka Satelite Town"}, {"busstop": "Dairy Circle Yalahanka New Town,YELAHANKA NEW TOWN,BESIDE DAZZLE SUPER MARKET"}, {"busstop": "Yelahanka Bakery"}, {"busstop": "Yelahanka Satelite Town 4th Phase"}]
  },
  {
    "route_no": "365N",
    "distance": "33.8 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Giddenahalli",
    "departure_from_origin": "07:00,  09:35,  10:25,  13:10,  16:45,  17:00,  20:35",
    "arrival_at_origin": "06:55, 09:30, 10:20, 13:05, 16:40, 16:55, 20:30",
    "departure_from_destination": "05:30, 08:00, 08:55, 11:35, 15:10, 15:25, 19:00",
    "arrival_at_destination": "08:25,  11:05,  11:50,  14:40,  18:15,  18:30,  22:05",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden Police Station,WILSON GARDEN,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani APC Cricle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "Jigani APC Circle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "Otis Circle"}, {"busstop": "Kallabala Cross"}, {"busstop": "Kallabalu"}, {"busstop": "Giddenahalli"}]
  },
  {
    "route_no": "365P",
    "distance": "41.4 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Anekal",
    "departure_from_origin": "06:00,  06:05,  07:35,  07:55,  08:05,  08:10,  08:45,  09:05,  09:50,  10:05,  10:30,  11:00,  11:30,  12:10,  12:40,  14:20,  15:00,  15:30,  15:45,  16:00,  16:04,  16:05,  17:05,  17:30,  18:25,  18:40,  18:55,  19:25,  21:05",
    "arrival_at_origin": "08:05, 08:40, 09:00, 09:45, 10:00, 10:05, 10:15, 10:30, 11:00, 12:05, 12:35, 12:40, 14:55, 15:25, 15:55, 16:30, 16:35, 17:00, 17:10, 18:05, 18:35, 18:50, 19:20, 19:55, 20:35, 21:25, 22:50, 23:00",
    "departure_from_destination": "06:05, 06:45, 07:05, 07:50, 08:05, 08:20, 08:35, 09:05, 10:05, 10:35, 10:40, 13:00, 13:30, 14:00, 14:04, 14:40, 15:05, 15:10, 16:25, 16:40, 16:50, 17:25, 18:10, 18:35, 19:30, 21:00, 21:05",
    "arrival_at_destination": "08:00,  08:30,  09:35,  10:05,  10:10,  10:40,  11:00,  11:45,  12:00,  12:25,  12:55,  13:25,  14:10,  14:40,  16:20,  16:55,  17:25,  17:40,  17:55,  18:05,  18:35,  19:00,  19:25,  20:20,  20:35,  20:55,  21:20,  23:00",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Poornima Talkies,K.S.GARDEN,BESIDE KAVERI ENTERPRISES"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Sarala Birla Academy"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Nisarga Gate"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Cricle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "KEB"}, {"busstop": "Madapatna,Open Area"}, {"busstop": "Haragadde,Open area"}, {"busstop": "Bangla Gate Bannerghatta Anekal Road,Open area"}, {"busstop": "Kumbarahalli,Open area"}, {"busstop": "Suragajakkanahalli Anekal Road,Opp to provision stores"}, {"busstop": "Indlawadi Cross,Opp to open area"}, {"busstop": "Gowrenahalli,Opp to open area"}, {"busstop": "Muthyalamadu Cross,Opp to burial ground"}, {"busstop": "Shanimahathma Devasthana,Opp to Temple"}, {"busstop": "Anekal Circle"}, {"busstop": "Chowdareddy Circle,ANEKAL,OPPOSITE OF VIJAYA NURSING HOME"}, {"busstop": "Anekal ,ANEKAL,BUS STAND"}]
  },
  {
    "route_no": "365Q",
    "distance": "33.5 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Dyavasandra",
    "departure_from_origin": "08:35,  12:10,  15:45",
    "arrival_at_origin": "12:05, 15:40",
    "departure_from_destination": "10:35, 14:10",
    "arrival_at_destination": "10:05,  13:40,  17:15",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Cricle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "Jigani Bus Stand,JIGANI HOBLI, ANEKAL TALUK,IN FRONT OF HARSHA SAGAR HOTEL"}, {"busstop": "KEB"}, {"busstop": "Madapatna,Open Area"}, {"busstop": "Haragadde,Open area"}, {"busstop": "Dyavasandra,Open Area"}]
  },
  {
    "route_no": "365R",
    "distance": "20.8 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Basavanapura Gate Bannerghatta Road",
    "departure_from_origin": "09:15,  11:45,  14:30,  17:25",
    "arrival_at_origin": "09:10, 11:40, 14:25, 17:20",
    "departure_from_destination": "08:00, 10:30, 13:20, 16:10",
    "arrival_at_destination": "10:25,  12:50,  15:40,  18:35",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden Police Station,WILSON GARDEN,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate Bannerghatta Road"}]
  },
  {
    "route_no": "365W",
    "distance": "33.5 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Vaderamanchanahalli",
    "departure_from_origin": "06:00,  09:45,  15:05,  19:50",
    "arrival_at_origin": "05:55, 09:40, 15:00, 19:10",
    "departure_from_destination": "04:30, 08:05, 13:15, 17:25",
    "arrival_at_destination": "07:35,  11:20,  16:55,  21:35",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden Police Station,WILSON GARDEN,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama Bismilla Nagara Bannerghatta Road"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Circle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "YK Hospital"}, {"busstop": "Vaderamanchanahalli"}]
  },
  {
    "route_no": "366",
    "distance": "21.5 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Bannerghatta National Park",
    "departure_from_origin": "06:35,  08:15,  09:30,  10:25,  14:45,  15:25,  16:10,  18:00,  18:50",
    "arrival_at_origin": "09:25, 10:20, 11:55, 16:50, 17:55, 18:35, 21:15",
    "departure_from_destination": "08:15, 09:20, 10:45, 15:50, 16:55, 17:25, 20:05",
    "arrival_at_destination": "07:45,  09:15,  10:40,  11:25,  15:45,  16:25,  17:20,  19:00,  20:00",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Sampigehalli,BHANNERGAHTTA POST"}, {"busstop": "Bannerghatta National Park"}]
  },
  {
    "route_no": "366A",
    "distance": "16.8 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Devarachikkanahalli",
    "departure_from_origin": "05:45,  06:00,  06:45,  07:20,  07:40,  07:50,  08:25,  09:00,  09:10,  09:40,  10:05,  10:50,  11:05,  11:55,  12:55,  13:35,  14:05,  14:35,  14:45,  15:15,  15:45,  16:15,  16:25,  16:55,  17:50,  18:30,  19:00,  19:30,  20:05,  20:40,  21:10,  21:30,  21:55",
    "arrival_at_origin": "05:40, 05:55, 06:40, 07:15, 07:35, 07:45, 08:20, 08:35, 09:05, 09:35, 10:00, 10:45, 11:00, 11:50, 12:05, 12:50, 13:30, 14:30, 14:40, 15:10, 15:40, 16:10, 16:20, 16:50, 17:45, 18:15, 18:25, 18:55, 19:25, 20:00, 20:35, 21:00, 21:05, 21:30, 21:40",
    "departure_from_destination": "05:00, 05:10, 06:00, 06:30, 06:50, 07:00, 07:35, 08:10, 08:20, 08:40, 09:15, 10:00, 10:15, 11:05, 11:20, 12:05, 12:45, 13:45, 13:55, 14:25, 14:55, 15:25, 15:35, 16:05, 17:00, 17:30, 17:40, 18:10, 18:40, 19:20, 19:50, 20:20, 20:50, 21:00",
    "arrival_at_destination": "06:25,  06:45,  07:30,  08:05,  08:25,  08:35,  09:10,  09:45,  09:55,  10:35,  10:50,  11:35,  11:50,  12:40,  13:40,  14:20,  14:50,  15:20,  15:30,  16:00,  16:30,  17:00,  17:10,  17:40,  18:35,  19:15,  19:45,  20:15,  20:50,  21:25,  21:50,  22:15,  22:35",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "HSBC"}, {"busstop": "Vijaya Bank Layout"}, {"busstop": "Petrol Bunk"}, {"busstop": "Ayyappa Mantapa"}, {"busstop": "Devarachikkanahalli,KODICHIKKANAHALLI,BESIDE ARALIKATTE, GOVERNMENT PRIMARY SCHOOL"}]
  },
  {
    "route_no": "366AB",
    "distance": "12.5 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Kodi Chikkanahalli",
    "departure_from_origin": "07:05,  08:45,  10:50,  15:15,  17:20,  19:00,  20:50",
    "arrival_at_origin": "07:00, 08:40, 10:45, 15:10, 17:15, 18:55, 20:45",
    "departure_from_destination": "06:15, 07:55, 10:00, 14:25, 16:35, 18:10, 20:00",
    "arrival_at_destination": "07:50,  09:30,  11:35,  16:00,  18:05,  19:45,  21:35",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "HSBC"}, {"busstop": "Ayyappa Mantapa"}, {"busstop": "Vijaya Bank Layout"}, {"busstop": "Kodi Chikkanahalli"}]
  },
  {
    "route_no": "366B",
    "distance": "29.7 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Haragadde",
    "departure_from_origin": "06:20,  09:05,  19:05",
    "arrival_at_origin": "09:00, 12:15, 22:05",
    "departure_from_destination": "07:40, 10:55, 20:40",
    "arrival_at_destination": "07:35,  10:25,  20:35",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Cricle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "KEB"}, {"busstop": "Madapatna,Open Area"}, {"busstop": "Haragadde,Open area"}]
  },
  {
    "route_no": "366BA",
    "distance": "31.9 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Seethanayakanahalli",
    "departure_from_origin": "07:05,  17:25,  21:00",
    "arrival_at_origin": "07:00, 10:35, 20:30",
    "departure_from_destination": "05:30, 09:05, 19:00",
    "arrival_at_destination": "08:35,  18:55,  22:30",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Cricle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "KEB"}, {"busstop": "Madapatna,Open Area"}, {"busstop": "Haragadde,Open area"}, {"busstop": "Seethanayakanahalli"}]
  },
  {
    "route_no": "366C",
    "distance": "20.9 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Shanubhoganahalli",
    "departure_from_origin": "06:25,  09:55,  15:25,  15:50,  18:10,  18:35,  20:35,  21:30",
    "arrival_at_origin": "06:20, 08:40, 09:50, 18:05, 18:30, 20:25, 20:50",
    "departure_from_destination": "05:20, 07:35, 08:40, 17:00, 17:25, 19:20, 19:45",
    "arrival_at_destination": "07:30,  11:05,  16:30,  16:55,  19:15,  19:40,  21:40,  22:35",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road,KALKERE,IN FRONT OF FOREST OFFICE,BNP"}, {"busstop": "Weavers Colony,WEAVERS COLONY,IN FRONT OF AMBIKA HARDWARE"}, {"busstop": "Maruthi Layout,MARUTHI LAYOUT,OPPOSITE OF SRINIVASAN GROUNDNUT SWEETS"}, {"busstop": "Bilwarada Halli,BILAVARADAHALLI,IN FRONT OF TAJ HERITAGE"}, {"busstop": "Shanubhoganahalli,SHANUBHOGANA HALLI,OPPOSITE OF GOVT.HIGHER PRIMARY SCHOOL"}]
  },
  {
    "route_no": "366D",
    "distance": "27.6 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Mahanthalingapura",
    "departure_from_origin": "07:25,  10:40,  18:15,  21:30",
    "arrival_at_origin": "07:20, 10:35, 18:10, 21:00",
    "departure_from_destination": "06:00, 09:15, 16:50, 19:40",
    "arrival_at_destination": "08:45,  11:55,  19:35,  22:50",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Bukkasagara"}, {"busstop": "Mahanthalingapura"}]
  },
  {
    "route_no": "366F",
    "distance": "36 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Nosenoor",
    "departure_from_origin": "07:05,  15:15,  21:10",
    "arrival_at_origin": "07:00, 10:10, 20:40",
    "departure_from_destination": "05:30, 08:40, 19:00",
    "arrival_at_destination": "08:35,  16:45,  22:30",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Circle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "Otis Circle"}, {"busstop": "Kallabala Cross"}, {"busstop": "Vaderamanchanahalli"}, {"busstop": "Konasandra Cross Jigani"}, {"busstop": "Bommandanahalli Cross"}, {"busstop": "Dyavasandra Cross"}, {"busstop": "Nosenoor Cross"}, {"busstop": "Nosenoor"}]
  },
  {
    "route_no": "366G",
    "distance": "18.4 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Bilwarada Halli",
    "departure_from_origin": "06:00,  06:15,  06:35,  07:15,  07:20,  08:40,  08:55,  09:15,  09:40,  11:05,  11:40,  13:10,  15:10,  15:35,  16:00,  16:50,  17:35,  18:05,  18:55,  19:20,  19:35,  20:00,  20:30,  21:00,  21:30,  22:15,  22:25,  22:30",
    "arrival_at_origin": "06:00, 06:10, 06:30, 07:10, 07:15, 08:05, 08:50, 09:10, 09:35, 11:30, 11:35, 11:45, 12:30, 13:00, 15:05, 17:30, 18:00, 18:50, 19:05, 19:30, 19:55, 20:25, 20:30, 21:20, 21:45, 21:55, 22:15",
    "departure_from_destination": "05:00, 05:20, 05:30, 06:15, 07:05, 07:40, 08:15, 08:25, 10:20, 10:35, 10:40, 11:20, 12:05, 14:10, 16:35, 16:50, 17:40, 18:05, 18:35, 19:00, 19:20, 19:35, 20:10, 20:35, 21:00, 21:25",
    "arrival_at_destination": "07:00,  07:05,  07:35,  08:10,  08:20,  09:50,  10:05,  10:10,  10:50,  12:00,  12:35,  14:05,  16:05,  16:20,  16:30,  17:10,  18:00,  18:30,  19:15,  20:05,  20:30,  20:55,  21:20,  22:00,  22:40,  23:15,  23:20,  23:25",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road,KALKERE,IN FRONT OF FOREST OFFICE,BNP"}, {"busstop": "Weavers Colony,WEAVERS COLONY,IN FRONT OF AMBIKA HARDWARE"}, {"busstop": "Maruthi Layout,MARUTHI LAYOUT,OPPOSITE OF SRINIVASAN GROUNDNUT SWEETS"}, {"busstop": "Bilwarada Halli,BILAVARADAHALLI,OPPOSITE OF TAJ HERITAGE"}]
  },
  {
    "route_no": "366H",
    "distance": "27 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Jigani",
    "departure_from_origin": "08:20,  15:50,  19:05",
    "arrival_at_origin": "08:15, 11:30, 19:00",
    "departure_from_destination": "06:55, 10:10, 17:40",
    "arrival_at_destination": "09:40,  17:10,  20:25",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota,KEMPEGOWDA HOSPITAL"}, {"busstop": "Mahila samaja"}, {"busstop": "National College"}, {"busstop": "Basavanagudi Police Station,BASAVANAGUDI,BESIDE BASAVANAGUDI POLICE STATION"}, {"busstop": "Gunasheela Hospital,BASAVANAGUDI,OPPOSITE OF SOWMYA SPRINGS"}, {"busstop": "Southend Circle"}, {"busstop": "Madhavan Park,JAYANAGARA 2ND BLOCK,OPPOSITE OF RAMAKRISHNA NURSING HOME"}, {"busstop": "Jayanagara 3rd block,JAYANAGARA 3RD BLOCK,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Jayanagara Bus Stand,JAYANAGARA 4TH BLOCK,BESIDE KCC BUILDING"}, {"busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,BESIDE UDUPI UPAHAR"}, {"busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE CARMEL CONVENT"}, {"busstop": "Pump House Jayanagar East End,JAYANAGARA 9TH BLOCK,BESIDE SURABHI ARTS"}, {"busstop": "Jayadeva Hospital,JAYANAGARA 9TH BLOCK,HEALTHY INTERNATIONAL HOMEOPATHY"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road,KALKERE,IN FRONT OF FOREST OFFICE,BNP"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}]
  },
  {
    "route_no": "366KA",
    "distance": "33.66 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Mutturayanaswamy Doddi",
    "departure_from_origin": "10:00,  13:45,  17:25",
    "arrival_at_origin": "09:55, 13:40, 17:00",
    "departure_from_destination": "08:15, 12:10, 15:30",
    "arrival_at_destination": "11:40,  15:25,  18:55",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Circle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "Otis Circle"}, {"busstop": "Kallabala Cross"}, {"busstop": "Kallabalu"}, {"busstop": "Mahanthalingapura"}, {"busstop": "Krishnadoddi Bannerghatta Road"}, {"busstop": "Muthurayaswamy Doddi Cross"}, {"busstop": "Mutturayanaswamy Doddi"}]
  },
  {
    "route_no": "366L",
    "distance": "26.8 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Bukkasagara",
    "departure_from_origin": "06:20,  09:05,  14:25,  17:30,  20:30",
    "arrival_at_origin": "06:15, 09:00, 14:20, 17:00, 20:05",
    "departure_from_destination": "05:00, 07:40, 13:00, 15:45, 18:50",
    "arrival_at_destination": "07:35,  10:25,  15:40,  18:45,  21:45",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Bukkasagara"}]
  },
  {
    "route_no": "366M",
    "distance": "28 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Byatarayana Doddi",
    "departure_from_origin": "06:15,  08:10,  09:10,  14:35,  15:25,  17:30,  18:20,  20:25",
    "arrival_at_origin": "06:10, 08:05, 09:05, 11:00, 17:25, 18:15, 19:55",
    "departure_from_destination": "05:00, 06:55, 07:55, 09:50, 16:15, 17:05, 18:45",
    "arrival_at_destination": "07:25,  09:20,  10:20,  15:45,  16:35,  18:45,  19:30,  21:35",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Weavers Colony,WEAVERS COLONY,IN FRONT OF AMBIKA HARDWARE"}, {"busstop": "Maruthi Layout,MARUTHI LAYOUT,OPPOSITE OF SRINIVASAN GROUNDNUT SWEETS"}, {"busstop": "Bilwarada Halli,BILAVARADAHALLI,IN FRONT OF TAJ HERITAGE"}, {"busstop": "Shanubhogana Halli,SHANUBHOGANA HALLI,IN FRONT OF GOVT.HIGHER PRIMARY SCHOOL"}, {"busstop": "Kenchanayakana doddi,KANCHAGAYANADODDI,IN FRONT OF MAHADESHWARA TEMPLE"}, {"busstop": "Byatarayana Doddi,BYATARAYANA DODDI,OPPOSITE OF GOVT.PRIMARY SCHOOL"}]
  },
  {
    "route_no": "366MA",
    "distance": "33.24 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Kaggalipura",
    "departure_from_origin": "07:35,  13:50,  16:50,  20:15",
    "arrival_at_origin": "07:05, 10:30, 16:45, 20:10",
    "departure_from_destination": "05:40, 09:05, 15:20, 18:45",
    "arrival_at_destination": "09:00,  15:15,  18:15,  21:40",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota,KEMPEGOWDA HOSPITAL"}, {"busstop": "Mahila samaja"}, {"busstop": "National College"}, {"busstop": "Basavanagudi Police Station,BASAVANAGUDI,BESIDE BASAVANAGUDI POLICE STATION"}, {"busstop": "Gunasheela Hospital,BASAVANAGUDI,OPPOSITE OF SOWMYA SPRINGS"}, {"busstop": "Southend Circle"}, {"busstop": "Madhavan Park,JAYANAGARA 2ND BLOCK,OPPOSITE OF RAMAKRISHNA NURSING HOME"}, {"busstop": "Jayanagara 3rd block,JAYANAGARA 3RD BLOCK,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Jayanagara Bus Stand,JAYANAGARA 4TH BLOCK,BESIDE KCC BUILDING"}, {"busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,BESIDE UDUPI UPAHAR"}, {"busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE CARMEL CONVENT"}, {"busstop": "Pump House Jayanagar East End,JAYANAGARA 9TH BLOCK,BESIDE SURABHI ARTS"}, {"busstop": "Jayanagara 9th Block East"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road,KALKERE,IN FRONT OF FOREST OFFICE,BNP"}, {"busstop": "Weavers Colony,WEAVERS COLONY,IN FRONT OF AMBIKA HARDWARE"}, {"busstop": "Maruthi Layout,MARUTHI LAYOUT,OPPOSITE OF SRINIVASAN GROUNDNUT SWEETS"}, {"busstop": "Bilwarada Halli,BILAVARADAHALLI,IN FRONT OF TAJ HERITAGE"}, {"busstop": "Shanubhogana Halli,SHANUBHOGANA HALLI,IN FRONT OF GOVT.HIGHER PRIMARY SCHOOL"}, {"busstop": "Kenchanayakanadoddi,KANCHAGAYANADODDI,OPPOSITE OF SIDDESHWARA ENTERPRISES"}, {"busstop": "Byatarayana Doddi,BYATARAYANA DODDI,OPPOSITE OF GOVT.PRIMARY SCHOOL"}, {"busstop": "Byatarayana Doddi Cross,BYATARAYANA DODDI,IN FRONT OF DOOR NO 47"}, {"busstop": "Shylendra Doddi"}, {"busstop": "Gulaka Malai,GULAKAMALE,IN FRONT OF GRAMA PANCHAYAT OFFICE"}, {"busstop": "Vasudevapura,VASUDEVAPURA,BESIDE REDDY GARAGE"}, {"busstop": "Kaggalipura"}]
  },
  {
    "route_no": "366N",
    "distance": "31.5 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Giddenahalli",
    "departure_from_origin": "07:40,  08:35,  11:50,  14:40,  16:20,  22:10",
    "arrival_at_origin": "07:35, 08:30, 10:50, 11:45, 14:35, 19:20",
    "departure_from_destination": "06:15, 07:10, 09:30, 10:25, 13:15, 17:55",
    "arrival_at_destination": "09:00,  09:55,  13:10,  16:00,  17:50,  23:25",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Circle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "Otis Circle"}, {"busstop": "Kallabala Cross"}, {"busstop": "Kallabalu"}, {"busstop": "Giddenahalli"}]
  },
  {
    "route_no": "366P",
    "distance": "43.6 KM",
    "origin": "Meenakshi Layout",
    "destination": "Bannerghatta National Park",
    "departure_from_origin": "07:45,  14:45",
    "arrival_at_origin": "12:10, 18:25",
    "departure_from_destination": "10:00, 17:20",
    "arrival_at_destination": "09:55,  16:50",
    "map_json_content": [{"busstop": "Meenakshi Layout,MEENAKSHI LAYOUT,BESIDE RAJU WINES"}, {"busstop": "Sidedahalli,SIDEDAHALLI,BESIDE ASHWATHA KHATTE"}, {"busstop": "Bone Mill,BONE MILL,BESIDE MEERA BAR AND RESTAURANT"}, {"busstop": "Bagalagunte,BAGALAGUNTE,BESIDE HOTEL ELITE"}, {"busstop": "Widia School Bagalagunte,T.DASARAHALLI,BESIDE NANDINI TRADERS"}, {"busstop": "8th Mile T Dasarahalli"}, {"busstop": "T Dasarahalli"}, {"busstop": "Jalahalli Cross"}, {"busstop": "Peenya 1st stage"}, {"busstop": "S R S Jalahalli Cross"}, {"busstop": "CMTI Goragunte Palya"}, {"busstop": "Goragunte Palya"}, {"busstop": "MEI Guragunte Palya"}, {"busstop": "YPR RMC"}, {"busstop": "Govardhan"}, {"busstop": "Government Soap Factory,RAJAJINAGARA 1ST BLOCK,BESIDE ORION MALL"}, {"busstop": "Mahalakshmi Layout Entarence,RAJAJINAGARA 1ST BLOCK,BESIDE EUREKA FORBES LTD"}, {"busstop": "Rajaji Nagar 1st Block,RAJAJINAGARA,BESIDE JANHAVI MEDICALS"}, {"busstop": "Canara Bank Rajaji Nagara,RAJAJINAGARA,BESIDE KULAKARNI CLINIC"}, {"busstop": "Navrang Talkies,RAJAJINAGARA 2ND BLOCK,OPPOSITE OF DATTATREYA JEWELLARY"}, {"busstop": "Basaveshwara College,RAJAJINAGARA 2ND BLOCK,BESIDE BASAVESHWARA COLLEGE"}, {"busstop": "Rajaji Nagara ESI Hospital,RAJAJINAGARA 2ND BLOCK,BESIDE ESI HOSPITAL"}, {"busstop": "Old Police Station ESI,RAJAJINAGARA 4TH BLOCK,OPPOSITE OF RAJU ELECTRICALS"}, {"busstop": "Bashyam Circle,RAJAJINAGARA 4TH BLOCK,BESIDE SUMAN SHUDDA ABAHARANA"}, {"busstop": "Rajajinagara 6th Block,RAJAJINAGARA,BESIDE RAJU SCOOTER GARAGE"}, {"busstop": "Prasanna Talkies Magadi Road,RAJAJINAGARA,OPPOSITE OF SHRINGAR JEWELLARY"}, {"busstop": "Magadi Road 10th Cross,Cholarapalya,Metro Station"}, {"busstop": "Magadi Road 5th Cross"}, {"busstop": "Magadi Road 1st Cross,BANGALORE RAILWAY STATION,OPPOSITE OF LEPROSI HOSPITAL"}, {"busstop": "Binni Mill,COTTONPET,BINNIMILL"}, {"busstop": "Binni Pete,BINNI PETE,HOPCOMS MARKET"}, {"busstop": "Sirsi Circle"}, {"busstop": "Vinayaka Talkies KR Market"}, {"busstop": "Royan Circle,CHAMARAJA PETE,CHURCH OPEN SPACE, OPPOSITE BHARATH PETROL BUNK"}, {"busstop": "Makkala Koota"}, {"busstop": "Sajjan Rao Circle"}, {"busstop": "Lalbhag West Gate,BASAVANAGUDI,BESIDE DENTSPRO INDIA"}, {"busstop": "RVTeachers College,BASAVANAGUDI,OPPOSITE OF MEGA AGENSIS"}, {"busstop": "Southend Circle"}, {"busstop": "Jayanagara 3rd block,JAYANAGARA 3RD BLOCK,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Jayanagara Bus Stand,JAYANAGARA 4TH BLOCK,BESIDE KCC BUILDING"}, {"busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,BESIDE UDUPI UPAHAR"}, {"busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE CARMEL CONVENT"}, {"busstop": "Pump House Jayanagar East End,JAYANAGARA 9TH BLOCK,BESIDE SURABHI ARTS"}, {"busstop": "Jayadeva Hospital,JAYANAGARA 9TH BLOCK,HEALTHY INTERNATIONAL HOMEOPATHY"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Sampigehalli,BHANNERGAHTTA POST"}, {"busstop": "Bannerghatta National Park"}]
  },
  {
    "route_no": "366Q",
    "distance": "31.5 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Dyavasandra",
    "departure_from_origin": "06:30,  10:00,  15:05,  18:10,  21:20",
    "arrival_at_origin": "06:30, 09:55, 18:05, 20:45",
    "departure_from_destination": "05:10, 08:30, 16:55, 19:25",
    "arrival_at_destination": "08:00,  11:25,  16:25,  19:20,  22:35",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Cricle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "KEB"}, {"busstop": "Madapatna,Open Area"}, {"busstop": "Haragadde,Open area"}, {"busstop": "Dyavasandra,Open Area"}]
  },
  {
    "route_no": "366QA",
    "distance": "32.8 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Nosenoor",
    "departure_from_origin": "09:20,  13:05,  16:50",
    "arrival_at_origin": "09:15, 13:00, 16:45",
    "departure_from_destination": "07:40, 11:25, 15:10",
    "arrival_at_destination": "10:55,  14:40,  18:25",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Cricle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "KEB"}, {"busstop": "Madapatna,Open Area"}, {"busstop": "Haragadde,Open area"}, {"busstop": "Dyavasandra,Open Area"}, {"busstop": "Nosenoor"}]
  },
  {
    "route_no": "366R",
    "distance": "30.1 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Vaddarapalya",
    "departure_from_origin": "06:50,  07:50,  10:10,  11:30,  15:10,  16:00,  18:50,  20:00",
    "arrival_at_origin": "06:45, 07:45, 09:50, 11:20, 15:00, 15:55, 18:40, 19:20",
    "departure_from_destination": "05:30, 06:20, 08:25, 09:50, 13:30, 14:30, 17:10, 17:55",
    "arrival_at_destination": "08:20,  09:20,  11:35,  13:00,  16:40,  17:25,  20:20,  21:25",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Cricle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "KEB"}, {"busstop": "TATA Advance,Beside Open Area"}, {"busstop": "Vaddarapalya"}]
  },
  {
    "route_no": "366T",
    "distance": "34.9 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Lingapura",
    "departure_from_origin": "07:35,  15:40,  20:40",
    "arrival_at_origin": "07:30, 10:40, 20:10",
    "departure_from_destination": "06:00, 09:10, 18:40",
    "arrival_at_destination": "09:05,  18:10,  22:10",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Cricle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "KEB"}, {"busstop": "Madapatna,Open Area"}, {"busstop": "Haragadde,Open area"}, {"busstop": "Nayanahalli Cross"}, {"busstop": "Nayanahalli"}, {"busstop": "Lingapura,ANEKAL TALUK,IN FRONT OF SRI MARAMMA DEVI TEMPLE"}]
  },
  {
    "route_no": "366V",
    "distance": "34 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Nayanahalli",
    "departure_from_origin": "07:05,  14:50,  20:30",
    "arrival_at_origin": "07:00, 10:20, 18:00",
    "departure_from_destination": "05:30, 08:45, 16:25",
    "arrival_at_destination": "08:40,  16:20,  22:00",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Cricle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "KEB"}, {"busstop": "Madapatna,Open Area"}, {"busstop": "Haragadde,Open area"}, {"busstop": "Nayanahalli Cross"}, {"busstop": "Nayanahalli"}]
  },
  {
    "route_no": "366W",
    "distance": "30.2 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Vaderamanchanahalli",
    "departure_from_origin": "07:45,  11:20,  15:45,  19:35",
    "arrival_at_origin": "07:40, 11:15, 15:40, 19:30",
    "departure_from_destination": "06:10, 09:45, 14:05, 17:50",
    "arrival_at_destination": "09:15,  12:50,  17:20,  21:10",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Circle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "YK Hospital"}, {"busstop": "Vaderamanchanahalli"}]
  },
  {
    "route_no": "366X",
    "distance": "43.7 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Tattekere",
    "departure_from_origin": "06:45,  14:45,  19:30",
    "arrival_at_origin": "06:40, 18:50",
    "departure_from_destination": "04:40, 16:50",
    "arrival_at_destination": "08:45,  16:45,  21:30",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Cricle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "Otis Circle"}, {"busstop": "Kallabala Cross"}, {"busstop": "Kallabalu"}, {"busstop": "Mahanthalingapura"}, {"busstop": "Krishnadoddi Bannerghatta Road"}, {"busstop": "Yellammanadoddi"}, {"busstop": "Mahadevana Doddi"}, {"busstop": "Colony Mahadevana Doddi"}, {"busstop": "Kuppasiddana Doddi"}, {"busstop": "Siddayyanadoddi"}, {"busstop": "Uraganadoddi Bannerughatta Area"}, {"busstop": "Kanivemadhapura Cross"}, {"busstop": "Tattekere"}]
  },
  {
    "route_no": "366Z",
    "distance": "39.4 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Anekal Bus Stand",
    "departure_from_origin": "05:40,  06:20,  06:50,  07:30,  08:10,  08:30,  08:50,  09:10,  09:30,  10:10,  10:30,  11:15,  12:15,  12:55,  13:35,  14:55,  16:20,  16:35,  17:00,  17:20,  17:40,  17:50,  18:45,  19:15,  20:05,  20:45,  21:50",
    "arrival_at_origin": "00:00, 07:25, 08:05, 09:25, 10:05, 10:25, 10:45, 11:25, 11:45, 12:50, 13:30, 14:50, 16:05, 16:30, 16:50, 17:45, 18:15, 18:45, 19:00, 19:35, 20:15, 20:20, 21:50, 22:55, 23:10",
    "departure_from_destination": "05:30, 06:10, 07:30, 08:10, 08:30, 08:50, 09:30, 09:50, 10:55, 11:35, 12:55, 14:15, 14:35, 14:55, 15:40, 15:55, 16:20, 16:50, 17:15, 17:40, 18:20, 18:30, 20:05, 21:10, 21:40, 22:20",
    "arrival_at_destination": "00:00,  07:25,  08:05,  08:45,  09:25,  10:05,  10:25,  10:45,  11:05,  11:20,  12:05,  12:25,  13:00,  14:10,  14:50,  15:25,  16:45,  18:15,  18:25,  18:55,  19:10,  19:35,  19:40,  20:40,  21:10,  21:50,  22:40",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Cricle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "KEB"}, {"busstop": "Madapatna,Open Area"}, {"busstop": "Haragadde,Open area"}, {"busstop": "Kumbarahalli,Open area"}, {"busstop": "Suragajakkanahalli Anekal Road,Opp to provision stores"}, {"busstop": "Indlawadi Cross,Opp to open area"}, {"busstop": "Gowrenahalli,Opp to petty shop"}, {"busstop": "Muthyalamadu Cross,Opp to burial ground"}, {"busstop": "Shanimahathma Devasthana,Opp to Temple"}, {"busstop": "Anekal Circle,ANEKAL,IN FRONT OF HOTEL SRI SAI SAGAR"}, {"busstop": "Chowdareddy Circle,ANEKAL,OPPOSITE OF VIJAYA NURSING HOME"}, {"busstop": "Anekal Bus Stand"}]
  },
  {
    "route_no": "367",
    "distance": "23.76 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Ramasandra",
    "departure_from_origin": "06:40,  09:20,  14:45,  18:00,  21:25",
    "arrival_at_origin": "06:35, 09:15, 12:10, 17:55, 20:45",
    "departure_from_destination": "05:30, 08:00, 11:05, 16:35, 19:25",
    "arrival_at_destination": "07:55,  10:35,  16:05,  19:20,  22:45",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Tuliph Resort"}, {"busstop": "Sakalwara"}, {"busstop": "Malenallasandra"}, {"busstop": "Ramasandra"}]
  },
  {
    "route_no": "367C",
    "distance": "19.1 KM",
    "origin": "Krishnarajendra Market",
    "destination": "CK Palya",
    "departure_from_origin": "06:05,  07:25,  08:15,  09:40,  15:45,  16:45,  18:20,  19:25,  21:05,  22:05",
    "arrival_at_origin": "07:20, 08:10, 09:35, 10:45, 12:10, 18:15, 19:20, 20:35, 21:35",
    "departure_from_destination": "06:20, 07:10, 08:30, 09:45, 11:10, 17:15, 18:15, 19:30, 20:35",
    "arrival_at_destination": "07:05,  08:25,  09:15,  10:40,  16:45,  17:45,  19:25,  20:30,  22:05,  23:05",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm CK Palya"}, {"busstop": "Chikkammanahalli Cross"}, {"busstop": "Dinne"}, {"busstop": "CK Palya"}]
  },
  {
    "route_no": "367CA",
    "distance": "21.9 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Chinnaiahna Palya",
    "departure_from_origin": "07:05,  09:35,  16:45,  19:20,  22:15",
    "arrival_at_origin": "07:00, 09:30, 12:05, 19:15, 21:45",
    "departure_from_destination": "05:50, 08:20, 11:05, 18:15, 20:35",
    "arrival_at_destination": "08:15,  10:35,  17:45,  20:30,  23:25",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Layout"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Koli Farm CK Palya"}, {"busstop": "Chikkammanahalli Cross"}, {"busstop": "Dinne"}, {"busstop": "CK Palya"}, {"busstop": "Chinnaiahna Palya"}]
  },
  {
    "route_no": "367D",
    "distance": "19.8 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Kalkere",
    "departure_from_origin": "07:05,  09:15,  15:00,  19:25,  22:00",
    "arrival_at_origin": "07:00, 09:10, 12:00, 17:05, 21:30",
    "departure_from_destination": "06:00, 08:10, 10:50, 16:05, 20:30",
    "arrival_at_destination": "08:05,  10:20,  16:00,  20:25,  22:50",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama Bismilla Nagara Bannerghatta Road"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}]
  },
  {
    "route_no": "367F",
    "distance": "20 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Pillaganahalli",
    "departure_from_origin": "07:15,  09:45,  16:25,  19:20,  22:05",
    "arrival_at_origin": "07:10, 09:40, 12:35, 19:15, 21:35",
    "departure_from_destination": "05:00, 08:30, 11:25, 18:05, 20:35",
    "arrival_at_destination": "08:25,  10:55,  17:35,  20:30,  23:05",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "St Marthas Hospital,BESIDE POLICE HEAD QUARTERS"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road,KALKERE,OPPOSITE OF FOREST OFFICE,BNP"}, {"busstop": "Weavers Colony,WEAVERS COLONY,IN FRONT OF AMBIKA HARDWARE"}, {"busstop": "Pillaganahalli "}]
  },
  {
    "route_no": "368",
    "distance": "23.5 KM",
    "origin": "Shivajinagar Bus Station",
    "destination": "Bannerghatta National Park",
    "departure_from_origin": "06:55,  07:20,  08:00,  09:25,  10:00,  10:40,  14:35,  16:10,  17:00,  17:30,  19:15,  22:20",
    "arrival_at_origin": "07:15, 09:20, 09:55, 10:35, 12:15, 16:05, 16:45, 17:25, 19:10, 19:55, 20:10, 21:50",
    "departure_from_destination": "06:00, 08:10, 08:40, 09:20, 11:05, 14:50, 15:30, 16:15, 17:55, 18:45, 18:50, 20:35",
    "arrival_at_destination": "08:05,  08:35,  09:15,  10:35,  11:15,  11:55,  15:45,  17:25,  18:20,  18:40,  20:30,  23:20",
    "map_json_content": [{"busstop": "Shivajinagar Bus Station"}, {"busstop": "Maniksha Pardeground,M.G.ROAD,BESIDE PARADE GROUND"}, {"busstop": "Mayohall"}, {"busstop": "Johnson Market"}, {"busstop": "Anepalya"}, {"busstop": "MICO Gate"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Sampigehalli,BHANNERGAHTTA POST"}, {"busstop": "Bannerghatta National Park"}]
  },
  {
    "route_no": "368D",
    "distance": "15.2 KM",
    "origin": "Shivajinagar Bus Station",
    "destination": "Shanthinikethana Layout",
    "departure_from_origin": "08:00,  10:00,  12:15,  14:05,  15:55",
    "arrival_at_origin": "09:55, 12:10, 14:00, 15:50",
    "departure_from_destination": "08:55, 11:20, 13:10, 15:00",
    "arrival_at_destination": "08:50,  10:50,  13:05,  14:55,  16:45",
    "map_json_content": [{"busstop": "Shivajinagar Bus Station"}, {"busstop": "Indian Express,BESIDE INDIAN EXPRESS BUILDING"}, {"busstop": "MG statue"}, {"busstop": "Museum Kasturba Road"}, {"busstop": "Mallya Hospital"}, {"busstop": "Richmond Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Anand Ashrama"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate"}, {"busstop": "Government Hospital"}, {"busstop": "Shanthinikethana Layout"}]
  },
  {
    "route_no": "368F",
    "distance": "19.5 KM",
    "origin": "Shivajinagar Bus Station",
    "destination": "Devarachikkanahalli",
    "departure_from_origin": "06:55,  09:30,  15:55,  18:30,  20:40",
    "arrival_at_origin": "06:50, 09:25, 11:35, 18:25, 20:35",
    "departure_from_destination": "05:50, 08:25, 10:35, 17:25, 19:35",
    "arrival_at_destination": "07:55,  10:30,  16:55,  19:30,  21:40",
    "map_json_content": [{"busstop": "Shivajinagar Bus Station"}, {"busstop": "Indian Express,BESIDE INDIAN EXPRESS BUILDING"}, {"busstop": "Mahathma Gandhi Statue,BESIDE CHINNASWAMY STADIUM"}, {"busstop": "Museum Kasturba Road,IN FORNT OF UB TOWER"}, {"busstop": "St .Josephs high schools"}, {"busstop": "Richmond Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden Police Station,WILSON GARDEN,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "HSBC"}, {"busstop": "Ayyappa Mantapa"}, {"busstop": "Vijaya Bank Layout"}, {"busstop": "Petrol Bunk"}, {"busstop": "Devarachikkanahalli,KODICHIKKANAHALLI,BESIDE ARALIKATTE, GOVERNMENT PRIMARY SCHOOL"}]
  },
  {
    "route_no": "369",
    "distance": "17.28 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Hulimavu",
    "departure_from_origin": "06:20,  07:00,  07:20,  08:00,  08:50,  09:10,  10:15,  11:00,  11:25,  14:40,  15:00,  16:30,  16:35,  17:10,  18:25,  18:55,  19:00,  20:35,  21:00",
    "arrival_at_origin": "06:15, 06:55, 07:15, 07:55, 08:45, 09:05, 09:45, 10:35, 11:20, 14:35, 14:55, 16:25, 16:30, 17:05, 18:20, 18:50, 18:55, 20:30, 20:55",
    "departure_from_destination": "05:30, 06:05, 06:30, 07:10, 07:55, 08:15, 08:55, 09:45, 10:30, 13:45, 14:05, 15:35, 16:15, 17:25, 18:00, 19:45, 20:00",
    "arrival_at_destination": "07:05,  07:50,  08:10,  08:50,  09:40,  10:00,  11:05,  11:50,  12:25,  15:30,  15:45,  17:20,  17:30,  17:55,  19:20,  19:40,  19:55,  21:15,  21:50",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Makkala Koota"}, {"busstop": "Mahila samaja"}, {"busstop": "National College"}, {"busstop": "Lalbhag West Gate,BASAVANAGUDI,BESIDE DENTSPRO INDIA"}, {"busstop": "RVTeachers College,BASAVANAGUDI,OPPOSITE OF MEGA AGENSIS"}, {"busstop": "Vijaya College,BASAVANAGUDI,BESIDE VIJAYA COLLEGE"}, {"busstop": "Madhavan Park,JAYANAGARA 2ND BLOCK,OPPOSITE OF RAMAKRISHNA NURSING HOME"}, {"busstop": "Jayanagara 3rd block,JAYANAGARA 3RD BLOCK,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Jayanagara Bus Stand,JAYANAGARA 4TH BLOCK,BESIDE KCC BUILDING"}, {"busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,BESIDE UDUPI UPAHAR"}, {"busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE CARMEL CONVENT"}, {"busstop": "Pump House Jayanagar East End,JAYANAGARA 9TH BLOCK,BESIDE SURABHI ARTS"}, {"busstop": "Jayadeva Hospital,JAYANAGARA 9TH BLOCK,HEALTHY INTERNATIONAL HOMEOPATHY"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Hulimavu"}]
  },
  {
    "route_no": "369B",
    "distance": "12.5 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Shanthinikethana Layout",
    "departure_from_origin": "06:05,  06:55,  07:45,  08:30,  09:25,  10:20,  12:30,  14:05,  14:40,  15:55,  16:55,  18:40,  19:15,  20:30,  21:30",
    "arrival_at_origin": "06:00, 06:50, 07:40, 08:25, 09:20, 10:15, 11:25, 12:30, 14:35, 15:50, 16:50, 18:35, 19:10, 20:25, 21:00",
    "departure_from_destination": "05:15, 06:10, 06:55, 07:40, 08:35, 09:20, 10:40, 11:40, 13:45, 15:00, 16:00, 17:45, 18:15, 19:35, 20:10",
    "arrival_at_destination": "06:50,  07:40,  08:30,  09:15,  10:10,  11:10,  13:30,  14:55,  15:30,  16:45,  17:40,  19:30,  20:05,  21:15,  22:20",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Mahila samaja"}, {"busstop": "National College"}, {"busstop": "Lalbhag West Gate,BASAVANAGUDI,BESIDE TECHNOMARK TELEVISION"}, {"busstop": "RVTeachers College,BASAVANAGUDI,OPPOSITE OF MEGA AGENSIS"}, {"busstop": "Vijaya College,BASAVANAGUDI,BESIDE VIJAYA COLLEGE"}, {"busstop": "Madhavan Park,JAYANAGARA 2ND BLOCK,OPPOSITE OF RAMAKRISHNA NURSING HOME"}, {"busstop": "Jayanagara 3rd block,JAYANAGARA 3RD BLOCK,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Jayanagara Bus Stand,JAYANAGARA 4TH BLOCK,BESIDE KCC BUILDING"}, {"busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,BESIDE UDUPI UPAHAR"}, {"busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE CARMEL CONVENT"}, {"busstop": "Pump House Jayanagar East End,JAYANAGARA 9TH BLOCK,BESIDE SURABHI ARTS"}, {"busstop": "Jayadeva Hospital,JAYANAGARA 9TH BLOCK,HEALTHY INTERNATIONAL HOMEOPATHY"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate"}, {"busstop": "Government Hospital"}, {"busstop": "Shanthinikethana Layout"}]
  },
  {
    "route_no": "369C",
    "distance": "16.3 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Hulimavu",
    "departure_from_origin": "05:30,  06:40,  07:20,  08:00,  08:30,  09:05,  09:45,  10:00,  10:30,  11:05,  12:15,  12:55,  14:05,  14:55,  15:30,  15:55,  16:05,  17:20,  18:25,  18:30,  19:40,  20:25,  21:00,  22:10",
    "arrival_at_origin": "06:35, 07:15, 07:55, 08:25, 09:00, 09:40, 09:55, 10:25, 11:00, 11:40, 12:10, 12:50, 14:00, 14:50, 15:25, 15:50, 16:00, 17:15, 18:20, 18:25, 19:35, 20:20, 20:55, 21:40, 22:50",
    "departure_from_destination": "05:45, 06:20, 07:00, 07:30, 08:05, 08:45, 09:00, 09:30, 10:05, 10:45, 11:20, 11:55, 13:10, 13:55, 14:30, 14:55, 15:05, 16:20, 17:20, 17:30, 18:35, 19:25, 20:00, 20:45, 22:00",
    "arrival_at_destination": "06:15,  07:35,  08:15,  08:55,  09:25,  10:00,  10:40,  10:55,  11:25,  12:00,  13:10,  13:50,  15:00,  15:50,  16:30,  16:50,  17:00,  18:15,  19:25,  20:40,  21:20,  21:55,  23:00",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Anand Ashrama"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Hulimavu"}]
  },
  {
    "route_no": "369D",
    "distance": "17 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Shanthinikethana Layout",
    "departure_from_origin": "06:00,  08:00,  09:20,  10:00,  11:35,  14:00,  15:35,  16:25,  17:50,  18:25,  19:35,  20:50",
    "arrival_at_origin": "05:55, 07:55, 09:15, 09:55, 11:05, 13:20, 15:30, 16:20, 17:45, 18:20, 19:30, 20:20, 21:15",
    "departure_from_destination": "05:00, 07:00, 08:25, 09:00, 10:15, 12:30, 14:40, 15:25, 16:55, 17:25, 18:45, 19:25, 20:30",
    "arrival_at_destination": "06:55,  08:55,  10:10,  10:50,  12:25,  14:55,  16:25,  17:20,  18:40,  19:20,  20:25,  21:45",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama Bismilla Nagara Bannerghatta Road"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate"}, {"busstop": "Government Hospital"}, {"busstop": "Shanthinikethana Layout"}]
  },
  {
    "route_no": "369E",
    "distance": "15.1 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Chikkakammanahalli",
    "departure_from_origin": "06:05,  06:35,  07:55,  08:00,  08:25,  09:45,  10:10,  10:45,  13:55,  14:20,  15:40,  15:45,  16:10,  17:30,  18:00,  18:25,  19:45,  20:15,  21:35",
    "arrival_at_origin": "06:00, 07:50, 08:20, 09:40, 10:05, 10:40, 11:55, 12:35, 15:35, 15:40, 16:05, 17:25, 17:55, 18:20, 19:40, 19:45, 20:10",
    "departure_from_destination": "05:10, 07:00, 07:30, 08:50, 09:15, 09:45, 11:05, 11:40, 14:45, 14:50, 15:15, 16:35, 17:05, 17:35, 18:50, 18:55, 19:20",
    "arrival_at_destination": "06:55,  07:25,  08:45,  08:50,  09:15,  10:35,  11:00,  11:35,  14:45,  15:10,  16:20,  16:35,  17:00,  18:20,  18:50,  19:15,  20:35,  21:05,  22:20",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama Bismilla Nagara Bannerghatta Road"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Nobo Nagara"}, {"busstop": "AECS Dental College"}, {"busstop": "Doddakammnahalli"}, {"busstop": "Chikkakammanahalli"}]
  },
  {
    "route_no": "369F",
    "distance": "21 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Hommadevanahalli",
    "departure_from_origin": "06:00,  06:40,  07:30,  09:10,  14:55,  17:50,  19:15,  20:50",
    "arrival_at_origin": "06:35, 09:05, 17:45, 20:15",
    "departure_from_destination": "05:30, 07:55, 16:35, 19:05",
    "arrival_at_destination": "07:00,  07:50,  08:40,  10:20,  16:05,  19:00,  20:25,  22:00",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama Bismilla Nagara Bannerghatta Road"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Nobo Nagara"}, {"busstop": "AECS Dental College"}, {"busstop": "Doddakammnahalli"}, {"busstop": "Chikkakammanahalli"}, {"busstop": "Hommadevanahalli"}]
  },
  {
    "route_no": "369G",
    "distance": "19.8 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Chikkakammanahalli",
    "departure_from_origin": "10:25,  12:45",
    "arrival_at_origin": "12:40, 19:10",
    "departure_from_destination": "11:35, 18:05",
    "arrival_at_destination": "11:30,  13:50",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama Bismilla Nagara Bannerghatta Road"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Nobo Nagara"}, {"busstop": "AECS Dental College"}, {"busstop": "Doddakammnahalli"}, {"busstop": "Chikkakammanahalli"}]
  },
  {
    "route_no": "369H",
    "distance": "15.07 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Arekere MICO Layout",
    "departure_from_origin": "13:15,  15:10,  17:30,  19:45",
    "arrival_at_origin": "15:05, 17:25, 19:20, 21:35",
    "departure_from_destination": "14:15, 16:35, 18:30, 20:45",
    "arrival_at_destination": "14:00,  16:05,  18:25,  20:40",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama Bismilla Nagara Bannerghatta Road"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate"}, {"busstop": "Arekere MICO Layout"}]
  },
  {
    "route_no": "369J",
    "distance": "23.5 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "CK Palya",
    "departure_from_origin": "06:55,  09:35,  15:05,  18:10,  21:15",
    "arrival_at_origin": "06:50, 09:30, 18:20, 20:45",
    "departure_from_destination": "05:45, 08:15, 16:50, 19:30",
    "arrival_at_destination": "08:10,  10:50,  16:20,  19:25,  22:30",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama Bismilla Nagara Bannerghatta Road"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Nobo Nagara"}, {"busstop": "AECS Dental College"}, {"busstop": "Doddakammnahalli"}, {"busstop": "Chikkakammanahalli"}, {"busstop": "Hommadevanahalli"}, {"busstop": "Dinne"}, {"busstop": "CK Palya"}]
  },
  {
    "route_no": "369M",
    "distance": "16.3 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Hulimavu",
    "departure_from_origin": "09:15,  11:25,  13:25,  16:00,  18:00",
    "arrival_at_origin": "09:10, 11:20, 13:20, 15:20, 17:55",
    "departure_from_destination": "08:15, 10:25, 12:25, 14:25, 17:00",
    "arrival_at_destination": "10:05,  12:20,  14:20,  16:55,  18:55",
    "map_json_content": [{"busstop": "Vijayanagara TTMC,TTMC"}, {"busstop": "Attiguppe,RPC LAYOUT,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Deepanjalinagara Depot-16,DEEPANJALI NAGARA,OPPOSITE OF DEPOT 16"}, {"busstop": "Bapuji Nagara"}, {"busstop": "New Guddadahalli"}, {"busstop": "Azad Nagar"}, {"busstop": "Sirsi Circle"}, {"busstop": "Chamarajapete Ramamandira,CHAMARAJA PETE,IN FRONT OF AXIS BANK"}, {"busstop": "Chamarajapete,CHAMARAJA PETE,IN FRONT OF MANAPURAM GOLD"}, {"busstop": "Bangalore High School,SHANKARAPURAM,IN FRONT OF MARATHA HOSTEL"}, {"busstop": "Ramakrishna Ashrama,SHANKARAPURAM,IN FRONT OF SBI BANK"}, {"busstop": "North Road,BASAVANAGUDI,BESIDE ADHI BASAVA TEMPLE"}, {"busstop": "Basavanagudi Police Station"}, {"busstop": "Netakallappa Circle,BASAVANAGUDI,BESIDE JANAPRIYA BAR & RESTAURENT"}, {"busstop": "Nagasandra Circle,BASAVANAGUDI,BESIDE SHRINGARA SAGAR JEWELLERY"}, {"busstop": "Southend Circle,BASAVANAGUDI,BESIDE NTT DATA OFFICE"}, {"busstop": "Madhavan Park,JAYANAGARA 2ND BLOCK,OPPOSITE OF RAMAKRISHNA NURSING HOME"}, {"busstop": "Jayanagara 3rd block,JAYANAGARA 3RD BLOCK,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Jayanagara Bus Stand,JAYANAGARA 4TH BLOCK,BESIDE KCC BUILDING"}, {"busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,BESIDE UDUPI UPAHAR"}, {"busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE CARMEL CONVENT"}, {"busstop": "Pump House Jayanagar East End,JAYANAGARA 9TH BLOCK,BESIDE SURABHI ARTS"}, {"busstop": "Jayadeva Hospital,JAYANAGARA 9TH BLOCK,HEALTHY INTERNATIONAL HOMEOPATHY"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Hulimavu"}]
  },
  {
    "route_no": "369N",
    "distance": "15.8 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Yelenahalli",
    "departure_from_origin": "06:35,  07:10,  08:00,  08:25,  09:00,  09:55,  12:15,  14:05,  14:20,  14:40,  15:55,  16:55,  17:40,  18:10,  18:55,  20:25,  21:20",
    "arrival_at_origin": "06:30, 07:05, 07:55, 08:20, 08:55, 09:50, 10:35, 11:20, 12:10, 14:00, 14:35, 15:50, 16:50, 17:10, 18:05, 18:50, 19:55, 20:50",
    "departure_from_destination": "05:40, 06:15, 07:05, 07:30, 08:05, 08:55, 09:45, 10:25, 11:20, 13:10, 13:45, 15:00, 16:00, 16:20, 17:15, 17:55, 19:05, 19:55",
    "arrival_at_destination": "07:25,  08:00,  08:50,  09:15,  09:55,  10:50,  13:05,  14:55,  15:05,  15:30,  16:45,  17:50,  18:30,  19:00,  19:50,  21:10,  22:10",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Mahila samaja"}, {"busstop": "National College"}, {"busstop": "Lalbhag West Gate,BASAVANAGUDI,BESIDE TECHNOMARK TELEVISION"}, {"busstop": "RVTeachers College,BASAVANAGUDI,OPPOSITE OF MEGA AGENSIS"}, {"busstop": "Vijaya College,BASAVANAGUDI,BESIDE VIJAYA COLLEGE"}, {"busstop": "Madhavan Park,JAYANAGARA 2ND BLOCK,OPPOSITE OF RAMAKRISHNA NURSING HOME"}, {"busstop": "Jayanagara 3rd block,JAYANAGARA 3RD BLOCK,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Jayanagara Bus Stand,JAYANAGARA 4TH BLOCK,BESIDE KCC BUILDING"}, {"busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,BESIDE UDUPI UPAHAR"}, {"busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE CARMEL CONVENT"}, {"busstop": "Pump House Jayanagar East End,JAYANAGARA 9TH BLOCK,BESIDE SURABHI ARTS"}, {"busstop": "Jayadeva Hospital,JAYANAGARA 9TH BLOCK,HEALTHY INTERNATIONAL HOMEOPATHY"}, {"busstop": "MICO Layout"}, {"busstop": "JP Nagara 3rd Phase,JP NAGARA 3RD PHASE,BESIDE COLLABERA"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Jn of 80 Feet Road"}, {"busstop": "Shanthinikethana Layout"}, {"busstop": "Shiridi Sai Temple BDA 80ft RD"}, {"busstop": "Jn of BDA Ring Road"}, {"busstop": "Yelenahalli"}]
  },
  {
    "route_no": "369P",
    "distance": "20.91 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Beguru",
    "departure_from_origin": "11:30,  14:25",
    "arrival_at_origin": "11:25, 14:20, 17:15",
    "departure_from_destination": "10:15, 13:10, 16:05",
    "arrival_at_destination": "12:40,  15:35",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota,KEMPEGOWDA HOSPITAL"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Layout"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Nobo Nagara"}, {"busstop": "AECS Dental College"}, {"busstop": "Doddakammnahalli"}, {"busstop": "Chikkakammanahalli"}, {"busstop": "St Marys School"}, {"busstop": "Nobel Residency Gate,BOMMANAHALLI-BEGURU VIA JIGANI,OPPOSITE OF GR.QUEENS PRIDE APARTMENT"}, {"busstop": "Beguru"}]
  },
  {
    "route_no": "369Q",
    "distance": "11.2 KM",
    "origin": "Jayanagara Bus Stand",
    "destination": "Chikkakammanahalli",
    "departure_from_origin": "09:50,  11:45,  13:15,  14:45,  16:40,  18:10",
    "arrival_at_origin": "11:40, 13:10, 14:40, 16:10, 18:05",
    "departure_from_destination": "11:00, 12:30, 14:00, 15:30, 17:25",
    "arrival_at_destination": "10:30,  12:25,  13:55,  15:25,  17:20,  18:50",
    "map_json_content": [{"busstop": "Jayanagara Bus Stand,JAYANAGARA 4TH BLOCK,BESIDE JAIN TEMPLE"}, {"busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,BESIDE UDUPI UPAHAR"}, {"busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE CARMEL CONVENT"}, {"busstop": "Pump House Jayanagar East End,JAYANAGARA 9TH BLOCK,BESIDE SURABHI ARTS"}, {"busstop": "Jayanagara 9th East "}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Nobo Nagara"}, {"busstop": "AECS Dental College"}, {"busstop": "Doddakammnahalli"}, {"busstop": "Chikkakammanahalli"}]
  },
  {
    "route_no": "370",
    "distance": "32.6 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Shivanahalli",
    "departure_from_origin": "06:35,  14:10,  17:25",
    "arrival_at_origin": "06:30, 09:25, 17:20",
    "departure_from_destination": "05:10, 08:00, 16:00",
    "arrival_at_destination": "07:55,  15:30,  18:45",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Sarala Birla Academy"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Kalleshwari"}, {"busstop": "Muthurayanaswami Temple"}, {"busstop": "Nagammana Doddi"}, {"busstop": "Ragihalli"}, {"busstop": "Hongemara"}, {"busstop": "Shivanahalli"}]
  },
  {
    "route_no": "370A",
    "distance": "37.6 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Ujappana Doddi",
    "departure_from_origin": "07:40,  16:45,  21:00",
    "arrival_at_origin": "07:35, 11:50, 20:30",
    "departure_from_destination": "05:45, 10:00, 18:40",
    "arrival_at_destination": "09:30,  18:35,  22:50",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Sarala Birla Academy"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Kalleshwari"}, {"busstop": "Muthurayanaswami Temple"}, {"busstop": "Nagammana Doddi"}, {"busstop": "Ragihalli"}, {"busstop": "Hongemara"}, {"busstop": "Shivanahalli"}, {"busstop": "Jaipura Doddi"}, {"busstop": "Kariyappanadoddi"}, {"busstop": "Ujappana Doddi"}]
  },
  {
    "route_no": "370B",
    "distance": "33.7 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Koratageredoddi Bannerghatta",
    "departure_from_origin": "09:05,  12:40,  16:50",
    "arrival_at_origin": "09:00, 12:35, 16:45",
    "departure_from_destination": "07:30, 11:05, 14:15",
    "arrival_at_destination": "10:35,  14:10,  18:20",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkalakoota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama Bismilla Nagara Bannerghatta Road"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Kalleshwari"}, {"busstop": "Nagammana Doddi"}, {"busstop": "Muthurayanaswami Temple"}, {"busstop": "Ragihalli"}, {"busstop": "Mudalayyanadoddi"}, {"busstop": "Koratageredoddi Bannerghatta"}]
  },
  {
    "route_no": "371A",
    "distance": "32.9 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Kaggalipura",
    "departure_from_origin": "06:55,  14:05,  20:45",
    "arrival_at_origin": "06:50, 10:35, 20:15",
    "departure_from_destination": "05:15, 09:00, 18:40",
    "arrival_at_destination": "08:30,  15:40,  22:10",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Gobbaradha Factory,BANNERGHATTA,OPPOSITE OF BALAJI KALYANA MANTAP"}, {"busstop": "Kyasaraguppe"}, {"busstop": "Hakki Pikki Colony,BHOOTANAHALLI,IN FRONT OF OVERHEAD TANK"}, {"busstop": "Shylendra Doddi,SHEELENDRA DODDI,BESIDE OPEN AREA"}, {"busstop": "Byatarayana Doddi Cross"}, {"busstop": "CENTRAL RESERVE POLICE FORCE,GUTTEPALYA,IN FRONT OF TRAINING SCHOOL"}, {"busstop": "Gulaka Malai,GULAKAMALE,IN FRONT OF GRAMA PANCHAYAT OFFICE"}, {"busstop": "Vasudevapura,VASUDEVAPURA,BESIDE REDDY GARAGE"}, {"busstop": "Kaggalipura"}]
  },
  {
    "route_no": "371D",
    "distance": "35 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Kaggalipura",
    "departure_from_origin": "05:30,  08:30,  14:55",
    "arrival_at_origin": "08:25, 21:30",
    "departure_from_destination": "06:55, 20:00",
    "arrival_at_destination": "06:50,  10:00,  16:25",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden Police Station,WILSON GARDEN,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Gobbaradha Factory,BANNERGHATTA,OPPOSITE OF BALAJI KALYANA MANTAP"}, {"busstop": "Kyasaraguppe,KASARGUPPE,OPPOSITE OF ASHAPURA MATAJI MANDIR"}, {"busstop": "Hakki Pikki Colony,BHOOTANAHALLI,IN FRONT OF OVERHEAD TANK"}, {"busstop": "Shylendra Doddi,SHEELENDRA DODDI,BESIDE OPEN AREA"}, {"busstop": "Byatarayana Doddi Cross"}, {"busstop": "CENTRAL RESERVE POLICE FORCE,GUTTEPALYA,IN FRONT OF TRAINING SCHOOL"}, {"busstop": "Gulaka Malai,GULAKAMALE,IN FRONT OF GRAMA PANCHAYAT OFFICE"}, {"busstop": "Vasudevapura,VASUDEVAPURA,BESIDE REDDY GARAGE"}, {"busstop": "Kaggalipura"}]
  },
  {
    "route_no": "372",
    "distance": "37.5 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Indlawadi",
    "departure_from_origin": "07:45,  13:25,  17:30,  21:40",
    "arrival_at_origin": "07:40, 11:50, 17:30, 21:10",
    "departure_from_destination": "05:50, 10:05, 15:40, 19:30",
    "arrival_at_destination": "09:35,  15:10,  19:25,  23:15",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Sarala Birla Academy"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Circle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "Otis Circle"}, {"busstop": "Kallabala Cross"}, {"busstop": "Vaderamanchanahalli"}, {"busstop": "Konasandra Cross Jigani"}, {"busstop": "Bommandanahalli Cross"}, {"busstop": "Dyavasandra Cross"}, {"busstop": "Nosenoor Cross"}, {"busstop": "Gollhalli,Open Area"}, {"busstop": "Aduru"}, {"busstop": "Aladamara Chikkanahalli Cross"}, {"busstop": "Indlawadi"}]
  },
  {
    "route_no": "372A",
    "distance": "40 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Chikkanahalli",
    "departure_from_origin": "07:05,  15:20,  19:50",
    "arrival_at_origin": "07:00, 10:40, 19:20",
    "departure_from_destination": "05:15, 08:55, 17:35",
    "arrival_at_destination": "08:50,  17:05,  21:35",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Sarala Birla Academy"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Circle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "Otis Circle"}, {"busstop": "Kallabala Cross"}, {"busstop": "Vaderamanchanahalli"}, {"busstop": "Konasandra Cross Jigani"}, {"busstop": "Bommandanahalli Cross"}, {"busstop": "Dyavasandra Cross"}, {"busstop": "Aduru"}, {"busstop": "Aladamara Chikkanahalli Cross"}, {"busstop": "Indlawadi"}, {"busstop": "Chikka Indlawadi"}, {"busstop": "Chikkanahalli"}]
  },
  {
    "route_no": "372B",
    "distance": "33 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Konasandra Bannerghatta Road",
    "departure_from_origin": "06:25,  09:35,  14:20,  20:40",
    "arrival_at_origin": "06:20, 09:30, 20:10",
    "departure_from_destination": "05:00, 08:00, 18:45",
    "arrival_at_destination": "07:55,  11:15,  15:45,  22:05",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Circle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "Otis Circle"}, {"busstop": "Kallabala Cross"}, {"busstop": "Vaderamanchanahalli"}, {"busstop": "Konasandra Cross Jigani"}, {"busstop": "Konasandra Bannerghatta Road"}]
  },
  {
    "route_no": "372C",
    "distance": "25 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Nisarga Badavane",
    "departure_from_origin": "07:00,  09:40,  14:40,  17:50",
    "arrival_at_origin": "09:35, 12:40, 17:45, 20:35",
    "departure_from_destination": "08:20, 11:25, 16:25, 19:15",
    "arrival_at_destination": "08:15,  10:55,  15:55,  19:10",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Nisarga Badavane"}]
  },
  {
    "route_no": "372E",
    "distance": "41.5 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Chinnaiahna Palya",
    "departure_from_origin": "06:35,  15:15",
    "arrival_at_origin": "06:30, 10:15",
    "departure_from_destination": "05:00, 08:30",
    "arrival_at_destination": "08:20,  17:00",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Sarala Birla Academy"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Circle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "Otis Circle"}, {"busstop": "Kallabala Cross"}, {"busstop": "Vaderamanchanahalli"}, {"busstop": "Konasandra Cross Jigani"}, {"busstop": "Bommandanahalli Cross"}, {"busstop": "Dyavasandra Cross"}, {"busstop": "Nosenoor Cross"}, {"busstop": "Gollhalli,Open Area"}, {"busstop": "Aduru"}, {"busstop": "Sonnanayakanpura"}, {"busstop": "Siddayyanapalya"}, {"busstop": "Chinnaiahna Palya"}]
  },
  {
    "route_no": "372F",
    "distance": "29.8 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Nisarga Badavane",
    "departure_from_origin": "06:10,  09:05,  15:35,  19:40",
    "arrival_at_origin": "06:05, 09:00, 19:10",
    "departure_from_destination": "04:50, 07:35, 17:35",
    "arrival_at_destination": "07:30,  10:25,  17:05,  21:10",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden Police Station,WILSON GARDEN,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Nisarga Badavane"}]
  },
  {
    "route_no": "372G",
    "distance": "36.4 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Kadajakkanahalli",
    "departure_from_origin": "07:35,  16:00,  20:00",
    "arrival_at_origin": "07:30, 11:05, 19:30",
    "departure_from_destination": "06:00, 09:35, 18:00",
    "arrival_at_destination": "09:05,  17:30,  21:30",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Sarala Birla Academy"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Circle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "Otis Circle"}, {"busstop": "Kallabala Cross"}, {"busstop": "Vaderamanchanahalli"}, {"busstop": "Konasandra Cross Jigani"}, {"busstop": "Bommandanahalli Cross"}, {"busstop": "Dyavasandra Cross"}, {"busstop": "Nosenoor Cross"}, {"busstop": "Gollhalli,Open Area"}, {"busstop": "Kadajakkanahalli"}]
  },
  {
    "route_no": "372H",
    "distance": "23.58 KM",
    "origin": "Byrasandra",
    "destination": "Nisarga Badavane",
    "departure_from_origin": "08:15",
    "arrival_at_origin": "18:55",
    "departure_from_destination": "17:45",
    "arrival_at_destination": "09:20",
    "map_json_content": [{"busstop": "Byrasandra,JAYANAGARA 1ST BLOCK,BESIDE AKKANDESHWARA SWAMY TEMPLE"}, {"busstop": "Jayanagara 4th Block,TTMC"}, {"busstop": "Telephone Exchange,JAYANAGARA 4TH BLOCK,BESIDE BSNL OFFICE"}, {"busstop": "Jayanagara 40th Cross,JAYANAGARA 5TH BLOCK,BESIDE LIC OFFICE"}, {"busstop": "Jayanagara 5th Block,JAYANAGARA 5TH BLOCK,BESIDE KRISHNA SEVA ASHRAMA HOSPITAL"}, {"busstop": "Marenahalli JPnagar Road,JP NAGARA 1ST PHASE,BESIDE VIVEKS SHOW ROOM"}, {"busstop": "RVDental College,JP NAGARA 1ST PHASE,BESIDE SAI AUTO WORLD"}, {"busstop": "JP Nagara 15th Cross,JP NAGARA 2ND PHASE,OPPOSITE OF CELL CITY"}, {"busstop": "Puttenahalli Jp nagar"}, {"busstop": "Brigade Millenium,R.B.I.LAYOUT,OPPOSITE OF APOLLO PHARMACY"}, {"busstop": "RBI Layout,R.B.I.LAYOUT,OPPOSITE OF SOMESHWARA SABHA BHAVANA"}, {"busstop": "Navodaya Nagara,NAVODAYA NAGARA,IN FRONT OF VISHWAS SHOPPING CENTRE"}, {"busstop": "Kothnuru Dinne,J.P.NAGARA 8TH PHASE,OPPOSITE OF GANESHA TEMPLE"}, {"busstop": "BK Circle,J.P.NAGARA 8TH PHASE,OPPOSITE OF UNIVERSAL GRANITES"}, {"busstop": "Surabhi,J.P.NAGARA 8TH PHASE, SURABHI NAGARA,OPPOSITE OF VINAYAKA TIMBERS"}, {"busstop": "Jambusavari dinne,J.P.NAGARA 8TH PHASE,IN FRONT OF ADITHYA PROPERTIES PLANETS"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Sarala Birla Academy"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Nisarga Badavane"}]
  },
  {
    "route_no": "372J",
    "distance": "33 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Bommandanahalli",
    "departure_from_origin": "06:35,  16:00,  20:10",
    "arrival_at_origin": "06:30, 10:05, 19:40",
    "departure_from_destination": "05:00, 08:35, 18:05",
    "arrival_at_destination": "08:05,  17:35,  21:45",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Sarala Birla Academy"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Circle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "Otis Circle"}, {"busstop": "Kallabala Cross"}, {"busstop": "Vaderamanchanahalli"}, {"busstop": "Konasandra Cross Jigani"}, {"busstop": "Bommandanahalli"}]
  },
  {
    "route_no": "372M",
    "distance": "42.4 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Thammanayakanahalli",
    "departure_from_origin": "15:45,  20:00",
    "arrival_at_origin": "09:50, 19:30",
    "departure_from_destination": "08:00, 17:40",
    "arrival_at_destination": "17:35,  21:50",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Ashrama,OPPOSITE OF BHARATH PETROL BUNK"}, {"busstop": "Jal Bhavan"}, {"busstop": "Gurappana palya"}, {"busstop": "MICO Checkpost"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "Bilekalli"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "BPL"}, {"busstop": "Hulimavu Gate"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Loyala School"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Gottigere High School"}, {"busstop": "Gottigere"}, {"busstop": "TJohn College Cross"}, {"busstop": "Basavanapura Gate"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Tulip Resort Cross"}, {"busstop": "Kalkere"}, {"busstop": "AMC College Bannerghatta Road"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Vijaya Bank Banneragatta Circle"}, {"busstop": "Bannerghatta Circle"}, {"busstop": "Sarala Birla Academy"}, {"busstop": "Jangal Palya"}, {"busstop": "Ragihalli Gate"}, {"busstop": "Mantapa Cross"}, {"busstop": "Begihalli"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Cricle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "KEB"}, {"busstop": "Madapatna,Open Area"}, {"busstop": "Haragadde,Open area"}, {"busstop": "Suragajakkanahalli Anekal Road,Opp to provision stores"}, {"busstop": "Indlawadi Cross,Opp to open area"}, {"busstop": "Aduru"}, {"busstop": "Aladamara Chikkanahalli Cross"}, {"busstop": "Indlawadi"}, {"busstop": "Chikka Indlawadi"}, {"busstop": "Nagayyanadoddi"}, {"busstop": "Chikka Hosahalli"}, {"busstop": "Thammanayakanahalli"}]
  },
  {
    "route_no": "373M",
    "distance": "42.8 KM",
    "origin": "Rajarajeshwarinagara Gate",
    "destination": "Attibele",
    "departure_from_origin": "05:00,  08:05,  11:40,  18:15,  21:00",
    "arrival_at_origin": "08:00, 09:50, 11:35, 12:35, 15:45, 18:10, 19:25, 22:10",
    "departure_from_destination": "06:00, 07:50, 09:35, 10:35, 13:45, 16:10, 17:25, 20:10",
    "arrival_at_destination": "06:50,  10:05,  13:40,  20:15,  23:00",
    "map_json_content": [{"busstop": "Rajarajeshwarinagara Gate,RAJA RAJESHWARI NAGARA,OPPOSITE OF GOPALAN MALL ARCADE"}, {"busstop": "PETROL BUNK,RAJA RAJESHWARI NAGARA,BESIDE INDIAN OIL PETROL BUNK"}, {"busstop": "Raja Rajeshwari Temple,RAJESHWARI NAGARA,BESIDE RAJA RAJESHWARI TEMPLE"}, {"busstop": "Ideal Homes Stop,RAJA RAJESHWARI NAGARA,IN FRONT OF DRUVA CREATIONS, MOBILE PLANTS"}, {"busstop": "BEML Complex,B.E.M.L. LAYOUT 3RD STAGE,OPPOSITE OF RAMANJANEYA TEMPLE &amp; B.E.M.L. COMPLEX"}, {"busstop": "BEML Layout 5th Stage,B.E.M.L. GATE LAYOUT,BESIDE SHRI CONDIMENTS & SWEETS"}, {"busstop": "Channasandra ,CHANASANDRA,BESIDE MARGIN FREE MARKET"}, {"busstop": "Patalamma Temple Uthrahalli,BANASHANKARI 5TH STAGE (VADDARA PALYA),OPPOSITE OF PATALAMMA TEMPLE"}, {"busstop": "Poornapragna layout Water tank,POORNA PRAJNA NAGARA (UTHARAHALLI),IN FRONT OF RAGAVENDRA CERAMICS"}, {"busstop": "Arehalli,AREHALLI,IN FRONT OF VENKATESHWARA IYENGAR BAKERY"}, {"busstop": "Uttarahalli,UTHARAHALLI,IN FRONT OF BBMP OFFICE UTHARAHALLI (WARD OFFICE)"}, {"busstop": "Uttarahalli KR Hospital,UTHARAHALLI,IN FRONT OF I.C.I.C.I.BANK"}, {"busstop": "Chikkalsandra Canara Bank Colony,CHIKKALASANDRA,BESIDE STATE BANK OF MYSORE"}, {"busstop": "Chikkalsandra Aralimara,CHIKKALASANDRA,IN FRONT OF C.S.HOSPITAL"}, {"busstop": "Gowdana palya,TELECOM NAGARA,BESIDE SRI BALAJI C.D.CENTRE"}, {"busstop": "Kadirenahalli Village,KADIRENAHALLI,IN FRONT OF BELURU IYENGAR BAKERY"}, {"busstop": "kadirenahalli cross,BANASHANKRI 2ND STAGE TEACHERS COLONY,BESIDE S.A.F00T WEAR"}, {"busstop": "Banashankari Bus Station,Opp to water tank"}, {"busstop": "Sangam Circle,JAYANAGARA 8TH BLOCK,BESIDE INDIAN TYRE CENTER"}, {"busstop": "Jayanagara 5th Block,JAYANAGARA 5TH BLOCK,BESIDE GRIHA VAIBHAVA FAMILY SHOP"}, {"busstop": "Marenahalli Petrol Bunk,PATTABHIRAMA NAGARA,BESIDE AKKA MAHADEVI PARK"}, {"busstop": "Ragigudda,JAYANAGARA 9TH BLOCK,OPPOSITE OF CENTRAL MALL"}, {"busstop": "Jayanagara 9th Block East"}, {"busstop": "MICO Layout,BTM LAYOUT 1ST STAGE"}, {"busstop": "BTM water Tank,BTM LAYOUT,IN FRONT OF CORPORATION BANK"}, {"busstop": "Udupi Garden 16th Main,BTM LAYOUT,BESIDE BANGLOR ONE CENTER"}, {"busstop": "BTM Layout Bus Stop,BTM LAYOUT 2ND STAGE,IN FROUNT OF KUVEMPUNAGRA BUS STAND"}, {"busstop": "Central Silk Board,BTM LAYOUT MADIWALA,OPPOSITE OF CENTRAL SILK BOARD"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Koodlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi,HEBBAGODI,OPPOSITE OF SHRI PRASANNA ANJANEYA SWAMI TEMPLE"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Hale Chandapura,ATTIBELE HOBLI,ANEKAL TALUKU,IN FRONT OF SHAND PIPE INDUSTRY PVT.LTD."}, {"busstop": "Thirumagondanahalli Cross,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF BAGAWAN SRI RAMANAMAHARISHI ASHRAM"}, {"busstop": "Neraluru Gate,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF NERALURU GRAMA PANCHAYAT OFFICE"}, {"busstop": "Guddatti Gate,NERALURU POST,OPPOSITE OF SHASHANK TOWERS"}, {"busstop": "Guest Line Hotel,ATTIBELE INDUSTRIAL AREA,IN FRONT OF SRI VEERANJANEYA SWAMI TEMPLE"}, {"busstop": "Yadavanahalli Gate,ATTIBELE HOBLI,IN FRONT OF SYNDICATE BANK"}, {"busstop": "Attibele,ANEKAL TALUKU,IN FRONT OF S.V. FURNITURE"}]
  },
  {
    "route_no": "374",
    "distance": "10 KM",
    "origin": "Jayanagara Bus Stand",
    "destination": "Thurahalli",
    "departure_from_origin": "07:10,  08:25,  09:45,  11:30,  14:05,  15:25,  17:10,  18:30,  19:50",
    "arrival_at_origin": "08:20, 09:40, 11:25, 12:45, 15:20, 17:05, 18:25, 19:45, 21:05",
    "departure_from_destination": "07:50, 09:05, 10:50, 12:10, 14:45, 16:30, 17:50, 19:10, 20:30",
    "arrival_at_destination": "07:45,  09:00,  10:20,  12:05,  14:40,  16:00,  17:45,  19:05,  20:25",
    "map_json_content": [{"busstop": "Jayanagara Bus Stand,JAYANAGARA 4TH BLOCK,BESIDE JAIN TEMPLE"}, {"busstop": "Telephone Exchange,JAYANAGARA 5TH BLOCK,SAMSKRUTI BANQUET HALL"}, {"busstop": "Jayanagara 40th Cross,JAYANAGARA 5TH BLOCK,BESIDE LIC OFFICE"}, {"busstop": "Sangam Circle,JAYANAGARA 8TH BLOCK,BESIDE BANGALORE WATER SUPPLY"}, {"busstop": "BANASHANKARI TTMC"}, {"busstop": "Kadirenahalli Cross,BANASHANKRI 2ND STAGE KAVERI NAGARA,BESIDE KAVERI GLASS & PLYWOODS"}, {"busstop": "Kadirenahalli Village,KADIRENAHALLI,IN FRONT OF STATE BANK OF MYSORE"}, {"busstop": "Gowdana palya,GOWDANA PALYA,OPPOSITE OF SRI BALAJI C.D.CENTRE"}, {"busstop": "Chikkallasandra Aralimara,CHIKKALASANDRA,IN FRONT OF BESCOM OFFICE"}, {"busstop": "Chikkalsandra Canara Bank Colony,CHIKKALASANDRA,OPPOSITE OF STATE BANK OF MYSORE"}, {"busstop": "Uttarahalli KR Hospital,UTHARAHALLI,OPPOSITE OF I.C.I.C.I.BANK"}, {"busstop": "Uttarahalli,UTHARAHALLI,BESIDE BMTC MAIN BUS STAND"}, {"busstop": "Subramanyapura Police Station"}, {"busstop": "Thurahalli Main Road"}, {"busstop": "Thurahalli"}]
  },
  {
    "route_no": "374C",
    "distance": "25.9 KM",
    "origin": "Jigani APC Circle",
    "destination": "Banashankari Bus Station",
    "departure_from_origin": "10:40,  13:40,  16:20",
    "arrival_at_origin": "10:35, 13:10, 16:15",
    "departure_from_destination": "09:20, 11:55, 15:00",
    "arrival_at_destination": "11:55,  14:55,  17:35",
    "map_json_content": [{"busstop": "Jigani APC Circle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "Jigani"}, {"busstop": "Jigani Tent"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Sakalwara"}, {"busstop": "Tuliph Resort"}, {"busstop": "Koli Farm Gate Bannerghatta Road"}, {"busstop": "Basavanapura Gate Bannerghatta Road"}, {"busstop": "TJohn College Cross"}, {"busstop": "Gottigere"}, {"busstop": "Gottigere High School Himagiri"}, {"busstop": "Kalena Agrahara"}, {"busstop": "Loyala School"}, {"busstop": "Meenakshi Temple"}, {"busstop": "Hulimavu Gate"}, {"busstop": "BPL"}, {"busstop": "Arakere Gate Byrapura"}, {"busstop": "IIM Appolo Hospital"}, {"busstop": "Bilekalli"}, {"busstop": "JP Nagara 3rd Phase"}, {"busstop": "MICO Layout Checkpost,GOPALANMALL"}, {"busstop": "Jayanagara 9th East Circle,JAYANAGARA 9TH BLOCK,BESIDE LAKSHMI HARDWARE"}, {"busstop": "Ragigudda,JAYANAGARA 9TH BLOCK,BESIDE VISION EXPRESS"}, {"busstop": "Marenahalli Petrol Bunk,PATTABHIRAMA NAGARA,OPPOSITE OF AKKA MAHADEVI PARK"}, {"busstop": "Jayanagara 5th Block,JAYANAGARA 5TH BLOCK,BESIDE LADY HOSPITAL"}, {"busstop": "Sangam Circle,JAYANAGARA 8TH BLOCK,BESIDE BANGALORE WATER SUPPLY"}, {"busstop": "Banashankari Bus Station"}]
  },
  {
    "route_no": "374F",
    "distance": "21.5 KM",
    "origin": "Chikkallasandra Bus Stand",
    "destination": "Chikkallasandra Bus Stand",
    "departure_from_origin": "15:25,  17:05",
    "arrival_at_origin": "16:35, 18:15",
    "departure_from_destination": "15:25, 17:05",
    "arrival_at_destination": "16:35,  18:15",
    "map_json_content": [{"busstop": "Chikkallasandra Bus Stand,IN FRONT OF U.K.RESIDENCY APARTMENTS"}, {"busstop": "Chikkalsandra Aralimara,CHIKKALASANDRA,IN FRONT OF C.S.HOSPITAL"}, {"busstop": "Gowdana palya,TELECOM NAGARA,BESIDE SRI BALAJI C.D.CENTRE"}, {"busstop": "Prarthana School,PADMANABHA NAGARA"}, {"busstop": "Kadirenahalli Village,KADIRENAHALLI,IN FRONT OF BELURU IYENGAR BAKERY"}, {"busstop": "kadirenahalli cross,BANASHANKRI 2ND STAGE TEACHERS COLONY,BESIDE S.A.F00T WEAR"}, {"busstop": "Banashankari Bus Station"}, {"busstop": "Kadirenahalli Cross,BANASHANKRI 2ND STAGE KAVERI NAGARA,BESIDE KAVERI GLASS & PLYWOODS"}, {"busstop": "Kadirenahalli Park,BANASHANKRI 2ND STAGE KAVERI NAGARA,BESIDE SRINIVASA STEEL & CEMENT TRADERS"}, {"busstop": "Devegowda Petrol Bunk,BANASHANKARI 3RD STAGE,BESIDE CO-OPERATIVE TRAINING COLLEGE"}, {"busstop": "Kamakya Talkies,BANASHANKARI 3RD STAGE,IN FRONT OF NISARGA BDA ENCLEVE"}, {"busstop": "Banashankari 3rd Stage 3rd Phase,BANASHANKARI 3RD STAGE,IN FRONT OF ANNAPURNESHWARI CHOULTRY"}, {"busstop": "Janatha Bazar,BANASHANKARI 3RD STAGE,IN FRONT OF SHIVA SHANKARA SABHANGANA"}, {"busstop": "Jn of Hosakerehalli Cross,BANASHANKARI 3RD STAGE,IN FRONT OF N.C.E.R.T."}, {"busstop": "Jn of Ring Road,BANASHANKARI 3RD STAGE,OPPOSITE OF SPICE CITY"}, {"busstop": "PES College,BANASHANKARI 3RD STAGE,BESIDE OM SAI RAM TRADERS"}, {"busstop": "Veerabhadranagar,BANASHANKARI 3RD STAGE,BESIDE APARNA WINES"}, {"busstop": "Nayandahalli"}, {"busstop": "BWSSB Quarters"}, {"busstop": "Rajarajeshwarinagara Gate,RAJA RAJESHWARI NAGARA,OPPOSITE OF GOPALAN MALL ARCADE"}, {"busstop": "PETROL BUNK,RAJA RAJESHWARI NAGARA,BESIDE INDIAN OIL PETROL BUNK"}, {"busstop": "Raja rajeshwari School,RAJESHWARI NAGARA,IN FRONT OF FAIR & STYLE BEAUTY PARLOUR"}, {"busstop": "Rajarajeshwari Temple,RAJESHWARI NAGARA,OPPOSITE OF RAJA RAJESHWARI TEMPLE"}, {"busstop": "Ideal Homes Stop,RAJA RAJESHWARI NAGARA,IN FRONT OF DRUVA CREATIONS, MOBILE PLANTS"}, {"busstop": "BEML Gate,B.E.M.L. LAYOUT 3RD STAGE,OPPOSITE OF MUTHOOT FINANCIAL CORP"}, {"busstop": "BEML Complex,B.E.M.L. LAYOUT,IN FRONT OF B.E.M.L. COMPLEX PARK"}, {"busstop": "Double Road BEML Layout,B.E.M.L. DOUBLE ROAD CIRCLE,IN FRONT OF HDFC BANK"}, {"busstop": "BEML Layout 5th Stage,B.E.M.L. GATE LAYOUT,BESIDE SHRI CONDIMENTS & SWEETS"}, {"busstop": "Channasandra,CHANASANDRA,IN FRONT OF APOLLO PHARMACY"}, {"busstop": "Patalamma Temple Uthrahalli,BANASHANKARI 5TH STAGE (VADDARA PALYA),OPPOSITE OF PATALAMMA TEMPLE"}, {"busstop": "Poornapragna layout Water tank,POORNA PRAJNA NAGARA (UTHARAHALLI),IN FRONT OF RAGAVENDRA CERAMICS"}, {"busstop": "Arehalli Gate,AREHALLI,IN FRONT OF SRI LAKSHMI STORES"}, {"busstop": "Uttarahalli,UTHARAHALLI,IN FRONT OF BBMP OFFICE UTHARAHALLI (WARD OFFICE)"}, {"busstop": "Uttarahalli KR Hospital,UTHARAHALLI,IN FRONT OF I.C.I.C.I.BANK"}, {"busstop": "Chikkalsandra Canara Bank Colony,CHIKKALASANDRA,BESIDE STATE BANK OF MYSORE"}, {"busstop": "Chikkallasandra Aralimara,CHIKKALASANDRA,BESIDE SHANIMATHMA TEMPLE"}, {"busstop": "Mahesh Medicals,CHIKKALASANDRA,IN FRONT OF MAHESH PHARMA MEDICALS"}, {"busstop": "Chikkallasandra Bus Stand,IN FRONT OF U.K.RESIDENCY APARTMENTS"}]
  },
  {
    "route_no": "374K",
    "distance": "17.7 KM",
    "origin": "Vasanthapura",
    "destination": "Madiwala Market",
    "departure_from_origin": "07:30,  09:40,  12:15,  14:25,  17:00",
    "arrival_at_origin": "09:35, 12:10, 14:20, 16:30, 19:05",
    "departure_from_destination": "08:35, 11:10, 13:20, 15:30, 18:05",
    "arrival_at_destination": "08:30,  10:40,  13:15,  15:25,  18:00",
    "map_json_content": [{"busstop": "Vasanthapura,VASANTHAPURA,BESIDE OPEN AREA"}, {"busstop": "Yadalam Nagara,YADALAM NAGARA,IN FRONT OF SRI MANIKANTA SOUND SYSTEM"}, {"busstop": "Subramanyapura Co-operative Society,SUBRAMANYA PURA,BESIDE K.E.B."}, {"busstop": "Subramanyapura Police station,SUBRAMANYA PURA,IN FRONT OF YADALAM ADI LAKSHMAMMA SUBBAIAH SHETTY MIDDLE SCHOOL"}, {"busstop": "Uttarahalli,UTHARAHALLI,IN FRONT OF PUBLIC LIBRARY UTHARAHALLI"}, {"busstop": "Uttarahalli KR Hospital,UTHARAHALLI,IN FRONT OF I.C.I.C.I.BANK"}, {"busstop": "Chikkalsandra Canara Bank Colony,CHIKKALASANDRA,OPPOSITE OF STATE BANK OF MYSORE"}, {"busstop": "Chikkalsandra Aralimara,CHIKKALASANDRA,IN FRONT OF C.S.HOSPITAL"}, {"busstop": "Gowdana palya,TELECOM NAGARA,BESIDE SRI BALAJI C.D.CENTRE"}, {"busstop": "Prarthana School,PADMANABHA NAGARA"}, {"busstop": "Padmanabha Nagara,PADMANABHA NAGARA,IN FRONT OF DEVAGIRI SHISHUVIHARA"}, {"busstop": "Devegowda Petrol Bunk,BANASHANKARI 3RD STAGE,BESIDE BIG MEGA MART"}, {"busstop": "Kempegowda Medical  Hospital,BANASHANKARI 3RD STAGE,OPPOSITE OF KEMPEGOWDA MEDICAL COLLEGE"}, {"busstop": "Indira Nursing Home Tyagarajanagar,BANASHANKARI 2ND STAGE,BESIDE INDIRA NURSING HOME"}, {"busstop": "Thyagaraja Nagara,THYAGARAJA NAGARA,BESIDE APOLLO PHARMACY"}, {"busstop": "NRColony,N.R.COLONY,BESIDE BBMP OFFICE, OPPOSITE AMBHA BHAVANI TEMPLE"}, {"busstop": "Netakallappa Circle,BASAVANAGUDI,OPPOSITE OF GURU RAGHAVENDRA BANK"}, {"busstop": "Krishna Rao Park"}, {"busstop": "Southend Circle"}, {"busstop": "Madhavan Park,JAYANAGARA 2ND BLOCK,OPPOSITE OF RAMAKRISHNA NURSING HOME"}, {"busstop": "Jayanagara 3rd block,JAYANAGARA 3RD BLOCK,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Jayanagara Bus Stand,JAYANAGARA 4TH BLOCK,BESIDE KCC BUILDING"}, {"busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,BESIDE UDUPI UPAHAR"}, {"busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE CARMEL CONVENT"}, {"busstop": "Pump House Jayanagar East End,JAYANAGARA 9TH BLOCK,BESIDE SURABHI ARTS"}, {"busstop": "Jayanagara 9th East "}, {"busstop": "Jayadeva Hospital,JAYANAGARA 9TH BLOCK,HEALTHY INTERNATIONAL HOMEOPATHY"}, {"busstop": "MICO Layout,BTM LAYOUT 1ST STAGE"}, {"busstop": "BTM water Tank,BTM LAYOUT,IN FRONT OF CORPORATION BANK"}, {"busstop": "Udupi Garden 16th Main,BTM LAYOUT,BESIDE BANGLOR ONE CENTER"}, {"busstop": "BTM Layout Bus Stop,BTM LAYOUT 2ND STAGE,IN FROUNT OF KUVEMPUNAGRA BUS STAND"}, {"busstop": "Central Silk Board,BTM LAYOUT MADIWALA,OPPOSITE OF CENTRAL SILK BOARD"}, {"busstop": "Madiwala Market"}]
  },
  {
    "route_no": "374M",
    "distance": "37 KM",
    "origin": "Kengeri TTMC",
    "destination": "Nelamangala",
    "departure_from_origin": "05:40,  06:40,  08:50,  10:00,  13:40,  17:00,  18:00",
    "arrival_at_origin": "08:45, 09:55, 13:35, 16:55, 17:55, 20:50, 21:50",
    "departure_from_destination": "07:15, 08:15, 12:00, 15:20, 16:15, 19:05, 20:10",
    "arrival_at_destination": "07:10,  08:10,  10:20,  11:40,  15:15,  18:35,  19:40",
    "map_json_content": [{"busstop": "Kengeri TTMC"}, {"busstop": "Kengeri Police Station"}, {"busstop": "BMTC Depot-12 Gate Kengeri,KENGERI,IN FRONT OF IMAC INDIA BODY BUILD LTD"}, {"busstop": "Nice Road Junction Kengeri,KENGERI,IN FRONT OF BMTC DEPOT NO 12"}, {"busstop": "Basavanagara,MYSORE ROAD CHECK POST(BASAVESHWARA NAGARA),BESIDE VISHWA VOKKALIGARA MAHA SAMSTHANA MUTT"}, {"busstop": "Rajarajeshwari Medical College,ANCHEPALYA MYSORE ROAD,IN FRONT OF RAJA RAJESWARI MEDICAL COLLEGE AND HOSPITAL"}, {"busstop": "Anche Palya,ANCHEPALYA,Mysore Road"}, {"busstop": "Ramohalli Cross,KUMBALAGUDU,IN FRONT OF RAJARAJESHWARI ENGINEERING COLLEGE GATE"}, {"busstop": "Gerupalya,GERUPALYA,IN FRONT OF MICRO LABS INDIA LIMITED"}, {"busstop": "Subbarayappana Palya Cross,GERUPALYA,IN FRONT OF FAURECIA PRIVATE LIMITED"}, {"busstop": "Beemanakuppe Cross,BEEMANA KUPPE,OPPOSITE OF WATER TANK"}, {"busstop": "MGM school,RAMOHALLI,OPPOSITE OF SHRINIDHI LODGE"}, {"busstop": "Ashrama Ramohalli,RAMOHALLI,OPPOSITE OF MYTHREYI GURUKULA ASHRAMA"}, {"busstop": "Ramohalli,RAMOHALLI,IN FRONT OF WATER TANK"}, {"busstop": "Kethohalli ,KETHOHALLI,NEAR GOVERNMENT FAIR PRICE DEPPOT"}, {"busstop": "Dodda Aladamara,DODDA ALADAMARA ROAD,IN FRONT OF DODDA ALADAMARA"}, {"busstop": "Ganapathi Halli"}, {"busstop": "Punugumaranahalli,IN FRONT OF VENKATESHWARA PROVISION STORES"}, {"busstop": "Basavana Palya,OPPOSITE OF PETTY SHOP & NEAR BASAVESHWARA TEMPLE"}, {"busstop": "Chikkaveeraiahana Palya,TAVAREKERE,BESIDE OPEN AREA"}, {"busstop": "Estate Gate,TAVAREKERE,OPPOSITE OF KOLI FARM"}, {"busstop": "Puttaiana Palya"}, {"busstop": "Tavare Kere Magadi Road,TAVAREKERE,BESIDE PETTY SHOP"}, {"busstop": "Jettipalya,TAVAREKERE,BESIDE OPEN AREA"}, {"busstop": "Varthuru,VARTHURU,BESIDE MARAMMA TEMPLE"}, {"busstop": "Metipalya,METTI PALYA,BESIDE OPEN AREA"}, {"busstop": "Mallasandra,MALLASANDRA,BESIDE SRI RUDRESHWARA PROVISION STORE"}, {"busstop": "Gayathri Nagara Cross,SONDEKOPPA,BESIDE KARE KODI"}, {"busstop": "Sondekoppa,SONDEKOPPA,BESIDE GRAMA PANCHYATH OFFICE"}, {"busstop": "Gerahalli,GERAHALLI,BESIDE OPEN AREA"}, {"busstop": "Mantanakurche Gate,MANCHANKHURKI CROSS,BESIDE OPEN AREA"}, {"busstop": "Lakkenahalli,LAKKENAHALLI,BESIDE ASHWATHA KATTE"}, {"busstop": "Byregowdana Halli Cross,BYRE GOWDANAHALLI CROSS,BESIDE OPEN AREA"}, {"busstop": "Mallapura Gate,NELAMANGALA,BESIDE PETTY SHOP"}, {"busstop": "Lakshmi Devastana Nelamangala,NELAMANGALA,BESIDE OPEN AREA"}, {"busstop": "Siddaganga College,NELAMANGALA,BESIDE SHREE SIDDA GANGA FIRST GRADE COLLEGE"}, {"busstop": "Sondekoppa Bypass,NELAMANGALA,BESIDE OPEN AREA"}, {"busstop": "Nelamangala,NELAMANGALA,BESIDE NELAMANGALA BMTC BUS STAND"}]
  },
  {
    "route_no": "500F",
    "distance": "24 KM",
    "origin": "Central Silk Board",
    "destination": "Kadugodi",
    "departure_from_origin": "06:50,  07:35,  08:15,  08:50,  09:00,  09:10,  09:45,  11:20,  11:30,  12:10,  13:40,  14:15,  14:40,  16:35,  17:30,  18:25,  18:45,  18:55,  20:00,  21:00,  21:20,  21:30",
    "arrival_at_origin": "06:45, 07:30, 08:45, 08:55, 09:05, 09:40, 11:00, 11:05, 11:15, 11:55, 12:00, 12:15, 13:35, 14:10, 14:30, 15:40, 16:30, 16:45, 17:00, 17:30, 18:40, 18:50, 19:55, 20:30, 20:50, 21:00",
    "departure_from_destination": "05:45, 06:30, 07:35, 07:55, 08:40, 09:50, 10:05, 10:45, 10:50, 11:15, 12:35, 13:00, 13:25, 14:40, 15:30, 15:50, 16:20, 17:40, 17:50, 18:45, 19:30, 19:50, 20:00",
    "arrival_at_destination": "07:50,  08:35,  09:45,  10:00,  10:20,  10:45,  12:30,  13:20,  14:40,  15:25,  15:50,  17:35,  18:40,  19:25,  19:45,  19:55,  21:10,  22:00,  22:20,  22:30",
    "map_json_content": [{"busstop": "Central Silk Board,MADIWALA,IN FRONT OF SHRI KRISHNA BHAVAN HOTEL"}, {"busstop": "Koramangala TTMC,Koramangala,Near Dominos Pizza"}, {"busstop": "HSR Apartment,KORAMANAGALA, HSR LAYOUT,IN FRONT OF ARANYA MULTI CUISINE RESTAURANT"}, {"busstop": "14th Main HSR Layout,HSR LAYOUT,IN FRONT OF WESTMEAD CLINIC"}, {"busstop": "Depot-25,HSR LAYOUT,OPPOSITE OF SAROVARA APARTMENT, DEPOT 25"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Sarjapura Cross,HSR LAYOUT,IN FRONT OF SHOBHA GRANET APARTMENT"}, {"busstop": "Petrol Bunk,BELLANDUR,IN FRONT OF INDIAN OIL CORPORATION"}, {"busstop": "Bellandur gate,BELLANDUR,IN FRONT OF OM SAI COMPLEX"}, {"busstop": "Eco Space,BELLANDUR,IN FRONT OF MARUTHI SUZUKI MOTORS"}, {"busstop": "Devarabisanahalli,DEVERA BISANAHALLI,OPPOSTIE OF COUNTRY CLUB"}, {"busstop": "New Horizon College,DEVARA BISANAHALLI, KADABEESANAHALLI,BESIDE SALAPURIA TOUCH STONE"}, {"busstop": "Kada Bisanahalli,KADABEESANAHALLI,IN FRONT OF V.R.CHAMBERS"}, {"busstop": "Multiplex Marathahalli,MARATHAHALLI,BESIDE PRESTIGE TECH PARK"}, {"busstop": "Maratahalli Bridge"}, {"busstop": "Spice Garden"}, {"busstop": "Kundalahalli Gate"}, {"busstop": "Thubarahalli"}, {"busstop": "Siddapura"}, {"busstop": "Ramgundanhalli"}, {"busstop": "Varthuru Kodi"}, {"busstop": "Brook Bond"}, {"busstop": "White Field"}, {"busstop": "Old Sai Baba Hospitals"}, {"busstop": "Munish Hospital"}, {"busstop": "Hope Form"}, {"busstop": "Prajwal School"}, {"busstop": "Kadugodi"}]
  },
  {
    "route_no": "500G",
    "distance": "34.9 KM",
    "origin": "Devasandra Chikkamaranahalli",
    "destination": "Central Silk Board",
    "departure_from_origin": "05:05,  05:45,  06:05,  06:40,  07:00,  07:20,  07:40,  08:00,  08:20,  08:40,  09:00,  09:20,  09:40,  10:45,  11:45,  12:25,  13:25,  13:45,  14:05,  14:25,  14:45,  15:05,  15:25,  15:45,  16:05,  16:25,  17:30,  18:10,  18:30,  19:10,  20:15,  20:35,  21:10,  21:50,  22:10",
    "arrival_at_origin": "06:35, 07:15, 07:35, 08:15, 08:55, 09:15, 09:35, 09:55, 10:15, 10:35, 10:55, 11:15, 11:55, 12:20, 12:35, 12:55, 13:20, 14:00, 15:00, 15:40, 16:40, 17:00, 17:20, 17:40, 18:25, 18:45, 19:05, 19:45, 20:05, 20:40, 21:45, 22:05, 22:40, 23:20, 23:40",
    "departure_from_destination": "05:05, 05:45, 06:05, 06:40, 07:20, 07:40, 08:00, 08:20, 08:40, 09:00, 09:20, 09:40, 10:25, 10:45, 11:05, 11:25, 11:45, 12:25, 13:25, 14:05, 15:05, 15:25, 15:45, 16:05, 16:50, 17:10, 17:30, 18:10, 18:30, 19:10, 20:15, 20:35, 21:10, 21:50, 22:10",
    "arrival_at_destination": "06:35,  07:15,  07:35,  08:15,  08:35,  08:55,  09:15,  09:35,  09:55,  10:15,  10:35,  10:55,  11:15,  12:20,  13:20,  14:00,  15:00,  15:20,  15:40,  16:00,  16:20,  16:40,  17:00,  17:20,  17:40,  18:00,  19:05,  19:45,  20:05,  20:40,  21:45,  22:05,  22:40,  23:20,  23:40",
    "map_json_content": [{"busstop": "Devasandra Chikkamaranahalli,DEVASANDRA,BESIDE KARNATAKA POWER TRANSMISSION CORPORATION LIMITED"}, {"busstop": "Kuvempu Circle,JALAHALLI,BESIDE OPEN AREA"}, {"busstop": "Devi Nagara,LOTTEGOLLAHALLI,BESIDE CHOWDESHWARI TEMPLE"}, {"busstop": "Bhadrappa Layout,BHADRAPPA LAYOUT,BESIDE MEDICAL STORE"}, {"busstop": "Hebbala Bridge,HEBBALA,OPPOSITE OF GAYATHRI LAKE FRONT"}, {"busstop": "Kempapura,HEBBALA,IN FRONT OF BHAVANI ENTERPRISES"}, {"busstop": "Veeranna Palya,VEERANNAPALYA, NAGAVARA,OPPOSITE OF INDIAN OIL PETROL BUNK"}, {"busstop": "Manyatha Tech Park,NAGAVARA,IN FRONT OF IBM MANYATA EMBASSY BUSINESS PARK"}, {"busstop": "Nagavara Junction,NAGAVARA,IN FRONT OF HOTEL REDDYS RESTAURANT, J.B.J.COMPLEX"}, {"busstop": "HBR Layout"}, {"busstop": "Hennuru Junction,HENNURU,OPPOSITE OF FLORENCE FRORIDA GROUP OF INSTITUTIONS"}, {"busstop": "Kalyananagara Bus Stand,KALYANA NAGARA,OPPOSITE OF PANASONIC SHOW ROOM"}, {"busstop": "80 Feet Road Kalyan Nagara,KALYANA NAGARA,IN FRONT OF CROMA ELECTRONICS MEGASTORE"}, {"busstop": "Babusab Palya,KALYANA NAGARA,IN FRONT OF HOTEL LITTLE IMPERIAL"}, {"busstop": "HORAMAVU PETROL BUNK,BANASAWADI,BESIDE UDUPI SAGAR HOTEL"}, {"busstop": "Vijaya Bank Colony,DODDA BANASAWADI,IN FRONT OF CACHE FURNITURE LIMITED, S.J.C.COMPLEX"}, {"busstop": "Jn OF B CHANNASANDRA,CHANNASANDRA, RAMAMURTHY NAGARA,OPPOSITE OF ANDREWS WOOD CRAFTS"}, {"busstop": "Kasturi Nagara,KASTURI NAGARA,OPPOSITE OF SRISHANT TOWER"}, {"busstop": "Tin Factory"}, {"busstop": "KR Puram Railway Station,KR PURAM,BACK SIDE OF RAILWAY STATION"}, {"busstop": "B Narayanapura,B.NARAYANA PURA,OPPOSITE OF HOME CITY ZUZRI FUNITURE"}, {"busstop": "Mahadevapura,MAHADEVAPURA,IN FRONT OF TEJA MARBLE CENTER"}, {"busstop": "EMC2"}, {"busstop": "Doddanekkundi,DODDANEKUNDI,IN FRONT OF NIRMALA NURSING HOME"}, {"busstop": "Karthik Nagara,MARATHAHALLI,OPPOSITE OF WATER TANK"}, {"busstop": "Kala Mandir Marathalli,MARATHAHALLI,IN FRONT OF KALAMANDIRA SILK CENTER"}, {"busstop": "Marathahalli Bridge,MARATHAHALLI,IN FRONT OF ACER GREENS"}, {"busstop": "Multiplex Marathahalli,MARATHAHALLI,IN FRONT OF STAPLES"}, {"busstop": "Kada Bisanahalli,KADABEESANAHALLI,OPPOSITE OF V.R.CHAMBERS"}, {"busstop": "New Horizon College,DEVARABISANAHALLI,OPPOSITE OF HALLMARK SALAPURIA"}, {"busstop": "Devrabisanahalli,DEVARABISANAHALLI,IN FRONT OF CHINESE RESTAURANT"}, {"busstop": "Eco Space,BELLANDUR,IN FRONT OF ECO SPACE COMPANY"}, {"busstop": "Bellandru ,BELLANDUR,IN FRONT OF BHAGINI RESTAURANT"}, {"busstop": "Petrol Bunk,BELLANDUR,IN FRONT AKM & HARMONY APARTMENT"}, {"busstop": "Sarjapura Cross,BELLANDUR,IN FRONT CAZE CARAGE"}, {"busstop": "Ibbalur"}, {"busstop": "Agara Junction"}, {"busstop": "Depot-25,HSR LAYOUT AGRAHARA,IN FRONT OF SAROVARA APARTMENT"}, {"busstop": "14th Main HSR Layout,HSR LAYOUT,OPPOSITE OF RELIANCE AUTOZONE"}, {"busstop": "HSR Appartment,HSR LAYOUT,IN FRONT OF FEMHILL GARDENS APARTMENT"}, {"busstop": "Central Silk Board,BTM LAYOUT, MADIWALA,IN FRONT OF CENTRAL SILK BOARD"}]
  },
  {
    "route_no": "500H",
    "distance": "40.1 KM",
    "origin": "Chandapura",
    "destination": "KR Puram",
    "departure_from_origin": "07:00,  07:20,  07:30,  07:40,  07:50,  08:30,  11:35,  11:45,  11:55,  12:05,  15:20,  15:55",
    "arrival_at_origin": "11:05, 11:30, 11:40, 11:50, 12:00, 12:25, 15:55, 16:05, 16:15, 16:25",
    "departure_from_destination": "09:10, 09:35, 09:45, 09:55, 10:05, 10:30, 14:00, 14:10, 14:20, 14:30",
    "arrival_at_destination": "08:45,  09:15,  09:25,  09:35,  09:45,  10:25,  13:30,  13:40,  13:50,  14:00,  17:05,  17:50",
    "map_json_content": [{"busstop": "Chandapura,ANEKAL TALUKU,BESIDE SWAMI VIVEKANANDA RURAL EDUCATION ,SOCIAL ASSOCIATION"}, {"busstop": "Hennagra Gate,BOMMASANDRA POST,IN FRONT OF SUB REGISTER & MARRIAGE OFFICE"}, {"busstop": "BTL College,BOMMASANDRA,IN FRONT OF NARAYANA HRUDAYALAYA HOSPITAL"}, {"busstop": "Bommasandra,ANEKAL TALUKU,IN FRONT OF TELEPHONE EXCHANGE & POST OFFICE"}, {"busstop": "Hebbagodi"}, {"busstop": "Huskur gate,ELECTRONIC CITY POST,BESIDE PRASHANT CYLINDER PVT.LTD"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,OPPOSITE OF SHANKARA INFRASTRUCTURE MATERIAL PVT.LTD"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF B.M.T.C. DEPOT-19"}, {"busstop": "Konappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF LAVAKUSHA BULDING"}, {"busstop": "PES College"}, {"busstop": "Hosa Road"}, {"busstop": "Singasandra"}, {"busstop": "Kudlu Gate"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Bommanahalli"}, {"busstop": "Rupena Agrahar"}, {"busstop": "Central Silk Board,MADIWALA,IN FRONT OF SHRI KRISHNA BHAVAN HOTEL"}, {"busstop": "HSR Apartment,KORAMANAGALA, HSR LAYOUT,IN FRONT OF ARANYA MULTI CUISINE RESTAURANT"}, {"busstop": "14th Main HSR Layout,HSR LAYOUT,IN FRONT OF WESTMEAD CLINIC"}, {"busstop": "Depot-25,HSR LAYOUT,OPPOSITE OF SAROVARA APARTMENT, DEPOT 25"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Sarjapura Cross,HSR LAYOUT,IN FRONT OF SHOBHA GRANET APARTMENT"}, {"busstop": "Petrol Bunk,BELLANDUR,IN FRONT OF INDIAN OIL CORPORATION"}, {"busstop": "Bellandur gate,BELLANDUR,OPPOSITE OF ANGAN RESTUARANT"}, {"busstop": "Eco Space,BELLANDUR,IN FRONT OF MARUTHI SUZUKI MOTORS"}, {"busstop": "Devarabisanahalli,DEVERA BISANAHALLI,OPPOSTIE OF COUNTRY CLUB"}, {"busstop": "New Horizon College,DEVARA BISANAHALLI, KADABEESANAHALLI,BESIDE SALAPURIA TOUCH STONE"}, {"busstop": "Kada Bisanahalli,KADABEESANAHALLI,IN FRONT OF V.R.CHAMBERS"}, {"busstop": "Multiplex Marathahalli,MARATHAHALLI,BESIDE PRESTIGE TECH PARK"}, {"busstop": "Jn of Marathalli Bridge,MARATHAHALLI,IN FRONT OF SOUL SPACE PARDIGM"}, {"busstop": "Kala Mandir Marathalli,MARATHAHALLI,IN FRONT OF ITTINA AKYA"}, {"busstop": "Karthik Nagara,MARATHAHALLI,IN FRONT OF A.P.RESIDENCY, GUEST HOUSE"}, {"busstop": "Dodda Nekkundi,DODDANEKUNDI,NEAR BY CAFE COFFEE DAY"}, {"busstop": "EMC2,DODDANEKUNDI,IN FRONT OF TOTAL MALL"}, {"busstop": "Mahadevapura Cross,MAHADEVAPURA,IN FRONT OF MTB MANGALAMERU KALAYANA MANTAPA"}, {"busstop": "B Narayanapura,B.NARAYANA PURA,OPPOSITE OF MORE MEGA STORE"}, {"busstop": "KR Puram Railway Station,KR PURAM,OPPOSITE OF BRIDGE"}, {"busstop": "Tin Factory"}, {"busstop": "Jn of Kasturi Nagara,KASTURI NAGARA,BESIDE SHRI SHANTI TOWER"}, {"busstop": "Jn Of Ring Road Channasandra,RAMAMURTHI NAGARA,BESIDE RAILWAY BRIDGE"}, {"busstop": "Ramamurthinagar Police Station,RAMAMURTHI NAGARA,IN FRONT OF POLICE STATION"}, {"busstop": "Manipal,RAMAMURTHI NAGARA,IN FRONT OF PETRA PARK"}, {"busstop": "Yaranapalya,RAMAMURTHI NAGARA,IN FRONT OF GURUDEV MEDICAL CENTER"}, {"busstop": "Alada Mara Ramamurthy Nagar,RAMAMURTHI NAGARA,OPPOSITE OF HI-FASHION FAMILY STOP"}, {"busstop": "Church RM Nagar,RAMAMURTHI NAGARA,IN FRONT OF VISMAYA ENTERPRISES"}, {"busstop": "ITI Circle,DOORAVANI NAGARA,IN FRONT OF VIJAYALAKSHMI ENTERPRISES"}, {"busstop": "ITI Calony Gate"}, {"busstop": "KR Puram"}]
  },
  {
    "route_no": "500L",
    "distance": "24.8 KM",
    "origin": "BANASHANKARI TTMC",
    "destination": "Tin Factory",
    "departure_from_origin": "06:00,  06:25,  07:20,  08:05,  08:20,  08:40,  08:50,  08:55,  09:05,  09:20,  10:00,  10:05,  10:25,  10:45,  11:40,  11:45,  12:25,  12:30,  13:05,  13:30,  14:05,  14:20,  14:50,  15:05,  16:10,  16:45,  16:55,  17:25,  18:50,  19:35,  20:05",
    "arrival_at_origin": "08:15, 08:35, 08:50, 09:15, 09:55, 10:40, 11:15, 11:20, 11:35, 11:40, 11:55, 12:20, 12:25, 13:00, 13:55, 14:45, 15:00, 15:40, 15:45, 16:05, 16:40, 16:55, 17:25, 18:40, 18:45, 19:10, 19:30, 19:45, 20:00, 21:50, 22:30, 22:35",
    "departure_from_destination": "07:00, 07:20, 07:35, 08:00, 08:40, 09:25, 10:00, 10:05, 10:25, 10:40, 11:05, 11:10, 11:45, 12:50, 13:30, 13:45, 14:10, 14:25, 14:50, 15:25, 15:40, 16:10, 17:20, 17:30, 17:55, 18:15, 18:30, 18:45, 20:35, 21:20",
    "arrival_at_destination": "07:15,  07:30,  08:35,  09:20,  09:35,  09:55,  10:10,  10:20,  10:35,  11:05,  11:15,  11:40,  12:00,  12:45,  13:00,  13:40,  14:20,  14:45,  15:00,  15:20,  16:05,  16:20,  17:25,  18:00,  18:10,  18:40,  20:05,  20:50,  21:20",
    "map_json_content": [{"busstop": "BANASHANKARI TTMC"}, {"busstop": "Sangam Circle,JAYANAGARA 8TH BLOCK,BESIDE INDIAN TYRE CENTER"}, {"busstop": "Jayanagara 5th Block,JAYANAGARA 5TH BLOCK,BESIDE KRISHNA SEVA ASHRAMA HOSPITAL"}, {"busstop": "Marenahalli Petrol Bunk,PATTABHIRAMA NAGARA,BESIDE AKKA MAHADEVI PARK"}, {"busstop": "Ragigudda,JAYANAGARA 9TH BLOCK,OPPOSITE OF CENTRAL MALL"}, {"busstop": "Jayadeva Hospital,JAYANAGARA 9TH BLOCK,HEALTHY INTERNATIONAL HOMEOPATHY"}, {"busstop": "MICO Layout,BTM LAYOUT 1ST STAGE"}, {"busstop": "BTM water Tank,BTM LAYOUT,IN FRONT OF CORPORATION BANK"}, {"busstop": "Udupi Garden 16th Main,BTM LAYOUT,BESIDE BANGLOR ONE CENTER"}, {"busstop": "BTM Layout Bus Stop,BTM LAYOUT 2ND STAGE,IN FRONT OF KUVEMPUNAGRA BUS STAND"}, {"busstop": "Central Silk Board,MADIWALA,IN FRONT OF SHRI KRISHNA BHAVAN HOTEL"}, {"busstop": "HSR Apartment,KORAMANAGALA, HSR LAYOUT,IN FRONT OF ARANYA MULTI CUISINE RESTAURANT"}, {"busstop": "14th Main HSR Layout,HSR LAYOUT,IN FRONT OF WESTMEAD CLINIC"}, {"busstop": "Depot-25,HSR LAYOUT,OPPOSITE OF SAROVARA APARTMENT, DEPOT 25"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Sarjapura Cross,HSR LAYOUT,IN FRONT OF SHOBHA GRANET APARTMENT"}, {"busstop": "Petrol Bunk,BELLANDUR,IN FRONT OF INDIAN OIL CORPORATION"}, {"busstop": "Bellandur gate,BELLANDUR,OPPOSITE OF ANGAN RESTUARANT"}, {"busstop": "Eco Space,BELLANDUR,IN FRONT OF MARUTHI SUZUKI MOTORS"}, {"busstop": "Devarabisanahalli,DEVERA BISANAHALLI,OPPOSTIE OF COUNTRY CLUB"}, {"busstop": "New Horizon College,DEVARA BISANAHALLI, KADABEESANAHALLI,BESIDE SALAPURIA TOUCH STONE"}, {"busstop": "Kada Bisanahalli,KADABEESANAHALLI,IN FRONT OF V.R.CHAMBERS"}, {"busstop": "Multiplex Marathahalli,MARATHAHALLI,BESIDE PRESTIGE TECH PARK"}, {"busstop": "Jn of Marathalli Bridge,MARATHAHALLI,IN FRONT OF SOUL SPACE PARDIGM"}, {"busstop": "Kala Mandir Marathalli,MARATHAHALLI,IN FRONT OF ITTINA AKYA"}, {"busstop": "Karthik Nagara,MARATHAHALLI,IN FRONT OF A.P.RESIDENCY, GUEST HOUSE"}, {"busstop": "Dodda Nekkundi,DODDANEKUNDI,NEAR BY CAFE COFFEE DAY"}, {"busstop": "EMC2,DODDANEKUNDI,IN FRONT OF TOTAL MALL"}, {"busstop": "Mahadevapura Cross,MAHADEVAPURA,IN FRONT OF MTB MANGALAMERU KALAYANA MANTAPA"}, {"busstop": "B Narayanapura,B.NARAYANA PURA,OPPOSITE OF MORE MEGA STORE"}, {"busstop": "KR Puram Railway Station,KR PURAM,OPPOSITE OF BRIDGE"}, {"busstop": "Tin Factory"}]
  },
  {
    "route_no": "500Q",
    "distance": "22 KM",
    "origin": "Tin Factory",
    "destination": "Chowdeshwari Bus Stop",
    "departure_from_origin": "06:10,  06:30,  06:40,  06:50,  07:10,  07:40,  08:00,  08:20,  08:30,  08:40,  09:00,  09:30,  09:50,  10:10,  10:45,  10:55,  11:15,  12:05,  12:25,  12:35,  13:55,  14:15,  14:25,  14:55,  15:25,  15:45,  16:05,  16:40,  16:50,  17:10,  17:40,  18:00,  18:20,  18:30,  18:40,  19:00,  19:30,  19:50,  20:10,  20:20,  20:30,  20:50,  22:20,  22:45",
    "arrival_at_origin": "06:45, 07:05, 07:35, 07:55, 08:15, 08:25, 08:35, 08:55, 09:25, 09:45, 10:05, 10:15, 10:25, 10:45, 12:00, 12:20, 12:30, 13:00, 13:50, 14:10, 14:20, 15:20, 15:40, 16:00, 16:10, 16:20, 16:40, 17:35, 17:55, 18:15, 18:25, 18:35, 18:55, 19:25, 19:45, 20:05, 20:15, 20:25, 20:45, 21:55, 22:05, 22:15, 22:45",
    "departure_from_destination": "05:55, 06:15, 06:45, 07:05, 07:25, 07:35, 07:45, 08:05, 08:35, 08:55, 09:15, 09:25, 09:35, 09:55, 11:10, 11:30, 11:40, 12:10, 13:00, 13:20, 13:30, 14:30, 14:50, 15:10, 15:20, 15:30, 15:50, 16:45, 17:05, 17:25, 17:35, 17:45, 18:05, 18:35, 18:55, 19:15, 19:25, 19:35, 19:55, 21:05, 21:15, 21:25, 22:00",
    "arrival_at_destination": "07:00,  07:20,  07:30,  07:40,  08:00,  08:30,  08:50,  09:10,  09:20,  09:30,  09:50,  10:20,  10:40,  11:00,  11:35,  11:45,  12:05,  12:55,  13:15,  13:25,  14:45,  15:05,  15:15,  15:45,  16:15,  16:35,  16:55,  17:30,  17:40,  18:00,  18:30,  18:50,  19:10,  19:20,  19:30,  19:50,  20:20,  20:40,  21:00,  21:10,  21:20,  21:40,  23:10,  23:30",
    "map_json_content": [{"busstop": "Tin Factory"}, {"busstop": "Jn of Kasturi Nagara,KASTURI NAGARA,BESIDE SHRI SHANTI TOWER"}, {"busstop": "BChannasandra,RAMAMURTHY NAGARA,UNDER PASS ENTRANCE"}, {"busstop": "Vijaya Bank Colony,DODDA BANASAWADI,OPPOSITE OF CACHE FURNITURES LIMITED"}, {"busstop": "Horamabu petrol bunk,BANASAWADI,OPPOSITE OF UDUPI SAGAR HOTEL"}, {"busstop": "Babusab Palya,KALYANA NAGARA,IN FRONT OF SHRI R.V.PLAZA"}, {"busstop": "80 Feet Road Kalyan Nagara,KALYANA NAGARA,OPPOSITE OF SATISH SAGAR HOTEL"}, {"busstop": "Kalyana Nagara,KALYANA NAGARA,OPPOSITE OF INDO ASIAN ACADEMY DEGREE COLLEGE"}, {"busstop": "Jn of Hennur Cross,HENNURU,OPPOSITE OF NAVAJEEVA ASHRAM, NEW LIFE COLLEGE"}, {"busstop": "HBR Layout"}, {"busstop": "Jn of Nagavara,NAGAVARA,IN FRONT OF RASI TVS SERVICE CENTER"}, {"busstop": "Manyatha Tech Park,NAGAVARA,OPPOSITE OF IBM MANYATA COMPANY"}, {"busstop": "Veeranna Palya,NAGAVARA,OPPOSITE OF UDUPI UPHAR HOTEL"}, {"busstop": "Kempapura,HEBBALA,OPPOSITE OF SHRI BHAVANI ENTERPRISES"}, {"busstop": "Hebbal,HEBBALA,BESIDE PITTY SHOP"}, {"busstop": "Bhadrappa Layout,BHADRAPPA LAYOUT,BESIDE OPEN AREA"}, {"busstop": "Devi Nagara,LOTTEGOLLAHALLI,BESIDE OPEN AREA"}, {"busstop": "Kuvempu Circle,JALAHALLI,BESIDE A.G.N.ELECTRICALS"}, {"busstop": "BEL Circle"}, {"busstop": "Gokula,MATHIKERE,OPPOSITE OF VENKATESHWARA SWAMY TEMPLE"}, {"busstop": "Mathikere,MATHIKERE,BESIDE DR.SHYAMPRASAD MUKHERJEE FLYOVER ARCH"}, {"busstop": "Chowdeshwari Bus Stop"}]
  },
  {
    "route_no": "500QK",
    "distance": "29 KM",
    "origin": "Kadugodi",
    "destination": "Chowdeshwari Bus Stand JP Park",
    "departure_from_origin": "05:00,  05:15,  05:30,  05:45,  06:15,  06:30,  07:30,  07:35,  07:50,  08:05,  08:20,  08:35,  08:50,  09:20,  09:35,  09:50,  10:10,  10:25,  10:40,  11:10,  11:25,  13:25,  13:45,  14:00,  14:50,  15:05,  15:20,  15:35,  16:05,  16:20,  17:25,  17:30,  17:45,  18:00,  18:15,  18:30,  18:45,  19:15,  19:30,  21:00,  21:30,  21:45",
    "arrival_at_origin": "07:25, 07:30, 07:45, 08:00, 08:15, 08:30, 08:45, 09:15, 09:30, 09:45, 10:05, 10:20, 10:35, 10:40, 10:55, 11:10, 11:25, 11:40, 11:55, 12:25, 12:40, 12:55, 13:15, 13:30, 16:30, 16:50, 17:05, 17:20, 17:25, 17:40, 17:55, 18:10, 18:25, 18:40, 19:10, 19:25, 20:30, 21:00, 21:15, 21:30, 21:45, 22:00, 22:15, 22:45, 23:00",
    "departure_from_destination": "06:00, 06:15, 06:30, 06:45, 07:00, 07:15, 07:45, 08:00, 08:15, 08:35, 08:50, 09:05, 09:10, 09:25, 09:40, 09:55, 10:10, 10:25, 10:55, 11:10, 11:25, 11:45, 12:00, 15:00, 15:20, 15:35, 15:50, 15:55, 16:10, 16:25, 16:40, 16:55, 17:10, 17:40, 17:55, 19:00, 19:30, 19:45, 20:00, 20:15, 20:30, 20:45, 21:15, 21:30",
    "arrival_at_destination": "06:25,  06:40,  06:55,  07:10,  07:40,  07:55,  09:00,  09:05,  09:20,  09:35,  09:50,  10:05,  10:20,  10:50,  11:05,  11:20,  11:40,  11:55,  12:10,  12:40,  12:55,  14:55,  15:15,  15:30,  16:20,  16:35,  16:50,  17:05,  17:35,  17:50,  18:55,  19:00,  19:15,  19:30,  19:45,  20:00,  20:15,  20:45,  21:00,  22:30,  23:00,  23:15",
    "map_json_content": [{"busstop": "Kadugodi"}, {"busstop": "Prajwal School"}, {"busstop": "Hope Form,WHITEFIELD,BESIDE CORPORATION BANK ATM"}, {"busstop": "ITPL,WHITEFIELD,IN FRONT OF PARK SQUARE I.T.P.L."}, {"busstop": "Pattandur Agrahara Gate,WHITEFIELD,IN FRONT OF DAN HOSPITALITY INDIA PVT . LTD"}, {"busstop": "Rajapalya,IN FRONT OF PUNJAB NATIONAL BANK"}, {"busstop": "Hoodi,WARD NO.54,OPPOSITE OF B.B.M.P.SURVEYS POINT"}, {"busstop": "Bhorka Steel,GARUDACHAR PALYA,OPPOSITE OF ABB. BHORUKA TECH PARK"}, {"busstop": "Garudachar Palya,HOODI,OPPOSITE OF XYLEM AIR BUS"}, {"busstop": "Singayyana Palya,HOODI,IN FRONT OF GEARS & PINIONS PVT LTD"}, {"busstop": "MAHADEVAPURA,HOODI,OPPOSITE OF SRI SATHYA KALYANA MANTAPA"}, {"busstop": "B Narayanapura,DOORAVANI NAGARA,IN FRONT OF SRI MANJUNATHA STEEL ALLOYS"}, {"busstop": "Tin Factory"}, {"busstop": "Jn of Kasturi Nagara,KASTURI NAGARA,BESIDE SHRI SHANTI TOWER"}, {"busstop": "BChannasandra,RAMAMURTHY NAGARA,UNDER PASS ENTRANCE"}, {"busstop": "Vijaya Bank Colony,DODDA BANASAWADI,OPPOSITE OF CACHE FURNITURES LIMITED"}, {"busstop": "Horamabu petrol bunk,BANASAWADI,OPPOSITE OF UDUPI SAGAR HOTEL"}, {"busstop": "Babusab Palya,KALYANA NAGARA,IN FRONT OF SHRI R.V.PLAZA"}, {"busstop": "80 Feet Road Kalyan Nagara,KALYANA NAGARA,OPPOSITE OF SATISH SAGAR HOTEL"}, {"busstop": "Kalyana Nagara,KALYANA NAGARA,OPPOSITE OF INDO ASIAN ACADEMY DEGREE COLLEGE"}, {"busstop": "Jn of Hennur Cross,HENNURU,OPPOSITE OF NAVAJEEVA ASHRAM, NEW LIFE COLLEGE"}, {"busstop": "HBR Layout"}, {"busstop": "Jn of Nagavara,NAGAVARA,IN FRONT OF RASI TVS SERVICE CENTER"}, {"busstop": "Manyatha Tech Park,NAGAVARA,OPPOSITE OF IBM MANYATA COMPANY"}, {"busstop": "Veeranna Palya,NAGAVARA,OPPOSITE OF UDUPI UPHAR HOTEL"}, {"busstop": "Kempapura,HEBBALA,OPPOSITE OF SHRI BHAVANI ENTERPRISES"}, {"busstop": "Hebbal,HEBBALA,BESIDE PITTY SHOP"}, {"busstop": "Bhadrappa Layout,BHADRAPPA LAYOUT,BESIDE OPEN AREA"}, {"busstop": "Devi Nagara,LOTTEGOLLAHALLI,BESIDE OPEN AREA"}, {"busstop": "Kuvempu Circle,JALAHALLI,BESIDE A.G.N.ELECTRICALS"}, {"busstop": "BEL Circle"}, {"busstop": "Gokula,MATHIKERE,OPPOSITE OF VENKATESHWARA SWAMY TEMPLE"}, {"busstop": "Mathikere,MATHIKERE,BESIDE DR.SHYAMPRASAD MUKHERJEE FLYOVER ARCH"}, {"busstop": "Chowdeshwari Bus Stand JP Park,MATHIKERE, CHOUDESHWARI BUS STOP,IN FRONT OF LOK ANAND APARTMENTS"}]
  },
  {
    "route_no": "500R",
    "distance": "24.5 KM",
    "origin": "Hebbala Bridge",
    "destination": "Nerige",
    "departure_from_origin": "06:20,  09:50,  14:20,  17:20,  21:00",
    "arrival_at_origin": "06:15, 09:20, 17:15, 20:25",
    "departure_from_destination": "05:00, 07:50, 15:45, 18:55",
    "arrival_at_destination": "07:45,  11:15,  15:40,  18:50,  22:20",
    "map_json_content": [{"busstop": "Hebbala Bridge,HEBBALA,OPPOSITE OF GAYATHRI LAKE FRONT"}, {"busstop": "Kempapura,HEBBALA,IN FRONT OF BHAVANI ENTERPRISES"}, {"busstop": "Veeranna Palya,VEERANNAPALYA, NAGAVARA,OPPOSITE OF INDIAN OIL PETROL BUNK"}, {"busstop": "Manyatha Tech Park,NAGAVARA,IN FRONT OF IBM MANYATA EMBASSY BUSINESS PARK"}, {"busstop": "Nagavara Junction,NAGAVARA,IN FRONT OF HOTEL REDDYS RESTAURANT, J.B.J.COMPLEX"}, {"busstop": "HBR Layout"}, {"busstop": "Hennuru Junction,HENNURU,OPPOSITE OF FLORENCE FRORIDA GROUP OF INSTITUTIONS"}, {"busstop": "Kalyananagara Bus Stand,KALYANA NAGARA,OPPOSITE OF PANASONIC SHOW ROOM"}, {"busstop": "80 Feet Road Kalyan Nagara,KALYANA NAGARA,IN FRONT OF CROMA ELECTRONICS MEGASTORE"}, {"busstop": "Babusab Palya,KALYANA NAGARA,IN FRONT OF HOTEL LITTLE IMPERIAL"}, {"busstop": "HORAMAVU PETROL BUNK,BANASAWADI,BESIDE UDUPI SAGAR HOTEL"}, {"busstop": "Vijaya Bank Colony,DODDA BANASAWADI,IN FRONT OF CACHE FURNITURE LIMITED, S.J.C.COMPLEX"}, {"busstop": "Jn OF B CHANNASANDRA,CHANNASANDRA, RAMAMURTHY NAGARA,OPPOSITE OF ANDREWS WOOD CRAFTS"}, {"busstop": "Kasturi Nagara,KASTURI NAGARA,OPPOSITE OF SRISHANT TOWER"}, {"busstop": "Tin Factory,DOORAVANI NAGARA,OPPOSITE OF SUDHIR WEIGH BRIDGE"}, {"busstop": "KR Puram Railway Station,KR PURAM,BACK SIDE OF RAILWAY STATION"}, {"busstop": "B Narayanapura,B.NARAYANA PURA,OPPOSITE OF HOME CITY ZUZRI FUNITURE"}, {"busstop": "Mahadevapura,MAHADEVAPURA,IN FRONT OF TEJA MARBLE CENTER"}, {"busstop": "EMC2"}, {"busstop": "Doddanekkundi,DODDANEKUNDI,IN FRONT OF NIRMALA NURSING HOME"}, {"busstop": "Karthik Nagara,MARATHAHALLI,OPPOSITE OF WATER TANK"}, {"busstop": "Kala Mandir Marathalli,MARATHAHALLI,IN FRONT OF KALAMANDIRA SILK CENTER"}, {"busstop": "Marathahalli Bridge,MARATHAHALLI,IN FRONT OF ACER GREENS"}, {"busstop": "Multiplex Marathahalli,MARATHAHALLI,IN FRONT OF STAPLES"}, {"busstop": "Kada Bisanahalli,KADABEESANAHALLI,OPPOSITE OF V.R.CHAMBERS"}, {"busstop": "Panathur"}, {"busstop": "Panathuru Dinne,PANATHURU,AT RESIDENTIAL AREA"}, {"busstop": "Gunjur Palya"}, {"busstop": "Nerige,IN FRONT OF ASWATHA  KATTE"}]
  },
  {
    "route_no": "500T",
    "distance": "18.8 KM",
    "origin": "Hebbala Bridge",
    "destination": "Marathahalli Bridge",
    "departure_from_origin": "06:00,  06:30,  07:00,  07:30,  08:00,  08:30,  09:00,  09:30,  10:25,  10:55,  11:25,  14:50,  15:20,  15:50,  16:20,  16:50,  17:45,  18:15,  18:45,  19:15,  19:45,  20:15,  20:45,  21:40",
    "arrival_at_origin": "07:25, 07:55, 08:25, 08:55, 09:25, 09:55, 10:25, 10:55, 11:50, 15:15, 15:45, 16:15, 16:45, 17:40, 18:10, 18:40, 19:10, 19:40, 20:10, 20:40, 21:35, 22:00, 22:30, 22:55",
    "departure_from_destination": "06:30, 07:00, 07:30, 08:00, 08:30, 09:00, 09:30, 10:00, 10:55, 14:20, 14:50, 15:20, 15:50, 16:45, 17:15, 17:45, 18:15, 18:45, 19:15, 19:45, 20:40, 21:10, 21:40, 22:05",
    "arrival_at_destination": "06:55,  07:25,  07:55,  08:25,  08:55,  09:25,  09:55,  10:25,  11:20,  11:50,  12:20,  15:45,  16:15,  16:45,  17:15,  17:45,  18:40,  19:10,  19:40,  20:10,  20:40,  21:10,  21:35,  22:35",
    "map_json_content": [{"busstop": "Hebbala Bridge,HEBBALA,OPPOSITE OF GAYATHRI LAKE FRONT"}, {"busstop": "Kempapura,HEBBALA,IN FRONT OF BHAVANI ENTERPRISES"}, {"busstop": "Veeranna Palya,VEERANNAPALYA, NAGAVARA,OPPOSITE OF INDIAN OIL PETROL BUNK"}, {"busstop": "Manyatha Tech Park,NAGAVARA,IN FRONT OF IBM MANYATA EMBASSY BUSINESS PARK"}, {"busstop": "Nagavara Junction,NAGAVARA,IN FRONT OF HOTEL REDDYS RESTAURANT, J.B.J.COMPLEX"}, {"busstop": "HBR Layout"}, {"busstop": "Hennuru Junction,HENNURU,OPPOSITE OF FLORENCE FRORIDA GROUP OF INSTITUTIONS"}, {"busstop": "Kalyananagara Bus Stand,KALYANA NAGARA,OPPOSITE OF PANASONIC SHOW ROOM"}, {"busstop": "80 Feet Road Kalyan Nagara,KALYANA NAGARA,IN FRONT OF CROMA ELECTRONICS MEGASTORE"}, {"busstop": "Babusab Palya,KALYANA NAGARA,IN FRONT OF HOTEL LITTLE IMPERIAL"}, {"busstop": "HORAMAVU PETROL BUNK,BANASAWADI,BESIDE UDUPI SAGAR HOTEL"}, {"busstop": "Vijaya Bank Colony,DODDA BANASAWADI,IN FRONT OF CACHE FURNITURE LIMITED, S.J.C.COMPLEX"}, {"busstop": "Jn OF B CHANNASANDRA,CHANNASANDRA, RAMAMURTHY NAGARA,OPPOSITE OF ANDREWS WOOD CRAFTS"}, {"busstop": "Kasturi Nagara,KASTURI NAGARA,OPPOSITE OF SRISHANT TOWER"}, {"busstop": "Tin Factory,DOORAVANI NAGARA,OPPOSITE OF SUDHIR WEIGH BRIDGE"}, {"busstop": "KR Puram Railway Station,KR PURAM,BACK SIDE OF RAILWAY STATION"}, {"busstop": "B Narayanapura,B.NARAYANA PURA,OPPOSITE OF HOME CITY ZUZRI FUNITURE"}, {"busstop": "Mahadevapura,MAHADEVAPURA,IN FRONT OF TEJA MARBLE CENTER"}, {"busstop": "EMC2"}, {"busstop": "Doddanekkundi,DODDANEKUNDI,IN FRONT OF NIRMALA NURSING HOME"}, {"busstop": "Karthik Nagara,MARATHAHALLI,OPPOSITE OF WATER TANK"}, {"busstop": "Marathahalli Bridge,MARATHAHALLI,IN FRONT OF ACER GREENS"}]
  },
  {
    "route_no": "500TA",
    "distance": "22.5 KM",
    "origin": "Hebbala Bridge",
    "destination": "Boganahalli",
    "departure_from_origin": "09:45,  12:30,  14:50,  17:35",
    "arrival_at_origin": "09:40, 12:25, 14:45, 17:30",
    "departure_from_destination": "08:35, 11:20, 13:40, 16:25",
    "arrival_at_destination": "10:50,  13:35,  15:55,  18:40",
    "map_json_content": [{"busstop": "Hebbala Bridge,HEBBALA,OPPOSITE OF GAYATHRI LAKE FRONT"}, {"busstop": "Kempapura,HEBBALA,IN FRONT OF BHAVANI ENTERPRISES"}, {"busstop": "Veeranna Palya,VEERANNAPALYA, NAGAVARA,OPPOSITE OF INDIAN OIL PETROL BUNK"}, {"busstop": "Manyatha Tech Park,NAGAVARA,IN FRONT OF IBM MANYATA EMBASSY BUSINESS PARK"}, {"busstop": "Nagavara Junction,NAGAVARA,IN FRONT OF HOTEL REDDYS RESTAURANT, J.B.J.COMPLEX"}, {"busstop": "HBR Layout"}, {"busstop": "Hennuru Junction,HENNURU,OPPOSITE OF FLORENCE FRORIDA GROUP OF INSTITUTIONS"}, {"busstop": "Kalyananagara Bus Stand,KALYANA NAGARA,OPPOSITE OF PANASONIC SHOW ROOM"}, {"busstop": "80 Feet Road Kalyan Nagara,KALYANA NAGARA,IN FRONT OF CROMA ELECTRONICS MEGASTORE"}, {"busstop": "Babusab Palya,KALYANA NAGARA,IN FRONT OF HOTEL LITTLE IMPERIAL"}, {"busstop": "HORAMAVU PETROL BUNK,BANASAWADI,BESIDE UDUPI SAGAR HOTEL"}, {"busstop": "Vijaya Bank Colony,DODDA BANASAWADI,IN FRONT OF CACHE FURNITURE LIMITED, S.J.C.COMPLEX"}, {"busstop": "Jn OF B CHANNASANDRA,CHANNASANDRA, RAMAMURTHY NAGARA,OPPOSITE OF ANDREWS WOOD CRAFTS"}, {"busstop": "Kasturi Nagara,KASTURI NAGARA,OPPOSITE OF SRISHANT TOWER"}, {"busstop": "Tin Factory,DOORAVANI NAGARA,OPPOSITE OF SUDHIR WEIGH BRIDGE"}, {"busstop": "KR Puram Railway Station,KR PURAM,BACK SIDE OF RAILWAY STATION"}, {"busstop": "B Narayanapura,B.NARAYANA PURA,OPPOSITE OF HOME CITY ZUZRI FUNITURE"}, {"busstop": "Mahadevapura,MAHADEVAPURA,IN FRONT OF TEJA MARBLE CENTER"}, {"busstop": "EMC2"}, {"busstop": "Doddanekkundi,DODDANEKUNDI,IN FRONT OF NIRMALA NURSING HOME"}, {"busstop": "Karthik Nagara,MARATHAHALLI,OPPOSITE OF WATER TANK"}, {"busstop": "Kala Mandir Marathalli,MARATHAHALLI,IN FRONT OF KALAMANDIRA SILK CENTER"}, {"busstop": "Marathahalli Bridge,MARATHAHALLI,IN FRONT OF ACER GREENS"}, {"busstop": "Multiplex Marathahalli,MARATHAHALLI,IN FRONT OF STAPLES"}, {"busstop": "Kada Bisanahalli,KADABEESANAHALLI,OPPOSITE OF V.R.CHAMBERS"}, {"busstop": "Panathuru,PANATHURU,IN FRONT OF GANESH MEDICAL"}, {"busstop": "Boganahalli"}]
  },
  {
    "route_no": "501",
    "distance": "76 KM",
    "origin": "Banashankari Bus Station",
    "destination": "Banashankari Bus Station",
    "departure_from_origin": "05:50,  06:20,  07:20,  07:50,  09:50,  10:20,  11:20,  11:50,  15:20,  15:25,  15:50,  19:20,  19:50",
    "arrival_at_origin": "09:20, 09:50, 10:50, 11:20, 13:20, 13:50, 14:50, 15:20, 18:50, 18:55, 19:20, 22:50, 23:20",
    "departure_from_destination": "05:50, 06:20, 07:20, 07:50, 09:50, 10:20, 11:20, 11:50, 15:20, 15:25, 15:50, 19:20, 19:50",
    "arrival_at_destination": "09:20,  09:50,  10:50,  11:20,  13:20,  13:50,  14:50,  15:20,  18:50,  18:55,  19:20,  22:50,  23:20",
    "map_json_content": [{"busstop": "BANASHANKARI TTMC"}, {"busstop": "Sangam Circle,JAYANAGARA 8TH BLOCK,BESIDE INDIAN TYRE CENTER"}, {"busstop": "Jayanagara 5th Block,JAYANAGARA 5TH BLOCK,BESIDE KRISHNA SEVA ASHRAMA HOSPITAL"}, {"busstop": "Marenahalli Petrol Bunk,PATTABHIRAMA NAGARA,BESIDE AKKA MAHADEVI PARK"}, {"busstop": "Ragigudda,JAYANAGARA 9TH BLOCK,BESIDE RAGHAVENDRA UPAHARA"}, {"busstop": "Jayadeva Hospital,JAYANAGARA 9TH BLOCK,HEALTHY INTERNATIONAL HOMEOPATHY"}, {"busstop": "MICO Layout,BTM LAYOUT 1ST STAGE"}, {"busstop": "BTM water Tank,BTM LAYOUT,IN FRONT OF CORPORATION BANK"}, {"busstop": "Udupi Garden 16th Main,BTM LAYOUT,BESIDE BANGLOR ONE CENTER"}, {"busstop": "BTM Layout Bus Stop,BTM LAYOUT 2ND STAGE,IN FROUNT OF KUVEMPUNAGRA BUS STAND"}, {"busstop": "Central Silk Board,MADIWALA,IN FRONT OF SHRI KRISHNA BHAVAN HOTEL"}, {"busstop": "HSR Apartment,KORAMANAGALA, HSR LAYOUT,IN FRONT OF ARANYA MULTI CUISINE RESTAURANT"}, {"busstop": "14th Main HSR Layout,HSR LAYOUT,IN FRONT OF WESTMEAD CLINIC"}, {"busstop": "Depot-25,HSR LAYOUT,OPPOSITE OF SAROVARA APARTMENT, DEPOT 25"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Sarjapura Cross,HSR LAYOUT,IN FRONT OF SHOBHA GRANET APARTMENT"}, {"busstop": "Bellandur gate,BELLANDUR,OPPOSITE OF ANGAN RESTUARANT"}, {"busstop": "Eco Space,BELLANDUR,IN FRONT OF MARUTHI SUZUKI MOTORS"}, {"busstop": "Devarabisanahalli,DEVERA BISANAHALLI,OPPOSTIE OF COUNTRY CLUB"}, {"busstop": "New Horizon College,DEVARA BISANAHALLI, KADABEESANAHALLI,BESIDE SALAPURIA TOUCH STONE"}, {"busstop": "Kada Bisanahalli,KADABEESANAHALLI,IN FRONT OF V.R.CHAMBERS"}, {"busstop": "Multiplex Marathahalli,MARATHAHALLI,BESIDE PRESTIGE TECH PARK"}, {"busstop": "Jn of Marathalli Bridge,MARATHAHALLI,IN FRONT OF SOUL SPACE PARDIGM"}, {"busstop": "Karthik Nagara,MARATHAHALLI,IN FRONT OF A.P.RESIDENCY, GUEST HOUSE"}, {"busstop": "Dodda Nekkundi,DODDANEKUNDI,NEAR BY CAFE COFFEE DAY"}, {"busstop": "EMC2,DODDANEKUNDI,IN FRONT OF TOTAL MALL"}, {"busstop": "Mahadevapura Cross,MAHADEVAPURA,IN FRONT OF MTB MANGALAMERU KALAYANA MANTAPA"}, {"busstop": "B Narayanapura,B.NARAYANA PURA,OPPOSITE OF MORE MEGA STORE"}, {"busstop": "KR Puram Railway Station,KR PURAM,OPPOSITE OF BRIDGE"}, {"busstop": "Tin Factory"}, {"busstop": "Jn of Kasturi Nagara,KASTURI NAGARA,BESIDE SHRI SHANTI TOWER"}, {"busstop": "BChannasandra,RAMAMURTHY NAGARA,UNDER PASS ENTRANCE"}, {"busstop": "Vijaya Bank Colony,DODDA BANASAWADI,OPPOSITE OF CACHE FURNITURES LIMITED"}, {"busstop": "Horamabu petrol bunk,BANASAWADI,OPPOSITE OF UDUPI SAGAR HOTEL"}, {"busstop": "Babusab Palya,KALYANA NAGARA,IN FRONT OF SHRI R.V.PLAZA"}, {"busstop": "80 Feet Road Kalyan Nagara,KALYANA NAGARA,OPPOSITE OF SATISH SAGAR HOTEL"}, {"busstop": "Kalyana Nagara,KALYANA NAGARA,OPPOSITE OF INDO ASIAN ACADEMY DEGREE COLLEGE"}, {"busstop": "Jn of Hennur Cross,HENNURU,OPPOSITE OF NAVAJEEVA ASHRAM, NEW LIFE COLLEGE"}, {"busstop": "HBR Layout"}, {"busstop": "Jn of Nagavara,NAGAVARA,IN FRONT OF RASI TVS SERVICE CENTER"}, {"busstop": "Manyatha Tech Park,NAGAVARA,OPPOSITE OF IBM MANYATA COMPANY"}, {"busstop": "Veeranna Palya,NAGAVARA,OPPOSITE OF UDUPI UPHAR HOTEL"}, {"busstop": "Kempapura,HEBBALA,OPPOSITE OF SHRI BHAVANI ENTERPRISES"}, {"busstop": "Hebbala"}, {"busstop": "Bhadrappa Layout,BHADRAPPA LAYOUT,BESIDE OPEN AREA"}, {"busstop": "Devi Nagara,LOTTEGOLLAHALLI,BESIDE OPEN AREA"}, {"busstop": "Kuvempu Circle,JALAHALLI,BESIDE A.G.N.ELECTRICALS"}, {"busstop": "BEL Circle,JALAHALLI,BESIDE INDANE MOHAN GAS SERVICE"}, {"busstop": "Muthyalanagara,JALAHALLI,BESIDE KIRAN SUPER BAZAAR"}, {"busstop": "Bakery,JALAHALLI,BESIDE KRISHNA BAKERY"}, {"busstop": "Jalahalli Village,JALAHALLI,BESIDE OPEN AREA"}, {"busstop": "Alisda,JALAHALLI,BESIDE MILITARY GATE"}, {"busstop": "Goragunte Palya,GORGUNTEPALYA,BESIDE SHIVA TEMPLE"}, {"busstop": "Reliance Petrol Bunk Guragunte palya,GORAGUNTEPALYA,OPPOSITE OF RELIANCE PETROL BUNK"}, {"busstop": "Foreman Training Insititue,GORAGUNTEPALYA,OPPOSITE OF MODERN BREAD FACTORY"}, {"busstop": "Kanteerava Studio,GORAGUNTEPALYA,BESIDE PETROL BUNK"}, {"busstop": "Rajkumar Samadhi"}, {"busstop": "Muneshwaranagara Nandini Layout,NANDINI LAYOUT,IN FRONT OF RANGANATHA SWAMY KABBINA MANDI"}, {"busstop": "Laggere Bridge,NARASHIMA SWAMY LAYOUT, LAGGERE,IN FRONT OF KADAMBA BAR AND RESTAURANT"}, {"busstop": "Laggere Arch,KEMPE GOWDA LAYOUT,IN FRONT OF ANGALA PARAMESHWARI TEMPLE ARCH"}, {"busstop": "Lourdhubhai Kalyana mantapa,PREMA NAGARA,IN FRONT OF BENAKA BAR & RESTAURANT"}, {"busstop": "Summanahalli Magadi Road,SUMANAHALLI,UNDER THE FLYOVER"}, {"busstop": "Kottige Palya Magadi Road"}, {"busstop": "Vokkaligara School,KOTTIGEPALYA,OPPOSITE OKKALIGARASANGA SCHOOL, SRIGANDHA KAVALU"}, {"busstop": "Nagarabhavi BDA Complex,NAGARABHAVI 2ND STAGE,BESIDE BDA COMPLEX NAGARABHAVI"}, {"busstop": "Aladamara Papareddy palya,NAGARABHAVI 2ND STAGE,BESIDE ALANKAR TILES & SANITARY SHOP"}, {"busstop": "Papareddy Palya,PAPAREDDY PALYA,OPPOSITE OF SHARADA TIMBERS"}, {"busstop": "Deepa Complex,ITI LAYOUT PAPAREDDY PALYA,OPPOSITE OF PETROL BUNK"}, {"busstop": "Kengunte Ambedkar College,KENGUNTE, MALLATHAHALLI,BESIDE AMBEDKAR COLLEGE"}, {"busstop": "Kengunte,KENGUNTE, MALLATHAHALLI,OPPOSITE OF MANJUSHREE UPAHARA"}, {"busstop": "Mallathahalli Cross,MALLATHAHALLI,OPPOSITE OF BHAGAVAN BUDDA HOMEOPATHIC MEDICAL COLLEGE"}, {"busstop": "University Quarters,JNANABHARATHI,BESIDE UNIVERSITY QUARTERS"}, {"busstop": "PVP Shool,JNANAGANGA NAGARA,BESIDE P.V.P.SCHOOL"}, {"busstop": "Mariyappana Palya,MARIYAPPANA PALYA,OPPOSITE OF DODDAMMA TEMPLE"}, {"busstop": "Kenchanapura Cross,NAGADEVANAHALLI,OPPOSITE OF H.P.PETROL BUNK"}, {"busstop": "Nagadevanahalli RR Temple,NAGADEVANAHALLI,BESIDE SRI KRUPA EDUCATION CENTER & SS TILES SANITARY WARE"}, {"busstop": "Shirke KHB Quarters"}, {"busstop": "Church,KENGERI UPANAGARA"}, {"busstop": "Hoysala Circle Kengeri Satellite Town,KENGERI UPANAGARA"}, {"busstop": "Kengeri Satalite Town Society"}, {"busstop": "Railway Station Kengeri"}, {"busstop": "Jn of Kommaghatta Road"}, {"busstop": "Ganesha Temple"}, {"busstop": "Kengeri Police Station"}, {"busstop": "Kengeri TTMC"}, {"busstop": "Mylasandra Gate"}, {"busstop": "Dubasi Palya Cross"}, {"busstop": "RV College"}, {"busstop": "Jayaram Das Factory"}, {"busstop": "Bangalore University Gate Mysore Road"}, {"busstop": "Rajarajeshwarinagara Gate"}, {"busstop": "BWSSB Quarters"}, {"busstop": "Nayandahalli"}, {"busstop": "Jn of Nayandahalli"}, {"busstop": "Virabhadranagara Cross,VEERABHADRA NAGARA,BESIDE SRINIVASA BAR & RESTAURANT"}, {"busstop": "PES College"}, {"busstop": "Hosakerehalli Junction,BANASHANKARI 3RD STAGE DWARAKA NAGARA,OPPOSITE OF R.K.COLOUR LAB"}, {"busstop": "Hosakerehalli Cross,BANASHANKARI 3RD STAGE,OPPOSITE OF N.C.E.R.T."}, {"busstop": "Janatha Bazar,BANASHANKARI 3RD STAGE,OPPOSITE OF SHIVA SHANKARA SABHANGANA"}, {"busstop": "Banashankari 3rd Stage 3rd Phase,BANASHANKARI 3RD STAGE,IN FRONT OF LITTLE MILLENIUM NURSERY SCHOOL"}, {"busstop": "Kamakya Talkies,BANASHANKARI 3RD STAGE,IN FRONT OF BMTC DEPOT-13"}, {"busstop": "Devegowda Petrol Bunk,BANASHANKARI 3RD STAGE,BESIDE BIG MEGA MART"}, {"busstop": "Kempegowda Medical  Hospital,BANASHANKARI 3RD STAGE,OPPOSITE OF KEMPEGOWDA MEDICAL COLLEGE"}, {"busstop": "Indira Nursing Home Tyagarajanagar,BANASHANKARI 2ND STAGE,BESIDE INDIRA NURSING HOME"}, {"busstop": "Post Office,BANASHANKARI, 2ND STAGE,OPPOSITE POST OFFICE, BANASHANKARI, 2ND STAGE"}, {"busstop": "Monotype Corporation"}, {"busstop": "Cauvery Nagara,BANASHANKRI 2ND STAGE KAVERI NAGARA,BESIDE BANASHANKARI STORES"}, {"busstop": "Yarab Nagara,Adjacent to hostel"}, {"busstop": "Banashankari Bus Station"}]
  },
  {
    "route_no": "501A",
    "distance": "76 KM",
    "origin": "Hebbal",
    "destination": "Banashankari Bus Station",
    "departure_from_origin": "05:00,  05:10,  05:30,  05:40,  06:50,  07:05,  07:45,  07:50,  08:15,  08:20,  08:25,  08:40,  09:30,  10:00,  10:20,  10:30,  13:45,  14:05,  14:45,  15:00,  15:10,  15:20,  16:30,  16:40,  16:55,  17:20,  17:35,  17:40,  18:10,  18:50,  19:55,  20:00,  20:35,  21:10,  21:35,  22:15",
    "arrival_at_origin": "06:45, 07:00, 07:40, 07:45, 08:10, 08:15, 08:20, 08:35, 09:05, 09:15, 09:25, 09:30, 09:55, 10:15, 10:25, 11:00, 11:10, 13:00, 13:35, 14:40, 16:10, 16:25, 17:05, 17:10, 17:15, 18:05, 18:40, 18:45, 19:05, 19:15, 19:25, 19:30, 19:50, 20:30, 20:40, 21:30, 22:10, 23:10",
    "departure_from_destination": "05:15, 05:30, 06:00, 06:15, 07:00, 07:05, 07:15, 07:30, 07:40, 08:10, 08:20, 08:40, 09:10, 11:00, 11:50, 12:45, 14:25, 14:40, 14:45, 15:05, 15:20, 15:25, 16:10, 16:15, 16:50, 17:05, 17:15, 17:25, 17:40, 18:25, 18:45, 18:50, 19:40, 20:10, 20:30, 21:50",
    "arrival_at_destination": "00:00,  06:55,  07:00,  07:10,  07:25,  08:40,  08:55,  09:35,  09:50,  10:10,  10:30,  11:15,  11:45,  12:00,  12:15,  15:50,  16:40,  17:00,  17:10,  17:15,  17:20,  18:15,  18:20,  18:25,  19:10,  19:25,  19:40,  20:00,  20:45,  21:20,  21:50,  22:05,  22:20,  23:00,  23:25",
    "map_json_content": [{"busstop": "Hebbal,HEBBALA,BESIDE PITTY SHOP"}, {"busstop": "Bhadrappa Layout,BHADRAPPA LAYOUT,BESIDE OPEN AREA"}, {"busstop": "Devi Nagara,LOTTEGOLLAHALLI,BESIDE OPEN AREA"}, {"busstop": "Kuvempu Circle,JALAHALLI,BESIDE A.G.N.ELECTRICALS"}, {"busstop": "BEL Circle,JALAHALLI,BESIDE INDANE MOHAN GAS SERVICE"}, {"busstop": "Muthyalanagara,JALAHALLI,BESIDE KIRAN SUPER BAZAAR"}, {"busstop": "Bakery,JALAHALLI,BESIDE KRISHNA BAKERY"}, {"busstop": "Jalahalli Village,JALAHALLI,BESIDE OPEN AREA"}, {"busstop": "Alisda,JALAHALLI,BESIDE MILITARY GATE"}, {"busstop": "Goragunte Palya,GORGUNTEPALYA,BESIDE SHIVA TEMPLE"}, {"busstop": "Reliance Petrol Bunk Guragunte palya,GORAGUNTEPALYA,OPPOSITE OF RELIANCE PETROL BUNK"}, {"busstop": "Foreman Training Insititue,GORAGUNTEPALYA,OPPOSITE OF MODERN BREAD FACTORY"}, {"busstop": "Kanteerava Studio,GORAGUNTEPALYA,BESIDE PETROL BUNK"}, {"busstop": "Rajkumar Samadhi"}, {"busstop": "Muneshwaranagara Nandini Layout,NANDINI LAYOUT,IN FRONT OF RANGANATHA SWAMY KABBINA MANDI"}, {"busstop": "Laggere Bridge,NARASHIMA SWAMY LAYOUT, LAGGERE,IN FRONT OF KADAMBA BAR AND RESTAURANT"}, {"busstop": "Laggere Arch,KEMPE GOWDA LAYOUT,IN FRONT OF ANGALA PARAMESHWARI TEMPLE ARCH"}, {"busstop": "Lourdhubhai Kalyana mantapa,PREMA NAGARA,IN FRONT OF BENAKA BAR & RESTAURANT"}, {"busstop": "Summanahalli Magadi Road,SUMANAHALLI,UNDER THE FLYOVER"}, {"busstop": "Kottige Palya Magadi Road"}, {"busstop": "Vokkaligara School,KOTTIGEPALYA,OPPOSITE OKKALIGARASANGA SCHOOL, SRIGANDHA KAVALU"}, {"busstop": "Nagarabhavi BDA Complex,NAGARABHAVI 2ND STAGE,BESIDE BDA COMPLEX NAGARABHAVI"}, {"busstop": "Aladamara Papareddy palya,NAGARABHAVI 2ND STAGE,BESIDE ALANKAR TILES & SANITARY SHOP"}, {"busstop": "Papareddy Palya,PAPAREDDY PALYA,OPPOSITE OF SHARADA TIMBERS"}, {"busstop": "Deepa Complex,ITI LAYOUT PAPAREDDY PALYA,OPPOSITE OF PETROL BUNK"}, {"busstop": "Kengunte Ambedkar College,KENGUNTE, MALLATHAHALLI,BESIDE AMBEDKAR COLLEGE"}, {"busstop": "Kengunte,KENGUNTE, MALLATHAHALLI,OPPOSITE OF MANJUSHREE UPAHARA"}, {"busstop": "Mallathahalli Cross,MALLATHAHALLI,OPPOSITE OF BHAGAVAN BUDDA HOMEOPATHIC MEDICAL COLLEGE"}, {"busstop": "University Quarters,JNANABHARATHI,BESIDE UNIVERSITY QUARTERS"}, {"busstop": "PVP Shool,JNANAGANGA NAGARA,BESIDE P.V.P.SCHOOL"}, {"busstop": "Mariyappana Palya,MARIYAPPANA PALYA,OPPOSITE OF DODDAMMA TEMPLE"}, {"busstop": "Kenchanapura Cross,NAGADEVANAHALLI,OPPOSITE OF H.P.PETROL BUNK"}, {"busstop": "Nagadevanahalli RR Temple,NAGADEVANAHALLI,BESIDE SRI KRUPA EDUCATION CENTER & SS TILES SANITARY WARE"}, {"busstop": "Shirke KHB Quarters"}, {"busstop": "Church,KENGERI UPANAGARA"}, {"busstop": "Hoysala Circle Kengeri Satellite Town,KENGERI UPANAGARA"}, {"busstop": "Kengeri Satalite Town Society"}, {"busstop": "Railway Station Kengeri"}, {"busstop": "Jn of Kommaghatta Road"}, {"busstop": "Ganesha Temple"}, {"busstop": "Kengeri Police Station"}, {"busstop": "Kengeri TTMC"}, {"busstop": "Mylasandra Gate"}, {"busstop": "Dubasi Palya Cross"}, {"busstop": "RV College"}, {"busstop": "Jayaram Das Factory"}, {"busstop": "Bangalore University Gate Mysore Road"}, {"busstop": "Rajarajeshwarinagara Gate"}, {"busstop": "BWSSB Quarters"}, {"busstop": "Nayandahalli"}, {"busstop": "Jn of Nayandahalli"}, {"busstop": "Virabhadranagara Cross,VEERABHADRA NAGARA,BESIDE SRINIVASA BAR & RESTAURANT"}, {"busstop": "PES College"}, {"busstop": "Hosakerehalli Junction,BANASHANKARI 3RD STAGE DWARAKA NAGARA,OPPOSITE OF R.K.COLOUR LAB"}, {"busstop": "Hosakerehalli Cross,BANASHANKARI 3RD STAGE,OPPOSITE OF N.C.E.R.T."}, {"busstop": "Janatha Bazar,BANASHANKARI 3RD STAGE,OPPOSITE OF SHIVA SHANKARA SABHANGANA"}, {"busstop": "Banashankari 3rd Stage 3rd Phase,BANASHANKARI 3RD STAGE,IN FRONT OF LITTLE MILLENIUM NURSERY SCHOOL"}, {"busstop": "Kamakya Talkies,BANASHANKARI 3RD STAGE,IN FRONT OF BMTC DEPOT-13"}, {"busstop": "Devegowda Petrol Bunk,BANASHANKARI 3RD STAGE,BESIDE BIG MEGA MART"}, {"busstop": "Kempegowda Medical  Hospital,BANASHANKARI 3RD STAGE,OPPOSITE OF KEMPEGOWDA MEDICAL COLLEGE"}, {"busstop": "Indira Nursing Home Tyagarajanagar,BANASHANKARI 2ND STAGE,BESIDE INDIRA NURSING HOME"}, {"busstop": "Post Office,BANASHANKARI, 2ND STAGE,OPPOSITE POST OFFICE, BANASHANKARI, 2ND STAGE"}, {"busstop": "Monotype Corporation"}, {"busstop": "Cauvery Nagara,BANASHANKRI 2ND STAGE KAVERI NAGARA,BESIDE BANASHANKARI STORES"}, {"busstop": "Yarab Nagara,Adjacent to hostel"}, {"busstop": "Banashankari Bus Station"}]
  },
  {
    "route_no": "501B",
    "distance": "76 KM",
    "origin": "Hebbala Bridge",
    "destination": "Hebbala Bridge",
    "departure_from_origin": "05:10,  07:30,  08:15,  11:25,  14:35,  14:45,  15:30,  18:30,  19:30",
    "arrival_at_origin": "08:50, 10:55, 11:40, 14:40, 18:00, 19:00, 22:05, 23:00",
    "departure_from_destination": "05:10, 07:30, 08:15, 11:25, 14:35, 14:45, 15:30, 18:30, 19:30",
    "arrival_at_destination": "08:50,  10:55,  11:40,  14:40,  18:00,  19:00,  22:05,  23:00",
    "map_json_content": [{"busstop": "Hebbala Bridge,HEBBALA,OPPOSITE OF GAYATHRI LAKE FRONT"}, {"busstop": "Kempapura,HEBBALA,IN FRONT OF BHAVANI ENTERPRISES"}, {"busstop": "Veeranna Palya,VEERANNAPALYA, NAGAVARA,OPPOSITE OF INDIAN OIL PETROL BUNK"}, {"busstop": "Manyatha Tech Park,NAGAVARA,IN FRONT OF IBM MANYATA EMBASSY BUSINESS PARK"}, {"busstop": "Nagavara Junction,NAGAVARA,IN FRONT OF HOTEL REDDYS RESTAURANT, J.B.J.COMPLEX"}, {"busstop": "HBR Layout"}, {"busstop": "Hennuru Junction,HENNURU,OPPOSITE OF FLORENCE FRORIDA GROUP OF INSTITUTIONS"}, {"busstop": "Kalyananagara Bus Stand,KALYANA NAGARA,OPPOSITE OF PANASONIC SHOW ROOM"}, {"busstop": "80 Feet Road Kalyan Nagara,KALYANA NAGARA,IN FRONT OF CROMA ELECTRONICS MEGASTORE"}, {"busstop": "Babusab Palya,KALYANA NAGARA,IN FRONT OF HOTEL LITTLE IMPERIAL"}, {"busstop": "HORAMAVU PETROL BUNK,BANASAWADI,BESIDE UDUPI SAGAR HOTEL"}, {"busstop": "Vijaya Bank Colony,DODDA BANASAWADI,IN FRONT OF CACHE FURNITURE LIMITED, S.J.C.COMPLEX"}, {"busstop": "Jn OF B CHANNASANDRA,CHANNASANDRA, RAMAMURTHY NAGARA,OPPOSITE OF ANDREWS WOOD CRAFTS"}, {"busstop": "Kasturi Nagara,KASTURI NAGARA,OPPOSITE OF SRISHANT TOWER"}, {"busstop": "Tin Factory"}, {"busstop": "KR Puram Railway Station,KR PURAM,BACK SIDE OF RAILWAY STATION"}, {"busstop": "B Narayanapura,B.NARAYANA PURA,OPPOSITE OF HOME CITY ZUZRI FUNITURE"}, {"busstop": "Mahadevapura,MAHADEVAPURA,IN FRONT OF TEJA MARBLE CENTER"}, {"busstop": "EMC2"}, {"busstop": "Doddanekkundi,DODDANEKUNDI,IN FRONT OF NIRMALA NURSING HOME"}, {"busstop": "Karthik Nagara,MARATHAHALLI,OPPOSITE OF WATER TANK"}, {"busstop": "Marathahalli Bridge,MARATHAHALLI,IN FRONT OF ACER GREENS"}, {"busstop": "Multiplex Marathahalli,MARATHAHALLI,IN FRONT OF STAPLES"}, {"busstop": "Kada Bisanahalli,KADABEESANAHALLI,OPPOSITE OF V.R.CHAMBERS"}, {"busstop": "New Horizon College,DEVARABISANAHALLI,OPPOSITE OF HALLMARK SALAPURIA"}, {"busstop": "Devarabisanahalli"}, {"busstop": "Eco Space,BELLANDUR,IN FRONT OF ECO SPACE COMPANY"}, {"busstop": "City light Apt,BELLANDUR,IN FRONT OF MORGAN RESTAURANT"}, {"busstop": "Petrol Bunk,BELLANDUR,IN FRONT AKM & HARMONY APARTMENT"}, {"busstop": "Sarjapura Cross,BELLANDUR,IN FRONT CAZE CARAGE"}, {"busstop": "Ibbalur"}, {"busstop": "Agara Junction"}, {"busstop": "Depot-25,HSR LAYOUT AGRAHARA,IN FRONT OF SAROVARA APARTMENT"}, {"busstop": "14th Main HSR Layout,HSR LAYOUT,OPPOSITE OF RELIANCE AUTOZONE"}, {"busstop": "HSR Appartment,HSR LAYOUT,IN FRONT OF FEMHILL GARDENS APARTMENT"}, {"busstop": "Central Silk Board,BTM LAYOUT, MADIWALA,IN FRONT OF CENTRAL SILK BOARD"}, {"busstop": "BTM Layout,BTM Layout 2nd Stage,Kuvempunagara Bus Stand"}, {"busstop": "Udupi Garden 16th Main,BTM Layout,Opp Axis Bank"}, {"busstop": "BTM water Tank,BTM LAYOUT,OPPOSITE OF CORPORATION BANK"}, {"busstop": "MICO Layout,BTM LAYOUT,IN FRONT OF METRIC STREAM"}, {"busstop": "Jayadeva Hospital,JP NAGARA 3RD PHASE,BESIDE MAAS UNIQUE TOWER"}, {"busstop": "Jayanagara 9th East Circle,JAYANAGARA 9TH BLOCK,BESIDE LAKSHMI HARDWARE"}, {"busstop": "Ragigudda,JAYANAGARA 9TH BLOCK,BESIDE VISION EXPRESS"}, {"busstop": "Marenahalli Petrol Bunk,PATTABHIRAMA NAGARA,OPPOSITE OF AKKA MAHADEVI PARK"}, {"busstop": "Jayanagara 5th Block,JAYANAGARA 5TH BLOCK,BESIDE LADY HOSPITAL"}, {"busstop": "Sangam Circle,JAYANAGARA 8TH BLOCK,BESIDE BANGALORE WATER SUPPLY"}, {"busstop": "BANASHANKARI TTMC"}, {"busstop": "Yarab Nagara,BANASHANKRI 2ND STAGE KAVERI NAGARA,OPPOSITE OF BRAHMALINGESHWARA CONDIMENTS"}, {"busstop": "Cauvery Nagara,BANASHANKRI 2ND STAGE KAVERI NAGARA,BESIDE VINAYAKA SABHA BHAVANA"}, {"busstop": "Monotype Corporation"}, {"busstop": "Post Office,BANASHANKARI, 2ND STAGE,IN FRONT OF NAGALAKSHMI KALYANA MANTAPA"}, {"busstop": "Indira Nursing Home,BANASHANKARI 2ND STAGE,OPPOSITE OF MUTHOOT FINANCE"}, {"busstop": "Kempegowda Medical Hospital,BANASHANKARI 2ND STAGE,BESIDE KEMPEGOWDA COLLEGE"}, {"busstop": "Devegowda Petrol Bunk,BANASHANKARI 3RD STAGE,BESIDE CO-OPERATIVE TRAINING COLLEGE"}, {"busstop": "Kamakya Talkies,BANASHANKARI 3RD STAGE,IN FRONT OF NISARGA BDA ENCLEVE"}, {"busstop": "Banashankari 3rd Stage 3rd Phase,BANASHANKARI 3RD STAGE,IN FRONT OF ANNAPURNESHWARI CHOULTRY"}, {"busstop": "Janatha Bazar,BANASHANKARI 3RD STAGE,IN FRONT OF SHIVA SHANKARA SABHANGANA"}, {"busstop": "Jn of Hosakerehalli Cross,BANASHANKARI 3RD STAGE,IN FRONT OF N.C.E.R.T."}, {"busstop": "PES College"}, {"busstop": "Veerabhadranagar,Outer Ring Road"}, {"busstop": "Nayandahalli Cross,PANTHARAPALYA,BESIDE KALYANI MOTORS"}, {"busstop": "Nayandahalli"}, {"busstop": "BWSSB Quarters"}, {"busstop": "Rajarajeshwarinagara Gate"}, {"busstop": "Bangalore Univercity Gate Mysore Road"}, {"busstop": "Jayaram Das Factory"}, {"busstop": "RV College"}, {"busstop": "Dubasi palya cross,Opp to Car godown"}, {"busstop": "Mylasandra Cross"}, {"busstop": "Kengeri TTMC"}, {"busstop": "Kengeri Police Station"}, {"busstop": "Ganesha Temple"}, {"busstop": "Jn of Kommaghatta Road"}, {"busstop": "Railway Station Kengeri"}, {"busstop": "Kengeri Satalite Town Society"}, {"busstop": "Hoysala Circle Kengeri Satellite Town,KENGERI UPANAGARA"}, {"busstop": "Church,KENGERI UPANAGARA"}, {"busstop": "Shirke KHB Quarters"}, {"busstop": "Nagadevanahalli RR Temple,NAGADEVANAHALLI,BESIDE S.L.V.GLASS & PLY WOODS"}, {"busstop": "Kenchanapura Cross,NAGADEVANAHALLI,BESIDE H.P.PETROL BUNK"}, {"busstop": "Mariyappana Palya,MARIYAPPANA PALYA,BESIDE DODDAMMA TEMPLE"}, {"busstop": "PVP Shool,JNANAGANGA NAGARA,OPPOSITE OF P.V.P.SCHOOL"}, {"busstop": "University Quarters,JNANAJYOTHI NAGARA,BESIDE SRI VENKATESHWARA CHOULTRY"}, {"busstop": "Mallathahalli,MALLATHAHALLI,BESIDE BHAGAVAN BUDDA HOMEOPATHIC MEDICAL COLLEGE"}, {"busstop": "Kengunte,KENGUNTE, MALLATHAHALLI,BESIDE KANYAKUMARI HIGH SCHOOL"}, {"busstop": "Ambedkar College,KENGUNTE, MALLATHAHALLI,OPPOSITE OF AMBEDKAR COLLEGE"}, {"busstop": "Deepa Complex,PAPAREDDY PALYA,BESIDE DEEPA COMPLEX"}, {"busstop": "Papareddy Palya,PAPAREDDY PALYA,BESIDE SHARADA TIMBERS"}, {"busstop": "Aladamara Papareddy palya,NAGARABHAVI 2ND STAGE,BESIDE ALADAMARA"}, {"busstop": "Nagarabhavi BDA Complex,NAGARABHAVI 2ND STAGE,BESIDE ADESHWAR ELECTRO WORLD"}, {"busstop": "Vokkaligara School,SRIGANDHA KAVALU,BESIDE VOKKALIGARA SANGHA SCHOOL, SRIGANDHA KAVALU"}, {"busstop": "Kottige Palya Magadi Road"}, {"busstop": "Jn of Magadi Road,BEGGARS COLONY,IN FRONT OF BEGGARS COLONY AREA & GROUND"}, {"busstop": "Lourdhubhai Kalyana mantapa,PREMA NAGARA,IN FRONT OF KANVA WINES"}, {"busstop": "Laggere Arch,LAGGERE,NEAR SAI BABA TEMPLE"}, {"busstop": "Laggere Bridge,LAGGERE,BESIDE MATHRU NURSING HOME"}, {"busstop": "Muneshwaranagara Nandini Layout,NANDINI LAYOUT,BESIDE NANDINI LAYOUT SLUM QUARTERS"}, {"busstop": "Rajkumar Samadhi,2ND BLOCK, NANDINI LAYOUT,OPPOSITE OF RAJKUMAR SAMADHI"}, {"busstop": "Kanteerava Studio,INDUSTRIAL SUB-URBAN YESHAWANTHA PARK - 3RD STAGE,IN FRONT OF RADHAKRISHNA MANDIRA"}, {"busstop": "Foreman Training Insititue,INDUSTRIAL SUB-URBAN YESHAWANTHA PARK - 3RD STAGE,IN FRONT OF MODERN BREAD FACTORY"}, {"busstop": "Reliance Petrol Bunk Guragunte palya,INDUSTRIAL SUB-URBAN YESHAWANTHA PARK - 3RD STAGE,IN FRONT OF RELIANCE PETROL BUNK"}, {"busstop": "Jn of Tumkur Road,GORGUNTEPALYA,BESIDE OPEN AREA"}, {"busstop": "Alisda,JALAHALLI,BESIDE MILITARY GATE"}, {"busstop": "Jalahalli Village,JALAHALLI,BESIDE BAKERY"}, {"busstop": "Bakery,JALAHALLI,BESIDE APOLLO PHARMACY"}, {"busstop": "Muthyalangra,JALAHALLI,BESIDE BAJERY"}, {"busstop": "MES Road BEL Circle,JALAHALLI,BESIDE OPEN AREA"}, {"busstop": "Kuvempu Circle,JALAHALLI,BESIDE OPEN AREA"}, {"busstop": "Devi Nagara,LOTTEGOLLAHALLI,BESIDE CHOWDESHWARI TEMPLE"}, {"busstop": "Bhadrappa Layout,BHADRAPPA LAYOUT,BESIDE MEDICAL STORE"}, {"busstop": "Hebbala,HEBBALA,BESIDE LAKE"}]
  },
  {
    "route_no": "501C",
    "distance": "24 KM",
    "origin": "Hebbal",
    "destination": "Kengeri TTMC",
    "departure_from_origin": "05:00,  05:15,  05:20,  05:30,  05:55,  06:00,  06:30,  06:45,  07:15,  07:40,  07:45,  08:05,  08:10,  08:15,  08:20,  08:30,  08:50,  09:40,  09:45,  09:50,  10:15,  10:45,  10:55,  11:20,  11:25,  11:55,  13:00,  13:25,  13:30,  13:50,  14:00,  14:15,  14:50,  14:55,  15:30,  15:40,  15:50,  16:00,  16:20,  17:15,  17:30,  17:35,  17:55,  18:15,  18:25,  18:35,  18:40,  18:55,  19:15,  20:30,  20:50,  21:00,  21:10,  21:55",
    "arrival_at_origin": "06:25, 06:40, 07:10, 07:35, 07:40, 08:00, 08:05, 08:15, 08:25, 09:10, 09:40, 09:45, 10:10, 10:15, 10:25, 10:35, 10:50, 10:55, 11:15, 11:25, 12:15, 13:20, 13:30, 13:55, 14:10, 14:25, 15:25, 15:35, 15:55, 16:15, 16:30, 16:40, 16:45, 16:50, 17:00, 17:10, 17:25, 17:30, 18:10, 18:20, 18:30, 18:35, 18:50, 19:10, 20:00, 20:10, 20:20, 20:30, 20:40, 21:15, 21:30, 21:45, 21:50, 22:10, 22:15, 23:15, 23:20",
    "departure_from_destination": "05:05, 05:35, 06:00, 06:05, 06:25, 06:35, 06:40, 07:00, 07:05, 07:15, 07:55, 08:20, 08:30, 08:55, 09:00, 09:05, 09:25, 09:35, 09:45, 09:55, 10:10, 11:00, 12:05, 12:20, 12:40, 13:00, 13:15, 14:15, 14:25, 14:45, 15:05, 15:10, 15:20, 15:25, 15:35, 15:45, 15:50, 16:10, 16:15, 17:00, 17:10, 17:15, 17:20, 17:40, 18:00, 18:40, 18:55, 19:10, 19:15, 19:30, 20:05, 20:20, 20:30, 20:35, 21:00, 21:55, 22:20",
    "arrival_at_destination": "06:00,  06:20,  06:30,  06:35,  06:55,  07:00,  07:10,  07:50,  08:25,  08:55,  09:20,  09:25,  09:30,  09:35,  09:40,  10:05,  10:55,  11:10,  11:20,  12:00,  12:10,  12:15,  12:25,  12:35,  13:10,  14:10,  14:40,  15:00,  15:15,  15:20,  15:30,  16:05,  16:10,  16:40,  16:50,  17:10,  17:30,  18:35,  18:45,  18:50,  19:05,  19:25,  19:35,  19:50,  20:00,  20:05,  20:25,  20:30,  21:50,  22:00,  22:10,  22:15,  22:20,  23:10",
    "map_json_content": [{"busstop": "Hebbal,HEBBALA,BESIDE PITTY SHOP"}, {"busstop": "Bhadrappa Layout,BHADRAPPA LAYOUT,BESIDE OPEN AREA"}, {"busstop": "Devi Nagara,LOTTEGOLLAHALLI,BESIDE OPEN AREA"}, {"busstop": "Kuvempu Circle,JALAHALLI,BESIDE A.G.N.ELECTRICALS"}, {"busstop": "BEL Circle,JALAHALLI,BESIDE INDANE MOHAN GAS SERVICE"}, {"busstop": "Muthyalanagara,JALAHALLI,BESIDE KIRAN SUPER BAZAAR"}, {"busstop": "Bakery,JALAHALLI,BESIDE KRISHNA BAKERY"}, {"busstop": "Jalahalli Village,JALAHALLI,BESIDE OPEN AREA"}, {"busstop": "Alisda,JALAHALLI,BESIDE MILITARY GATE"}, {"busstop": "Goragunte Palya,GORGUNTEPALYA,BESIDE SHIVA TEMPLE"}, {"busstop": "Reliance Petrol Bunk Guragunte palya,GORAGUNTEPALYA,OPPOSITE OF RELIANCE PETROL BUNK"}, {"busstop": "Foreman Training Insititue,GORAGUNTEPALYA,OPPOSITE OF MODERN BREAD FACTORY"}, {"busstop": "Kanteerava Studio,GORAGUNTEPALYA,BESIDE PETROL BUNK"}, {"busstop": "Rajkumar Samadhi"}, {"busstop": "Muneshwaranagara Nandini Layout,NANDINI LAYOUT,IN FRONT OF RANGANATHA SWAMY KABBINA MANDI"}, {"busstop": "Laggere Bridge,NARASHIMA SWAMY LAYOUT, LAGGERE,IN FRONT OF KADAMBA BAR AND RESTAURANT"}, {"busstop": "Laggere Arch,KEMPE GOWDA LAYOUT,IN FRONT OF ANGALA PARAMESHWARI TEMPLE ARCH"}, {"busstop": "Lourdhubhai Kalyana mantapa,PREMA NAGARA,IN FRONT OF BENAKA BAR & RESTAURANT"}, {"busstop": "Summanahalli Magadi Road,SUMANAHALLI,UNDER THE FLYOVER"}, {"busstop": "Kottige Palya Magadi Road"}, {"busstop": "Vokkaligara School,KOTTIGEPALYA,OPPOSITE OKKALIGARASANGA SCHOOL, SRIGANDHA KAVALU"}, {"busstop": "Nagarabhavi BDA Complex,NAGARABHAVI 2ND STAGE,BESIDE BDA COMPLEX NAGARABHAVI"}, {"busstop": "Aladamara Papareddy palya,NAGARABHAVI 2ND STAGE,BESIDE ALANKAR TILES & SANITARY SHOP"}, {"busstop": "Papareddy Palya,PAPAREDDY PALYA,OPPOSITE OF SHARADA TIMBERS"}, {"busstop": "Deepa Complex,ITI LAYOUT PAPAREDDY PALYA,OPPOSITE OF PETROL BUNK"}, {"busstop": "Kengunte Ambedkar College,KENGUNTE, MALLATHAHALLI,BESIDE AMBEDKAR COLLEGE"}, {"busstop": "Mallathahalli Cross,MALLATHAHALLI,OPPOSITE OF BHAGAVAN BUDDA HOMEOPATHIC MEDICAL COLLEGE"}, {"busstop": "University Quarters,JNANABHARATHI,BESIDE UNIVERSITY QUARTERS"}, {"busstop": "PVP Shool,JNANAGANGA NAGARA,BESIDE P.V.P.SCHOOL"}, {"busstop": "Mariyappana Palya,MARIYAPPANA PALYA,OPPOSITE OF DODDAMMA TEMPLE"}, {"busstop": "Kenchanapura Cross,NAGADEVANAHALLI,OPPOSITE OF H.P.PETROL BUNK"}, {"busstop": "Nagadevanahalli RR Temple,NAGADEVANAHALLI,BESIDE SRI KRUPA EDUCATION CENTER & SS TILES SANITARY WARE"}, {"busstop": "Shirke KHB Quarters"}, {"busstop": "Church,KENGERI UPANAGARA"}, {"busstop": "Hoysala Circle Kengeri Satellite Town,KENGERI UPANAGARA"}, {"busstop": "Kengeri Satalite Town Society"}, {"busstop": "Railway Station Kengeri"}, {"busstop": "Jn of Kommaghatta Road"}, {"busstop": "Ganesha Temple"}, {"busstop": "Kengeri TTMC"}]
  },
  {
    "route_no": "501F",
    "distance": "16.1 KM",
    "origin": "Kottige Palya Magadi Road",
    "destination": "Kottige Palya Magadi Road",
    "departure_from_origin": "06:35,  06:55,  07:40,  07:50,  08:45,  09:40,  09:50,  11:05,  11:20,  12:00,  12:25,  12:55,  13:55,  14:20,  14:55,  15:25,  15:55,  16:55,  17:20,  18:00,  18:20,  19:05,  19:20,  20:10,  20:20",
    "arrival_at_origin": "07:35, 07:45, 08:40, 09:35, 09:45, 10:35, 10:50, 11:55, 12:20, 12:50, 13:25, 13:45, 14:50, 15:20, 15:50, 16:25, 16:50, 17:55, 18:15, 19:00, 19:15, 20:05, 20:15, 21:10, 21:15",
    "departure_from_destination": "06:35, 06:55, 07:40, 07:50, 08:45, 09:40, 09:50, 11:05, 11:20, 12:00, 12:25, 12:55, 13:55, 14:20, 14:55, 15:25, 15:55, 16:55, 17:20, 18:00, 18:20, 19:05, 19:20, 20:10, 20:20",
    "arrival_at_destination": "07:35,  07:45,  08:40,  09:35,  09:45,  10:35,  10:50,  11:55,  12:20,  12:50,  13:25,  13:45,  14:50,  15:20,  15:50,  16:25,  16:50,  17:55,  18:15,  19:00,  19:15,  20:05,  20:15,  21:10,  21:15",
    "map_json_content": [{"busstop": "Kottige Palya Magadi Road"}, {"busstop": "Sunkadakatte"}, {"busstop": "Hoysala Nagara Sunkadakatte"}, {"busstop": "Vigneshwara Nagara"}, {"busstop": "Neelagiri Thopu,SUNKADA KATTE,IN FRONT OF S.S.K.CHOULTRY"}, {"busstop": "Hegganahalli Cross,HEGGANA HALLI,OPPOSITE OF AMBIKA BAKERY & SWEETS"}, {"busstop": "Hegganahalli,HEGGANA HALLI,OPPOSITE OF HODAY BADRIYA"}, {"busstop": "Dairy Hegganahalli,HEGGANA HALLI,IN FRONT OF I.I.F.L.GOLD LOAN"}, {"busstop": "Peenya 2nd stage,PEENYA 2ND STAGE,IN FRONT OF M.P.P.TEHNOLOGIES PVT LTD"}, {"busstop": "Rajagopalanagar Rajni Farms,PEENYA INDUSTRIAL AREA 2ND STAGE,IN FRONT OF MANJUNATHA REFRESHMENT"}, {"busstop": "Peenya 14th Cross,PEENYA INDUSTRIAL AREA 2ND STAGE,OPPOSITE OF SISTEMS MANUFACTURING PVT LTD"}, {"busstop": "Brundavana Peenya 2nd Stage,PEENYA INDUSTRIAL AREA 2ND STAGE,IN FRONT OF NEW TIMBER INDUSTRY"}, {"busstop": "NTTF,N.T.T.F.CROSS,IN FRONT OF NEW TIMBER INDUSTRY"}, {"busstop": "Rolling Mill,PEENYA INDUSTRIAL AREA,BESIDE ARVIND MOTORS"}, {"busstop": "TVS Cross ,PEENYA INDUSTRIAL AREA,IN FRONT OF MALLIPORE LIMITED"}, {"busstop": "System Jalahalli Cross,PEENYA INDUSTRIAL AREA,IN FRONT OF SISTEMS MANUFACTURING PVT LTD"}, {"busstop": "Jalahalli Cross"}, {"busstop": "Peenya 1st stage"}, {"busstop": "S R S Jalahalli Cross"}, {"busstop": "CMTI Goragunte Palya"}, {"busstop": "Reliance Petrol Bunk Guragunte palya,GORAGUNTEPALYA,OPPOSITE OF RELIANCE PETROL BUNK"}, {"busstop": "Foreman Training Insititue,GORAGUNTEPALYA,OPPOSITE OF MODERN BREAD FACTORY"}, {"busstop": "Kanteerava Studio,GORAGUNTEPALYA,BESIDE PETROL BUNK"}, {"busstop": "Rajkumar Samadhi,RAMAKRISHNA NAGARA, NANDINI LAYOUT,IN FRONT OF RAJKUMAR SAMADHI"}, {"busstop": "Muneshwaranagara Nandini Layout,NANDINI LAYOUT,IN FRONT OF RANGANATHA SWAMY KABBINA MANDI"}, {"busstop": "Laggere Bridge,NARASHIMA SWAMY LAYOUT, LAGGERE,IN FRONT OF KADAMBA BAR AND RESTAURANT"}, {"busstop": "Laggere Arch,KEMPE GOWDA LAYOUT,IN FRONT OF ANGALA PARAMESHWARI TEMPLE ARCH"}, {"busstop": "Lourdhubhai Kalyana mantapa,PREMA NAGARA,IN FRONT OF BENAKA BAR & RESTAURANT"}, {"busstop": "Summanahalli Magadi Road,SUMANAHALLI,UNDER THE FLYOVER"}, {"busstop": "Kottige Palya Magadi Road"}]
  },
  {
    "route_no": "501GA",
    "distance": "22.5 KM",
    "origin": "Kengeri TTMC",
    "destination": "Agara",
    "departure_from_origin": "05:45,  06:40,  06:55,  07:20,  07:45,  08:15,  08:40,  09:05,  09:20,  09:35,  10:00,  10:25,  14:10,  14:50,  15:15,  15:45,  16:10,  16:35,  17:05,  17:50,  18:25,  18:50,  19:15,  19:45,  20:30,  21:05,  21:30",
    "arrival_at_origin": "06:50, 07:15, 08:10, 08:35, 09:00, 09:15, 09:30, 09:55, 10:20, 10:50, 11:40, 12:05, 12:20, 16:05, 16:35, 17:20, 17:25, 17:50, 18:20, 18:45, 19:10, 19:40, 20:25, 21:00, 21:25, 22:10, 23:15",
    "departure_from_destination": "05:40, 06:05, 07:00, 07:20, 07:45, 08:00, 08:15, 08:40, 09:05, 09:35, 10:25, 10:50, 11:05, 14:50, 15:20, 16:00, 16:10, 16:35, 17:05, 17:30, 17:55, 18:25, 19:10, 19:45, 20:10, 21:05, 22:15",
    "arrival_at_destination": "06:55,  07:55,  08:10,  08:35,  09:00,  09:30,  09:55,  10:20,  10:35,  10:50,  11:15,  11:40,  15:15,  16:05,  16:30,  17:00,  17:25,  17:50,  18:20,  19:05,  19:40,  20:05,  20:30,  21:00,  21:45,  22:10,  22:35",
    "map_json_content": [{"busstop": "Kengeri TTMC"}, {"busstop": "Agara,AGARA,OPPOSITE OF ANJANEYA TEMPLE"}]
  },
  {
    "route_no": "501KS",
    "distance": "10.5 KM",
    "origin": "Kengeri TTMC",
    "destination": "Srinagara",
    "departure_from_origin": "05:30,  06:00,  06:50,  07:20,  08:10,  08:40,  09:05,  09:55,  10:25,  10:50,  11:15,  12:10,  13:30,  14:50,  15:15,  15:45,  16:10,  17:00,  17:30,  17:55,  18:20,  18:50,  19:40,  20:10,  21:00,  21:55",
    "arrival_at_origin": "05:55, 06:45, 07:15, 08:05, 08:35, 09:00, 09:25, 09:55, 10:20, 11:10, 12:05, 13:25, 14:45, 15:10, 15:40, 16:05, 16:30, 17:00, 17:25, 18:15, 18:45, 19:35, 20:05, 20:55, 21:25, 22:40",
    "departure_from_destination": "05:25, 06:10, 06:40, 07:30, 08:00, 08:25, 08:50, 09:20, 09:45, 10:35, 11:30, 12:50, 14:10, 14:35, 15:05, 15:30, 15:55, 16:25, 16:50, 17:40, 18:10, 19:00, 19:30, 20:20, 20:50, 22:05",
    "arrival_at_destination": "06:05,  06:35,  07:25,  07:55,  08:45,  09:15,  09:40,  10:30,  11:00,  11:25,  11:50,  12:45,  14:05,  15:25,  15:50,  16:20,  16:45,  17:35,  18:05,  18:30,  18:55,  19:25,  20:15,  20:45,  21:35,  22:30",
    "map_json_content": [{"busstop": "Kengeri TTMC"}, {"busstop": "Mylasandra Gate"}, {"busstop": "Dubasi Palya Cross"}, {"busstop": "RV College"}, {"busstop": "Jayaram Das Factory"}, {"busstop": "Bangalore University Gate Mysore Road"}, {"busstop": "Rajarajeshwarinagara Gate"}, {"busstop": "BWSSB Quarters"}, {"busstop": "Nayandahalli"}, {"busstop": "Jn of Nayandahalli"}, {"busstop": "Veerabhadranagar,Outer Ring Road"}, {"busstop": "Avalahalli New BDA Layout,BDA Layout"}, {"busstop": "Avalahalli BDA Park,AVALAHALLI BDA,BESIDE BESCOM"}, {"busstop": "Muneshwara Block,MUNESHWARA BLOCK,BESIDE SOHAN ENTERPRISES"}, {"busstop": "Nagendra Block,BANASHANKARI 3RD STAGE NAGENDRA BLOCK"}, {"busstop": "Srinagara,Hanuman temple"}]
  },
  {
    "route_no": "501L",
    "distance": "26 KM",
    "origin": "Kottige Palya Magadi Road",
    "destination": "KR Puram Railway Station",
    "departure_from_origin": "04:30,  20:05,  22:55",
    "arrival_at_origin": "05:40, 20:35, 22:50",
    "departure_from_destination": "04:30, 19:15, 21:30",
    "arrival_at_destination": "00:15,  05:50,  21:25",
    "map_json_content": [{"busstop": "Kottige Palya Magadi Road"}, {"busstop": "Sumana Halli,SUMANAHALLI,OPPOSITE OF SUMANAHALLI DEPOT 31"}, {"busstop": "Lourdhubhai Kalyana mantapa,PREMA NAGARA,IN FRONT OF KANVA WINES"}, {"busstop": "Laggere Arch,LAGGERE,NEAR SAI BABA TEMPLE"}, {"busstop": "Laggere Bridge,LAGGERE,BESIDE MATHRU NURSING HOME"}, {"busstop": "Muneshwaranagara Nandini Layout,NANDINI LAYOUT,BESIDE NANDINI LAYOUT SLUM QUARTERS"}, {"busstop": "Rajkumar Samadhi,2ND BLOCK, NANDINI LAYOUT,OPPOSITE OF RAJKUMAR SAMADHI"}, {"busstop": "Kanteerava Studio,INDUSTRIAL SUB-URBAN YESHAWANTHA PARK - 3RD STAGE,IN FRONT OF RADHAKRISHNA MANDIRA"}, {"busstop": "Foreman Training Insititue,INDUSTRIAL SUB-URBAN YESHAWANTHA PARK - 3RD STAGE,IN FRONT OF MODERN BREAD FACTORY"}, {"busstop": "Reliance Petrol Bunk Guragunte palya,INDUSTRIAL SUB-URBAN YESHAWANTHA PARK - 3RD STAGE,IN FRONT OF RELIANCE PETROL BUNK"}, {"busstop": "Jn of Tumkur Road,GORGUNTEPALYA,BESIDE OPEN AREA"}, {"busstop": "Alisda,JALAHALLI,BESIDE MILITARY GATE"}, {"busstop": "Jalahalli Village,JALAHALLI,BESIDE BAKERY"}, {"busstop": "Bakery,JALAHALLI,BESIDE APOLLO PHARMACY"}, {"busstop": "Muthyalangra,JALAHALLI,BESIDE BAJERY"}, {"busstop": "MES Road BEL Circle"}, {"busstop": "Kuvempu Circle"}, {"busstop": "Devi Nagara,LOTTEGOLLAHALLI,BESIDE CHOWDESHWARI TEMPLE"}, {"busstop": "Bhadrappa Layout,BHADRAPPA LAYOUT,BESIDE MEDICAL STORE"}, {"busstop": "Hebbala Bridge,HEBBALA,OPPOSITE OF GAYATHRI LAKE FRONT"}, {"busstop": "Kempapura,HEBBALA,IN FRONT OF BHAVANI ENTERPRISES"}, {"busstop": "Veeranna Palya,VEERANNAPALYA, NAGAVARA,OPPOSITE OF INDIAN OIL PETROL BUNK"}, {"busstop": "Manyatha Tech Park,NAGAVARA,IN FRONT OF IBM MANYATA EMBASSY BUSINESS PARK"}, {"busstop": "Nagavara Junction,NAGAVARA,IN FRONT OF HOTEL REDDYS RESTAURANT, J.B.J.COMPLEX"}, {"busstop": "HBR Layout"}, {"busstop": "Hennuru Junction,HENNURU,OPPOSITE OF FLORENCE FRORIDA GROUP OF INSTITUTIONS"}, {"busstop": "Kalyananagara Bus Stand,KALYANA NAGARA,OPPOSITE OF PANASONIC SHOW ROOM"}, {"busstop": "80 Feet Road Kalyan Nagara,KALYANA NAGARA,IN FRONT OF CROMA ELECTRONICS MEGASTORE"}, {"busstop": "Babusab Palya,KALYANA NAGARA,IN FRONT OF HOTEL LITTLE IMPERIAL"}, {"busstop": "HORAMAVU PETROL BUNK,BANASAWADI,BESIDE UDUPI SAGAR HOTEL"}, {"busstop": "Vijaya Bank Colony,DODDA BANASAWADI,IN FRONT OF CACHE FURNITURE LIMITED, S.J.C.COMPLEX"}, {"busstop": "Jn OF B CHANNASANDRA,CHANNASANDRA, RAMAMURTHY NAGARA,OPPOSITE OF ANDREWS WOOD CRAFTS"}, {"busstop": "Kasturi Nagara,KASTURI NAGARA,OPPOSITE OF SRISHANT TOWER"}, {"busstop": "Tin Factory,DOORAVANI NAGARA,OPPOSITE OF SUDHIR WEIGH BRIDGE"}, {"busstop": "KR Puram Railway Station,KR PURAM,BACK SIDE OF RAILWAY STATION"}]
  },
  {
    "route_no": "348L",
    "distance": "17 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Hosa Palya",
    "departure_from_origin": "09:00,  10:55,  13:15,  15:10",
    "arrival_at_origin": "08:55, 10:55, 13:10, 15:05, 17:30",
    "departure_from_destination": "08:00, 10:00, 12:20, 14:10, 16:35",
    "arrival_at_destination": "09:55,  11:50,  14:10,  16:05",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Hosa Palya,Kudlu Main Road"}]
  },
  {
    "route_no": "349",
    "distance": "24.1 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Huskur",
    "departure_from_origin": "06:35,  09:05,  13:40,  16:10",
    "arrival_at_origin": "09:00, 11:55, 16:05, 19:00",
    "departure_from_destination": "07:50, 10:45, 14:55, 17:50",
    "arrival_at_destination": "07:45,  10:15,  14:50,  17:20",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Singhena Agrahara Cross"}, {"busstop": "Depot 38,CHIKKA NAGAMANGALA,IN FRONT OF B.M.T.C. DEPOTE-38"}, {"busstop": "Huskur,SARJAPURA,OPPOSITE OF SRI MADDORAMMA DEVI TEMPLE"}]
  },
  {
    "route_no": "349A",
    "distance": "33.5 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Handenahalli Gate",
    "departure_from_origin": "06:05,  08:50,  14:05,  20:50",
    "arrival_at_origin": "06:05, 08:45, 20:10",
    "departure_from_destination": "04:45, 07:25, 18:45",
    "arrival_at_destination": "07:20,  10:10,  15:35,  22:10",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Furit Market,ELECTRONIC CITY POST,IN FRONT OF FRUIT MARKET GATE"}, {"busstop": "Singhena agrahara,ANEKAL TALUK,OPPOSITE OF MILK DAIRY"}, {"busstop": "Muttanallur Cross,MUTHANALLURU,OPPOSITE OF REDDY MILITARY KATTE"}, {"busstop": "Sammenahalli,SARJAPURA, HOBLI,OPPOSITE OF MILK PRODUCT CO-OPERATIVE SOCIETY"}, {"busstop": "Solusapura,SARJAPURA, HOBLI,OPPOSITE OF GOVT. PRIMAY SCHOOL & ASHWATHA KATTE"}, {"busstop": "Handenahalli Gate,ANEKAL TALUKU,OPPOSITE OF SRI KRISHNA TEMPLE"}]
  },
  {
    "route_no": "349B",
    "distance": "25.1 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Gattahalli",
    "departure_from_origin": "06:10,  08:50,  13:25,  16:40",
    "arrival_at_origin": "06:05, 08:45, 16:10, 19:15",
    "departure_from_destination": "04:50, 07:30, 14:55, 18:00",
    "arrival_at_destination": "07:25,  10:05,  14:50,  17:55",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Singhena Agrahara Cross"}, {"busstop": "Depot 38,CHIKKA NAGAMANGALA,IN FRONT OF B.M.T.C. DEPOTE-38"}, {"busstop": "Huskur,SARJAPURA,OPPOSITE OF SRI MADDORAMMA DEVI TEMPLE"}, {"busstop": "Gattahalli,HUSKURU POST,OPPOSITE OF ASHWATHA KATTE"}]
  },
  {
    "route_no": "349C",
    "distance": "27 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Huskur",
    "departure_from_origin": "07:10,  10:30,  16:10",
    "arrival_at_origin": "07:05, 10:25, 21:40",
    "departure_from_destination": "05:50, 08:55, 20:20",
    "arrival_at_destination": "08:35,  12:00,  17:30",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation"}, {"busstop": "KH Road"}, {"busstop": "Double Road"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Singhena Agrahara Cross"}, {"busstop": "Depot 38,CHIKKA NAGAMANGALA,IN FRONT OF B.M.T.C. DEPOTE-38"}, {"busstop": "Huskur,SARJAPURA,IN FRONT OF SRI MADDORAMMA DEVI TEMPLE"}]
  },
  {
    "route_no": "349D",
    "distance": "25.6 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Huskur",
    "departure_from_origin": "06:15,  09:30,  14:15,  17:20,  20:45",
    "arrival_at_origin": "06:10, 09:00, 14:10, 17:15, 20:00",
    "departure_from_destination": "05:00, 07:30, 12:55, 16:00, 18:45",
    "arrival_at_destination": "07:25,  11:00,  15:30,  18:40,  22:00",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Singhena Agrahara Cross"}, {"busstop": "GOOLIMANGALA,HUSKURU POST, SARJAPURA, HUBLI,NEAR ASHWATHA KATTE & RESIDENTIAL"}, {"busstop": "Huskur,SARJAPURA,OPPOSITE OF SRI MADDORAMMA DEVI TEMPLE"}]
  },
  {
    "route_no": "349E",
    "distance": "25.7 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Chinthala Madiwala",
    "departure_from_origin": "07:05,  10:20,  14:30,  17:35,  20:40",
    "arrival_at_origin": "07:00, 09:50, 17:05, 20:10",
    "departure_from_destination": "05:45, 08:30, 15:50, 18:55",
    "arrival_at_destination": "08:25,  11:40,  15:45,  18:50,  21:50",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle,OPPOSITE OF BANGALORE DAIRY"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Singasandra,ELECTRONIC CITY POST,OPPOSITE OF FRUIT MARKET GATE"}, {"busstop": "Depot 38,CHIKKA NAGAMANGALA,IN FRONT OF B.M.T.C. DEPOTE-38"}, {"busstop": "Huskur,SARJAPURA,OPPOSITE OF SRI MADDORAMMA DEVI TEMPLE"}, {"busstop": "Chinthala Madiwala,HUSKURU POST,NEAR STD BOOTH & RESIDENTIAL"}]
  },
  {
    "route_no": "349F",
    "distance": "30.5 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Chikka Thimmasandra",
    "departure_from_origin": "07:25,  17:10,  21:10",
    "arrival_at_origin": "07:20, 10:35, 21:05",
    "departure_from_destination": "06:00, 08:55, 19:30",
    "arrival_at_destination": "08:50,  18:50,  22:25",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Singhena Agrahara Cross"}, {"busstop": "Depot 38,CHIKKA NAGAMANGALA,IN FRONT OF B.M.T.C. DEPOTE-38"}, {"busstop": "Huskur,SARJAPURA,OPPOSITE OF SRI MADDORAMMA DEVI TEMPLE"}, {"busstop": "Chinthala Madiwala,HUSKURU POST,NEAR STD BOOTH & RESIDENTIAL"}, {"busstop": "KAGGALIPURA,ANEKAL TALUK,OPPOSITE OF GOVERNMENT JUNIOR PRIMARY SCHOOL"}, {"busstop": "GOPASANDRA,SARJAPURAA-HUBLI,BESIDE SRI DODDAMMA DEVI TEMPLE"}, {"busstop": "Chikka Thimmasandra,ANEKAL TALUK,IN FRONT OF ASHWATHA KATTE & MILK PRODUCT CO-OPERATIVE SOCIETY"}]
  },
  {
    "route_no": "349J",
    "distance": "30.1 KM",
    "origin": "Harohalli",
    "destination": "Krishnarajendra Market",
    "departure_from_origin": "05:00,  08:15,  18:40",
    "arrival_at_origin": "07:45, 11:00, 22:00",
    "departure_from_destination": "06:25, 09:40, 20:45",
    "arrival_at_destination": "06:20,  09:35,  20:05",
    "map_json_content": [{"busstop": "Harohalli,HUSKURU POST, SARJAPURA HOBLI,BESIDE GOVT. SCHOOL & RESIDENTIAL AREA"}, {"busstop": "Chokkasandra,HUSKURU POST, SARJAPURA HOBLI,BEHIND THIMMARAYA SWAMI TEMPLE"}, {"busstop": "Avalahalli Huskuru,SARJAPURA, HOBLI,OPPOSITE OF SHRI RENUKA YALLAMMA DEVI TEMPLE"}, {"busstop": "Huskur,SARJAPURA,IN FRONT OF SRI MADDORAMMA DEVI TEMPLE"}, {"busstop": "Laxmi Farm ,CHIKKA NAGAMANGALA,OPPOSITE OF B.M.T.C. DEPOTE-38"}, {"busstop": "Singhena agrahara cross,ELECTRONIC CITY POST,BESIDE FRUIT MARKET"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,OPPOSITE OF THALI RESTAURANT"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Electronic City,ELECTRONIC CITY,BESIDE N.T.T.F. INSTITUTE"}, {"busstop": "Konappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF LAVAKUSHA BULDING"}, {"busstop": "PES College"}, {"busstop": "Hosa Road"}, {"busstop": "Singasandra"}, {"busstop": "Kudlu Gate"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Bommanahalli"}, {"busstop": "Rupena Agrahar"}, {"busstop": "Madiwala Police Station"}, {"busstop": "StJohns Hospital"}, {"busstop": "Jn of Hosur Road,KORAMANGALA,IN FRONT OF STAPLES STATIONARYS EAST LAND CITYDEL"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,OPPOSITE OF CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Nimhans Hospital,IN FRONT OF KIDWAI HOSPITAL"}, {"busstop": "Lakkasandra,LAKKASANDRA,IN FRONT VIGNANA HOSPITAL"}, {"busstop": "Siddapura 7th Cross,SOMESHWARA NAGARA,OPPOSITE OF POSALY INTERNATIONAL"}, {"busstop": "Lalbagh Society,WILSON GARDEN,BESIDE HOPCOMS"}, {"busstop": "Lalbhagh Main Gate,DODDAMAVALLI,BESIDE SATYAMMA DEVI TEMPLE"}, {"busstop": "Town Hall"}, {"busstop": "Krishnarajendra Market,KR MARKET,OPPOSITE TO CHANDRA BHAVAN HOTEL"}]
  },
  {
    "route_no": "349K",
    "distance": "24.9 KM",
    "origin": "Shivajinagar Bus Station",
    "destination": "Huskur",
    "departure_from_origin": "09:40,  14:55,  18:05",
    "arrival_at_origin": "09:35, 14:50, 18:00",
    "departure_from_destination": "08:20, 13:40, 16:45",
    "arrival_at_destination": "10:55,  15:55,  19:20",
    "map_json_content": [{"busstop": "Shivajinagar Bus Station"}, {"busstop": "MG Road "}, {"busstop": "Mayohall"}, {"busstop": "DSouza Circle"}, {"busstop": "Johnson Market"}, {"busstop": "Anepalya"}, {"busstop": "Adugodi"}, {"busstop": "Adugodi Police Quarters"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Singhena Agrahara Cross"}, {"busstop": "Depot 38,CHIKKA NAGAMANGALA,IN FRONT OF B.M.T.C. DEPOTE-38"}, {"busstop": "Huskur,SARJAPURA,OPPOSITE OF SRI MADDORAMMA DEVI TEMPLE"}]
  },
  {
    "route_no": "349M",
    "distance": "26.8 KM",
    "origin": "Krishnarajendra Market",
    "destination": "KAGGALIPURA",
    "departure_from_origin": "16:35",
    "arrival_at_origin": "09:15",
    "departure_from_destination": "08:00",
    "arrival_at_destination": "18:00",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Singhena Agrahara Cross"}, {"busstop": "Depot 38,CHIKKA NAGAMANGALA,IN FRONT OF B.M.T.C. DEPOTE-38"}, {"busstop": "Huskur,SARJAPURA,OPPOSITE OF SRI MADDORAMMA DEVI TEMPLE"}, {"busstop": "Chinthala Madiwala,HUSKURU POST,NEAR STD BOOTH & RESIDENTIAL"}, {"busstop": "KAGGALIPURA,ANEKAL TALUK,OPPOSITE OF GOVERNMENT JUNIOR PRIMARY SCHOOL"}]
  },
  {
    "route_no": "350",
    "distance": "31.8 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Adigondana Halli",
    "departure_from_origin": "06:45,  14:45,  21:15",
    "arrival_at_origin": "06:40, 10:10, 20:45",
    "departure_from_destination": "05:20, 08:45, 19:20",
    "arrival_at_destination": "08:15,  16:10,  22:35",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Hale Chandapura"}, {"busstop": "LAXMISAGARA"}, {"busstop": "Ali Bommasandra,Ali Bommasandra"}, {"busstop": "Adigondana Halli,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF SRI LAKSHMI PROVISION STORE"}]
  },
  {
    "route_no": "350A",
    "distance": "32.13 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Thirupalya",
    "departure_from_origin": "07:55,  13:40,  16:25,  18:45",
    "arrival_at_origin": "07:50, 10:35, 16:20, 18:40",
    "departure_from_destination": "06:45, 09:30, 15:15, 17:35",
    "arrival_at_destination": "09:00,  14:45,  17:30,  19:50",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Thirupalya GOVT HOSPITAL"}, {"busstop": "Thirupalya MUNESHWARA DEVASTHANA"}, {"busstop": "Thirupalya"}]
  },
  {
    "route_no": "350B",
    "distance": "29.9 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Muthanallur",
    "departure_from_origin": "06:05,  09:40,  14:45,  20:30",
    "arrival_at_origin": "06:00, 09:35, 20:00",
    "departure_from_destination": "04:30, 08:05, 18:35",
    "arrival_at_destination": "07:35,  11:10,  16:10,  21:50",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Hale Chandapura"}, {"busstop": "LAXMISAGARA"}, {"busstop": "Ali Bommasandra,Ali Bommasandra"}, {"busstop": "Muthanallur,ANEKAL TALUK,OPPOSITE OF VETERINARY HOSPITAL"}]
  },
  {
    "route_no": "350G",
    "distance": "24.3 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Bommasandra Indl Area",
    "departure_from_origin": "06:20,  09:10,  16:20,  21:25",
    "arrival_at_origin": "06:15, 09:05, 21:20",
    "departure_from_destination": "05:00, 07:45, 20:00",
    "arrival_at_destination": "07:40,  10:25,  17:40,  22:40",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra Indl Area"}]
  },
  {
    "route_no": "350H",
    "distance": "23 KM",
    "origin": "Krishnarajendra Market",
    "destination": "KAMASANDRA",
    "departure_from_origin": "06:45,  09:40,  16:15,  21:35",
    "arrival_at_origin": "06:40, 09:10, 12:05, 16:10, 21:05",
    "departure_from_destination": "05:30, 08:00, 10:55, 15:00, 19:40",
    "arrival_at_destination": "07:55,  10:50,  17:30,  22:45",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "HEBBAGODI KAMMASANDRA CROSS,ELECTRONIC CITY POST,IN FRONT OF SAKTHI BAKERY & SWEETS"}, {"busstop": "KAMASANDRA"}]
  },
  {
    "route_no": "351",
    "distance": "29 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Narayana Ghatta",
    "departure_from_origin": "06:45,  09:35,  14:25,  17:40",
    "arrival_at_origin": "06:15, 09:30, 17:35",
    "departure_from_destination": "05:00, 08:10, 16:15",
    "arrival_at_destination": "08:05,  10:55,  15:45,  19:00",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,ANEKAL TALUK,IN FRONT OF PANCHAYAT COMPLEX & S.K.MEDICAL & GENERAL STORE"}, {"busstop": "Heelalige Cross,ANEKAL TALUK,IN FRONT OF PRIYANKA ENTERPRISES"}, {"busstop": "Ramasagara,ANEKAL TALUK,BESIDE SRI BASAVESHWARA TEMPLE"}, {"busstop": "Narayana Ghatta,ANEKAL TALUK,OPPOSITE OF ASHWATHA KATTE"}]
  },
  {
    "route_no": "351A",
    "distance": "31 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Narayana Ghatta",
    "departure_from_origin": "06:20,  14:45,  21:10",
    "arrival_at_origin": "06:15, 09:45, 20:40",
    "departure_from_destination": "04:50, 08:20, 19:15",
    "arrival_at_destination": "07:45,  16:15,  22:25",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,ANEKAL TALUK,IN FRONT OF PANCHAYAT COMPLEX & S.K.MEDICAL & GENERAL STORE"}, {"busstop": "Heelalige Cross,ANEKAL TALUK,IN FRONT OF PRIYANKA ENTERPRISES"}, {"busstop": "Ramasagara,ANEKAL TALUK,BESIDE SRI BASAVESHWARA TEMPLE"}, {"busstop": "SINGENAHARA"}, {"busstop": "Narayana Ghatta,ANEKAL TALUK,OPPOSITE OF ASHWATHA KATTE"}]
  },
  {
    "route_no": "351C",
    "distance": "28.5 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Ramasagara",
    "departure_from_origin": "09:25,  17:40",
    "arrival_at_origin": "09:20, 17:35",
    "departure_from_destination": "08:00, 16:10",
    "arrival_at_destination": "10:45,  19:05",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,ANEKAL TALUK,IN FRONT OF PANCHAYAT COMPLEX & S.K.MEDICAL & GENERAL STORE"}, {"busstop": "Heelalige Cross,ANEKAL TALUK,IN FRONT OF PRIYANKA ENTERPRISES"}, {"busstop": "Ramasagara,ANEKAL TALUK,BESIDE SRI BASAVESHWARA TEMPLE"}]
  },
  {
    "route_no": "351H",
    "distance": "30.4 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Singena Agrahara",
    "departure_from_origin": "14:30,  17:55,  21:20",
    "arrival_at_origin": "09:50, 17:50, 20:50",
    "departure_from_destination": "08:25, 16:25, 19:25",
    "arrival_at_destination": "15:55,  19:20,  22:40",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Heelalige Cross,ANEKAL TALUK,IN FRONT OF PRIYANKA ENTERPRISES"}, {"busstop": "Ramasagara,ANEKAL TALUK,BESIDE SRI BASAVESHWARA TEMPLE"}, {"busstop": "Singena Agrahara,ANEKAL TALUK,BESIDE MILK DAIRY"}]
  },
  {
    "route_no": "351J",
    "distance": "39 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Handenahalli Gate",
    "departure_from_origin": "06:05,  10:00,  15:05,  19:05",
    "arrival_at_origin": "09:55, 19:00, 22:25",
    "departure_from_destination": "08:15, 17:15, 20:50",
    "arrival_at_destination": "07:45,  11:45,  16:45,  20:45",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,ANEKAL TALUK,IN FRONT OF PANCHAYAT COMPLEX & S.K.MEDICAL & GENERAL STORE"}, {"busstop": "Heelalige Cross,ANEKAL TALUK,IN FRONT OF PRIYANKA ENTERPRISES"}, {"busstop": "Ramasagara,ANEKAL TALUK,BESIDE SRI BASAVESHWARA TEMPLE"}, {"busstop": "Narayana Ghatta,ANEKAL TALUK,OPPOSITE OF ASHWATHA KATTE"}, {"busstop": "Muttanallur Cross,MUTHANALLURU,OPPOSITE OF REDDY MILITARY KATTE"}, {"busstop": "Muttanallur,ANEKAL TALUK,OPPOSITE OF MILK DAIRY"}, {"busstop": "Sammenahalli,SARJAPURA, HOBLI,OPPOSITE OF MILK PRODUCT CO-OPERATIVE SOCIETY"}, {"busstop": "Handenahalli Gate,ANEKAL TALUKU,OPPOSITE OF SRI KRISHNA TEMPLE"}]
  },
  {
    "route_no": "352",
    "distance": "27.8 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Hennagara",
    "departure_from_origin": "06:40,  09:55,  15:05,  21:15",
    "arrival_at_origin": "06:35, 09:50, 15:00, 20:45",
    "departure_from_destination": "05:20, 08:30, 13:45, 19:25",
    "arrival_at_destination": "08:00,  11:15,  16:25,  22:30",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Hennagara Gate,BOMMASANDRA,OPPOSITE OF S.N.DURAI AUTO GARAGE"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Hennagara Gate,BOMMASANDRA,OPPOSITE OF S.N.DURAI AUTO GARAGE"}, {"busstop": "Kittagana halli,BOMMASANDRA POST,OPPOSITE OF REVANN BUILDING & ASHWATA KATTE"}, {"busstop": "Kachamaranahalli,HENNAGARA POST,ANEKAL TALUK,OPPOSITE OF SRI VEERABHADREHWARA PROVISION STORES"}, {"busstop": "H Hosahalli,HENNAGARA POST,ANEKAL TALUK,IN FRONT OF OMKAR LAYOUT ARCH"}, {"busstop": "Hennagara,JIGANI HOBLI, ANEKAL TALUK,IN FRONT OF SRI MANJUNATH GENERAL STORE"}]
  },
  {
    "route_no": "352A",
    "distance": "33.5 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Hennagara",
    "departure_from_origin": "06:15,  13:30,  16:30,  20:00",
    "arrival_at_origin": "06:10, 09:25, 16:25, 19:55",
    "departure_from_destination": "04:45, 08:05, 15:00, 18:25",
    "arrival_at_destination": "07:35,  14:55,  17:55,  21:25",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Kittagana halli,BOMMASANDRA POST,OPPOSITE OF REVANN BUILDING & ASHWATA KATTE"}, {"busstop": "Kachamaranahalli,HENNAGARA POST,ANEKAL TALUK,OPPOSITE OF SRI VEERABHADREHWARA PROVISION STORES"}, {"busstop": "H Hosahalli,HENNAGARA POST,ANEKAL TALUK,IN FRONT OF OMKAR LAYOUT ARCH"}, {"busstop": "Hennagara,JIGANI HOBLI, ANEKAL TALUK,IN FRONT OF SRI MANJUNATH GENERAL STORE"}]
  },
  {
    "route_no": "352E",
    "distance": "28.8 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Mastenahalli",
    "departure_from_origin": "05:35,  08:20,  17:15,  20:30",
    "arrival_at_origin": "05:30, 08:15, 11:15, 17:10, 20:00",
    "departure_from_destination": "04:15, 06:55, 10:00, 15:50, 18:40",
    "arrival_at_destination": "06:50,  09:40,  18:35,  21:50",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Hennagra Gate,BOMMASANDRA,IN FRONT OF S.N.DURAI AUTO GARAGE"}, {"busstop": "Kittagana halli,BOMMASANDRA POST,OPPOSITE OF REVANN BUILDING & ASHWATA KATTE"}, {"busstop": "Kachamaranahalli,HENNAGARA POST,ANEKAL TALUK,OPPOSITE OF SRI VEERABHADREHWARA PROVISION STORES"}, {"busstop": "H Hosahalli,HENNAGARA POST,ANEKAL TALUK,IN FRONT OF OMKAR LAYOUT ARCH"}, {"busstop": "Hennagara,JIGANI HOBLI, ANEKAL TALUK,IN FRONT OF SRI MANJUNATH GENERAL STORE"}, {"busstop": "Mastenahalli,JIGANI HOBLI, ANEKAL TALUK,BESIDE SRI  DHARMARAYA SWAMI TEMPLE"}]
  },
  {
    "route_no": "353",
    "distance": "28.7 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Ramakrishnapura",
    "departure_from_origin": "10:05,  15:35,  20:50",
    "arrival_at_origin": "09:35, 15:30",
    "departure_from_destination": "08:15, 14:15",
    "arrival_at_destination": "11:25,  16:50,  22:15",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Hosa Road"}, {"busstop": "Singasandra"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Igglur,CHANDAPURA POST & ANEKAL TALUK,BEHIND SRI VENUGOPAL SWAMY TEMPLE"}, {"busstop": "Ramakrishnapura"}]
  },
  {
    "route_no": "353A",
    "distance": "30.8 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Rajapura",
    "departure_from_origin": "06:25,  09:40,  14:55,  20:40",
    "arrival_at_origin": "06:20, 09:35, 14:50, 20:10",
    "departure_from_destination": "05:00, 08:15, 13:30, 18:50",
    "arrival_at_destination": "07:45,  11:00,  16:15,  22:00",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "KEB,CHANDAPURA,OPPOSITE OF L.D.B.FUTURE SOLUTION PRIVATE LIMITED"}, {"busstop": "Igglur,CHANDAPURA POST & ANEKAL TALUK,BEHIND SRI VENUGOPAL SWAMY TEMPLE"}, {"busstop": "Ramakrishnapur gate ,ANEKAL TALUK,OPPOSITE OF SRI PRASANNA VENKATESHWARA SWAMY TEMPLE ARCH"}, {"busstop": "Ramakrishnapura,ANEKAL TALUK,NEAR DISTRICT AGRICULTURE TRAINING CENTER"}, {"busstop": "Hinnakki,ANEKAL TALUK,IN FRONT OF HOTEL ANNAPOORNESHWARI"}, {"busstop": "Rajapura,ANEKAL TALUK,OPPOSITE OF GANGOTHRI PROVISION STORE, JAGADISHARADYA"}]
  },
  {
    "route_no": "353B",
    "distance": "12.3 KM",
    "origin": "Huskur",
    "destination": "Jigani",
    "departure_from_origin": "15:05,  18:45",
    "arrival_at_origin": "18:40",
    "departure_from_destination": "18:10",
    "arrival_at_destination": "15:35,  19:25",
    "map_json_content": [{"busstop": "Huskur,SARJAPURA,IN FRONT OF SRI MADDORAMMA DEVI TEMPLE"}, {"busstop": "Laxmi Farm ,CHIKKA NAGAMANGALA,OPPOSITE OF B.M.T.C. DEPOTE-38"}, {"busstop": "Furit Market,ELECTRONIC CITY POST,IN FRONT OF FRUIT MARKET GATE"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,OPPOSITE OF THALI RESTAURANT"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Depot 32,CHANDAPURA POST & ANEKAL TALUK,BESIDE B.M.T.C.DEPARTMENT 32"}, {"busstop": "Igglur,CHANDAPURA POST & ANEKAL TALUK,BEHIND SRI VENUGOPAL SWAMY TEMPLE"}, {"busstop": "Ramakrishnapur gate ,ANEKAL TALUK,IN FRONT OF SRI VENKATESHWARA TEMPLE ARCH"}, {"busstop": "Ramakrishnapura,ANEKAL TALUK,NEAR DISTRICT AGRICULTURE TRAINING CENTER"}, {"busstop": "Hinnakki,ANEKAL TALUK,IN FRONT OF HOTEL ANNAPOORNESHWARI"}, {"busstop": "Rajapura,ANEKAL TALUK,OPPOSITE OF GANGOTHRI PROVISION STORE, JAGADISHARADYA"}, {"busstop": "Seethanayakanahalli"}, {"busstop": "Haragadde,Open area"}, {"busstop": "Madapatna"}, {"busstop": "Jigani APC Circle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "Jigani"}]
  },
  {
    "route_no": "353C",
    "distance": "38 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Jigani Bus Stand",
    "departure_from_origin": "08:00,  11:40,  15:20",
    "arrival_at_origin": "11:35, 15:15",
    "departure_from_destination": "09:50, 13:30",
    "arrival_at_destination": "09:20,  13:00,  17:05",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "KEB,CHANDAPURA,OPPOSITE OF L.D.B.FUTURE SOLUTION PRIVATE LIMITED"}, {"busstop": "Igglur,CHANDAPURA POST & ANEKAL TALUK,BEHIND SRI VENUGOPAL SWAMY TEMPLE"}, {"busstop": "Ramakrishnapur gate ,ANEKAL TALUK,IN FRONT OF SRI VENKATESHWARA TEMPLE ARCH"}, {"busstop": "Ramakrishnapura,ANEKAL TALUK,NEAR DISTRICT AGRICULTURE TRAINING CENTER"}, {"busstop": "Hinnakki,ANEKAL TALUK,IN FRONT OF HOTEL ANNAPOORNESHWARI"}, {"busstop": "Rajapura,ANEKAL TALUK,OPPOSITE OF GANGOTHRI PROVISION STORE, JAGADISHARADYA"}, {"busstop": "Seethanayakanahalli"}, {"busstop": "Haragadde,Open area"}, {"busstop": "Madapatna"}, {"busstop": "Jigani Bus Stand,JIGANI HOBLI, ANEKAL TALUK,IN FRONT OF HARSHA SAGAR HOTEL"}]
  },
  {
    "route_no": "353E",
    "distance": "29.8 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Hinnakki",
    "departure_from_origin": "07:05,  09:55,  14:45,  20:35",
    "arrival_at_origin": "07:00, 09:50, 14:40, 20:05",
    "departure_from_destination": "05:45, 08:30, 13:20, 18:50",
    "arrival_at_destination": "08:25,  11:15,  16:00,  21:50",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,ANEKAL TALUK,IN FRONT OF SWAMY VIVEKANANDA HIGH SCHOOL"}, {"busstop": "Igglur,CHANDAPURA POST & ANEKAL TALUK,BEHIND SRI VENUGOPAL SWAMY TEMPLE"}, {"busstop": "Ramakrishnapur gate ,ANEKAL TALUK,OPPOSITE OF SRI PRASANNA VENKATESHWARA SWAMY TEMPLE ARCH"}, {"busstop": "Ramakrishnapura,ANEKAL TALUK,NEAR DISTRICT AGRICULTURE TRAINING CENTER"}, {"busstop": "Hinnakki,ANEKAL TALUK,IN FRONT OF HOTEL ANNAPOORNESHWARI"}]
  },
  {
    "route_no": "354",
    "distance": "34 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Shettihalli",
    "departure_from_origin": "06:30,  14:30,  20:35",
    "arrival_at_origin": "06:25, 20:30",
    "departure_from_destination": "05:00, 19:05",
    "arrival_at_destination": "07:55,  15:55,  22:00",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,ANEKAL TALUK,IN FRONT OF SWAMY VIVEKANANDA HIGH SCHOOL"}, {"busstop": "Igglur,CHANDAPURA POST & ANEKAL TALUK,BEHIND SRI VENUGOPAL SWAMY TEMPLE"}, {"busstop": "Marsoor gate ,MARASOOR GATE-ANEKAL TALUK,NEAR BHARAT PETROL BUNK"}, {"busstop": "MARSUR"}, {"busstop": "Shettihalli,ANEKAL TALUK,IN FRONT OF MILK PRODUCT CO-OPERATIVE SOCIETY"}]
  },
  {
    "route_no": "354A",
    "distance": "31.2 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Marasur",
    "departure_from_origin": "05:25,  08:25,  13:45,  16:45",
    "arrival_at_origin": "05:20, 08:20, 16:40",
    "departure_from_destination": "04:00, 06:50, 15:15",
    "arrival_at_destination": "06:45,  09:55,  15:10,  18:10",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,ANEKAL TALUK,IN FRONT OF SWAMY VIVEKANANDA HIGH SCHOOL"}, {"busstop": "Igglur,CHANDAPURA POST & ANEKAL TALUK,BEHIND SRI VENUGOPAL SWAMY TEMPLE"}, {"busstop": "Marsoor gate ,MARASOOR GATE-ANEKAL TALUK,NEAR BHARAT PETROL BUNK"}, {"busstop": "Marasur,ANEKAL TALUK,NEAR SHANKAR NAGA MANTAP"}]
  },
  {
    "route_no": "354B",
    "distance": "35.2 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Shettihalli",
    "departure_from_origin": "05:15,  09:10,  14:45,  18:40",
    "arrival_at_origin": "05:10, 08:40, 18:10",
    "departure_from_destination": "03:35, 07:00, 16:30",
    "arrival_at_destination": "06:55,  10:50,  16:25,  20:20",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,ANEKAL TALUK,IN FRONT OF SWAMY VIVEKANANDA HIGH SCHOOL"}, {"busstop": "Igglur,CHANDAPURA POST & ANEKAL TALUK,BEHIND SRI VENUGOPAL SWAMY TEMPLE"}, {"busstop": "Marsoor gate ,MARASOOR GATE-ANEKAL TALUK,NEAR BHARAT PETROL BUNK"}, {"busstop": "MARSUR"}, {"busstop": "Shettihalli,ANEKAL TALUK,IN FRONT OF MILK PRODUCT CO-OPERATIVE SOCIETY"}]
  },
  {
    "route_no": "354C",
    "distance": "34.8 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "MARSUR",
    "departure_from_origin": "06:30,  09:25,  14:00,  17:25",
    "arrival_at_origin": "06:25, 09:20, 17:20",
    "departure_from_destination": "05:15, 07:55, 15:55",
    "arrival_at_destination": "07:50,  10:45,  15:25,  19:00",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,ANEKAL TALUK,IN FRONT OF SWAMY VIVEKANANDA HIGH SCHOOL"}, {"busstop": "Igglur,CHANDAPURA POST & ANEKAL TALUK,BEHIND SRI VENUGOPAL SWAMY TEMPLE"}, {"busstop": "Ramakrishnapur gate ,ANEKAL TALUK,OPPOSITE OF SRI PRASANNA VENKATESHWARA SWAMY TEMPLE ARCH"}, {"busstop": "Marsoor gate ,MARASOOR GATE-ANEKAL TALUK,NEAR BHARAT PETROL BUNK"}, {"busstop": "MARSUR"}]
  },
  {
    "route_no": "355A",
    "distance": "27.5 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "SRIRAMPURA",
    "departure_from_origin": "08:50,  12:00,  14:50",
    "arrival_at_origin": "08:45, 11:55, 14:45",
    "departure_from_destination": "07:30, 10:40, 13:25",
    "arrival_at_destination": "10:10,  13:20,  16:10",
    "map_json_content": [{"busstop": "Kempegowda Bus Station,MAJESTIC,BESIDE AMAR HOTEL"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra Indl Area"}, {"busstop": "ARAVINDA LIMITED"}, {"busstop": "Yarandahalli Circle Cross,BOMMASANDRA END AREA,BESIDE SRUJAN INDUSTRIES"}, {"busstop": "YARANDAHALLI"}, {"busstop": "SRIRAMPURA,HENNAGARA POST,BESIDE HUNASEMARA & RESIDENCE"}]
  },
  {
    "route_no": "355D",
    "distance": "58.08 KM",
    "origin": "K R Puram",
    "destination": "Jigani APC Cricle",
    "departure_from_origin": "08:45,  12:50",
    "arrival_at_origin": "08:40, 12:45",
    "departure_from_destination": "07:00, 11:00",
    "arrival_at_destination": "10:30,  14:35",
    "map_json_content": [{"busstop": "K R Puram"}, {"busstop": "ITI Circle"}, {"busstop": "KR Puram Railway Station,KR PURAM,BACK SIDE OF RAILWAY STATION"}, {"busstop": "Tin Factory"}, {"busstop": "Mahadevapura,MAHADEVAPURA,IN FRONT OF TEJA MARBLE CENTER"}, {"busstop": "EMC2"}, {"busstop": "Doddanekkundi,DODDANEKUNDI,IN FRONT OF NIRMALA NURSING HOME"}, {"busstop": "Karthik Nagara,MARATHAHALLI,OPPOSITE OF WATER TANK"}, {"busstop": "Kala Mandir Marathalli,MARATHAHALLI,IN FRONT OF KALAMANDIRA SILK CENTER"}, {"busstop": "Kadabisanahalli,KADABEESANAHALLI,OPPOSITE OF TREND ENTERPRISES"}, {"busstop": "Devrabisanahalli,DEVARABISANAHALLI,IN FRONT OF CHINESE RESTAURANT"}, {"busstop": "Eco Space,BELLANDUR,IN FRONT OF ECO SPACE COMPANY"}, {"busstop": "Bellandru ,BELLANDUR,IN FRONT OF BHAGINI RESTAURANT"}, {"busstop": "Sarjapura Cross,BELLANDUR,IN FRONT CAZE CARAGE"}, {"busstop": "Ibbalur"}, {"busstop": "Agara Junction"}, {"busstop": "Depot-25,HSR LAYOUT AGRAHARA,IN FRONT OF SAROVARA APARTMENT"}, {"busstop": "14th Main HSR Layout,HSR LAYOUT,OPPOSITE OF RELIANCE AUTOZONE"}, {"busstop": "HSR Appartment,HSR LAYOUT,IN FRONT OF FEMHILL GARDENS APARTMENT"}, {"busstop": "Central Silk Board"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra Indl Area 4TH CROSS"}, {"busstop": "Bommasandra Indl Area"}, {"busstop": "ARAVINDA LIMITED"}, {"busstop": "YARANDAHALLI GATE"}, {"busstop": "BIOCON"}, {"busstop": "O-MAX CIRCLE"}, {"busstop": "MARUTHI NAGARA,BOMMASANDRA INDUSTRIAL AREA,IN FRONT OF SUNSHINE INDUSTRIES"}, {"busstop": "NAVYA BADAWANE"}, {"busstop": "Jigani APC Cricle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}]
  },
  {
    "route_no": "355E",
    "distance": "34.7 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Bandenallasandra",
    "departure_from_origin": "06:35,  16:00,  20:20",
    "arrival_at_origin": "06:30, 09:45, 19:50",
    "departure_from_destination": "05:10, 08:05, 18:10",
    "arrival_at_destination": "08:00,  17:40,  22:00",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra Indl Area 4TH CROSS"}, {"busstop": "Bommasandra Indl Area"}, {"busstop": "ARAVINDA LIMITED"}, {"busstop": "YARANDAHALLI GATE"}, {"busstop": "BIOCON"}, {"busstop": "O-MAX CIRCLE"}, {"busstop": "Kyalasanahalli,HULIMANGALA POST & JIGANI HUBLI,IN FRONT OF VEENA PROVISION STORE"}, {"busstop": "Bandenallasandra,JIGANI HUBLI,OPPOSITE OF GOVERNMENT JUNIOR PRIMARY SCHOOL"}]
  },
  {
    "route_no": "355Q",
    "distance": "38.5 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Dyavasandra",
    "departure_from_origin": "09:55,  16:55",
    "arrival_at_origin": "09:50, 14:05",
    "departure_from_destination": "08:00, 12:15",
    "arrival_at_destination": "11:45,  18:45",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra Indl Area 4TH CROSS"}, {"busstop": "Bommasandra Indl Area"}, {"busstop": "ARAVINDA LIMITED"}, {"busstop": "YARANDAHALLI GATE"}, {"busstop": "BIOCON"}, {"busstop": "O-MAX CIRCLE"}, {"busstop": "MARUTHI NAGARA,BOMMASANDRA INDUSTRIAL AREA,IN FRONT OF SUNSHINE INDUSTRIES"}, {"busstop": "NAVYA BADAWANE"}, {"busstop": "Jigani APC Cricle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "KEB"}, {"busstop": "Madapatna,Open Area"}, {"busstop": "Haragadde,Open area"}, {"busstop": "Dyavasandra,Open Area"}]
  },
  {
    "route_no": "356A",
    "distance": "38.5 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Thattaguppe",
    "departure_from_origin": "06:50,  16:05,  20:00",
    "arrival_at_origin": "06:45, 10:30, 16:00, 19:30",
    "departure_from_destination": "05:15, 08:55, 14:20, 17:50",
    "arrival_at_destination": "08:25,  17:45,  21:40",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,ANEKAL TALUK,IN FRONT OF SWAMY VIVEKANANDA HIGH SCHOOL"}, {"busstop": "Igglur,CHANDAPURA POST & ANEKAL TALUK,BEHIND SRI VENUGOPAL SWAMY TEMPLE"}, {"busstop": "Ramakrishnapur gate ,ANEKAL TALUK,OPPOSITE OF SRI PRASANNA VENKATESHWARA SWAMY TEMPLE ARCH"}, {"busstop": "Marsoor gate ,ANEKAL TALUK,OPPOSITE OF BHARAT PETROL BUNK, CG CABLES & WIRES INDIA PRIVATE LIMITED"}, {"busstop": "Begadadevanahalli,ANEKAL TALUK,OPPOSITE OF GOVERNMENT PRIMARY SCHOOL"}, {"busstop": "Thattaguppe"}]
  },
  {
    "route_no": "356B",
    "distance": "34.3 KM",
    "origin": "karpoora",
    "destination": "Krishnarajendra Market",
    "departure_from_origin": "04:50,  08:00",
    "arrival_at_origin": "07:55, 21:00",
    "departure_from_destination": "06:25, 19:15",
    "arrival_at_destination": "06:20,  09:30",
    "map_json_content": [{"busstop": "karpoora,ANEKAL TALUK,IN FRONT OF SRI RAMA TEMPLE"}, {"busstop": "Karpura Gate,ANEKAL TALUK,BESIDE A.N.ELITE GARDERN"}, {"busstop": "Ahuddevanahalli gate ,ANEKAL TALUK,IN FRONT OF M.G.B.CLASSIC LAYOUT"}, {"busstop": "Begadadevanahalli,ANEKAL TALUK,OPPOSITE OF GOVERNMENT PRIMARY SCHOOL"}, {"busstop": "RKFARM,BYAGADADENAHALLI,IN FRONT OF CONSPACE PRIVATE LIMITED"}, {"busstop": "Marsoor gate ,ANEKAL TALUK,IN FRONT OF BHARAT PETROL BUNK, CG CABLES & WIRES INDIA PRIVATE LIMITED"}, {"busstop": "Ramakrishnapur gate ,ANEKAL TALUK,IN FRONT OF SRI VENKATESHWARA SWAMY TEMPLE ARCH"}, {"busstop": "Igglur,CHANDAPURA POST & ANEKAL TALUK,BEHIND SRI VENUGOPAL SWAMY TEMPLE"}, {"busstop": "Surya City,CHANDAPURA POST & ANEKAL TALUK,OPPOSITE OF B.M.T.C.DEPARTMENT 32"}, {"busstop": "Chandapura,ANEKAL TALUKU,BESIDE SWAMI VIVEKANANDA RURAL EDUCATION ,SOCIAL ASSOCIATION"}, {"busstop": "Hennagra Gate,BOMMASANDRA POST,IN FRONT OF SUB REGISTER & MARRIAGE OFFICE"}, {"busstop": "BTL College,BOMMASANDRA,IN FRONT OF NARAYANA HRUDAYALAYA HOSPITAL"}, {"busstop": "Bommasandra,ANEKAL TALUKU,IN FRONT OF TELEPHONE EXCHANGE & POST OFFICE"}, {"busstop": "Hebbagodi,HEBBAGODI,IN FRONT OF POLICE QUARTERS OR OPPOSITE OF MASJID"}, {"busstop": "Huskur gate,ELECTRONIC CITY POST,BESIDE PRASHANT CYLINDER PVT.LTD"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,OPPOSITE OF SHANKARA INFRASTRUCTURE MATERIAL PVT.LTD"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF B.M.T.C. DEPOT-19"}, {"busstop": "Konappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF LAVAKUSHA BULDING"}, {"busstop": "PES College"}, {"busstop": "Hosa Road"}, {"busstop": "Singasandra"}, {"busstop": "Kudlu Gate"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Bommanahalli"}, {"busstop": "Rupena Agrahar"}, {"busstop": "Madiwala Police Station"}, {"busstop": "St John Hospital,HOSUR ROAD"}, {"busstop": "Jn of Hosur Road,KORAMANGALA,IN FRONT OF STAPLES STATIONARYS EAST LAND CITYDEL"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,OPPOSITE OF CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Nimhans Hospital,IN FRONT OF KIDWAI HOSPITAL"}, {"busstop": "Lakkasandra,LAKKASANDRA,IN FRONT VIGNANA HOSPITAL"}, {"busstop": "Siddapura 7th Cross,SOMESHWARA NAGARA,OPPOSITE OF POSALY INTERNATIONAL"}, {"busstop": "Lalbagh Society,WILSON GARDEN,BESIDE HOPCOMS"}, {"busstop": "Lalbhagh Main Gate,DODDAMAVALLI,BESIDE SATYAMMA DEVI TEMPLE"}, {"busstop": "Town Hall"}, {"busstop": "Krishnarajendra Market"}]
  },
  {
    "route_no": "356CB",
    "distance": "23.5 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Electronic City 2nd Phase",
    "departure_from_origin": "07:05,  09:45,  14:30,  17:10",
    "arrival_at_origin": "09:40, 17:05, 20:10",
    "departure_from_destination": "08:25, 15:50, 18:55",
    "arrival_at_destination": "08:20,  11:00,  15:45,  18:25",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Electronic City 2nd Phase"}]
  },
  {
    "route_no": "356CW",
    "distance": "15 KM",
    "origin": "HSR BDA COMPLEX",
    "destination": "Electronic City Wipro Gate",
    "departure_from_origin": "07:30,  07:35,  07:50,  07:55,  08:10,  08:15,  08:20,  08:25,  08:30,  08:35,  08:40,  08:45,  08:50,  08:55,  09:00,  09:05,  09:10,  09:15,  09:20,  09:25,  09:30,  09:35,  09:40,  09:45,  09:50,  09:55,  10:05,  10:10,  10:15,  10:20,  10:25,  10:30,  10:50,  10:55,  11:00,  11:05,  11:10,  11:15,  11:20,  11:25,  11:50,  12:05,  12:10,  12:15,  12:20,  12:25,  12:50,  13:00,  13:05,  13:20,  13:25,  13:40,  13:45,  13:50,  13:55,  14:25,  14:30,  14:35,  14:50,  14:55,  15:00,  15:05,  15:10,  15:15,  15:20,  15:25,  15:45,  15:50,  16:00,  16:05,  16:20,  16:25,  16:30,  16:35,  16:50,  16:55,  17:00,  17:10,  17:15,  17:20,  17:25,  17:30,  17:35,  17:55,  18:00,  18:20,  18:25,  18:30,  18:55,  19:00,  19:35,  19:40,  19:45,  19:55,  20:00",
    "arrival_at_origin": "08:25, 08:30, 08:35, 08:40, 08:45, 08:50, 08:55, 09:00, 09:05, 09:10, 09:15, 09:20, 09:25, 09:30, 09:35, 09:40, 09:45, 09:50, 09:55, 10:00, 10:05, 10:10, 10:15, 10:20, 10:25, 10:45, 10:50, 10:55, 11:00, 11:05, 11:10, 11:15, 11:20, 11:45, 12:00, 12:05, 12:10, 12:15, 12:20, 12:30, 12:35, 12:45, 12:55, 13:00, 13:10, 13:20, 13:35, 13:40, 13:45, 13:50, 14:20, 14:25, 14:30, 14:45, 14:50, 14:55, 15:00, 15:05, 15:10, 15:15, 15:20, 15:45, 15:55, 16:00, 16:15, 16:20, 16:25, 16:30, 16:45, 16:50, 16:55, 17:05, 17:15, 17:20, 17:25, 17:30, 17:50, 17:55, 18:15, 18:20, 18:25, 18:50, 18:55, 19:30, 19:35, 19:40, 19:50, 19:55, 21:20, 21:25",
    "departure_from_destination": "08:00, 08:05, 08:10, 08:15, 08:20, 08:25, 08:30, 08:40, 08:45, 08:50, 08:55, 09:00, 09:05, 09:10, 09:15, 09:20, 09:25, 09:30, 09:35, 09:40, 09:45, 09:50, 09:55, 10:00, 10:20, 10:25, 10:30, 10:35, 10:40, 10:45, 10:50, 10:55, 11:20, 11:25, 11:30, 11:35, 11:40, 11:45, 11:50, 11:55, 12:05, 12:10, 12:15, 12:20, 12:30, 12:35, 12:55, 13:00, 13:05, 13:10, 13:20, 13:45, 13:50, 13:55, 14:05, 14:20, 14:25, 14:30, 14:35, 14:40, 14:55, 15:15, 15:20, 15:35, 15:50, 15:55, 16:00, 16:05, 16:20, 16:25, 16:30, 16:35, 16:45, 16:50, 16:55, 17:00, 17:05, 17:10, 17:15, 17:25, 17:30, 17:50, 17:55, 18:25, 18:30, 18:55, 19:00, 19:05, 19:15, 19:25, 19:30, 20:40, 20:45",
    "arrival_at_destination": "07:55,  08:00,  08:15,  08:20,  08:35,  08:45,  08:50,  08:55,  09:00,  09:05,  09:10,  09:15,  09:20,  09:25,  09:30,  09:35,  09:40,  09:45,  09:50,  09:55,  10:00,  10:05,  10:10,  10:15,  10:20,  10:30,  10:35,  10:40,  10:45,  10:50,  11:05,  11:15,  11:20,  11:25,  11:30,  11:35,  11:40,  11:45,  11:50,  12:15,  12:30,  12:50,  12:55,  13:00,  13:05,  13:15,  13:40,  13:45,  13:50,  14:00,  14:15,  14:20,  14:25,  14:30,  14:35,  14:50,  15:10,  15:15,  15:20,  15:25,  15:30,  15:35,  15:50,  15:55,  16:00,  16:05,  16:15,  16:40,  16:45,  16:50,  16:55,  17:00,  17:15,  17:20,  17:25,  17:40,  17:45,  17:50,  17:55,  18:00,  18:20,  18:25,  18:35,  18:40,  18:45,  18:50,  18:55,  19:00,  19:20,  19:25,  20:05,  20:10,  20:20,  20:25,  20:35,  20:40",
    "map_json_content": [{"busstop": "HSR BDA COMPLEX"}, {"busstop": "14th Main HSR Layout,HSR LAYOUT,OPPOSITE OF RELIANCE AUTOZONE"}, {"busstop": "HSR Appartment,HSR LAYOUT,IN FRONT OF FEMHILL GARDENS APARTMENT"}, {"busstop": "Central Silk Board"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF LAVAKUSHA BULDING"}, {"busstop": "Electronic City,ELECTRONIC CITY,OPPOSITE OF N.T.T.F. INSTITUTE"}, {"busstop": "SIEMENS"}, {"busstop": "Shikaripalya Cross"}, {"busstop": "Electronic City Wipro Gate"}]
  },
  {
    "route_no": "356D",
    "distance": "27.9 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Ittina Neela Apartment",
    "departure_from_origin": "07:00,  10:15,  15:15,  18:20,  21:55",
    "arrival_at_origin": "06:45, 09:45, 15:10, 18:15, 21:20",
    "departure_from_destination": "05:30, 08:20, 13:55, 17:00, 20:05",
    "arrival_at_destination": "08:15,  11:30,  16:30,  19:35,  23:00",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur"}, {"busstop": "Sampige,ELECTRONIC CITY POST,OPPOSITE OF AMBIKA DEPARTMENT STORE"}, {"busstop": "Ittina Neela Apartment"}]
  },
  {
    "route_no": "356E",
    "distance": "30.9 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "HELLELLIGE",
    "departure_from_origin": "05:15,  07:55,  16:05,  19:55",
    "arrival_at_origin": "07:50, 10:30, 16:00, 19:25, 22:40",
    "departure_from_destination": "06:35, 09:15, 14:25, 18:00, 21:25",
    "arrival_at_destination": "06:30,  09:10,  17:30,  21:20",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,ANEKAL TALUK,IN FRONT OF PANCHAYAT COMPLEX & S.K.MEDICAL & GENERAL STORE"}, {"busstop": "HELLELLIGE"}]
  },
  {
    "route_no": "356F",
    "distance": "29.7 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Adusonnahatti Cross",
    "departure_from_origin": "06:45,  17:10",
    "arrival_at_origin": "10:00, 17:05, 20:05",
    "departure_from_destination": "08:35, 15:40, 18:40",
    "arrival_at_destination": "08:05,  18:35",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura"}, {"busstop": "Hale Chandapura,ATTIBELE HOBLI,ANEKAL TALUKU,IN FRONT OF SHAND PIPE INDUSTRY PVT.LTD."}, {"busstop": "Thirumagondanahalli Cross"}, {"busstop": "Ado Sonnahatti"}]
  },
  {
    "route_no": "356H",
    "distance": "31.5 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Surya City",
    "departure_from_origin": "08:10,  11:40,  16:45,  21:00",
    "arrival_at_origin": "08:05, 11:35, 16:40, 20:30",
    "departure_from_destination": "06:35, 10:00, 15:00, 18:50",
    "arrival_at_destination": "09:45,  13:20,  18:20,  22:40",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Krupanidhi College"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,ANEKAL TALUK,IN FRONT OF SWAMY VIVEKANANDA HIGH SCHOOL"}, {"busstop": "Suryacity Gate,CHANDAPURA,IN FRONT OF K.H.B.ARCH"}, {"busstop": "Surya City,CHANDAPURA POST & ANEKAL TALUK,OPPOSITE OF B.M.T.C.DEPARTMENT 32"}]
  },
  {
    "route_no": "356J",
    "distance": "53.2 KM",
    "origin": "Electronic City",
    "destination": "Yelahanka Satelite Town 5th Phase",
    "departure_from_origin": "05:50,  10:15,  17:00,  17:20",
    "arrival_at_origin": "09:45, 16:30, 21:40",
    "departure_from_destination": "07:50, 14:25, 19:35",
    "arrival_at_destination": "07:45,  12:10,  19:05,  19:20",
    "map_json_content": [{"busstop": "Electronic City"}, {"busstop": "Konappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF LAVAKUSHA BULDING"}, {"busstop": "PES College"}, {"busstop": "Hosa Road"}, {"busstop": "Singasandra"}, {"busstop": "Kudlu Gate"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Bommanahalli"}, {"busstop": "Rupena Agrahar"}, {"busstop": "Madiwala Police Station"}, {"busstop": "StJohns Hospital"}, {"busstop": "Jn of Hosur Road,KORAMANGALA,IN FRONT OF STAPLES STATIONARYS EAST LAND CITYDEL"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,OPPOSITE OF CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Nimhans Hospital,IN FRONT OF KIDWAI HOSPITAL"}, {"busstop": "Lakkasandra,LAKKASANDRA,IN FRONT VIGNANA HOSPITAL"}, {"busstop": "Wilson Garden 10th Cross,WILSON GARDEN,BESIDE KARNATAKA HANDBALL ASSOCIATION"}, {"busstop": "Wilson Garden Police Station,WILSON GARDEN,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Double Road Shanthinagar"}, {"busstop": "CorporationPallavi,SAMPANGIRAMA NAGARA,IN FRONT OF PALLAVI TALKIES"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BANAPPA PARK"}, {"busstop": "Cauvery Bhavana,K.R. MARKET,OPPOSITE OF BWSSB"}, {"busstop": "Kempegowda Bus Station,MAJESTIC,BESIDE AMAR HOTEL"}, {"busstop": "Ananda Rao Circle,NEHARU NAGARA,JANATHA DALA(S) OFFICE"}, {"busstop": "Shivananda store,KUMARA PARK EAST,BESIDE KHADI EMPORIUM"}, {"busstop": "RM Guttahalli,PALACE GUTTAHALLI,BESIDE GARUDA SEVADAL"}, {"busstop": "Palace Ground,SADASHIVA NAGARA,BESIDE SIIMPLY SOFAR"}, {"busstop": "Mekhri Circle,Mekri Circle"}, {"busstop": "Ganga Nagara"}, {"busstop": "Veternary College"}, {"busstop": "Canara Bank Hebbal"}, {"busstop": "Hebbala"}, {"busstop": "Military Dairy Farm,BESIDE MILITARY COMPOUND"}, {"busstop": "Kodigehalli gate,BESIDE ROYAL OAK WOOD IN CORPORATION"}, {"busstop": "Byatarayana Pura"}, {"busstop": "GKVK"}, {"busstop": "Aerodrum"}, {"busstop": "Allalasandra Gate"}, {"busstop": "Yelahanka Police Station"}, {"busstop": "Yelahanaka NES Office"}, {"busstop": "Sheshadripuram College"}, {"busstop": "Sharavathi Hotel"}, {"busstop": "Chikkabommasandra Cross"}, {"busstop": "Yelahanka Satelite Town"}, {"busstop": "Dairy Circle Yalahanka New Town,YELAHANKA NEW TOWN,BESIDE DAZZLE SUPER MARKET"}, {"busstop": "Government School"}, {"busstop": "Yelahanka Bakery"}, {"busstop": "Yelahanka Satelite Town 5th Phase"}]
  },
  {
    "route_no": "356K",
    "distance": "40.41 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Neraluru",
    "departure_from_origin": "05:45,  08:40,  17:00,  20:25",
    "arrival_at_origin": "05:40, 08:40, 19:55",
    "departure_from_destination": "04:15, 07:15, 18:30",
    "arrival_at_destination": "07:10,  10:10,  18:25,  21:45",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Chandapura"}, {"busstop": "Hale Chandapura,ATTIBELE HOBLI,ANEKAL TALUKU,IN FRONT OF SHAND PIPE INDUSTRY PVT.LTD."}, {"busstop": "Thirumagondanahalli Cross,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF BAGAWAN SRI RAMANAMAHARISHI ASHRAM"}, {"busstop": "NERALURU GATE,ATTIBELE-HUBLI,BESIDE CANARA BANK"}, {"busstop": "Neraluru,ANEKAL-HUBLI TALUK,OPPOSITE OF SRI ANJANEYA SWAMY TEMPLE"}]
  },
  {
    "route_no": "356M",
    "distance": "39.5 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Anekal",
    "departure_from_origin": "05:20,  05:35,  05:50,  06:00,  06:15,  07:10,  07:20,  07:35,  07:50,  08:10,  08:20,  08:30,  09:20,  09:50,  10:00,  10:15,  10:30,  11:05,  12:55,  14:05,  14:55,  15:05,  15:30,  15:40,  15:50,  16:10,  16:25,  16:40,  16:45,  17:35,  18:40,  19:05,  19:30,  19:55,  20:15,  20:35,  20:50,  21:05",
    "arrival_at_origin": "07:05, 07:15, 07:30, 07:45, 08:05, 08:15, 08:25, 09:15, 09:30, 09:45, 09:55, 10:10, 10:25, 10:35, 11:30, 12:00, 12:15, 12:35, 12:50, 14:00, 14:50, 15:00, 15:20, 15:40, 16:10, 16:50, 17:30, 18:00, 18:35, 19:00, 19:25, 19:30, 19:40, 19:50, 20:05, 20:20, 20:35, 21:00, 21:55, 23:00, 23:25",
    "departure_from_destination": "05:10, 05:20, 05:35, 05:50, 06:10, 06:25, 06:35, 07:20, 07:35, 07:50, 08:00, 08:15, 08:30, 08:40, 09:35, 10:05, 10:20, 10:45, 11:10, 12:10, 12:55, 13:05, 13:25, 13:45, 14:15, 15:00, 15:35, 16:20, 16:30, 16:40, 17:05, 17:30, 17:35, 17:45, 17:55, 18:10, 18:25, 18:40, 19:10, 20:00, 21:05, 21:10, 21:30",
    "arrival_at_destination": "07:15,  07:30,  07:45,  07:55,  08:10,  09:05,  09:15,  09:30,  09:45,  10:05,  10:15,  10:25,  11:15,  11:40,  11:45,  11:55,  12:10,  12:25,  13:00,  14:50,  15:50,  16:50,  17:00,  17:25,  17:30,  17:40,  18:05,  18:20,  18:35,  18:40,  19:30,  20:35,  20:40,  21:00,  21:25,  21:50,  22:10,  22:30,  22:40,  23:00",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Poornima Talkies,K.S.GARDEN,BESIDE KAVERI ENTERPRISES"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,ANEKAL TALUK,IN FRONT OF SWAMY VIVEKANANDA HIGH SCHOOL"}, {"busstop": "Depot 32,CHANDAPURA POST & ANEKAL TALUK,BESIDE B.M.T.C.DEPARTMENT 32"}, {"busstop": "Igglur,CHANDAPURA POST & ANEKAL TALUK,BEHIND SRI VENUGOPAL SWAMY TEMPLE"}, {"busstop": "Ramakrishnapur gate ,ANEKAL TALUK,OPPOSITE OF SRI PRASANNA VENKATESHWARA SWAMY TEMPLE ARCH"}, {"busstop": "Marsoor gate ,ANEKAL TALUK,OPPOSITE OF BHARAT PETROL BUNK, CG CABLES & WIRES INDIA PRIVATE LIMITED"}, {"busstop": "Begadadevanahalli,ANEKAL TALUK,OPPOSITE OF GOVERNMENT PRIMARY SCHOOL"}, {"busstop": "Ahuddevanahalli gate ,ANEKAL TALUK,OPPOSITE OF M.G.B.CLASSIC LAYOUT"}, {"busstop": "Karpura Gate,KARPOORA ANEKAL TALUK,IN FRONT OF A.N.ELITE GARDEN"}, {"busstop": "Chikkegade cross,CHIKKA HOGODE GATE,IN FRONT OF ALLIANCE UNIVERSITY"}, {"busstop": "Choudireddy Circle,KAVALA HOSAHALLI ANEKAL TALUK,BESIDE SRI YALLAMMADEVI TEMPLE"}, {"busstop": "Kawalu hosalli,ANEKAL TALUK,IN FRONT OF ANGANAWADI CENTER"}, {"busstop": "Anekal Circle,ANEKAL,IN FRONT OF HOTEL SRI SAI SAGAR"}, {"busstop": "Anekal ,ANEKAL,BUS STAND"}]
  },
  {
    "route_no": "356Z",
    "distance": "11.6 KM",
    "origin": "Anekal",
    "destination": "Chandapura",
    "departure_from_origin": "04:00,  05:05,  08:30,  09:40,  11:15,  12:25,  13:35,  15:10,  16:20,  17:30,  18:40,  21:20,  22:30",
    "arrival_at_origin": "05:00, 08:25, 09:35, 10:45, 12:20, 13:30, 15:05, 16:15, 17:25, 18:35, 22:25, 23:35",
    "departure_from_destination": "04:30, 07:45, 09:05, 10:15, 11:50, 13:00, 14:35, 15:45, 16:55, 18:05, 21:55, 23:05",
    "arrival_at_destination": "04:25,  05:35,  09:00,  10:10,  11:45,  12:55,  14:05,  15:40,  16:50,  18:00,  19:10,  21:50,  23:00",
    "map_json_content": [{"busstop": "Anekal ,ANEKAL,BUS STAND"}, {"busstop": "Chowdareddy Circle,ANEKAL,IN FRONT OF CORPORATION BANK"}, {"busstop": "Anekal Circle,ANEKAL,IN FRONT OF ASHWATHA KATTE & ANJANEYA TEMPLE"}, {"busstop": "Kawalu hosalli,ANEKAL TALUK,OPPOSITE OF ANGANAWADI CENTER"}, {"busstop": "Chikkegade cross,CHIKKA HOGODE GATE,OPPOSITE OF ALLIANCE UNIVERSITY"}, {"busstop": "Karpura Gate,KARPOORA ANEKAL TALUK,OPPOSITE OF A.N.ELITE GARDEN"}, {"busstop": "Ahuddevanahalli gate ,ANEKAL TALUK,IN FRONT OF M.G.B.CLASSIC LAYOUT"}, {"busstop": "Begadadevanahalli,ANEKAL TALUK,IN FRONT OF GOVERNMENT PRIMARY SCHOOL"}, {"busstop": "Marsoor gate ,ANEKAL TALUK,IN FRONT OF BHARAT PETROL BUNK, CG CABLES & WIRES INDIA PRIVATE LIMITED"}, {"busstop": "Ramakrishnapur gate ,ANEKAL TALUK,IN FRONT OF SRI VENKATESHWARA SWAMY TEMPLE ARCH"}, {"busstop": "Igglur,CHANDAPURA POST & ANEKAL TALUK,BEHIND SRI VENUGOPAL SWAMY TEMPLE"}, {"busstop": "Chandapura,ANEKAL TALUKU,BESIDE SWAMI VIVEKANANDA RURAL EDUCATION ,SOCIAL ASSOCIATION"}]
  },
  {
    "route_no": "356ZA",
    "distance": "11.6 KM",
    "origin": "Kempu Dommasandra",
    "destination": "Chandapura",
    "departure_from_origin": "09:15,  16:45",
    "arrival_at_origin": "08:20, 15:55",
    "departure_from_destination": "07:45, 15:10",
    "arrival_at_destination": "10:00,  17:30",
    "map_json_content": [{"busstop": "Kempu Dommasandra,Near Anekal"}, {"busstop": "Chowdareddy Circle,ANEKAL,IN FRONT OF CORPORATION BANK"}, {"busstop": "Anekal ,ANEKAL,BUS STAND"}, {"busstop": "Anekal Circle,ANEKAL,IN FRONT OF ASHWATHA KATTE & ANJANEYA TEMPLE"}, {"busstop": "Kawalu hosalli,ANEKAL TALUK,OPPOSITE OF ANGANAWADI CENTER"}, {"busstop": "Chikkegade cross,CHIKKA HOGODE GATE,OPPOSITE OF ALLIANCE UNIVERSITY"}, {"busstop": "Karpura Gate,KARPOORA ANEKAL TALUK,OPPOSITE OF A.N.ELITE GARDEN"}, {"busstop": "Ahuddevanahalli gate ,ANEKAL TALUK,IN FRONT OF M.G.B.CLASSIC LAYOUT"}, {"busstop": "Begadadevanahalli,ANEKAL TALUK,IN FRONT OF GOVERNMENT PRIMARY SCHOOL"}, {"busstop": "Marsoor gate ,ANEKAL TALUK,IN FRONT OF BHARAT PETROL BUNK, CG CABLES & WIRES INDIA PRIVATE LIMITED"}, {"busstop": "Ramakrishnapur gate ,ANEKAL TALUK,IN FRONT OF SRI VENKATESHWARA SWAMY TEMPLE ARCH"}, {"busstop": "Igglur,CHANDAPURA POST & ANEKAL TALUK,BEHIND SRI VENUGOPAL SWAMY TEMPLE"}, {"busstop": "Chandapura,ANEKAL TALUKU,BESIDE SWAMI VIVEKANANDA RURAL EDUCATION ,SOCIAL ASSOCIATION"}]
  },
  {
    "route_no": "357",
    "distance": "29.6 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Bandapura Village",
    "departure_from_origin": "08:45,  14:05,  20:35",
    "arrival_at_origin": "08:15, 17:25",
    "departure_from_destination": "07:00, 16:00",
    "arrival_at_destination": "10:15,  15:30,  21:50",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Hale Chandapura,ATTIBELE HOBLI,ANEKAL TALUKU,IN FRONT OF SHAND PIPE INDUSTRY PVT.LTD."}, {"busstop": "Thirumagondanahalli Cross,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF BAGAWAN SRI RAMANAMAHARISHI ASHRAM"}, {"busstop": "Bandapura Village,ANEKAL TALUK,OPPOSITE OF MILK PRODUCT CO-OPERATIVE SOCIETY"}]
  },
  {
    "route_no": "357A",
    "distance": "43.98 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Madiwala Village Market",
    "departure_from_origin": "06:05,  09:20,  14:15,  20:35",
    "arrival_at_origin": "06:00, 08:50, 20:05",
    "departure_from_destination": "04:40, 07:30, 18:45",
    "arrival_at_destination": "07:25,  10:40,  15:35,  21:55",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi,HEBBAGODI,OPPOSITE OF SHRI PRASANNA ANJANEYA SWAMI TEMPLE"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Hale Chandapura,ATTIBELE HOBLI,ANEKAL TALUKU,IN FRONT OF SHAND PIPE INDUSTRY PVT.LTD."}, {"busstop": "Thirumagondanahalli Cross,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF BAGAWAN SRI RAMANAMAHARISHI ASHRAM"}, {"busstop": "Balagaranahalli Gate,ATTIBELE-HUBLI,OPPOSITE OF A.V.S.READY MIX CONCRETE PRODUCT PRIVATE LIMITED"}, {"busstop": "Bandapura Village,ANEKAL TALUK,OPPOSITE OF MILK PRODUCT CO-OPERATIVE SOCIETY"}, {"busstop": "Madiwala Village Market,ANEKAL TALUK,IN FRONT OF SRI SWAMY VIVEKANANDA STATUE"}]
  },
  {
    "route_no": "358",
    "distance": "35 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Mayasandra",
    "departure_from_origin": "06:10,  09:05,  09:30,  13:10,  17:15,  20:50",
    "arrival_at_origin": "06:05, 09:05, 13:05, 17:10, 20:20",
    "departure_from_destination": "04:45, 07:35, 11:20, 15:25, 15:40, 18:50",
    "arrival_at_destination": "07:30,  10:50,  11:00,  14:55,  18:45,  18:50,  22:20",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura"}, {"busstop": "Hale Chandapura,ATTIBELE HOBLI,ANEKAL TALUKU,IN FRONT OF SHAND PIPE INDUSTRY PVT.LTD."}, {"busstop": "Thirumagondanahalli Cross,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF BAGAWAN SRI RAMANAMAHARISHI ASHRAM"}, {"busstop": "Guddatti Gate,NERALURU POST,OPPOSITE OF SHASHANK TOWERS"}, {"busstop": "Ichanguru,ANEKAL TALUK,NEAR GOVERNMENT PRIMARY SCHOOL"}, {"busstop": "Kamblipura,ANEKAL TALUK,OPPOSITE OF GOVERNMENT PRIMARY SCHOOL"}, {"busstop": "Mayasandra,ANEKAL TALUK,OPPOSITE OF SRI DROUPATHAMMA DEVI TEMPLE"}]
  },
  {
    "route_no": "358A",
    "distance": "45.6 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Samanduru",
    "departure_from_origin": "07:05,  15:20,  20:20",
    "arrival_at_origin": "07:00, 11:25, 19:50",
    "departure_from_destination": "05:10, 09:30, 17:50",
    "arrival_at_destination": "09:00,  17:20,  22:20",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura"}, {"busstop": "Hale Chandapura,ATTIBELE HOBLI,ANEKAL TALUKU,IN FRONT OF SHAND PIPE INDUSTRY PVT.LTD."}, {"busstop": "Thirumagondanahalli Cross,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF BAGAWAN SRI RAMANAMAHARISHI ASHRAM"}, {"busstop": "Neraluru Gate,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF NERALURU GRAMA PANCHAYAT OFFICE"}, {"busstop": "Guddatti Gate,NERALURU POST,OPPOSITE OF SHASHANK TOWERS"}, {"busstop": "Guest Line Hotel,ATTIBELE INDUSTRIAL AREA,IN FRONT OF SRI VEERANJANEYA SWAMI TEMPLE"}, {"busstop": "Ichanguru,ANEKAL TALUK,NEAR GOVERNMENT PRIMARY SCHOOL"}, {"busstop": "Kamblipura,ANEKAL TALUK,OPPOSITE OF GOVERNMENT PRIMARY SCHOOL"}, {"busstop": "Mayasandra,ANEKAL TALUK,OPPOSITE OF SRI DROUPATHAMMA DEVI TEMPLE"}, {"busstop": "Halehalli,ANEKAL TALUK,IN FRONT OF GOVERNMENT RATION SOCIETY"}, {"busstop": "Muneshwara Temple,HALEHALLI & ANEKAL TALUK,BEHIND SRI MUNESHWARA SWAMY TEMPLE"}, {"busstop": "Samanduru,ATTIBELE-HUBLI,OPPOSITE OF SRI BASAVESHWARA TEMPLE"}]
  },
  {
    "route_no": "359A",
    "distance": "35.7 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Adigondana Halli",
    "departure_from_origin": "09:35,  16:35",
    "arrival_at_origin": "09:30, 13:25",
    "departure_from_destination": "07:50, 11:45",
    "arrival_at_destination": "11:15,  18:20",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi,HEBBAGODI,OPPOSITE OF SHRI PRASANNA ANJANEYA SWAMI TEMPLE"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Hale Chandapura,ATTIBELE HOBLI,ANEKAL TALUKU,IN FRONT OF SHAND PIPE INDUSTRY PVT.LTD."}, {"busstop": "Thirumagondanahalli Cross,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF BAGAWAN SRI RAMANAMAHARISHI ASHRAM"}, {"busstop": "Neraluru Gate,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF NERALURU GRAMA PANCHAYAT OFFICE"}, {"busstop": "Guddahatti Gate,NERALURU POST, ATTIBELE,OPPOSITE OF YOKOSTONE, CYCLE TYRES & TUBES COMPANY"}, {"busstop": "Guddahtti,ANEKAL TALUK,IN FRONT OF MILK PRODUCT CO-OPERATIVE SOCIETY"}, {"busstop": "Jn of Adigondanahalli Road"}, {"busstop": "Jigala,ATTIBELE HOBLI,IN FRONT OF SRI NAGALINGESHWARA TEMPLE"}, {"busstop": "Adigondana Halli,ATTIBELE HOBLI,ANEKAL TALUKU,IN FRONT OF SRI LAKSHMI PROVISION STORE"}]
  },
  {
    "route_no": "360C",
    "distance": "37 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Ballur",
    "departure_from_origin": "06:40,  15:20,  20:00",
    "arrival_at_origin": "06:35, 10:35, 19:20",
    "departure_from_destination": "04:50, 08:50, 17:35",
    "arrival_at_destination": "08:25,  17:05,  21:25",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi,HEBBAGODI,OPPOSITE OF SHRI PRASANNA ANJANEYA SWAMI TEMPLE"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Hale Chandapura,ATTIBELE HOBLI,ANEKAL TALUKU,IN FRONT OF SHAND PIPE INDUSTRY PVT.LTD."}, {"busstop": "Thirumagondanahalli Cross,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF BAGAWAN SRI RAMANAMAHARISHI ASHRAM"}, {"busstop": "Neraluru Gate,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF NERALURU GRAMA PANCHAYAT OFFICE"}, {"busstop": "Guddatti Gate,NERALURU POST,OPPOSITE OF SHASHANK TOWERS"}, {"busstop": "Guest Line Hotel,ATTIBELE INDUSTRIAL AREA,IN FRONT OF SRI VEERANJANEYA SWAMI TEMPLE"}, {"busstop": "Yadavanahalli Gate"}, {"busstop": "Attibele,ANEKAL TALUKU,IN FRONT OF S.V. FURNITURE"}, {"busstop": "TVS Cross Attibele,Attibele,OPPOSITE OF SRI MUKAMBIKA HOTEL"}, {"busstop": "Ballur Cross,ATTIBELE POST-ANEKAL TALUK,BESIDE INDIAN OIL PETROL BANK, M.D.R.FUEL STATION"}, {"busstop": "Ballur,ATTIBELE POST-ANEKAL TALUK,BESIDE SRI LAKSHMINARAYA SWAMY TEMPLE"}]
  },
  {
    "route_no": "360D",
    "distance": "35.2 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Kamblipura",
    "departure_from_origin": "08:45,  11:45,  15:40,  19:05",
    "arrival_at_origin": "06:55, 08:40, 11:40, 12:35, 15:35",
    "departure_from_destination": "05:20, 07:10, 10:00, 10:55, 13:55",
    "arrival_at_destination": "10:25,  13:25,  17:20,  20:35",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi,HEBBAGODI,OPPOSITE OF SHRI PRASANNA ANJANEYA SWAMI TEMPLE"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Hale Chandapura,ATTIBELE HOBLI,ANEKAL TALUKU,IN FRONT OF SHAND PIPE INDUSTRY PVT.LTD."}, {"busstop": "Thirumagondanahalli Cross,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF BAGAWAN SRI RAMANAMAHARISHI ASHRAM"}, {"busstop": "Neraluru Gate,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF NERALURU GRAMA PANCHAYAT OFFICE"}, {"busstop": "Guddatti Gate,NERALURU POST,OPPOSITE OF SHASHANK TOWERS"}, {"busstop": "Guest Line Hotel,ATTIBELE INDUSTRIAL AREA,IN FRONT OF SRI VEERANJANEYA SWAMI TEMPLE"}, {"busstop": "Yadavanahalli Gate"}, {"busstop": "Attibele"}, {"busstop": "Manchenahalli"}, {"busstop": "Kamblipura,ANEKAL TALUK,OPPOSITE OF GOVERNMENT PRIMARY SCHOOL"}]
  },
  {
    "route_no": "360E",
    "distance": "37.5 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Bidaraguppa",
    "departure_from_origin": "06:20,  16:50,  20:45",
    "arrival_at_origin": "06:15, 10:05, 20:40",
    "departure_from_destination": "04:45, 08:25, 19:00",
    "arrival_at_destination": "07:55,  18:30,  22:25",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi,HEBBAGODI,OPPOSITE OF SHRI PRASANNA ANJANEYA SWAMI TEMPLE"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Hale Chandapura,ATTIBELE HOBLI,ANEKAL TALUKU,IN FRONT OF SHAND PIPE INDUSTRY PVT.LTD."}, {"busstop": "Thirumagondanahalli Cross,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF BAGAWAN SRI RAMANAMAHARISHI ASHRAM"}, {"busstop": "Neraluru Gate,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF NERALURU GRAMA PANCHAYAT OFFICE"}, {"busstop": "Guddatti Gate,NERALURU POST,OPPOSITE OF SHASHANK TOWERS"}, {"busstop": "Guest Line Hotel,ATTIBELE INDUSTRIAL AREA,IN FRONT OF SRI VEERANJANEYA SWAMI TEMPLE"}, {"busstop": "Yadavanahalli Gate,ATTIBELE HOBLI,IN FRONT OF SYNDICATE BANK"}, {"busstop": "Attibele,ANEKAL TALUKU,IN FRONT OF SRI RAGHAVA SAGARA HOTEL"}, {"busstop": "Jigala cross,ATTIBELE,OPPOSITE OF MAYURA BAKERY & SWEETS"}, {"busstop": "Indlubele,ATTIBELE HOBLI,OPPOSITE OF GOVT. JUNIOR PRIMARY SCHOOL"}, {"busstop": "Bidaraguppa,BIDARAGUPPE,ATTIBELE HOBLI,OPPOSITE OF GOVT.PRIMARY SCHOOL"}]
  },
  {
    "route_no": "360H",
    "distance": "37.8 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Kodalipura",
    "departure_from_origin": "08:10,  16:10,  20:50",
    "arrival_at_origin": "07:40, 11:50, 20:20",
    "departure_from_destination": "06:00, 09:55, 18:30",
    "arrival_at_destination": "09:50,  18:00,  22:40",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi,HEBBAGODI,OPPOSITE OF SHRI PRASANNA ANJANEYA SWAMI TEMPLE"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Hale Chandapura,ATTIBELE HOBLI,ANEKAL TALUKU,IN FRONT OF SHAND PIPE INDUSTRY PVT.LTD."}, {"busstop": "Thirumagondanahalli Cross,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF BAGAWAN SRI RAMANAMAHARISHI ASHRAM"}, {"busstop": "Neraluru Gate,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF NERALURU GRAMA PANCHAYAT OFFICE"}, {"busstop": "Guddatti Gate,NERALURU POST,OPPOSITE OF SHASHANK TOWERS"}, {"busstop": "Guest Line Hotel,ATTIBELE INDUSTRIAL AREA,IN FRONT OF SRI VEERANJANEYA SWAMI TEMPLE"}, {"busstop": "Yadavanahalli Gate,ATTIBELE HOBLI,IN FRONT OF SYNDICATE BANK"}, {"busstop": "Attibele,ANEKAL TALUKU,IN FRONT OF S.V. FURNITURE"}, {"busstop": "Arehalli,ATTIBELE-HUBLI,OPPOSITE OF SRI MARAMMA DEVI TEMPLE"}, {"busstop": "Bhakthipura,ANEKAL TALUK,BESIDE OPEN AREA & FIELD"}, {"busstop": "Harohalli,ANEKAL TALUK,OPPOSITE OF SRI YALLAMMA DEVI TEMPLE & IN FRONT OF SUMANT STORE"}, {"busstop": "Mayasandra,ANEKAL TALUK,IN FRONT OF GOVERNMENT PRIMARY SCHOOL"}, {"busstop": "Kodalipura,ANEKAL TALUK,OPPOSITE OF GOVERNMENT PRIMARY SCHOOL"}]
  },
  {
    "route_no": "360J",
    "distance": "41.9 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Handenahalli",
    "departure_from_origin": "08:05,  16:20,  21:00",
    "arrival_at_origin": "08:00, 12:05, 20:05",
    "departure_from_destination": "06:15, 10:20, 18:10",
    "arrival_at_destination": "09:50,  18:05,  22:45",
    "map_json_content": [{"busstop": "Kempegowda Bus Station,MAJESTIC,BESIDE AMAR HOTEL"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur,ELECTRONIC CITY POST,BESIDE THALI RESTAURANT"}, {"busstop": "Hebbagodi,HEBBAGODI,OPPOSITE OF SHRI PRASANNA ANJANEYA SWAMI TEMPLE"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Hale Chandapura,ATTIBELE HOBLI,ANEKAL TALUKU,IN FRONT OF SHAND PIPE INDUSTRY PVT.LTD."}, {"busstop": "Thirumagondanahalli Cross,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF BAGAWAN SRI RAMANAMAHARISHI ASHRAM"}, {"busstop": "Neraluru Gate,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF NERALURU GRAMA PANCHAYAT OFFICE"}, {"busstop": "Guddatti Gate,NERALURU POST,OPPOSITE OF SHASHANK TOWERS"}, {"busstop": "Guest Line Hotel,ATTIBELE INDUSTRIAL AREA,IN FRONT OF SRI VEERANJANEYA SWAMI TEMPLE"}, {"busstop": "Yadavanahalli Gate,ATTIBELE HOBLI,IN FRONT OF SYNDICATE BANK"}, {"busstop": "Attibele,ANEKAL TALUKU,IN FRONT OF S.V. FURNITURE"}, {"busstop": "Indlubele,ATTIBELE HOBLI,OPPOSITE OF GOVT. JUNIOR PRIMARY SCHOOL"}, {"busstop": "Bidaraguppa,BIDARAGUPPE,ATTIBELE HOBLI,OPPOSITE OF GOVT.PRIMARY SCHOOL"}, {"busstop": "Handenahalli,Bidarguppe,Near Thyavakanahalli"}]
  },
  {
    "route_no": "360K",
    "distance": "35.8 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Attibele",
    "departure_from_origin": "05:10,  05:20,  05:55,  07:45,  08:30,  08:45,  08:50,  08:55,  09:50,  10:05,  11:45,  13:50,  14:00,  14:10,  15:40,  17:05,  17:30,  17:45,  17:50,  17:55,  18:00,  19:05,  21:20,  22:10",
    "arrival_at_origin": "07:40, 08:25, 08:40, 08:45, 08:50, 09:45, 10:05, 11:35, 11:40, 12:20, 12:35, 13:40, 14:05, 15:35, 17:00, 17:40, 17:45, 17:50, 18:15, 21:15, 21:40, 21:45",
    "departure_from_destination": "06:00, 06:45, 07:05, 07:10, 08:05, 08:15, 09:55, 10:00, 10:40, 10:55, 12:00, 12:20, 13:55, 15:10, 16:00, 16:05, 16:10, 16:15, 16:25, 19:25, 19:30, 20:00, 20:05, 20:15",
    "arrival_at_destination": "06:40,  07:00,  07:45,  09:25,  10:10,  10:25,  10:30,  10:35,  11:30,  11:50,  13:25,  15:30,  15:40,  15:55,  17:20,  18:55,  19:10,  19:25,  19:30,  19:35,  20:35,  23:00,  23:50",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Poornima Talkies,K.S.GARDEN,BESIDE KAVERI ENTERPRISES"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi,HEBBAGODI,OPPOSITE OF SHRI PRASANNA ANJANEYA SWAMI TEMPLE"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Hale Chandapura,ATTIBELE HOBLI,ANEKAL TALUKU,IN FRONT OF SHAND PIPE INDUSTRY PVT.LTD."}, {"busstop": "Thirumagondanahalli Cross,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF BAGAWAN SRI RAMANAMAHARISHI ASHRAM"}, {"busstop": "Neraluru Gate,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF NERALURU GRAMA PANCHAYAT OFFICE"}, {"busstop": "Guddatti Gate,NERALURU POST,OPPOSITE OF SHASHANK TOWERS"}, {"busstop": "Guest Line Hotel,ATTIBELE INDUSTRIAL AREA,IN FRONT OF SRI VEERANJANEYA SWAMI TEMPLE"}, {"busstop": "Yadavanahalli Gate,ATTIBELE HOBLI,IN FRONT OF SYNDICATE BANK"}, {"busstop": "Attibele"}]
  },
  {
    "route_no": "360M",
    "distance": "37.8 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Adigondana Halli",
    "departure_from_origin": "15:30,  20:00",
    "arrival_at_origin": "10:10, 15:25, 19:30",
    "departure_from_destination": "08:05, 13:40, 17:45",
    "arrival_at_destination": "17:15,  21:35",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi,HEBBAGODI,OPPOSITE OF SHRI PRASANNA ANJANEYA SWAMI TEMPLE"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Hale Chandapura,ATTIBELE HOBLI,ANEKAL TALUKU,IN FRONT OF SHAND PIPE INDUSTRY PVT.LTD."}, {"busstop": "Thirumagondanahalli Cross,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF BAGAWAN SRI RAMANAMAHARISHI ASHRAM"}, {"busstop": "Neraluru Gate,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF NERALURU GRAMA PANCHAYAT OFFICE"}, {"busstop": "Guddatti Gate,NERALURU POST,OPPOSITE OF SHASHANK TOWERS"}, {"busstop": "Guest Line Hotel,ATTIBELE INDUSTRIAL AREA,IN FRONT OF SRI VEERANJANEYA SWAMI TEMPLE"}, {"busstop": "Yadavanahalli Gate,ATTIBELE HOBLI,IN FRONT OF SYNDICATE BANK"}, {"busstop": "Attibele,ANEKAL TALUKU,IN FRONT OF S.V. FURNITURE"}, {"busstop": "Jigala Cross"}, {"busstop": "Jigala,ATTIBELE HOBLI,IN FRONT OF SRI NAGALINGESHWARA TEMPLE"}, {"busstop": "Adigondana Halli,ATTIBELE HOBLI,ANEKAL TALUKU,IN FRONT OF SRI LAKSHMI PROVISION STORE"}]
  },
  {
    "route_no": "360N",
    "distance": "40 KM",
    "origin": "Krishnarajendra Market",
    "destination": "NARASAPURA",
    "departure_from_origin": "06:35,  15:05,  19:55",
    "arrival_at_origin": "06:30, 10:50, 19:25",
    "departure_from_destination": "05:00, 08:50, 17:25",
    "arrival_at_destination": "08:10,  16:55,  21:55",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Hale Chandapura,ATTIBELE HOBLI,ANEKAL TALUKU,IN FRONT OF SHAND PIPE INDUSTRY PVT.LTD."}, {"busstop": "Thirumagondanahalli Cross,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF BAGAWAN SRI RAMANAMAHARISHI ASHRAM"}, {"busstop": "Neraluru Gate,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF NERALURU GRAMA PANCHAYAT OFFICE"}, {"busstop": "Guddatti Gate,NERALURU POST,OPPOSITE OF SHASHANK TOWERS"}, {"busstop": "Guest Line Hotel,ATTIBELE INDUSTRIAL AREA,IN FRONT OF SRI VEERANJANEYA SWAMI TEMPLE"}, {"busstop": "Yadavanahalli Gate,ATTIBELE HOBLI,IN FRONT OF SYNDICATE BANK"}, {"busstop": "Attibele,ANEKAL TALUKU,IN FRONT OF SRI RAGHAVA SAGARA HOTEL"}, {"busstop": "Jigala cross,ATTIBELE,OPPOSITE OF MAYURA BAKERY & SWEETS"}, {"busstop": "Indlubele,ATTIBELE HOBLI,OPPOSITE OF GOVT. JUNIOR PRIMARY SCHOOL"}, {"busstop": "Bidaraguppa,BIDARAGUPPE,ATTIBELE HOBLI,BESIDE GOVT.PRIMARY SCHOOL"}, {"busstop": "MALENAHALLI,ATTIBELE HOBLI,OPPOSITE OF GOVT. JUNIOR PRIMARY SCHOOL"}, {"busstop": "NARASAPURA,ATTIBELE HOBLI,OPPOSITE OF SRI CHOWDESHWARI DEVI TEMPLE & ASHWATA KATTE"}]
  },
  {
    "route_no": "360P",
    "distance": "38.8 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Solusapura",
    "departure_from_origin": "06:50,  15:25,  19:40",
    "arrival_at_origin": "06:45, 10:40, 15:20, 19:10",
    "departure_from_destination": "05:15, 09:00, 13:40, 17:35",
    "arrival_at_destination": "08:30,  17:05,  21:20",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "PESCollege"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi,HEBBAGODI,OPPOSITE OF SHRI PRASANNA ANJANEYA SWAMI TEMPLE"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Hale Chandapura,ATTIBELE HOBLI,ANEKAL TALUKU,IN FRONT OF SHAND PIPE INDUSTRY PVT.LTD."}, {"busstop": "Thirumagondanahalli Cross,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF BAGAWAN SRI RAMANAMAHARISHI ASHRAM"}, {"busstop": "Neraluru Gate,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF NERALURU GRAMA PANCHAYAT OFFICE"}, {"busstop": "Guddatti Gate,NERALURU POST,OPPOSITE OF SHASHANK TOWERS"}, {"busstop": "Guest Line Hotel,ATTIBELE INDUSTRIAL AREA,IN FRONT OF SRI VEERANJANEYA SWAMI TEMPLE"}, {"busstop": "Yadavanahalli Gate"}, {"busstop": "Attibele,ANEKAL TALUKU,IN FRONT OF SRI RAGHAVA SAGARA HOTEL"}, {"busstop": "Jigala Cross"}, {"busstop": "Jigala,ATTIBELE HOBLI,IN FRONT OF SRI NAGALINGESHWARA TEMPLE"}, {"busstop": "Adigondana Halli,ATTIBELE HOBLI,ANEKAL TALUKU,IN FRONT OF SRI LAKSHMI PROVISION STORE"}, {"busstop": "Solusapura,SARJAPURA, HOBLI,BESIDE GOVT. PRIMARY SCHOOL"}]
  },
  {
    "route_no": "360Q",
    "distance": "37.1 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Dasarahalli",
    "departure_from_origin": "07:20,  16:20,  20:30",
    "arrival_at_origin": "06:50, 10:35, 20:00",
    "departure_from_destination": "05:20, 09:00, 18:25",
    "arrival_at_destination": "08:55,  17:55,  22:05",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi,HEBBAGODI,OPPOSITE OF SHRI PRASANNA ANJANEYA SWAMI TEMPLE"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Hale Chandapura,ATTIBELE HOBLI,ANEKAL TALUKU,IN FRONT OF SHAND PIPE INDUSTRY PVT.LTD."}, {"busstop": "Thirumagondanahalli Cross,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF BAGAWAN SRI RAMANAMAHARISHI ASHRAM"}, {"busstop": "Neraluru Gate,ATTIBELE HOBLI,ANEKAL TALUKU,OPPOSITE OF NERALURU GRAMA PANCHAYAT OFFICE"}, {"busstop": "Guddatti Gate,NERALURU POST,OPPOSITE OF SHASHANK TOWERS"}, {"busstop": "Guest Line Hotel,ATTIBELE INDUSTRIAL AREA,IN FRONT OF SRI VEERANJANEYA SWAMI TEMPLE"}, {"busstop": "Yadavanahalli Gate,ATTIBELE HOBLI,IN FRONT OF SYNDICATE BANK"}, {"busstop": "Attibele"}, {"busstop": "TVS Cross Attibele,Attibele,OPPOSITE OF SRI MUKAMBIKA HOTEL"}, {"busstop": "Dasarahalli"}]
  },
  {
    "route_no": "361",
    "distance": "33.3 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Sidihosakote",
    "departure_from_origin": "05:30,  07:20,  08:20,  14:40,  18:50,  21:00",
    "arrival_at_origin": "07:15, 08:15, 10:15, 11:35, 18:45, 20:30, 21:35",
    "departure_from_destination": "05:50, 06:55, 08:50, 10:15, 17:20, 19:05, 20:15",
    "arrival_at_destination": "06:50,  08:45,  09:45,  16:05,  20:10,  22:25",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi,HEBBAGODI,OPPOSITE OF SHRI PRASANNA ANJANEYA SWAMI TEMPLE"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Depot 32,CHANDAPURA POST & ANEKAL TALUK,BESIDE B.M.T.C.DEPARTMENT 32"}, {"busstop": "Igglur,CHANDAPURA POST & ANEKAL TALUK,BEHIND SRI VENUGOPAL SWAMY TEMPLE"}, {"busstop": "Ramakrishnapur gate ,ANEKAL TALUK,OPPOSITE OF SRI PRASANNA VENKATESHWARA SWAMY TEMPLE ARCH"}, {"busstop": "Marsoor gate ,ANEKAL TALUK,OPPOSITE OF BHARAT PETROL BUNK, CG CABLES & WIRES INDIA PRIVATE LIMITED"}, {"busstop": "Begadadevanahalli,ANEKAL TALUK,IN FRONT OF GOVERNMENT PRIMARY SCHOOL"}, {"busstop": "Doddahagade,ANEKAL TALUK,OPPOSITE OF AGRICULTURE SERVICE CO-OPERATIVE SOCIETY"}, {"busstop": "Sidihosakote,ANEKAL TALUK,OPPOSITE OF GOVERNMENT SENIOR PRIMARY SCHOOL"}]
  },
  {
    "route_no": "361A",
    "distance": "33.9 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Soppahalli",
    "departure_from_origin": "06:30,  14:25,  20:20",
    "arrival_at_origin": "06:25, 09:50, 20:20",
    "departure_from_destination": "05:00, 08:25, 18:55",
    "arrival_at_destination": "07:55,  15:45,  21:45",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Makkala Koota"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY POST,OPPOSITE OF N.T.T.F. FOUNDATION"}, {"busstop": "Veerasandra Gate,ELECTRONIC CITY POST,IN FRONT OF SHANKAR INFRASTRUCTURE MATERIAL LIMITED"}, {"busstop": "Huskur Gate,ELECTRONIC CITY POST,BESIDE ESTATE GARDEN"}, {"busstop": "Hebbagodi,HEBBAGODI,OPPOSITE OF SHRI PRASANNA ANJANEYA SWAMI TEMPLE"}, {"busstop": "Bommasandra,BOMMASANDRA,IN FRONT OF D-MAST MALL"}, {"busstop": "BTL College,BOMMASANDRA,OPPOSITE OF NARAYANA HRUDALAYA HOSPITAL"}, {"busstop": "Hennagra Gate,BOMMASANDRA,OPPOSITE OF UNION BANK ATM,GOWDRA COMPLEX"}, {"busstop": "Chandapura,CHANDAPURA,ANEKAL TALUKU,IN FRONT OF S.K. MEDICALS & GENERAL STORES"}, {"busstop": "Depot 32,CHANDAPURA POST & ANEKAL TALUK,BESIDE B.M.T.C.DEPARTMENT 32"}, {"busstop": "Igglur,CHANDAPURA POST & ANEKAL TALUK,BEHIND SRI VENUGOPAL SWAMY TEMPLE"}, {"busstop": "Ramakrishnapur gate ,ANEKAL TALUK,OPPOSITE OF SRI PRASANNA VENKATESHWARA SWAMY TEMPLE ARCH"}, {"busstop": "Marsoor gate ,ANEKAL TALUK,OPPOSITE OF BHARAT PETROL BUNK, CG CABLES & WIRES INDIA PRIVATE LIMITED"}, {"busstop": "Chowdeshwari Temple Cross,ANEKAL TALUK,IN FRONT OF T.B.C.BRICKS FACTORY"}, {"busstop": "Lingapura Cross,ANEKAL TALUK,NEAR G.V.S.COLLEGE"}, {"busstop": "Soppahalli,ANEKAL TALUK,BESIDE SRI RENUKA YELLAMMA DEVI TEMPLE"}]
  },
  {
    "route_no": "342M",
    "distance": "46.5 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Chikka Tirupathi",
    "departure_from_origin": "07:25,  07:45,  12:10,  13:15,  19:45",
    "arrival_at_origin": "07:20, 11:00, 12:05, 17:50, 19:15",
    "departure_from_destination": "05:35, 09:15, 10:10, 15:50, 17:30",
    "arrival_at_destination": "09:10,  09:40,  14:00,  15:00,  21:30",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross"}, {"busstop": "Dommasandra Circle"}, {"busstop": "Dommasandra "}, {"busstop": "Chambenahalli Gate"}, {"busstop": "Yamare"}, {"busstop": "Sompura Gate"}, {"busstop": "Sarjapura,POLICE STATION"}, {"busstop": "Sarjapura Bus Stand"}, {"busstop": "Ramana Devasthana,SARJAPURA,IN FRONT OF SRI KODANDA RAMA TEMPLE"}, {"busstop": "Mugaluru,ANEKAL TALUK,IN FRONT OF SRI BETE VENKATESHWARA SWAMY TEMPLE"}, {"busstop": "Thiruranga Cross,ANEKAL TALUK,IN FRONT OF ASHWATHA KATTE"}, {"busstop": "Baguru,BAGURU,IN FRONT OF SMALL WATER TANK & HOUSES"}, {"busstop": "Ganagaluru cross,GANGALURU,BESIDE ASHWATHA KATTE & FIELDS"}, {"busstop": "Chikka Tirupathi,CHIKKA TIRUPATHI,IN FRONT OF SUMANGALI SAMUDAYA BAVAN"}]
  },
  {
    "route_no": "342MA",
    "distance": "45.69 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Ganagaluru",
    "departure_from_origin": "08:15,  15:35,  20:15",
    "arrival_at_origin": "08:15, 12:10, 19:45",
    "departure_from_destination": "06:30, 10:30, 17:55",
    "arrival_at_destination": "10:00,  17:25,  22:05",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross"}, {"busstop": "Dommasandra Circle,DOMMASANDRA,IN FRONT OF AVADHOOTH SHRI GURU GOVARDHAN SWAMI ASHRAM"}, {"busstop": "Dommasandra "}, {"busstop": "TChuddadenahalli"}, {"busstop": "Chambenahalli Gate"}, {"busstop": "Yamare"}, {"busstop": "Apartment Sarjapura road"}, {"busstop": "Sompura Gate"}, {"busstop": "Sarjapura,POLICE STATION"}, {"busstop": "Sarjapura Bus Stand"}, {"busstop": "Ramana Devasthana,SARJAPURA,IN FRONT OF SRI KODANDA RAMA TEMPLE"}, {"busstop": "Chikka Thirupathi,MARUTHI NAGARA, SARJAPURA,OPPOSITE OF K.E.B. POWER STATION"}, {"busstop": "Thindlu Cross"}, {"busstop": "Mahal Chowdadenahalli"}, {"busstop": "Dodda Thimmasandra"}, {"busstop": "Mugaluru,ANEKAL TALUK,IN FRONT OF SRI BETE VENKATESHWARA SWAMY TEMPLE"}, {"busstop": "Thiruranga Cross,ANEKAL TALUK,IN FRONT OF ASHWATHA KATTE"}, {"busstop": "Baguru,BAGURU,IN FRONT OF SMALL WATER TANK & HOUSES"}, {"busstop": "Ganagaluru Cross,GANGALURU,BESIDE ASHWATHA KATTE & FIELDS"}, {"busstop": "Ganagaluru,HOSAKOTE TALUK,IN FRONT OF NAVAGRAHA TEMPLES, NANJUNDESHWARA TEMPLE"}]
  },
  {
    "route_no": "342N",
    "distance": "28.3 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Kommasandra",
    "departure_from_origin": "06:55,  13:55,  17:10,  20:25",
    "arrival_at_origin": "06:50, 10:05, 17:05, 19:55",
    "departure_from_destination": "05:30, 08:45, 15:45, 18:35",
    "arrival_at_destination": "08:15,  15:15,  18:30,  21:45",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross"}, {"busstop": "Dommasandra Circle"}, {"busstop": "Dommasandra "}, {"busstop": "Kommasandra,SARJAPURA & HOBLI ANEKAL TALUK,BESIDE THE SRI KASHI VISHWANATH TEMPLE"}]
  },
  {
    "route_no": "342Q",
    "distance": "21 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Kodathi",
    "departure_from_origin": "07:05,  16:35,  19:10,  21:45",
    "arrival_at_origin": "07:00, 09:20, 19:05, 21:15",
    "departure_from_destination": "06:00, 08:10, 18:05, 20:15",
    "arrival_at_destination": "08:05,  17:35,  20:10,  22:45",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Kodathi,VARTHURU, HOBLI,OPPOSITE OF GRAMA PANCHAYAT OFFICE"}]
  },
  {
    "route_no": "342R",
    "distance": "37.08 KM",
    "origin": "Shivajinagar Bus Station",
    "destination": "Sarjapura",
    "departure_from_origin": "07:40,  17:20,  21:00",
    "arrival_at_origin": "07:35, 10:35, 17:15, 20:25",
    "departure_from_destination": "06:10, 09:10, 15:45, 18:55",
    "arrival_at_destination": "09:05,  18:50,  22:15",
    "map_json_content": [{"busstop": "Shivajinagar Bus Station,SHIVAJI NAGARA,BESIDE BMTC BUS STAND"}, {"busstop": "MG statue"}, {"busstop": "Museum Kasturba Road"}, {"busstop": "St Joseph Boys High school"}, {"busstop": "Richmond Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross"}, {"busstop": "Dommasandra Circle,DOMMASANDRA,IN FRONT OF AVADHOOTH SHRI GURU GOVARDHAN SWAMI ASHRAM"}, {"busstop": "Dommasandra "}, {"busstop": "Chambenahalli Gate"}, {"busstop": "TChuddadenahalli"}, {"busstop": "Yamare"}, {"busstop": "Apartment Sarjapura road"}, {"busstop": "Sompura Gate"}, {"busstop": "Sarjapura Police Station,POLICE STATION"}, {"busstop": "Sarjapura"}]
  },
  {
    "route_no": "342T",
    "distance": "33.8 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Sarjapura Bus Stand",
    "departure_from_origin": "06:50,  14:00,  20:55",
    "arrival_at_origin": "06:45, 10:25, 20:25",
    "departure_from_destination": "05:10, 08:55, 18:55",
    "arrival_at_destination": "08:25,  15:30,  22:20",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross"}, {"busstop": "Dommasandra Circle,DOMMASANDRA,IN FRONT OF AVADHOOTH SHRI GURU GOVARDHAN SWAMI ASHRAM"}, {"busstop": "Dommasandra "}, {"busstop": "TChuddadenahalli"}, {"busstop": "Chambenahalli Gate"}, {"busstop": "Yamare"}, {"busstop": "Apartment Sarjapura road"}, {"busstop": "Sompura Gate"}, {"busstop": "Sarjapura,POLICE STATION"}, {"busstop": "Sarjapura Bus Stand"}]
  },
  {
    "route_no": "342U",
    "distance": "36.2 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Pandithana Agrahara",
    "departure_from_origin": "06:35,  19:55",
    "arrival_at_origin": "06:30, 09:40, 19:15",
    "departure_from_destination": "05:00, 08:10, 17:30",
    "arrival_at_destination": "08:05,  21:25",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross"}, {"busstop": "Dommasandra Circle"}, {"busstop": "Dommasandra "}, {"busstop": "TChuddadenahalli"}, {"busstop": "Chambenahalli Gate"}, {"busstop": "Yamare"}, {"busstop": "Apartment Sarjapura road"}, {"busstop": "Sompura Gate"}, {"busstop": "Sarjapura,POLICE STATION"}, {"busstop": "Sarjapura Bus Stand"}, {"busstop": "Chikka Thirupathi,MARUTHI NAGARA, SARJAPURA,OPPOSITE OF K.E.B. POWER STATION"}, {"busstop": "Mahal Chowdadenahalli"}, {"busstop": "Panditana Agrahara Gate,SARJAPURA HOBLI,BESIDE OPEN AREA"}, {"busstop": "Pandithana Agrahara,SARJAPURA HOBLI,IN FRONT OF SRI KODANDARAYA SWAMY TEMPLE"}]
  },
  {
    "route_no": "342V",
    "distance": "36.9 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Areneru",
    "departure_from_origin": "06:40,  13:55,  20:45",
    "arrival_at_origin": "06:35, 09:55, 20:15",
    "departure_from_destination": "05:00, 08:20, 18:40",
    "arrival_at_destination": "08:15,  15:30,  22:20",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross"}, {"busstop": "Dommasandra Circle"}, {"busstop": "Dommasandra "}, {"busstop": "TChuddadenahalli"}, {"busstop": "Chambenahalli Gate"}, {"busstop": "Yamare"}, {"busstop": "Apartment Sarjapura road"}, {"busstop": "Sompura Gate"}, {"busstop": "Sarjapura,POLICE STATION"}, {"busstop": "Sarjapura Bus Stand"}, {"busstop": "St Philomena School,SARJAPURA,OPPOSITE OF ST.PHILOMENA SCHOOL"}, {"busstop": "Garments"}, {"busstop": "boorugunte"}, {"busstop": "Billapura,SARJAPURA, HOBLI,IN FRONT OF GOVT. PRIMARY SCHOOL"}, {"busstop": "Exide Factory"}, {"busstop": "Modhalli,SARJAPURA HOBLI,IN FRONT OF MILK PRODUCT CO-OPERATIVE SOCIETY"}, {"busstop": "Tyavakanahalli,SARJAPURA HOBLI,OPPOSITE OF S.V.S. PROVISION STORE"}, {"busstop": "Silk Form"}, {"busstop": "Bidaraguppa"}, {"busstop": "Areneru,ANEKAL TALUKU,IN FRONT OF MILK PRODUCT CO-OPERATIVE SOCIETY"}]
  },
  {
    "route_no": "342VA",
    "distance": "34.5 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Handenahalli Gate",
    "departure_from_origin": "05:05,  08:35,  14:10,  18:05",
    "arrival_at_origin": "08:30, 18:00, 21:30",
    "departure_from_destination": "06:45, 16:20, 19:50",
    "arrival_at_destination": "06:40,  10:25,  15:50,  19:45",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross"}, {"busstop": "Dommasandra Circle"}, {"busstop": "Dommasandra "}, {"busstop": "TChuddadenahalli"}, {"busstop": "Chambenahalli Gate"}, {"busstop": "Yamare"}, {"busstop": "Apartment Sarjapura road"}, {"busstop": "Sompura Gate"}, {"busstop": "Sarjapura,POLICE STATION"}, {"busstop": "Sarjapura Bus Stand"}, {"busstop": "St Philomena School,SARJAPURA,OPPOSITE OF ST.PHILOMENA SCHOOL"}, {"busstop": "Garments"}, {"busstop": "boorugunte"}, {"busstop": "Billapura,SARJAPURA, HOBLI,IN FRONT OF GOVT. PRIMARY SCHOOL"}, {"busstop": "Indus International School"}, {"busstop": "Handenahalli Gate,ANEKAL TALUKU,OPPOSITE OF SRI KRISHNA TEMPLE"}]
  },
  {
    "route_no": "342W",
    "distance": "33.4 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Chikka Dasarahalli",
    "departure_from_origin": "07:15,  15:55,  20:25",
    "arrival_at_origin": "07:10, 10:15, 15:50, 19:55",
    "departure_from_destination": "05:45, 08:45, 14:05, 18:10",
    "arrival_at_destination": "08:40,  17:40,  21:50",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross"}, {"busstop": "Dommasandra Circle"}, {"busstop": "Dommasandra "}, {"busstop": "TChuddadenahalli"}, {"busstop": "Chambenahalli Gate"}, {"busstop": "Yamare"}, {"busstop": "Apartment Sarjapura road"}, {"busstop": "Sompura Gate"}, {"busstop": "Sarjapura Police Station,POLICE STATION"}, {"busstop": "Sarjapura Bus Stand"}, {"busstop": "Srirama Temple"}, {"busstop": "Chikka Dasarahalli,SARJAPURA & HOBLI ANEKAL TALUK,IN FRONT OF SHRI MUNESHWARA TEMPLE"}]
  },
  {
    "route_no": "342WA",
    "distance": "34 KM",
    "origin": "Shanthi Nagara Bus Station",
    "destination": "Ittuguru",
    "departure_from_origin": "07:45",
    "arrival_at_origin": "07:40, 11:35",
    "departure_from_destination": "06:10, 09:55",
    "arrival_at_destination": "09:25",
    "map_json_content": [{"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross"}, {"busstop": "Dommasandra Circle"}, {"busstop": "Dommasandra "}, {"busstop": "TChuddadenahalli"}, {"busstop": "Chambenahalli Gate"}, {"busstop": "Yamare"}, {"busstop": "Apartment Sarjapura road"}, {"busstop": "Sompura Gate"}, {"busstop": "Sarjapura Police Station,POLICE STATION"}, {"busstop": "Sarjapura Bus Stand"}, {"busstop": "Srirama Temple"}, {"busstop": "Ittuguru,ITTANGURU,OPPOSITE OF  GOVT.SCHOOL ITTANGURU"}]
  },
  {
    "route_no": "342X",
    "distance": "26 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Kada Agrahara",
    "departure_from_origin": "05:10,  08:15,  16:20,  20:00",
    "arrival_at_origin": "05:05, 08:10, 15:50, 19:25",
    "departure_from_destination": "04:00, 06:55, 14:20, 17:55",
    "arrival_at_destination": "06:25,  09:35,  17:50,  21:15",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross"}, {"busstop": "Dommasandra Circle"}, {"busstop": "Dommasandra "}, {"busstop": "TChuddadenahalli"}, {"busstop": "Chambenahalli Gate"}, {"busstop": "Yamare"}, {"busstop": "Apartment Sarjapura road"}, {"busstop": "Sompura Gate"}, {"busstop": "Kada Agrahara,ANEKAL TALUK,OPPOSITE OF KODANDARAMA SWAMI TEMPLE"}]
  },
  {
    "route_no": "342Y",
    "distance": "37.9 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Thiruranga",
    "departure_from_origin": "07:15,  14:10,  20:00",
    "arrival_at_origin": "07:10, 10:40, 19:20",
    "departure_from_destination": "05:30, 09:00, 17:40",
    "arrival_at_destination": "08:55,  15:50,  21:40",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross"}, {"busstop": "Dommasandra Circle"}, {"busstop": "Dommasandra "}, {"busstop": "TChuddadenahalli"}, {"busstop": "Chambenahalli Gate"}, {"busstop": "Yamare"}, {"busstop": "Apartment Sarjapura road"}, {"busstop": "Sompura Gate"}, {"busstop": "Sarjapura Police Station,POLICE STATION"}, {"busstop": "Sarjapura Bus Stand"}, {"busstop": "Ramana Devasthana,SARJAPURA,IN FRONT OF SRI KODANDA RAMA TEMPLE"}, {"busstop": "Chikka Thirupathi,MARUTHI NAGARA, SARJAPURA,OPPOSITE OF K.E.B. POWER STATION"}, {"busstop": "Thindlu Cross"}, {"busstop": "Mahal Chowdadenahalli"}, {"busstop": "Dodda Thimmasandra"}, {"busstop": "Mugaluru,ANEKAL TALUK,IN FRONT OF SRI BETE VENKATESHWARA SWAMY TEMPLE"}, {"busstop": "Panditana Agrahara Gate,SARJAPURA HOBLI,BESIDE OPEN AREA"}, {"busstop": "Thiruranga Cross,ANEKAL TALUK,IN FRONT OF ASHWATHA KATTE"}, {"busstop": "Thiruranga"}]
  },
  {
    "route_no": "342Z",
    "distance": "34.5 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Muttana Halli",
    "departure_from_origin": "06:20,  10:05,  13:30,  20:25",
    "arrival_at_origin": "06:15, 09:45, 19:55",
    "departure_from_destination": "04:40, 08:05, 18:20",
    "arrival_at_destination": "08:00,  10:35,  15:10,  21:55",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross"}, {"busstop": "Dommasandra Circle"}, {"busstop": "TChuddadenahalli"}, {"busstop": "Chambenahalli Gate"}, {"busstop": "Yamare"}, {"busstop": "Apartment Sarjapura road"}, {"busstop": "Sompura Gate"}, {"busstop": "Sarjapura Bus Stand"}, {"busstop": "Ramana Devasthana,SARJAPURA,IN FRONT OF SRI KODANDA RAMA TEMPLE"}, {"busstop": "Thindlu Cross"}, {"busstop": "Thindlu,SARJAPURA HOBLI,IN FRONT OF RATION STORE & MILK PRODUCT CO-OPERATIVE SOCIETY"}, {"busstop": "Muttana Halli,SARJAPURA HOBLI, ANEKAL TALUK,BESIDE GOVT JUNIOR PRIMARY SCHOOL"}]
  },
  {
    "route_no": "MP-342F",
    "distance": "31.5 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Sarjapura Bus Stand",
    "departure_from_origin": "05:30,  07:55,  08:00,  08:45,  09:10,  09:45,  10:50,  11:30,  11:55,  12:30,  12:50,  13:50,  14:45,  15:05,  15:25,  16:00,  16:55,  18:10,  19:15",
    "arrival_at_origin": "09:05, 09:40, 10:45, 11:25, 11:50, 12:25, 12:45, 13:45, 14:35, 14:40, 15:20, 15:55, 16:50, 17:50, 18:05, 18:10, 18:35, 21:45",
    "departure_from_destination": "07:20, 07:55, 09:05, 09:55, 10:10, 10:55, 11:00, 12:00, 13:00, 13:05, 13:40, 14:15, 15:05, 16:05, 16:20, 16:40, 16:55, 20:00",
    "arrival_at_destination": "07:15,  09:25,  09:40,  10:25,  10:55,  11:30,  12:30,  13:00,  13:35,  14:10,  14:35,  15:35,  16:25,  16:35,  17:05,  17:40,  18:40,  19:55,  20:45",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "St Marthas Hospital,BESIDE POLICE HEAD QUARTERS"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar TTMC"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi college"}, {"busstop": "Koramangala"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross,DOMMASANDRA,IN FRONT OF HOTEL SHRI LAKSHMI & N.R STORE"}, {"busstop": "Dommasandra "}, {"busstop": "TChuddadenahalli"}, {"busstop": "Chambenahalli Gate"}, {"busstop": "Yamare"}, {"busstop": "Sompura Gate"}, {"busstop": "Sarjapura Bus Stand"}]
  },
  {
    "route_no": "343",
    "distance": "13.8 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Beguru",
    "departure_from_origin": "05:50,  06:20,  06:55,  07:30,  08:05,  08:25,  08:50,  09:45,  10:30,  12:15,  12:30,  13:50,  14:00,  14:25,  14:40,  15:40,  15:45,  16:20,  16:30,  17:25,  17:55,  18:10,  18:25,  19:25,  19:50,  20:10,  20:30",
    "arrival_at_origin": "05:45, 06:15, 07:25, 08:00, 08:20, 08:45, 09:05, 09:40, 10:25, 10:45, 11:45, 12:10, 12:25, 13:55, 14:05, 14:35, 15:35, 15:40, 16:15, 16:25, 17:20, 17:50, 18:05, 18:20, 19:20, 19:40, 19:45, 20:00, 21:00, 21:25",
    "departure_from_destination": "05:00, 05:30, 06:40, 07:10, 07:35, 08:00, 08:20, 08:55, 09:40, 10:00, 11:00, 11:25, 11:40, 13:05, 13:20, 13:50, 14:45, 14:55, 15:30, 15:40, 16:35, 17:00, 17:20, 17:35, 18:35, 18:50, 19:00, 19:15, 20:15, 20:40",
    "arrival_at_destination": "06:35,  07:05,  07:40,  08:15,  08:50,  09:10,  09:35,  10:30,  11:15,  11:35,  13:00,  13:15,  14:40,  14:45,  15:10,  15:25,  16:30,  17:05,  17:15,  18:10,  18:45,  18:55,  19:10,  20:10,  20:35,  21:00,  21:15",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahara"}, {"busstop": "Bommanahalli,MADHESHWARA NAGARA,BESIDE S.R.S.TRAVELS, BLACKBIRD GARMENTS"}, {"busstop": "Hongansandra,VIRAT NAGARA,OPPOSITE OF LATHA TRADERS"}, {"busstop": "Dekkan ,HONGASANDRA,OPPOSITE OF SHANTHISAGAR HOTEL"}, {"busstop": "Tent"}, {"busstop": "Vishwapriya Layout Cross,BEGURU,NEAR CHOWDESHWARI TEMPLE"}, {"busstop": "Beguru"}]
  },
  {
    "route_no": "343A",
    "distance": "25.5 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "HULLAHALLI",
    "departure_from_origin": "06:50,  22:00",
    "arrival_at_origin": "06:45, 20:35",
    "departure_from_destination": "05:30, 19:20",
    "arrival_at_destination": "08:05,  23:15",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar TTMC"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahara"}, {"busstop": "Bommanahalli,MADHESHWARA NAGARA,BESIDE S.R.S.TRAVELS, BLACKBIRD GARMENTS"}, {"busstop": "Hongsandra,HONGASANDRA,NEAR TEMPLE"}, {"busstop": "Dekkan ,HONGASANDRA,OPPOSITE OF SHANTHISAGAR HOTEL"}, {"busstop": "Kallyanamantappa,HONGASANDRA,OPPOSITE OF BAKERY"}, {"busstop": "Tent ,BEGURU,OPPOSITE OF MANJUSHREE BAKERY"}, {"busstop": "Vishwapriya Layout Cross,BEGURU,NEAR CHOWDESHWARI TEMPLE"}, {"busstop": "aralimara"}, {"busstop": "Church"}, {"busstop": "Beguru"}, {"busstop": "Nobel Residency Gate,BOMMANAHALLI-BEGURU VIA JIGANI,NEAR GR.QUEENS PRIDE APARTMENT"}, {"busstop": "Muniswera devastanna"}, {"busstop": "Vaddarapalya"}, {"busstop": "Mylasandra Cross"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Hulimangala Cross"}, {"busstop": "HULLAHALLI"}]
  },
  {
    "route_no": "343B",
    "distance": "20.49 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Kodi Chikkanahalli",
    "departure_from_origin": "07:30,  09:20,  11:35,  13:25,  15:40,  17:30",
    "arrival_at_origin": "09:15, 11:30, 13:20, 15:35, 17:25",
    "departure_from_destination": "08:25, 10:40, 12:30, 14:45, 16:35",
    "arrival_at_destination": "08:20,  10:10,  12:25,  14:15,  16:30,  18:20",
    "map_json_content": [{"busstop": "Kempegowda Bus Station,MAJESTIC,BESIDE AMAR HOTEL"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Poornima Talkies,K.S.GARDEN,BESIDE KAVERI ENTERPRISES"}, {"busstop": "Lalbhagh Main Gate,DODDAMAVALLI,BESIDE DURGA BEARINGS PVT.LTD."}, {"busstop": "Lalbhag West Gate,BASAVANAGUDI,BESIDE TECHNOMARK TELEVISION"}, {"busstop": "RVTeachers College,BASAVANAGUDI,OPPOSITE OF MEGA AGENSIS"}, {"busstop": "Vijaya College,BASAVANAGUDI,BESIDE VIJAYA COLLEGE"}, {"busstop": "Madhavan Park,JAYANAGARA 2ND BLOCK,OPPOSITE OF RAMAKRISHNA NURSING HOME"}, {"busstop": "Jayanagara 3rd block,JAYANAGARA 3RD BLOCK,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Jayanagara Bus Stand,JAYANAGARA 4TH BLOCK,BESIDE KCC BUILDING"}, {"busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,BESIDE UDUPI UPAHAR"}, {"busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE CARMEL CONVENT"}, {"busstop": "Pump House Jayanagar East End,JAYANAGARA 9TH BLOCK,BESIDE SURABHI ARTS"}, {"busstop": "Jayadeva Hospital,JAYANAGARA 9TH BLOCK,HEALTHY INTERNATIONAL HOMEOPATHY"}, {"busstop": "MICO Layout,BTM LAYOUT 1ST STAGE"}, {"busstop": "BTM water Tank,BTM LAYOUT,IN FRONT OF CORPORATION BANK"}, {"busstop": "Udupi Garden 16th Main,BTM LAYOUT,BESIDE BANGLOR ONE CENTER"}, {"busstop": "BTM Layout Bus Stop,BTM LAYOUT 2ND STAGE,IN FROUNT OF KUVEMPUNAGRA BUS STAND"}, {"busstop": "Central Silk Board,BTM LAYOUT MADIWALA,OPPOSITE OF CENTRAL SILK BOARD"}, {"busstop": "Roopena Agrahara"}, {"busstop": "Bommanahalli,MADHESHWARA NAGARA,BESIDE S.R.S.TRAVELS, BLACKBIRD GARMENTS"}, {"busstop": "Nayanappanahalli cross,BOMMANAHALLI CIRCLE,OPPOSITE OF BHARATH PETROLEUM BANK"}, {"busstop": "Virata Nagara Cross"}, {"busstop": "Kodichikkanahalli cross,BOMMANAHALLI KAVERI NAGARA,NEAR INDANE OFFICE"}, {"busstop": "Kodi Chikkanahalli"}]
  },
  {
    "route_no": "343D",
    "distance": "12.8 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Kodi Chikkanahalli",
    "departure_from_origin": "06:45,  08:25,  10:00,  12:25,  12:45,  14:25,  16:05,  16:50,  17:45,  19:50",
    "arrival_at_origin": "08:20, 09:55, 10:00, 12:20, 14:20, 16:00, 16:45, 17:40, 19:45, 21:25",
    "departure_from_destination": "07:35, 09:05, 09:15, 11:25, 13:25, 13:35, 15:15, 15:50, 16:55, 18:50, 19:00, 20:40",
    "arrival_at_destination": "07:30,  09:10,  10:55,  13:20,  13:30,  15:10,  15:20,  16:50,  17:45,  18:30,  20:35",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahara"}, {"busstop": "Bommanahalli,MADHESHWARA NAGARA,BESIDE S.R.S.TRAVELS, BLACKBIRD GARMENTS"}, {"busstop": "Nayanappanahalli cross,BOMMANAHALLI CIRCLE,OPPOSITE OF BHARATH PETROLEUM BANK"}, {"busstop": "Viratnagara cross"}, {"busstop": "Kodichikkanahalli cross,BOMMANAHALLI KAVERI NAGARA,NEAR INDANE OFFICE"}, {"busstop": "Kodi Chikkanahalli"}]
  },
  {
    "route_no": "343E",
    "distance": "16.7 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Beguru",
    "departure_from_origin": "07:05,  07:40,  08:40,  09:15,  09:50,  10:45,  11:50,  12:45,  13:20,  15:30,  15:50,  17:10,  19:25,  20:05,  22:15,  23:15",
    "arrival_at_origin": "07:00, 07:35, 08:35, 09:10, 09:45, 10:40, 11:45, 12:40, 13:15, 15:25, 18:00, 19:20, 20:00, 22:10, 22:45",
    "departure_from_destination": "06:00, 06:45, 07:40, 08:10, 08:45, 09:40, 10:45, 11:30, 12:15, 14:25, 17:00, 18:15, 19:00, 21:10, 21:45",
    "arrival_at_destination": "08:05,  08:40,  09:35,  10:15,  11:00,  11:45,  12:50,  14:00,  14:20,  16:30,  16:50,  18:10,  20:30,  21:05,  23:05,  23:59",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahara"}, {"busstop": "Bommanahalli,MADHESHWARA NAGARA,BESIDE S.R.S.TRAVELS, BLACKBIRD GARMENTS"}, {"busstop": "Hongsandra,HONGASANDRA,NEAR TEMPLE"}, {"busstop": "Dekkan ,HONGASANDRA,OPPOSITE OF SHANTHISAGAR HOTEL"}, {"busstop": "Kallyanamantappa,HONGASANDRA,OPPOSITE OF BAKERY"}, {"busstop": "Tent ,BEGURU,OPPOSITE OF MANJUSHREE BAKERY"}, {"busstop": "Vishwapriya Layout Cross,BEGURU,NEAR CHOWDESHWARI TEMPLE"}, {"busstop": "aralimara"}, {"busstop": "Church"}, {"busstop": "Beguru"}]
  },
  {
    "route_no": "343F",
    "distance": "12.4 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Viratanagara Cross",
    "departure_from_origin": "08:20,  10:10,  12:25,  14:15,  16:05",
    "arrival_at_origin": "08:15, 10:05, 12:20, 14:10, 16:00, 18:15",
    "departure_from_destination": "07:30, 09:15, 11:30, 13:20, 15:10, 17:25",
    "arrival_at_destination": "09:10,  11:00,  13:15,  15:05,  16:55",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahara"}, {"busstop": "Bommanahalli,MADHESHWARA NAGARA,BESIDE S.R.S.TRAVELS, BLACKBIRD GARMENTS"}, {"busstop": "Nayanappanahalli cross,BOMMANAHALLI CIRCLE,OPPOSITE OF BHARATH PETROLEUM BANK"}, {"busstop": "Viratanagara Cross,DEVARACHIKKANAHALLI,BESIDE HOTEL VARSHA"}]
  },
  {
    "route_no": "343H",
    "distance": "12.8 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Hongasandra Mico Layout",
    "departure_from_origin": "07:05,  07:55,  08:45,  09:35,  10:25,  11:20,  14:25,  15:45,  16:35,  17:25,  19:40,  21:55",
    "arrival_at_origin": "07:00, 08:40, 09:30, 10:20, 11:15, 12:25, 14:20, 16:30, 17:20, 18:10, 19:35, 21:05",
    "departure_from_destination": "06:15, 07:55, 08:45, 09:35, 10:25, 11:40, 13:35, 15:45, 16:35, 17:25, 18:45, 20:35",
    "arrival_at_destination": "07:50,  08:40,  09:30,  10:20,  11:10,  13:05,  15:15,  16:30,  17:20,  18:15,  20:30,  22:40",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahara"}, {"busstop": "Bommanahalli,MADHESHWARA NAGARA,BESIDE S.R.S.TRAVELS, BLACKBIRD GARMENTS"}, {"busstop": "Nayanappanahalli Cross"}, {"busstop": "Kallyanamantappa,HONGASANDRA,OPPOSITE OF BAKERY"}, {"busstop": "Hongasandra Mico Layout"}]
  },
  {
    "route_no": "343L",
    "distance": "16.5 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Hongasandra mico layout",
    "departure_from_origin": "07:00,  09:00,  11:25,  14:50,  17:15,  19:15,  21:40",
    "arrival_at_origin": "06:55, 08:55, 11:20, 17:10, 19:10, 21:10",
    "departure_from_destination": "06:00, 08:00, 10:25, 16:15, 18:15, 20:15",
    "arrival_at_destination": "07:55,  09:55,  12:25,  15:45,  18:10,  20:10,  22:35",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahara"}, {"busstop": "Bommanahalli,MADHESHWARA NAGARA,BESIDE S.R.S.TRAVELS, BLACKBIRD GARMENTS"}, {"busstop": "Nayanappanahalli Cross"}, {"busstop": "Hongsandra,HONGASANDRA,NEAR TEMPLE"}, {"busstop": "Dekkan ,HONGASANDRA,OPPOSITE OF SHANTHISAGAR HOTEL"}, {"busstop": "Kallyanamantappa,HONGASANDRA,OPPOSITE OF BAKERY"}, {"busstop": "Tent ,BEGURU,OPPOSITE OF MANJUSHREE BAKERY"}, {"busstop": "Hongasandra mico layout ,BEGURU,OPPOSITE OF PRASIDDI BUILDING"}]
  },
  {
    "route_no": "343M",
    "distance": "17.6 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Mylasandra Cross",
    "departure_from_origin": "09:40,  12:10,  14:20,  16:55",
    "arrival_at_origin": "09:35, 12:05, 14:15, 16:50, 19:00",
    "departure_from_destination": "08:35, 11:10, 13:15, 15:50, 18:00",
    "arrival_at_destination": "10:40,  13:10,  15:20,  17:55",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahara"}, {"busstop": "Bommanahalli,MADHESHWARA NAGARA,BESIDE S.R.S.TRAVELS, BLACKBIRD GARMENTS"}, {"busstop": "Hongansandra,VIRAT NAGARA,OPPOSITE OF LATHA TRADERS"}, {"busstop": "Dekkan ,HONGASANDRA,OPPOSITE OF SHANTHISAGAR HOTEL"}, {"busstop": "Tent"}, {"busstop": "Vishwapriya Layout Cross,BEGURU,NEAR CHOWDESHWARI TEMPLE"}, {"busstop": "Beguru"}, {"busstop": "MYLASANDRA CROSS"}, {"busstop": "MYLASANDRA"}, {"busstop": "Mylasandra Cross"}]
  },
  {
    "route_no": "344A",
    "distance": "30 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Haragadde",
    "departure_from_origin": "07:50,  08:50,  11:50,  14:50,  15:35,  18:55",
    "arrival_at_origin": "08:20, 11:20, 12:00, 14:40, 18:20, 18:50",
    "departure_from_destination": "06:50, 09:50, 10:30, 13:20, 16:50, 17:20",
    "arrival_at_destination": "09:20,  10:20,  13:20,  16:20,  17:05,  20:25",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahara"}, {"busstop": "Bommanahalli,MADHESHWARA NAGARA,BESIDE S.R.S.TRAVELS, BLACKBIRD GARMENTS"}, {"busstop": "Hongsandra,HONGASANDRA,NEAR TEMPLE"}, {"busstop": "Dekkan ,HONGASANDRA,OPPOSITE OF SHANTHISAGAR HOTEL"}, {"busstop": "Tent"}, {"busstop": "Vishwapriya Layout Cross,BEGURU,NEAR CHOWDESHWARI TEMPLE"}, {"busstop": "Beguru"}, {"busstop": "MYLASANDRA CROSS"}, {"busstop": "Nobel Residency Gate,BOMMANAHALLI-BEGURU VIA JIGANI,NEAR GR.QUEENS PRIDE APARTMENT"}, {"busstop": "St Marrys School"}, {"busstop": "Vaddarapalya"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Koppa"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani APC Cricle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "Madapatna,Open Area"}, {"busstop": "Haragadde,Open area"}]
  },
  {
    "route_no": "344B",
    "distance": "25.8 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Bettadasanapura",
    "departure_from_origin": "09:20,  12:25,  15:05,  18:01",
    "arrival_at_origin": "09:15, 12:20, 15:00, 18:05",
    "departure_from_destination": "08:00, 11:05, 13:45, 16:05",
    "arrival_at_destination": "10:35,  13:40,  16:20,  19:25",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar TTMC"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahara"}, {"busstop": "Bommanahalli,MADHESHWARA NAGARA,BESIDE S.R.S.TRAVELS, BLACKBIRD GARMENTS"}, {"busstop": "Hongansandra,VIRAT NAGARA,OPPOSITE OF LATHA TRADERS"}, {"busstop": "Dekkan ,HONGASANDRA,OPPOSITE OF SHANTHISAGAR HOTEL"}, {"busstop": "Kallyanamantappa,HONGASANDRA,OPPOSITE OF BAKERY"}, {"busstop": "Tent ,BEGURU,OPPOSITE OF MANJUSHREE BAKERY"}, {"busstop": "aralimara"}, {"busstop": "Beguru"}, {"busstop": "MYLASANDRA CROSS"}, {"busstop": "Nobel Residency Gate,BOMMANAHALLI-BEGURU VIA JIGANI,NEAR GR.QUEENS PRIDE APARTMENT"}, {"busstop": "Muniswera devastanna"}, {"busstop": "Vaddarapalya"}, {"busstop": "Mylasandra Cross"}, {"busstop": "Bettahalasuru cross"}, {"busstop": "Bettadasanapura"}]
  },
  {
    "route_no": "344C",
    "distance": "25 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Bettadasanapura",
    "departure_from_origin": "06:05,  07:05,  08:25,  09:25,  13:15,  15:35,  16:35,  18:20,  19:20,  21:15,  21:35",
    "arrival_at_origin": "06:00, 07:00, 08:20, 09:20, 11:05, 12:05, 15:30, 16:30, 18:15, 19:15, 20:30, 21:30",
    "departure_from_destination": "05:00, 06:00, 07:15, 08:15, 10:00, 11:00, 14:25, 15:25, 17:10, 18:10, 19:25, 20:30",
    "arrival_at_destination": "07:10,  08:10,  09:30,  10:30,  14:20,  16:40,  17:40,  19:25,  20:25,  22:15,  22:35",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi college"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Rupena Agrahara"}, {"busstop": "Bommanahalli,MADHESHWARA NAGARA,BESIDE S.R.S.TRAVELS, BLACKBIRD GARMENTS"}, {"busstop": "Hongsandra,HONGASANDRA,NEAR TEMPLE"}, {"busstop": "Dekkan ,HONGASANDRA,OPPOSITE OF SHANTHISAGAR HOTEL"}, {"busstop": "Kallyanamantappa"}, {"busstop": "Tent ,BEGURU,OPPOSITE OF MANJUSHREE BAKERY"}, {"busstop": "aralimara"}, {"busstop": "Church"}, {"busstop": "Beguru"}, {"busstop": "Nobel Residency Gate,BOMMANAHALLI-BEGURU VIA JIGANI,NEAR GR.QUEENS PRIDE APARTMENT"}, {"busstop": "St.Maryu2019s school"}, {"busstop": "Mylasandra Cross"}, {"busstop": "Bettadasanapura cross"}, {"busstop": "Bettadasanapura"}]
  },
  {
    "route_no": "344D",
    "distance": "19.3 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Bettadasanapura",
    "departure_from_origin": "07:25,  10:20,  15:50,  18:40,  21:00",
    "arrival_at_origin": "07:20, 10:15, 12:45, 18:35, 20:55",
    "departure_from_destination": "06:10, 09:05, 11:35, 17:30, 19:50",
    "arrival_at_destination": "08:35,  11:30,  17:00,  19:45,  22:00",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Rupena Agrahara"}, {"busstop": "Bommanahalli,MADHESHWARA NAGARA,BESIDE S.R.S.TRAVELS, BLACKBIRD GARMENTS"}, {"busstop": "Hongsandra,HONGASANDRA,NEAR TEMPLE"}, {"busstop": "Dekkan ,HONGASANDRA,OPPOSITE OF SHANTHISAGAR HOTEL"}, {"busstop": "Kallyanamantappa"}, {"busstop": "Tent ,BEGURU,OPPOSITE OF MANJUSHREE BAKERY"}, {"busstop": "aralimara"}, {"busstop": "Church"}, {"busstop": "Beguru"}, {"busstop": "Colony Mallapur"}, {"busstop": "Vittasandra"}, {"busstop": "Bettadasanapura cross"}, {"busstop": "Bettadasanapura"}]
  },
  {
    "route_no": "344E",
    "distance": "39.4 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Anekal",
    "departure_from_origin": "07:15,  15:05,  20:05",
    "arrival_at_origin": "19:35",
    "departure_from_destination": "17:35",
    "arrival_at_destination": "09:15,  17:05,  22:05",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahara"}, {"busstop": "Bommanahalli,MADHESHWARA NAGARA,BESIDE S.R.S.TRAVELS, BLACKBIRD GARMENTS"}, {"busstop": "Hongsandra,HONGASANDRA,NEAR TEMPLE"}, {"busstop": "Dekkan ,HONGASANDRA,OPPOSITE OF SHANTHISAGAR HOTEL"}, {"busstop": "Kallyanamantappa,HONGASANDRA,OPPOSITE OF BAKERY"}, {"busstop": "Tent ,BEGURU,OPPOSITE OF MANJUSHREE BAKERY"}, {"busstop": "Vishwapriya Layout Cross,BEGURU,NEAR CHOWDESHWARI TEMPLE"}, {"busstop": "aralimara"}, {"busstop": "Church"}, {"busstop": "Beguru"}, {"busstop": "Nobel Residency Gate,BOMMANAHALLI-BEGURU VIA JIGANI,NEAR GR.QUEENS PRIDE APARTMENT"}, {"busstop": "Muniswera devastanna"}, {"busstop": "Vaddarapalya"}, {"busstop": "Mylasandra Cross"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Hulimangala Cross"}, {"busstop": "Koppa"}, {"busstop": "Koppa Gate Bannergatta Road"}, {"busstop": "Harapanahalli"}, {"busstop": "Jigani Tent"}, {"busstop": "Jigani"}, {"busstop": "Jigani APC Cricle,ANEKAL TALUK,OPPOSITE OF HOTEL R.V.INTERNATIONAL"}, {"busstop": "Madapatna,Open Area"}, {"busstop": "Haragadde,Open area"}, {"busstop": "Bangla Gate Bannerghatta Anekal Road,Open area"}, {"busstop": "Kumbarahalli,Open area"}, {"busstop": "Suragajakkanahalli Anekal Road,Opp to provision stores"}, {"busstop": "Indlawadi Cross,Opp to open area"}, {"busstop": "Gowrenahalli,Opp to petty shop"}, {"busstop": "Muthyalamadu Cross,Opp to burial ground"}, {"busstop": "Shanimahathma Devasthana,Opp to Temple"}, {"busstop": "Anekal Circle,ANEKAL,IN FRONT OF HOTEL SRI SAI SAGAR"}, {"busstop": "Chowdareddy Circle,ANEKAL,OPPOSITE OF VIJAYA NURSING HOME"}, {"busstop": "Anekal ,ANEKAL,BUS STAND"}]
  },
  {
    "route_no": "345",
    "distance": "25.2 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Hulimangala",
    "departure_from_origin": "06:00,  08:40,  10:55,  14:00,  14:30,  17:05,  17:35,  20:45",
    "arrival_at_origin": "05:55, 08:35, 10:50, 11:40, 13:55, 16:35, 17:30, 20:15",
    "departure_from_destination": "04:45, 07:20, 09:35, 10:25, 12:40, 15:20, 16:15, 18:55",
    "arrival_at_destination": "07:15,  09:55,  12:10,  15:15,  15:45,  18:20,  18:50,  22:00",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahara"}, {"busstop": "Bommanahalli,MADHESHWARA NAGARA,BESIDE S.R.S.TRAVELS, BLACKBIRD GARMENTS"}, {"busstop": "Hongsandra,HONGASANDRA,NEAR TEMPLE"}, {"busstop": "Bommana Halli Devasthana,HONGASANDRA,OPPOSITE OF HOTEL THE GRAND"}, {"busstop": "Dekkan ,HONGASANDRA,OPPOSITE OF SHANTHISAGAR HOTEL"}, {"busstop": "Kallyanamantappa,HONGASANDRA,OPPOSITE OF BAKERY"}, {"busstop": "Tent ,BEGURU,OPPOSITE OF MANJUSHREE BAKERY"}, {"busstop": "aralimara"}, {"busstop": "Church"}, {"busstop": "Beguru"}, {"busstop": "Nobel Residency Gate,BOMMANAHALLI-BEGURU VIA JIGANI,NEAR GR.QUEENS PRIDE APARTMENT"}, {"busstop": "Muniswera devastanna"}, {"busstop": "Vaddarapalya"}, {"busstop": "Mylasandra Cross"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Hulimangala Cross"}, {"busstop": "Bingipura"}, {"busstop": "Hulimangala,ANEKAL TALUK,OPPOSITE OF VILLAGE PANCHAYAT OFFICE"}]
  },
  {
    "route_no": "345A",
    "distance": "27.2 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Hulimangala",
    "departure_from_origin": "10:00,  15:25",
    "arrival_at_origin": "09:55, 15:20",
    "departure_from_destination": "08:20, 14:00",
    "arrival_at_destination": "11:30,  16:45",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar TTMC"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahara"}, {"busstop": "Bommanahalli,MADHESHWARA NAGARA,BESIDE S.R.S.TRAVELS, BLACKBIRD GARMENTS"}, {"busstop": "Hongsandra,HONGASANDRA,NEAR TEMPLE"}, {"busstop": "Bommana Halli Devasthana,HONGASANDRA,OPPOSITE OF HOTEL THE GRAND"}, {"busstop": "Dekkan ,HONGASANDRA,OPPOSITE OF SHANTHISAGAR HOTEL"}, {"busstop": "Tent"}, {"busstop": "Vishwapriya Layout Cross,BEGURU,NEAR CHOWDESHWARI TEMPLE"}, {"busstop": "aralimara"}, {"busstop": "Church"}, {"busstop": "Beguru"}, {"busstop": "Nobel Residency Gate,BOMMANAHALLI-BEGURU VIA JIGANI,NEAR GR.QUEENS PRIDE APARTMENT"}, {"busstop": "Muniswera devastanna"}, {"busstop": "Vaddarapalya"}, {"busstop": "Mylasandra Cross"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Hulimangala Cross"}, {"busstop": "Bingipura"}, {"busstop": "Hulimangala,ANEKAL TALUK,OPPOSITE OF VILLAGE PANCHAYAT OFFICE"}]
  },
  {
    "route_no": "345C",
    "distance": "28.2 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Nanjapura",
    "departure_from_origin": "10:15,  15:15,  18:40",
    "arrival_at_origin": "18:35",
    "departure_from_destination": "17:10",
    "arrival_at_destination": "11:40,  16:40,  20:05",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahara"}, {"busstop": "Bommanahalli,MADHESHWARA NAGARA,BESIDE S.R.S.TRAVELS, BLACKBIRD GARMENTS"}, {"busstop": "Hongsandra,HONGASANDRA,NEAR TEMPLE"}, {"busstop": "Bommana Halli Devasthana,HONGASANDRA,OPPOSITE OF HOTEL THE GRAND"}, {"busstop": "Dekkan ,HONGASANDRA,OPPOSITE OF SHANTHISAGAR HOTEL"}, {"busstop": "Tent"}, {"busstop": "aralimara"}, {"busstop": "Church"}, {"busstop": "Beguru"}, {"busstop": "Nobel Residency Gate,BOMMANAHALLI-BEGURU VIA JIGANI,NEAR GR.QUEENS PRIDE APARTMENT"}, {"busstop": "Muniswera devastanna"}, {"busstop": "Vaddarapalya"}, {"busstop": "Mylasandra Cross"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Hulimangala Cross"}, {"busstop": "Bingipura"}, {"busstop": "Hulimangala,ANEKAL TALUK,OPPOSITE OF VILLAGE PANCHAYAT OFFICE"}, {"busstop": "Nanjapura Cross"}, {"busstop": "Nanjapura"}]
  },
  {
    "route_no": "345E",
    "distance": "29.8 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Kyalasanahalli",
    "departure_from_origin": "09:40,  18:55",
    "arrival_at_origin": "09:30",
    "departure_from_destination": "07:50",
    "arrival_at_destination": "11:00,  20:25",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahara"}, {"busstop": "Bommanahalli,MADHESHWARA NAGARA,BESIDE S.R.S.TRAVELS, BLACKBIRD GARMENTS"}, {"busstop": "Hongsandra,HONGASANDRA,NEAR TEMPLE"}, {"busstop": "Bommana Halli Devasthana,HONGASANDRA,OPPOSITE OF HOTEL THE GRAND"}, {"busstop": "Dekkan ,HONGASANDRA,OPPOSITE OF SHANTHISAGAR HOTEL"}, {"busstop": "Tent"}, {"busstop": "Vishwapriya Layout Cross,BEGURU,NEAR CHOWDESHWARI TEMPLE"}, {"busstop": "aralimara"}, {"busstop": "Church"}, {"busstop": "Beguru"}, {"busstop": "Nobel Residency Gate,BOMMANAHALLI-BEGURU VIA JIGANI,NEAR GR.QUEENS PRIDE APARTMENT"}, {"busstop": "Muniswera devastanna"}, {"busstop": "Vaddarapalya"}, {"busstop": "Mylasandra Cross"}, {"busstop": "Jalli Machine Bannerghatta Road"}, {"busstop": "Hulimangala Cross"}, {"busstop": "Bingipura"}, {"busstop": "Hulimangala,ANEKAL TALUK,OPPOSITE OF VILLAGE PANCHAYAT OFFICE"}, {"busstop": "Vabasandra,HULIMANGALA POST & JIGANI HUBLI,OPPOSITE OF BASAVESHWARA TEMPLE"}, {"busstop": "Kyalasanahalli,HULIMANGALA POST & JIGANI HUBLI,IN FRONT OF VEENA PROVISION STORE"}]
  },
  {
    "route_no": "346",
    "distance": "23.6 KM",
    "origin": "Krishnarajendra Market",
    "destination": "JJN THIMMAREDDY LAYOUT",
    "departure_from_origin": "09:30,  12:35,  15:05",
    "arrival_at_origin": "09:25, 12:30, 15:00, 18:00",
    "departure_from_destination": "08:10, 11:15, 13:45, 16:45",
    "arrival_at_destination": "10:45,  13:40,  16:15",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi college"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF LAVAKUSHA BULDING"}, {"busstop": "Electronic City,ELECTRONIC CITY,OPPOSITE OF N.T.T.F. INSTITUTE"}, {"busstop": "SIMENSE"}, {"busstop": "Shikaripalya Cross"}, {"busstop": "Shikaripalya,OPPOSITE OF GOVERNMENT JUNIOR URDU SCHOOL"}, {"busstop": "JJN THIMMAREDDY LAYOUT,HULIMANGALA POST & JIGANI HUBLI,BEHIND SHRI BALAMURI VINAYAKA TEMPLE"}]
  },
  {
    "route_no": "346A",
    "distance": "21.4 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Shikaripalya",
    "departure_from_origin": "07:00,  09:30,  15:20,  18:45,  22:00",
    "arrival_at_origin": "06:55, 09:25, 15:15, 18:40, 21:20",
    "departure_from_destination": "05:55, 08:10, 14:10, 17:20, 20:05",
    "arrival_at_destination": "08:05,  10:45,  16:40,  20:00,  23:00",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF LAVAKUSHA BULDING"}, {"busstop": "Electronic City,ELECTRONIC CITY,OPPOSITE OF N.T.T.F. INSTITUTE"}, {"busstop": "SIEMENS"}, {"busstop": "Shikaripalya Cross"}, {"busstop": "Shikaripalya,GOLLAHALLI,BESIDE CHURCH"}]
  },
  {
    "route_no": "346B",
    "distance": "18 KM",
    "origin": "Krishnarajendra Market",
    "destination": "DODDANAGAMANGALA",
    "departure_from_origin": "06:05,  08:20,  14:35,  18:40,  21:15",
    "arrival_at_origin": "06:00, 08:15, 10:55, 18:35, 20:45",
    "departure_from_destination": "05:00, 07:10, 09:55, 17:35, 19:45",
    "arrival_at_destination": "07:05,  09:25,  15:35,  19:40,  22:15",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi college"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "MICO Factory,CHANNAKESHAVA NAGARA, ELECTRONIC CITY POST,IN FRONT OF S.L.V. BAR & RESTAURANT"}, {"busstop": "DODDANAGAMANGALA,ELECTRONIC CITY POST,IN FRONT OF SRI VENKATESHWARA SWAMI TEMPLE"}]
  },
  {
    "route_no": "346C",
    "distance": "22.3 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Rayasandra",
    "departure_from_origin": "06:05,  08:25,  15:05,  17:25,  21:00",
    "arrival_at_origin": "06:00, 08:20, 11:25, 17:20, 20:30",
    "departure_from_destination": "05:00, 07:15, 10:15, 16:15, 19:15",
    "arrival_at_destination": "07:10,  09:45,  16:10,  18:45,  22:10",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar TTMC"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "MICO Factory,CHANNAKESHAVA NAGARA, ELECTRONIC CITY POST,IN FRONT OF S.L.V. BAR & RESTAURANT"}, {"busstop": "Rayasandra ,RAYASANDRA"}]
  },
  {
    "route_no": "346CA",
    "distance": "13.8 KM",
    "origin": "Central Silk Board",
    "destination": "Huskur",
    "departure_from_origin": "08:50,  10:30,  12:35,  14:15,  16:20,  18:00",
    "arrival_at_origin": "08:45, 10:25, 12:30, 14:10, 16:15, 17:55",
    "departure_from_destination": "08:00, 09:40, 11:45, 13:25, 15:30, 17:10",
    "arrival_at_destination": "09:35,  11:15,  13:20,  15:00,  17:05,  18:45",
    "map_json_content": [{"busstop": "Central Silk Board,MADIWALA,OPPOSITE OF BANK OF INDIA & FLYOVER"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "MICO Factory,CHANNAKESHAVA NAGARA, ELECTRONIC CITY POST,IN FRONT OF S.L.V. BAR & RESTAURANT"}, {"busstop": "Bangalore Central Jail,NAGANATHAPURA,OPPOSITE OF S.R.N.REDDYS INDUSTRIAL COMPLEX"}, {"busstop": "rayasandra new layout,NAGANATHAPURA,OPPOSITE OF MOSQUE & THE BOMBO SHOP"}, {"busstop": "Rayasandra,HOSURU POST,BESIDE OPEN AREA, HOUSES, TANK"}, {"busstop": "Gattahalli,HUSKURU POST,OPPOSITE OF GOVT. PRIMARY SCHOOL"}, {"busstop": "Huskur,SARJAPURA,IN FRONT OF SRI MADDORAMMA DEVI TEMPLE"}]
  },
  {
    "route_no": "346D",
    "distance": "19.2 KM",
    "origin": "Krishnarajendra Market",
    "destination": "CHIKKANAGAMANGALA",
    "departure_from_origin": "07:05,  09:15,  15:45,  18:30,  21:35",
    "arrival_at_origin": "07:00, 09:10, 11:45, 18:00, 20:55",
    "departure_from_destination": "06:00, 08:10, 10:45, 16:55, 19:40",
    "arrival_at_destination": "08:05,  10:15,  16:50,  19:35,  22:35",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "MICO Factory,CHANNAKESHAVA NAGARA, ELECTRONIC CITY POST,IN FRONT OF S.L.V. BAR & RESTAURANT"}, {"busstop": "DODDANAGAMANGALA,ELECTRONIC CITY POST,IN FRONT OF SRI VENKATESHWARA SWAMI TEMPLE"}, {"busstop": "CHIKKANAGAMANGALA,ANEKAL TALUKU,OPPOSITE OF GOVT. PRIMARY SCHOOL & ASHWATHA KATTE"}]
  },
  {
    "route_no": "346E",
    "distance": "18.6 KM",
    "origin": "Krishnarajendra Market",
    "destination": "DODDA THOGOOR",
    "departure_from_origin": "06:05,  08:30,  11:15,  16:00,  18:55,  22:00",
    "arrival_at_origin": "06:00, 08:25, 11:10, 18:50, 21:20",
    "departure_from_destination": "05:00, 07:15, 10:10, 17:40, 20:10",
    "arrival_at_destination": "07:10,  09:40,  12:15,  17:10,  20:05,  23:00",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konappana Agrahara"}, {"busstop": "DODDA THOGOOR,ELECTRONIC CITY-BEGURU HUBLI POST,BESIDE SHRI PATALAMMA DEVI TEMPLE"}]
  },
  {
    "route_no": "346F",
    "distance": "31.5 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Jigani",
    "departure_from_origin": "05:50,  09:30,  14:15,  21:10",
    "arrival_at_origin": "05:45, 09:00, 17:20",
    "departure_from_destination": "04:20, 07:25, 15:50",
    "arrival_at_destination": "07:20,  10:55,  15:45,  22:25",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF LAVAKUSHA BULDING"}, {"busstop": "Electronic City,ELECTRONIC CITY,OPPOSITE OF N.T.T.F. INSTITUTE"}, {"busstop": "SIMENSE"}, {"busstop": "Electronic City Wipro Gate"}, {"busstop": "Shikaripalya Cross"}, {"busstop": "Shikaripalya,OPPOSITE OF GOVERNMENT JUNIOR URDU SCHOOL"}, {"busstop": "Hulimangala,HULIMANGALA POST & JIGANI HUBLI,BESIDE OPEN AREA & FIELD"}, {"busstop": "Vabasandra,HULIMANGALA POST & JIGANI HUBLI,OPPOSITE OF BASAVESHWARA TEMPLE"}, {"busstop": "Kyalasanahalli,HULIMANGALA POST & JIGANI HUBLI,IN FRONT OF VEENA PROVISION STORE"}, {"busstop": "Bandenallasandra,JIGANI HUBLI,OPPOSITE OF GOVERNMENT JUNIOR PRIMARY SCHOOL"}, {"busstop": "MARUTHI NAGARA,BOMMASANDRA INDUSTRIAL AREA,IN FRONT OF SUNSHINE INDUSTRIES"}, {"busstop": "Jigani,JIGANI HOBLI, ANEKAL TALUK,IN FRONT OF MUNISWAMY REDDY BUILDING"}]
  },
  {
    "route_no": "346G",
    "distance": "19 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Parappana Agrahara",
    "departure_from_origin": "09:40,  12:25",
    "arrival_at_origin": "09:35, 12:20",
    "departure_from_destination": "08:25, 11:05",
    "arrival_at_destination": "10:45,  13:35",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "Channakeshvanagar,CHANNAKESHAVA NAGARA, ELECTRONIC CITY POST,BESIDE CHANNAKESHAVA HIGH SCHOOL"}, {"busstop": "Parappana Agrahara,ELECTRONIC CITY POST,OPPOSITE OF SRI GANAPATHI TEMPLE & ASHWATHA KATTE"}]
  },
  {
    "route_no": "346H",
    "distance": "25.7 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Parappana Agrahara",
    "departure_from_origin": "06:45,  09:05,  15:35,  18:20,  21:05",
    "arrival_at_origin": "06:40, 09:00, 11:45, 18:15, 20:35",
    "departure_from_destination": "05:10, 07:55, 10:40, 17:10, 19:30",
    "arrival_at_destination": "07:50,  10:10,  16:40,  19:25,  22:10",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "Channakeshvanagar,CHANNAKESHAVA NAGARA, ELECTRONIC CITY POST,BESIDE CHANNAKESHAVA HIGH SCHOOL"}, {"busstop": "Parappana Agrahara,ELECTRONIC CITY POST,OPPOSITE OF SRI GANAPATHI TEMPLE & ASHWATHA KATTE"}]
  },
  {
    "route_no": "346J",
    "distance": "17.1 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Bangalore Central Jail",
    "departure_from_origin": "05:30,  07:30,  10:00,  13:45,  18:00,  20:35",
    "arrival_at_origin": "05:25, 07:25, 09:55, 17:55, 20:05",
    "departure_from_destination": "04:30, 06:30, 08:25, 16:55, 19:05",
    "arrival_at_destination": "06:25,  08:25,  10:55,  14:45,  19:00,  21:30",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "MICO Factory,CHANNAKESHAVA NAGARA, ELECTRONIC CITY POST,IN FRONT OF S.L.V. BAR & RESTAURANT"}, {"busstop": "Bangalore Central Jail,NAGANATHAPURA,IN FRONT OF S.R.N.REDDYS INDUSTRIAL COMPLEX"}]
  },
  {
    "route_no": "346K",
    "distance": "27 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Hulimangala",
    "departure_from_origin": "10:00,  13:35,  16:30",
    "arrival_at_origin": "09:55, 13:30, 16:25",
    "departure_from_destination": "08:40, 12:10, 15:05",
    "arrival_at_destination": "11:20,  15:00,  17:50",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF LAVAKUSHA BULDING"}, {"busstop": "Electronic City,ELECTRONIC CITY,OPPOSITE OF N.T.T.F. INSTITUTE"}, {"busstop": "BHEL"}, {"busstop": "Shikaripalya Cross"}, {"busstop": "Shikaripalya,OPPOSITE OF GOVERNMENT JUNIOR URDU SCHOOL"}, {"busstop": "Hulimangala,HULIMANGALA POST & JIGANI HUBLI,BESIDE OPEN AREA & FIELD"}, {"busstop": "Nanjapura Cross,JIGANI HUBLI,BESIDE OPEN AREA"}, {"busstop": "Hulimangala,JIGANI HUBLI,IN FRONT OF VILLAGE PANCHAYAT OFFICE"}]
  },
  {
    "route_no": "346M",
    "distance": "22.6 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Gollahalli",
    "departure_from_origin": "09:10,  15:15",
    "arrival_at_origin": "08:40, 11:50",
    "departure_from_destination": "07:30, 10:35",
    "arrival_at_destination": "10:30,  16:30",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konnappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF AXIS BANK"}, {"busstop": "Electronic City,ELECTRONIC CITY,OPPOSITE OF N.T.T.F. INSTITUTE"}, {"busstop": "BHEL Gate"}, {"busstop": "Shikaripalya Cross"}, {"busstop": "Shikaripalya,HULIMANGALA POST,IN FRONT OF GOVERNMENT JUNIOR URDU SCHOOL"}, {"busstop": "Gollahalli,ELECTRONIC CITY,OPPOSITE OF CHANNAREDDY BUILDING"}]
  },
  {
    "route_no": "346P",
    "distance": "21.8 KM",
    "origin": "Shivajinagar Bus Station",
    "destination": "Shikaripalya",
    "departure_from_origin": "09:25,  12:20,  14:50,  17:45",
    "arrival_at_origin": "09:20, 12:15, 14:45, 17:40",
    "departure_from_destination": "08:10, 11:05, 13:35, 16:30",
    "arrival_at_destination": "10:35,  13:30,  16:00,  18:55",
    "map_json_content": [{"busstop": "Shivajinagar Bus Station"}, {"busstop": "MG Road "}, {"busstop": "Mayohall"}, {"busstop": "St. Patrics Church"}, {"busstop": "Johnson Market"}, {"busstop": "Anepalya"}, {"busstop": "Adugodi"}, {"busstop": "Adugodi Police Quarters"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konappana Agrahara,ELECTRONIC CITY POST,IN FRONT OF LAVAKUSHA BULDING"}, {"busstop": "Electronic City,ELECTRONIC CITY,OPPOSITE OF N.T.T.F. INSTITUTE"}, {"busstop": "BHEL Gate"}, {"busstop": "Electronic City Wipro Gate"}, {"busstop": "Shikaripalya,OPPOSITE OF GOVERNMENT JUNIOR URDU SCHOOL"}]
  },
  {
    "route_no": "346T",
    "distance": "24 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Dodda Thugur Muneshwara Temple",
    "departure_from_origin": "08:15,  15:25,  18:10,  21:10",
    "arrival_at_origin": "08:10, 11:00, 18:05, 20:25",
    "departure_from_destination": "07:05, 09:50, 17:00, 19:20",
    "arrival_at_destination": "09:20,  16:30,  19:15,  22:30",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "PESCollege"}, {"busstop": "Konappana Agrahara"}, {"busstop": "Dodda Thugur Muneshwara Temple"}]
  },
  {
    "route_no": "346V",
    "distance": "21.5 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "DODDANAGAMANGALA",
    "departure_from_origin": "09:25,  12:10,  14:30,  17:15",
    "arrival_at_origin": "09:20, 12:05, 14:25, 17:10",
    "departure_from_destination": "08:15, 11:00, 13:20, 16:05",
    "arrival_at_destination": "10:30,  13:15,  15:35,  18:20",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar TTMC"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "MICO Factory"}, {"busstop": "DODDANAGAMANGALA,ELECTRONIC CITY POST,IN FRONT OF SRI VENKATESHWARA SWAMI TEMPLE"}]
  },
  {
    "route_no": "347",
    "distance": "14 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Kudlu",
    "departure_from_origin": "09:45,  14:25,  15:20,  16:40,  17:30,  18:40,  20:20",
    "arrival_at_origin": "08:55, 09:40, 11:40, 12:00, 16:35, 17:25, 18:25, 20:15",
    "departure_from_destination": "08:05, 08:45, 10:45, 11:05, 15:45, 16:25, 17:35, 19:05",
    "arrival_at_destination": "10:40,  15:15,  16:20,  17:30,  18:35,  19:30,  21:20",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Somasundarapalya Cross"}, {"busstop": "Kudlu Panchayat office,KOODLU,OPPOSITE OF CORPORATION BANK"}, {"busstop": "Kudlu ,KOODLU,OPPOSITE OF KOODLU DIGITAL STUDIO"}]
  },
  {
    "route_no": "347A",
    "distance": "17.5 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Chikkabegur",
    "departure_from_origin": "09:00,  11:30,  13:35,  15:40,  18:05",
    "arrival_at_origin": "08:55, 11:25, 13:30, 15:35, 18:05",
    "departure_from_destination": "08:00, 10:30, 12:35, 14:40, 17:10",
    "arrival_at_destination": "10:00,  12:30,  14:35,  16:40,  19:05",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "Chikkabegur"}]
  },
  {
    "route_no": "347B",
    "distance": "15.9 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Kudlu",
    "departure_from_origin": "08:20,  10:10,  12:25,  14:15,  16:20",
    "arrival_at_origin": "10:05, 12:20, 14:10, 16:15, 18:05",
    "departure_from_destination": "09:15, 11:30, 13:20, 15:30, 17:15",
    "arrival_at_destination": "09:10,  11:00,  13:15,  15:00,  17:10",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Kudlu "}]
  },
  {
    "route_no": "347C",
    "distance": "17.5 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Chikkabegur",
    "departure_from_origin": "08:55,  17:50",
    "arrival_at_origin": "08:25, 17:45",
    "departure_from_destination": "07:20, 16:35",
    "arrival_at_destination": "10:00,  18:55",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "Chikkabegur"}]
  },
  {
    "route_no": "347D",
    "distance": "16.9 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Somasundarapalya",
    "departure_from_origin": "06:00,  08:00,  10:00,  14:20,  16:30,  21:00",
    "arrival_at_origin": "05:55, 07:55, 09:55, 14:15, 16:25, 20:20",
    "departure_from_destination": "05:00, 07:00, 09:00, 13:25, 15:25, 19:20",
    "arrival_at_destination": "06:55,  08:55,  10:55,  15:20,  17:30,  22:00",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Somasundarapalya"}]
  },
  {
    "route_no": "347E",
    "distance": "17.5 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Somasundarapalya",
    "departure_from_origin": "05:50,  07:40,  10:00,  15:10,  17:10,  19:35",
    "arrival_at_origin": "07:35, 09:55, 17:05, 19:30, 22:00",
    "departure_from_destination": "06:45, 09:00, 16:10, 18:30, 21:00",
    "arrival_at_destination": "06:40,  08:30,  10:55,  16:05,  18:10,  20:30",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Somasundarapalya"}]
  },
  {
    "route_no": "347F",
    "distance": "20.3 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Central Jail",
    "departure_from_origin": "05:50,  08:05,  10:30,  14:30,  16:50,  19:45,  20:15,  22:05",
    "arrival_at_origin": "08:00, 10:25, 16:45, 19:40, 21:50, 22:00",
    "departure_from_destination": "06:55, 09:15, 15:35, 18:35, 21:00, 21:05",
    "arrival_at_destination": "06:50,  09:10,  11:40,  15:30,  18:00,  20:55,  21:00,  23:15",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "MICO Factory,CHANNAKESHAVA NAGARA, ELECTRONIC CITY POST,IN FRONT OF S.L.V. BAR & RESTAURANT"}, {"busstop": "Central Jail,PARAPPANA AGRAHARA,IN FRONT OF CENTRAL JAIL"}]
  },
  {
    "route_no": "347G",
    "distance": "16.5 KM",
    "origin": "Shivajinagar Bus Station",
    "destination": "Central Jail",
    "departure_from_origin": "06:05",
    "arrival_at_origin": "06:00, 07:55",
    "departure_from_destination": "05:15, 07:00",
    "arrival_at_destination": "06:55",
    "map_json_content": [{"busstop": "Shivajinagar Bus Station,SHIVAJI NAGARA,BESIDE BMTC BUS STAND"}, {"busstop": "Maniksha Pardeground,M.G.ROAD,BESIDE PARADE GROUND"}, {"busstop": "Mayohall"}, {"busstop": "DSouza Circle"}, {"busstop": "Johnson Market"}, {"busstop": "Anepalya"}, {"busstop": "Adugodi"}, {"busstop": "Adugodi Police Quarters"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "MICO Factory,CHANNAKESHAVA NAGARA, ELECTRONIC CITY POST,IN FRONT OF S.L.V. BAR & RESTAURANT"}, {"busstop": "NAGNATHA PURA"}, {"busstop": "Central Jail,PARAPPANA AGRAHARA,IN FRONT OF CENTRAL JAIL"}]
  },
  {
    "route_no": "347K",
    "distance": "15 KM",
    "origin": "Krishnarajendra Market",
    "destination": "AECS",
    "departure_from_origin": "06:55,  09:25,  15:05,  19:30,  21:50",
    "arrival_at_origin": "06:50, 09:20, 11:25, 18:55, 21:45",
    "departure_from_destination": "06:00, 08:20, 10:30, 17:45, 20:40",
    "arrival_at_destination": "07:50,  10:25,  16:05,  20:35,  22:35",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garvebhavi Palya"}, {"busstop": "Kudlu Gate"}, {"busstop": "KUDLU PANCHAYAT OFFICE"}, {"busstop": "AECS,KOODLU,SINGSANDRA,IN FRONT OF GANAPATHI TEMPLE"}]
  },
  {
    "route_no": "347M",
    "distance": "18.3 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Subhash Nagara",
    "departure_from_origin": "05:20,  07:25,  09:30,  15:35,  19:35",
    "arrival_at_origin": "07:20, 09:25, 11:55, 19:30, 21:50",
    "departure_from_destination": "06:25, 08:30, 11:00, 18:30, 20:50",
    "arrival_at_destination": "06:20,  08:25,  10:30,  16:35,  20:40",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala"}, {"busstop": "Roopena Agrahar"}, {"busstop": "Bommanahalli"}, {"busstop": "Garebhavi Palya"}, {"busstop": "Koodlu Gate"}, {"busstop": "Singasandra"}, {"busstop": "Hosa Road"}, {"busstop": "Subhash Nagara,BESIDE BACK APPARTMENT"}]
  },
  {
    "route_no": "348A",
    "distance": "16.7 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Mangammana Palya",
    "departure_from_origin": "07:00,  09:10,  11:45,  15:35,  17:35,  20:10,  22:15",
    "arrival_at_origin": "06:55, 09:05, 11:40, 17:30, 20:05, 22:10",
    "departure_from_destination": "06:00, 08:05, 10:40, 16:35, 19:05, 21:15",
    "arrival_at_destination": "08:00,  10:10,  12:45,  16:30,  18:35,  21:10,  23:05",
    "map_json_content": [{"busstop": "Kempegowda Bus Station,MAJESTIC,BESIDE AMAR HOTEL"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Central Silk Board,MADIWALA,IN FRONT OF SHRI KRISHNA BHAVAN HOTEL"}, {"busstop": "HSR Apartment,KORAMANAGALA, HSR LAYOUT,IN FRONT OF ARANYA MULTI CUISINE RESTAURANT"}, {"busstop": "Jn of 5th main"}, {"busstop": "HSR 7th Sector"}, {"busstop": "Mangammana Palya,MANGAMMANA PALYA,OPPOSITE OF MUNIYAPPA COMPLEX"}]
  },
  {
    "route_no": "348B",
    "distance": "20.5 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Parangipalya",
    "departure_from_origin": "07:10,  14:50",
    "arrival_at_origin": "09:45, 17:15",
    "departure_from_destination": "08:30, 16:05",
    "arrival_at_destination": "08:25,  16:00",
    "map_json_content": [{"busstop": "Kempegowda Bus Station,MAJESTIC,BESIDE AMAR HOTEL"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Poornima Talkies,K.S.GARDEN,BESIDE KAVERI ENTERPRISES"}, {"busstop": "Lalbhagh Main Gate,DODDAMAVALLI,BESIDE DURGA BEARINGS PVT.LTD."}, {"busstop": "Lalbhag West Gate,BASAVANAGUDI,BESIDE TECHNOMARK TELEVISION"}, {"busstop": "RVTeachers College,BASAVANAGUDI,OPPOSITE OF MEGA AGENSIS"}, {"busstop": "Vijaya College,BASAVANAGUDI,BESIDE VIJAYA COLLEGE"}, {"busstop": "Madhavan Park,JAYANAGARA 2ND BLOCK,OPPOSITE OF RAMAKRISHNA NURSING HOME"}, {"busstop": "Jayanagara 3rd block,JAYANAGARA 3RD BLOCK,OPPOSITE OF SYNDICATE BANK"}, {"busstop": "Jayanagara Bus Stand,JAYANAGARA 4TH BLOCK,BESIDE KCC BUILDING"}, {"busstop": "Jayanagara General Hospital,JAYANAGARA 4TH T BLOCK,BESIDE UDUPI UPAHAR"}, {"busstop": "Carmel Convent Jayanagara,JAYANAGARA 4TH T BLOCK,BESIDE CARMEL CONVENT"}, {"busstop": "Pump House Jayanagar East End,JAYANAGARA 9TH BLOCK,BESIDE SURABHI ARTS"}, {"busstop": "Jayadeva Hospital,JAYANAGARA 9TH BLOCK,HEALTHY INTERNATIONAL HOMEOPATHY"}, {"busstop": "MICO Layout,BTM LAYOUT 1ST STAGE"}, {"busstop": "Udupi Garden 16th Main,BTM LAYOUT,BESIDE BANGLOR ONE CENTER"}, {"busstop": "BTM Layout Bus Stop,BTM LAYOUT 2ND STAGE,IN FROUNT OF KUVEMPUNAGRA BUS STAND"}, {"busstop": "Central Silk Board,BTM LAYOUT MADIWALA,OPPOSITE OF CENTRAL SILK BOARD"}, {"busstop": "HSR Apartment,KORAMANAGALA, HSR LAYOUT,IN FRONT OF ARANYA MULTI CUISINE RESTAURANT"}, {"busstop": "14th Main HSR Layout,HSR LAYOUT,IN FRONT OF WESTMEAD CLINIC"}, {"busstop": "HSR BDA COMPLEX"}, {"busstop": "HSR Club"}, {"busstop": "Parangipalya,HSR LAYOUT 2ND SECTOR,IN FRONT OF KROMTEK SYSTEMS, & L.J.IYENGAR BAKERY"}]
  },
  {
    "route_no": "348C",
    "distance": "18.2 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Somasundarapalya",
    "departure_from_origin": "05:00,  06:55,  09:05,  15:15,  17:25,  20:00",
    "arrival_at_origin": "06:50, 09:00, 11:35, 17:20, 19:55, 22:05",
    "departure_from_destination": "05:55, 08:00, 10:35, 16:20, 18:55, 21:05",
    "arrival_at_destination": "05:50,  07:55,  10:05,  16:15,  18:25,  20:00",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Central Silk Board,MADIWALA,IN FRONT OF SHRI KRISHNA BHAVAN HOTEL"}, {"busstop": "HSR Apartment,KORAMANAGALA, HSR LAYOUT,IN FRONT OF ARANYA MULTI CUISINE RESTAURANT"}, {"busstop": "14th Main HSR Layout,HSR LAYOUT,IN FRONT OF WESTMEAD CLINIC"}, {"busstop": "HSR BDA COMPLEX"}, {"busstop": "HSR Club"}, {"busstop": "Parangipalya,HSR LAYOUT 2ND SECTOR,IN FRONT OF KROMTEK SYSTEMS, & L.J.IYENGAR BAKERY"}, {"busstop": "Aishwarya Appartments"}, {"busstop": "Somasundarapalya,SOMASUNDRAPALYA LAYOUT HSR POST,OPPOSITE OF FRIEND TAILOR & AMITH BAKERY"}]
  },
  {
    "route_no": "348F",
    "distance": "18 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Parangipalya",
    "departure_from_origin": "06:00,  09:50,  15:40,  20:10",
    "arrival_at_origin": "07:50, 12:00, 17:25, 20:05, 22:00",
    "departure_from_destination": "07:00, 11:10, 16:35, 19:10, 21:10",
    "arrival_at_destination": "06:55,  10:40,  16:30,  21:05",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Central Silk Board,MADIWALA,IN FRONT OF SHRI KRISHNA BHAVAN HOTEL"}, {"busstop": "HSR Apartment,KORAMANAGALA, HSR LAYOUT,IN FRONT OF ARANYA MULTI CUISINE RESTAURANT"}, {"busstop": "14th Main HSR Layout,HSR LAYOUT,IN FRONT OF WESTMEAD CLINIC"}, {"busstop": "HSR BDA COMPLEX"}, {"busstop": "HSR Layout 2nd Sector"}, {"busstop": "HSR Club"}, {"busstop": "Parangipalya,HSR LAYOUT 2ND SECTOR,IN FRONT OF KROMTEK SYSTEMS, & L.J.IYENGAR BAKERY"}]
  },
  {
    "route_no": "348G",
    "distance": "17 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Hosapallya",
    "departure_from_origin": "06:25,  08:50,  10:50,  16:25,  18:50,  21:15",
    "arrival_at_origin": "06:20, 08:45, 10:45, 16:20, 18:45, 20:45",
    "departure_from_destination": "05:30, 07:50, 09:50, 15:25, 17:50, 19:50",
    "arrival_at_destination": "07:20,  09:45,  11:45,  17:20,  19:45,  22:10",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Central Silk Board,MADIWALA,IN FRONT OF SHRI KRISHNA BHAVAN HOTEL"}, {"busstop": "HSR Apartment,KORAMANAGALA, HSR LAYOUT,IN FRONT OF ARANYA MULTI CUISINE RESTAURANT"}, {"busstop": "Jn of 5th main"}, {"busstop": "HSR 7th Sector"}, {"busstop": "Mangammana Palya,MANGAMMANA PALYA,IN FRONT OF MUNIYAPPA COMPLEX"}, {"busstop": "ITI LAYOUT"}, {"busstop": "Hosapallya,BOMMANAHALLI  POST,OPPOSITE OF DHANAVANTHRI MEDICAL & GENERAL STORES"}]
  },
  {
    "route_no": "348H",
    "distance": "17.6 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "HSR 19th Main 13th Cross",
    "departure_from_origin": "09:35,  12:10,  14:15,  16:40,  18:45",
    "arrival_at_origin": "09:30, 12:05, 14:10, 16:35, 18:45",
    "departure_from_destination": "08:30, 11:05, 13:15, 15:40, 17:45",
    "arrival_at_destination": "10:35,  13:10,  15:10,  17:40,  19:45",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Central Silk Board,MADIWALA,IN FRONT OF SHRI KRISHNA BHAVAN HOTEL"}, {"busstop": "HSR Apartment,KORAMANAGALA, HSR LAYOUT,IN FRONT OF ARANYA MULTI CUISINE RESTAURANT"}, {"busstop": "14th Main HSR Layout,HSR LAYOUT,IN FRONT OF WESTMEAD CLINIC"}, {"busstop": "HSR BDA COMPLEX"}, {"busstop": "HSR Layout 2nd Sector"}, {"busstop": "Parangipalya"}, {"busstop": "NIFT COLLEGE,HSR LAYOUT 2ND SECTOR,OPPOSITE OF NIFT COLLEGE"}, {"busstop": "HSR 19th Main 13th Cross,HSR LAYOUT 1ST SECTOR,IN FRONT OF PHD PIZZA HUT & OPPOSITE OF LISS PRACADE"}]
  },
  {
    "route_no": "348J",
    "distance": "17.8 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Mangammana Palya",
    "departure_from_origin": "09:10,  11:10,  13:35,  15:35,  18:00",
    "arrival_at_origin": "09:05, 11:05, 13:30, 15:30, 17:55",
    "departure_from_destination": "08:10, 10:10, 12:35, 14:35, 17:00",
    "arrival_at_destination": "10:05,  12:05,  14:30,  16:30,  18:55",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar Bus Stand,SHANTHI NAGARA,BESIDE BMTC BUS STAND BIG BAZAAR"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "Krupanidhi College"}, {"busstop": "Madiwala MARKET"}, {"busstop": "Central Silk Board,MADIWALA,IN FRONT OF SHRI KRISHNA BHAVAN HOTEL"}, {"busstop": "HSR Apartment,KORAMANAGALA, HSR LAYOUT,IN FRONT OF ARANYA MULTI CUISINE RESTAURANT"}, {"busstop": "Jn of 5th main"}, {"busstop": "HSR 7th Sector"}, {"busstop": "Mangammana Palya,MANGAMMANA PALYA,IN FRONT OF MUNIYAPPA COMPLEX"}]
  },
  {
    "route_no": "333J",
    "distance": "14 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "HAL Main Gate",
    "departure_from_origin": "09:15,  11:00,  13:10,  14:55,  17:05",
    "arrival_at_origin": "09:10, 10:55, 13:05, 14:50, 17:00, 18:45",
    "departure_from_destination": "08:25, 10:10, 12:20, 14:05, 16:15, 18:00",
    "arrival_at_destination": "10:05,  11:50,  14:00,  15:45,  17:55",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation"}, {"busstop": "St Joseph Boys High school"}, {"busstop": "Richmond Circle"}, {"busstop": "Mayohall"}, {"busstop": "Hosmat Hospital"}, {"busstop": "Military Accounts Office"}, {"busstop": "Commando Hospital"}, {"busstop": "Domlur"}, {"busstop": "KODIHALLI"}, {"busstop": "Manipal Hospital"}, {"busstop": "Murgeshpalya,Opp.TOTAL MALL"}, {"busstop": "Rajeshwari Talkies"}, {"busstop": "HAL Main Gate"}]
  },
  {
    "route_no": "333K",
    "distance": "25.1 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Ambedkar Nagara",
    "departure_from_origin": "09:15,  12:10,  14:40,  17:35",
    "arrival_at_origin": "09:10, 12:05, 14:35, 17:30",
    "departure_from_destination": "08:00, 10:55, 13:25, 16:20",
    "arrival_at_destination": "10:25,  13:20,  15:50,  18:45",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation"}, {"busstop": "St Joseph Boys High school"}, {"busstop": "Richmond Circle"}, {"busstop": "Mayohall"}, {"busstop": "Hosmat Hospital"}, {"busstop": "Military Accounts Office"}, {"busstop": "Commando Hospital"}, {"busstop": "Domlur"}, {"busstop": "KODIHALLI"}, {"busstop": "Manipal Hospital"}, {"busstop": "Murgeshpalya,Opp.TOTAL MALL"}, {"busstop": "Rajeshwari Talkies"}, {"busstop": "HAL Main Gate"}, {"busstop": "Helicopter Division"}, {"busstop": "HAL Kalyanamantapa"}, {"busstop": "Borewell"}, {"busstop": "Maratahalli"}, {"busstop": "Maratahalli Bridge"}, {"busstop": "Spice Garden"}, {"busstop": "Kundalahalli Gate"}, {"busstop": "Thubarahalli"}, {"busstop": "Siddapura"}, {"busstop": "Ramgundanhalli"}, {"busstop": "Varthuru Kodi"}, {"busstop": "Brook Bond"}, {"busstop": "White Field Post Office,WHITEFIELD,BESIDE VASWANI PINNACLE(LEFT SIDE)"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}]
  },
  {
    "route_no": "333L",
    "distance": "35.3 KM",
    "origin": "Chandra Layout",
    "destination": "Kadugodi",
    "departure_from_origin": "11:55",
    "arrival_at_origin": "07:05, 10:50, 11:25, 16:10",
    "departure_from_destination": "05:30, 09:05, 09:35, 14:25",
    "arrival_at_destination": "13:40",
    "map_json_content": [{"busstop": "Chandra Layout,CHANDRA LAYOUT,BESIDE B.M.T.C.BUS STAND"}, {"busstop": "Chandra Layout Ganesh temple,CHANDRA LAYOUT,BESIDE POST OFFICE"}, {"busstop": "Chandra Public School Chandra Layout,CHANDRA LAYOUT,BESIDE SPIRIT JUNCTION"}, {"busstop": "Income Tax Layout,VIJAYANAGARA,BESIDE A.M.HOSPITAL"}, {"busstop": "Vijayanagara TTMC,TTMC"}, {"busstop": "Maruthi mandira,VIJAYANAGARA,BESIDE MATHA AIR TRAVELS"}, {"busstop": "Vijayanagara,VIJAYANAGARA,IN FRONT OF INDRAPRASTHA HOTEL"}, {"busstop": "Manu Vana Vijayanagara,VIJAYANAGARA,BESIDE STATE BANK INDIA"}, {"busstop": "Magadi Road TollGate"}, {"busstop": "Prasanna Talkies Magadi Road"}, {"busstop": "Rajajinagara 6th Block,RAJAJINAGARA,BESIDE VITTAL KRISHNA BAKERY"}, {"busstop": "Gopalpura Rajajinagara,RAJAJINAGARA,BESIDE JAYANTHILAL & CO"}, {"busstop": "Sujatha Talkies,OPPOSITE OF WOMEN UNIVERSITY"}, {"busstop": "Okalipuram"}, {"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation Office"}, {"busstop": "Mallya Hospital"}, {"busstop": "Richmond Circle"}, {"busstop": "StJosephs College"}, {"busstop": "Mayohall"}, {"busstop": "Ele B Stn"}, {"busstop": "Trinity Circle"}, {"busstop": "Philips Millenium"}, {"busstop": "Halasuru"}, {"busstop": "BMTC Depot-6"}, {"busstop": "Binnamangala"}, {"busstop": "Isolation Hospital"}, {"busstop": "NGEF"}, {"busstop": "Benniganahalli"}, {"busstop": "Tin Factory,DOORAVANI NAGARA,OPPOSITE OF SUDHIR WEIGH BRIDGE"}, {"busstop": "KR Puram Railway Station,KR PURAM,BACK SIDE OF RAILWAY STATION"}, {"busstop": "B Narayanapura,DOORAVANI NAGARA,OPPOSITE OF SRI MANJUNATHA STEEL ALLOYS"}, {"busstop": "Mahadevapura Cross,HOODI,IN FRONT OF BASAVESHWARA KHANAVALI"}, {"busstop": "SINGAYYANPALLYA,HOODI,OPPOSITE OF GEARS & PINIONS PVT LTD"}, {"busstop": "Garudachar Palya,HOODI,IN FRONT OF XYLEM AIR BUS"}, {"busstop": "Bhorka Steel,GARUDACHAR PALYA,IN FRONT OF ABB. BHORUKA TECH PARK"}, {"busstop": "Hoodi,IN FRONT OF NETRA HOTEL VEG & NON VEG"}, {"busstop": "Rajapalya,BESIDE MUTHOOT FINANCE"}, {"busstop": "Pattandur Agrahara Gate,IN FRONT OF APPOLO PHARMACY"}, {"busstop": "ITPL,OPPOSITE OF I.T.P.L. MAIN GATE"}, {"busstop": "B P L,OPPOSITE OF CINEMA HALL"}, {"busstop": "Hope Farm"}, {"busstop": "Prajwal School"}, {"busstop": "Kadugodi"}]
  },
  {
    "route_no": "333N",
    "distance": "24.4 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Basavanagara Bus Stand",
    "departure_from_origin": "07:10,  09:40,  15:25,  18:10,  21:00",
    "arrival_at_origin": "06:40, 09:35, 12:05, 17:50, 20:35",
    "departure_from_destination": "05:30, 08:25, 10:55, 16:40, 19:25",
    "arrival_at_destination": "08:20,  10:50,  16:35,  19:20,  22:10",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation"}, {"busstop": "St Joseph Boys High school"}, {"busstop": "Richmond Circle"}, {"busstop": "Mayohall"}, {"busstop": "Hosmat Hospital"}, {"busstop": "Military Accounts Office"}, {"busstop": "Commando Hospital"}, {"busstop": "Domlur"}, {"busstop": "KODIHALLI"}, {"busstop": "Manipal Hospital"}, {"busstop": "Murgeshpalya,Opp.TOTAL MALL"}, {"busstop": "Rajeshwari Talkies"}, {"busstop": "HAL Main Gate"}, {"busstop": "Helicopter Division"}, {"busstop": "HAL Kalyanamantapa"}, {"busstop": "Borewell"}, {"busstop": "Maratahalli"}, {"busstop": "Maratahalli Bridge"}, {"busstop": "Spice Garden"}, {"busstop": "Kundalahalli Gate,KUNDALAHALLI,OPPOSITE OF HYPER CITY"}, {"busstop": "BEML Gate,KUNDALAHALLI,OPPOSITE OF HYPER CITY"}, {"busstop": "AECS Layout,KUNDALAHALLI,OPPOSITE OF BROOK FIELD"}, {"busstop": "CMRIT,KUNDALAHALLI,IN FRONT OF CMR INSTITUTE OF TECHNOLOGY"}, {"busstop": "Basavanagara Bus Stand"}]
  },
  {
    "route_no": "333Q",
    "distance": "21.9 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Boganahalli",
    "departure_from_origin": "06:05,  08:15,  16:20,  20:40",
    "arrival_at_origin": "06:00, 08:10, 16:15, 20:10",
    "departure_from_destination": "05:00, 07:10, 15:10, 19:00",
    "arrival_at_destination": "07:05,  09:15,  17:25,  21:45",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation"}, {"busstop": "St Joseph Boys High school"}, {"busstop": "Richmond Circle"}, {"busstop": "StJosephs College"}, {"busstop": "Mayohall"}, {"busstop": "Hosmat Hospital"}, {"busstop": "Military Accounts Office"}, {"busstop": "Commando Hospital"}, {"busstop": "Domlur"}, {"busstop": "KODIHALLI"}, {"busstop": "Manipal Hospital"}, {"busstop": "Murgeshpalya,Opp.TOTAL MALL"}, {"busstop": "Rajeshwari Talkies"}, {"busstop": "HAL Main Gate"}, {"busstop": "Helicopter Division"}, {"busstop": "HAL Kalyanamantapa"}, {"busstop": "Borewell"}, {"busstop": "Maratahalli"}, {"busstop": "Marathahalli Bridge,MARATHAHALLI,IN FRONT OF ACER GREENS"}, {"busstop": "Kada Bisanahalli,KADABEESANAHALLI,OPPOSITE OF V.R.CHAMBERS"}, {"busstop": "Panathuru,PANATHURU,IN FRONT OF MANJUNATH HAIR STYLE"}, {"busstop": "Boganahalli"}]
  },
  {
    "route_no": "334B",
    "distance": "14.1 KM",
    "origin": "Krishnarajendra Market",
    "destination": "BNagasandra",
    "departure_from_origin": "06:05,  07:45,  09:25,  15:15,  17:20,  18:55,  21:10",
    "arrival_at_origin": "06:00, 07:40, 09:20, 11:25, 17:15, 18:50, 20:30",
    "departure_from_destination": "05:20, 06:55, 08:35, 10:40, 16:30, 18:05, 19:45",
    "arrival_at_destination": "06:50,  08:30,  10:10,  16:00,  18:00,  19:40,  21:50",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET,OPPOSITE TO CHANDRA BHAVAN HOTEL"}, {"busstop": "Town Hall"}, {"busstop": "Corporation"}, {"busstop": "St .Josephs high schools"}, {"busstop": "Richmond Circle"}, {"busstop": "Mayohall"}, {"busstop": "Hosmat Hospital"}, {"busstop": "Military Accounts Office"}, {"busstop": "Commando Hospital"}, {"busstop": "Domlur"}, {"busstop": "KODIHALLI"}, {"busstop": "Manipal Hospital"}, {"busstop": "Challaghatta ,CHALLAGHATTA,OPPOSITE OF SRINIDHI SAGAR HOTEL"}, {"busstop": "BNagasandra,B.NAGASANDRA,BACK SIDE OF SHRI CHOUDESHWARI DEVI TEMPLE"}]
  },
  {
    "route_no": "334E",
    "distance": "27.4 KM",
    "origin": "Domlur",
    "destination": "Hosakote Bus Stand",
    "departure_from_origin": "06:00,  06:30,  06:40,  07:00,  07:20,  08:20,  08:50,  09:00,  09:20,  09:40,  09:55,  10:00,  10:20,  11:25,  11:55,  12:25,  14:05,  14:30,  14:35,  15:25,  15:30,  16:05,  16:25,  16:45,  17:10,  17:40,  17:55,  18:10,  18:50,  19:25,  19:50",
    "arrival_at_origin": "06:25, 08:15, 08:45, 08:55, 09:15, 09:25, 09:35, 09:55, 10:15, 11:20, 11:25, 11:55, 12:20, 14:00, 14:25, 14:30, 15:00, 17:05, 17:35, 17:50, 18:05, 18:45, 19:20, 19:45, 20:05, 21:40, 21:50, 22:20",
    "departure_from_destination": "05:15, 07:05, 07:30, 07:35, 08:00, 08:05, 08:10, 08:30, 08:50, 10:05, 10:10, 10:40, 10:55, 12:45, 13:00, 13:15, 13:45, 15:50, 16:20, 16:25, 16:50, 17:20, 18:00, 18:20, 18:40, 20:20, 20:40, 21:10",
    "arrival_at_destination": "07:25,  07:55,  08:05,  08:25,  08:45,  09:35,  10:05,  10:25,  10:35,  11:05,  11:20,  11:25,  11:45,  12:40,  13:10,  13:40,  15:20,  15:50,  15:55,  16:45,  16:50,  17:30,  17:50,  18:10,  18:20,  18:50,  19:20,  20:15,  20:40,  21:10",
    "map_json_content": [{"busstop": "Domlur"}, {"busstop": "KODIHALLI"}, {"busstop": "Manipal Hospital"}, {"busstop": "Murgeshpalya,Opp.Sir MV COLLAGE"}, {"busstop": "Rajeshwari Talkies"}, {"busstop": "HAL Main Gate"}, {"busstop": "Helicopter Division"}, {"busstop": "HAL Kalyanamantapa"}, {"busstop": "Borewell"}, {"busstop": "Maratahalli"}, {"busstop": "Maratahalli Bridge"}, {"busstop": "Spice Garden"}, {"busstop": "Kundalahalli Gate"}, {"busstop": "Thubarahalli"}, {"busstop": "Siddapura"}, {"busstop": "Ramgundanhalli"}, {"busstop": "Varthuru Kodi"}, {"busstop": "Brook Bond"}, {"busstop": "White Field"}, {"busstop": "Old Sai Baba Hospitals"}, {"busstop": "Munish Hospital"}, {"busstop": "Hope Form"}, {"busstop": "Prajwal School"}, {"busstop": "Kadugodi"}, {"busstop": "Belathuru,KADUGODI,IN FRONT OF NANDINI MILK PARLOUR"}, {"busstop": "Sai Garden"}, {"busstop": "Seegehalli Gate,KADUGODI,OPPOSITE OF GOVT PRIMARY SCHOOL"}, {"busstop": "Shell Petrol Bank"}, {"busstop": "Sai Lakshmi Factory"}, {"busstop": "Bevina Mara"}, {"busstop": "Kannamangala Gate,KANNAMANGALA,IN FRONT OF HORTICULTURE OFFICE"}, {"busstop": "Kajisonnenahalli gate,KAJI SONNENAHALLI,IN FRONT OF ANJANEYA TEMPLE"}, {"busstop": "Saffal Market,KAJI SONNENAHALLI,IN FRONT OF SAFAL DAILY FRESH"}, {"busstop": "Guruvigere Gate"}, {"busstop": "Katta Nallur Gate,KATTANALLURU CROSS,IN FRONT OF SAI PHOTO STUDIO"}, {"busstop": "Hosakote Kodi"}, {"busstop": "Hosakote High School"}, {"busstop": "Hosakote Bus Stand"}]
  },
  {
    "route_no": "335",
    "distance": "22.5 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Sai Baba Hospital",
    "departure_from_origin": "07:20,  09:50,  12:45,  15:15,  18:05,  20:30",
    "arrival_at_origin": "09:45, 12:40, 15:10, 18:00, 20:25",
    "departure_from_destination": "08:35, 11:30, 14:00, 16:50, 19:20",
    "arrival_at_destination": "08:30,  11:00,  13:55,  16:20,  19:15,  21:40",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET,OPPOSITE TO CHANDRA BHAVAN HOTEL"}, {"busstop": "Town Hall"}, {"busstop": "Corporation"}, {"busstop": "St .Josephs high schools"}, {"busstop": "Richmond Circle"}, {"busstop": "Mayohall"}, {"busstop": "Hosmat Hospital"}, {"busstop": "Military Accounts Office"}, {"busstop": "Commando Hospital"}, {"busstop": "Domlur"}, {"busstop": "KODIHALLI"}, {"busstop": "Manipal Hospital"}, {"busstop": "Murgeshpalya,Opp.Sir MV COLLAGE"}, {"busstop": "Rajeshwari Talkies"}, {"busstop": "HAL Main Gate"}, {"busstop": "Helicopter Division"}, {"busstop": "HAL Kalyanamantapa"}, {"busstop": "Borewell"}, {"busstop": "Maratahalli"}, {"busstop": "Maratahalli Bridge"}, {"busstop": "Spice Garden"}, {"busstop": "Kundalahalli Gate,KUNDALAHALLI,OPPOSITE OF HYPER CITY"}, {"busstop": "BEML Gate,KUNDALAHALLI,OPPOSITE OF HYPER CITY"}, {"busstop": "AECS Layout,KUNDALAHALLI,OPPOSITE OF BROOK FIELD"}, {"busstop": "CMRIT,KUNDALAHALLI,IN FRONT OF CMR INSTITUTE OF TECHNOLOGY"}, {"busstop": "Kundala Halli colony,KUNDALAHALLI,BESIDE KUNDALAHALLI COLONY ARCH"}, {"busstop": "Graphite India"}, {"busstop": "SAP ITPL,WHITEFIELD,IN FRONT OF SAP"}, {"busstop": "I Gate ITPL Road,WHITEFIELD,OPPOSITE OF GINGER"}, {"busstop": "KTPO,WHITEFIELD,OPPOSITE OF GE HEALTH CARE GATE"}, {"busstop": "Sai Baba Hospital,WHITEFIELD,OPPOSITE OF SRI SATHYA SAI HOSPITAL"}]
  },
  {
    "route_no": "335AA",
    "distance": "33 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Vydehi Hospital",
    "departure_from_origin": "05:30,  07:45,  08:20,  08:55,  09:30,  10:20,  12:10,  12:45,  15:00,  15:20,  15:35,  17:40,  20:30,  21:10",
    "arrival_at_origin": "07:40, 08:15, 10:15, 11:30, 12:05, 12:40, 14:55, 15:15, 15:30, 20:25, 21:00, 23:30",
    "departure_from_destination": "06:25, 06:55, 09:05, 10:10, 10:45, 11:00, 13:35, 13:55, 14:10, 19:05, 19:45, 22:20",
    "arrival_at_destination": "06:50,  09:00,  09:40,  10:15,  10:50,  11:35,  13:30,  14:05,  16:20,  16:55,  17:30,  19:00,  21:50,  22:15",
    "map_json_content": [{"busstop": "Kempegowda Bus Station,MAJESTIC,BESIDE AMAR HOTEL"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation"}, {"busstop": "St .Josephs high schools"}, {"busstop": "Richmond Circle"}, {"busstop": "Mayohall"}, {"busstop": "Hosmat Hospital"}, {"busstop": "Military Accounts Office"}, {"busstop": "Commando Hospital"}, {"busstop": "Domlur"}, {"busstop": "KODIHALLI"}, {"busstop": "Manipal Hospital"}, {"busstop": "Murgeshpalya,Opp.TOTAL MALL"}, {"busstop": "Rajeshwari Talkies"}, {"busstop": "HAL Main Gate"}, {"busstop": "Helicopter Division"}, {"busstop": "HAL Kalyanamantapa"}, {"busstop": "Borewell"}, {"busstop": "Maratahalli"}, {"busstop": "Maratahalli Bridge"}, {"busstop": "Spice Garden"}, {"busstop": "Kundalahalli Gate,KUNDALAHALLI,OPPOSITE OF HYPER CITY"}, {"busstop": "BEML Gate,KUNDALAHALLI,OPPOSITE OF HYPER CITY"}, {"busstop": "AECS Layout,KUNDALAHALLI,OPPOSITE OF BROOK FIELD"}, {"busstop": "CMRIT,KUNDALAHALLI,IN FRONT OF CMR INSTITUTE OF TECHNOLOGY"}, {"busstop": "Kundala Halli colony,KUNDALAHALLI,BESIDE KUNDALAHALLI COLONY ARCH"}, {"busstop": "Graphite India"}, {"busstop": "SAP ITPL,WHITEFIELD,IN FRONT OF SAP"}, {"busstop": "I Gate ITPL Road,WHITEFIELD,OPPOSITE OF GINGER"}, {"busstop": "KTPO,WHITEFIELD,OPPOSITE OF GE HEALTH CARE GATE"}, {"busstop": "Vydehi Hospital,WHITEFIELD,BESIDE TTMC BUS STAND"}]
  },
  {
    "route_no": "335B",
    "distance": "14.5 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Basvanagara Bus Station",
    "departure_from_origin": "06:45,  08:25,  10:05,  12:10,  15:30,  17:40,  19:30",
    "arrival_at_origin": "08:20, 10:00, 12:05, 15:25, 17:35, 19:25, 21:10",
    "departure_from_destination": "07:35, 09:15, 11:20, 14:35, 16:45, 18:35, 20:25",
    "arrival_at_destination": "07:30,  09:10,  10:50,  12:55,  16:15,  18:30,  20:20",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET,OPPOSITE TO CHANDRA BHAVAN HOTEL"}, {"busstop": "Town Hall"}, {"busstop": "Corporation Office"}, {"busstop": "St Joseph Boys High school"}, {"busstop": "Richmond Circle"}, {"busstop": "Mayohall"}, {"busstop": "Hosmat Hospital"}, {"busstop": "Military Accounts Office"}, {"busstop": "Commando Hospital"}, {"busstop": "Domlur"}, {"busstop": "KODIHALLI"}, {"busstop": "Manipal Hospital"}, {"busstop": "Murgeshpalya,Opp.Sir MV COLLAGE"}, {"busstop": "Rajeshwari Talkies"}, {"busstop": "HAL Main Gate"}, {"busstop": "Annasandra Palya"}, {"busstop": "Basvanagara Bus Station,HAL,BESIDE BASAVESHWARA STATUE"}]
  },
  {
    "route_no": "335C",
    "distance": "14.1 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Lal Bahadur Shastri Nagara",
    "departure_from_origin": "06:45,  08:10,  10:10,  11:45,  15:25,  17:45,  19:30,  21:35",
    "arrival_at_origin": "06:40, 08:10, 10:05, 11:40, 15:20, 17:25, 19:20, 21:05",
    "departure_from_destination": "06:00, 07:30, 09:20, 10:55, 14:35, 16:40, 18:35, 20:20",
    "arrival_at_destination": "07:25,  08:50,  10:50,  12:30,  16:10,  18:30,  20:15,  22:15",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET,OPPOSITE TO CHANDRA BHAVAN HOTEL"}, {"busstop": "Town Hall"}, {"busstop": "Corporation Office"}, {"busstop": "St Joseph Boys High school"}, {"busstop": "Richmond Circle"}, {"busstop": "Mayohall"}, {"busstop": "Hosmat Hospital"}, {"busstop": "Military Accounts Office"}, {"busstop": "Commando Hospital"}, {"busstop": "Domlur"}, {"busstop": "KODIHALLI"}, {"busstop": "Manipal Hospital"}, {"busstop": "Murgeshpalya,Opp.Sir MV COLLAGE"}, {"busstop": "Rajeshwari Talkies"}, {"busstop": "HAL Main Gate"}, {"busstop": "Lal Bahadur Shastri Nagara,HAL,OPPOSITE OF KARNAUJIYA MENS PARLOUR"}]
  },
  {
    "route_no": "335F",
    "distance": "14.5 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Lal Bahadur Shastri Nagara",
    "departure_from_origin": "06:30,  08:15,  10:30,  14:35,  18:30,  21:10",
    "arrival_at_origin": "06:25, 08:10, 10:25, 16:15, 20:20",
    "departure_from_destination": "05:40, 07:20, 09:35, 15:25, 19:50",
    "arrival_at_destination": "07:15,  09:05,  11:20,  15:20,  19:20,  22:00",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation Office"}, {"busstop": "St Joseph Boys High school"}, {"busstop": "Richmond Circle"}, {"busstop": "StJosephs College"}, {"busstop": "Mayohall"}, {"busstop": "Hosmat Hospital"}, {"busstop": "Military Accounts Office"}, {"busstop": "Commando Hospital"}, {"busstop": "Domlur"}, {"busstop": "KODIHALLI"}, {"busstop": "Manipal Hospital"}, {"busstop": "Murgeshpalya,Opp.Sir MV COLLAGE"}, {"busstop": "Rajeshwari Talkies"}, {"busstop": "HAL Main Gate"}, {"busstop": "Lal Bahadur Shastri Nagara,HAL,OPPOSITE OF KARNAUJIYA MENS PARLOUR"}]
  },
  {
    "route_no": "335H",
    "distance": "15 KM",
    "origin": "HAL Main Gate",
    "destination": "Kadugodi",
    "departure_from_origin": "06:00,  06:40,  07:05,  07:20,  07:40,  07:55,  08:20,  08:45,  09:00,  09:20,  09:35,  10:00,  10:25,  11:05,  11:25,  11:35,  11:40,  12:05,  12:25,  12:30,  13:15,  13:20,  14:10,  15:00,  15:35,  15:45,  15:50,  15:55,  16:40,  17:05,  17:15,  17:25,  17:35,  17:50,  18:20,  19:05,  19:15,  19:20,  20:25,  21:00,  21:05,  21:10,  21:20,  22:30,  22:40",
    "arrival_at_origin": "06:35, 07:00, 07:15, 07:35, 07:50, 08:15, 08:40, 08:55, 09:15, 09:30, 09:55, 10:20, 10:35, 11:20, 11:30, 11:35, 12:00, 12:25, 12:40, 13:10, 13:15, 14:05, 14:55, 15:30, 15:45, 16:35, 17:00, 17:10, 17:20, 17:30, 17:50, 18:15, 19:00, 19:10, 19:15, 20:20, 20:55, 21:05, 21:15, 22:25, 22:30, 22:40",
    "departure_from_destination": "05:55, 06:30, 06:50, 07:05, 07:30, 07:55, 08:10, 08:30, 08:45, 09:10, 09:35, 09:50, 10:35, 10:45, 10:50, 11:15, 11:40, 11:55, 12:25, 12:30, 13:20, 14:10, 14:45, 15:00, 15:50, 16:15, 16:25, 16:35, 16:45, 17:05, 17:30, 18:15, 18:25, 18:30, 19:35, 20:10, 20:20, 20:30, 21:40, 21:50, 22:00",
    "arrival_at_destination": "06:45,  07:25,  07:50,  08:05,  08:25,  08:40,  09:05,  09:30,  09:45,  10:05,  10:15,  10:45,  11:10,  11:50,  12:10,  12:20,  12:25,  12:50,  13:10,  13:15,  14:00,  14:05,  14:55,  15:45,  16:20,  16:30,  16:35,  16:40,  17:25,  17:50,  18:00,  18:10,  18:20,  18:30,  19:05,  19:50,  20:00,  20:05,  21:10,  21:45,  21:55,  22:05,  23:10,  23:20",
    "map_json_content": [{"busstop": "HAL Main Gate"}, {"busstop": "Helicopter Division"}, {"busstop": "HAL Kalyanamantapa"}, {"busstop": "Borewell"}, {"busstop": "Maratahalli"}, {"busstop": "Maratahalli Bridge"}, {"busstop": "Spice Garden"}, {"busstop": "Kundalahalli Gate,KUNDALAHALLI,OPPOSITE OF HYPER CITY"}, {"busstop": "BEML Gate,KUNDALAHALLI,OPPOSITE OF HYPER CITY"}, {"busstop": "AECS Layout,KUNDALAHALLI,OPPOSITE OF BROOK FIELD"}, {"busstop": "CMRIT,KUNDALAHALLI,IN FRONT OF CMR INSTITUTE OF TECHNOLOGY"}, {"busstop": "Kundala Halli colony,KUNDALAHALLI,BESIDE KUNDALAHALLI COLONY ARCH"}, {"busstop": "Graphite India"}, {"busstop": "I Gate ITPL Road,WHITEFIELD,OPPOSITE OF GINGER"}, {"busstop": "KTPO,WHITEFIELD,OPPOSITE OF GE HEALTH CARE GATE"}, {"busstop": "Vydehi Hospital,WHITEFIELD,BESIDE TTMC BUS STAND"}, {"busstop": "SJR Park ITPL,WHITEFIELD,IN FRONT OF SJR GROUP"}, {"busstop": "Sai Baba Hospital,WHITEFIELD,OPPOSITE OF SRI SATHYA SAI HOSPITAL"}, {"busstop": "ITPL Back Gate,WHITEFIELD,IN FRONT OF ORACLE INDIA"}, {"busstop": "Big Bazaar,OPPOSITE OF BIG BAZAAR"}, {"busstop": "Pattandur Agrahara Gate,IN FRONT OF APPOLO PHARMACY"}, {"busstop": "ITPL,OPPOSITE OF I.T.P.L. MAIN GATE"}, {"busstop": "B P L,OPPOSITE OF CINEMA HALL"}, {"busstop": "Hope Form"}, {"busstop": "Prajwal School"}, {"busstop": "Kadugodi"}]
  },
  {
    "route_no": "335HD",
    "distance": "18 KM",
    "origin": "HAL Main Gate",
    "destination": "K Dommasandra",
    "departure_from_origin": "08:50,  11:25,  13:25,  15:40,  17:25",
    "arrival_at_origin": "08:45, 10:55, 13:20, 15:20, 17:20",
    "departure_from_destination": "07:45, 09:55, 12:25, 14:25, 16:30",
    "arrival_at_destination": "09:50,  12:20,  14:20,  16:25,  18:25",
    "map_json_content": [{"busstop": "HAL Main Gate"}, {"busstop": "Helicopter Division"}, {"busstop": "HAL Kalyanamantapa"}, {"busstop": "Borewell"}, {"busstop": "Maratahalli"}, {"busstop": "Maratahalli Bridge"}, {"busstop": "Spice Garden"}, {"busstop": "Kundalahalli Gate,KUNDALAHALLI,OPPOSITE OF HYPER CITY"}, {"busstop": "CMRIT,KUNDALAHALLI,IN FRONT OF CMR INSTITUTE OF TECHNOLOGY"}, {"busstop": "Kundala Halli colony,KUNDALAHALLI,BESIDE KUNDALAHALLI COLONY ARCH"}, {"busstop": "Graphite India,KUNDALAHALLI,OPPOSITE OF ADVAITH HYUNDAI"}, {"busstop": "I Gate ITPL Road,WHITEFIELD,OPPOSITE OF GINGER"}, {"busstop": "KTPO,WHITEFIELD,OPPOSITE OF GE HEALTH CARE GATE"}, {"busstop": "Vydehi Hospital,WHITEFIELD,BESIDE TTMC BUS STAND"}, {"busstop": "SJR Park ITPL,WHITEFIELD,IN FRONT OF SJR GROUP"}, {"busstop": "Sai Baba Hospital,WHITEFIELD,OPPOSITE OF SRI SATHYA SAI HOSPITAL"}, {"busstop": "ITPL Back Gate,WHITEFIELD,IN FRONT OF ORACLE INDIA"}, {"busstop": "Pattandur Agrahara Gate,IN FRONT OF APPOLO PHARMACY"}, {"busstop": "ITPL,OPPOSITE OF G.R TECH PARK"}, {"busstop": "B P L,OPPOSITE OF CINEMA HALL"}, {"busstop": "Hope Form"}, {"busstop": "Prajwal School"}, {"busstop": "Kadugodi"}, {"busstop": "Belathuru,KADUGODI,IN FRONT OF NANDINI MILK PARLOUR"}, {"busstop": "K Dommasandra"}]
  },
  {
    "route_no": "335K",
    "distance": "32.7 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Bisanahalli",
    "departure_from_origin": "06:00",
    "arrival_at_origin": "09:55",
    "departure_from_destination": "08:00",
    "arrival_at_destination": "07:30",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Town Hall,OPPOSITE OF RANI CHANNAMMA STATUE"}, {"busstop": "Corporation"}, {"busstop": "St Joseph Boys High school"}, {"busstop": "Richmond Circle"}, {"busstop": "StJosephs College"}, {"busstop": "Mayohall"}, {"busstop": "Hosmat Hospital"}, {"busstop": "Military Accounts Office"}, {"busstop": "Commando Hospital"}, {"busstop": "Domlur"}, {"busstop": "KODIHALLI"}, {"busstop": "Manipal Hospital"}, {"busstop": "Murgeshpalya,Opp.TOTAL MALL"}, {"busstop": "Rajeshwari Talkies"}, {"busstop": "HAL Main Gate"}, {"busstop": "Helicopter Division"}, {"busstop": "HAL Kalyanamantapa"}, {"busstop": "Borewell"}, {"busstop": "Maratahalli"}, {"busstop": "Maratahalli Bridge"}, {"busstop": "Spice Garden"}, {"busstop": "Kundalahalli Gate,KUNDALAHALLI,OPPOSITE OF HYPER CITY"}, {"busstop": "BEML Gate,KUNDALAHALLI,OPPOSITE OF HYPER CITY"}, {"busstop": "AECS Layout,KUNDALAHALLI,OPPOSITE OF BROOK FIELD"}, {"busstop": "CMRIT,KUNDALAHALLI,IN FRONT OF CMR INSTITUTE OF TECHNOLOGY"}, {"busstop": "Kundala Halli colony,KUNDALAHALLI,BESIDE KUNDALAHALLI COLONY ARCH"}, {"busstop": "Graphite India"}, {"busstop": "SAP ITPL,WHITEFIELD,IN FRONT OF SAP"}, {"busstop": "I Gate ITPL Road,WHITEFIELD,OPPOSITE OF GINGER"}, {"busstop": "KTPO,WHITEFIELD,OPPOSITE OF GE HEALTH CARE GATE"}, {"busstop": "Vydehi Hospital,WHITEFIELD,BESIDE TTMC BUS STAND"}, {"busstop": "SJR Park ITPL,WHITEFIELD,IN FRONT OF SJR GROUP"}, {"busstop": "Sai Baba Hospital,WHITEFIELD,OPPOSITE OF SRI SATHYA SAI HOSPITAL"}, {"busstop": "ITPL Back Gate,WHITEFIELD,IN FRONT OF ORACLE INDIA"}, {"busstop": "Pattandur Agrahara Gate,IN FRONT OF APPOLO PHARMACY"}, {"busstop": "ITPL,OPPOSITE OF I.T.P.L. MAIN GATE"}, {"busstop": "B P L,OPPOSITE OF CINEMA HALL"}, {"busstop": "Hope Form,IN FRONT OF FARM HOUSE"}, {"busstop": "MVJ College,OPPOSITE OF ENCHANTED WOODS"}, {"busstop": "Channasandra,OPPOSITE OF MUTHOOT FINANACE"}, {"busstop": "Thirumalashettyhalli Cross,BESIDE OPEN AREA"}, {"busstop": "Koraluru,KORALURU,OPPOSITE OF CONVENTION HALL"}, {"busstop": "Mallasandra,OPPOSITE OF SRI RENUKA YALLAMMA TEMPLE"}, {"busstop": "Naduvatti,NADAVATHI,IN FRONT OF GOVT.VETERINARY HOSPITAL"}, {"busstop": "Bisanahalli,BISANAHALLI,IN FRONT OF GOVT.SCHOOL,ANGANAVADI"}]
  },
  {
    "route_no": "336",
    "distance": "20.9 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Panathuru",
    "departure_from_origin": "06:20,  06:55,  08:30,  09:15,  12:00,  13:00,  14:05,  15:10,  15:45,  16:25,  17:45,  19:10,  20:30",
    "arrival_at_origin": "06:15, 06:30, 08:25, 09:10, 11:00, 11:55, 14:00, 15:05, 16:20, 17:40, 19:05, 19:50, 21:25",
    "departure_from_destination": "05:15, 05:30, 07:25, 08:05, 10:00, 10:50, 13:00, 14:05, 15:15, 16:40, 18:00, 18:50, 20:20",
    "arrival_at_destination": "07:20,  08:00,  09:30,  10:20,  13:00,  14:00,  15:10,  16:10,  16:55,  17:30,  18:45,  20:15,  21:30",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET,OPPOSITE TO CHANDRA BHAVAN HOTEL"}, {"busstop": "Town Hall"}, {"busstop": "Corporation"}, {"busstop": "St .Josephs high schools"}, {"busstop": "Richmond Circle"}, {"busstop": "StJosephs College"}, {"busstop": "Mayohall"}, {"busstop": "Hosmat Hospital"}, {"busstop": "Military Accounts Office"}, {"busstop": "Commando Hospital"}, {"busstop": "Domlur"}, {"busstop": "KODIHALLI"}, {"busstop": "Manipal Hospital"}, {"busstop": "Murgeshpalya,Opp.Sir MV COLLAGE"}, {"busstop": "Rajeshwari Talkies"}, {"busstop": "HAL Main Gate"}, {"busstop": "Helicopter Division"}, {"busstop": "HAL Kalyanamantapa"}, {"busstop": "Borewell"}, {"busstop": "Yamalur"}, {"busstop": "Kada Bisanahalli"}, {"busstop": "Panathuru,PANATHURU,BESIDE RAMALU TEMPLE"}]
  },
  {
    "route_no": "336A",
    "distance": "17.8 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Kempapura",
    "departure_from_origin": "09:30,  14:05,  21:15",
    "arrival_at_origin": "06:40, 11:50, 16:05",
    "departure_from_destination": "05:40, 10:45, 15:05",
    "arrival_at_destination": "10:30,  15:05,  22:15",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET,OPPOSITE TO CHANDRA BHAVAN HOTEL"}, {"busstop": "Town Hall"}, {"busstop": "Corporation"}, {"busstop": "St .Josephs high schools"}, {"busstop": "Richmond Circle"}, {"busstop": "StJosephs College"}, {"busstop": "Mayohall"}, {"busstop": "Hosmat Hospital"}, {"busstop": "Military Accounts Office"}, {"busstop": "Commando Hospital"}, {"busstop": "Domlur"}, {"busstop": "KODIHALLI"}, {"busstop": "Manipal Hospital"}, {"busstop": "Murgeshpalya,Opp.Sir MV COLLAGE"}, {"busstop": "Rajeshwari Talkies"}, {"busstop": "HAL Main Gate"}, {"busstop": "Helicopter Division"}, {"busstop": "HAL Kalyanamantapa"}, {"busstop": "Borewell"}, {"busstop": "Yamalur"}, {"busstop": "Kempapura,KEMPAPURA, YEMALURU POST,IN FRONT OF SOMESHWARA SWAMI TEMPLE"}]
  },
  {
    "route_no": "336B",
    "distance": "18.8 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Kempapura",
    "departure_from_origin": "08:15,  10:20,  14:15,  16:40,  18:40,  20:50",
    "arrival_at_origin": "08:10, 10:15, 12:50, 16:35, 18:35, 20:45",
    "departure_from_destination": "07:15, 09:15, 11:50, 15:40, 17:40, 19:45",
    "arrival_at_destination": "09:10,  11:20,  15:10,  17:35,  19:40,  21:40",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE REVENUE OFFICE"}, {"busstop": "Corporation"}, {"busstop": "St .Josephs high schools"}, {"busstop": "Richmond Circle"}, {"busstop": "StJosephs College"}, {"busstop": "Mayohall"}, {"busstop": "Hosmat Hospital"}, {"busstop": "Military Accounts Office"}, {"busstop": "Commando Hospital"}, {"busstop": "Domlur"}, {"busstop": "KODIHALLI"}, {"busstop": "Manipal Hospital"}, {"busstop": "Murgeshpalya,Opp.Sir MV COLLAGE"}, {"busstop": "Rajeshwari Talkies"}, {"busstop": "HAL Main Gate"}, {"busstop": "Helicopter Division"}, {"busstop": "HAL Kalyanamantapa"}, {"busstop": "Borewell"}, {"busstop": "Yamalur"}, {"busstop": "Kempapura,KEMPAPURA, YEMALURU POST,IN FRONT OF SOMESHWARA SWAMI TEMPLE"}]
  },
  {
    "route_no": "337",
    "distance": "16.5 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Doddanekkundi",
    "departure_from_origin": "06:25,  08:30,  14:50,  17:25,  19:25,  21:50",
    "arrival_at_origin": "06:20, 08:25, 10:25, 16:55, 19:20, 21:20",
    "departure_from_destination": "05:30, 07:30, 09:30, 16:00, 18:25, 20:25",
    "arrival_at_destination": "07:25,  09:25,  15:45,  18:20,  20:20,  22:40",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET,OPPOSITE TO CHANDRA BHAVAN HOTEL"}, {"busstop": "Town Hall"}, {"busstop": "Corporation"}, {"busstop": "St .Josephs high schools"}, {"busstop": "Richmond Circle"}, {"busstop": "StJosephs College"}, {"busstop": "Mayohall"}, {"busstop": "Hosmat Hospital"}, {"busstop": "Military Accounts Office"}, {"busstop": "Commando Hospital"}, {"busstop": "Domlur"}, {"busstop": "KODIHALLI"}, {"busstop": "Manipal Hospital"}, {"busstop": "Murgeshpalya,Opp.Sir MV COLLAGE"}, {"busstop": "Rajeshwari Talkies"}, {"busstop": "HAL Main Gate"}, {"busstop": "Helicopter Division"}, {"busstop": "HAL Kalyanamantapa"}, {"busstop": "Borewell"}, {"busstop": "DODDANEKUNDI CROSS"}, {"busstop": "Doddanekkundi"}]
  },
  {
    "route_no": "338",
    "distance": "18.4 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Munnekolalu",
    "departure_from_origin": "06:20,  09:55,  14:25,  18:05,  19:50,  22:00",
    "arrival_at_origin": "06:15, 08:00, 12:00, 16:10, 19:45, 21:55",
    "departure_from_destination": "05:30, 07:10, 11:10, 15:20, 18:55, 21:10",
    "arrival_at_destination": "07:05,  10:45,  15:15,  18:55,  20:40,  22:45",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET,OPPOSITE TO CHANDRA BHAVAN HOTEL"}, {"busstop": "Town Hall"}, {"busstop": "Corporation"}, {"busstop": "St .Josephs high schools"}, {"busstop": "Richmond Circle"}, {"busstop": "StJosephs College"}, {"busstop": "Mayohall"}, {"busstop": "Hosmat Hospital"}, {"busstop": "Military Accounts Office"}, {"busstop": "Commando Hospital"}, {"busstop": "Domlur"}, {"busstop": "KODIHALLI"}, {"busstop": "Manipal Hospital"}, {"busstop": "Murgeshpalya,Opp.Sir MV COLLAGE"}, {"busstop": "Rajeshwari Talkies"}, {"busstop": "HAL Main Gate"}, {"busstop": "Helicopter Division"}, {"busstop": "HAL Kalyanamantapa"}, {"busstop": "Borewell"}, {"busstop": "Maratahalli"}, {"busstop": "Maratahalli Bridge"}, {"busstop": "Munnekolalu,MUNNEKOLALA, MARATHAHALLI POST,BESIDE SURYANARYANA NAVAGRAHA TEMPLE"}]
  },
  {
    "route_no": "339E",
    "distance": "27.6 KM",
    "origin": "Shivajinagar Bus Station",
    "destination": "Gunjoor",
    "departure_from_origin": "09:00,  12:15,  15:05,  17:50",
    "arrival_at_origin": "08:55, 12:10, 15:00, 17:50",
    "departure_from_destination": "07:35, 10:50, 13:40, 16:30",
    "arrival_at_destination": "10:20,  13:35,  16:25,  19:10",
    "map_json_content": [{"busstop": "Shivajinagar Bus Station,SHIVAJI NAGARA,BESIDE BMTC BUS STAND"}, {"busstop": "Maniksha Parade Ground"}, {"busstop": "Manipal Center,M.G.ROAD,BESIDE MILITARY GATE"}, {"busstop": "Trinity Circle"}, {"busstop": "Halasuru"}, {"busstop": "BMTC Depot-6"}, {"busstop": "Binnamangala"}, {"busstop": "Isolation Hospital"}, {"busstop": "NGEF"}, {"busstop": "Srinivasapura"}, {"busstop": "Benniganahalli"}, {"busstop": "Tin Factory"}, {"busstop": "KR Puram Railway Station,KR PURAM,BACK SIDE OF RAILWAY STATION"}, {"busstop": "B Narayanapura,DOORAVANI NAGARA,OPPOSITE OF SRI MANJUNATHA STEEL ALLOYS"}, {"busstop": "Mahadevapura Cross,HOODI,IN FRONT OF BASAVESHWARA KHANAVALI"}, {"busstop": "SINGAYYANPALLYA,HOODI,OPPOSITE OF BIMAL AUTO AGENCY"}, {"busstop": "Garudachar Palya,HOODI,IN FRONT OF XYLEM AIR BUS"}, {"busstop": "Bhorka Steel,GARUDACHAR PALYA,IN FRONT OF ABB. BHORUKA TECH PARK"}, {"busstop": "Hoodi,IN FRONT OF NETRA HOTEL VEG & NON VEG"}, {"busstop": "Rajapalya,BESIDE MUTHOOT FINANCE"}, {"busstop": "Pattandur Agrahara Gate,IN FRONT OF APPOLO PHARMACY"}, {"busstop": "ITPL,OPPOSITE OF I.T.P.L. MAIN GATE"}, {"busstop": "B P L,OPPOSITE OF CINEMA HALL"}, {"busstop": "Hope Farm"}, {"busstop": "Munish Hospital"}, {"busstop": "Saibaba General Hospital"}, {"busstop": "White Field"}, {"busstop": "Brook Bond"}, {"busstop": "Varthuru Kodi,WHITEFIELD,BESIDE MANAPURAM GOLD LOAN (LEFT SIDE)"}, {"busstop": "Varthuru,VARTURU,OPPOSITE OF GOVT.COLLEGE VARTURU"}, {"busstop": "Vinayak Nagara,VARTURU,OPPOSITE OF K.K SCHOOL"}, {"busstop": "Vinayaka Nagara,GUNJURU,IN FRONT OF AJAY VET PHARMA(H.P PETROL BUNK(LEFT SIDE))"}, {"busstop": "Gunjoor,GUNJURU,IN FRONT OF ASWATHA  KATTE"}]
  },
  {
    "route_no": "340",
    "distance": "19.6 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Chikka Bellandur",
    "departure_from_origin": "06:05,  15:15,  20:50",
    "arrival_at_origin": "06:00, 08:10, 17:20",
    "departure_from_destination": "05:00, 07:10, 16:20",
    "arrival_at_destination": "07:05,  16:15,  22:00",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Railway Gate Sarjapura"}, {"busstop": "Chikka Bellandur,CHIKKABELLANDURU VILLAGE, CARMELARAM POST,OPPOSITE OF ABHIRUCHI BAKERY"}]
  },
  {
    "route_no": "340A",
    "distance": "18 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "HSR Layout 2nd Sector",
    "departure_from_origin": "05:50,  06:30,  06:55,  07:35,  08:00,  08:20,  08:40,  09:00,  09:20,  09:45,  10:15,  10:30,  11:15,  11:35,  11:55,  12:20,  13:05,  14:05,  14:30,  14:55,  15:15,  15:35,  15:55,  16:40,  17:05,  17:30,  17:50,  18:10,  18:30,  20:05,  20:45,  21:05",
    "arrival_at_origin": "05:45, 06:25, 06:50, 07:55, 08:35, 08:55, 09:15, 09:40, 10:10, 10:25, 11:10, 11:30, 11:50, 12:15, 13:00, 14:00, 14:25, 14:50, 15:10, 15:30, 15:50, 16:35, 17:00, 17:25, 17:45, 18:05, 18:25, 18:45, 19:35, 20:15, 20:35",
    "departure_from_destination": "05:00, 05:30, 05:55, 06:55, 07:35, 07:55, 08:15, 08:35, 09:05, 09:25, 10:10, 10:30, 10:50, 11:15, 12:00, 13:00, 13:25, 13:50, 14:10, 14:30, 14:50, 15:35, 16:00, 16:25, 16:45, 17:05, 17:25, 17:45, 18:35, 19:15, 19:35",
    "arrival_at_destination": "06:50,  07:30,  07:50,  08:35,  09:00,  09:20,  09:40,  10:00,  10:20,  10:45,  11:00,  11:30,  12:10,  12:35,  12:55,  13:20,  14:05,  15:05,  15:30,  15:55,  16:15,  16:35,  16:55,  17:40,  18:05,  18:30,  18:50,  19:10,  19:30,  21:05,  21:45,  22:05",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "H S R 7th Cross,HSR LAYOUT 1ST SECTOR,OPPOSITE OF BHARAT PETROL BUNK & IN FRONT OF CELIO STAR"}, {"busstop": "HSR Layout 19th Main 13th Cross,HSR LAYOUT 1ST SECTOR,OPPOSITE OF GOLDS GYM & OPPOSITE OF PHD PIZZA HUT"}, {"busstop": "Parangipalya"}, {"busstop": "HSR Layout 2nd Sector,BESIDE GNAN SRISTL SCHOOL OF EXCELIENCE"}]
  },
  {
    "route_no": "340D",
    "distance": "37.9 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Kuguru",
    "departure_from_origin": "05:15,  15:30",
    "arrival_at_origin": "08:45, 19:00",
    "departure_from_destination": "07:00, 17:15",
    "arrival_at_destination": "06:55,  17:10",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Gear School"}, {"busstop": "Devarabisanahalli,DEVERA BISANAHALLI,OPPOSTIE OF COUNTRY CLUB"}, {"busstop": "Panathur"}, {"busstop": "Balagere,PANATHURU POST, VARTHURU HOBLI,BESIDE BALAGERE MILK PRODUCT CO-OPERATIVE LIMITED"}, {"busstop": "Kuguru,BESIDE RESIDENTIAL AREA"}]
  },
  {
    "route_no": "340F",
    "distance": "16.7 KM",
    "origin": "Shivajinagar Bus Station",
    "destination": "Somasundarapalya",
    "departure_from_origin": "07:20",
    "arrival_at_origin": "09:25",
    "departure_from_destination": "08:25",
    "arrival_at_destination": "08:20",
    "map_json_content": [{"busstop": "Shivajinagar Bus Station,SHIVAJI NAGARA,BESIDE BMTC BUS STAND"}, {"busstop": "Maniksha Parade Ground"}, {"busstop": "Mayohall"}, {"busstop": "DSouza Circle"}, {"busstop": "Johnson Market"}, {"busstop": "Elgin Floor Mill"}, {"busstop": "Anepalya"}, {"busstop": "Adugodi"}, {"busstop": "Adugodi Police Station"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "H S R 7th Cross,HSR LAYOUT 1ST SECTOR,OPPOSITE OF BHARAT PETROL BUNK & IN FRONT OF CELIO STAR"}, {"busstop": "HSR Layout 19th Main 13th Cross,HSR LAYOUT 1ST SECTOR,OPPOSITE OF GOLDS GYM & OPPOSITE OF PHD PIZZA HUT"}, {"busstop": "CPWD Quarters"}, {"busstop": "NIFT COLLEGE,HSR LAYOUT 2ND SECTOR,IN FRONT OF NIFT COLLEGE, OPPOSITE OF STATE BANK OF INDIA"}, {"busstop": "Parangipalya"}, {"busstop": "Somasundarapalya,SOMASUNDRAPALYA LAYOUT HSR POST,IN FRONT OF FRIEND TAILOR & AMITH BAKERY"}]
  },
  {
    "route_no": "340J",
    "distance": "23.3 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Huskur",
    "departure_from_origin": "06:30,  09:35,  14:15,  17:05,  21:30",
    "arrival_at_origin": "06:25, 09:30, 17:00, 20:30",
    "departure_from_destination": "05:20, 08:10, 15:40, 19:00",
    "arrival_at_destination": "07:40,  11:00,  15:35,  18:30,  22:45",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli,DODDAKANNALLI,IN FRONT OF HOTEL BLUE STAR OR TEMPLE"}, {"busstop": "Chikkanayakana Halli,CHIKKANAYAKANA HALLI,IN FRONT OF ASHWATHA KATTE & SRI PRASANNA VEERANJANAYA SWAMI TEMPLE"}, {"busstop": "Chikkanayakana Halli Dinne,HALANAYAKANA HALLI,OPPOSITE OF SRI JADE MUNESHWARA SWAMI TEMPLE"}, {"busstop": "Gattahalli,HUSKURU POST,OPPOSITE OF GOVT. PRIMARY SCHOOL"}, {"busstop": "Huskur,SARJAPURA,IN FRONT OF SRI MADDORAMMA DEVI TEMPLE"}]
  },
  {
    "route_no": "340K",
    "distance": "19 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Somasundarapalya",
    "departure_from_origin": "06:50,  09:00,  15:45,  18:30,  21:15",
    "arrival_at_origin": "06:45, 08:55, 11:30, 18:25, 20:45",
    "departure_from_destination": "05:45, 07:55, 10:30, 17:20, 19:40",
    "arrival_at_destination": "07:50,  10:00,  16:50,  19:35,  22:15",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "H S R 7th Cross,HSR LAYOUT 1ST SECTOR,OPPOSITE OF BHARAT PETROL BUNK & IN FRONT OF CELIO STAR"}, {"busstop": "HSR Layout 19th Main 13th Cross,HSR LAYOUT 1ST SECTOR,OPPOSITE OF GOLDS GYM & OPPOSITE OF PHD PIZZA HUT"}, {"busstop": "NIFT COLLEGE,HSR LAYOUT 2ND SECTOR,IN FRONT OF NIFT COLLEGE, OPPOSITE OF STATE BANK OF INDIA"}, {"busstop": "Parangipalya,HSR LAYOUT 2ND SECTOR,IN FRONT OF KROMTEK SYSTEMS, & L.J.IYENGAR BAKERY"}, {"busstop": "Aishwarya Appartments"}, {"busstop": "Somasundarapalya,SOMASUNDRAPALYA LAYOUT HSR POST,IN FRONT OF FRIEND TAILOR & AMITH BAKERY"}]
  },
  {
    "route_no": "340L",
    "distance": "25.3 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Hosa Road",
    "departure_from_origin": "06:55,  09:45,  15:25,  21:45",
    "arrival_at_origin": "06:50, 09:40, 20:55",
    "departure_from_destination": "05:35, 08:15, 19:20",
    "arrival_at_destination": "08:10,  11:00,  17:00,  23:00",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthinagar TTMC"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "JOIN OF SARJAPURA ROAD,IBBALURU,OPPOSITE OF TOMONTRI FLORA APARTMENT"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli,KAIKONDRAHALLI,OPPOSITE OF SRI CHANNAKESHA SWAMI TEMPLE"}, {"busstop": "Bovi Calony,KASAVANAHALLI,IN FRONT OF AISHWARYA VALUE MART"}, {"busstop": "Kasavanahalli,CARMELARAM POST,IN FRONT OF HI LOOK BAKE & KOOL & OPPOSITE OF KOSAMATTAM FINANCE"}, {"busstop": "MATHA AMRUTHAMAYI COLLEGE,KASAVANAHALLI,BESIDE AMRITA COLLEGE"}, {"busstop": "PARAPPANA AGRAHARA POLICE Trn C,CHOODASANDRA,OPPOSITE OF K.S.R.P.QUARTERS GATE ENTRANCE & SBI ATM, LGCL ASHLAR"}, {"busstop": "rayasandra new layout,NAGANATHAPURA,OPPOSITE OF MOSQUE & THE BOMBO SHOP"}, {"busstop": "Bangalore Central Jail,NAGANATHAPURA,IN FRONT OF S.R.N.REDDYS INDUSTRIAL COMPLEX"}, {"busstop": "MICO Factory,CHANNAKESHAVA NAGARA, ELECTRONIC CITY POST,IN FRONT OF CHANDRA BAR & RESTAURANT"}, {"busstop": "Hosa Road"}]
  },
  {
    "route_no": "340S",
    "distance": "17.2 KM",
    "origin": "Shivajinagar Bus Station",
    "destination": "Somasundarapalya",
    "departure_from_origin": "07:45,  08:50,  09:50,  11:00,  12:20,  13:35,  15:45,  16:50,  18:20,  19:25",
    "arrival_at_origin": "08:45, 09:45, 10:55, 12:15, 13:30, 15:40, 16:45, 18:15, 19:20, 21:30",
    "departure_from_destination": "07:45, 08:50, 09:55, 11:20, 12:30, 14:40, 15:45, 17:15, 18:20, 20:30",
    "arrival_at_destination": "08:45,  09:50,  10:50,  12:00,  13:20,  14:35,  16:45,  17:50,  19:20,  20:25",
    "map_json_content": [{"busstop": "Shivajinagar Bus Station,SHIVAJI NAGARA,BESIDE BMTC BUS STAND"}, {"busstop": "Maniksha Parade Ground"}, {"busstop": "Mayohall"}, {"busstop": "DSouza Circle"}, {"busstop": "Johnson Market"}, {"busstop": "Elgin Floor Mill"}, {"busstop": "Anepalya"}, {"busstop": "Adugodi"}, {"busstop": "Adugodi Police Station"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "H S R 7th Cross,HSR LAYOUT 1ST SECTOR,OPPOSITE OF BHARAT PETROL BUNK & IN FRONT OF CELIO STAR"}, {"busstop": "HSR Layout 19th Main 13th Cross,HSR LAYOUT 1ST SECTOR,OPPOSITE OF GOLDS GYM & OPPOSITE OF PHD PIZZA HUT"}, {"busstop": "CPWD Quarters"}, {"busstop": "NIFT COLLEGE,HSR LAYOUT 2ND SECTOR,IN FRONT OF NIFT COLLEGE, OPPOSITE OF STATE BANK OF INDIA"}, {"busstop": "Parangipalya"}, {"busstop": "Somasundarapalya,SOMASUNDRAPALYA LAYOUT HSR POST,OPPOSITE OF FRIEND TAILOR & AMITH BAKERY"}]
  },
  {
    "route_no": "341",
    "distance": "14.9 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Bellandru",
    "departure_from_origin": "06:35,  08:10,  08:45,  11:10,  14:35,  15:50,  16:45,  19:20",
    "arrival_at_origin": "08:40, 09:50, 10:50, 13:30, 16:40, 17:35, 19:15, 21:25",
    "departure_from_destination": "07:40, 09:00, 09:50, 12:25, 15:40, 16:45, 18:15, 20:25",
    "arrival_at_destination": "07:35,  08:55,  09:45,  12:20,  15:35,  16:40,  17:45,  20:20",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Sarjapura Cross,HSR LAYOUT,IN FRONT OF SHOBHA GRANET APARTMENT"}, {"busstop": "Petrol Bunk,BELLANDUR,IN FRONT OF INDIAN OIL CORPORATION"}, {"busstop": "Bellandur gate,BELLANDUR,OPPOSITE OF ANGAN RESTUARANT"}, {"busstop": "Bellandru ,BELLANDUR,IN FRONT OF GOVT MIDDLE SCHOOL & SHRI MALIGAMBA TEMPLE"}]
  },
  {
    "route_no": "341A",
    "distance": "15.5 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Haralur",
    "departure_from_origin": "05:50,  07:30,  09:35,  12:40,  14:20,  16:25,  18:05,  20:40",
    "arrival_at_origin": "05:45, 07:25, 09:30, 14:15, 16:20, 18:00, 20:05",
    "departure_from_destination": "05:00, 06:40, 08:45, 13:30, 15:35, 17:15, 19:20",
    "arrival_at_destination": "06:35,  08:15,  10:20,  13:25,  15:05,  17:10,  18:50,  21:30",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Haralur Cross,OPPOSITE OF BIG BAZAR"}, {"busstop": "Appartments,AMBALIPURA,OPPOSITE OF THE FISHERMENS WHARF"}, {"busstop": "Haralur ,HARALURU HSR POST,OPPOSITE OF HANUMAN TEMPLE & VINAYAKA ENTERPRISES"}]
  },
  {
    "route_no": "341B",
    "distance": "17.2 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Chudasandra",
    "departure_from_origin": "05:30,  06:10,  07:40,  10:20,  15:15,  17:50,  19:55",
    "arrival_at_origin": "06:05, 07:35, 17:45, 19:50, 21:45",
    "departure_from_destination": "05:00, 06:35, 16:45, 18:55, 20:55",
    "arrival_at_destination": "06:30,  07:15,  08:40,  11:20,  16:15,  18:50,  20:55",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli,KAIKONDRAHALLI,OPPOSITE OF SRI CHANNAKESHA SWAMI TEMPLE"}, {"busstop": "Kasavanahalli,CARMELARAM POST,IN FRONT OF HI LOOK BAKE & KOOL & OPPOSITE OF KOSAMATTAM FINANCE"}, {"busstop": "Bovi Calony,KASAVANAHALLI,IN FRONT OF AISHWARYA VALUE MART"}, {"busstop": "Amruthanandamayi College,KASAVANAHALLI,OPPOSITE OF AMRITA COLLEGE"}, {"busstop": "Amrita Nagara,CHOODASANDRA,OPPOSITE OF S.M.J.SKY SHOPPY"}, {"busstop": "Chudasandra,HUSKURU POST,IN FRONT OF SRI ANJANEYA SWAMY TEMPLE"}]
  },
  {
    "route_no": "341C",
    "distance": "19.8 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Kodanandarama Nagara",
    "departure_from_origin": "07:00,  08:15,  09:20,  14:25,  15:50,  17:20,  18:35,  21:20",
    "arrival_at_origin": "06:55, 08:10, 09:15, 10:45, 12:00, 14:20, 15:45, 17:15, 18:30, 20:50",
    "departure_from_destination": "05:50, 07:05, 08:10, 09:45, 10:55, 13:15, 14:40, 16:15, 17:25, 19:45",
    "arrival_at_destination": "08:05,  09:15,  10:25,  15:30,  16:55,  18:30,  19:40,  22:25",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Jannasandra,JUNNASANDRA VILLAGE,IN FRONT OF GOVT JUNIOR PRIMARY SCHOOL"}, {"busstop": "Halanayakanahalli,HALANAYAKANAHALLI, VARTHURU HOBLI,OPPOSITE OF SRI KODANDA RAMA TEMPLE & ASHWATHA KATTE"}, {"busstop": "Kodanandarama Nagara,HALANAYAKANAHALLI,IN FRONT OF PROVISION STORE"}]
  },
  {
    "route_no": "341E",
    "distance": "18 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Haralur",
    "departure_from_origin": "06:05,  08:20,  11:15,  15:30,  17:55,  21:15",
    "arrival_at_origin": "06:00, 08:15, 11:10, 17:50, 20:45",
    "departure_from_destination": "05:00, 07:10, 10:00, 16:40, 19:35",
    "arrival_at_destination": "07:05,  09:30,  12:15,  16:35,  19:05,  22:15",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "JOIN OF SARJAPURA ROAD,IBBALURU,OPPOSITE OF TOMONTRI FLORA APARTMENT"}, {"busstop": "Haralur Cross,OPPOSITE OF BIG BAZAR"}, {"busstop": "Appartments,AMBALIPURA,OPPOSITE OF THE FISHERMENS WHARF"}, {"busstop": "Haralur ,HARALURU HSR POST,OPPOSITE OF HANUMAN TEMPLE & VINAYAKA ENTERPRISES"}]
  },
  {
    "route_no": "342",
    "distance": "32.5 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Dommasandra Circle",
    "departure_from_origin": "06:50,  09:05,  12:10,  14:50,  14:55,  20:35",
    "arrival_at_origin": "06:45, 09:00, 12:05, 12:10, 14:45, 14:50, 20:30",
    "departure_from_destination": "05:30, 07:45, 10:50, 11:00, 13:30, 14:00, 19:15",
    "arrival_at_destination": "08:05,  10:20,  13:25,  16:05,  16:10,  21:50",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank,KORAMANGALA RING ROAD,BESIDE WATER TANK"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross"}, {"busstop": "Dommasandra Circle"}]
  },
  {
    "route_no": "342A",
    "distance": "29 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Sarjapura Bus Stand",
    "departure_from_origin": "06:45,  09:25,  14:45,  17:50,  21:10",
    "arrival_at_origin": "06:15, 09:20, 17:45, 20:40",
    "departure_from_destination": "05:00, 08:05, 16:30, 19:25",
    "arrival_at_destination": "08:00,  10:45,  16:00,  19:05,  22:25",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross"}, {"busstop": "Dommasandra Circle"}, {"busstop": "Dommasandra "}, {"busstop": "TChuddadenahalli"}, {"busstop": "Chambenahalli Gate"}, {"busstop": "Yamare"}, {"busstop": "Apartment Sarjapura road"}, {"busstop": "Sompura Gate"}, {"busstop": "Sarjapura,POLICE STATION"}, {"busstop": "Sarjapura Bus Stand"}]
  },
  {
    "route_no": "342AA",
    "distance": "26.2 KM",
    "origin": "Krishnarajendra Market",
    "destination": "TChuddadenahalli",
    "departure_from_origin": "05:50,  17:40,  20:20",
    "arrival_at_origin": "05:45, 08:30, 20:15",
    "departure_from_destination": "04:30, 07:10, 19:00",
    "arrival_at_destination": "07:05,  18:55,  21:35",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross"}, {"busstop": "Dommasandra Circle"}, {"busstop": "TChuddadenahalli"}, {"busstop": "TChuddadenahalli,DOMMASANDRA POST, C.H.HALLI,BESIDE YALLAMMA DEVI TEMPLE & GOVT PRIMARY SCHOOL"}]
  },
  {
    "route_no": "342B",
    "distance": "29.5 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Muttanallur",
    "departure_from_origin": "06:25,  13:30,  20:15",
    "arrival_at_origin": "06:20, 09:20, 19:30",
    "departure_from_destination": "05:10, 07:45, 18:00",
    "arrival_at_destination": "07:40,  14:55,  21:30",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET"}, {"busstop": "Makkala Koota"}, {"busstop": "Basappa Circle"}, {"busstop": "Minerva Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross,DOMMASANDRA,IN FRONT OF HOTEL SHRI LAKSHMI & N.R STORE"}, {"busstop": "Chakkasandra gate"}, {"busstop": "Harohalli"}, {"busstop": "Muneshawara Temple"}, {"busstop": "Kaggalipura"}, {"busstop": "Gopasandra"}, {"busstop": "Muttanallur Cross,MUTHANALLURU,OPPOSITE OF REDDY MILITARY KATTE"}, {"busstop": "Muttanallur,ANEKAL TALUK,OPPOSITE OF MILK DAIRY"}]
  },
  {
    "route_no": "342C",
    "distance": "23.5 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Chokkasandra",
    "departure_from_origin": "06:00,  08:30,  14:15,  20:20",
    "arrival_at_origin": "05:55, 08:25, 11:20, 17:05",
    "departure_from_destination": "04:45, 07:15, 10:10, 15:55",
    "arrival_at_destination": "07:10,  09:40,  15:25,  21:35",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chakkasandra gate"}, {"busstop": "Chokkasandra,HUSKURU POST, SARJAPURA HOBLI,BEHIND THIMMARAYA SWAMI TEMPLE"}]
  },
  {
    "route_no": "342D",
    "distance": "29.29 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Varthuru",
    "departure_from_origin": "06:45,  09:30,  14:45,  18:00,  21:15",
    "arrival_at_origin": "06:40, 09:25, 17:55, 20:45",
    "departure_from_destination": "05:30, 08:05, 16:35, 19:25",
    "arrival_at_destination": "08:00,  10:50,  16:05,  19:20,  22:35",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Mullur,MULLURU,IN FRONT OF WATER TANK"}, {"busstop": "Kachamarakanahalli,GUNJURU POST,IN FRONT OF MANJUNATHA TEMPLE"}, {"busstop": "Gunjoor,GUNJURU,IN FRONT OF ASWATHA  KATTE"}, {"busstop": "Vinayak Nagara,GUNJURU,J.P. PALACE(RIGHT SIDE)"}, {"busstop": "K K School,VARTURU,IN FRONT OF K.K SCHOOL"}, {"busstop": "Varthuru,VARTURU,OPPOSITE OF GOVT.COLLEGE VARTURU"}]
  },
  {
    "route_no": "342E",
    "distance": "34.45 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Thindlu",
    "departure_from_origin": "07:30,  14:20,  17:35,  20:50",
    "arrival_at_origin": "07:00, 10:15, 17:30, 20:20",
    "departure_from_destination": "05:40, 08:55, 16:10, 19:00",
    "arrival_at_destination": "08:50,  15:40,  18:55,  22:10",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross"}, {"busstop": "Dommasandra Circle"}, {"busstop": "Dommasandra "}, {"busstop": "TChuddadenahalli"}, {"busstop": "Chambenahalli Gate"}, {"busstop": "Yamare"}, {"busstop": "Sompura Gate"}, {"busstop": "Sarjapura,POLICE STATION"}, {"busstop": "Chikka Thirupathi,MARUTHI NAGARA, SARJAPURA,OPPOSITE OF K.E.B. POWER STATION"}, {"busstop": "Thindlu,SARJAPURA HOBLI, ANEKAL TALUK,OPPOSITE OF RATION STORE & MILK PRODUCT CO-OPERATIVE SOCIETY"}]
  },
  {
    "route_no": "342F",
    "distance": "31.6 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "Sarjapura Bus Stand",
    "departure_from_origin": "05:40,  07:25,  08:05,  09:00,  10:10,  13:25,  16:15,  17:45,  17:55,  20:00,  21:10,  22:00",
    "arrival_at_origin": "07:20, 08:00, 08:55, 10:05, 10:35, 11:45, 11:55, 13:30, 16:10, 17:40, 17:50, 19:30, 20:40, 21:50, 23:05",
    "departure_from_destination": "05:55, 06:30, 07:30, 08:45, 09:10, 10:15, 10:30, 12:00, 14:50, 16:05, 16:15, 17:45, 18:05, 19:15, 20:10, 21:40",
    "arrival_at_destination": "07:00,  08:50,  09:45,  10:25,  11:30,  14:45,  17:35,  19:10,  19:45,  21:35,  22:35,  23:10",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Maharani College,BESIDE SJP COLLEGE"}, {"busstop": "KR Circle,BESIDE DISTRICT TREASURY OFFICE"}, {"busstop": "Corporation,CORPORATION,IN FRONT OF BBMP, CORPORATION"}, {"busstop": "Subbaiah Circle"}, {"busstop": "KH Road"}, {"busstop": "Shanthi Nagara Bus Station"}, {"busstop": "Wilson Garden police Station,WILSON GARDEN,BESIDE KITTUR RANI CHANNAMMA PARKLAKKASANDRA"}, {"busstop": "Wilson Garden 12th Cross,WILSON GARDEN,OPPOSITE OF PRESTIGE KITECHEN SMART"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross,DOMMASANDRA,IN FRONT OF BASAVESHWARA CERAMICS"}, {"busstop": "Dommasandra Circle"}, {"busstop": "Dommasandra "}, {"busstop": "Chambenahalli Gate"}, {"busstop": "Yamare"}, {"busstop": "Sompura Gate"}, {"busstop": "Sarjapura,POLICE STATION"}, {"busstop": "Sarjapura Bus Stand"}]
  },
  {
    "route_no": "342G",
    "distance": "34.4 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Bikkanahosahalli",
    "departure_from_origin": "06:55,  14:00,  20:30",
    "arrival_at_origin": "06:50, 10:20, 20:00",
    "departure_from_destination": "05:35, 08:50, 18:35",
    "arrival_at_destination": "08:20,  15:25,  21:55",
    "map_json_content": [{"busstop": "Krishnarajendra Market,KR MARKET,OPPOSITE TO CHANDRA BHAVAN HOTEL"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road"}, {"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross,DOMMASANDRA,IN FRONT OF BASAVESHWARA CERAMICS"}, {"busstop": "Dommasandra Circle"}, {"busstop": "Dommasandra "}, {"busstop": "TChuddadenahalli"}, {"busstop": "Chambenahalli Gate"}, {"busstop": "Yamare"}, {"busstop": "Sompura Gate"}, {"busstop": "Apartment Sarjapura road"}, {"busstop": "Sarjapura,POLICE STATION"}, {"busstop": "Sarjapura Bus Stand"}, {"busstop": "Bikkanahosahalli,SARJAPURA, HOBLI,OPPOSITE OF ESHWARA TEMPLE"}]
  },
  {
    "route_no": "342H",
    "distance": "26.32 KM",
    "origin": "St John Hospital",
    "destination": "Sarjapura",
    "departure_from_origin": "06:45,  09:00,  09:45,  16:30,  19:00",
    "arrival_at_origin": "06:40, 08:55, 11:50, 16:00, 18:55",
    "departure_from_destination": "05:40, 07:50, 10:40, 14:55, 17:45",
    "arrival_at_destination": "07:45,  10:10,  11:00,  17:40,  20:05",
    "map_json_content": [{"busstop": "St John Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross"}, {"busstop": "Dommasandra Circle"}, {"busstop": "Dommasandra "}, {"busstop": "TChuddadenahalli"}, {"busstop": "Chambenahalli Gate"}, {"busstop": "Yamare"}, {"busstop": "Apartment Sarjapura road"}, {"busstop": "Sompura Gate"}, {"busstop": "Sarjapura,POLICE STATION"}, {"busstop": "Sarjapura"}]
  },
  {
    "route_no": "342J",
    "distance": "27.4 KM",
    "origin": "Krishnarajendra Market",
    "destination": "V Kallahalli Sarjapura Road",
    "departure_from_origin": "06:20,  09:25,  14:10,  16:50,  20:20",
    "arrival_at_origin": "06:15, 09:20, 16:45, 19:50",
    "departure_from_destination": "05:00, 08:05, 15:30, 18:35",
    "arrival_at_destination": "07:35,  10:40,  15:25,  18:05,  21:35",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross"}, {"busstop": "Dommasandra Circle"}, {"busstop": "Dommasandra "}, {"busstop": "V Kallahalli Sarjapura Road,VALAGERE KALLAHALLI,BESIDE MANJUNATHA PROVISION STORE, WATER TANK, RESIDENTIAL AREA"}]
  },
  {
    "route_no": "342JB",
    "distance": "28.9 KM",
    "origin": "Kempegowda Bus Station",
    "destination": "V Kallahalli Sarjapura Road",
    "departure_from_origin": "10:00,  13:25,  16:25",
    "arrival_at_origin": "09:55, 13:20, 16:20",
    "departure_from_destination": "08:30, 11:55, 14:55",
    "arrival_at_destination": "11:25,  14:50,  17:50",
    "map_json_content": [{"busstop": "Kempegowda Bus Station"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross"}, {"busstop": "Dommasandra Circle"}, {"busstop": "Dommasandra "}, {"busstop": "V Kallahalli Sarjapura Road,VALAGERE KALLAHALLI,BESIDE MANJUNATHA PROVISION STORE, WATER TANK, RESIDENTIAL AREA"}]
  },
  {
    "route_no": "342K",
    "distance": "34.7 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Adigara Kallahalli",
    "departure_from_origin": "06:55,  08:00,  10:30,  13:40,  16:05,  17:15,  20:05",
    "arrival_at_origin": "07:30, 10:00, 11:05, 13:30, 16:45, 19:35, 20:20",
    "departure_from_destination": "06:00, 08:30, 09:35, 12:05, 15:15, 18:05, 18:50",
    "arrival_at_destination": "08:25,  09:30,  12:00,  15:10,  17:35,  18:45,  21:35",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross,DOMMASANDRA,IN FRONT OF HOTEL SHRI LAKSHMI & N.R STORE"}, {"busstop": "Dommasandra Circle"}, {"busstop": "Dommasandra "}, {"busstop": "TChuddadenahalli"}, {"busstop": "Chambenahalli Gate"}, {"busstop": "Yamare"}, {"busstop": "Apartment Sarjapura road"}, {"busstop": "Sompura Gate"}, {"busstop": "Sarjapura Police Station,POLICE STATION"}, {"busstop": "Billapura,SARJAPURA, HOBLI,OPPOSITE OF GOVT. PRIMARY SCHOOL"}, {"busstop": "Adigara Kallahalli,ANEKAL TALUK,IN FRONT OF JAMIA MASJID"}]
  },
  {
    "route_no": "342L",
    "distance": "32.9 KM",
    "origin": "Krishnarajendra Market",
    "destination": "Dodda Thimmasandra",
    "departure_from_origin": "06:35,  16:30,  20:30",
    "arrival_at_origin": "06:30, 10:30, 16:25, 20:00",
    "departure_from_destination": "05:00, 08:45, 14:45, 18:35",
    "arrival_at_destination": "08:15,  18:05,  21:50",
    "map_json_content": [{"busstop": "Krishnarajendra Market"}, {"busstop": "Basappa Circle"}, {"busstop": "Lalbhagh Main Gate,AL-AMEEN COLLEGE,OPPOSITE OF LALBHAG MAIN GATE"}, {"busstop": "Lalbhag Society,WILSON GARDEN,OPPOSITE OF HOPCOMS"}, {"busstop": "Wilson Garden 7th Cross,WILSON GARDEN,OPPOSITE OF ABHAYA HOSPITAL"}, {"busstop": "Lakkasandra,OPPOSITE OF NIMAHANS CONVENTION CENTER"}, {"busstop": "Nimhans Hospital,IN FRONT OF NIMHANS HOSPITAL GATE"}, {"busstop": "Bangalore Dairy Circle"}, {"busstop": "Muneshwara Temple,SADGUNTE PALYA,BESIDE CHOUSIA ITI POLYTECHNIC COLLEGE"}, {"busstop": "Jn of Hosur Road,OPPOSITE OF STAPLE"}, {"busstop": "St Johns Hospital"}, {"busstop": "Koramangala Water Tank"}, {"busstop": "John Fowler,KORAMANAGALA,OPPOSITE OF KSRP QUARTERS"}, {"busstop": "Koramangala"}, {"busstop": "Jakkasandra"}, {"busstop": "Agara Junction"}, {"busstop": "Ibbaluru Sarjapura Road"}, {"busstop": "Bellanduru Gate Sarjapura Road"}, {"busstop": "Kaikodrahalli"}, {"busstop": "Jinnasandra Gate"}, {"busstop": "Doddakannalli"}, {"busstop": "Carmelaram Gate"}, {"busstop": "Ambedkar Nagara,AMBEDKARNAGARA"}, {"busstop": "Kodathi Gate"}, {"busstop": "Gouthamagara"}, {"busstop": "Chandapura Cross"}, {"busstop": "Dommasandra Circle"}, {"busstop": "Dommasandra "}, {"busstop": "TChuddadenahalli"}, {"busstop": "Chambenahalli Gate"}, {"busstop": "Yamare"}, {"busstop": "Apartment Sarjapura road"}, {"busstop": "Sompura Gate"}, {"busstop": "Sarjapura,POLICE STATION"}, {"busstop": "Sarjapura Bus Stand"}, {"busstop": "Ramana Devasthana,SARJAPURA,IN FRONT OF SRI KODANDA RAMA TEMPLE"}, {"busstop": "Dodda Thimmasandra,SARJAPURA HOBLI,BEHIND SRI ANJANEYA TEMPLE"}]
  },

 ]}

  id="tableDataModern"
  searchField="searchFilterModern"
  dynamic={false}
  ></ModernFilter>


  </Row>
       
      </section>
      <footer className="App-footer">
      </footer>
    </div>
	);
}

export default ViewBuses;
