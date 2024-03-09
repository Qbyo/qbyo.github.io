/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.05
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "7th Pluton 'Krayt's Fang' ";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/touhou01.png",
	"backgrounds/images/touhou02.png",
	"backgrounds/images/touhou03.png",
	"backgrounds/images/touhou04.png",
	"backgrounds/images/touhou05.png",
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 10000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = false;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{ogg: "songs/imperialmarch.ogg", name: " "},
	{ogg: "songs/2march.ogg", name: " "},
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 25;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Zakładanie pancerza",
"Czyszczenie hełmu",
"Patrolowanie terenu",
"Przygotowanie do desantu",
"Naprawa urządzeń komunikacyjnych",
"Analiza strategii wroga",
"Naprawa pojazdów bojowych",
"Kalibracja celownika",
"Konserwowanie karabinu laserowego",
"Uzupełnianie amunicji do wyrzutni rakiet",
"Badanie stanu zdrowia żołnierzy",
"Sprawdzanie stanu sprzętu medycznego",
"Przygotowanie medykamentów",
"Szkolenie z pierwszej pomocy",
"Zwalczanie rebelianckiej propagandy",
"Przeszukiwanie domów",
"Rozbrajanie ładunków wybuchowych",
"Niszczenie wrogich pojazdów pancernych",
"Odbudowywanie zniszczonych infrastruktur po bitwie",
"Tworzenie okopów",
"Demontowanie zasiek",
"Uruchamianie silników",
"Wyznaczanie terenu bombardowań",
"Interrogacja podejrzanych o zdradę Imperium",
"Monitorowanie lojalności wobec Imperium"
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
