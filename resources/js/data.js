var jsonData = {
    concerti: { 
      2018: [
        /*{date: '06/01', title: '', place: 'Celle Ligure (SV)', lat:44.3425107 , lon:8.5450983, isCanceled: true},*/
        {date: '10/02', title: '', place: 'Lurisia (CN)', lat:44.304863 , lon:7.708958},
        {date: '10/03', title: 'Suburbia', place: 'Cuneo', lat:44.376623, lon:7.529243},
        {date: '16/03', title: 'Irlanda in Festa', place: 'Brescia', lat:45.534207, lon:10.211317, isCanceled: true},
	      {date: '17/03', title: 'St. Patrick’s Irish Party', place: 'Pavia (MI)', lat:45.189573, lon:9.161388},
	      {date: '24/03', title: 'Notte della Bianca', place: 'Saluzzo (CN)', lat:44.647405, lon:7.485308},
        {date: '25/03', title: '', place: 'Celle Ligure (SV)', lat:44.3425107 , lon:8.5450983},
	      {date: '25/04', title: 'Circolo ARCI Cinema Vekkio', place: 'Corneliano d\'Alba (CN)', lat: 44.735958, lon: 7.958443},
        {date: '16/05', title: '', place: 'Piozzo (CN)', lat:44.515297, lon:7.891768},
        {date: '18/05', title: '', place: 'Cavallermaggiore (CN)', lat:44.708768, lon:7.688387},
        {date: '19/05', title: '', place: 'Volano (TN)', lat:45.917994, lon:11.063898},
        {date: '26/05', title: 'Sgrana e Traballa Festival', place: 'Firenze', lat:43.7622485, lon:11.3021473},
        {date: '08/06', title: 'La Strada Festival', place: 'Brescia', lat:45.533366, lon:10.216124},
        {date: '16/06', title: '', place: 'Barge (CN)', lat:44.726265, lon:7.326945},
	      {date: '24/06', title: '', place: 'Normandie [FR]', lat:49.436104, lon:1.089412},
        {date: '30/06', title: '', place: 'Isla de Baish [FR]', lat:43.613919, lon:1.082228},
        /*{date: '21/07', title: '', place: 'Albissola Marina (SV)', lat: 44.326915, lon:8.501675},
        {date: '21/07', title: '', place: 'Olivetta S. Michele (IM)', lat: 43.879856, lon:7.514627},*/
        {date: '03/08', title: 'Montelago Celtic Festival', place: 'Serravalle di Chienti (MC)', lat:43.037578, lon:12.911694},
        {date: '04/08', title: 'Montelago Celtic Festival', place: 'Serravalle di Chienti (MC)', lat:43.037578, lon:12.911694},
        {date: '15/08', title: '', place: 'Entracque (CN)', lat:44.241300, lon:7.398903},	
	      {date: '08/09', title: '', place: 'San Defendente di Cervasca (CN)', lat: 44.395203, lon:7.491598},
        {date: '29/09', title: 'Festival Interculturel APV', place: 'Carcassonne (Francia)', lat:43.211310, lon:2.351110},
        {date: '06/10', title: '', place: 'Rossana (CN)', lat:44.543599, lon:7.431411},
      ],
      2017: [
        {date: '14/01', title: '', place: 'Lurisia (CN)', lat:44.304863, lon:7.708958},
        {date: '18/03', title: 'St. Patrick Celtic Festival', place: 'Campofilone (FM)', lat:43.0807464, lon:13.8178153},
        {date: '25/03', title: '', place: 'Centallo (CN)', lat:44.496432, lon:7.585254},
        {date: '08/04', title: '', place: 'Acquarossa (Svizzera)', lat:46.456355, lon:8.938265},
        {date: '16/04', title: 'Lago dij Baloss', place: 'Saluzzo (CN)', lat:44.648338, lon:7.438592},
        {date: '23/04', title: 'Insubria Festival', place: 'Marcallo con Casone (MI)', lat:45.483367, lon:8.871979},        
        {date: '26/05', title: 'Sgrana e TraBalla Festival', place: 'Firenze', lat:43.761694, lon:11.309405},
        {date: '27/05', title: 'Circolo Arci Margot', place: 'Carmagnola (TO)', lat:44.848149, lon:7.721613},
        {date: '16/06', title: '', place: 'Dumenza (VA)', lat: 46.020491, lon:8.787733},
        {date: '17/06', title: 'Ruderirock', place: 'Villafalletto (CN)', lat: 44.546086, lon:7.538847},
        {date: '24/06', title: 'Piemonte in tavola', place: 'Valmadonna (AL)', lat: 44.971097, lon:8.611674},
        {date: '08/07', title: '', place: 'Verrières-en-Forez (Francia)', lat: 45.571183, lon:3.995876},
        {date: '14/07', title: 'Festen\'oc Festival', place: 'Saurat (Francia)', lat: 42.877085, lon:1.538284},
        {date: '15/07', title: 'Celtie d\'Oc Festival', place: 'Cazavet (Francia)', lat: 43.002568, lon:1.042527},
        {date: '16/07', title: '', place: 'Cervasca (CN)', lat: 44.380811, lon:7.470457},
		    {date: '20/07', title: '', place: 'Sampeyre (CN)', lat: 44.579364, lon:7.188341},
        {date: '27/07', title: 'Festival Alta Felicità', place: 'Vanaus (TO)', lat:45.158379, lon:7.012075},
        {date: '28/07', title: '', place: 'Rossana (CN)', lat:44.543599, lon:7.431411},
        {date: '29/07', title: '', place: 'Bard (AO)', lat: 45.609086, lon:7.745593},
        {date: '03/08', title: '', place: 'Pieve Cesato (RA)', lat:44.337199, lon:11.957956},
        {date: '04/08', title: 'Fêtes de Monein', place: 'Monein (Francia)', lat: 43.290549, lon:-0.566213},
		    {date: '05/08', title: '', place: 'Alto (CN)', lat: 44.108493, lon:8.003239},
		    {date: '10/08', title: 'Festa di San Lorenzo', place: 'Chianale (CN)', lat: 44.647451, lon:6.997499},
        {date: '12/08', title: '', place: 'Bolbeno (TN)', lat:46.031127, lon:10.738353},
        {date: '03/09', title: 'World Fest Fest', place: 'Madonna delle Grazie (CN)', lat:44.392877, lon:7.534980},
        {date: '30/09', title: 'Sagra della Castagna e del Fungo', place: 'Rossana (CN)', lat:44.544188, lon:7.430452},
        {date: '31/10', title: 'Capodanno Celtico', place: 'Riolo Terme (RA)', lat:44.275094, lon:11.725570},
        {date: '23/12', title: '', place: 'Centallo (CN)', lat:44.496432, lon:7.585254},
      ],
      2016: [
        {date: '10/01', title: 'Teatro Altrove', place: 'Genova', lat:44.405650, lon:8.946256},
        {date: '17/03', title: 'Irlanda in festa', place: 'Cuneo', lat:44.392877, lon:7.534980},
        {date: '18/03', title: 'Jack Madden Irish Pub', place: 'Asti', lat:44.900751, lon:8.206426},
        {date: '02/04', title: 'Ostau', place: 'Marseille (Francia)', lat: 43.294480, lon:5.385673},
        {date: '03/04', title: 'Trad & Boulegan festival', place: 'Draguignan (Francia)', lat: 43.537657, lon:6.466920},
        {date: '04/04', title: '', place: 'Châteauneuf de Gadagne (Francia)', lat: 43.932339, lon:4.943401},
        {date: '08/04', title: '', place: 'Coazze (TO)', lat: 45.051520, lon:7.303860},
        {date: '24/04', title: 'Viva la resistenza! - CSA La Talpa e l\'Orologio', place: 'Imperia', lat: 43.912946, lon:8.020845},
        {date: '25/04', title: 'Festa della liberazione', place: 'Firenze', lat: 43.766832, lon:11.247326},
        {date: '29/04', title: 'FriAir Festival', place: 'Fribourg (Svizzera)', lat: 46.806477, lon:7.161972},
        {date: '30/04', title: 'Festival del Primo Maggio', place: 'Bellinzona (Svizzera)', lat: 46.194622, lon:9.024412},
        {date: '06/05', title: 'Officine Corsare', place: 'Torino', lat: 45.073439, lon:7.703500},
        {date: '07/05', title: 'Rock\'n\'food', place: 'Savigliano (CN)', lat: 44.648495, lon:7.639103},
        {date: '14/05', title: 'Les Festejades', place: 'Gruissans (Francia)', lat: 43.107052, lon:3.086181},
        {date: '27/05', title: 'Giro d\'Italia', place: 'Vinadio (CN)', lat: 44.232910, lon:7.105365},
        {date: '03/06', title: 'Folkampestre', place: 'Montevecchio (LC)', lat: 45.727021, lon:9.351164},
        {date: '09/06', title: 'Wey Cup', place: 'Saluzzo (CN)', lat: 44.647405, lon:7.485308},
        {date: '11/06', title: 'Festin dou Boutaù', place: 'Levens (Francia)', lat: 43.859184, lon:7.225960},
        {date: '18/06', title: 'Coniolo in Folk', place: 'Coniolo (AL)', lat: 45.147654, lon:8.373502},
        {date: '25/06', title: '', place: 'Valmadonna (AL)', lat: 44.971097, lon:8.611674},
        {date: '28/06', title: 'Festival Bala cui Rat', place: 'Piacenza', lat: 45.055927, lon: 9.688341},
        {date: '01/07', title: 'Pizza Fest', place: 'Cuneo', lat: 44.389024, lon: 7.547838},
        {date: '07/07', title: 'Piovono Salsicce Festival', place: 'Villastellone (TO)', lat: 44.921204, lon:7.744541},
        {date: '09/07', title: 'Festival dell\'Immateriale', place: 'Bannio Anzino (VB)', lat: 45.984741, lon:8.155819},
        {date: '16/07', title: 'Le Basse del Troll', place: 'Cuneo', lat: 44.392833, lon:7.532394},
        {date: '23/07', title: 'Festa Occitana', place: 'Olivetta S. Michele (IM)', lat: 43.879856, lon:7.514627},
        {date: '27/07', title: '', place: 'Sampeyre (CN)', lat: 44.579364, lon:7.188341},
        {date: '10/08', title: 'Festa di San Lorenzo', place: 'Chianale (CN)', lat: 44.647451, lon:6.997499},
        {date: '13/08', title: '', place: 'Pagno (CN)', lat: 44.612944, lon:7.428961},
        {date: '18/08', title: 'Hestiv\'Òc Festival', place: 'Pau (Francia)', lat: 43.298790, lon:-0.37598},
        {date: '19/08', title: '', place: 'Bréole (Francia)', lat: 44.457101, lon:6.291742},
        {date: '21/08', title: 'Festa della Segale', place: 'Valdieri (CN)', lat: 44.2773858, lon:7.3935701},
        {date: '30/09', title: '', place: 'Villar Focchiardo (TO)', lat: 45.111320, lon:7.232871},
        {date: '09/10', title: '', place: 'Bussero (MI)', lat: 45.535730, lon:9.370038},
        {date: '15/10', title: '', place: 'Borghetto S. Spirito (SV)', lat: 44.1087504, lon:8.2405346},
        {date: '27/11', title: 'Festa Expa', place: 'Caraglio (CN)', lat: 44.425373, lon:7.428114},
        {date: '17/12', title: '', place: 'Draguignan (Francia)', lat: 43.537657, lon:6.466920}
      ],
      2015: [
        {date:'01/02', title:'Musicultura 2015', place:'Macerata', lat:43.298427, lon:13.453477},
        {date:'07/02', title:'Circolo ARCI Cinema Vekkio', place:'Corneliano d\'Alba (CN)', lat:44.735958, lon:7.958443},
        {date:'21/02', title:'', place:'Bussoleno (TO)', lat:45.138757, lon:7.150285},
        {date:'07/03', title:'Circolo ARCI Margot', place:'Carmagnola (TO)', lat:44.845885, lon:7.717436},
        {date:'21/03', title:'Festa LVIA - Palazzo Bertello', place:'Borgo San Dalmazzo (CN)', lat:44.331176, lon:7.490412},
        {date:'24/04', title:'', place:'Villar San Costanzo (CN)', lat:44.481597, lon:7.383710},
        {date:'25/04', title:'Festival AIOLI', place:'Borgo San Dalmazzo (CN)', lat:44.331176, lon:7.490412},
        {date:'03/05', title:'', place:'Santa Margherita Ligure (GE)', lat:44.334574, lon:9.213659},
        {date:'16/05', title:'', place:'Cossano Belbo (CN)', lat:44.665263, lon:8.195752},
        {date:'23/05', title:'Festival GIOCS', place:'Cuneo', lat:44.392877, lon:7.534980},
        {date:'02/06', title:'Festival della Montagna', place:'Cuneo', lat:44.392877, lon:7.534980},
        {date:'03/07', title:'L\'Isola', place:'Frassino (CN)', lat:44.570492, lon:7.274382},
        {date:'05/07', title:'Festa della Magnesia', place:'Bernezzo (PC)', lat:44.384017, lon:7.438793},
        {date:'08/07', title:'Not(t)te Blue Festival', place:'Fiorenzuola (PC)', lat:44.927850, lon:9.913146},
        {date:'09/07', title:'', place:'Savona', lat:44.297560, lon:8.464500},
        {date:'18/07', title:'', place:'Cervasca (CN)', lat:44.380103, lon:7.472892},
        {date:'19/07', title:'Collisioni Festival', place:'Barolo (CN)', lat:44.608803, lon:7.940304},
        {date:'24/07', title:'Le Basse del Troll', place:'Cuneo', lat:44.392877, lon:7.534980},
        {date:'07/08', title:'Festa dell\'Unità', place:'Cappella Maggiore (TV)', lat:45.969312, lon:12.351672},
        {date:'29/08', title:'La Chaminado', place:'Cuneo', lat:44.389710, lon:7.547290},
        {date:'11/09', title:'Fête du Bois', place:'La Martre (Francia)', lat:43.771611, lon:6.599143},
        {date:'12/09', title:'Upega Folk Festival', place:'Upega (CN)', lat:44.128566, lon:7.727702},
        {date:'18/09', title:'Folkermesse', place:'Casale Monferrato (AL)', lat:45.131609, lon:8.450503},
        {date:'09/10', title:'Diavolo Rosso', place:'Asti', lat:44.900751, lon:8.206426},
        {date:'18/10', title:'Switch On Future Festival', place:'Bra (CN)', lat:44.692343, lon:7.855116},
        {date:'31/10', title:'Uvernada', place:'Saluzzo(CN)', lat:44.650447, lon:7.503346},
        {date:'31/10', title:'Mezcal', place:'Savigliano(CN)', lat:44.647033, lon:7.662464}
      ],
      2014: [
        {date: '11/01', title: '', place: 'Bussoleno (TO)', lat:5.139344, lon:7.1366544},
        {date: '31/01', title: 'La Scighera', place: 'Milano', lat:45.5029839, lon:9.1597414},
        {date: '07/02', title: 'Office Corsare', place: 'Torino', lat:45.073459, lon:7.703884},
        {date: '22/02', title: 'Arci Mezcal', place: 'Savigliano (CN)', lat:44.658091, lon:7.657993},
        {date: '01/03', title: 'La Talpa e l\'Orologio CSA', place: 'Imperia', lat:43.913004, lon:8.023238},
        {date: '09/03', title: 'Teatro Altrove', place: 'Genova', lat:44.410310, lon:8.931888},
        {date: '04/04', title: '', place: 'Melpignano (LE)', lat:40.156545, lon:18.292310},
        {date: '20/06', title: 'Rèis Folk Festival', place: 'Santo Stefano Roero (CN)', lat:44.789008, lon:7.939730},
        {date: '21/06', title: '', place: 'Rossana (CN)', lat:44.543419, lon:7.433276},
        {date: '27/06', title: 'Festa del Troll', place: 'Vernante (CN)', lat:44.232319, lon:7.525715},
        {date: '04/07', title: 'Magnesia Festival', place: 'Bernezzo (CN)', lat:44.389801, lon:7.430836},
        {date: '10/07', title: 'Collegno Folk Festival', place: 'Collegno (TO)', lat:45.078620, lon:7.567390},
        {date: '13/07', title: 'Festen\'Oc', place: 'Saurat (Francia)', lat:42.882428, lon:1.500861},
        {date: '16/07', title: 'Bar Centro Fondo', place: 'Aisone (CN)', lat:44.307505, lon: 7.221591},
        {date: '18/07', title: 'Festival Risonando De Andrè', place: 'Soriano nel Cimino (VT)', lat:42.417752, lon:12.233436},
        {date: '31/07', title: 'Bombo Festival', place: 'Torino', lat:45.098556, lon:7.689651},
        {date: '07/08', title: '', place: 'Vernante (Cn)', lat:44.244904, lon:7.534488},
        {date: '08/08', title: 'Plenilunio d\'Agosto', place: 'Civezza (IM)', lat:43.880313, lon:7.951417},
        {date: '10/08', title: 'Festa di San Lorenzo ', place: 'Chianale (CN)', lat:44.647036, lon:6.999390},
        {date: '06/09', title: 'Festa della vendemmia', place: 'Costa Vescovato (AL)', lat:44.816076, lon:8.927083},
        {date: '12/09', title: 'Nuvolari Libera Tribù', place: 'Cuneo', lat:44.388786, lon:7.554539},
        {date: '13/09', title: 'Festi Baleti', place: 'Saorge (Francia)', lat:43.985935, lon:7.554188},
        {date: '14/09', title: '', place: 'Cuneo', lat:44.389133, lon:7.547605},
        {date: '19/09', title: 'CPA Fi Sud', place: 'Firenze', lat:43.761582, lon:11.308511},
        {date: '27/09', title: 'Saluzzo Musica Festival', place: 'Saluzzo (CN)', lat:44.645186, lon:7.492198}
      ],
      2013: [
        {date: '09/02', title: 'Carnevale Folk', place: 'Bussoleno (TO)', lat:45.136494, lon:7.152207},
        {date: '16/03', title: 'San Patrick\'s Day', place: 'Piacenza', lat:45.068671, lon:9.692688},
        {date: '19/05', title: 'Fête des Mai', place: 'Nizza (Francia)', lat:43.720141, lon:7.277305},
        {date: '24/05', title: 'Sgrana e Traballa Festival', place: 'Firenze', lat:43.7622485, lon:11.3021473},
        {date: '31/05', title: 'Ferie Medievali Festival', place: 'Pavone Canavese (TO)', lat:45.434599, lon:7.854452},
        {date: '08/06', title: '24 ore di sport', place: 'Cuneo', lat:44.384483, lon:7.542629},
        {date: '12/06', title: 'Nuvolari Libera Tribù', place: 'Cuneo', lat:44.384483, lon:7.542629},
        {date: '15/06', title: 'Arci Camalli', place: 'Imperia', lat:43.888085, lon:8.043274},
        {date: '21/06', title: '', place: 'Breil-sur-Roya (Francia)', lat:43.937709, lon:7.515678},
        {date: '22/06', title: '', place: 'Mombaruzzo (AT)', lat:44.773519, lon:8.448443},
        {date: '29/06', title: 'Paolo Music Fest', place: 'Paullo (MI)', lat:45.417552, lon:9.408073},
        {date: '07/07', title: 'Find the cure Festival', place: 'Acceglio (CN)', lat:44.477232, lon:6.966383},
        {date: '14/07', title: 'Irlanda in musica Festival', place: 'Bobbio (PC)', lat:44.77032, lon:9.385744},
        {date: '25/07', title: 'Estivada de Rodez Festival', place: 'Rodez (Francia)', lat:44.349402, lon:2.575994},
        {date: '28/07', title: '', place: 'Bernezzo (CN)', lat:44.3840175, lon:7.4387929},
        {date: '03/08', title: '', place: 'Murazzano (CN)', lat:44.475012, lon:8.021393},
        {date: '04/08', title: 'Campeggio Resistente', place: 'Valloriate (CN)', lat:44.337785, lon:7.369202},
        {date: '31/08', title: '', place: 'Savigliano (CN)', lat:44.6470327, lon:7.6624635},
        {date: '07/09', title: '', place: 'Cosseria (SV)', lat:44.376263, lon:8.232536},
        {date: '09/09', title: 'San Sereno', place: 'S. Rocco Castagnaretta (CN)', lat:44.365373, lon:7.522159},
        {date: '26/10', title: 'Circolo Arci Margot', place: 'Carmagnola (TO)', lat:44.848055, lon:7.721450},
        {date: '06/12', title: 'CPA Fi Sud', place: 'Firenze', lat:43.761582, lon:11.308511},
        {date: '13/12', title: 'Amenes Etno Bistrot', place: 'Castelletto di Busca (CN)', lat:44.478431, lon:7.445059},
        {date: '28/12', title: 'Cascina Sacerdote', place: 'Fossano (CN)', lat:44.556715, lon:7.737473}
      ],
      2012: [
        {date: '11/02', title: 'Carnaval Biarnès Festival', place: 'Pau (Francia)', lat:43.2951, lon:-0.370797},
        {date: '16/03', title: 'St. Patrick\'s Beer Fest', place: 'Caorso (PC) ', lat:45.055576, lon:9.871559},
        {date: '25/04', title: '', place: 'Carpentras (Francia)', lat:44.0555639, lon:5.048722},
        {date: '25/05', title: 'Sgrana e Traballa Festival', place: 'Firenze', lat:43.7622485, lon:11.3021473},
        {date: '26/05', title: 'Arci Camalli', place: 'Imperia', lat:43.887892, lon:8.031564},
        {date: '03/06', title: 'NordSud in musica', place: 'La Loggia (TO)', lat:44.9587592, lon:7.6684444},
        {date: '15/06', title: 'Officine Corsare', place: 'Torino', lat:45.0708515, lon:7.6843404},
        {date: '30/06', title: '', place: 'Millesimo (SV) ', lat:44.364129, lon:8.2059402},
        {date: '13/07', title: 'Festen Oc Festival', place: 'Saurat (Francia)', lat:42.877151, lon:1.538256},
        {date: '20/07', title: '', place: 'Sanremo (IM)', lat:43.8184062, lon:7.7784215},
        {date: '26/07', title: 'Notte bianca', place: 'Savona', lat:44.3110703, lon:8.4772463},
        {date: '27/07', title: 'Venigallia Celtic Festival', place: 'Thiene (VI) ', lat:45.7098703, lon:11.4806296},
        {date: '29/07', title: '', place: 'Bernezzo (CN) ', lat:44.3863293, lon:7.4365983},
        {date: '31/07', title: 'Festival de Martigues', place: 'Marsiglia (Francia)', lat:43.296482, lon:5.36978},
        {date: '09/08', title: '', place: 'Cravegna (VB)', lat:46.239537, lon:8.312037},  
        {date: '12/08', title: '', place: 'Pigna (IM)', lat:43.9332962, lon:7.6618888}, 
        {date: '17/08', title: '', place: 'Villeneuve sur Lot (Francia)', lat:44.407126, lon:0.703561},
        {date: '24/08', title: 'Festa della liberazione', place: 'Torre Boldone (BG)', lat:45.7151666, lon:9.7112592},
        {date: '25/08', title: 'Tarantella Power Festival', place: 'Badolato (CZ)', lat:38.568295, lon:16.525566},
        {date: '26/08', title: 'CPA Firenze Sud', place: 'Firenze (FI)', lat:43.7622485, lon:11.3021473},
        {date: '16/11', title: 'Amenes Etno Bistrot', place: 'Castelletto di Busca (CN)', lat:44.478453, lon:7.444967}
      ],
      2011: [
        {date:'27/02', title:'Carnevalanga', place:'Venezia', lat:45.4343363, lon:12.3387844},
        {date:'06/03', title:'Carnevale', place:'Dronero (CN)', lat:44.4667222, lon:7.3525185},
        {date:'16/03', title:'150 anni Unità d\'Italia', place:'Torino', lat:45.0708515, lon:7.6843404},
        {date:'02/04', title:'Arci Camalli', place:'Imperia', lat:43.887892, lon:8.031564},
        {date:'23/04', title:'', place:'Lugano (Svizzera)', lat:46.0065117, lon:8.9523121},
        {date:'29/04', title:'Insubria Folk Festival', place:'Marcallo con Casone (MI)', lat:45.4852763, lon:8.8703086},
        {date:'04/06', title:'', place:'Mestre (VE)', lat:45.4958374, lon:12.2441068},
        {date:'11/06', title:'', place:'Borgomanero (NO)', lat:45.698695, lon:8.462571},
        {date:'21/06', title:'Acque e Terre Festival', place:'Calcinato (BS)', lat:45.4581296, lon:10.4147037},
        {date:'02/07', title:'Tradenda Folk Festival', place:'Grosseto (GR)', lat:42.7628652, lon:11.112776},
        {date:'10/07', title:'Folkest', place:'Sedegliano (UD)', lat:46.0167407, lon:12.9792407},
        {date:'17/07', title:'Tumin Eletric Festival', place:'Melle (CN)', lat:44.5627277, lon:7.3214478},
        {date:'23/07', title:'Fek Festival', place:'Pedavena (BL)', lat:46.039614, lon:11.880379},
        {date:'29/07', title:'Rossana Rock', place:'Rossana (CN)', lat:44.5440668, lon:7.4323863},
        {date:'05/08', title:'', place:'Mussolente (VI)', lat:45.7801666, lon:11.8073703},
        {date:'13/08', title:'', place:'Civezza (IM)', lat:43.8809629, lon:7.9528333},
        {date:'25/08', title:'Andar per musica', place:'Villa d\'Adda (BG)', lat:45.7150185, lon:9.4628333},
        {date:'17/09', title:'Suns Festival', place:'Falera (Svizzera)', lat:46.8014036, lon:9.2294964},
        {date:'24/09', title:'Festa del tartufo', place:'Millesimo (SV)', lat:44.364129, lon:8.2059402},
        {date:'29/10', title:'Capodanno Celtico', place:'Milano (MI)', lat:45.463681, lon:9.1881714},
        {date:'31/12', title:'Capodanno', place:'Imperia (IM)', lat:43.887892, lon:8.031564}
      ],
      2010: [
        {date:'04/06', title:'Folk Fest', place:'Mendrisio (Svizzera)', lat:45.8713, lon:8.96838},
        {date:'11/06', title:'3° Festival Celtico', place:'Vigevano (PV)', lat:45.317092, lon:8.8586493},
        {date:'10/07', title:'Celtie d\'Oc' , place:'Cazavet (Francia)', lat:43.00259 , lon:1.0425739 },
        {date:'06/08', title:'', place:'Serramonacesca (PE)', lat:42.2456092 , lon:14.0927887 },
        {date:'07/08', title:'Etnorock', place:'Atri (TE)', lat:42.5802021 , lon:13.9810016 },
        {date:'08/08', title:'Notte sotto le stelle', place:'Spinone al Lago (BG)', lat:45.7683289 , lon:9.9257073 },
        {date:'20/08', title:'Hestiv\'Oc', place:'Pau (Francia)', lat:43.2951 , lon:0.370797 },
        {date:'22/08', title:'San Bernardo', place:'Venasca (CN)', lat:44.5619703 , lon:7.3961958 },
        {date:'04/09', title:'', place:'San Bernardo di Conio (IM)', lat:44.0002936 , lon:7.8731463 },
        {date:'18/09', title:'Folk Festival', place:'Cassano d\'Adda (MI)', lat:45.5260596 , lon:9.5167713 },
        {date:'01/10', title:'Sagra del fungo', place:'Rossana (CN)', lat:44.5440668 , lon:7.4323863 },
        {date:'12/10', title:'Open Baladin', place:'Cinzano (CN)', lat:44.6934601 , lon:7.9198927 }
        ],
      2009: [
        {date:'25/04', title:'Festival Celtico Terre Insubre', place:'Marcallo (MI)', lat:45.4852763, lon:8.8703086 },
        {date:'13/06', title:'Arci Camalli', place:'Imperia (IM)', lat:43.8878924, lon:8.0315641 },
        {date:'20/06', title:'Festival Celtico', place:'Vigevano (PV)', lat:45.317092, lon:8.8586493 },
        {date:'26/06', title:'', place:'Piacenza', lat:45.0537735, lon:9.6951421 },
        {date:'27/06', title:'', place:'Meduno (PN)', lat:46.217031, lon:12.795897 },
        {date:'12/07', title:'Festa delle minoranze linguistiche', place:'Monpatero (TO)', lat:45.3015528, lon:7.4403954 },
        {date:'13/07', title:'Truccioli d\'artista', place:'Rivoli (TO)', lat:45.070417, lon:7.5197683 },
        {date:'14/07', title:'La Dodicesima Luna', place:'San Felice sul Panaro (MO)', lat:44.8342407, lon:11.1437777 },
        {date:'26/07', title:'Fek Festival', place:'Pedavena (TO)', lat:46.039614, lon:11.880379 },
        {date:'31/07', title:'Cian Zerbo Fesival', place:'Vasia (IM)', lat:43.9331481, lon:7.954074 },
        {date:'01/08', title:'Festival Celtico Dana Teiwaz', place:'Pessinetto (TO)', lat:45.289181, lon:7.403896 },
        {date:'02/08', title:'Nistoc Festival', place:'Sulzano (BS)', lat:45.689927, lon:10.1003339 },
        {date:'08/08', title:'Festa patronale', place:'Feisoglio (CN)', lat:44.5448703, lon:8.1061111 },
        {date:'21/08', title:'Rock Nights', place:'Castel di ieri(AQ)', lat:42.1156144, lon:13.7427327 },
        {date:'19/09', title:'Celtic White Night', place:'Riolo Terme (RA)', lat:44.2764259, lon:11.7289259 },
        {date:'31/10', title:'Capodanno Celtico', place:'Bormio (SO)', lat:46.4676064, lon:10.3780623 },
        {date:'17/11', title:'Novaria', place:'Novara (NO)', lat:45.4450591, lon:8.6186302 },
        {date:'27/11', title:'MEI Festival', place:'Faenza (RA)', lat:44.2853477, lon:11.8829895 }
        ],
      2008: [
        {date:'15/03', title:'Arci Camalli', place:'Imperia (IM)', lat:43.8878924 , lon:8.0315641 },
        {date:'12/04', title:'', place:'Biasca (Svizzera)', lat:46.3556179 , lon:8.9689238 },
        {date:'27/04', title:'Festa del legno', place:'Brossasco (CN)', lat:44.5697037 , lon:7.3628148 },
        {date:'30/04', title:'', place:'Ceretto di Costigliole Saluzzo (CN)', lat:44.5450516 , lon:7.480878 },
        {date:'24/05', title:'', place:'Piacenza', lat:45.0537735 , lon:9.6951421 },
        {date:'31/05', title:'', place:'Fossano (CN)', lat:44.5500053 , lon:7.7237734 },
        {date:'14/06', title:'Solstizio d\'estate', place:'Sondalo (SO)', lat:46.3306135 , lon:10.3268228 },
        {date:'15/06', title:'Celtic Festival', place:'Vigevano (PV)', lat:45.317092 , lon:8.8586493 },
        {date:'22/06', title:'25 anni dell\'Istituto Suzuki', place:'Saluzzo (CN)', lat:44.6445906 , lon:7.4926037 },
        {date:'05/07', title:'Ostiano Music Festival', place:'Ostiano (CR)', lat:45.2217222 , lon:10.2531296 },
        {date:'06/07', title:'Notte Rock', place:'Provaglio Val Sabbia (BS)', lat:45.6897331 , lon:10.4341695 },
        {date:'11/07', title:'Tarvisium Celtica', place:'Pezzan di Carbonera (TV)', lat:45.6987592 , lon:12.2928148 },
        {date:'12/07', title:'Folkest', place:'Papariano di Fiumicello (UD)', lat:45.806417 , lon:13.418156 },
        {date:'14/07', title:'Folkest', place:'Meduno (PN)', lat:46.217031 , lon:12.795897 },
        {date:'20/07', title:'Tumin Eletric Festival', place:'Melle (CN)', lat:44.5627277 , lon:7.3214478 },
        {date:'22/07', title:'Busker\'s Festival', place:'Celle Ligure (SV)', lat:44.3425107 , lon:8.5450983 },
        {date:'27/07', title:'Festa Patronale', place:'Monastero di Dronero (CN)', lat:44.4703095 , lon:7.4223255 },
        {date:'02/08', title:'', place:'Diano San Pietro (IM)', lat:43.9323857 , lon:8.0731406 },
        {date:'22/08', title:'', place:'Revello (CN)', lat:44.6556296 , lon:7.3926666 },
        {date:'23/08', title:'Festa d\'Oc', place:'Limone Piemonte (CN)', lat:44.201391 , lon:7.5762006 },
        {date:'24/08', title:'', place:'Tenda (Francia)', lat:44.089097 , lon:7.593454 },
        {date:'13/09', title:'', place:'Bardineto (SV)', lat:44.1915729 , lon:8.1354915 },
        {date:'21/09', title:'', place:'Rivalta (TO)', lat:45.0329894 , lon:7.5231802 },
        {date:'03/10', title:'', place:'Rossana (CN)', lat:44.5440668 , lon:7.4323863 },
        {date:'25/10', title:'Capodanno Celtico', place:'Milano', lat:45.463681 , lon:9.1881714 },
        {date:'22/11', title:'', place:'Verzuolo (CN)', lat:44.6012006 , lon:7.4830907 },
        {date:'31/12', title:'Capodanno', place:'Piacenza', lat:45.0537735 , lon:9.6951421 }
        ],
      2007: [
        {date:'01/03', title:'E\'Cocktail Bar', place:'Torino (TO)', lat:45.0708515 , lon:7.6843404 },
        {date:'11/03', title:'Padiglione 14', place:'Collegno (TO)', lat:45.0777469 , lon:7.5703792 },
        {date:'17/03', title:'Arci Camalli', place:'Imperia (IM)', lat:43.8878924 , lon:8.0315641 },
        {date:'30/04', title:'Notte Bianca', place:'Asti', lat:44.9008642 , lon:8.206813 },
        {date:'01/05', title:'Festa del Legno', place:'Brossasco (CN)', lat:44.5697037 , lon:7.3628148 },
        {date:'11/05', title:'Arci JJ Live', place:'Tagliata di Fossano (CN)', lat:44.5500053 , lon:7.7237734 },
        {date:'19/05', title:'Cascina Sacerdote', place:'Fossano (CN)', lat:44.5500053 , lon:7.7237734 },
        {date:'25/05', title:'Mantova Musica Festival', place:'Mantova', lat:45.1603653 , lon:10.7976976 },
        {date:'22/06', title:'Il Cerchio Celtico', place:'Sondalo (SO)', lat:46.3306135 , lon:10.3268228 },
        {date:'28/06', title:'Festa d\'estate', place:'Caramagna Piemonte (CN)', lat:44.7802737 , lon:7.7389728 },
        {date:'30/06', title:'Occitanica', place:'Dronero (CN)', lat:44.4667222 , lon:7.3525185 },
        {date:'01/07', title:'Notte Rock', place:'Provaglio Val Sabbia (BR)', lat:45.6897331 , lon:10.4341695 },
        {date:'06/07', title:'Folkest', place:'Sacile (PN)', lat:45.9540933 , lon:12.5023325 },
        {date:'07/07', title:'Folkest', place:'Travesio (PN)', lat:46.1979814 , lon:12.87 },
        {date:'08/07', title:'Folkest', place:'Crevatini (Slovenia)', lat:45.5833372 , lon:13.7566695 },
        {date:'15/07', title:'Tumin Eletric Festival', place:'Melle (CN)', lat:44.5627277 , lon:7.3214478 },
        {date:'22/07', title:'Armfest', place:'Bologna', lat:44.4941903 , lon:11.3465185 },
        {date:'28/07', title:'Sognando Rock', place:'Serramonacesca (PE)', lat:42.2456092 , lon:14.0927887 },
        {date:'01/08', title:'', place:'Mussolente (VI)', lat:45.7801666 , lon:11.8073703 },
        {date:'18/08', title:'Balla coi Cinghiali', place:'Bardineto (SV)', lat:44.1915729 , lon:8.1354915 },
        {date:'19/08', title:'', place:'Tenda (Francia)', lat:44.089097 , lon:7.593454 },
        {date:'08/09', title:'Notte Bianca', place:'Sanremo (IM)', lat:43.8184062 , lon:7.7784215 },
        {date:'22/09', title:'Celtic White Night', place:'Riolo Terme (RA)', lat:44.2764259 , lon:11.7289259 },
        {date:'29/09', title:'Bustofolk Festival Interceltico', place:'Busto Arsizio (VA)', lat:45.6114064 , lon:8.8502715 },
        {date:'03/11', title:'XVIII Festa de Lou Dalfin', place:'Borgo San Dalmazzo (CN)', lat:44.3295727 , lon:7.488494 }
        ],
      2006: [
        {date:'15/02', title:'Olimpiadi Torino 2006', place:'Pragelato (TO)', lat:45.0155261 , lon:6.9420492 },
        {date:'24/02', title:'Circolo 005', place:'Laveno (VA)', lat:45.9104302 , lon:8.6190607 },
        {date:'04/03', title:'Olimpiadi Torino 2006', place:'Gaglione (TO)', lat:45.0155261 , lon:6.9420492 },
        {date:'07/03', title:'', place:'Cortemilia (CN)', lat:44.5797931 , lon:8.1912824 },
        {date:'14/04', title:'Espace Populaire', place:'Aosta', lat:45.7350001 , lon:7.313234 },
        {date:'15/04', title:'Padiglione 14', place:'Collegno (TO)', lat:45.0777469 , lon:7.5703792 },
        {date:'24/04', title:'Insubria Festival', place:'Marcallo con Casone (MI)', lat:45.4852763 , lon:8.8703086 },
        {date:'29/04', title:'Trimi\'s Festival', place:'Bologna', lat:44.4941903 , lon:11.3465185 },
        {date:'12/05', title:'', place:'Saluzzo (CN)', lat:44.6445906 , lon:7.4926037 },
        {date:'02/06', title:'Red House', place:'Bra (CN)', lat:44.6978177 , lon:7.8545363 },
        {date:'08/06', title:'Trimi\'s Festival', place:'Casalecchio di Reno (BO)', lat:44.476574 , lon:11.2770555 },
        {date:'10/06', title:'Trimi\'s Festival', place:'Casalecchio di Reno (BO)', lat:44.476574 , lon:11.2770555 },
        {date:'11/06', title:'Festa dei Jari', place:'Manta (CN)', lat:44.6168888 , lon:7.4881296 },
        {date:'18/06', title:'Bodeguita De Verano', place:'Benevagienna (CN)', lat:44.4936218 , lon:7.8600997 },
        {date:'25/06', title:'Colonia Sonora', place:'Collegno (TO)', lat:45.0777469 , lon:7.5703792 },
        {date:'15/07', title:'', place:'Pordenone (TO)', lat:45.9626521 , lon:12.6550436 },
        {date:'16/07', title:'Nuvolari Libera Tribù', place:'Cuneo (CN)', lat:44.3887987 , lon:7.5471107 },
        {date:'23/07', title:'Tumin Eletric Festival', place:'Melle (CN)', lat:44.5627277 , lon:7.3214478 },
        {date:'30/07', title:'Festival dell\'Insubria', place:'Buguggiate (VA)', lat:45.7832962 , lon:8.8117222 },
        {date:'10/08', title:'San Lorenzo', place:'Chianale (CN)', lat:44.6223683 , lon:7.0312836 },
        {date:'14/08', title:'', place:'Barge (CN)', lat:44.725278 , lon:7.3242139 },
        {date:'16/08', title:'', place:'Festiona (CN)', lat:44.3151144 , lon:7.2953744 },
        {date:'26/08', title:'Festival delle Arti', place:'Bologna (BO)', lat:44.4941903 , lon:11.3465185 },
        {date:'02/09', title:'Nubilaria Festival', place:'Novellara (RE)', lat:44.8439074 , lon:10.7286111 },
        {date:'09/09', title:'Notte Bianca', place:'Sanremo (IM)', lat:43.8184062 , lon:7.7784215 },
        {date:'16/09', title:'Keltikehre Festival', place:'Roppolo (BI)', lat:45.421574 , lon:8.0709629 },
        {date:'17/09', title:'Festival Adro Medioevale', place:'Adro (BR)', lat:45.621823 , lon:9.957437 },
        {date:'23/09', title:'', place:'Rivoli (TO)', lat:45.070417 , lon:7.5197683 },
        {date:'07/10', title:'60 anni di CNA Torino', place:'Torino (TO)', lat:45.0708515 , lon:7.6843404 },
        {date:'22/10', title:'IRCC', place:'Festiona (CN)', lat:44.3151144 , lon:7.2953744 },
        {date:'28/10', title:'Capodanno Celtico', place:'Milano (MI)', lat:45.463681 , lon:9.1881714 },
        {date:'23/12', title:'Circolo Ratatoj', place:'Saluzzo (CN)', lat:44.6445906 , lon:7.4926037 },
        {date:'31/12', title:'Capodanno', place:'Sanremo (IM)', lat:43.8184062 , lon:7.7784215 }
        ],
      2005: [
        {date:'29/01', title:'Patchanka', place:'Chieri (TO)', lat:45.011561 , lon:7.8225778 },
        {date:'05/03', title:'', place:'Torre Pelice (TO)', lat:44.8205758 , lon:7.2236962 },
        {date:'25/03', title:'', place:'Saluzzo (CN)', lat:44.6445906 , lon:7.4926037 },
        {date:'09/04', title:'', place:'Torre Pelice (TO)', lat:44.8205758 , lon:7.2236962 },
        {date:'30/04', title:'Tavagnasco Rock Festival', place:'Tavagnasco (TO)', lat:45.5460007 , lon:7.8238672 },
        {date:'29/06', title:'Piosummer Festival', place:'Piossasco (TO)', lat:44.9910843 , lon:7.4635379 },
        {date:'22/07', title:'Musicarnevart', place:'Anguillara Sabazia (RM)', lat:42.0926441 , lon:12.2698934 },
        {date:'26/07', title:'Colonia Sonora', place:'Collegno (TO)', lat:45.0777469 , lon:7.5703792 },
        {date:'16/08', title:'Sagra del Raschera', place:'Frabosa Soprana (CN)', lat:44.2887047 , lon:7.8062304 },
        {date:'11/10', title:'Greenage Festival', place:'Rivoli (TO)', lat:45.070417 , lon:7.5197683 },
        {date:'30/10', title:'Colonia Sonora', place:'Torino', lat:45.0708515 , lon:7.6843404 },
        {date:'26/11', title:'Pub Bio birre', place:'Santena (TO)', lat:44.9489931 , lon:7.7727553 },
        {date:'17/12', title:'Colonia Sonora', place:'Alessandria', lat:44.9132168 , lon:8.6169507 }
        ],
      2004: [
        {date:'24/01', title:'', place:'Alba (CN)', lat:44.7008623 , lon:8.0352592 },
        {date:'03/05', title:'Festa della CRI', place:'Brossasco (CN)', lat:44.5697037 , lon:7.3628148 },
        {date:'15/05', title:'Festa della birra', place:'Ceretto di Costigliole (CN)', lat:44.5450516 , lon:7.480878 },
        {date:'04/06', title:'Festa della birra', place:'Manta (CN)', lat:44.6168888 , lon:7.4881296 },
        {date:'18/06', title:'', place:'Sondalo (SO)', lat:46.3306135 , lon:10.3268228 },
        {date:'26/06', title:'Festa dell\'associazione "Papa Giovanni"', place:'Fossano (CN)', lat:44.5500053 , lon:7.7237734 },
        {date:'22/07', title:'Folkest', place:'Spilimbergo (PN)', lat:46.1113296 , lon:12.899138 },
        {date:'23/07', title:'Folkest', place:'Spilimbergo (PN)', lat:46.1113296 , lon:12.899138 },
        {date:'30/07', title:'', place:'Saluzzo (CN)', lat:44.6445906 , lon:7.4926037 },
        {date:'05/08', title:'Pub "Re matto"', place:'Venasca (CN)', lat:44.5619703 , lon:7.3961958 },
        {date:'13/08', title:'', place:'Celle Macra (CN)', lat:44.4828555 , lon:7.1806455 },
        {date:'15/08', title:'Festa del tumin dal mel', place:'Melle (CN)', lat:44.5627277 , lon:7.3214478 },
        {date:'18/08', title:'', place:'San Bernardo di Brossasco (CN)', lat:44.5681599 , lon:7.4123045 },
        {date:'20/08', title:'Festa della birra', place:'Scarnafigi (CN)', lat:44.6798703 , lon:7.567037 },
        {date:'24/08', title:'', place:'Pontechianale (CN)', lat:44.6223683 , lon:7.0312836 },
        {date:'26/08', title:'Festa della birra', place:'Moiola (CN)', lat:44.322499 , lon:7.3902419 },
        {date:'11/09', title:'', place:'Isasca (CN)', lat:44.5874376 , lon:7.3808595 },
        {date:'04/12', title:'Bustofolk', place:'Busto Arsizio (VA)', lat:45.6114064 , lon:8.8502715 },
        {date:'18/12', title:'', place:'Torre Pellice (TO)', lat:44.8205758 , lon:7.2236962 }
        ],
      2003: [
        {date:'02/05', title:'Festa della CRI', place:'Brossasco (CN)', lat:44.5697037, lon:7.3628148 },
        {date:'21/06', title:'', place:'Fossano (CN)', lat:44.5500053, lon:7.7237734 },
        {date:'20/07', title:'Festa della birra', place:'Melle (CN)', lat:44.5627277, lon:7.3214478 },
        {date:'08/08', title:'Pub "Re matto"', place:'Venasca (CN)', lat:44.5619703, lon:7.3961958 },
        {date:'20/08', title:'', place:'Venasca (CN)', lat:44.5619703, lon:7.3961958 },
        {date:'28/08', title:'Festa della birra', place:'Moiola (CN)', lat:44.322499, lon:7.3902419 },
        {date:'13/10', title:'Festa d\'Autunno', place:'Piasco (CN)', lat:44.564074, lon:7.4550185 },
        {date:'26/10', title:'Castagnata', place:'Melle (CN)', lat:44.5627277, lon:7.3214478 }
      ]
    },
    discografia: [{
        title: 'Live CPA Firenze SUD',
        year: '2015',
        image: 'discografia-live-cpa-firenze-sud',
        records: 'LT Records'
      },{
        title: 'Finisterre',
        year: '2013',
        image: 'discografia-finisterre',
        records: 'LT Records'
      },{
        title: 'Storia di un impiegato',
        year: '2010',
        image: 'discografia-storia-di-un-impiegato',
        records: 'LT Records'
      },{
        title: 'Que vos lej far',
        year: '2009',
        image: 'discografia-que-vos-lej-far',
        records: 'Folest Dischi'
      },{
        title: 'Réve eternè',
        year: '2007',
        image: 'discografia-reve-eterne',
        records: 'Folkest Dischi'
      },{
        title: 'Lou Tapage',
        year: '2005',
        image: 'discografia-lou-tapage',
        records: 'Videoradio'
      }]
}
